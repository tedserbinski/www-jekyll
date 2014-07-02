---
layout: page
pageid: posts
title: "Blog Posts"
description: "Blog posts written by Ted Serbinski."
---

<h2 id="drupal">Drupal &amp; Code</h2>

{% assign posts = [site.categories.drupal, site.tags.code] %}

<ul>
{% for post in posts %}
  <li><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> <span>{{ post.date | date: "%b %Y" }}</span></li>
{% endfor %}
</ul>


<h2 id="bmw">My BMW M3</h2>

<ul>
{% for post in site.categories.bmw %}
  <li><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> <span>{{ post.date | date: "%b %Y" }}</span></li>
{% endfor %}
</ul>
