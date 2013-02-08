--- 
layout: post
title: How to Save and Archive Your Geocities Account (with jQuery + Firebug)
created: 1246950016
---
Back in the late 1990s, <a href="http://en.wikipedia.org/wiki/GeoCities">Geocities</a> was all the rage and free 2MB of space for hosting your website rocked. It was in 1997 that I first put my own websites online and Geocities made it very easy to host.

Fast-forward 12 years and the <a href="http://www.techcrunch.com/2009/04/23/yahoo-quietly-pulls-the-plug-on-geocities/">doors are closing</a>. Geocities has offered <a href="http://help.yahoo.com/l/us/yahoo/geocities/close/close-01.html">some help & tips</a> but for the most part these are lacking on how to easily download and save all of your files (that is if you're on the FREE account). You really want me to "Save page as" with my browser? I'll lose all the meta info with my files and what about all of those images or files I stored? No way to easily navigate to those, especially when there are 100s of files.

Well here's a handy trick to get this working.

<!--break-->

Grab this bookmarket: <a href="javascript:var%20s=document.createElement('script');s.setAttribute('src',%20'http://jqueryjs.googlecode.com/files/jquery-1.3.2.min.js');document.body.appendChild(s);s.onload=function(){/*Your%20Code%20Here*/};void(s);">jQuerify</a> and drag it to your bookmarks. This is an updated version of <a href="http://ejohn.org/blog/hacking-digg-with-firebug-and-jquery/">John Resig's jQueryify bookmarklet</a>, changing the source URL of jQuery to match the one listed on jquery.com.

Visit your Geocities account and the filemanager page. Once on a listing of files, click on the above bookmarklet, then use Firebug to execute the following code:

<code>
var o = '';
$("form[name=dispfiles]")
  .find("a:contains(View)")
  .each(function(i, val) { 
    o+= 'wget '+ val.href +';'; 
  });
console.log(o);
</code>

This will output to your Firebug console a "wget" command of all the files. Simply open up terminal in Linux/Mac (Windows try <a href="http://cygwin.com/">Cygwin</a>) and copy and run the command.

Voila! All your files downloaded. And all of the meta information (like created date) are captured too. Wow files from March 1997 -- are those antiques yet?? :)

The one caveat is you have to manually create your folders. Other than that, this works well and in a few minutes I had a backup of hundreds of files. Sure it's the not cleanest hack, but it worked well for a few minutes of work :)
