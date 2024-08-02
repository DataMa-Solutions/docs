---
title: Bayesian Bernoulli
description: In the bayesian Bernoulli approach, the outcome has to be binary (e.g. Purchase). As long as this is true, any aggregation of the data can be used.
layout: page
scope: shiny
---

In the bayesian Bernoulli approach, the outcome has to be binary (e.g. Purchase). As long as this is true, any aggregation of the data can be used.

![value_boxes_bayesian]({{site.url}}/{{site.baseurl}}/core_app/impact/web_application/dashboard/models/images/value_boxes_bayesian.png)

![bayesian_bernoulli]({{site.url}}/{{site.baseurl}}/core_app/impact/web_application/dashboard/models/images/bayesian_bernoulli.png)

**Behind the scenes:** A bayesian test is computed, based on an uninformative beta prior for the probability of success.

See also: [wikipedia](https://www.evanmiller.org/bayesian-ab-testing.html)

Test data: [Gsheet](https://docs.google.com/spreadsheets/d/1VJJ2j5ldrSfvLQatd9SAikIJX_2dhBgDCjkdX_oUgB4/edit#gid=0)
