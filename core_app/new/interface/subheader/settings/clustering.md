---
title: Clustering Settings
description: This section helps you understand the clustering methods proposed by Datama.
layout: new-page
scope: Datama/saas/prep
keywords: full app clustering
---

<br/>

> **This section helps you understand the different clustering methods**

<br/>

Within Datama, it is possible to cluster your data directly in Prep ([see here]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/refine_data.html#clean)) or in the settings of the app. To find it, go to the settings in the top right hand corner of each solution:  

<center><img  style="width:60%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_in_app.png"/></center>

Then in **Dimensions** section you will find a menu **Clustering settings**:
<center><img  style="width:60%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_settings.png"/></center>

As you can see above, there is an input **Choose clustering method**. Here, you have 3 options:
- **Auto**: clustering will be done using the [Other (<X%)](#for-discrete-dimensions) method (for discrete dimensions) or the [Regression](#for-continuous-dimensions) method (for continuous dimensions).
- **Manual**: allows you to select the clustering methods used for computation.
- **None**: your data will not be aggregated at all.


When **Choose clustering method** is on **Manual**, different methods and settings for clustering are available, depending on the type of your data. 

<br/>

# 1. Clustering Methods

<br>Basically, there are 3 categories of clustering:

- [For discrete dimensions](#for-discrete-dimensions)
- [For continuous dimensions](#for-continuous-dimensions)
- [For dates](#for-dates)

<br>
<br>

## 1.1 For discrete dimensions

### 1.1.1. Other (< X%)

With this method, any segments representing less than X% of the KPI numerator will be grouped into a 'Other' cluster. You can adjust the **Aggregation level** of the clustering. 
<br> Here is an example of this method with an aggregation level of 2:

<div style="justify-content: center; gap: 10px;">
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_other_aggregation_level_example.png"/>
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_other_than_x_percent_example.png"/>
</div>

<br>

### 1.1.2. Long tail

With this method, segments will be clustered into an 'Other' group such that the total sum of the segments in this bucket represents less than X% of the KPI numerator. Similarly to the <nobr>"Other (< X%)" method</nobr>, you can adjust the **Aggregation level**.
<br> Here is an example of this method with an aggregation level of 10: 

<div style="justify-content: center; gap: 10px;">
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_long_tail_aggregation_level_example.png"/>
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_long_tail_example.png"/>
</div>

<br>

### 1.1.3. Binning based on rank

With this method, segments will be first ranked by value on the KPI numerator, and then divided into X bins. You can adjust the number of bins created in the **Number of bins** input.
<br> Here is an example of this method with 2 bins: 

<div style="justify-content: center; gap: 10px;">
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_binrank_nb_bins_example.png"/>
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_rank_plus_bins_example.png"/>
</div>

<br>
<br>

## 1.2 For continuous dimensions

### 1.2.1. Regression

This method cluster continuous dimensions using a recursive partioning regression tree. You can adjust the tree's depth with the **Maximum depth for continuous grouping** input, which defines the granularity of the clustering. If you are not familiar with this concept, here is a brief explanation :
<br> The tree's depth controls how many times the data can be split into smaller groups. A shallow tree (low depth) creates fewer, larger groups, giving a more general overview of the data. A deeper tree (higher depth) makes more splits, creating smaller, more detailed groups. However, if the tree is too deep, it might overfit, meaning it could capture noise or random patterns in the data instead of the important trends.

Here is an example of this method:

<div style="justify-content: center; gap: 10px;">
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_regression_settings_example.png"/>
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_regression_example.png"/>
</div>

<br>

### 1.2.2. Bins

With this method, segments will be divided into X bins. You can adjust the number of bins created in the **Number of bins** input.
<br> Here is an example of this method with 2 bins: 

<div style="justify-content: center; gap: 10px;">
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_bins_settings_example.png"/>
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_bins_example.png"/>
</div>

<br>
<br>

## 1.3 For dates

### 1.3.1. Regression & Bins

Those two methods are available both for continuous dimensions and dates. 
Here is an example with the [Regression](#for-continuous-dimensions) method: 
<div style="justify-content: center; gap: 10px;">
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_regression_dates_settings_example.png"/>
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_regression_dates_example.png"/>
</div>

Here is an example with the [Bins](#for-continuous-dimensions) method:
<div style="justify-content: center; gap: 10px;">
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_bins_dates_settings_example.png"/>
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_bins_dates_example.png"/>
</div>

<br>

### 1.3.2. Truncation by Period

This method is only available for dates, truncating them by time periods such as day, week, month, or year. You can select the time period in the **Period for clustering** input. 
<br> Here is an example of this method used on "Month":

<div style="justify-content: center; gap: 10px;">
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_truncation_example.png"/>
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/clustering_truncate_period_example.png"/>
</div>
