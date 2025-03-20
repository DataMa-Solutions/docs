---
title: Tips of the week !
layout: feed
feed_name: totw_en
description: |
  Tips & Tricks on how to take the most out of Datama
---
> Every week, Datama publishes a tip or a trick on how to best take advantage of the software

{% for post in site.posts %}
{% if post.feed == "totw_en" %} 
<h2>{{ post.title }}</h2>
{{ post.content }}
{% if post.article_link != null %}
👉 Read our [article]({{page.article_link}}) to learn more!
{% endif %}
<img src="{{site.url}}/{{site.baseurl}}{{post.img_url}}" title="{{ post.title }}"/>
{% endif %}
{% endfor %}
{% include tip_of_the_week_old.md %}

