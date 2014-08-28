---
layout: post
title: Counting lines of code
created: 1194554268
categories: ["tech"]
---
With <a href="http://www.ohloh.net/projects/3189">Ohloh reporting Drupal core to have roughly 25k lines of code</a>, I was curious to determine how many lines of code were in some of my projects (useful to estimate costs). Finding this out wasn't nearly as easy as I thought and after the past hour+ of Googling, testing, and resting, I found the following command to work the best for counting lines of code in a Drupal project---at least for me on OSX that is. Enjoy!

{% highlight bash %}
find . \( -name '*.module'
  -o -name '*.inc'
  -o -name '*.php'  
  -o -name '*.css'
  -o -name '*.js' \) -exec cat -- {} \; | wc -l
{% endhighlight %}
