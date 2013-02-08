--- 
layout: post
title: SimpleFeed beta released!
created: 1184556342
---
So, ahem, <a href="http://tedserbinski.com/2007/04/19/simplefeed">my earlier post</a> was <em>slightly</em> off. A <a href="http://drupal.org/project/simplefeed">beta release of SimpleFeed</a> didn't come for nearly 3 months, doh! 

But the wait was worth it! The module is significantly faster now <em>(if it wasn't already the fastest Drupal feed parser to begin with)</em>. The leaky memory problem has been fixed, it was related to looping and not reseting the gigantic SimplePie object each time <em>(a result of <a href="http://bugs.php.net/bug.php?id=33595">this PHP bug</a>)</em>. The whole parsing process on the Drupal side has been optimized with robust duplicate checking now. Not only that, but feeds are only processed if they have actually changed, utilizing the ETag for that one. And numerous other bug fixes.

And best of all, today <a href="http://simplepie.org/blog/2007/07/15/simplepie-10-is-here/">SimplePie 1.0 was released</a>! I've been working closely with those developers and was able to sneak in a bug fix literally 1 minute befor the release ;-)

<strong>Please note, there have been numerous database changes, so please recreate your tables</strong>. As stressed on <a href="http://drupal.org/project/simplefeed">the SimpleFeed project page</a> <em>(now updated)</em>, the module was not ready for production use <em>(and probably still isn't, but I'm using it in production :-p)</em>. However, with <a href="http://drupal.org/project/cvs/117881">all the changes over the past few days</a>, I do consider this module now beta quality. All remaining issues are non-critical, and don't require database changes :-)

Myself and Bill are committed to an official 1.0 release sometime in August. After that? Likely version 2.0 will rely on the forth coming <a href="http://drupal.org/project/feedapi">feed API</a> :-)

