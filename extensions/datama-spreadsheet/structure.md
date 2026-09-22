---
title: Interface of Datama Spreadsheet extension
description: Datama Spreadsheet interface and usage modes inside marketplace BI extensions.
layout: new-page
scope: Datama/light/spreadsheet
keywords: Datama spreadsheet interface edit mode read mode pivot
---

<br>

> **Datama Spreadsheet provides an edit mode for setup and a clean result mode for dashboard consumption.**

<br>

# 1. Overview

Datama Spreadsheet extension is organized around two main usage modes:

- **Edit mode**: configure pivot fields, formulas, formatting, and sheet behavior
- **Result mode**: display only the spreadsheet output for final dashboard reading

<br>

# 2. Edit mode

In edit mode, you can:

- Build your pivot table by assigning fields to Rows, Columns, and Values
- Adjust formats, formulas, filters, and sorting
- Use advanced spreadsheet interactions (selection, fill, validation, etc.)

This mode is intended for configuration and analysis preparation.

<br>

# 3. Result mode

When you exit edit mode, Datama Spreadsheet displays a clean output view:

- Toolbar is hidden
- Grid lines are hidden
- The user sees only the spreadsheet result

This mode is optimized for report presentation and embedded dashboard consumption.

<br>

# 4. Extension availability

Datama Spreadsheet is available in marketplace environments for:

- Tableau
- Power BI
- Qlik
- Looker Studio

It is not available in Google Sheets or Excel integrations.

<br>

# 5. Current known limitations

We are actively working on these limitations and improvements are in progress:

- `Ctrl + Arrow Up / Down` to jump to the last cell is currently not working.
- Freezing a cell reference has no shortcut. You need to manually add `$` in formulas (for example `=$A$4`). Also, when using `$` in formulas, computations are not always properly refreshed.
- Conditional formatting options are limited. In particular, you cannot define the value range used for min, max, and middle.
- Copy/paste of a cell range from an actual Excel spreadsheet works, but formulas are not saved.
- In Tableau, pivot table column selection is unstable.

<br>
