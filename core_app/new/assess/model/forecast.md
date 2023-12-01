---
title: Model - Forecast model
description: Used with time series to compare realized values against forecasted values.
layout: page
scope: app
---

<br>

> Used with time series to compare realized values against forecasted values.

<br>
If the Start period contains too little data, the forecasted values will not be precise. As a rule of thumb, consider using forecasting when your Start period contains at least 10 points.

<br>

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/assess/images/assess_forecast.png" alt="assess - forecast model" /></center>



Behind the scenes: DataMa Impact chooses the ETS or STLM model which best fits the Start period data, taking seasonality into account, and then computes predictions for the End period. This allows us to test whether realized (a posteriori) values significantly differ from what could be expected a priori.

See also: [wikipedia](https://en.wikipedia.org/wiki/Exponential_smoothing)

Test data: [Gsheet](https://docs.google.com/spreadsheets/d/1VJJ2j5ldrSfvLQatd9SAikIJX_2dhBgDCjkdX_oUgB4/edit#gid=925605184)

<br>

