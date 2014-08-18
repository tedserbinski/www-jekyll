--- 
layout: post
title: Menu bar 2.0, released from Belgium!
created: 1158759556
categories: ["drupal"]
---
A little less than one month ago, <a href="http://tedserbinski.com/drupal/drupal-admin-menu-bar-released/">I released version 1.0 of my Drupal admin menu bar</a>. 

Today, here at <a href="http://conferences.oreillynet.com/euos2006/">EuroOSCON 2006 in Belgium</a>, I am pleased to announce that version 2.0  of <a href="http://drupal.org/project/menu_bar">Menu bar for Drupal</a> is now out--a full blown module, fully contained, no more theming hacks necessary :-)

So what's new? Here's a short list:

<ul>
<li>Self contained module that can be turned on and off</li>
<li>Access permissions for viewing the entire menu</li>
<li>Better devel module integration--new option to turn links on and off</li>
<li>Optionally choose which menu to show in the menu bar</li>
<li>Auto menu expansion on the fly--no need to expand your menu, the code automatically grabs the full menu without actually modifying your current menu structure</li>
<li>New menu effects thanks to <a href="http://jquery.com">jQuery</a></li>
<li>Improved menu item widths</li>
</ul>

However, there is one caveat (isn't there always?). <strong>This module is for Drupal 5.0 only</strong>. Why's that? Well it relies on jQuery which is now in core for Drupal 5.0. It also relies on another small improvement to 5.0 for sharing data between PHP and JS code. In short, making it work for 4.7 is a bit more of a hassel and code I do not want to maintain. Hence the 5.0 version :-)


