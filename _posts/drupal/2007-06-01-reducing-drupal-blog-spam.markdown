--- 
layout: post
title: Reducing Drupal blog spam
created: 1180679969
categories: ["drupal"]
---
Spam&mdash;we all hate it and it's not just for email anymore, hello Drupal comment spam.

To determine what is effective at preventing Drupal spam, I decided to run a little case study when I redesigned this site and the following are the conclusions I drew from trying a number of different combinations:


<ol>
<li>A Drupal 5 site that allows anonymous user comments will be consumed by spam. I was receiving over 500 spam comments a day on this site.</li>
<li>Changing the comment settings to *force* a comment preview for anonymous users reduced spam by 80%, but I was still seeing around 100+ a day.</li>
<li>Adding in the <a href="http://drupal.org/project/captcha">captcha module</a> reduced spam even further by about 90%, to only a dozen or so.</li>
<li>To catch the remaining spam, I added in the <a href="http://drupal.org/project/akismet">Akismet</a> module which was then able to filter out the remaining 98-99% of spam, with only possibly 1 or 2 every few days slipping by.</li>
</ol>

Of course, if I forced my users to signup and verify their accounts I probably wouldn't have much of a spam problem to begin with, but why should I put that extra burden on my users? :-)

Leave your comments, but eat your own spam :-)
