--- 
layout: post
title: Preventing Drupal from Handling 404s for Performance
created: 1216182555
---
The .htaccess file included with Drupal tells Apache to send all 404 requests to Drupal to handle. While this is great in some cases, the performance degradation can have a huge impact on a site that has millions of users.

When Drupal processes a 404, it has to bootstrap Drupal, which includes Apache loading up the PHP process, gathering all of the Drupal PHP files, connecting to the database, and running some queries. This is quite expensive when Apache can be told to simply say "Page not found" without having to incur any of that overhead.

Now you might say your site doesn't have any broken URLs as you haven't changed any. Well that's great, but as your site grows, it is going to be a target for spammers and hackers. They are going to start requesting all sorts of file to see if they can find an exploit. Instead of bootstrapping Drupal each time to tell them that DLL file doesn't exist, it would be much better if Apache could just say that, to save resources for your real users.

So, what can you do? How can you stop Drupal from handling 404s but not break modules like imagecache?
<!--break-->
<a href="http://drupal.org/project/imagecache">Imagecache</a> is one of the few modules that relies on Drupal's 404 handling. It is a very smart module that automatically resizes images. Instead of resizing every single image as they are uploaded, it only resizes them when they are requested, which is great. So if we're going to tell Drupal not to handle 404s, we need to be careful not to break this highly useful module.

To see this in action, visit the <a href="http://www.parentsclick.com">ParentsClick Network</a> and test out some 404s. You'll notice that 404s for <a href="http://www.mothersclick.com/this-file-not-found.css">files</a> and <a href="http://www.mothersclick.com/no-path-here">Drupal paths</a> show the same page. The following is the procedure we used to prevent Drupal from handling 404s.

<strong>A note, this functionality should really be in core, and <a href="http://drupal.org/node/76824#comment-817492">this patch</a> is where the necessary .htaccess code used below comes from, only being slightly modified to prevent Drupal from handling 404s completely. The below code is tested and working on Drupal 5</strong>.

<h3>Step 1 - Update your .htaccess file</h3>
<code>
- ErrorDocument 404 /index.php
+ ErrorDocument 404 /sites/all/themes/foundation/404.php # path to your 404 file

+  RewriteCond %{REQUEST_FILENAME} !-f
+  RewriteCond %{REQUEST_URI} !^/files/ # this makes it work with imagecache
+  RewriteCond %{REQUEST_URI} \.(png|gif|jpe?g|s?html?|css|js|cgi|ico|swf|flv|dll)$
+  RewriteCond %{REQUEST_URI} !^404.%1$
+  RewriteRule ^(.*)$ 404.%1 [L]
 
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^(.*)$ index.php?q=$1 [L,QSA]
</code>

<p>What this basically does is it removes Drupal from handling 404s (removing the /index.php part) and tells Apache to use a specific file if it encounters a 404 (like a missing image or CSS file).</p>

<h3>Step 2 - Tell Drupal to stop on 404s too</h3>
In your template.php inside of the _phptemplate_variables(), add in this code:

<code>
// show custom 404 page
$headers = drupal_get_headers();
if (strpos($headers, 'HTTP/1.1 404') !== FALSE) {
  // make sure this path = ErrorDocument in .htaccess above
  include_once './sites/all/themes/foundation/404.php';
  exit();
}   
</code>

<p>This tell Drupal to serve up this 404 page if it can't find the path. The benefit of this is your designers can work on the same file that handles 404s for both Apache and Drupal. It also stops Drupal from fully executing. In Drupal 6 this could happen much earlier using the preprocess templating functions.</p>

<h3>Step 3 - Create a 404 file</h3>
Create a 404.php file (or 404.html or whatever you want) and place the file where ever you want. Make sure to update the ErrorDocument in the .htaccess to point to this file along with the Drupal template code.

And voilá!
