---
feed: release_note
title:  "2026-09-22 Hierarchical mix & Out of scope in Datama Light"
date:   2026-09-22 12:00:00 +0200
description: |
  Late-September marketplace release (1.6.3):
  - Hierarchical mix cascade and Mix & Performance covariance policy in Compare
  - Out of scope block for new and discontinued segments
  - Long tail clustering, source text variables (@Column[n]) and the Layer Source preview
---

* **Marketplace extension** (also known as "Datama Light")
  * **Hierarchical mix** (Compare › Dimensions): turn on **Cascade mix effects along the hierarchy** to measure the mix of each level against its **parent segment** instead of the whole step. Mix effects of one hierarchy now add up (*Zone Mix + Country Mix within Zone = Country mix*) and performance is read at the finest grain — the way finance teams compute a cumulative mix by hand. The smart comment narrates the cascade.
  * **Mix & Performance covariance** (Compare › Modeling): choose how the cross term of a segment is split inside a step — **Pro rata** (default), **To performance** (mix kept at Start ratios, so a uniform ratio move never shows as mix) or **To mix**.
  * **Out of scope segments** (Compare › Dimensions): segments that exist on one side only (a country opened, a product discontinued) no longer distort volume, mix and performance. Pick the eligible dimensions and they are moved into an **Out of scope** bar right after Start, split into **New** and **Discontinued** segments that you can expand. Start and End keep the whole population.
  * **Long tail clustering** (Compare, Explore, Detect, Assess): a new way to pool segments into "Other". **Long tail** ranks segments by absolute value and pools the smallest ones while they stay within the threshold, so the "Other" bucket never swallows a large share of your KPI, however long the tail. Numeric dimensions are now cut into buckets instead of producing one segment per value.
  * **Source text variables**: any text (titles, segment names, units…) can show a value of a source column with **`@Column[n]`** — e.g. *Revenue of @Country[1]*. The text follows your dashboard filters without pivoting the data. Settings preview the resolved value as you type and autocomplete the available references.
  * **Start / End segment naming**: when comparing two metrics, you can now name both sides from a single pair (plain text or `@Column[n]`).
  * **Layer Source**: a new **See Source** button in the header previews the dataset behind the visual (sample / unique values, search, sort). It is editable — double-click or paste from Excel — in PowerPoint, HTML exports and the Datama AI skill, and read-only in Power BI, Tableau, Looker Studio and Qlik.
  * **Excel add-in — Export output**: toggle **Export output** in the editor settings to write the waterfall results into a worksheet table (`Datama_Output_<use case>`) on every compute, ready to be used in your Excel formulas.
  * **Settings & workspace**: **Shift + S** opens settings and focuses the search, which now also indexes the analysis panels; pinned views reflow so no pane leaves empty space; the flat hierarchy table shows leaves only, with sorted Level columns.
  * **Performance**: faster waterfall rendering and hierarchy computation on large datasets, with progress feedback on long cascades.
  * **Fixes**:
    * Percent change sign is correct when Start is negative.
    * Applying a license keeps your in-progress settings.
    * A clear error message is shown when an analysis cannot start (e.g. empty End).
    * Detect keeps the saved view layout.
    * Assess loads legacy workbooks again.
    * Qlik no longer shows an empty space at the top of the visual.
    * Datama AI skill pages render styled in sandboxed hosts.
