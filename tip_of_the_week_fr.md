---
title: Tips of the week ! In French
layout: feed
feed_name: totw_fr
description: |
  Tips & tricks sur DataMa, mais en français 🐓
---
> Chaque semaine, DataMa publie un conseil ou une astuce sur la manière de tirer le meilleur parti du logiciel.

{% for post in site.posts %}
{% if post.feed == "totw_fr" %}
<h2>{{ post.title }}</h2>
{{ post.content }}
<img src="{{site.url}}/{{site.baseurl}}{{post.img_url}}" title="{{ post.title }}"/>
{% endif %}
{% endfor %}
{% include tip_of_the_week_fr_old.md %}



