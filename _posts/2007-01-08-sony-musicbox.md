--- 
layout: post
title: Sony Musicbox
created: 1168296697
---
Well I've been so busy with work lately, I haven't had much time to post this blog. Going to try and work on that more this year, maybe as a new after-the-fact New Years resolution, or something to that effect ;-)

But one of the projects that I recently worked on that I can finally talk about is the new <a href="http://musicbox.sonybmg.com">Sony Musicbox</a> website, which actually launched back in November 2006. Sony Musicbox is a website that hosts music videos for all of Sony's artists. Users can come and watch videos, comment & rate them, add them to their favorites, and also add their own tags to videos too. Users can also add friends to their buddylists and write in their very own blog!

I was the lead architect for this project where my primary role was to plan the site from concept to production, along with building most of the website as well.

The site was built using Drupal 4.7, along with a number of performance patches backported from Drupal 5.0. The majority of the site uses only <a href="http://drupal.org/project/cck">CCK</a>, <a href="http://drupal.org/project/imagecache">imagecache</a> & <a href="http://drupal.org/project/imagefield">imagefield</a> modules, and theming logic, and then some custom code to tie all of those together. It's really bare bones in that sense :-) The rest of the site, which is basically just user profiles and community features, also makes use of the <a href="http://drupal.org/project/community_tags">community tags module</a>, <a href="http://drupal.org/project/buddylist">buddylist module</a>, <a href="http://drupal.org/project/privatemsg">privatemsg module</a>, and <a href="http://drupal.org/project/tagadelic">tagadelic module</a>. Add to that mixture a small dose of taxonomy to classify genres of content and some custom regions/blocks for ad management, and and voila, that is the site in a nutshell.

Of couse some of the magic lies in the backend and custom code. Each genre page can be edited by a Sony member, who can chose which videos to feature, all from a slick, AJAX based system. Adding videos is a snap, and all derivative images and links are automatically generated from a few key parameters. They can also easily add new artists and genres as needed, and correspondingly link videos to artists to labels. The rest of the site takes care of everything else and has significantly automated the workflow for the Sony folks :-)

The most interesting aspect of this site is of course the integration with <a href="http://www.brightcove.com/">BrightCove</a>, a web based video hosting website. BrightCove hosts all of the music videos for Sony and provides the flash players for playing music videos by artist, genre, and other custom lists (e.g., Top 40). The integration was fairly simple: all that was needed was the correct BrightCove Artist ID and player ID, and the corresponding links could be generated on the fly based on the video, artist, or genre in question.

You can <a href="http://digg.com/software/Sony_using_Drupal_for_Musicbox">Digg it here</a> as well.

Well that's it for now, I'll have more updates soon about other projects I'm working on :-)
