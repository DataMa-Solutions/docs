---
title: Power BI extension
description: Using Datama Solutions as a Power BI extension is a great way to make your report more insightful with the benefits of both Datama and Power BI.
layout: page
scope: Datama/saas
keywords: full app integration embed embedded add-on addons addon Power BI powerbi
---

<br>

> Using Datama Solutions as a **Power BI extension** is a great way to make your report more insightful with the benefits of both Datama and Power BI.

<br>

<i> **Note**: Datama provides two different Power BI extension, the full extension (explained below) and the "light" [version](https://datama-solutions.github.io//docs/extensions/how-to-use/power_bi.html) available in the Power BI Marketplace. </i>

<br>

# <b>How to load the extension?</b>

As soon as you received the extension from your Datama point of contact or downloaded from [here](https://storage.cloud.google.com/app.datama.io/powerbi/datama_latest.pbiviz), you can load the extension to get access to the Datama graphs. 
- Select "..." in the visualizations part then <i>"import visual from a file"</i> 
- <i>"Import"</i> your extension

![Power BI]({{site.url}}/{{site.baseurl}}/core_app/new/integration/images/PowerBi_loadingExtension.gif)

<br>

- Add your licence key in the Settings: Format your visual > Datama Global Settings > Licence Key

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/integration/images/powerBi_licenceKey.jpg"/></center>

<br>

# <b>How to use the Datama Extension?</b>

Datama will be basically like a Power BI graph embedded in the visualisation. You will have to configure it as a basic graph adding Dimensions and metrics. 
- the first <i>Dimension</i> will be considered as the Start & End Comparison dimension
- the metrics will be the step of your [market equation]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/metrics_relation.html) in the order of the metrics. (by default it will be a "prod" equation, this can be changed in the settings: Format your visual > Advanced Settings > Step function)


![Power BI]({{site.url}}/{{site.baseurl}}/core_app/new/integration/images/powerBi_extension.gif)

<br>

Contact us (contact@Datama.fr) to get a licence key and install the extension.


<br>

# <b>How to set up the Datama extension?</b>

- By clicking "Format your visual" and <i>object to display</i>, select the elements your want to view
    - Slide 1 chart 1 is the Waterfall
    - Slide 1 chart 2 is a funnel representation
    - Slide 2 focuses on a specific step with 
        - chart 1 reprensents the mix and performance variations 
        - and chart 2 a waterfall zoomed on a step.


 Advanced settings > 
- **Step function** : Here you can specify the linking function between the step of the waterfall. Default function is "prod" but can be "sum" or custom: e.g. <i>[1]*[2]*(1-[3])</i> which means step 1 is multiplied by step 2 and multiplied by 1-[3]. You can arrange the steps as you want, just make sure, it's still as a business sense!
-  **Main KPI name**: By default, last metrics is the main KPI, but it can be renamed here.
- **Main KPI unit**: Figures will be followed by the unit of the main KPI (€, %...). In case of percentage, the total will be multiplied by 100.
- **Language**: English or French are currently available for Title and Comments.

<br>

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/integration/images/powerBi_advancedSettings.jpg"/></center>

<br>

# <b>How to export my PowerBI graph in Datama?</b>

Once you picked your dimensions and metrics and your graph is generated, you can export it in Datama Compare as a workbook (for more advanced settings)


- Start by giving a name to the workbook in the Datama global settings.

<br>

<center><img style="width:20%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/integration/images/workbookname_pbi.png"/></center>

<br>

- On your graph, click on the icon just under the "... More options" (right up corner)
- Select "Open in full app"

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/integration/images/powerbi_openfullapp.jpg"/></center>

<br>

A pop-up will appear, click ok

<br>

<center><img style="width:50%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/integration/images/open_browser.jpg"/></center>

<br>

Your workbook will automatically be displayed in Datama.

<br>

<center><img style="width:70%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/integration/images/workbookname_datama.png"/></center>

<br>

From Datama, you can use advanced settings only available in Datama' interface. Once saved, the changes will appear in Power BI. 

<br>

Enjoy the new display in Datama and let's go deeper into your analysis!