---
layout: page
pageid: detroit
title: "Detroit"
description: "Blog posts about Detroit."
---

<ul>
{% for post in site.tags.Detroit %}
  <li><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> <span>{{ post.date | date: "%b %Y" }}</span></li>
{% endfor %}
</ul>
