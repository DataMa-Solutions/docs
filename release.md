---
title: News
description: Find here the **latest releases** of DataMa Solutions
---

> {{ page.description }}

{% for post in site.posts %}
{% if post.feed == "release_note" %}
<h3>{{ post.title }}</h3>
{{ post.content }}
{% endif %}
{% endfor %}
{% include release_old.md %}
