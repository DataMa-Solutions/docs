---
title: Out of scope segments in Datama Compare
description: Isolate new and discontinued segments in an Out of scope bar so the waterfall explains the like-for-like change
layout: new-page
scope: Datama/light/compare
keywords: light compare out of scope perimeter new discontinued like-for-like scope effect
---

<br/>

> Related: [Settings › Dimensions]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html#33-out-of-scope-segments) · [Covariance]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/covariance.html) · [What If]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/what-if.html)

<br/>

# Purpose

Some segments exist on **one side of the comparison only**: a country opened, a store closed, a product launched or discontinued. Left in the analysis, they distort every step — their whole weight lands in volume, then in mix and performance effects that mean nothing (a discontinued product looks like a price drop).

**Out of scope segments** takes them out of the steps and shows their contribution as **one bar right after Start**, the way controlling teams show a *perimeter* or *scope* effect before the like-for-like analysis:

```
Start  →  Out of scope (New + Discontinued)  →  [Comparable Start]  →  Volume  →  Price  → …  →  End
```

The market equation steps, mix / performance and covariance are then computed on the **comparable (in-scope) rows** only. Start and End keep the whole population, so the waterfall still adds up:

> **In-scope gap + Out of scope = Total gap**

<br/>

# Turn it on

In **Settings › Dimensions › Out of scope segments**:

| Option | Description |
|:---|:---|
| **Eligible dimensions** | Dimensions used to detect segments present on one side only. Leave empty to disable (default) — nothing is computed and your analysis is unchanged. |
| **Scope label** | Rename the bar (default *Out of scope*, e.g. *Perimeter effect* or *Store openings / closures*). Shown once a dimension is selected. |
| **Add comparable pillar** | On by default: adds a *Comparable {Start}* pillar right after the block, so you read the like-for-like starting point. |

Click **Apply** to recompute.

<br/>

# How segments are classified

A segment is a combination of the values of the **eligible dimensions** (e.g. `Country × Store`).

| Class | Rule |
|:---|:---|
| **New** | Every metric is absent or `0` on the **Start** side |
| **Discontinued** | Every metric is absent or `0` on the **End** side |
| **In scope** | Present on both sides — even with 1 unit at Start and 1 000 at End (the change then shows as volume / mix) |

The eligible dimensions **define the perimeter**. With *Country* eligible, a country opening is out of scope; with only *Zone* eligible, the same opening stays inside its zone (the zone exists on both sides), so no block appears.

Detection runs after your dashboard filters: a segment filtered out on one side counts as absent there.

<br/>

# How to read it

* **Out of scope** bar: net contribution of the perimeter change. Click it to open **New segments** and **Discontinued segments**, then click again to list the segments themselves.
* **Comparable pillar**: Start restated on the comparable perimeter.
* **Steps**: explain the like-for-like change only.
* **Smart comment**: a paragraph right after the introduction describes the block (weight, number of new / discontinued segments, main contributors) when it is significant.
* **Dimensions then Steps** analysis: the block is a root bar, and out-of-scope segments are removed from the other segments, so both analysis methods tell the same story.

### Example

Italy opens, Canada closes, no price changes, eligible dimension = *Country*:

| | Without the block | With the block |
|:---|---:|---:|
| Out of scope | — | **−23 500** (New IT +4 500, Discontinued CA −28 000) |
| Volume | +4 000 | +12 133 |
| Average selling value | −25 048 | −8 865 |
| Country performance (price) | −12 844 | **0** |
| **Total gap** | −22 300 | −22 300 |

Without the block, the closure of Canada shows up as a false price drop of −12 844. With the block, price performance is correctly 0.

<br/>

# Tips

* Choose the **finest dimension at which openings / closures happen** (store, SKU, country) — not a grouping level.
* Combine with **Cascade mix effects along the hierarchy** ([Settings › Dimensions]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html#31-hierarchy)): the cascade then runs on the comparable perimeter.
* There is no materiality threshold: a segment is out of scope only when it is strictly absent on one side.
