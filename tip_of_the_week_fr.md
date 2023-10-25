---
title: Tips of the week ! In French
layout: feed
feed_name: tip_fr
description: |
  Tips & tricks sur DataMa, mais en français 🐓
---
> Every week, DataMa publishes a tip or a trick on how to best take advantage of the software

{% for post in site.posts %}
{% if post.feed == "tip_fr" %}
<h2>{{ post.title }}</h2>
{{ post.content }}
<img src="{{site.url}}/{{site.baseurl}}{{post.img_url}}" title="{{ post.title }}"/>
{% endif %}
{% endfor %}
{% include tip_of_the_week_fr_old.md %}



