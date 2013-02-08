--- 
layout: post
title: SimpleFeed 2.0 released
created: 1206335559
---
<a href="http://drupal.org/project/simplefeed">SimpleFeed</a> was released a little over 4 months ago and has been working out very well. However, it still wasn't fast enough---at least for me. It could work faster, it could be more efficient. So over the past month or two I've really reworked some of the internal logic, making things much more efficient. I also borrowed a tip from <a href="http://drupal.org/project/feedapi">FeedAPI</a> about hashing entire feeds to check for updates faster and simplified the unique hash of each feed item to be much faster to compute and compare. In addition, taxonomy support is greatly improved (you can now use any type of vocabulary, doesn't have to be just free tagging) and works much more efficiently too. Those changes and more bug fixes are all part of the new <a href="http://drupal.org/node/237960">SimpleFeed 2.0</a>.

Not only that, but Bill has been working on a <a href="http://drupal.org/node/224056">Drupal 6.x port</a> too, so please report any issues so we can get a stable 6.x release out soon too.

Also, the library that SimpleFeed relies on, <a href="http://simplepie.org/downloads/">SimplePie</a> has released a 1.1.1 version which is recommended too.
