--- 
layout: post
title: Hot Swapping of Drupal Themes
created: 1213935446
category: drupal
---
At the <a href="http://www.parentsclick.com/">ParentsClick Network</a> we are soon to be rolling out many more sites on our platform. Because of our unique community API (which I will be detailing in a future post) we are running many sites (many not yet released) on the same install of Drupal, with the same database, and <strong>no shared tables</strong>. Yes, no typos there. More on just how that works in a later post.

One thing we have to do is change the theme based on the URL, along with a host of other things. <a href="http://zivtech.com/blog/fun-with-theme-switching">ZivTech recently posted</a> about changing themes, but for our setup, we need something more low level. Hence this technique.

Edit your <em>settings.php</em> and stick this in at the bottom:

{% highlight php %}
<?php
// if the URL is an administration page
if (strpos($_GET['q'], 'admin') === 0) {    
  $conf['theme_default'] = 'garland';
}
?>
{% endhighlight %}


What this does is tell Drupal to load an entirely different theme then the default one. Bonus points if you noticed the Drupal 5 administration theme bug: it shows the admin theme but if you save any form, the theme switches from the admin one to the default one. The above snippet fixes that.

The only catch? Make sure you initialize this in your system table by visiting the themes page and make sure you theme is in the <em>sites/all</em> directory. Otherwise you can run into some funky issues.

Happy theme hot swapping!
