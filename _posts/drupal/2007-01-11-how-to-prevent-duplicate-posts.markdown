--- 
layout: post
title: How to prevent duplicate posts?
created: 1168543857
categories: ["drupal"]
---
So one of the problems with Drupal (and well just about any other website out there) is the fact that it is quite easy to post forms more than once. Why do you think ecommerce sites take such huge precautions for preventing multiple form submissions?

In the case of Drupal, this can be quite annoying, especially for those running sites with huge user bases, all of which have varying speeds of internet connections and all of whom like to click that "submit" button more than once.

Can this be fixed? You bet, have a look <a href="http://drupal.org/node/107358">at this issue I've created</a>. It points out the fact that there exists a contributed module that prevents duplicate form submissions, so why can't this be built into core? Now that core supports tokens for forms as of 4.7.4, this would make such a patch all that much easier. Add in some logic to keep track of these tokens for each user's session and then hopefully no duplicate postings. However, easier said than done--have you ever looked at the code in form.inc? Makes my head spin! I tried for a while to get a patch to work but no luck. Hopefully someone will fix that soon though :-)

In the mean time, and also to serve as a useful supplement if that patch lands in core, I've come up with a jQuery solution that works quite well. Now I know you're thinking this must be some sort of use of <code>this.disabled=true;</code> but if you've thought that, then you're wrong. This won't work in Drupal because Drupal relies upon the value of the submit button (e.g., does it say "submit", "delete", "preview", etc.) setting that to disabled causes the value of the button to be submitted as null and then Drupal doesn't know how to handle the form (works well for simpler systems like Word Press though).

How can we get around this? What if we could just hide the button entirely... so it can't even be clicked. But that's not too useful to the user, there should be some feedback, like for instance "Waiting for response..." to let them know the form has been submitted and their browser is waiting for a response. 

Here's the code to do that:

{% highlight javascript %}
  // don't allow users to post content more than once
  $(document).ready(function() {
    $('input[@type=submit]').click(function() {
      $(this).siblings('input[@type=submit]').hide();
      $(this).hide();
      $('<p class="loading">Waiting for response...</p>').insertAfter(this).slideDown('fast');
    })
  })
{% endhighlight %}

What this does is find any submit button, then hides that submit button and any submit buttons next to it (e.g., hiding the "preview", "submit", "delete" trio). It then repalces those buttons with some text saying "Waiting for response...". Add in some nice CSS formatting, along with a CSS background loading image (I recommend a <a href="http://www.ajaxload.info/">nifty AJAX loading animation</a> ;-)) and presto, no more duplicate forms!

Well, unless the user has JS turned off... but that's why you should help and make <a href="http://drupal.org/node/107358">this patch for Drupal</a> happen :-)
