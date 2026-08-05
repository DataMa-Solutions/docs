---
title: Settings of Datama Spreadsheet extension
description: Discover settings and configuration behavior for Datama Spreadsheet in marketplace BI extensions.
layout: new-page
scope: Datama/light/spreadsheet
keywords: Datama spreadsheet settings json config pivot fields
---

<br>

> Discover how Datama Spreadsheet settings are configured and saved in Datama environments.

<br>

# 1. Pivot field settings

Datama Spreadsheet setup follows a pivot configuration model:

- **Rows**: categorical fields listed vertically
- **Columns**: categorical fields spread horizontally
- **Values**: numerical fields computed in the pivot output

These fields define the structure of your spreadsheet analysis.

<br>

# 2. Spreadsheet behavior settings

Depending on your BI extension context, settings can include:

- Formatting defaults
- Filter and sort states
- Display preferences for edit mode and result mode
- Formula and calculation context

Just use the setting ribbon on the top bar and apply as you would do in Excel or Google Sheet

<br>

# 3. JSON config persistence

As for other Datama solutions, Datama Spreadsheet settings are saved through Datama standard JSON config logic, using the save button

This JSON config is used to persist extension settings and restore them across sessions. It is not intended to be manually edited.

Config reload depends on whether the cell is **inside** or **outside** the viz data range.

### Inside the viz range (cells fed by the viz tool)

- **Only formatting is saved** — font, color, background, borders, number format, alignment, conditional formatting.
- **Values and formulas are not saved.** The viz tool is the source of truth, so on reload cells refresh with the latest data.
- If you type a hard value or a formula over a viz cell, you'll see a warning: that change will be lost on reload. When many cells are affected at once (e.g. inserting a row), the warnings are grouped into a single notification.
- Formatting survives column reordering and viz data changes. If a row disappears from the viz, its formatting is dropped.

### Outside the viz range (cells you add yourself)

- **Everything is saved** — values, formulas, and formatting.
- **Formulas are re-computed on reload** against the fresh viz data. For example, `=SUM(B2:B10)` referencing the viz range always reflects the current values, not the values at save time.

<br>

# 4. Display mode settings

You can switch from configuration to result display by exiting edit mode.

Out of Edit mode, the extension displays only the spreadsheet result, without toolbar and without grid lines.

<br>

Get more information about extension [interface]({{site.url}}/{{site.baseurl}}/extensions/datama-spreadsheet/structure.html) and [concept]({{site.url}}/{{site.baseurl}}/extensions/datama-spreadsheet/concept.html).

<br>
