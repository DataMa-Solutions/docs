---
title: Prep - Interface
description: This section identify the type of data you should load
layout: new-page
scope: Datama/saas/prep
keywords: full app prep interface
---


> This section presents the interface of **Datama Prep**

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/images/prep_interfaceSchema.png"/></center>


The interface is composed of multiple panels:

# 1. Header

The first is the header where you can edit your flow name, open another flow, save it or delete it through the “file” menu. Then when saved, the “Data” menu enables you to schedule the flow (run and pre-cache the flow) or you can analyze it in a solution of your choice.

Find details about the [Header menu]({{site.url}}/{{site.baseurl}}/core_app/new/interface/header/header.html)

<br>

# 1. Side bar: Sources and Operators

The sidebar contains a solutions sidebar (to help you navigate through our solutions quickly) and also an “Add source” panel where you can import data from multiple location (google, facebook, twitter, snowflake, and many more providers)

<br>

Find details about the available [connectors and operators]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/add_source.html)

<br>

# 3. Interface

The main panel is where you can create and manage your flow. This panel helps you connect blocks with a flow diagram.

<br>

# 4. Sample panel

When a block is selected on the main panel, the sample panel at the bottom of the canvas shows a preview of that block's output data.

## Sample view

- Displays a **preview of approximately 8 to 10 rows** from the dataset (configurable up to 100 rows).
- Each column header shows the **column name**, **data type** (text, number, date, etc.), and a **summary statistic** from the full dataset (for example sum for numeric columns, count for text columns).
- Click a column header to **sort** the preview rows (ascending, descending, then reset).
- Use the row limit input to change how many preview rows are displayed.

## Unique view

Switch to **Unique** to inspect column-level summaries computed on the **full dataset** (not only the preview rows):

- **Numeric columns**: sum, min, mean, and max.
- **Date columns**: start and end dates.
- **Text / categorical columns**: list of unique values with their count.

> The download action (JSON, CSV, XLSX, Arrow) is documented separately and fetches the full dataset from the server.

