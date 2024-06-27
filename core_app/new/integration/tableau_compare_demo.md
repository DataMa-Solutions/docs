---
title: Tableau extension
description: Gap analysis in Tableau has never been easier with Datama
layout: page
scope: app
---

<br>

> Gap analysis in Tableau has never been easier with Datama

Welcome to Datama Documentation. In this page, you will learn how to use the demo version of Datama Compare Extension listed on the [Tableau gallery](https://exchange.tableau.com/en-gb/products/233)

<br>

# 1. Create a source worksheet

In Tableau Desktop, create a new worksheet a source for Datama.

A source worksheet should have all the metrics and dimensions you want to analyse in Datama.
Typically a source for Datama will have
* A set of dimensions in Rows
  - The dimension you want to compare on should come first
  - Note: By default, Datama will compare the last 2 values for discrete dimensions or split in two the dates dimensions. Makes sure to leverage Tableau parameters or filters to get the right comparison.
* A set of metrics in columns
  - Datama sets up a [relation]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/metrics_relation.html) (product of ratio) among metrics by default. Ensure they're in a "funnel" sequence.
  - Since Tableau provides metrics to Datama in alphabetical order (and not the displayed order), adding a "1_..", "2_.." in the naming of your metrics should help to get the dimensions in the right order. 

Here is an example of a source from The SuperStore default dataset of Tableau.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/integration/images/tableau_source.png"/></center>

<br>

Please refer to the full documentation to learn more about [sources]({{site.url}}/{{site.baseurl}}/core_app/new/prep/dataset.html)

<br>

# 2. Insert the Datama extension in a dashboard

* In Tableau desktop, create a new dashboard 
* Add your source worksheet to this dashboard. The source worksheet should appear as included in the left side panel. Feel free then to make it a floating object and put that in a small corner (it just needs to be there but doesn't need to be seen!)
* Drag and drop 'extension' object in the dashboard and select Datama's extension in the [Tableau Gallery](https://extensiongallery.tableau.com/extensions) 
    - Alternatively download the extension manifest file <a id="download-tableau-full-extension" href="#" target="_blank"> here</a>, you should get a .trex file. Then in Tableau, in the "add an extension" dialog, select "access local extensions" and find the .trex file you just downloaded.

Here is an example of a source from the same dataset as above.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/integration/images/tableau_dashboard.png"/></center>

# 3. Get insights

## If you are new to Datama

* (OPTIONAL - if you have multiple worksheets in the same dashboard: make sure Datama is sourcing on the right worksheet by selecting the worksheet under the "Source settings" menu in the Configure panel which you can open through the top right corner "..." button) 
* Click "Launch Trial" to get a free trial limited in time. 
* Enter your email when prompted to get a 2 weeks trial period for free


## If you are a Datama Client

* Enter your licence key by clicking on the appropriate link (or top right corner "..." then "Configure"). Your licence key is available on [Datama Platform](https://app.datama.io) under "Security" page on the home page. Ask your customer success manager if you don't see a licence key here.
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/integration/images/licence_key_tableau.png"/></center>
* Set up additional settings if need be: if default settings doesn't suit your use case (e.g. you have a custom market equation or you want to refine model settings), you can refine those settings as for any other Datama use case    
    * Click on the top right "..." and then "Configure" and give a name to your workbook
    * At the bottom of the page, click "open in full app" (Note: by doing so, you will save a new workbook on your account under the "From Extension" file)
    * Enter your normal login/password Datama credentials
    * Define your advanced settings in the workbook as you like
    * Save the workbook 💾
    * Click "Exit full app" at the bottom right of the screen to return to the simplified screen 
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/integration/images/open_full_app.png"/></center>


# 4. Publish your workbook

You can then upload publish your Dashboard embedding Datama in Tableau Server or Tableau online so that anyone in your organisation can access Datama's insights.
Just make sure that the Tableau admin authorize Datama's extension to be published on your organisation. 

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/integration/images/Tableau_gif.gif"/></center>
