---
layout: post
title: Drupal admin menu bar released
created: 1156480172
categories: ["drupal"]
---
<img src="/files/admin_menu_screen.png" class="pull-right" style="border:1px solid #000" />One of the biggest problems I run into when creating Drupal sites is a proper admin theme. Sure, there are various techniques to have a different admin theme, but often I want to integrate that into the current design. Many times that is ok, but the real problem was the admin menu--where the heck could I place it, it often didn't fit the design I was working on.

Well I thought about it a bit, then I took some HTML, theming logic, and a bit of CSS (and JS to help out our IE friends), and voila, an <a href="{{ site.domain }}/files/admin_menu_screen_full.png">admin menu bar for Drupal</a> that doesn't interfere with your design.

The admin menu bar is a semantic list of links styled with CSS and uses the position: fixed property to always appear at the top of the page (except in IE, because well, yeah you know :-)). It uses the :hover property to create the cascading menu effect and for you IE folks, there is some JS to emulate this.

So have a download and let me know what you think. This is for Drupal 4.7.

And be sure to <strong>READ</strong> the README.txt, it has all you need to know.
