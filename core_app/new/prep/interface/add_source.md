---
title: Prep - Add Source
description: This section helps you extract data from your data sources
layout: page
---

Find [here]({{site.url}}/{{site.baseurl}}/core_app/new/prep/dataset.html) how you need to format your dataset for DataMa solutions


Here is the available connectors:
- [Google Sheet](#google-sheet)
- [Excel File](#excel-file)
- [csv File](#csv-file)
- [Google Analytics 3](#google-analytics-3)
- [Google Analytics 4 (beta)](#google-analytics-4-beta)
- [Google Google BigQuery](#google-google-bigquery)
- [Snowflake](#mail)

And see also our [extensions]({{site.url}}/{{site.baseurl}}/core_app/new/integration/inegration.html) (Tableau, PowerBI, LookerStudio,...)


> ### Google Sheet ###

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/prep_googleSheet.jpg"/></center>



When adding a google sheet block to your flow, it’ll require a small configuration.
- First you need to have the url of your google sheet. 
Copy/ past the URL or select it with the <b>"Share"</b> Button on the top right (next to your account name) inside google sheet and <b>"Copy link"</b>
- Share your Gsheet with DataMa
When your spreadsheet is public, you have nothing else to do.
If you have a private spreadsheet we will need to have your authorization to access it. You can give access to your spreadsheet with the <b>Connect</b> or the <b>Give access to Datama</b> button on the connector.
When those steps are completed, you just have to select the sheet you would like to load and click <b>Load</b>

⚠️ **Important information** : <i>Note that for performance reasons, we cache every source blocks for one hour. So if you have made changes on your spreadsheet, within the hour, you will need to click on the header refresh button again to have your changes reflected in the sample.</i>

<br>

> ### Excel File ###

If you want to analyze your excel file, it’s easy. Click on the Excel connector, drop (or click) your excel file in the box given, and upload. You will be asked which sheet you want to use, and that’s it. Click on load and continue building your flow with more blocks.

⚠️ **Important information :** <i>Note that for performance reasons, we cache every source blocks. So if you have made changes on your excel, you will need to upload it again.</i>

<br>

> ### csv File ###

If you want to analyze your csv file, it’s easy. Click on the csv connector, drop your csv file in the box given, and upload. You will be asked which csv separator you want to use, and that’s it. 
Click on load and continue building your flow with more blocks.

⚠️ **Important information :** <i>Note that for performance reasons, we cache every source blocks. So if you have made changes on your csv, you will need to upload it again.</i>

<br>

> ### Google Analytics 3 ###

You can upload your Google Analytics datasets in DataMa PREP.
Click on the Analytics 3 connector in Datama prep, you might need to give authorization to your google analytics by clicking on [Connect] button. You can also use service account to connect to Google Analytics. Learn more on [Service Accounts]("https://developers.google.com/analytics/devguides/reporting/core/v4/authorization#service_accounts") here

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/prep_googleAnalytics3.png"/></center>

<b>Views Metrics and dimensions</b>
Select your view, metrics and dimensions with the first block (in red). You can choose only one view and as many metrics and dimensions you want.

<b>Segment definition</b>

About segments [from google docs]("https://support.google.com/analytics/answer/3123951?hl=en#zippy=%2Ccet-article-aborde-les-points-suivants%2Cin-this-article")
A segment is a subset of your Analytics data. For example, of your entire set of users, one segment might be users from a particular country or city. Another segment might be users who purchase a particular line of products or who visit a specific part of your site.
Segments let you isolate and analyze those subsets of data so you can examine and respond to the component trends in your business. For example, if you find that users from a particular geographic region are no longer purchasing a line of products in the same volume as they normally have, you can see whether a competing business is offering the same types of products at lower prices. If that turned out to be the case, you could respond by offering a loyalty discount to those users that undercuts your competitor’s prices.
You can also use segments as the basis for audiences. For example, you might create a segment of users who visit your menswear pages, and then target just those users (your audience) with a remarketing campaign that is focused on the new items that you are adding to those pages.

<u>Segment definition</u>
It is not mandatory to add segments to your report. Just check the “Add segment(s)”. You can add up to <b>4 segments</b>

<u>Timeframe selection</u>
Select whether you want a relative date, or absolute. If you want to lock your timeframe selection, uncheck the “move the time window overtime”

⚠️ **Important information :** <i>Note that for performance reasons, we cache every source blocks for one hour. So if you have changes on your GA3, within the hour, you will need to click on the header refresh button again to have your changes reflected in the sample.</i>

<br>

> ### Google Analytics 4 (beta) ###

You can upload your Google Analytics 4 datasets in DataMa PREP.
Click on the Analytics 4 connector in Datama prep, you might need to give authorization to your google analytics by clicking on <b>Connect</b> button.

Select your property, metrics and dimensions. You can choose only one property and only 9 dimensions and up to 10 metrics.
You can also filter data from Google Analytics 4


<u>Timeframe selection</u>
Select whether you want a relative date, or absolute. If you want to lock your timeframe selection, uncheck the “move the time window overtime”

<br>

⚠️ **Important information** :<i> Note that for performance reasons, we cache every source blocks for one hour. So if you have changes on your GA4, within the hour, you will need to click on the header refresh button again to have your changes reflected in the sample.</i>

<br>

> ### Google Google BigQuery ###

You can do an sql query on your Google BigQuery and use it in DataMa PREP.
When opening the BigQuery block you can see which Google account is connected and you can disconnect it if you want to use another one.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/GoogleBigQuery1.png"/></center>

After selecting a project you are able to write a query in the project.
You can also choose to reuse a query that you have already made before using the “query history” button.
When you have typed your query it is checked to see if it is valid or not.
It is then displayed the amount of data it will use in Google BigQuery.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/GoogleBigQuery2.png"/></center>

⚠️ **Important information** :<i> Note that for performance reasons, we cache every source blocks for one hour. So if you have made changes on your bigquery dataset, within the hour, you will refresh your data using the button on the header.</i>


<br>

> ### mail ###

The mail allows you to gather data from your email reports. Some ads providers send daily reports of multiple tracked KPIs. Usually, those reports are attached to a scheduled mail in your inbox. Now you can download those dataset into DataMa and have a scheduled analysis.

Instead of using your inbox to send the reports, DataMa will generate one for you. Select DataMa email generated in the first selector, this will generate a unique email address to use when making your scheduled reports. Copy this email address and when you are building your scheduled reports on your ads provider, use this email.

In order for us to know which mails we are getting data from, you will be required to put the ads provider’s email in the email sender (who is sending the report usually something like noreply@acme.io ) OR an email subject (like “Your scheduled report by Acme, Inc”)

You can fill both or one of the inputs to filter out mails.

The “Data Location” section tells us where we should scrap the data from. If the data is stored in attachment, then you can set up in the advanced settings parameters like the separator, number of lines to skip etc…

If the data is stored on a remote server, try to check on your emails to see something constant in your reports url (where we should download the report from). 
For ex. if your reports are always downloaded through Amazon's server, urls will always contain 'amazonaws.com' since it's the part that doesn't change in the report url. So you can use this in the field below


<br>

> ### Snowflake ###

When using the snowflake connector, you’ll need the following information to configure the Snowflake source:
- Organization link which is the link https://XXX-XXX.snowflakecomputing.com
- You can copy the organization url in your Snowflake Admin > Accounts and hover on the account you would like to connect to, and a link icon should appear next to account name, copy the url. It’ll be the XXX-XXX (Account ID) in the url.
- Warehouse (optional)
- Database (optional)
With those information, you will need to put the Account ID in the account field, your credentials and hit connect

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/prep_snowflake.png"/></center>


When connected, you can select a warehouse and a database if needed, and input your query. 


⚠️ **Important information** :<i> Note that for performance reasons, we cache every source blocks for one hour. So if you have made changes on your snowflake dataset, within the hour, you will refresh your data using the button on the header.</i>