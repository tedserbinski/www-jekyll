--- 
layout: post
title: Creating an Alpha Pager with Views 2 and Drupal 6
created: 1219360097
category: drupal
tag: top
---
<div class="alert alert-error">UPDATE: <a href="http://tedserbinski.com/tags/drupal/creating-alpha-pager-with-views-2-and-drupal-6#comment-3478">Earl comments below</a> how this is already built in. Two different ways to achieve a similar result, each with their own pros/cons.</div>

Hats off to <a href="http://www.angrydonuts.com/">Earl Miles</a> and the rest the <a href="http://groups.drupal.org/views-developers">views developers</a> they have done a tremendous job with Views 2. While the interface is entirely different from that of Views 1, it is so much more intuitive that within a few minutes I had quickly forgotten my bewildered "oh no, I know nothing" look :)

From reading all of the docs and quietly watching development commits, I knew Views 2 was going to eliminate a lot of the Views 1 helper modules and open up a whole new world of awesomeness. While I haven't seen many blog posts detailing just which functionality/modules have been replaced with Views 2, I wanted to kickstart things with my own discovery as I played around with Views 2 quite thoroughly this afternoon.

With Views 1, to build an alpha pager you would use the <a href="http://drupal.org/project/views_alpha_pager">views alpha pager module</a> in conjunction with your view. But what about Views 2?

Well it's not so straightforward. I read somewhere about some sort of "glossary" view, but how could that be used to create an alpha pager? Well turns out, quite easy. Here's how:

<ol>
<li>First, create a new page view and set your path to "directory"</li>
<li>Assuming you want your pager to be based on the nodes title, add in an argument: "Node: Title"</li>
<li>Set title equal to: "Directory: %1"</li>
<li>Action to take if argument is not present: "Display all values"</li>
<li>Check "Glossary Mode"</li>
<li>Set character limit to "1"</li>
<li>Case: "upper case"</li>
<li>Case in path: "lower case"</li>
<li>Save and update</li>
<li>Add in a header under basic settings</li>
<li>Set up your alpha pager:
{% highlight html %}
<div class="alpha-pager">
  <a class="alpha-page" href="/directory/a">A</a>
  <a class="alpha-page" href="/directory/b">B</a>
   ... 
</div>
{% endhighlight %}
<em>Note: if you have PHP filter enabled, you can set up proper links using l(), otherwise use basic HTML</em>
</li>
</ol>

And voila! You can now browse by starting letter of each node. Add in a few more exposed filters like taxonomy terms or search and you have a powerful directory!

That was definitely easy and Views 2 replaces its first helper module. What's next? :)
