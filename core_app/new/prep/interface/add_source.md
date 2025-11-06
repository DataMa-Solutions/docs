---
title: Prep - Add Source
description: This section helps you extract data from your data sources
layout: new-page
scope: Datama/saas/prep
keywords: full app prep add source
---

<br>

Our tools allow you to enrich your local data with external data like Google Trend and others. Allowing you to understand all your kpi variation

<br>

Find [here]({{site.url}}/{{site.baseurl}}/core_app/new/prep/dataset.html) how you need to format your dataset for Datama solutions


Here is the available connectors:
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/add_source.png"/></center>
<br>


And see also our [extensions]({{site.url}}/{{site.baseurl}}/core_app/new/integration/integrations.html) (Tableau, Power BI, LookerStudio,...)


# 1. Google Sheet

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/add_source.gif"/></center>

When adding a google sheet block to your flow, it’ll require a small configuration.
- First you need to have the url of your google sheet. 
Copy/ past the URL or select it with the <b>"Share"</b> Button on the top right (next to your account name) inside google sheet and <b>"Copy link"</b>
- Share your Gsheet with Datama
When your spreadsheet is public, you have nothing else to do.
If you have a private spreadsheet we will need to have your authorization to access it. You can give access to your spreadsheet with the <b>Connect</b> or the <b>Give access to Datama</b> button on the connector.
When those steps are completed, you just have to select the sheet you would like to load and click <b>Load</b>

<div class="info-box">
  <strong>Note</strong>: Note that for performance reasons, we cache every source blocks for one hour. So if you have made changes on your spreadsheet, within the hour, you will need to click on the header refresh button again to have your changes reflected in the sample.
</div>

<br>

# 2. Excel File

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/add_source_excel.gif"/></center>

If you want to analyze your excel file, it’s easy. Click on the Excel connector, drop (or click) your excel file in the box given, and upload. You will be asked which sheet you want to use, and that’s it. Click on load and continue building your flow with more blocks.

<div class="info-box">
  <strong>Note</strong>: Note that for performance reasons, we cache every source blocks. So if you have made changes on your excel, you will need to upload it again.
</div>

<br>

# 3. csv File

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/add_source_csv.gif"/></center>

If you want to analyze your csv file, it’s easy. Click on the csv connector, drop your csv file in the box given, and upload. You will be asked which csv separator you want to use, and that’s it. 
Click on load and continue building your flow with more blocks.

<div class="info-box">
  <strong>Note</strong>: Note that for performance reasons, we cache every source blocks. So if you have made changes on your csv, you will need to upload it again.
</div>

<br>

# 4. Calendar

<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/prep_calendar1.png"/>
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/prep_calendar2.png"/>
</div>


There are two possibilities. You either choose a suggested calendar from our team, or you can use one of your own.
If you choose to use one of your own, you'll need to have the url of your calendar, it can be a .ics, a public Google Calendar or an Outlook URL. Else you can the source URL we use printed (these calendars come directly from Google).

<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/prep_google_calendar.png"/>
</div>

In case you want to use a private Google Calendar, you can use the secret link at iCal format from calendar parameters in Google Calendar interface.
Now you simply have to click on <b>Load</b>

<div class="info-box">
  <strong>Note</strong>: Note that for performance reasons, we cache every source blocks for one hour. So if you have made changes on your calendar, within the hour, you will need to click on the header refresh button again to have your changes reflected in the sample.
</div>


<!-- # 5. Google Analytics 3 

You can upload your Google Analytics datasets in Datama PREP.
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

<div class="info-box">
  <strong>Note</strong>: Note that for performance reasons, we cache every source blocks for one hour. So if you have changes on your GA3, within the hour, you will need to click on the header refresh button again to have your changes reflected in the sample.
</div>

<br> -->

# 5. Google Analytics 4

You can pull your GA4 data in Datama Prep, using the GA4 API.
Click on the Analytics 4 connector in Datama prep, you might need to give authorization to your google analytics by clicking on <b>Connect</b> button.

Select your property, metrics and dimensions. You can choose only one property and only 9 dimensions and up to 10 metrics.
You can also filter data from Google Analytics 4, using the filter section

<u>Timeframe selection</u>
Select whether you want a relative date, or absolute. If you want to lock your timeframe selection, uncheck the “move the time window overtime”

<u>Avoid sampling</u>

One thing to keep in mind: when pulling <b>large datasets</b> from Google Analytics 4 into Datama Prep, Google Analytics may sample your data before loading it into Datama. This auto-sampling can leave your data incomplete, making your final analysis less accurate.

That’s why Datama offers the <b>Chunk Data</b> option.

In short, this feature lets Google Analytics split your large dataset into smaller parts and import them in multiple calls. Based on what you know about your dataset, you can decide how many parts to split it into.

The interface looks like this:

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/chunk_data.png"/></center>

However, this option may slow down the import process, as Google Analytics needs to run multiple queries.

<u>Prorate metrics totals</u>

As in any expore report of GA4, pulling certain metrics on certain dimensions might double count this metric. 
That is why you can use "<u>Prorate metrics totals</u>". Datama will then pull the actual, unduplicated total metric value and prorate the split to match the total account. 
For instance, imagine a user sees 2 items in 1 session, and you pull Sessions by Items. Without activating this option, you would end up with the Sum of the sessions column being "2", above the actual number of sessions that you have in total in GA4, being 1. 
By using the "<u>Prorate metrics totals</u>", you will get 0.5 session for each item, and the total will match the overall 1.
Note that when doing comparisons, you may want to pull data by separate periods, so that pro rata is done for each period separately, hence the variation between those two periods matches totals variations. 


The column total may not be the actual total if a row is counted multiple times. Therefore, we use the actual total provided by the Google Analytics API in the query. We then prorate each value of the metric concerned between our calculated total and the actual total.

<br>

<div class="info-box">
  <strong>Note</strong>: Note that for performance reasons, we cache every source blocks for one hour. So if you have changes on your GA4, within the hour, you will need to click on the header refresh button again to have your changes reflected in the sample.
</div>

{% include embed_totw.html num=152 %}


{% include embed_totw.html num=147 %}


{% include embed_totw.html num=141 %}

<br>

# 6. Google Google BigQuery

You can do an sql query on your Google BigQuery and use it in Datama PREP.
When opening the BigQuery block you can see which Google account is connected and you can disconnect it if you want to use another one.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/GoogleBigQuery1.png"/></center>

After selecting a project you are able to write a query in the project.
You can also choose to reuse a query that you have already made before using the “query history” button.
When you have typed your query it is checked to see if it is valid or not.
It is then displayed the amount of data it will use in Google BigQuery.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/GoogleBigQuery2.png"/></center>
<div class="info-box">
  <strong>Note</strong>:Note that for performance reasons, we cache every source blocks for one hour. So if you have made changes on your bigquery dataset, within the hour, you will refresh your data using the button on the header.
</div>

{% include embed_totw.html num=143 %}


<br>

# 7. Mail

The mail allows you to gather data from your email reports. Some ads providers send daily reports of multiple tracked KPIs. Usually, those reports are attached to a scheduled mail in your inbox. Now you can download those dataset into Datama and have a scheduled analysis.

Instead of using your inbox to send the reports, Datama will generate one for you. Select Datama email generated in the first selector, this will generate a unique email address to use when making your scheduled reports. Copy this email address and when you are building your scheduled reports on your ads provider, use this email.

In order for us to know which mails we are getting data from, you will be required to put the ads provider’s email in the email sender (who is sending the report usually something like noreply@acme.io ) OR an email subject (like “Your scheduled report by Acme, Inc”)

You can fill both or one of the inputs to filter out mails.

The “Data Location” section tells us where we should scrap the data from. If the data is stored in attachment, then you can set up in the advanced settings parameters like the separator, number of lines to skip etc…

If the data is stored on a remote server, try to check on your emails to see something constant in your reports url (where we should download the report from). 
For ex. if your reports are always downloaded through Amazon's server, urls will always contain 'amazonaws.com' since it's the part that doesn't change in the report url. So you can use this in the field below


<br>

# 8. Snowflake

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


<div class="info-box">
  <strong>Note</strong>: Note that for performance reasons, we cache every source blocks for one hour. So if you have made changes on your snowflake dataset, within the hour, you will refresh your data using the button on the header.
</div>

<br>

# 9. Google Trends

**Google Trend is most of the time a dataset that needs to be appended with another dataset.**

With Google Trend connector, you can enrich your data flow with Google Search result in a given date range

You can cross your data with Google trends data

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/googleTrends_step1.JPG" style="width:70%"/></center>

Choose the period of time you want to focus on, the country concerned by this trend and at last step enter your keywords.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/googleTrends_step2.JPG" style="width:60%"/></center>

It will enrich your analysis by comparing your own data of your e-commerce website or marketing campaign results with the data and trends of the market. You will be able to compare your evolution with a larger point of view and understand your performance in a more global context.

<br>

To understand better the tool "Append", click [here]({{site.url}}/{{site.baseurl}}/core_app/prep/sidebar/actions/Append.html)


<br>

# 10. Facebook

**You can upload your Facebook Analytics datasets in Datama PREP.**

When opening the Facebook block you can see which account is connected and you can disconnect it if you want to use another one.
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/FB1.PNG"/></center>

After selecting an AdAccount you are able to create a report by selecting fields, breakdowns, metrics and a preiod.
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/FB2.PNG"/></center>

Since reporting is by default at the level of Adsets, it is not mandatory to select fields or breakdowns.

If no field or breakdown is selected the chosen metrics will then be applied to the Adsets available for the selected AdAccount.

# 11. Piano Analytics

**You can import data from the data query explorer of Piano (ex AT-Internet) in Datama**

When opening the Piano Analytics block in Datama prep, you first need to upload an API key. This API key can be generated on your profile section in Piano [learn more](https://support.piano.io/hc/en-us/articles/4466006444306-API-Keys). Download the API key (.csv) from Piano on your computer, then upload it in Datama Prep in the API key section

Once done, you then need to paste an "API body" content. This will be generated in the data query interface of Piano Analytics: create a report containing the properties and metrics that you want in Datama and then hit "Copy API body (POST)" on the top right of the report and then copy the Body block
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/PianoDataQuery.png"/></center>

Then Paste the API body in Datama prep in the appropriate field

Lastly, define your dates for the report in Datama Prep (this will overwrite the dates you have set in the data query explorer interface in Piano, so that your data is always up to date) 

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/PianoDataResults.png"/></center>

<div class="info-box">
  <strong>Note</strong>: It is now possible to define several date ranges in the same source block for Piano connectors. you can add a «Date range» column to facilitate comparison, without having to use a date dimension. Read more on <a href="https://datama-solutions.github.io/docs/tip_of_the_week.html#:~:text=Tip%20of%20the%20week%20141
  ">this page</a>
</div>

# 12. Amazon Redshift

When using the Amazon Redshift connector, you’ll need the following information to configure the source :
- Host (ex. redshift-cluster-1.abc123xyz.us-west-2.redshift.amazonaws.com)
- Port (ex. 5439)
- Database (ex. mydatabase)
- Username (ex. myuser)
- Password (ex. mypassword)

With those information, you will need to fill your credentials in the Connector to log into your Redshift. Once finished, hit Login.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/AmazonRedshiftConnection.png"/></center>

When connected, you can enter your query and click Load to apply it.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/AmazonRedshiftQuery.png"/></center>
