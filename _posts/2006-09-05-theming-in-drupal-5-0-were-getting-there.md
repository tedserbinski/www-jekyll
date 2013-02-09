--- 
layout: post
title: "Theming in Drupal 5.0: We're getting there!"
created: 1157510293
category: drupal
---
As a self-proclaimed Drupal theming "ninja", I've built plenty of sites that don't look like Drupal. But to be honest, it's certainly not that easy. So for the next 5.0 release of Drupal, I've done my best to get in as many patches as possible to making theming in Drupal easier--and you know what, we've certainly made some great progress. Here's a rundown of the top theming patches that I got in:

<ul>
<li><a href="http://drupal.org/node/73961">#73961</a> -- Simplify adding CSS in Drupal</li>
<p>This was a great little patch that made it very clear and consistent how to add CSS files in Drupal. In 4.7, adding CSS files was a bit of a mystery, as <a href="http://www.lullabot.com/articles/how_to_properly_add_css_files">I outlined in a previous Lullabot article</a>. Now, starting with 5.0, it's very easy: <code>drupal_add_css($cssFile, $type = 'module')</code>. That's it. Just specify the type of CSS file, core, module, or theme, and this function will handle the rest, loading them in a correct and consistent cascading order.</p>
</li>

<li><a href="http://drupal.org/node/77183">#77183</a> -- Goodbye drupal.css</li>
<p>Building upon a simple way for adding CSS files was the ultimate theming patch for Drupal 5.0--obliterating drupal.css. Gone are the days of overriding this humongous and fairly out of control CSS file. Now, the CSS is split into per module CSS files, so it'll be easier to track down CSS styles, along with styles only being loaded if you are using that specific module. Using the new phpTemplate $styles variable, one can easily swap out any module CSS file for a different one or <a href="http://drupal.org/node/64292#drupal-add-css">simply unset()</a> it as well.</p>

<li><a href="http://drupal.org/node/78656">#78656</a> -- The first CSS hack in core</li>
<p>Yes, with the CSS files split up and a new, useful, defaults.css residing in the system module folder, it was time for a proper CSS clearing class. Based upon the <a href="http://www.positioniseverything.net/easyclearing.html">excellent PIE technique</a>, this new CSS clearing class eliminated a bunch of useless &lt;br&gt; tags. Not only that, but this CSS class is *useful*. I use it on almost every project and having it in core just makes it all that more convenient.</p>

<li><a href="http://drupal.org/node/65151">#65151</a> -- theme_links() is useful for themers</li>
<p>At last, a useful theme_links()! Now this function returns a semantic list of links, along with useful CSS classes, including both first and last on their respective &lt;li&gt; elements. This makes it super easy to plug in all of those wonderful <a href="http://css.maxdesign.com.au/">CSS menu list techniques</a>. Not to mention, Drupal is just a bit more accessible.</p>

<li><a href="http://drupal.org/node/18260">#18260</a> -- hook_link() returns structured links</li>
<p>The oldest theming issue to get in was the one that fixed hook_link() to return structured links. This makes it easy for modules and themes to get rid of say the "read more" or "add new comment" links, or even rearrange them. Not only that, but for themers all of these links now have associated CSS classes so it makes it really easy to add icons for each link. Additionally, $primary_links and $secondary_links return structured links too--a perfect fit for sending to theme_links() to output semantically correct menus for your site. Bad and boring links begone!</p>

<li><a href="http://drupal.org/node/66569">#66569</a> -- Move that damn feed icon!</li>
<p>One of my biggest gripes with 4.7 was it was practically impossible to move that feed icon. It was always appended to the body of the node or page, no way to move it unless you hacked core. Well now that it is a thing of the past, there is a new $feed_icons variable for you phpTemplate themers so you can place that link anywhere you want on the page. Not only that, but now there is the ability to have multiple feed icons per page, something the <a href="http://drupal.org/project/views">views module</a> might be offering soon.</p>

<li><a href="http://drupal.org/node/81619">#81619</a> -- Better default phpTemplate files</li>
<p>One thing I noticed when teaching Drupal newbies how to theme was the fact the the default phpTemplates were a bit of a mess. No consistent styling, some missing classes, and some missing semantics. Those files are now cleaned up.</p>

</ul>

For more details on these, check out <a href="http://drupal.org/node/64292">updating your theme</a> in the handbook. Funny enough, looks like this time around I actually wrote the book ;-)

So those are the highlights of what's to come in Drupal 5.0--coupled with various <a href="http://drupal.org/node/81554">cleanups</a> and we're starting to get somewhere with theming in Drupal. But of course there are plenty of more ways to improve theming and this only scratches the surface. It's a great start and I hope in subsequent releases to Drupal 5.0 theming will become even easier, more efficient, and more of a pleasure.

If you have ideas for this but maybe not sure where to start, post your comments and maybe we'll get some patches in before 5.0 ships this fall. Or at least had a headstart for Drupal 6.0 ;-)
