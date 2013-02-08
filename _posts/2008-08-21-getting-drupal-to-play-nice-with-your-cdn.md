--- 
layout: post
title: Getting Drupal to Play Nice with Your CDN
created: 1219347022
---
<br>
<div style="background:#ffc;font-weight:bold;padding:3px;">Note: A better version of this patch is going into Drupal 7. <a href="http://drupal.org/node/499156">View the issue/patch here</a>.</div>
<br>

Getting Drupal to play nice with your <a href="http://en.wikipedia.org/wiki/Content_Delivery_Network">CDN</a> can be a bit of a hassle. You have to make sure your assets (like JS, CSS, and image files) work not only on your webserver but when copied to the CDN, are served from there instead of your webserver. There is one Drupal module, the <a href="http://drupal.org/project/cdn">CDN module</a> that attempts to make this a bit easier but right now, it's not in production, and in my opinion, is a bit too complicated. There is a slightly easier way :)

<!--break-->

Depending on which CDN you decide to go with you'll want to make sure it offers HTTP synchronization. What this means is you don't have to manually upload files to your CDN--if they don't exist on the CDN, it will check your website for the file and download it through HTTP, putting it on the CDN. This works using some DNS magic. 

For the <a href="http://www.parentsclick.com/">ParentsClick Network</a> we chose to go with <a href="http://www.limelightnetworks.com/">Limelight Networks</a> as our CDN provider. We configured out DNS so that we would have 2 static domains for performance (<a href="http://yuiblog.com/blog/2007/04/11/performance-research-part-4/">Yahoo discusses the benefits of 2 CDN domains</a>): static1.pcncdn.com and static2.pcncdn.com. To roughly split which assets are served from which domain, we set anything that is CSS defined (whether the file itself, or any image defined as a url() within the file) as static1 and then any JavaScript or image as static2. We also chose a different domain for our CDN so that we could <a href="http://yuiblog.com/blog/2007/03/01/performance-research-part-3/">send assets without the cookie overhead</a>. 

When you request a file that <strong>isn't</strong> on the CDN, it checks the fallback domain, which in our case, is parentsclick.com, and grabs the file from there, putting it on the CDN for you in realtime (in my tests, I didn't even notice a delay, even using a 1MB zip file). This is all setup within our Limelight account.

So now that we're sycning properly with the CDN, the next step is fix the URLs in Drupal. Of course, you don't always want to use your CDN -- especially during development, so you need a way to quickly turn this on and off. 

First up, you need to patch Drupal, see the attached patch that fixes hardcoded paths for CSS, JS, and images. You'll see that I'm using two defines: static1 and static2. In our settings.php, we added:

<code>
global $enable_cdn;
if ($enable_cdn) { 
  define('static1', 'http://static1.pcncdn.com');
  define('static2', 'http://static2.pcncdn.com');
}
else {
  define('static1', '');
  define('static2', '');  
}
</code>

We chose to use a global variable here. Your setup may be better off with a variable, a define, or something else. Then all you need to do is set $enable_cdn = TRUE to turn it on or FALSE to turn it off.

In my opinion, this functionality should really be baked into Drupal 7 and a patch woudn't be too hard. Having a way to configure this under the performance section and being able to specify up to 2 domains to use would be great. If I have some time later I'll work on a patch but if someone beats me to it, please let me know!
