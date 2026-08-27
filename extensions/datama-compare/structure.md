---
title: Datama Compare Extension Interface
layout: new-page
scope: Datama/light/compare
keywords: light compare structure interface waterfall v4
---

<br/>

> **Datama Compare is designed as a multi-surface workspace: waterfall + comment side by side by default, with optional table and tree views, and settings next to the chart.**

<br/>

# 1. Overview

The Datama Compare extension has different layouts depending on your mode:

## 1.1 Viewer mode

Single analysis section made for your user. Users can update graph display and play with the dashboard filters but will not be able to manage the setup of the use case.

<center><img style="width:70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/viewer_view.png" alt="viewer_view of Datama Compare" title="Datama Compare - viewer_view" /></center>

## 1.2 Builder mode

Analysis workspace with a **side settings panel**, pinned views, and footer.

<center><img style="width:70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/builder_view.png" alt="builder_view of Datama Compare" title="Datama Compare - builder_view" /></center>

<br/>

### 1.2.1 Side settings panel

Settings live **next to the chart** (left panel). The Compare panel starts **collapsed** to leave more room for the visualization.

- **Icon rail** — jump between Comparison, Modeling, Market Equation, Chart, Colors, Waterfall, Tree, Table
- **Apply** — batch equation / modeling / comparison changes, then recompute once
- **Live** — Chart, Colors, Waterfall, Tree, and Table tweaks apply immediately
- **Search** — find options faster in a dense panel

For detailed options, see the [Settings guide]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html).

<br/>

### 1.2.2 Analysis workspace (pinned views)

By default, **waterfall** and **comment** are pinned side by side. You can also pin **Table** and **Tree** from **Chart › Views**, and adjust column spans.

| Surface | Role |
|:---|:---|
| **Waterfall** | Bridge chart with hierarchy axis, drill-down, and custom pillars |
| **Comment** | Smart narrative; updates when you split or drill |
| **Table** | Hierarchical numbers aligned with open branches |
| **Tree** | Decision-tree / card view of the same hierarchy |

All pinned panes stay in sync on Split by / drill down / drill up.

<br/>

### 1.2.3 Chart interactions

On chart hover, shortcuts appear without cluttering the view. Right-click bars **or** value / top-line labels to open the context menu:

1. **Compare** — displayed value, expand first driver, secondary comparison
2. **Waterfall** — links, labels, top line, add pillar, styling

Common exploration actions:

- Click a step to open the strongest driver dimension
- **Split by** to change the explaining dimension
- Drill into / drill up through the hierarchy
- Click **Remaining** to expand aggregated segments
- **Add pillar** to insert a custom net checkpoint

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/Analysis_icons.png" alt="Icons of Datama Compare" title="Icons of Datama Compare" /></center>

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/Analysis_features.gif" alt="Analysis features interface of Datama Compare" title="Analysis features interface of Datama Compare" /></center>

<br/>

# 1.2.4 Footer section

The footer content varies based on your subscription plan:

- The free version focuses on the analysis area; the footer may show plan upgrade options and a [Contact us](https://Datama.io/lets-talk/) action
- Paid plans keep branding and footer tooling aligned with your host (Power BI, Looker Studio, Tableau, …)
- The **app version** remains visible in the widget footer after the old header Settings dialog was removed

<br/>
