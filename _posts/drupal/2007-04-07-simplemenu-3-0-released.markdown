--- 
layout: post
title: SimpleMenu 3.0 released!
created: 1175926622
categories: ["drupal"]
---
Finally, the much anticipated <a href="http://drupal.org/project/simplemenu">SimpleMenu 3.0</a> is finally out!

Brand new is an entire rewrite of the jQuery menu code and CSS. The menu code is now based on <a href="http://users.tpg.com.au/j_birch/plugins/superfish/">Superfish</a> which is an "an enhanced Suckerfish-style menu plugin for jQuery" written by Joel Birch. This new version most notably adds a hover delay on menu display, giving those fast-moving hands a breather this time around--that's right, those submenus don't disappear right away any more, much easier to use :-)

Additionally, I've rewritten it to remove the unnecessary AJAX callback, I'm not even sure why it was there to begin with, ah well. That drastically speeds up the menu now and reduces flicker.

There have been other bug fixes as well, along with improved cross browser support and much nicer RTL support for those that need it.

Cleaned up the code a bit too.

All around, a solid release that fixes everything I've meant for this module to do from the start.

So what's next? Well I'm talking with the developer of <a href="http://drupal.org/project/admin_menu">Administration Menu</a> about a merger of our modules, so stay tuned for details!
