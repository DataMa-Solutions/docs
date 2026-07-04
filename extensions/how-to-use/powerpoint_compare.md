---
title: Datama Compare on PowerPoint
layout: new-page
scope: Datama/light/compare
keywords: PowerPoint Office add-in Compare waterfall get started
---

<br/>

> Load a Datama Compare export HTML into the [HTML viewer by Datama]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/powerpoint.html) add-in to display waterfall and KPI tree analysis inside PowerPoint.

<br/>

# 1. Overview

The PowerPoint HTML viewer detects Compare exports automatically when:

- `DATAMA_SOLUTION_START` … `DATAMA_SOLUTION_END` contains `compare`, or
- The serialized configuration includes `configuration.plot === 'waterfall'`, or
- No other solution heuristic matches (Compare is the default fallback).

<br/>

# 2. Export from Datama Compare

1. Build your comparison analysis in Datama Compare (or a connected host).
2. Export the visualization as HTML (export must include `DATAMA_DATA_*` and `DATAMA_CONFIGURATION_*` marker blocks).
3. In PowerPoint, open the HTML viewer add-in and click **Load HTML file**.
4. Select the exported `.html` file.

<br/>

# 3. Interact with the visualization

- Use **Edit mode** (toolbar) when PowerPoint is in an editable view to change settings.
- In Slide Show, the visualization is read-only.
- Use **Load HTML file** to switch to another export.

<br/>

# 4. Going further

- [How to read Waterfall graphs]({{site.url}}/{{site.baseurl}}/core_app/new/tutorial/first_use.html)
- [Compare advanced settings]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html)
- [Main PowerPoint add-in guide]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/powerpoint.html)
