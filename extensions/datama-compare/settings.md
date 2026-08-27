---
title: Settings of Datama Compare Extension
description: Discover all settings exposed by Datama Compare extension to improve your analysis
scope: Datama/light/compare
layout: new-page
keywords: light compare settings waterfall v4 plotter
---

<br/>

> Datama Compare uses a **side settings panel** next to the chart. Analysis options (Comparison, Modeling, Market Equation) require **Apply**. Visual options (Chart, Colors, Waterfall, Tree, Table) update **live**.

<br/>

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/Settings_waterfall.gif"/></center>

# Overview

Settings open from the top right of the widget (the panel starts **collapsed** on Compare so the chart has more space). Use the **icon rail** at the top of the panel to jump between scopes, and the sticky **search** bar to find a control quickly.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/0_Comparison_settings.png"/></center>

Various sub-menus are available:

| Scope | When it applies | Typical content |
|:---|:---|:---|
| **Comparison** | After **Apply** | Primary / secondary comparison, indices |
| **Modeling** | After **Apply** | Analysis method, comment depth, mix & perf, language |
| **Dimensions** | After **Apply** | Hierarchy, clustering |
| **Market Equation** | After **Apply** | KPI definition, units, step names |
| **Events** | After **Apply** | Calendar |
| **Chart** | Live | Preset, Views, Slide title, Chart title, Comment, General, Axis, Legends |
| **Colors** | Live | Palette (semantic + chart) and Theme (application) |
| **Tree** | Live | Theme, Cards (style / content), Operators |
| **Waterfall** | Live | Labels, Elements (bars / links / pillars), Axis X / Y |
| **Table** | Live | Hierarchical numbers layer |

Closing the panel while **Apply** is pending still saves and recomputes. You can expand the panel to **full width** for dense forms such as Market Equation.

Tooltips on controls explain advanced options. The app version remains visible in the **widget footer**.

<br/>

# 1. Comparison

Choose the scope of your comparison and optionally add a second comparison.

Defining what you want to compare is the first step of the analysis. In the waterfall, you can either compare dates (start period vs. end period) or compare segments from any dimension. For example:

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/1_Comparison_settings.png"/></center>

You can start your comparison as suggested below. For a quick step‑by‑step demo, see: [Looker Studio]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/looker-studio_compare.html), [Tableau]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/tableau-viz_compare.html), [Power BI]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/power-bi_compare.html), [Qlik]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/qlik_compare.html).

* First, add Datama Light Compare into your platform. See the example in Looker Studio:

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/Add_compare_extension.gif"/></center>

* Second, add the dimension(s) and metric(s) used by Datama Compare. For example, to compare the "Sessions" metric between "This Year" and "Last Year" (segments of the "Period" dimension):

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/Adddimensionandmetric.gif"/></center>

* Third, in **Comparison** settings, you can choose any other dimension available in your visualization tool’s "Dimension" field as the comparison dimension.

If a dimension includes more than two segments — e.g. "Country" — start by adding "Country" and the metric (e.g. "Sessions"), then select the two segments you want to compare (e.g. UK vs. Spain).

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/change_segment_country.gif"/></center>

You can also add more metrics to visualize the variation across different KPIs. Add the metrics in an order that follows the logic used by Datama Compare:

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/Metrics_order.png"/></center>

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/add_funnel.gif"/></center>

{% include embed_totw.html num=176 %}

## 1.1. Secondary comparison

Add a second comparison to display another waterfall focused on another scope. For example, while comparing USA vs. UK, you can also add a Mobile vs. Tablet comparison within the "Device" dimension.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/1_Comparison_settings_secondary_comparison.png"/></center>

Then choose how to display this second waterfall: "On right", "Above", or "Overlay". You can also do this from the chart context menu (**Compare › Secondary comparison**) or from **Chart › General > Secondary Comparison**.

## 1.2. Use indices instead of values

Choose between relative (dynamic) or absolute comparisons:

- When enabled (default): uses dynamic indices that update with the latest data in the source
- When disabled: uses fixed absolute values based on your initial selection (static baseline)

## 1.3. Order for relative values

Control which reference the dynamic comparison uses (apply only if the indice toggle is ticked):

- Descending (default): uses the most recent value as reference
- Ascending: uses the oldest value as reference

<br/>

# 2. Modeling

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/2_Modeling_settings.png"/></center>


## 2.1. Analysis method

Choose how your waterfall explores your data. Three options are available:
  * **Auto** (default): compute both of the following method and shows the most interesting one. 
  * **Steps then Dimensions**: starts from the market equation steps and then drill down on the different dimensions
  * **Dimensions then Steps or Dimensions**: starts from the most interesting dimension and drill down by segment of that dimension and the you can explore the segment either by the market equation steps or by another dimension.


## 2.2. Comment depth

Adjust the level of detail provided in the comments and explanations.
With the *Max* level of detail, each variant is explained; otherwise, three other options are available: ‘Low’, ‘Medium’ (default) and ‘High’.

Please note that the depth of analysis has an impact when a calendar is associated with the use case; this will affect the threshold at which events are displayed, depending on their respective interest scores.

## 2.3. Mix & Performance effects

Control how the mix effect is attributed. Default is "Never". Select "Auto" to let the tool split Mix vs. Performance when the mix contribution exceeds a threshold.

{% include embed_totw.html num=184 %}

## 2.4. Language

Language sits with analysis preferences under **Modeling**. French, Deutsch, and English are available. 
Contact us if you need additional languages.

<br/>

# 3. Dimensions

## 3.1. Hierachy

A feature in Datama that allows you to organise your dimensions when there are dependencies between some of them.
Example: you have various geographical dimensions (Country, Region, City); you may wish to explore the data by drilling down from the broadest dimension to the narrowest.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/3_1_Dimensions_settings_hierarchy.png"/></center>

Another one, is the product category wich can be split in various level, for instance Universe, Family, Subfamily, Product.
By creating this hierarchy of dimensions, Datama will, by default, display the most relevant of the level 0 dimensions (e.g. in our two previous examples, these would be ‘Country’ and ‘Univers’), after which you can access dimensions at other levels by drilling down or filtering those elements. 

Furthermore, using the button to the left of the dimension, you can pin a dimension to set it as the priority dimension in the analysis.

## 3.2. Clustering with the aggregation in %

<center><img style="align: right; width: 400px;" src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/settings_agg2percent.jpg"/></center>

Sets the model’s aggregation level. If set to X%, segments within a dimension that represent less than X% of the "Primary Numerator" (e.g. Revenue) are grouped into an "Other" segment. Default is 2%. This parameter can significantly impact the computed mix effects.
The "Primary Numerator" can be customized just bellow on the line 'KPI'.

# 4. Market Equation

Edit the KPI definition and market equation so the analysis matches your business logic.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/4_Market_equation_settings.png"/></center>

Market relation defines how metrics from your datasource combine to compute the KPI you want to explain. Here, you can modify the equation, choose units, rename steps, set thresholds, and exclude or focus dimensions.

The Market Equation layout is compact to fit the settings rail. Step edits are tracked as dirty and require **Apply** before recomputation.

- By default, Datama uses a product of ratios (prod) across all steps in the market equation. You can switch to a "sum" when your KPI is additive (e.g. Revenue = Revenue_France + Revenue_UK + Revenue_US).

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/sum_marketequation.gif"/></center>

- Changing the unit to '%' multiplies values by 100 and displays percentages. Selecting a currency unit displays values with the chosen currency symbol.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/Marketequation_unit.gif"/></center>

An emoji column is also available; it is added to your custom cards when you are in ‘Tree’ view.

<br/>

# 5. Events

Attach one or various **Calendar** so relevant events enrich the waterfall comment (and interest scoring) for the compared periods.



<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/5_Events_settings.png"/></center>

Enable Calendar with the following

1. In the **Events** scope in the side settings panel enable Calendar if it is not already on.
2. In **Select Calendar**, choose:
   - **Current data** — map event columns from the dataset already loaded in the extension
   - Or any calendar you created / connected in the Datama WebApp (available with a paid licence)

The "Show event interest in comment" option allows to display the interest score calculed for each event. 


<br/>

# 6. Chart

Chart settings control the workspace layout, slide and chart titles, comment, Compare display behavior, axes, and legends. All Chart options apply **live**.

The Chart scope is split into eight groups:

| Group | Purpose |
|:---|:---|
| **Preset** | Ready-made style packs for the chart look & feel |
| **Views** | Pin and arrange waterfall, comment, tree, and table |
| **Slide title** | Typography for the smart title & subtitle of the slide |
| **Chart title** | Plot title visibility, position, and style |
| **Comment** | Comment pane visibility and typography |
| **General** | Plot orientation, padding, behaviors, Compare & Tree defaults |
| **Axis** | Baseline, comparison scales, scale padding, hierarchy lines |
| **Legends** | Legend visibility and position |

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/6_Charts_settings.png"/></center>

<br/>

## 6.1. Preset

Apply a ready-made **style preset** to align the chart look with a presentation style in one click (colors, typography, comment layout).

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/6_1_Preset.png"/></center>

Under **Style preset**, open the **Preset** dropdown and choose one of:

| Preset | Typical use |
|:---|:---|
| **Standard** | Default balanced look |
| **Modern** | Clean contemporary styling |
| **Vintage** | Classic / retro visual tone |
| **High-end** | Premium presentation style |
| **Excel classic** | Spreadsheet-like familiar look |
| **Datama Brand** | Business Green identity, smart comment beside the chart |
| **Presentation** | Slide-oriented styling for sharing |

A short description under the dropdown summarizes the selected preset (identity, comment placement, font). You can still refine individual Chart options after applying a preset.

<br/>

## 6.2. Views

Compare is a **multi-view workspace**: several surfaces can stay visible at once (not tab-only).

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/6_2_Charts_settings_views.png"/></center>

**Layout preview** shows the active panes. Drag edges to resize column spans; use **×** to unpin a view.

**Available views** lets you pin extra surfaces into the layout:

| View | Default | Role |
|:---|:---|:---|
| **Waterfall** | Pinned | Main bridge chart |
| **Comment** | Pinned (with waterfall) | Smart narrative next to the insight |
| **Tree** | Available to pin | Hierarchy / tree cards |
| **Table** | Available to pin | Hierarchical numbers aligned with the chart |

Pinned panes stay in sync when you **Split by**, drill down, or drill up: title, subtitle, and comment follow the active split.

Legacy Preferences toggles for hide title / plot / comment migrate automatically once to **Slide title** / **Views**.

<br/>

## 6.3. Slide title

Controls typography for the **smart title** and **subtitle** of the slide.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/6_3_Charts_settings_slide_title.png"/></center>

For **Title** and **Subtitle** independently:

| Option | Description |
|:---|:---|
| **Display** | Show or hide the slide title / subtitle |
| **Size** | Font size (defaults: title `18`, subtitle `14`) |
| **Weight** | Font weight (default `400`) |
| **Family** | Font family (`Inherit` uses the widget default) |
| **Color** | Text color |

<br/>

## 6.4. Chart title

Plot-level **Chart title** styling (the smart title attached to the chart surface).

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/6_4_Charts_settings_chart_title.png"/></center>

| Option | Description |
|:---|:---|
| **Display** | Show or hide the plot title |
| **Position** | Placement relative to the chart (e.g. **Top**) |
| **Align** | Horizontal alignment (**Left**, center, right…) |
| **Italic** | Italic style on / off |
| **Size** | Font size (e.g. `20`) |
| **Weight** | Font weight (e.g. `400`) |
| **Family** | Font family (`Inherit` by default) |

<br/>

## 6.5. Comment

Typography and visibility for the **Comment** pane (when pinned in Views).

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/6_5_Charts_settings_comment.png"/></center>

Under **Style**:

| Option | Description |
|:---|:---|
| **Display** | Show or hide the comment text |
| **Align** | Text alignment (e.g. **Left**) |
| **Size** | Font size (e.g. `14`) |
| **Weight** | Font weight (e.g. **Light**) |
| **Italic** | Italic style on / off |
| **Family** | Font family (`Inherit` by default) |
| **Color** | Text color |

Comment content still follows drill-down / Split by; these options only change how it looks.

<br/>

## 6.6. General

General groups plot chrome, interaction behaviors, Compare defaults, and Tree exploration.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/6_6_Charts_settings_general.png"/></center>

### 6.6.1. Plot

- **Reverse axis** — rotate the waterfall 90° (also available from chart hover shortcuts).

### 6.6.2. Plot padding

Margins around the plot area: **Top**, **Right**, **Bottom**, **Left** (in pixels). Useful to free space for labels or secondary comparison.

### 6.6.3. Behaviors

| Option | Description |
|:---|:---|
| **Transition duration** | Animation length in ms when bars open / close or drill (default `1000`) |
| **Shortcuts on hover** | Show the shortcut bar only when hovering the chart |

### 6.6.4. Compare

| Option | Description |
|:---|:---|
| **Waterfall measure** | How step impacts are expressed on the bridge (e.g. **Impact**). Also via context menu **Compare › Displayed value** |
| **Secondary comparison** | Layout of the second waterfall: **On right**, above / below, or overlay. Also via context menu |
| **Open biggest / focused element by default** | Auto-expand the most relevant step on load |
| **Number of bars displayed before remaining** | How many segments show before aggregation into **Remaining** (default `4`). Click Remaining to expand more |

### 6.6.5. Tree

- **Exploration method** — **Hierarchy** or **Top N** for the Tree view (and related exploration). 
- **Top Exploration Leaf Count** — Defines the maximum number of top-ranked leaf nodes considered during tree exploration. A higher value allows the algorithm to explore more candidate leaves, potentially increasing the breadth and completeness of the exploration, while also increasing computational cost.

More Tree card options live under the dedicated **Tree** settings scope.

<br/>

## 6.7. Axis

Axis settings control the baseline reference line, shared scales for secondary comparison, scale padding, hierarchy lines, and hierarchy label layout.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/6_7_Charts_settings_axis.png"/></center>

### 6.7.1. Baseline

Reference line used as visual baseline on the plot:

| Option | Description |
|:---|:---|
| **Display** | Show or hide the baseline |
| **Position** | Where the baseline sits (e.g. **Zero**) |
| **Rendering** | Line style (e.g. **Straight**) |
| **Color** / **Opacity** / **Size** | Stroke appearance |
| **Cut** | When enabled, style the baseline “cut” separately (**Cut rendering**, **Cut color**, **Cut opacity**, **Cut size**) |

### 6.7.2. Comparison scales

- **Share scales between primary and secondary comparison** — keep both waterfalls on the same scale for fair visual comparison.

### 6.7.3. Scale

| Option | Description |
|:---|:---|
| **Padding on max** | Extra headroom above the highest value (e.g. `0.1`) |
| **Ratio of element size** | Relative bar / element thickness in the plot (e.g. `0.9`) |
| **Aggregation name** | Label used for the aggregated remainder bar (default **Remaining**) |

### 6.7.4. Hierarchy lines

Parent→child guides drawn on the hierarchy axis between tick rows:

| Option | Description |
|:---|:---|
| **Render mode** | Line style for tree guides: e.g. **Squared**, straight, or curved |
| **Color** | Stroke color of the tree-lines |
| **Opacity** | Transparency of the guides (e.g. `0.35`) |
| **Size** | Stroke thickness |
| **Vertical ticks** | Show or hide vertical tick marks along the hierarchy axis |

### 6.7.5. Hierarchy labels

Layout of multi-depth labels on the dedicated hierarchy axis rows:

| Option | Description |
|:---|:---|
| **Level spacing** | Vertical spacing between hierarchy levels (e.g. `1.5`) |
| **Max axis height share** | Maximum share of the plot height reserved for the hierarchy axis (e.g. `0.5`) |
| **Max label lines** | Maximum number of wrapped lines per label (e.g. `2`) |
| **Shrink to fit** | When on, shrinks label text to fit the available space |
| **Min label size** | Smallest font size allowed when shrinking (e.g. `8`) |

<br/>

## 6.8. Legends

Show or hide the chart legend and choose where it sits.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/6_8_Charts_settings_legends.png"/></center>

| Option | Description |
|:---|:---|
| **Display** | Show or hide the legend (off by default in the screenshot setup) |
| **Position** | Legend placement relative to the chart (set once Display is on) |

<br/>

# 7. Colors

The **Colors** scope styles both the waterfall accents and the widget chrome. Changes apply **live** on the chart.

Two groups are available:

| Group | Purpose |
|:---|:---|
| **Palette** | Chart / waterfall color scheme and semantic accents |
| **Theme** | Application UI colors (primary, text, backgrounds…) |

<br/>

## 7.1. Palette

Choose the chart color scheme and preview how accents map to waterfall elements.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/7_1_Color_settings_palette.png"/></center>

| Option | Description |
|:---|:---|
| **Palette** | Preset color scheme (e.g. **Default**) |
| **Reverse palette** | Reverse the order of the colours for the series in the chart; this is useful when a negative change is positive for your key performance indicator (KPI), and vice versa. |

### Palette preview

The preview splits into two blocks:

**Semantic** — fixed roles used on the waterfall:

| Role | Typical use |
|:---|:---|
| **Out** | Outgoing / negative mix-style accent |
| **In** | Incoming / positive mix-style accent |
| **Net** | Net checkpoint (e.g. custom pillars) |
| **Up** | Positive variation |
| **Down** | Negative variation |
| **Start** | Start bar |
| **End** | End bar |

**Chart** — numbered series swatches (1, 2, 3…) for multi-segment / multi-series coloring. Use **Add** (+) to append extra custom colors to the chart palette.

Click a swatch to edit that color. Palette updates preview immediately on the waterfall.

<br/>

## 7.2. Theme

Customize the **Application** chrome colors of the widget (outside the plot itself).

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/7_2_Color_settings_theme.png"/></center>

| Token | Role |
|:---|:---|
| **Primary** | Main brand / accent color |
| **Primary light** | Lighter primary variant (highlights, soft accents) |
| **Secondary** | Secondary accent |
| **Dark text** | Primary text color |
| **Secondary dark text** | Secondary / muted text |
| **White** | White / inverse text surfaces |
| **Background light** | Light background |
| **Background dark** | Alternate / slightly darker background |

Click any color square to open the picker and align the extension with your report branding.

<br/>

# 8. Tree

Tree layer settings control exploration and card presentation.

## 8.1. Cards

The **Cards** section controls how each node is drawn in the Tree view. It is split into two sub-sections:

- **Style** — visual appearance of the cards (shape, border, strokes)
- **Content** — customize each text shown on the card (display, size, color)

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/8_1_Tree_settings_cards.png"/></center>

### Style

Use **Style** to change the look of the cards themselves:

| Option | Description |
|:---|:---|
| **Radius** | Corner roundness of the cards (e.g. `10`) |
| **Border width** | Border thickness (e.g. `1.5`) |
| **Border color** | Border color; enable **Semantic** to follow up/down accents |
| **Border opacity** | Border transparency (e.g. `1`) |
| **Border dash array** | Optional dash pattern for the border (empty = solid) |
| **Render mode** | How card edges / connectors are drawn (e.g. **Curved**) |
| **Neutral stroke** | Stroke color for neutral lines; optional **Semantic** toggle |
| **Size** | Stroke thickness (e.g. `2`) |
| **Opacity** | Transparency of the card strokes (e.g. `0.33`) |
| **Dash array** | Optional dash pattern for strokes (empty = solid) |

### Content

Use **Content** to personalize **each text** available on the card. For every text block listed in this sub-section, you can toggle visibility and adjust typography.

In the current UI, the first text block is **Name** (the segment / step label on the card):

| Option | Description |
|:---|:---|
| **Name** | Show or hide this text on the card |
| **Name size** | Relative size of the name (e.g. `1`) |
| **Name color mode** | How the color is resolved (e.g. **Inherit**) |
| **Name color** | Explicit color when not fully inherited |

Scroll further in **Content** to configure the other texts on the card the same way (display + size + color options for each).

<br/>

## 8.2. Tree operators

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/8_2_Tree_settings_operators.png"/></center>

Define the decoration mode for the cards.

<br/>

# 9. Waterfall

Waterfall visual options are grouped under **Labels** and **Elements**. Most options also appear in the chart **context menu** (right-click on bars, value labels, or top-line labels).


## 9.1. Labels

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/9_1_Waterfall_settings_labels.png"/></center>

Labels are split into **Values** and **Top line**, with full typography controls (size, color + semantic, weight, family, position).

For each element you can choose what information to display:

- **Values (first row)** — how to express evolution on each step:
  - **Volume** (default): evolution in volume from Start to End
  - **Impact in points**: contribution in pts along the bridge
  - **Percent change**: contribution in % along the bridge
- **Top line (second row)** — percentage / impact row above the graph (default: percent change)

Display formats per label:

| Option | Behavior |
|:---|:---|
| Gauge | Show a gauge visualization |
| Arrows | Directional arrows for positive / negative variations |
| Colors | Green (increase) / red (decrease) |
| Hover only | Show values only on mouse hover |
| Hide | Hide the element completely |

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/SettingsLabelIndicator.png"/></center>

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/label.png"/></center>

## 9.2. Elements

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/9_2_Waterfall_settings_elements.png"/></center>

Elements regroup **Bars**, **Links**, and **Pillars**.

### 9.2.1. Bars

Bar styling for Start / End / variation steps.

### 9.2.2. Links

Connectors between steps. From settings or the context menu (**Waterfall › Links**): display, rendering, **dasharray**, **opacity**, and editable **color**.

### 9.2.3. Pillars (custom checkpoints)

Insert synthetic **net checkpoints** on the waterfall (e.g. “After mix”).

- **Add pillar (before / after)** from the context menu
- Set a **custom label**
- Choose label reference: impact vs **previous net** or vs **Start**
- Pillars use **End-style** labels (e.g. `1.2M€ (+120k€)`)
- Edit existing pillars under **Waterfall › Elements › Pillars** without recreating them

<br/>

# 10. Table

Native hierarchical **table** layer: the same tree as the chart, as numbers. Pin it from **Chart › Views**.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/10_Table_settings.png"/></center>

| Feature | Description |
|:---|:---|
| Hierarchical rows | Same open / close branches as the waterfall |
| Pagination | Browse large hierarchies |
| Column pin & sort | Keep key columns visible; order by value |
| Footer aggregates | Totals / summary row where configured |
| Colorized values | Positive / negative readability |
| Tree lines | Hierarchy readable in tabular form |
| Presets & layer menu | Quick display setups |

The table follows chart visibility (Top N / open branches).

<br/>

# 11. Context menu

Right-click a **bar**, a **value label**, or a **top-line label** to open the context menu. The same actions are available from all three targets.

<center><img style="width: 80%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/11_Context_menu.png"/></center>

| Action | Definition |
|:---|:---|
| **Expand first driver** | Automatically open the strongest driver step on the waterfall |
| **Displayed value** | Choose how values are shown on the chart (impact, volume, %, etc.) |
| **Split by…** | Change the dimension used to explain the selected step or segment |
| **Connectors** | Show or hide the links between waterfall steps, with styling options in the submenu |
| **Add event** | Create a calendar event from the selected bar / period |
| **Hide event** | Hide calendar events related to the current selection |
| **Chart type** | Switch or configure the current chart type |
| **Axis** | Quick access to axis display options |
| **Annotate** | Add or edit annotations on the plot |

**Split by** and other drill actions keep smart title, subtitle, and comment in sync with the active split.

<br/>

# 12. Shortcuts on hover

A shortcut bar appears when you hover the chart and stays out of the way otherwise. It gives quick access to the most common display actions without opening the settings panel.

<center><img style="width: 80%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/11_Shortcuts_on_hover.png"/></center>

From left to right:

| Shortcut | Description |
|:---|:---|
| **Split by** | Change the dimension used to split and explain the current analysis |
| **Reverse axis** | Switch the orientation of the **Waterfall** and / or the **Tree** view |
| **Waterfall / Tree view** | Toggle between **Waterfall** and **Tree** when only one of these views is currently displayed in **Views** |
| **Comment** | Show or hide the comment pane |
| **Table** | Show or hide the table pane |
| **Settings** | Open the side settings panel |

<br/>

# Save customized settings

> **Power BI**: customizations and the licence key are **saved automatically** inside the Power BI report — no JSON copy‑paste required. The Save button in the top‑right corner remains available if you want to copy the current settings JSON to migrate them to another visual.

> **Looker Studio (premium users)**: once you customize your chart, click the **Save** button at the top right, then paste the JSON automatically copied to your clipboard into the Config JSON field in the style panel. Otherwise, your settings will be lost when you refresh the BI report.

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/save_json_compare.png"/></center>

<br/>

Get more information about the extension [interface]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/structure.html) or [theoretical concepts]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/concept.html) of Datama.

<br>
