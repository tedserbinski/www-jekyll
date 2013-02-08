--- 
layout: post
title: Automatically Extracting Tags from Nodes
created: 1258765856
---
Automatically tagging content is becoming easier with services like <a href="http://opencalais.com/">OpenCalais</a> and <a href="http://developer.yahoo.com/search/content/V1/termExtraction.html">Yahoo Terms Extractor</a>, offering their APIs for free semantic analysis of content. There's even a great Drupal module, <a href="http://drupal.org/project/autotagging">Auto Tagging</a> (with <a href="http://www.workhabit.com/labs/autotagging-content-drupal">a great writeup on usage</a>) that ties these services together and makes it even easier.

However, there is still one common issue with these services: they really need nicely written, rich, keyword dense articles to produce the most logical, semantic tags.

Try any of those services with user generated content and you'll see a common tag each time around: FAIL.

We experimented with over 20,000 pieces of content on <a href="http://www.mothersclick.com">MothersClick</a> and our results showed that these semantic services weren't producing quality & relevant tags: rather, we were getting very little, if any relevant tags for our user generated content. 

After a little more trial and error, I then noticed a simple pattern: more often than not, the title to a user's post usually had the most applicable keywords to what their post was about, rather than the body of the post.

So how to extract just the keywords and make tags from the title of a node?
<!--break-->
Well, taking each word in the title could work, but that would also include a bunch of words like "a, an, the, with" etc.. The more technical term for those words is <a href="http://en.wikipedia.org/wiki/Stop_words">stop words</a> and luckily with some Googling, there are some nice stop word lists out there for filtering.

Attached below is a simple JavaScript function for removing stop words from a string. Once the stop words are removed, you're left with an array or string keyword candidates. Plug this into your tagging system and you're off to a nice set of automatically generated tags. While not perfect, for user generated content these do work fairly well.

If you're using Drupal and the <a href="http://drupal.org/project/active_tags">active tags module</a>, you can use the following code to automatically insert these suggested tags for the user as they create a piece of content.

<em>Note: there is some extra code that strips non-alphanumeric characters and makes things lower case as well, this could be removed/changed based on your site's requirements</em>

notextile.. <code>
/**
 * Automatically determine Drupal taxonomy tags based on the user entered form title.
 */
Drupal.behaviors.autoTag = function() {
  var tagged = false;
  $("#edit-title").blur(function() {
    // only process this once to prevent tag oddness
    if (!tagged) {
      var words = ($(this).val()).split(" ");
      $.each(words, function(i, val) {
        // strip anything nonalphanumeric & make lowercase
        val = val.replace(/[\W]+/g,"").toLowerCase();
        // trim just in case of excessive spacing
        val = $.trim(val);

        // if this isnt a stopword add it as a tag
        if (!isStopWord(val)) {
          // add this to the first active tags enabled
          activeTagsAdd(Drupal.settings.active_tags[0], val);
        }
        activeTagsUpdate(Drupal.settings.active_tags[0]);
      });
      tagged = true;
    }
  });
};
</code>

While not perfect, we have found that this simple technique has resulted in quite an improvement in helping our users tag content, which when you consider the busy mom lifestyle, is a feat in and of itself! :)
