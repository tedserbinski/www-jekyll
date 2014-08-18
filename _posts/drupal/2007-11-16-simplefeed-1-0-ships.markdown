--- 
layout: post
title: SimpleFeed 1.0 ships!
created: 1195245359
categories: ["drupal"]
---
That's right, <a href="http://drupal.org/project/simplefeed">SimpleFeed</a>, the fastest and easiest to use feed parser for Drupal is finally stable and release worthy!

A few months back (well half a year, but who's counting, it's been a busy summer / fall ;-)), <a href="http://tedserbinski.com/drupal/simplefeed-1-0-ships/">I mentioned a release would be soon</a> but didn't realize it would take so long.

Anyways, here is the run down of the changes since then...

<ul>
<li>Complete rewrite of caching layer, now uses file caching and built in SimplePie methods to cache feeds. This has resulted in <strong>significant performance increases</strong> with a huge drop in memory consumption, an issue that plagued earlier versions of this module.</li>
<li>Better parsing of feeds, working around common issues and annoyances, along with additional performance tweaks</li>
<li>The end of SimpleFeed as an API. It does one thing and does it well: parse feeds. If you want to manipulate them, use hook_nodeapi. If that doesn't do what you want (in most cases it should), then check out <a href="http://drupal.org/project/feedapi">FeedAPI</a>. This change not only simplified things but resulted in further performance increases. I have successfully used hook_nodeapi to manipulate feeds in a number of projects so this route really is the easiest and fastest one, IMO.</li>
<li>Better uninstall routines, along with preserving content so it can be migrated to FeedAPI.</li>
<li>Easily empty all items in a feed, for easy testing.</li>
<li>Automatically generate titles when they don't exist in the feed.</li>
<li>Added token support.</li>
<li>New refresh modes: never & manual. Now you can use hook_nodeapi and hook_cron to write your own routines.</li>
<li>Tons of other bug fixes</li>
</ul>

Indeed this module has matured quite a bit and I'm please to offer it as a 1.0 release now. Tested and working quite well, with one known instance processing over 300+ feeds every 15 min with no problems.

Enjoy!
