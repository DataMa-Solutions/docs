---
title: Datama Compare Features
description: Highlight of the main features available in Datama Compare
layout: new-page
scope: Datama/light/compare
keywords: light compare features
---

<br/>

> **This page highlights the main UI / UX capabilities of Datama Compare.**  
> For detailed controls, see [Settings]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html).

<br/>

# 1. Multi-view workspace

Compare is built as a **workspace**, not a single chart.

From **Chart › Views**, you can pin and arrange several surfaces side by side:

| View | Role |
|:---|:---|
| **Waterfall** | Bridge chart explaining the variation |
| **Comment** | Smart narrative next to the insight |
| **Tree** | Card hierarchy of the same drivers |
| **Table** | Hierarchical numbers aligned with the chart |

Resize panes in the layout preview, pin or unpin views, and keep everything in sync when you drill or Split by.

<center><img style="width: 80%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/1_Views.gif" alt="Multi-view workspace with waterfall, comment and table" /></center>

See [Settings › Chart › Views]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html#61-views).

<br/>

# 2. Cross-view hover

When several views are pinned, hovering an element highlights the **matching rows / cards / bars / comment lines** across Waterfall, Tree, Table, and Comment.

This makes it easier to read the same driver in every surface and understand how the narrative maps to the numbers.

<center><img style="width: 80%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/2_Views_interactivity.gif" alt="Cross-view hover highlighting matching elements" /></center>

<br/>

# 3. Infinite drill-down

**Infinite drill-down** applies when you **Split by a dimension on a market-equation step**. From that point, you can keep splitting into further dimensions without a fixed depth limit.

- Open a **step** on the waterfall, then **Split by** a dimension
- Continue drilling into other dimensions as deep as your data allows
- Drill into / drill up stay fluid (bars morph in place)
- Smart title, subtitle, and comment follow the active split
- Context menu works on **bars**, **value labels**, and **top-line labels**

If the split is not done on a step (for example a single dimension split at the top level), exploration stays limited to **one split**.

<br/>

# 4. Analysis method — Dimensions then Steps

Under **Modeling › Analysis method**, choose how the waterfall explores your data:

| Method | Behavior |
|:---|:---|
| **Auto** (default) | Computes both approaches and shows the most interesting one |
| **Steps then Dimensions** | Starts from market-equation steps, then drills into dimensions |
| **Dimensions then Steps or Dimensions** | Starts from the strongest dimension, then explores that segment via steps **or** another dimension |

**Dimensions then Steps** is especially useful when the first question is *which segment moved?* before *which KPI step moved?*.

<center><img style="width: 80%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/4_Analysis_methods.gif" alt="Analysis method settings" /></center>

See [Settings › Modeling › Analysis method]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html#21-analysis-method).

<br/>

# 5. Dimension hierarchy

When dimensions have a natural order (e.g. Country → Region → City, or Universe → Family → Product), define a **hierarchy** in Dimensions settings.

Datama then:

- Opens on the most relevant **level 0** dimension by default
- Lets you drill down (or filter) into deeper levels
- Lets you **pin** a dimension as the priority driver of the analysis

<center><img style="width: 80%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/5_Dimension_hierarchy.gif" alt="Dimension hierarchy drill-down" /></center>

See [Settings › Dimensions › Hierarchy]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html#31-hierachy).

<br/>

# 6. Table (copy as CSV)

Pin the **Table** view to read the same hierarchy as numbers: open / close branches, pagination, sort, and colorized values.

You can **copy the table data as CSV** to reuse it in Excel, Sheets, or another tool — without leaving the widget.

See [Settings › Table]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html#10-table).

<br/>

# 7. Custom pillars (sub-pillars)

Insert synthetic **net checkpoints** on the waterfall (e.g. “After mix”, “After price”).

- Right-click a bar → **Add pillar** (before / after)
- Name the checkpoint and choose the impact reference (vs previous net or vs Start)
- Pillars use End-style labels (e.g. `1.2M€ (+120k€)`)
- Edit them later under **Waterfall › Elements › Pillars**

Useful to stage the story of the variation without changing the underlying market equation.

<center><img style="width: 80%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/7_Sub_Pillar.gif" alt="Custom pillars on the waterfall" /></center>

See [Settings › Waterfall › Pillars]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html#92-elements) and the [Context menu]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html#11-context-menu).

<br/>

# 8. Operators on the waterfall

Equation **operators** (`×`, `÷`, `+`, …) can be shown between steps to make the market-equation logic visible on the chart itself — not only in settings.

They stay aligned with the waterfall orientation (including reverse axis) so the reading path remains clear.

<br/>

# 9. Difference arrows (annotations)

From the context menu (**Annotate › Difference arrow**), add think-cell–style arrows between two bars to highlight a gap:

- Level difference between adjacent elements
- Total difference across a range of steps
- Optional CAGR-style growth arrow

Arrows stay anchored to the data (not to pixels), so they survive drill, reverse axis, and layout changes. Hover an arrow to see the calculation detail.

<center><img style="width: 80%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/9_Difference_arrows.gif" alt="Difference arrows annotations on the waterfall" /></center>

<br/>

# 10. Edit labels from the chart

All labels on the waterfall are editable with a **right-click**, so you can adjust display options directly on the chart without opening the full settings panel.

This is faster for common tweaks (value labels, top-line labels, connectors, and related styling): the context menu exposes the same controls you would otherwise find under Chart / Waterfall settings.

<center><img style="width: 80%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/Settings_shorcuts.gif" alt="Edit waterfall labels from the right-click context menu" /></center>

See also [Context menu]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html#11-context-menu) and [Shortcuts on hover]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html#12-shortcuts-on-hover).

<br/>

---

<br/>
