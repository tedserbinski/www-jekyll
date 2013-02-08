--- 
layout: post
title: Location data with Drupal
created: 1181772239
---
One of the most popular features on <a href="http://www.mothersclick.com">MothersClick</a> is our <a href="http://www.mothersclick.com/groups">geo-mapping system for mothers' groups</a>---a mashup of Google maps and mommy groups (created with the organic groups module).

Now, I receive lots of email and questions about how we built such a system with Drupal and location module. The fact is, we didn't---well, we <em>did</em> use Drupal, but we <strong>did not</strong> use location module. The module is a behemoth, it performs slowly, and isn't too friendly when you have data outside the US. We didn't use the GMap module either---we didn't want nor need the bloat.

So at MothersClick, we started fresh. We wrote a module that added a location form to any node type we specified and also to users. We then used a database table to store this data that was similar to location module's table structure. From there, we hooked this up to <a href="http://googlemapsapi.blogspot.com/2006/06/geocoding-at-last.html">Google's geocoding service</a> to grab latitude and longitude coordinates for an address. We also added in an address verification layer that worked with Google to verify addresses as well.

The next step was to add in proximity search. Due to time constraints we couldn't build a full geo-spatial index, so we opted to rely on <a href="http://drupal.org/node/89220#comment-252431">a bit of math for proximity searches</a>. While this isn't super ideal, it does indeed work very well for us.

Add in a custom Google maps module that communicates via AJAX with our custom location module and voil&aacute;!

Yes that's great, how can I have it on my site, you might ask, eh?

Well soon you can!

Mark and Allie at <a href="http://www.advantagelabs.com/">Advantage Labs</a>, together with <a href="http://drupal.org/user/53081">Brandon Bergren</a> have released 2 brand new geo modules:

<ul>
<li><a href="http://drupal.org/project/geo">Geo</a> -- a module that provides spatial indexing of location data. Why's this useful? Well for starters, it's the ideal way to perform proximity searches using bounding boxes and so forth, considerably more efficient than our previous math query, and scales to millions of location data points. This module will be able to tie into views module and provide Google map functionality.</li>

<li><a href="http://drupal.org/project/postal">Postal</a> -- this is the module that works as a CCK field so you can collect address/location data from *any* node type. There are many use cases where you need address data but you don't need to do much more than collect it. This module makes it very easy to collect that data. But when those instances arise when you need to do something with this data, such as plot all the mom groups in the world on a map, this will hook into geo for building spatial indexes to do such cool stuff :-)</li>
</ul>

These 2 modules are the future of geo data in Drupal, and I'm proud to say, that MothersClick will be contributing to both of these modules, as we plan to migrate our custom location modules to these modules one day soon.
