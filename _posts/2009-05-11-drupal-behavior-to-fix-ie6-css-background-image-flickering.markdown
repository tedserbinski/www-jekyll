--- 
layout: post
title: Drupal Behavior to Fix IE6 CSS Background Image Flickering
created: 1242025538
category: drupal
---
When the new <a href="http://tedserbinski.com/tags/portfolio/mylifetime-community-launches">myLifetime community launched</a> we wanted to focus on performance, and one trick was to minimize HTTP requests by using the CSS sprites technique. For a great run down of this technique and examples of other major sites using this, <a href="http://www.smashingmagazine.com/2009/04/27/the-mystery-of-css-sprites-techniques-tools-and-tutorials/">check out this resource on Smashing Magazine</a>.

Double checking this implementation with <a href="http://developer.yahoo.com/yslow/">YSlow!</a> everything was working great.

Well almost. Then we tried IE6. <a href="http://blog.hugsformonsters.com/post/87657240/overly-judgemental-ie6-splash-pages">I hate IE6</a>.

Then I discovered <a href="http://misterpixel.blogspot.com/2006/09/forensic-analysis-of-ie6.html">this excellent post detailing IE6 and its BackgroundImageCache usage</a>.

After trying that JS trick, we noticed the page was significantly faster & smoother in IE6. With heavy CSS sprite usage this was a necessary fix. And with future sites in the works with this same technique, seems like a reoccurring fix.

To Drupal-ize & jQuery-ize this fix for resuability, I wrote this simple behavior below that works with Drupal 6. You can see in action on the <a href="http://mylifetime.com/community">myLifetime community</a>.

{% highlight js %}
/**
 * Fix flickering background images in IE.
 */
Drupal.behaviors.fixIEFlickr = function() {
  if (jQuery.browser.msie) {
    try { 
      document.execCommand('BackgroundImageCache', false, true); 
    } catch(err) {}
  }
};
{% endhighlight %}

May this code save you a few hours/days of head banging! 

