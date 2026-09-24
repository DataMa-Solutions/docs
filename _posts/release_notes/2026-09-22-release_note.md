---
feed: release_note
title:  "2026-09-22 Out of scope segments & Layer Source in Datama Light"
date:   2026-09-22 12:00:00 +0200
description: |
  Late-September marketplace release (1.6.3.3):
  - Out of scope bar for new and discontinued segments in Compare
  - Layer Source: preview — and in PowerPoint, exports and AI skills, edit — the data behind a visual
  - Long tail clustering, source text variables (@Column[n]), hierarchical mix and Excel output export
---

* **Marketplace extension** (also known as "Datama Light") [1.6.3.3]
  * **Out of scope segments** (Compare › Dimensions): segments that exist on one side of the comparison only (a country opened, a store closed, a product discontinued) no longer distort volume, mix and performance. Pick the eligible dimensions: those segments move into an **Out of scope** bar right after Start, split into **New** and **Discontinued**, followed by a **Comparable Start** pillar. The steps then explain the like-for-like change — the scope / perimeter effect controlling teams build by hand. [Learn more]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/out-of-scope.html)
  * **Layer Source**: a new **See Source** button in the header shows the data behind the visual (sample rows or unique values, search, sort). In **PowerPoint**, **HTML exports** and the **Datama AI skill**, the data is editable: double-click a cell or paste a block from Excel, then Save — refresh a slide with this month's figures without going back to the source. Read-only in Power BI, Tableau, Looker Studio and Qlik. [Learn more]({{site.url}}/{{site.baseurl}}/extensions/layer-source.html)
  * **Long tail clustering** (Compare, Explore, Detect, Assess): a new **Method** for pooling segments into "Other". **Long tail** ranks segments by absolute value and pools the smallest ones while they stay within the threshold, so "Other" never exceeds X% of your KPI, however long the tail. Numeric dimensions are now cut into value ranges. [Learn more]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html#32-clustering-with-the-aggregation-in-)
  * **Source text variables**: any text (titles, segment names, units…) can show a value of a source column with **`@Column[n]`** — e.g. *Revenue of @Country[1]* — and follows your dashboard filters without pivoting the data. When comparing two metrics, you can now name both sides from a single pair. [Learn more]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html#source-text-variables)
  * **Hierarchical mix** (Compare › Dimensions › Hierarchy): **Cascade mix effects along the hierarchy** measures the mix of each level against its parent segment, so mix effects add up across levels (*Zone Mix + Country Mix within Zone*). Completed by a **Mix & Performance covariance** option (Modeling › Covariance: Pro rata, To performance, To mix). [Learn more]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html#cascade-mix-effects-along-the-hierarchy)
  * **Excel add-in — Export output**: write the waterfall results into a worksheet table (`Datama_Output_<use case>`) on every compute, ready for your Excel formulas. [Learn more]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/excel_compare.html#81-export-output)
  * **Settings & workspace**: **Shift + S** opens settings and focuses the search, which now also finds analysis options; pinned views reflow so no pane leaves empty space; the flat hierarchy table shows leaves only, with sorted Level columns.
  * **Performance**: faster waterfall rendering and hierarchy computation on large datasets, with progress feedback on long computations.
  * **Fixes**:
    * Percent change sign is correct when Start is negative.
    * Applying a license keeps your in-progress settings.
    * A clear error message is shown when an analysis cannot start (e.g. empty End).
    * Detect keeps the saved view layout.
    * Assess loads legacy workbooks again.
    * Qlik no longer shows an empty space at the top of the visual.
    * Datama AI skill pages render styled in sandboxed hosts.
