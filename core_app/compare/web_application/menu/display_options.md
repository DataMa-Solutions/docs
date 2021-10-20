---
title: Display options
description: Show the options.
layout: page
---

* **Text size :** text size of the waterfall graph (by default at 12)
* **Contextual help precision:** Out of 10, this ladder allows to adapt the level of detail available in the contextual help (executive summary, info bubble,…). By default the contextual help is at 5.
* **Contextual help:** Display executive summary and contextual worded sentences in help tooltips of charts. Swith off to avoid contextual help in the interface
* **Safe Mode** (<span style="color:red">SafeMode</span>): Activates two important checks:
    * The volume of events you’re considering in your analysis (<span style="color:red">DimensionForFlag, MinValueForFlag</span>): Is the total sum of selected Dimension above a certain threshold both within Start and End ? The idea is to check that your analysis is « significant » and everything you’re saying makes some sense. If not, a flag will be raised. Of course, this is far from a proper statistical significance test. [DataMa Impact]({{site.url}}/{{site.baseurl}}/core_app/impact) might help you in doing that properly, with the appropriate statistical tests
    * The correlation between your dimension is not too high (<span style="color:red">DimensionsAreNotIndependent</span>). We’re using Chi-Square test here to evaluate the correlations within dimensions. This is important because when you compute a mix effect on two dimensions, it could very well appear that those two mix are actually the same effects. [DataMa Pivot]({{site.url}}/{{site.baseurl}}/core_app/pivot) might help you in understanding this better.
* **Label bridges:** Choose whether you want to display numbers on waterfall or not
* **Print version:** Allow to read Shiny chart of segment performance without hovering on it
* **Funnel shape:** Toggle off to force polygons on table view to be squares instead of trapezes
