---
title: Use Cases of the Month
layout: page
img_url: /assets/images/use_case/uc_1.png
img_type: image/gif
img_width: 600
img_height: 300
description: |
  Practical Datama use cases from real clients
  
---
> Every month, Datama publishes a practical use case from a real client, to get others inspired and share knowledge and learnings

{% for post in site.posts %}
{% if post.feed == "ucotm" %}
<h2>{{ post.title }}</h2>
{{ post.content }}
Read the full story <a href="{{post.ucotm_url}}">here</a>
{% endif %}
{% endfor %}
{% include use_cases_of_the_month_old.md %}

