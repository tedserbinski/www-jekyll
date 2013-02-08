--- 
layout: post
title: "My latest patch: fixing links and breaking modules"
created: 1147995981
---
<a href="http://drupal.org/node/18260#comment-99325">My latest patch</a>, based on work originally started by <a href="http://bler.webschuur.com/">BÃƒÂ¨r</a>,  was just <a href="http://drupal.org/cvs?commit=32145">committed today</a>. It expands on BÃƒÂ¨r's work by not only giving structure to hook_link items, but also to menu items returned from menu_primary_links() and menu_secondary_links(). It also introduces a new hook_link_alter() in the fashion of hook_form_alter(). Additionally, the syntax is influenced by forms api and I threw in a bunch of tweaks to make it very useful, like automatically adding class names to links, the #1 theme problem I run into over and over again.

If you want more details, read up on <a href="http://drupal.org/node/64279">the docs I wrote (first 3 items)</a> or check out the article I wrote about <a href="http://www.lullabot.com/node/91">the practicalness of this patch</a>.

So what's next? Well I'd like to see theme('links') return an actual list of links instead of a crummy string, so perhaps that...
