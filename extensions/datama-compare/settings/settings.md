---
title: Settings of Datama Compare
description: Discover all settings exposed by Datama Compare to improve your analysis
scope: Datama/light/compare
keywords: light compare settings
---

<br/>

> Discover all settings exposed by Datama Compare extension to improve your analysis

<br/>

_Find below how you can customize Datama Compare using the General settings and the waterfall Settings_

- [1. General Settings](#1-general-settings)
    - 1.1. [Configuration](#11-model-configuration)
    - 1.2. [Comparison](#12-comparison)
    - 1.3. [Metrics Relation](#13-metrics-relation)
    - 1.4. [Preferences](#14-preferences)
- [2. Waterfall Settings](#2-waterfall-settings)
    - 2.1. [Configuration](#21-configuration)
    - 2.2. [Font & size](#22-fonts--size)
    - 2.3. [Label & Indicator](#33-label--indicators)

<br/>

# 1. General Settings


### 1.1. Model Configuration

As a global Settings, Level of aggregation, is for now the only one available. 

<!--- **Segment text complement:** "variation relative to avg" or "variation in %" this is a display option in the label of each segment when clicking a waterfall step. 
    - each segment is written like "desktop (x...)" this x is a variation relative to average (e.g if the variation at this step is +2% and the variation of Desktop is +4% the parenthesis will "x2" which the relative variation of the segment 'Desktop' compare to the average variation). 
    - When selecting "variation in %" you only have the absolut variation of the segment in %. If desktop is moving of +4%, the label will be 'Desktop (+4)'--->
- **Level of aggregation:** The level of aggregation that the model is using – e.g. if Level of aggregation is set at X%, segment within each dimension that represents less than X% of the Primary Numerator (e.g. Revenues) of the main KPI you’re analyzing will be clustered in one « Other » segment. X is set at 2 by default, but you may want to play with this parameter quite a bit because it can change significantly the calculation of mix effects. [See details]({{site.url}}/{{site.baseurl}}/new/interface/subheader/settings/aggregation.html)

![img]({{site.url}}/{{site.baseurl}}/extensions/assets/gif/asses_aggre_level.PNG){: style="align: right; width: 600px;"}

<br/>

### 1.2. Comparison 

> This part allow to choose what you want to compare, you can also add others comparison to go deeper

Defining what you want to compare is the very first step of your analysis in Datama Compare as in Datama Assess In the waterfall you can either compare dates (start period vs end period) or segments of other dimensions
1. First you need to select the dimension you want to choose for comparison, and the 2nd step is to select 2 segment within the dimension. For exemple (select Category as a Dimension and Category A and Category B as the 2 segments)
2. You can refine the selection with Advanced settings by filtering your selection 

- **Secondary Comparison**: Add a comparison to duplicate your waterfall with a secondary waterfall on a different scope. (e.g. Compare Week N versus Week N-1 and compare Week N-2 vers Week N-1).
  - Use the Advanced Settings to also select a secondary comparison on a different scope. For example, compare a Week over Week on Category A and also a Week over Week on Category B.

![img]({{site.url}}/{{site.baseurl}}/extensions/assets/gif/choose_comparison.PNG){: style="align: right; width: 600px;"}

<br/>

### 1.3. Metrics Relation

> This part allow you to edit your KPIs and your market equation, it is very useful when you want to fit your analysis with your business

Using metrics relation allows you to change your market equation, add a unit, rename your step or even indicate a threshold, exclude or focus on a dimension. Metric relation describes the equation between metrics of your source, in order to compute the KPI you want to explain.

- By default, Datama creates a product of ratios (prod) with all the steps defined in the metrics relation. However, you can change this to “sum” to add each step, e.g., Revenue = Revenue_France/1 + Revenue_UK/1 + Revenue_US/1.
- When changing the Unit to '%', in addition to change the unit, it also multiplies your figures by 100. The other 
- In the Metrics Relation definition, you can opt to set a given step to focus on a specific dimension. This action will disable the automatic dimension scoring in the computation result and only display the selected dimension.
- The excluded dimension will maintain the scoring algorithm but will not consider the excluded dimension in the calculation for this step.

![img]({{site.url}}/{{site.baseurl}}/extensions/assets/gif/PBI_MetricsRelation.PNG){: style="align: center; width: 500px;"}


<br/>

### 1.4. Preferences

> These settings allow you to customize the application to fit with your company, you can also change the analysis language !

 For now only French and English are available, let's us now if you want a new language to be added. 


![img]({{site.url}}/{{site.baseurl}}/extensions/assets/gif/PBI_LanguageSettings.PNG){: style="align: right; width: 500px;"}


<br/>
<br/>
<br/>


# 2. Waterfall Settings 

### 2.1. Configuration 

- **Number of bar before aggregation**: Number of elements you want to display in an opening step. 4 elements is the number by default.
- **Y axis auto scaling**: Start the Y scale at zero or let Datama adjust the best Y scale for you. This help to better display small variations.
- **Open biggest/focused element by default**:Let the extension directly open the step with the main variation at each loading of the graph. 
- **Draw links between elements**: Make appears a thin links between each step of the waterfall
- **Reverse axis**: Rotate the graph from 90°
- **Segment text complement**: allows to decide on what to display behind Segment name in the waterfall labelling. Options for this input are:
    - Variation relative to average (e.g. “x2.43”) - this is the default value and allows to spot easily “abnormal” variations way above average (i.e. above 1; 1 is the average)
    - Percentage Variation (e.g. “-46%”) - this is the % difference between start and end values
    - Variation absolute change (e.g. "-3pts") - this is the absolute difference between start and end values, displayed in the unit of the considered KPI
    - Nothing

![img]({{site.url}}/{{site.baseurl}}/extensions/assets/gif/PBI_SettingsWaterfall.png){: style="align: center; width: 500px;"}


<br/>




### 2.2. Fonts & Size

- **Family**: Choose amongst the Font the one that best match your current dashboard
- **Text Size**: Ajdust the visibility of your waterfall by choosin the best size of the text. 

<br/>

### 3.3. Label & Indicators

Documentation under construction

![img]({{site.url}}/{{site.baseurl}}/extensions/assets/gif/SettingsLabelIndicator.png){: style="align: center; width: 500px;"}



<br/>

---

<br/>

Get more information about extension [interface]({{site.url}}/{{site.baseurl}}/extensions/Datama-compare/structure.html) or [therotical concept]({{site.url}}/{{site.baseurl}}/extensions/Datama-compare/concept.html) of Datama.

<br>
