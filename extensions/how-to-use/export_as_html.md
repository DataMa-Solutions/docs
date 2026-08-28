---
title: Download as HTML
layout: new-page
scope: Datama/light
keywords: export HTML download extension Tableau Qlik Power BI Looker Studio Google Sheets
---

<br/>

> Export a self-contained HTML file that embeds your current dataset and DataMa Light configuration. The file reloads the visualization from the public CDN and can be shared offline or archived.

<br/>

# 1. Overview

The **Download as HTML** button appears in the DataMa Light header when the host extension supports export. It generates a standalone `.html` file named `datama-<solution>-export.html` (for example `datama-compare-export.html`).

The exported file:

- inlines your current dataset and settings
- loads the DataMa Light runtime from the `@datama/light` npm CDN on jsDelivr
- opens directly in any modern browser without the original BI tool

<br/>

# 2. Platform behavior

| Platform | How export works | Notes |
|----------|------------------|-------|
| **Tableau Viz** | Direct download from the extension bundle | Template is served next to the `.trex` extension |
| **Qlik** | Direct download via RequireJS `toUrl` | Template is bundled with the Qlik extension |
| **Looker Studio** | Opens a receiver page in a new tab, then downloads | Allow pop-ups for Looker Studio if the export tab is blocked |
| **Google Sheets** | Direct download from the add-on popin | Works inside the Apps Script IFRAME sandbox |
| **Power BI** | Copies the HTML source to your clipboard | Paste into a `.html` file and save locally |

<br/>

# 3. How to use

1. Configure your analysis in the extension as usual (metrics, dimensions, settings).
2. Click the **Download as HTML** button (download icon) in the top header.
3. Follow the platform-specific result:
   - **Tableau / Qlik / Google Sheets** — the browser downloads the file automatically.
   - **Looker Studio** — a new tab opens; the file downloads once the receiver page is ready. Close the tab when done.
   - **Power BI** — a notification confirms the HTML was copied; paste it into a text editor and save as `.html`.
4. Open the saved file in a browser. The visualization renders with the dataset and configuration captured at export time.

<br/>

# 4. Limitations

- **CDN availability**: the export loads scripts from `https://cdn.jsdelivr.net`. The target machine must allow access to this CDN.
- **Published solutions**: on the public npm CDN, only **Compare** and **Explore** bundles are currently published. Exports for Assess, Detect, or Spreadsheet may fail to load until those bundles are available on npm.
- **Version pinning**: exports reference the `@latest` CDN tag, so the runtime version may change over time. Re-export if you need a snapshot tied to a specific release.
- **Data freshness**: the file is a point-in-time snapshot. It does not refresh when the source report data changes.

<br/>

# 5. Related documentation

- [How to use Datama extensions]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/index.html)
- [Tableau Viz]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/tableau_viz.html)
- [Qlik]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/qlik.html)
- [Looker Studio]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/looker-studio.html)
- [Power BI]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/power_bi.html)
- [Google Sheets]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/google-sheets.html)
