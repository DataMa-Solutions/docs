---
title: Prep - Add Source
description: This section helps you extract data from your data sources
layout: page
scope: datama/saas/prep
keywords: full app prep add source
---

<br>

Our tools allow you to enrich your local data with external data like Google Trend and others. Allowing you to understand all your kpi variation

<br>

Find [here]({{site.url}}/{{site.baseurl}}/core_app/new/prep/dataset.html) how you need to format your dataset for DataMa solutions


Here is the available connectors:
- [Google Sheet](#google-sheet)
- [Excel File](#excel-file)
- [csv File](#csv-file)
- [Google Analytics 3](#google-analytics-3)
- [Google Analytics 4 (beta)](#google-analytics-4-beta)
- [Google Google BigQuery](#google-google-bigquery)
- [Mail](#mail)
- [Snowflake](#snowflake)
- [Google trends](#google-trends)
- [Facebook](#facebook)
- [Piano Analytics (AT Internet)](#piano-analytics)

And see also our [extensions]({{site.url}}/{{site.baseurl}}/core_app/new/integration/integrations.html) (Tableau, Power BI, LookerStudio,...)


> ## Google Sheet

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

> ## Excel File

If you want to analyze your excel file, it’s easy. Click on the Excel connector, drop (or click) your excel file in the box given, and upload. You will be asked which sheet you want to use, and that’s it. Click on load and continue building your flow with more blocks.

⚠️ **Important information :** <i>Note that for performance reasons, we cache every source blocks. So if you have made changes on your excel, you will need to upload it again.</i>

<br>

> ## csv File

If you want to analyze your csv file, it’s easy. Click on the csv connector, drop your csv file in the box given, and upload. You will be asked which csv separator you want to use, and that’s it. 
Click on load and continue building your flow with more blocks.

⚠️ **Important information :** <i>Note that for performance reasons, we cache every source blocks. So if you have made changes on your csv, you will need to upload it again.</i>

<br>

> ## Google Analytics 3 

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

> ## Google Analytics 4 (beta) 

You can upload your Google Analytics 4 datasets in DataMa PREP.
Click on the Analytics 4 connector in Datama prep, you might need to give authorization to your google analytics by clicking on <b>Connect</b> button.

Select your property, metrics and dimensions. You can choose only one property and only 9 dimensions and up to 10 metrics.
You can also filter data from Google Analytics 4


<u>Timeframe selection</u>
Select whether you want a relative date, or absolute. If you want to lock your timeframe selection, uncheck the “move the time window overtime”

<br>

⚠️ **Important information** :<i> Note that for performance reasons, we cache every source blocks for one hour. So if you have changes on your GA4, within the hour, you will need to click on the header refresh button again to have your changes reflected in the sample.</i>

<br>

> ## Google Google BigQuery

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

> ## Mail

The mail allows you to gather data from your email reports. Some ads providers send daily reports of multiple tracked KPIs. Usually, those reports are attached to a scheduled mail in your inbox. Now you can download those dataset into DataMa and have a scheduled analysis.

Instead of using your inbox to send the reports, DataMa will generate one for you. Select DataMa email generated in the first selector, this will generate a unique email address to use when making your scheduled reports. Copy this email address and when you are building your scheduled reports on your ads provider, use this email.

In order for us to know which mails we are getting data from, you will be required to put the ads provider’s email in the email sender (who is sending the report usually something like noreply@acme.io ) OR an email subject (like “Your scheduled report by Acme, Inc”)

You can fill both or one of the inputs to filter out mails.

The “Data Location” section tells us where we should scrap the data from. If the data is stored in attachment, then you can set up in the advanced settings parameters like the separator, number of lines to skip etc…

If the data is stored on a remote server, try to check on your emails to see something constant in your reports url (where we should download the report from). 
For ex. if your reports are always downloaded through Amazon's server, urls will always contain 'amazonaws.com' since it's the part that doesn't change in the report url. So you can use this in the field below


<br>

> ## Snowflake

When using the snowflake connector, you’ll need the following information to configure the Snowflake source :
- Organization link which is the link https://XXX-XXX.snowflakecomputing.com
  - In this link you'll need the Account ID which is XXX-XXX part of the url.
  - You can find it by going in your Snowflake Admin > Accounts.
  - Hover the account you would like to connect to, and a link icon should appear next to account name, copy the url.
  - Cut the Account ID from the url.
  <center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/prep_snowflake_account_id.png"/></center>
- Warehouse (optional)
- Database (optional)

With those information, you will need to fill your credentials and the Account ID in the account field. Once finished, hit connect.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/prep_snowflake.png"/></center>

When connected, you can select a warehouse and a database in advanced settings if needed, and input your query. 

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/prep_snowflake_advanced_settings.png"/></center>

⚠️ **Important information** :<i> Note that for performance reasons, we cache every source blocks for one hour. So if you have made changes on your snowflake dataset, within the hour, you will refresh your data using the button on the header.</i>

<br>

> ## Google Trends

**Google Trend is most of the time a dataset that needs to be appended with another dataset.**

With Google Trend connector, you can enrich your data flow with Google Search result in a given date range

#### You can cross your data with Google trends data

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/googleTrends_step1.JPG" style="width:70%"/></center>

### Choose the period of time you want to focus on, the country concerned by this trend and at last step enter your keywords.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/googleTrends_step2.JPG" style="width:60%"/></center>

It will enrich your analysis by comparing your own data of your e-commerce website or marketing campaign results with the data and trends of the market. You will be able to compare your evolution with a larger point of view and understand your performance in a more global context.

<br>

To understand better the tool "Append", click [here]({{site.url}}/{{site.baseurl}}/core_app/prep/sidebar/actions/Append.html)


<br>

> ## Facebook

**You can upload your Facebook Analytics datasets in DataMa PREP.**

When opening the Facebook block you can see which account is connected and you can disconnect it if you want to use another one.
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/FB1.PNG"/></center>

After selecting an AdAccount you are able to create a report by selecting fields, breakdowns, metrics and a preiod.
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/FB2.PNG"/></center>

Since reporting is by default at the level of Adsets, it is not mandatory to select fields or breakdowns.

If no field or breakdown is selected the chosen metrics will then be applied to the Adsets available for the selected AdAccount.

> ## Piano Analytics

**You can import data from the data query explorer of Piano (ex AT-Internet) in DataMa**

When opening the Piano Analytics block in DataMa prep, you first need to upload an API key. This API key can be generated on your profile section in Piano [learn more](https://support.piano.io/hc/en-us/articles/4466006444306-API-Keys). Download the API key (.csv) from Piano on your computer, then upload it in DataMa Prep in the API key section

Once done, you then need to paste an "API body" content. This will be generated in the data query interface of Piano Analytics: create a report containing the properties and metrics that you want in DataMa and then hit "Copy API body (POST)" on the top right of the report and then copy the Body block
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/PianoDataQuery.png"/></center>

Then Paste the API body in DataMa prep in the appropriate field

Lastly, define your dates for the report in DataMa Prep (this will overwrite the dates you have set in the data query explorer interface in Piano, so that your data is always up to date) 

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/PianoDataResults.png"/></center>
