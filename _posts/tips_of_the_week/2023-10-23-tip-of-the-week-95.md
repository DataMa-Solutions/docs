---
feed: totw_en
title:  "Tip of the Week 95: New methods for Anomaly Detection"
date:   2023-10-23 10:12:00 +0200
img_url: /assets/images/tip/95.gif
img_type: image/gif
img_width: 600
img_height: 300
layout: post
---


Datama Detect now offers you new methods for spotting anomalies in your data:
1. Methods based on estimated confidence interval
  * Forecast (only available in "Analyse latest point only")
  * Observed volatilty (method by default)
2. Methods based on manually configured thresholds (the new ones 🥳)
  * Relative variation threshold: for example, if the threshold is set at 50% then any relative variation in excess of 50% will be considered an anomaly.
  * Absolute variation threshold: using the previous example, here we are not defining a percentage threshold but a fixed value (2k) and any absolute variation in excess of this value (-2.1k) will be considered an anomaly.
  * Absolute value threshold: for example, if the threshold is set at 50k and the baseline value is 40k, if the value considered is 60k, this will be considered an anomaly.
