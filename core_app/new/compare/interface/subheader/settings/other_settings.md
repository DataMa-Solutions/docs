---
title: Settings details
description: Detail of Settings
layout: page
---

> Find below all the settings of the subheader of the DataMa solutions.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/settings.jpg"/></center>
<br/>
<br/>

# <b><u>MODEL PARAMETERS</u></b>
<br/>
<br/>

# **1. Aggregation in %**

**Level of aggregation**: The level of aggregation that the model is using – e.g. if Level of aggregation is set at X%,  segment within each dimension that represents less than X% of the Primary Numerator (e.g. Revenues) of the main KPI you’re analyzing will be clustered in one « Other » segment. X is set at 2 by default, but you may want to play with this parameter quite a bit because it can change significantly the calculation of mix effects.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/settings_aggregation.jpg"/></center>

1. Click on the settings menu on the header
2. Move the cursor of the aggreation to the right to increase the level of aggregation
3. Close the panel to recaculate the results

Segments are now aggregated at the requested level


Don't hesitate to contact us if you need any other connexion with your data.

<br/>

# **2. Split Mix and Perf**

This settings sets how DataMa will act regarding Mix & Performance visualisation.
By default DataMa will automatically choose to split or not the Mix and Performance effect. If the Mix is too small, only Negative and Positive Segments will be displayed.

But you can disable this auto choice, and choose to always split the Mix and the Performance effects or Never split Mix and Perf. If so DataMa will only make a split by Positive and Negative Segments.

<br/>

# **3. Negative Driver First**

By default DataMa automatically choose to display the segment that are following the variation. If your step is increasing, the segments displayed will be the one that drive this increase. On the contrary, when your step variation is going down, datama will choose to display segments that are explaining the decrease.

This could be changed by activating the “Negative Driver First”. Negative Segments will be displayed first in the waterfall whatever the variation. Because you more often will need to improve what’s driving your business down!

<br/>

# **4. Significance test**

When owning a license of DataMa Assess (aka DataMa Impact), you can activate the significance test.
Switch on to compute significance of steps variations, using DataMa Assess methodology. Signficative variations will make % appear with a star (*) in the overall waterfall chart.

<br/>

# **5. Analyse Depth**

This selection allows to adapt the level of detail available in the contextual help (Comments,…). By default the contextual help is at Medium.
At <i>Max</i> all the available details regarding graphs will be available. 

<br/>

# **6. Covariance roll up**

By default in DataMa Compare, the covariance between each step of the market equation is distributed on total computation level.

However in some cases, you might want this distribution to be done at a lower level within a given dimension, so that when summing up the impact of each steps for each segment of that dimension at total level, you end up with the exact same total. This is particularly true when you systematically deep dive on each segment of a dimension (e.g. by Country) and also display to your end users the sum of all those segments (e.g. worldwide)

“Covariance roll up” toggle helps you do this calculation pattern, by computing the impact for each segment of a given dimension, and then sums them up at total level. To use it

Activate the covariance roll up toggle
Select the dimension you want for sub-segment distribution of covariance
See an example below:
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/CovarianceRollup.png"/></center>

<br/>

# **7. Include 0 for Y axis**

By default active, this makes the 0 line appear on the waterfall
When deactivated DataMa will adapt the Axis to your dataset. This help to better display small variations. 

<br/>

# **8. Force Rounding**:

The rounding setting will bypass the smart rounding available in DataMa which adapts the number of decimals according to each number. 

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/force_rounding.png"/></center>
<br/>

# **9. Analysis Language**


For now, DataMa is only available in English and in French. By default Datama is in english. 
- You can change the language for a specific Use Case (Settings > Analysis Language)
- or globally for the whole Use cases (Profile icon > User preferences > Analysis Language)

<br/>

# **10. Colors Palette For Plots**
    
Graphs colors are customizable, in 3 different ways. 
Grayscale, scattered and Custom. 
The custom method allows to refine color by color all the graphs available in the solution. 

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/colors_palette.png"/></center>

- Select <i>>custom</i> in the dropdown meny : "Colors Palette for plots"
- Click to the palette to Edit the colors
- Select the graph you want to modify
- Select the color you want to change by clicking on the part of the graph
- Select a new color and close the popup (no apply or OK button...it's automatically saved)
- DataMa is going the refresh the graph with the new color

<br/>

# **11. Clustering**

Clustering is necessary for dimension analysis
- For discrete dimensions, anything below X% (X=2) of primary numerator is aggregated into “other”
- For continuous dimensions, cuts are made using weighted decision tree methodology, in order to create coherent buckets.

Read docs related to continuous dimension

<br/>

<br/>

# <b><u>ANALYSIS DIMENSION</u></b>

<br/>

# **12. Smart dimension**
For each step of the waterfall analysis, the Smart dimension identifies the pair of dimensions which is most relevant in explaining performance variation. It comes in addition to the Combined dimension which crosses all dimensions.

<b>Example</b>

Consider the scenario in which your performance is entirely explained by a performance decline on mobile users with the Firefox browser. When turning on Smart dimension, DataMa Compare will identify the Device*Browser dimension as the most relevant dimension. However, when leaving the Smart dimension option off, DataMa Compare will attribute the performance variation to either the Device or Mobile dimension.

<br>

<b>Activate Smart Dimension</b>

To activate Smart Dimension, click in Settings and switch on the Smart dimension button. Combinaison of smart dimension will appear in the waterfall only if they are more relevant than an alone dimension.

You can't change the selection of the combination, but you can concatenat two columns in your dataset if you want a specific combination.

**Since it implies a longer computation time, this option is off by default. However, we recommend you turn it on if you have a small set of dimension (less than 10).**

# **13. Combined Dimensions**

By default <i>Combined Dimensions</i> is activated. DataMa creates an additional Dimension in your analyse which is the combination of all your dimension.

You can't change the selection of the combination, but you can concatenat two columns in your dataset if you want a specific combination.

# **14. Comparable Dates**

Comparable Date: When comparing two ranges of dates with same number of days, DataMa now automatically creates a “Comparable_date” dimension which allows to compare similar objects between different time frames (e.g. January, February… December when comparing two years together, or Monday, Tuesday… Sunday when comparing 2 weeks)


Don't hesitate to contact us if you need any other connexion with your data.
