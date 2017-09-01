---
layout: post
title: I'm a Google Summer of Code Mentor
created: 1148954540
categories: ["drupal"]
---
This summer I'm participating in the <a href="http://code.google.com/soc/">Google Summer of Code</a> program as a mentor for <a href="http://drupal.org">Drupal</a>. There were a ton of applications for projects on improving Drupal, but only <a href="http://drupal.org/node/65244">14 projects</a> were accepted and sponsored by Google, totaling a $70,000 investment on Google's part ($5000 for each project, with $4500 going to the student and $500 to the Drupal project), yay Google!

Together with <a href="http://jeff.viapositiva.net/">Jeff Eaton</a>, I will be co-mentoring <a href="http://scottreynolds.us/">Scott Reynolds</a> as he develops a <a href="http://drupal.org/node/61877">content recommendation engine</a> for Drupal.

This is a very interesting project and I can't wait to get started. The engine will be based on the <a href="http://en.wikipedia.org/wiki/Slope_One">Slope One algorithm</a>. <a href="{{ site.url }}/files/lemiremaclachlan_sdm05.pdf">This attached PDF</a> outlines the algorithm in more detail. Basically, the algorithm works by comparing the rating of two items by user A to the rating of one item by user B, to predict how user B would rate the other item. <a href="{{ site.url }}/files/webpaper.pdf">This second PDF</a> explains how this algorithm can be written using PHP and MySQL, the basis for the Drupal specific engine code.

This module will rely on Jeff's <a href="http://drupal.org/node/36041">VotingAPI module</a> to handle the rating of nodes. From ratings stored about each node for each user, the content recommendation module will be able to predict similar nodes that the user might like to see based on both their voting pattern and the pattern of others. Talk about useful!

Overall, this is a solid summer project and I'm eager to get started. It'll be a bit different acting as a mentor this year, as in the past, I've always been the mentee :-) But it should be rewarding and I hope to learn a lot!
