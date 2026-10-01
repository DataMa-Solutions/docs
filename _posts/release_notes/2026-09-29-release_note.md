---
feed: release_note
title:  "2026-09-29 Datama AI skill: colors, comment & results, and grouped hierarchical mix in Datama Light"
date:   2026-09-29 12:00:00 +0200
description: |
  End-of-September marketplace release (1.6.3.4):
  - Datama AI skill: theme, colors and chart settings the assistant can edit, results readable by the assistant
  - Hierarchical mix effects gathered under a single Mix box in the Compare waterfall
  - Fixes on units, Looker Studio export and the Claude mobile app
---

* **Marketplace extension** (also known as "Datama Light") [1.6.3.4]
  * **Datama AI skill: colors and look**: your assistant can now change the **look** of a delivered page on request: *"make it more modern"*, *"use our brand colors"*. Choose a **named palette** (modern, ocean, sunset, vintage, luxury, Excel…), your own series and waterfall **Up / Down / total** colors, the application colors and fonts. A one-key **style preset** (standard, modern, vintage, luxury, Excel, brand, presentation) sets shapes and typography. [Learn more]({{site.url}}/{{site.baseurl}}/extensions/skills/use.html#5-adjust-the-look-and-the-comment)
  * **Datama AI skill: chart and comment settings**: the assistant can place the **comment** below, left, right or hide it, set its alignment and size, add a **chart title and subtitle**, show or hide **value labels** on the bars, and draw **difference arrows** between two bars (percent, absolute, both, or a compound annual rate). [Learn more]({{site.url}}/{{site.baseurl}}/extensions/skills/use.html#5-adjust-the-look-and-the-comment)
  * **Datama AI skill: read the results**: with a licensed skill, the assistant can retrieve the **computed drivers table** and the **generated comment** and quote them in its answer or reuse them in a next step. On Claude (claude.ai) the page hands them back through the artifact itself: no code environment needed. Open the artifact once so it can compute. [Learn more]({{site.url}}/{{site.baseurl}}/extensions/skills/use.html#6-get-the-results-as-text-licensed-skill)
  * **Hierarchical mix grouped by dimension** (Compare › Dimensions › Hierarchy): when **Cascade mix effects along the hierarchy** is on, the mix levels of a hierarchy (*Zone Mix*, *Country Mix within Zone*) are now gathered under a single **Mix** box in the waterfall, and the performance reads *Perf Zone › Country*. The levels stay collapsed until opened, and exports and the comment still list each level. [Learn more]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html#cascade-mix-effects-along-the-hierarchy)
  * **Fixes**:
    * The Table view keeps the step unit on Start / End / Delta values (a quantity step no longer shows the KPI currency).
    * The **Download as HTML** button now works on pages delivered by the Datama AI skill: a native save prompt on claude.ai, a regular download in a browser tab, clipboard copy as a last resort. [Learn more]({{site.url}}/{{site.baseurl}}/extensions/skills/use.html#7-download-as-html)
    * Looker Studio: **Download as HTML** works again.
    * The Datama AI skill loads on the Claude mobile app and renders styled in sandboxed hosts.
    * Difference arrows follow the reversed palette.
