--- 
layout: post
title: SimpleFeed 2.1 Release, New Maintainer, and a Look at Performance
created: 1213215900
category: drupal
---
<h3>SimpleFeed 2.1</h3>

<a href="http://drupal.org/project/simplefeed">SimpleFeed 2.1 has been released</a>, grab it while it's hot!

This release fixes a number of outstanding issues and greatly improves the robustness of SimpleFeed. Highlighted fixes include:

* Critical update, fixes updating of feed items to use the new unique identifier, before it only made it through 50 items, causing duplicate headaches
* Unique identifier for feed items now relies on a combination of title & link, which will pave the way for updating changed feed item bodies later
* Support for much longer length URLs
* Improved database indices
* Fix expiration of feed items so it can run properly as anonymous user cron


<h3>Hi Matt!</h3>
Additionally, as of this release I'm please to announce that <a href="http://www.mattfarina.com/">Matt Farina</a> (<a href="http://drupal.org/user/25701">mfer</a>) is joining as a contributor to SimpleFeed. He'll be helping us to plow through the issue queue faster and work on a steady Drupal 6 port. Welcome Matt!

<h3>A Quick Look at Performance</h3>
Many people ask "how fast is SimpleFeed" and well it's hard to answer. It depends how you have your Drupal site configured, what type of hardware you're running, how many feeds you are processing, which of these feeds have slow HTTP access times, and the like.

With that said, I took a sample of blogs to measure from <a href="http://www.momblognetwork.com/">MomBlogNetwork</a>, part of the <a href="http://www.parentsclick.com/">ParentsClick Network</a>, which has been by far the largest install and provider of patches/features for SimpleFeed. 

Running some tests, <strong>SimpleFeed 2.1 is processing over 900 blogs a minute</strong> on our setup. This is nearly 380% faster than SimpleFeed 1.0! 

I'll have more benchmarks soon when <a href="http://www.developmentseed.org/">Alex at Development Seed</a> and myself pit a few of the top aggregation systems against each other to find out who really is the speed champ for Drupal aggregation :)
