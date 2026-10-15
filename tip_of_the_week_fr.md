---
title: Tips of the week ! In French
layout: feed
feed_name: totw_fr
description: |
  Tips & tricks sur Datama, mais en français 🐓
---
> Chaque semaine, Datama publie un conseil ou une astuce sur la manière de tirer le meilleur parti du logiciel.

<div class="totw-list">
{% for post in site.posts %}
{% if post.feed == "totw_fr" %}
<h2>{{ post.title }}</h2>
{{ post.content }}
{% if post.article_link != null %}
👉 Lisez notre [article]({{page.article_link}}) pour en savoir plus !
{% endif %}
<img src="{{site.url}}{{site.baseurl}}{{post.img_url}}" title="{{ post.title }}"/>
{% endif %}
{% endfor %}
{% include tip_of_the_week_fr_old.md %}
</div>



