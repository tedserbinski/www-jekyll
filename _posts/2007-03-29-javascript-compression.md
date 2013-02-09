--- 
layout: post
title: JavaScript Compression
created: 1175193743
category: drupal
---
As I was re-rolling my <a href="http://drupal.org/node/119441">JS aggregation patch for Drupal</a>, I stumbled upon an interesting solution to an age old problem I've encountered numerous times.

When I write various JavaScript files for websites, I often like to serve them out compressed---not only to save on bandwidth but also to speed up the loading time for users. To accomplish the task of compressing JavaScript files, I usually resort to using tools like <a href="http://alex.dojotoolkit.org/shrinksafe/">Dojo ShrinkSafe</a> and <a href="http://dean.edwards.name/packer/">Dean Edward's packer</a> (the same compression that jQuery uses as well).

The basis of these compressors is to remove unneeded whitespace, optional characters, and in the case of packer, simplify variable names and function names for maximum compression.

The downside of this, is that your JavaScript must be well-formed, otherwise you'll get all sorts of weird errors when you try to used the compressed version.

While I have had great success with these tools, I often find myself encountering an error or two I just can't resolve, so I end up sticking with the <strong>non</strong>-compressed JavaScript file. And while working on the patch for Drupal, I was running into the same issue. Why didn't some of Drupal's JavaScript files want to compress nicely?

Well, it turns out the solution is simple and involves adding in an optional semi-colon. Here is the example:

{% highlight javascript %}
var foo = function bar() {
  // do something here
};
{% endhighlight %}

See it? That last semi-colon there is optional and any JavaScript will run fine without. But as soon as you go and try and compress your JavaScript file, you'll be seeing some funky errors about a missing ";". 

The reason for this is that during the compression, all of the JavaScript is merged onto one line. As such, variables need a closing semi-colon to signify the end of their declaration. 

Adding these back in to all of Drupal's JavaScript and re-running the compressor, everything started working :-)

Hope this saves you some head banging time, enjoy!
