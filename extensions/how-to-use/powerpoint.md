---
title: How to use Datama HTML Viewer in PowerPoint
layout: new-page
scope: Datama/light
keywords: PowerPoint Office add-in HTML viewer get started
---

<br/>

> The **HTML viewer by Datama** PowerPoint add-in displays any local `.html` / `.htm` file in a sandboxed viewer. When the file is a Datama export, the add-in automatically launches the right DataMa Light solution.

<br/>

# 1. Overview

The HTML viewer is a single PowerPoint Office Content App that supports:

- **Generic HTML** — full-page display inside a sandboxed iframe.
- **Datama export HTML** — automatic solution detection and interactive DataMa Light rendering (Compare, Assess, Detect, Explore, Spreadsheet).

Per-solution guides:

- [Datama Compare]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/powerpoint_compare.html)
- [Datama Assess]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/powerpoint_assess.html)
- [Datama Detect]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/powerpoint_detect.html)
- [Datama Explore]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/powerpoint_explore.html)
- [Datama Spreadsheet]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/powerpoint_spreadsheet.html)

<br/>

# 2. Install the add-in

1. Obtain the Office manifest (`manifest.xml`) from your Datama contact or deployment package.
2. In PowerPoint, go to **Insert → Add-ins → My Add-ins → Upload My Add-in** and select the manifest.
3. Insert the **HTML viewer by Datama** content app on a slide.

The add-in requires HTTPS hosting. For local development, see the [Light repository serve command](https://github.com/DataMa-Solutions/light/blob/master/docs/testing/commands.md#npm-run-servepowerpoint----port).

<br/>

# 3. Load content

## Waiting screen

When no file is loaded, the add-in shows:

- Title **HTML viewer by Datama**
- A **Load HTML file** button (`.html` / `.htm`)
- Footer with contact link

## Generic HTML

Select any HTML file. The document is rendered in a sandboxed iframe. The edit-mode toggle is hidden in this mode.

## Datama export HTML

Export your analysis from DataMa (or another Datama host) as HTML. The add-in detects `DATAMA_DATA_*` and `DATAMA_CONFIGURATION_*` markers, parses the embedded dataset and configuration, and renders DataMa Light with the matching solution.

If markers are present but JSON is invalid, an explicit parse error is shown — the add-in does **not** fall back to the generic HTML viewer.

<br/>

# 4. Edit mode

When a valid Datama export is loaded and PowerPoint is in an editable view (Normal, Slide Sorter, Outline):

- An **Edit mode** toggle appears in the top toolbar.
- When enabled, `configuration.configurable` is `true` and users can interact with settings.
- In Slide Show or Reading View, the add-in runs in view mode.

<br/>

# 5. Reload a file

After the first load, use **Load HTML file** in the top toolbar to pick another HTML document.

<br/>

# 6. Support

- [Contact Datama](https://www.datama.io/lets-talk/)
- [Advanced settings for Compare]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html)
- [Advanced settings for Detect]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/settings.html)
- [Advanced settings for Assess]({{site.url}}/{{site.baseurl}}/extensions/datama-assess/settings.html)
