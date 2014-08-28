--- 
layout: post
title: "Preventing duplicate posts: part 2"
created: 1180998230
categories: ["drupal"]
---
<a href="http://tedserbinski.com/drupal/how-to-prevent-duplicate-posts/">In a previous article</a>, I wrote about how to use jQuery to remove submit form buttons and replacing it with some "Saving..." text to prevent duplicate form submissions. 

While this works well, it only works about 90-95% of the time--rest of the time the user either reloads the page and resubmits or has JavaScript off.

Then what do you do?

Well I originally helped write a patch to prevent duplicate form submissions in Drupal 5 and it lived for a bit but was recently removed because of the complexity and breakage it introduced. And it didn't work all the time either I discovered :-)

And now, as <a href="http://www.mothersclick.com">MothersClick</a> is growing quite fast, we're hitting this duplicate issue a couple times, which is greatly exacerbated by our integration with groups and email notifications--a duplicate post is now a duplicate email, eek!

So here's how I solved it for our site. Create a new module for your site, and use [hook_nodeapi](http://api.drupal.org/api/5/function/hook_nodeapi) and [hook_comment](http://api.drupal.org/api/5/function/hook_comment) to catch duplicates before they are saved into the database.

Here's the code for hook_nodeapi:

{% highlight javascript %}
/**
 * Implementation of hook_nodeapi().
 */
function YOUR-MODULE_nodeapi(&$node, $op, $teaser, $page) { 
  switch ($op) {  
    case 'validate':
      // find a duplicate node of the same type with the same title
      // compare the created time of the duplicate node to now, if it is within the past 6 minutes this is very likely a duplicate
      $duplicate = db_result(db_query("SELECT nid FROM {node} WHERE type = '%s' AND title = '%s' AND (created >= %d - 360) LIMIT 1", $node->type, $node->title, time()));

      if ($duplicate > 0) {
        // since is most likely a duplicate, set an error so a duplicate isn't created
        form_set_error('title', t('<a href="!url">A duplicate entry has been found</a>. This usually results from clicking the submit button more than once. If you are having trouble, please <a href="!contact">contact us</a>.', array('!url' => url('node/'. $duplicate), '!contact' => url('contact'))));
      }

      break;     
  }
}
{% endhighlight %}

And the code for hook_comment:

{% highlight javascript %}

/**
 * Implementation of hook_comment().
 */
function YOUR-MODULE_comment($a1, $op) {
  switch ($op) {
    case 'validate':
      // find a duplicate comment with the same body, since the subject is not required
      // compare the timestamp of the duplicate comment to now, if it is within the past 6 minutes this is very likely a duplicate
      $duplicate = db_result(db_query("SELECT cid FROM {comments} WHERE nid = %d AND comment = '%s' AND (timestamp >= %d - 360) LIMIT 1", $a1['nid'], $a1['comment'], time()));

      if ($duplicate > 0) {
        // since is most likely a duplicate, set an error so a duplicate isn't created
        form_set_error('comment', t('<a href="!url">A duplicate entry has been found</a>. This usually results from clicking the submit button more than once. If you are having trouble, please <a href="!contact">contact us</a>.', array('!url' => url('node/'. $a1['nid'], NULL, 'comment-'. $duplicate), '!contact' => url('contact'))));
      }

      break;
  }
}

{% endhighlight %}

While this isn't a 100% guarantee to stop duplicate content, it is now stopping all duplicate content we have seen--and, what makes a better usability test case than your mom? :-)

And while you're at it, why not add a nice performance boost to your site? <a href="http://drupal.org/node/149339">Remove comment modules duplicate SQL check</a> since it actually doesn't do anything but produce a watchdog warning, which isn't helpful.

Should this go into Drupal 6? Well yes, but this might not be most optimal generic solution for everyone, but for <a href="http://www.mothersclick.com">MothersClick</a> and my related projects, it's good enough for me :-)
