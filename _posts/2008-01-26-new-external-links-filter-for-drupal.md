--- 
layout: post
title: New external links filter for Drupal
created: 1201402351
---
<strong>Update: <a href="http://drupal.org/node/214805">version 2 has been released</a> that fixes some bugs and adds new features.</strong>

More than a year ago, <a href="http://tedserbinski.com/2006/10/08/new_olf_module_released_from_sf">I released an outgoing links filter (OLF)</a> for Drupal. This module worked well and added a CSS class to outgoing links.

<a href="http://www.flickr.com/photos/tedserbinski/2222238542/" title="Screenshot of external links filter for Drupal by m3avrck, on Flickr"><img src="http://farm3.static.flickr.com/2409/2222238542_212e539159_m.jpg" width="240" height="81" alt="Screenshot of external links filter for Drupal" align="left" hspace="10" /></a>

However, I didn't touch the module for more than a year (it only worked in Drupal 4.7!) and it kind of faded away... until, today!

In keeping current with more widely used lingo, <a href="http://drupal.org/project/elf">I decided to create an external links filter (ELF)</a> that worked in Drupal 5, had nifty icons, and was all around more robust.

So why is this better than other modules that do this?
<!--break-->

Well there are a couple reasons. Other modules, like <a href="http://drupal.org/project/extlink">External links</a> rely on Javascript to find external links. This is not the best choice because:

* It will find **all** external links on a page, what about ones that appear in main menus, images, and more? Might produce some odd results.

* The page has to be loaded and the DOM parseable before it can find links. Therefore, a user could notice a delay on a page with tons of links, and worse, the page could look jittery as CSS is applied as links are found in realtime.

* Depending on how the site is loaded (Google cache, iframe) you could end up with weird results since the Javascript doesn't know the correct URL anymore.

* Parsing can't be cached.

While there are many valid reasons to use this module (it is still written very well), it is in my opinion that a more optimal approach would be to rely on Drupal's filtering system.

This way you can find external links on only the content you want (e.g., switch filters, configure them differently) and the page loads with the CSS class already applied to all links, so that your CSS and JS can take affect right away, with no lag, and doesn't eat up a user's browser resources parsing links.

And with that, I announce <a href="http://drupal.org/project/elf">the new elf module for Drupal</a>. If anything, it should get bonus points for the name :-)
