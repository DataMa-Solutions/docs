---
title: Datama Detect on PowerPoint
layout: new-page
scope: Datama/light/detect
keywords: PowerPoint Office add-in Detect anomaly get started
---

<br/>

> Load a Datama Detect export HTML into the [HTML viewer by Datama]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/powerpoint.html) add-in to display anomaly detection inside PowerPoint.

<br/>

# 1. Overview

The PowerPoint HTML viewer routes to Detect when the export configuration contains anomaly module hints (`main.anomaly` or `"anomaly"`), or when the `DATAMA_SOLUTION_*` marker is set to `detect`.

<br/>

# 2. Export from Datama Detect

1. Build your Detect analysis in Datama (or a connected host).
2. Export as HTML with Datama marker blocks.
3. In the PowerPoint add-in, click **Load HTML file** and select the export.

<br/>

# 3. Interact with the visualization

- Toggle **Edit mode** in editable PowerPoint views to adjust settings.
- Reload another file with **Load HTML file** at any time.

<br/>

# 4. Going further

- [Detect advanced settings]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/settings.html)
- [Main PowerPoint add-in guide]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/powerpoint.html)
