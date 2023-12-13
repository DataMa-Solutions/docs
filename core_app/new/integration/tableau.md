---
title: Tableau extension
description: Using DataMa Solutions as a Tableau extension is a great way to make your tableau report more insightful with the benefits of both DataMa and Tableau.
layout: page
scope: datama/saas
---

<br>

> Using DataMa Solutions as a **Tableau extension** is a great way to make your tableau report more insightful with the benefits of both DataMa and Tableau.

DataMa helps you do the job of an advanced data analyst faster, in Tableau.
It's particularly helpful for marketing analysis, such has gap/ root cause analysis.
Using this extension you will have access to
* Waterfall analysis using [DataMa Compare]({{site.url}}/{{site.baseurl}}/core_app/new/compare/compare)
* Significance analysis using [DataMa Assess]({{site.url}}/{{site.baseurl}}/core_app/new/assess/assess)
* Driver analysis using [DataMa Pivot]({{site.url}}/{{site.baseurl}}/core_app/new/pivot/pivot)
* Anomaly detection [DataMa Detect]({{site.url}}/{{site.baseurl}}/core_app/new/detect/detect)
* Journey and process mining [DataMa Journey]({{site.url}}/{{site.baseurl}}/core_app/new/journey/journey)

Below is a step by step on how to get it working in tableau

<br>

# 1. Create a source worksheet

In Tableau Desktop, create a new worksheet a source for DataMa.

A source worksheet should have all the metrics and dimensions you want to analyse in DataMa.
Typically a source for DataMa will have
* A set of dimensions in Rows
  - The dimension you want to compare on should come first
  - Note: By default, DataMa will compare the last 2 values for discrete dimensions or split in two the dates dimensions. Makes sure to leverage Tableau parameters or filters to get the right comparison.
* A set of metrics in columns
  - Datama sets up a [relation]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/metrics_relation.html) (product of ratio) among metrics by default. Ensure they're in a "funnel" sequence.
  - Since Tableau provides metrics to DataMa in alphabetical order (and not the displayed order), adding a "1_..", "2_.." in the naming of your metrics should help to get the dimensions in the right order. 

Here is an example of a source from The SuperStore default dataset of Tableau.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/integration/images/tableau_source.png"/></center>

<br>

Please refer to the full documentation to learn more about [sources]({{site.url}}/{{site.baseurl}}/core_app/new/prep/dataset.html)

<br>

# 2. Insert the DataMa extension in a dashboard

* In Tableau desktop, create a new dashboard 
* Add your source worksheet to this dashboard. The source worksheet should appear as included in the left side panel. Feel free then to make it a floating object and put that in a small corner (it just needs to be there but doesn't need to be seen!)
* Drag and drop 'extension' object in the dashboard and select DataMa's extension in the [Tableau Gallery](https://extensiongallery.tableau.com/extensions) 
    - Alternatively download the extension manifest file <a href="https://drive.google.com/file/d/1fEN_SQ3smLI8aC0YPFpV4UP6dKWDC8pT/view?usp=sharing" target="_blank" download> here</a>, you should get a .trex file. Then in Tableau, in the "add an extension" dialog, select "access local extensions" and find the .trex file you just downloaded.

Here is an example of a source from the same dataset as above.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/integration/images/tableau_dashboard.png"/></center>

# 3. Get insights

## If you are new to DataMa

* (OPTIONAL - if you have multiple worksheets in the same dashboard: make sure Datama is sourcing on the right worksheet by selecting the worksheet under the "Source settings" menu in the Configure panel which you can open through the top right corner "..." button) 
* Click "Launch Trial" to get a free trial limited in time. 
* Enter your email when prompted to get a 2 weeks trial period for free


## If you are a DataMa Client

* Enter your licence key by clicking on the appropriate link (or top right corner "..." then "Configure"). Your licence key is available on [DataMa Platform](https://app.datama.io) under "Security" page on the home page. Ask your customer success manager if you don't see a licence key here.
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/integration/images/licence_key_tableau.png"/></center>
* Set up additional settings if need be: if default settings doesn't suit your use case (e.g. you have a custom market equation or you want to refine model settings), you can refine those settings as for any other DataMa use case    
    * Click on the top right "..." and then "Configure" and give a name to your workbook
    * At the bottom of the page, click "open in full app" (Note: by doing so, you will save a new workbook on your account under the "From Extension" file)
    * Enter your normal login/password DataMa credentials
    * Define your advanced settings in the workbook as you like
    * Save the workbook 💾
    * Click "Exit full app" at the bottom right of the screen to return to the simplified screen 
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/integration/images/open_full_app.png"/></center>


# 4. Publish your workbook

You can then upload publish your Dashboard embedding DataMa in Tableau Server or Tableau online so that anyone in your organisation can access DataMa's insights.
Just make sure that the Tableau admin authorize DataMa's extension to be published on your organisation. 

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/integration/images/Tableau_gif.gif"/></center>
