---
title: Interface of Datama Detect Extension
description: Datama Detect evaluates the normality of variations over time.
layout: new-page
scope: Datama/light/detect
keywords: Datama light detect Detect anomaly structure
---

<br>

> **The Datama Detect plugin evaluates and explains the normality of variations over time**

<br>

## 1. Overview

The Datama Detect extension consists of three main sections: header, analysis, and footer.

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/detect_structure_new.png"/></center>

<br>

## 2. Header section

The header contains advanced global settings that allow you to configure and refine your analysis. See the dedicated section on [Settings]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/settings/settings.html) for more details.

Key elements include:
- **Documentation**: Direct access to this documentation
- **Settings**: Configure your modeling parameters. Learn more on this [page]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/settings/settings.html)

<br>

## 3. Analysis section

This section displays a time series showing either all anomalies (default setting) or just the latest data point in your dataset. You can toggle between these views using the Subheader setting "Analyze Latest Point Only".

Select different ratios to analyze using the dropdown menu in the title. KPIs are categorized into two groups: "KPIs with Anomalies" and "Other KPIs".

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/detect_dropdown.png"/></center>

By default, Datama Detect analyzes each step of your market equation, but you can focus on specific steps through the Settings menu.

The visualization includes several display options:

<center><img style="width: 30%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/selected step.png"/></center>

1. **Selected Step**: Choose which KPI to analyze

<center><img style="width: 30%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/Toggle Denominator.png"/></center>

2. **Toggle Denominator**: Show denominator as a bar graph

<center><img style="width: 30%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/Toggle Main KPI.png"/></center>

3. **Toggle Main KPI**: Show or hide the main KPI line to assess how variations in other KPIs affect it

<center><img style="width: 30%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/Toggle Confidence interval.png"/></center>

4. **Toggle Confidence interval**: Show or hide the blue band (confidence interval) in the background

<center><img style="width: 50%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/Table View.png"/></center>


5. **Table View**: Allows selection of one or several KPIs by segment, enabling more customized monitoring.

<br>

## 4. Footer section

The footer content varies based on your subscription plan and includes:
- Plan upgrade options
- [Documentation](https://docs.Datama.io/)
- [Contact Support](https://Datama.io/lets-talk/)
