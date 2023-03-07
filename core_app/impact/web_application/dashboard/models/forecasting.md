---
title: Forecasting
description: Used with time series to compare realized values against forecasted values.
layout: page
---

Used with time series to compare realized values against forecasted values.

If the *Start period* contains too little data, the forecasted values will not be precise. As a rule of thumb, consider using forecasting when your *Start period* contains at least 10 points.

![value_boxes]({{site.url}}/{{site.baseurl}}/core_app/impact/web_application/dashboard/models/images/value_boxes_forecasting.png)

![graph]({{site.url}}/{{site.baseurl}}/core_app/impact/web_application/dashboard/models/images/forecasting.png)

**Behind the scenes:** DataMa Impact chooses the ETS or STLM model which best fits the *Start period* data, taking seasonality into account, and then computes predictions for the *End period*. This allows to test whether realized (a *posteriori*) values significantly differ from what could be expected a *priori*.

See also: [wikipedia](https://en.wikipedia.org/wiki/Exponential_smoothing)

Test data: [Gsheet](https://docs.google.com/spreadsheets/d/1VJJ2j5ldrSfvLQatd9SAikIJX_2dhBgDCjkdX_oUgB4/edit#gid=925605184)
