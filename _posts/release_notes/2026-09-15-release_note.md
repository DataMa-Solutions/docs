---
feed: release_note
title:  "2026-09-15 What If & Sub-steps in Datama Light"
date:   2026-09-15 12:00:00 +0200
description: |
  Mid-September marketplace release:
  - What If scenarios across Compare, Explore and Assess
  - Market equation Sub-steps with card editor and waterfall drill
  - Covariance controls and smarter Remaining grouping on the waterfall
---

* **Marketplace extension** (also known as "Datama Light")
  * **What If scenarios** (Compare, Explore, Assess): simulate *what happens if I improve step X by N% on segment Y*, then read the answer in the usual waterfall / tree / chart. Scenarios become a `Scenario` dimension (baseline vs scenario). Create them from the **What If** settings tab or from the **right-click** menu on the waterfall (Compare) or bars (Explore). Pin impacts as live plot shortcuts. [Learn more]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/what-if.html)
  * **Market equation Sub-steps**: nest equations inside a step (e.g. Conversion = Add to Cart × Cart to Order) with the new **card editor** (indent / outdent, formula, emoji, **Edit this step**). On the waterfall, **Split by › Sub-steps** decomposes a composite step — required for non-simplifiable steps. Not the same as [Sub-pillars]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/2026-feature.html#22-sub-pillars). [Learn more]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/market-equation-sub-steps.html)
  * **Covariance controls** (Compare › Modeling): choose **Separate covariance** (Never / Auto / Always + threshold) to keep residual gap on a dedicated bar; or set **Auto / Always / Never** per step. A high-covariance warning appears in the slide subtitle when the share exceeds the threshold (default 40%). Concept refresher: [Covariance]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/covariance.html)
  * **Remaining bars**: default **Items displayed** threshold is **6**; visible bars are the **N most impacting** ones (absolute impact). Market-equation steps stay **out of Remaining** by default (toggle **Group equation steps** to opt in). Right-click **Regroup remaining** collapses an expanded Remaining group. Threshold accepts up to **50**.

> The redesigned Compare waterfall (analysis methods, infinite drill-down, hierarchy, pillars, multi-view workspace) was covered earlier in September — see the [feature tour]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/2026-feature.html) — and is not repeated here.
