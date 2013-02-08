--- 
layout: post
title: How to make theming in Drupal easier
created: 1147320153
---
Drupal is an amazing web framework. You can build almost any type of website with it super easily. Just check out <a href="http://www.zacker.org/screencast-drupal-mashup-machine">Zack's screencast</a> for an example of this.

But it's not just point and click, with a plethora of <a href="http://api.drupal.org/api/head/group/hooks">hooks</a>, one can easily create a complex module for Drupal in a  matter of minutes (hours, if you count the time needed for debugging ;-)). And with the new JS library in 4.7, creating Javascript rich modules is quite easy too. Talk about easy programming!

Can we ask for anything else?

Oh wait, we forgot the other half, the design. Ooops. Yeah, that's a bit harder with Drupal. But I think we can make it better.

There are lots of ways to make it better but I want to focus on just one: CSS. 

The CSS in Drupal is more of a hinderence than help most of the time unfortanutly. This is in stark contrast to the rest of Drupal, as everything else is super useful. It tries to set up a standard set of CSS classes but fails in many areas. And it has no help for doing CSS layouts, the focal point of almost all new designs today.

But there is hope. Yahoo has just released their <a href="http://com1.devnet.scd.yahoo.com/yui/grids/">grids CSS</a>. It's basically a library that makes it super easy to create consistent layouts across browsers. In addition to this layout CSS is a <a href="http://com1.devnet.scd.yahoo.com/yui/fonts/index.html">fonts CSS</a> that makes it very easy to specificy consistent fonts and sizes across browsers, along with a <a href="http://com1.devnet.scd.yahoo.com/yui/reset/index.html">reset CSS</a> file that basically normalizes HTML elements and properties across browsers (think same margin and padding for UL elements). How dandy!

So there you have it, 3 CSS files that make it super easy to create a consistent theme across browsers, without having to resort to this same tedious task over and over for each theme.

This is perfect for Drupal.

What I'm proposing is that we integrate these 3, super small, CSS files into Drupal. We'll refactor drupal.css and create a new file, default.css, which houses these default, cross browser styles.

From there, themers would be able to make use of these CSS classes to build website themes much faster, better aligning the time to make a theme with the time to make a module.

But this is only the first step in making theming for Drupal easier... we still need to work on semantic HTML, per module CSS files and so forth, but this is certainly a great start.
