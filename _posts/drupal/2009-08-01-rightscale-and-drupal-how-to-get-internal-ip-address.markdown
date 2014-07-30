--- 
layout: post
title: RightScale & Drupal - How to Get Internal IP Address
created: 1249175054
category: drupal
---
I'm working on a new project that has a Drupal site running in the cloud--specifically <a href="http://aws.amazon.com/">Amazon AWS</a> with <a href="http://www.rightscale.com/">RightScale</a> sitting on top to manage our servers and automated scaling scripts.

The advantage of RightScale is it allows us to manage our servers at a further abstracted layer than AWS itself -- through the use of "RightScripts" we can script our way through the managing of low level resources. 

Things started to get a bit hairy when our scripts needed to talk to Drupal, in particular, registering each new server as it comes online with our Drupal stack, thereby whitelisting its IP address as trustworthy.



I did some googling and couldn't find a good, efficient way to automate this, except for <a href="http://forums.rightscale.com/showthread.php?t=112">a post with a handy command</a>.

With a little bit of tweaking, I arrived at a working solution that was even easier than thought.

First step is to prepare your settings.php or similar configuration file that holds your $conf[] for Drupal. We use IP address for a number of internal variables, but below are two Drupal specific variables used in <a href="http://api.drupal.org/api/function/ip_address/6">ip_address()</a>:

{% highlight kconfig %}
  'reverse_proxy' => true,
  'reverse_proxy_addresses' => array(
    // load balancer IPs
    '1.2.3.4', // elastic ip address from AWS
  ),
{% endhighlight %}

The above code lives in our custom file that holds our Drupal $conf[] settings. We have a RightScript that copies this files to the proper location and after the file is copied over, I added this command:

{% highlight bash %}
sed -i "/load balancer IPs/ a\'$(hostname -i)'," db.inc
{% endhighlight %}

What this basically does is opens up our db.inc file which holds our Drupal $conf[], it searches for that specific "@load balancer IPs@" string (see above code snippet for where it was defined), than it appends a new line, adding in the IP address of that machine. If you have multiple machines registering themselves, this works quite nicely, as they keep growing the list.

Hope this helps someone else from banging their head around for a few hours!
