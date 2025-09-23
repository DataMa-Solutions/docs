---
feed: release_note
title:  "2025-09-24"
date:   2025-09-24 12:00:00 +0200
layout: post
description: |
  September brings crisp air and fresh features! 🍂
  - 🏪 Datama Light 1.5.0.0 drops with major Compare enhancements: metrics comparison, dimension-then-dimension approach, and advanced covariance distribution
  - 🔍 Detect gets powerful new methods: ARMA Forecast for seasonality analysis and Variation volatility for better anomaly detection
  - 📊 Dimension Helper now supports KPI % Change and KPI Δ metrics for comprehensive variation analysis
  - 🎨 Extension complete UI overhaul with reshaped settings, improved readability, and new save button functionality
  - 🌐 In web app, enhanced GA4 connector with AND/OR filter statements
  Ready to embrace these autumn updates?
---

* **Marketplace extension** (aka "Datama Light") [1.5.0.0]
 
  * Compare: 
    * **Metrics comparison**: You can now compare metrics which are separate columns in your data model. For instance, you can compare two metrics like "Revenue Target" and "Revenue Actual" by selecting "Compare by" > "Metrics" in the Settings panel. Previously, this would have required time consuming transformations prior ingesting the data in the data viz tool, to "pivot" your data and get one dimension with "Target/ Actual". Note that you can create multiple pairs of comparison, in case you want to create a market equation with multiple metrics.  
    * **Dimension then Dimension approach**: If you have one single metric and at least two dimensions on top of your comparison, Datama will automatically give you the ability to have your primary breakdown set on one of the dimension and then secondary breakdown on most interesting dimension, within remaining dimensions. This allows for instance to analyse revenue by Country, then Client type, without any data transformation. You can select and save primary breakdown in the dropdown shortcut when hovering the waterfall in the top right corner, or change it in the settings pannel in the "Market Equation" tab > "Smart Actions"
    * **Advanced Covariance distribution**: use cases with "complex" market equations (mixing "*" and "+" for instance) now see better covariance attribution to each step of the market equation. For instance, on market equation like "([Quantity comparable] x [Price comparable]) + [Revenue not comparable]", the "[Revenue not comparable]" will no longer get covariance which was previously wrongly attributed.

  * Detect: 
    * **Forecast method**: You can now detect based on ARMA forecast modeling. This model is useful to take into account seasonality for anomaly detection. Note that this method increase significantly the time of computation and as such is intentionnaly limited to "last point only" mode. 
    * **Variation volatility**: This new method is similar to "Observed volatility", but on the variation of the indicator you are looking at. It basically observes the average and the dispersion of the variation of the KPI from one day to another on your baseline, and computes a confidence interval based on this.
    * Calendar: 
      * Settings for displaying events on trends line have been improved, in particular to give the opportunity to display an event on the KPI line itself. Checkout the settings in the calendar tab of the extension to learn more
      * **Impact sizing**: Using the selected anomaly detection method, we detect if the KPI you are looking at is outside of confidence interval averaged for each event duration. If the performance is outside of confidence interval, we flag the correlation between the event and the under/ over performance. 

  * Helper: 
    * When you create a comparison, you can now analyse variations of each indicator as a separate metric. 
      For each metric of your market equation, you will get two additional metrics **"KPI % Change"** (relative variation) and **"KPI Δ"** (absolute variation") in the metric dropdown. 
      This unlocks useful use cases such as displaying on the same chart the trend of your KPI This year, Last year and % Change from one year to another.  

  * For all extensions
    * UI of settings has been reshaped, to clarify sections and improve readibility. Inputs are now better aligned with overall Datama's look & feel. Also, date inputs now allow selection in a calendar UI. 
    * **Save button** is now displayed on the top right corner in edit mode. This allows to save current setting (or get current setting JSON in the clipboard) without having to open the setting panel and click "apply". This is particularly useful when you want to save some inputs that are in the "shortcut" dropdowns, such as the chart view in helper, or the dimension breakdown in compare
    * Related to the above, in Tableau viz extension, you can now copy the current settings JSON from the "Format extension" button. This simplifies the process of migrating from public extension to private extension, because you just need to copy paste your previous settings in the new extension.
    * German translation has been added as an optional language.   

* **Wep app**
  * Prep: The filter block in prep now allows to add a "AND/ OR" statement between group of filters. 
  * GA4 connector: Similarly, the GA4 connector now allows to specify "AND/ OR" statement by group of filters. On top of that, all dimensions and metrics filters are now available.
  * Multiple bug fixes and improvements have been released (included the enhancement of icons, the clarification of buttons in header and in the export panel)
