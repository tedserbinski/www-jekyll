---
layout: post
title: "Website Crashes IE8 Browser with sysfader.exe Exception "
created: 1257969060
---
<a href="http://tedserbinski.com/files/ie8-sysfader-exe.jpg" target="_blank"><img src="http://tedserbinski.com/files/ie8-sysfader-exe.jpg" style="float:left;margin:0 6px 6px 0;width:283px;height:198px" /></a> So here's what may be a crazy new IE8 CSS bug that can be triggered under the right circumstances. At <a href="http://www.mothersclick.com">MothersClick</a> we started to get a few bug reports about "my browser crashing" when viewing the site. As hard as we could try, we couldn't get the site to crash any of the browsers we tried. Then with a brand new, clean install of IE8, <a href="http://www.nickrobillard.ca">Nick Robillard</a> was able to get the site to crash and we finally had a reproducible crash on our hands.

My first reaction: WTF. (maybe <a href="http://www.flickr.com/photos/starfeeder/3610592681/in/photostream/">these should be updated to be just IE in general</a>)

My second reaction was the cause of this must be some sort of JavaScript or <a href="http://jquery.com">jQuery</a> selector gone awry. Maybe even the <a href="http://www.dillerdesign.com/experiment/DD_belatedPNG/">IE PNG fix</a>. But with JavaScript disabled, site was still crashing.

That meant it had to be some obscure HTML or even CSS? Reminds of <a href="http://seo2.0.onreact.com/top-7-ways-to-crash-internet-explorer">1 line IE6 bombers</a>.

With much digging around we finally found it: a lone CSS3 selector that <a href="http://msdn.microsoft.com/en-us/library/cc351024%28VS.85%29.aspx">Internet Explorer has supported since version 5</a> crashing the site:

{% highlight css %}
word-wrap: break-word; /* A very nice CSS3 property, well not always */
{% endhighlight %}

Removed that and voila, no more crashing!

But that doesn't make sense. That selector works on other sites, why not <a href="http://www.mothersclick.com">this one</a>?

Looking through the CSS and HTML my hypothesis is:

<div class="alert alert-info">Some combination of floated elements, with relative positioning, and background images, in conjunction with the word-wrap CSS property applied to text within those elements, triggers some sort of cosmetic IE meltdown</div>

While this hypothesis isn't really that exact and no where near as comprehensive as the excellent cross browser bug reports at <a href="http://positioniseverything.net/">Position Is Everything</a>, I hope it gives someone else enough ammo to figure out the basic use case that triggers this. I don't think I have any hair left to proceed to figure out why :)
