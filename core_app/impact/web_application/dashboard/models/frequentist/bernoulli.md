---
title: Frequentist (Bernoulli)
description: In the Bernoulli frequentist approach, the outcome has to be binary (e.g. Purchase). As long as this is true, any aggregation of the data can be used.
layout: page
scope: shiny
---

In the Bernoulli frequentist approach, the outcome has to be binary (e.g. Purchase). As long as this is true, any aggregation of the data can be used.

![value_boxes]({{site.url}}/{{site.baseurl}}/core_app/impact/web_application/dashboard/models/frequentist/images/value_box.png)

![Bernoulli]({{site.url}}/{{site.baseurl}}/core_app/impact/web_application/dashboard/models/frequentist/images/bernouilli-768x427.jpg)

**Behind the scenes:** A frequentist Welch t-test is computed to test whether the mean outcome is significantly different between the Start period and the End period. The standard deviation used in the test is derived from the properties of the Bernoulli distribution.

See also: [wikipedia](https://en.wikipedia.org/wiki/Welch’s_t-test)

Test data: [Gsheet](https://docs.google.com/spreadsheets/d/1VJJ2j5ldrSfvLQatd9SAikIJX_2dhBgDCjkdX_oUgB4/edit#gid=0)
