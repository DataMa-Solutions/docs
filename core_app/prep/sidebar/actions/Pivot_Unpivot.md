---
title: Pivot and Unpivot actions
description: Pivot and Unpivot actions allow you to apply a pivot and unpivot action on your data.
layout: page
scope: shiny
---

**You might want to pivot and unpivot your dataset in Datama PREP.**


What is that for?
## Pivot operations

![pivot](images/pivot.png)

A **pivot table** is a table of grouped values that aggregates the individual items of a more extensive table within one or more discrete categories. This summary might include sums, averages, or other statistics.


## UnPivot example
![unpivot](images/unpivot_dss.png)

We have a column gender containing only two unique values, {males, females}.
We want to split sessions according to those values. To do so, we will unpivot the column gender using sessions as an aggregates column.

![unpivot](images/unpivot.png)

For example, this unpivot configuration creates two columns {Sessions.female and Sessions.males} containing the same values but in two distinct columns.

![unpiv_col](images/unpivoted_column.png)