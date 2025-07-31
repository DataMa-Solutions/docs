---
feed: release_note
title:  "2025-07-30"
date:   2025-07-30 12:00:00 +0200
layout: post
description: |
  Summer vibes are here, and we're serving up some seriously cool updates! 🏖️ 
  - 🏪 **Datama Light 1.4** drops with **Forecast method** for seasonality analysis in Assess
  - 🧹 **Prep gets smarter** with Top X based on Rank clustering and Google Analytics chunks to avoid sampling
  - 🔧 **Multiple improvements** including case-sensitive GA4 Regex and better view creation
  Ready to dive into these hot new features?
---

* **Marketplace extension** (aka "Datama Light") [1.4.0.0] 
  * Assess: **Forecast method** is now available for Datama Assess. Forecast method allows to take in to account the seasonality of a KPI when assessing the significance of a variation. [Learn more]({{site.url}}/{{site.baseurl}}/extensions/datama-assess/concept.html#4--forecast)

* **Wep app** 
  * Prep: **Top X based on Rank** is a new method in clustering field calculation in the Prep clean block. It allows to keep only the top segments of a dimension based on a given metric, and cluster all other segments in an "Other" bucket.
  * Prep: **Google Analytics chunks** avoids GA4 API sampling by calling large request through multiple date chunks. Just tick the "avoid" sampling tickbox in GA block and select your desired number of date chunks. 
  * Multiple fixes and improvements have been done. This includes: GA4 Regex now case sensitive, New view creation avoiding previous view override. 