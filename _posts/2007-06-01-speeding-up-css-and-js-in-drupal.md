--- 
layout: post
title: Speeding up CSS and JS in Drupal
created: 1180715330
---
Whoohoo! <a href="http://drupal.org/node/119441">My JS aggregation patch</a> has finally made it into core to join my other CSS preprocessor patch :-)

With both of those in, is there anything else we can do to still improve the speed and loading time of CSS and JS in Drupal?

You betcha! The next and final phase is to now gzip these aggregated files and <a href="http://drupal.org/node/101227">the issue is ready</a>, just needs an actual patch for core now.

With 4 more weeks, I hope we can get this final phase in.

I also want to get in some general improvements to drupal_add_css() and drupal_add_js() to support *weights* instead of the clumsy "type" for sorting, along with support for absolute paths, useful when yo have a static file server.
