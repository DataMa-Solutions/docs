---
title: Frequentist (other)
description: In the frequentist approach, the outcome can be any variable. However, the data should be either unaggregated, or aggregated in comparable groups.
layout: page
scope: shiny
---

In the frequentist approach, the outcome can be any variable. However, the data should be either unaggregated, or aggregated in comparable groups.

If the outcome variable is binary and data is aggregated, the Frequentist (Bernoulli) test should be used instead (for a precious gain of statistical power).

![image]({{site.url}}/{{site.baseurl}}/core_app/impact/web_application/dashboard/models/frequentist/images/value_boxes_frequentist.png)

![image]({{site.url}}/{{site.baseurl}}/core_app/impact/web_application/dashboard/models/frequentist/images/frequentist.png)

**Behind the scenes:** A frequentist Welch t-test is computed to test whether the mean outcome is significantly different between the *Start period* and the *End period*. The standard deviation used in the test is derived from the properties of the sample (from the sample variance).

See also: [wikipedia](https://en.wikipedia.org/wiki/Welch’s_t-test)

Test data: [Gsheet](https://docs.google.com/spreadsheets/d/1VJJ2j5ldrSfvLQatd9SAikIJX_2dhBgDCjkdX_oUgB4/edit#gid=0)

**Negative variance warning** This warning can be displayed when the data you are analyzing has a variance that is negative, which makes the overall T-test impossible to perform. You might want to think twice about which test you're willing to compute and why.
