--- 
layout: post
title: Blueprint Drupal Theme Released
created: 1212595962
---
Well, it took longer than I expected (<a href="http://drupalmao.com/ted-serbinski-interview">announced it a couple months back</a>), but I'm pleased to announce that my <a href="http://drupal.org/project/blueprint">Blueprint Drupal Theme</a> has been released! 

This theme uses the most excellent <a href="http://code.google.com/p/blueprintcss/">Blueprint CSS framework</a> to setup a starter Drupal theme to make theming websites faster and easier, especially in the cross browser area. The benefits of this framework include:
* An easily customizable grid
* Sensible typography
* Relative font-sizes everywhere
* A typographic baseline
* An extendable plugin system
* Perfected CSS reset
* A stylesheet for printing
* Powerful scripts for customizing your layout
* No bloat of any kind

Compared to the <a href="http://developer.yahoo.com/yui/grids/">YUI grid CSS</a>, I find Blueprint simpler and more elegant. I have used both frameworks on various projects and the Blueprint has consistently been easier and faster to work with.

<!--break-->

The goal of this theme is to take many of theming tricks I reuse on site after site and bundle these up, along with properly integrating the Blueprint CSS framework (since Drupal's CSS, is well, not the nicest thing out there ;-)) so no weird/odd CSS defects occur. The result is an amazing (well at least IMHO) starter theme. I used a beta version of this theme to design my **entire** blog in 90 minutues, including image generation & export, cross browser CSS testing, and the like. Not too shabby huh? You can also see origins of this theme at <a href="http://www.mothersclick.com/">MothersClick</a>, <a href="http://www.momblognetwork.com/">MomBlogNetwork</a>, and <a href="http://2guysuncorked.com/">2 Guys Uncorked</a>.

Features in this theme include:
* normalizes Drupal's CSS to be consistent
* properly aggregates all blueprint CSS files into a single file when this setting is enabled
* put scripts at bottom of page for nice performance gains, read more: http://developer.yahoo.com/performance/rules.html#js_bottom
* flexible layout, from 1 to 3 columns, based on where you configure your blocks to show (left, center, right)
* SEO optimization without the need for heavy modules and additional queries per page
** automatically adds META description to many pages, read more: http://googlewebmastercentral.blogspot.com/2007/09/improve-snippets-with-meta-description.html
** automatically adds META keywords if taxonomy exists on that node, read more: http://searchengineland.com/070905-194221.php
* better forum icons, http://drupal.org/node/102743#comment-664157
* improve forum display and performance, http://www.sysarchitects.com/node/70
* prevents duplicate form submissions with jQuery, <a href="http://tedserbinski.com/2007/01/11/how_to_prevent_duplicate_posts">read more</a>
* shows the # of comments below a node since Drupal doesn't do this by default (usability)
* highlight any comments by the author of the node
* adds a "you need to login / register" box below all comments if you can't add a comment (usability)
* supports conditional comment subjects, if the setting is off it won't show a chopped off title of the comment
* uses CSSEdit http://macrabbit.com/cssedit/ comments for grouping of styles
* lots of comments and theming tricks in template.php to learn from :)
A special thanks to <a href="http://freestylesystems.co.uk/">Richard Burford</a> (aka <a href="http://drupal.org/user/93429">psynaptic</a>) who submitted patches and README info and helped debug things :)
