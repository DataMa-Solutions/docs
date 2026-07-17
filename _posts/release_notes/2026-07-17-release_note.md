---
feed: release_note
title:  "2026-07-17 More focused Detect alerts and faster Table Connect date comparisons"
date:   2026-07-17 12:00:00 +0200
description: Focus Detect on the anomalies with the greatest business impact and reduce the data transferred for Table Connect date comparisons.
---

* **Detect**: set a minimum impact threshold and choose which steps of your metrics relation can be reported as anomalies. These controls help you focus anomaly lists and alerts on the changes that matter most. See [Detect settings]({{site.url}}/{{site.baseurl}}/core_app/new/detect/settings.html#12-considered-steps).
* **Table Connect**: date comparison ranges can now be grouped into period labels directly in BigQuery, Snowflake, and Amazon Redshift, reducing the amount of data transferred. Disable **Group dates into periods** when an analysis needs individual dates, for example with Detect. See [Table Connect]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/direct_query.html#224-group-dates-into-periods).
