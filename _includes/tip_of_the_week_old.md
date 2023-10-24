## Tip of the week #83: Smart Dimension
In DataMa Compare's Waterfall, when you zoom in on a step you can see the variation in each segment of a dimension. But it can be interesting to focus on a combination of dimensions, so DataMa offers you the Smart Dimension 🤓: which will, for each stage of the Waterfall, identify the pair of dimensions most relevant to explain the variation in performance.
For example: Consider the scenario in which your performance is entirely explained by a drop in performance on mobile users with the Firefox browser. By enabling the Smart Dimension option, DataMa Compare will identify the Device*Browser dimension as the most relevant dimension 🎯. However, if the Smart Dimension option is not enabled, DataMa Compare will attribute the performance variation to the Device or Browser dimension.
NB: there is a Combined Dimension which overlaps not 2 dimensions but all the dimensions available in the dataset.
![Tip 83]({{site.url}}/{{site.baseurl}}/assets/images/tip/83.gif)

## Tip of the week #82: Looker Studio extension "Save in DataMa"
DataMa is available on Looker Studio as an extension, if you're not using it yet and you're interested here is the link to the documentation to add it to your Dashboard and don't hesitate to contact DataMa Customer Services to get the licence key associated with your account 😉
You can now have your Use Case in both Looker Studio and DataMa thanks to the "Save in DataMa" option 💾 which you'll find in the three little dots at the top right of the extension.
This option will allow you to customise your Waterfall with all the parameters available in DataMa in order to improve the visualisation in LookerStudio, you will be able to change, for example:
  * colours  🎨
  * the level of aggregation
  * step names
  * …
![Tip 82]({{site.url}}/{{site.baseurl}}/assets/images/tip/82.gif)

## Tip of the week #81: Drill Down by Dimensions then Steps
Until now, DataMa Compare analysed variation first by steps in the market equation, then by dimension within a step. You can now decide to reverse this pattern and breakdown the total variation by the segment with the greatest impact in any dimension, then by step within each segment.
To activate this option, go to Settings, then choose one of the following three options:
  * Auto", which lets you right-click on the blue bars of the Waterfall to switch from one state to another 🖱️
  * Steps than Dimensions (default)
  * Dimensions than Steps (to force the view to Dimensions then Steps)
When you're in 'Auto' mode, DataMa even gives you an assessment of what might be the most interesting scheme with an interest score ranking the two approaches 😉
![Tip 81]({{site.url}}/{{site.baseurl}}/assets/images/tip/81.gif)

## Tip of the week #80: Compact Numbers
Here's a little trick to lighten the visual of your graphs when you have large numbers. Go to "Settings" and select the "Compact Numbers" option to transform the labels into thousands, millions or more in increments of a thousand 😉
For example:
  * if you have an income of €45,548, with the "Compact numbers" option it will appear as 45.5k
  * if you have 11 342 764 visitors it will become 11.3M
  * ...
![Tip 80]({{site.url}}/{{site.baseurl}}/assets/images/tip/80.gif)

## Tip of the week #79: Personalising the performance indication of a Waterfall segment
By default, DataMa displays after the name of a segment its relative variation compared to the average variation (e.g. organic (x2.43)). You now have the option of modifying this additional text in the "Settings" by one of these three options:
  * Display the variation relative to the average (default)
  * Display the variation as a percentage
  * Disable it
Whichever option you choose, all the information will still be available in the label when you move the mouse over a segment 😉
![Tip 79]({{site.url}}/{{site.baseurl}}/assets/images/tip/79.gif)

## Tip of the week #78: Comparison Table in DataMa Journey
While performing a user journey analysis in DataMa Journey, discover our new feature: The interactive table 😎
By hovering your mouse over the different stages of the Sunburst, this table will allow you to :
  * View the proportion of users at each stage of the selected route.
  * For benchmarking purposes, the table provides a percentage view of users between your two comparables, as well as a view of the differential in points. 😉
![Tip 78]({{site.url}}/{{site.baseurl}}/assets/images/tip/78.gif)

## Tip of the week #77: Filtering with REGEXPs
In a dimension when you have many segments, it is time consuming to select/deselect the segments you want to filter, nevertheless you have the possibility in the "advance settings" to filter with a REGEXP (Regular Expression) to save time 😉
Here are some use cases:
  * On user journeys in Journey, if you want to filter all the journeys that have passed through a certain page (e.g. ^Search corresponds to the journeys of users who started with the Search)
  * On dates, if you want to filter only dates containing the year 2023 or a certain month (e.g. 2023-03-.* for the whole month of March 2023)
  * On media campaigns (ex: paid_search_.* for search campaigns)
![Tip 77]({{site.url}}/{{site.baseurl}}/assets/images/tip/77.gif)

## Tip of the week #76: Dimension Helper
Do you know the "Dimension Helper"? 🤔 This will allow you to see in a synthetic way the value (in line) and the distribution (in bar) of the KPIs of your market equation on the segments of a dimension 🤩
To open it, just go to the "Filters" tab in the top bar, you will then be able to :
  * select your dimension
  * select the step of the market equation you want to follow
  * have a better comparison, select the "Overlay" view
  * apply filters on the different dimensions at your disposal
![Tip 76]({{site.url}}/{{site.baseurl}}/assets/images/tip/76.gif)

## Tip of the week #75: Display waterfall in points
In DataMa Compare, you can now display your waterfall in points (%) instead of the volume view of the total KPIs 🤩
To switch between the two views, simply right-click on the blue total bars and select "% Display impact in points" 😉
![Tip 75]({{site.url}}/{{site.baseurl}}/assets/images/tip/75.gif)

## Tip of the week #74: Comparison date range available in DataMa's LookerStudio extension
DataMa continues to improve its extensions in the visualisation tools. In Looker Studio you can now enable the "comparison date range" feature to compare B (the period you select in the filter) vs A (the comparison period you select in the dropdown menu: previous period, previous year,...), which will make it more dynamic to use 😃
![Tip 74]({{site.url}}/{{site.baseurl}}/assets/images/tip/74.gif)

## Tip of the week #73: Secondary Comparison available in the Table
In DataMa Compare you have the possibility to compare one variation with another variation, this is what is offered with the "Secondary Comparison". This is useful when you compare for example one period to another and want to highlight this comparison with what happened in the same periods the year before.
The last release added the "Secondary Comparison" to the Table, now when you activate it a line will be added under each segment corresponding to the variation on this second comparison 😉
![Tip 73]({{site.url}}/{{site.baseurl}}/assets/images/tip/73.gif)

## Tip of the week #72: CSV Skip Raw
Small improvement in DataMa Prep, now you have an option to skip a certain number of lines in your CSV. For example, if you have a title when you export the CSV, no need to delete the first few lines of the file before importing it into DataMa, you can select the number of lines to skip 😉
![Tip 72]({{site.url}}/{{site.baseurl}}/assets/images/tip/72.gif)

## Tip of the week #71:
On the new version of DataMa in the Compare solution, the table available in the second slide under the Waterfall has been improved 🥳
  * With the addition of an expansion of each column and a small lock 🔒 allowing you to block the opening of a column to have several open
  * With the addition of new columns: Rank and Rank Change, which allows you to know the ranking of a segment on a metric (eg. the desktop is #1 in conversion) and the variation of this rank between the two points of comparison (e.g. the desktop was #2 in conversion and it is now #1)
  * With the implementation of a table configuration menu that will allow you to:
    * Change the order of the columns
    * Display the columns you want to see
    * Apply conditional formatting (colour, bar, up & down arrow ...)
![Tip 71]({{site.url}}/{{site.baseurl}}/assets/images/tip/71.gif)

## Tip of the week #70
With the arrival of the new version of DataMa, in addition to the graphic redesign, we have also improved the functioning of the "Use Cases" 💡
  * Indeed, DataMa Prep has become a unique tool for loading and transforming data
  * And we combined the "Use Cases" and the "Flows" to create only one element the "Workbooks"
And this has impacts (positive ones, of course 🤩):
  * Only your old flows created via DataMa Prep have been switched to the new solution
    * fortunately the DataMa team will accompany you to help you migrate the other Use Cases during the next months 😉
  * But above all this evolution allows you to clarify the information of your analyses, by displaying from the home page for each Workbook :
    * a clear view of the connected data source(s)
    * the various scheduled exports (Mail, Slack, statistics URL, ...),
    * the favourite solution used for this analysis
    * the folder it belongs to
    * and many other information to come 🎁
Don't hesitate to contact us to know more about this migration... and above all... go have a look at the new [platform](https://websso.datama.io/)!!!
![Tip 70]({{site.url}}/{{site.baseurl}}/assets/images/tip/70.gif)

## Tip of the week #69
You may have noticed that in the [new version of DataMa](https://websso.datama.io/),the "Impact" solution no longer appears. It has been split into two separate solutions "Assess" and "Detect" in order to meet two needs:
  * Assess: will allow you to determine the significance of your variations through different tests (Bayesian, Bootstrap, Frequentist) at the global level and on each of your dimensions
  * Detect: will focus on the detection of anomalies, whether it is one of your KPIs or all of them, with an explanation of the origin of the anomaly 🔍
![Tip 69]({{site.url}}/{{site.baseurl}}/assets/images/tip/69.png)

## Tip of the week #68
In the [new version of DataMa](https://websso.datama.io/), the old left-hand menu, where the filters were defined, is now in the top bar.
By clicking on the "filters" button, all filterable dimensions existing in your dataset will appear.
The "Helper" 📊 is a graphical aid to see the distribution of the elements of your dimension on one of the steps.
The applied filters will appear in the top bar next to the "Filter" button. You can then edit a filter by clicking on it or delete it by clicking on the small bin 😉
![Tip 68]({{site.url}}/{{site.baseurl}}/assets/images/tip/68.gif)

## Tip of the week #67
In the new version of DataMa, Flow Prep is an integral part of your use case. Therefore, you can navigate from it thanks to the left side bar to the solution(s) (Compare, Detect, Pivot ...) you want to use.
Moreover, a favorite icon ⭐, allows you to define the solution you want to open by default from the Home Page 😉
![Tip 67]({{site.url}}/{{site.baseurl}}/assets/images/tip/67.gif)

## Tip of the week #66
With the new version of DataMa comes a new Home 😃
In addition to the existing features, you can now:
  * Organise use cases in folders with pretty emojis 📁
  * Visually find out which sources they are connected to (under the name of your use case, there will be the logos of the sources, for example: that of two Google Sheets and one Google Analytics)
  * See when they were created/edited last
  * Add a link in the worbook description to internal documentation (by clicking on the three small dots at the bottom right and adding a URL to "Learn More...")
![Tip 66]({{site.url}}/{{site.baseurl}}/assets/images/tip/66.png)

## Tip of the week #65
When comparing two segments in the case of an AB test or when comparing two time periods, you can ask yourself the question: is the variation significant? :pensif: In DataMa, all you have to do is activate the "Significance test" toggle in Settings, then you can choose
  * the level of confidence you want to have
  * the type of test (forecast / volatility when comparing two periods, frequentist/ bayesian when comparing two variants of AB test)
On the waterfall, an asterisk will appear next to the variations that are significant, this applies to both the main KPI as well as to each of the steps 😉
![Tip 65]({{site.url}}/{{site.baseurl}}/assets/images/tip/65.gif)

## Tip of the week #64
In case you have some of your data that is "non-comparable" in your DataMa Compare analysis (e.g. closing a market), but you still want it to appear separately in your Waterfall, to compare your KPIs only on comparable things (🍎 to 🍎):
  * Create a "Scope" column containing "In" for what you want to keep or "Out" for what you want to exclude
  * DataMa will automatically exclude the "Out" from the analysis and show it in a separate block in the Waterfall, in light blue "Out of Scope"
Note: you can also treat the "Out of Scope" as a separate step by making it appear explicitly in the market equation. For information the covariance is now redistributed only on the steps that are not independent (not to mix pieces of 🍎 with 🍐)
![Tip 64]({{site.url}}/{{site.baseurl}}/assets/images/tip/64.png)

## Tip of the week #63
To facilitate the communication and sharing about augmented analysis, DataMa is deploying a new Data Visualisation solution:
  * After the Tableau Software extension,
  * DataMa arrives on Data Studio/Looker Studio 🥳
  * The next step on Power BI!
![Tip 63]({{site.url}}/{{site.baseurl}}/assets/images/tip/63.gif)

## Tip of the week #62
The new DataMa interface is coming soon! (Stay tuned 😃)
Spoiler: it's based on the DataMa Prep interface you already have access to. This is your chance to test DataMa Prep if you haven't done so yet! 😉
On the HomePage, click on Data Flows then on the ➕ and you will be able to:
  * Find all the connectors you had and many more (BigQuery, Snowflake, Google Trends ...)
  * Clean and prepare your columns
  * Scheduling the update of your data source
![Tip 62]({{site.url}}/{{site.baseurl}}/assets/images/tip/62.png)

## Tip of the week #61
In the Impact solution, DataMa offers you the possibility to analyse the pre-post variation of an intervention on a test group. You will find use cases whenever you want to test:
  * a new SEO strategy
  * the impact of a new advertising campaign
Find the detailed analysis in our [documentation](https://datama-solutions.github.io/docs/core_app/impact/web_application/dashboard/causal_impact.html)
![Tip 61]({{site.url}}/{{site.baseurl}}/assets/images/tip/61.gif)

## Tip of the week #60
As in many countries, last weekend we switched to winter time ⌚ To avoid confusion in the schedulers on DataMa (e.g. for DataMa Prep, statics exports or by mail), the time displayed is the time in UTC +0, so it's independent of your time zone.
PS : stay informed of the latest information thanks to the notifications on the home page 😉
![Tip 60]({{site.url}}/{{site.baseurl}}/assets/images/tip/60.png)

## Tip of the week #59
Whether you're on Compare, Pivot or Impact, you've probably seen a segment named "Other (<2% of the total)" which aggregates all the smaller segments into one to lighten the visualization and interpretation of results. Nevertheless, you can adjust this setting by going to "Settings" → "Aggregation in %", you can then:
  * either increase this aggregation level up to 10%
  * or decrease it to get into the detail of this segment
![Tip 59]({{site.url}}/{{site.baseurl}}/assets/images/tip/59.png)

## Tip of the week #58
Do you know the dynamic filter on the Waterfall? After zooming in on a step, right click on one of the displayed segments and select either :
  * "Keep only": to filter only on the selected segment
  * "Exclude": to exclude the segment in question
The corresponding filters are automatically updated in the left menu :clin_d'œil:
PS: to return to the initial state, you must reset the filters in the left-hand menu
![Tip 58]({{site.url}}/{{site.baseurl}}/assets/images/tip/58.gif)

## Tip of the week #57
In DataMa Compare, if you want to zoom in on several steps at the same time, you can force the open step to remain visually open on the selected dimension, either:
  * with a click on the lock 🔒 at the top right of the zoomed step
  * with a right click on the step, then select "Lock"
To unlock the step, do the same thing by clicking on the lock or with the right click you will have the option "Unlock" 🔓
![Tip 57]({{site.url}}/{{site.baseurl}}/assets/images/tip/57.gif)

## Tip of the week #56
In your waterfall, if you want to visualize the variations more finely, you can shift the Y axis so it doesn't start at 0, for that you just need 3 clicks:
Go to "Settings" → then "Display Options" → disable the toggle: "Y Axis Include 0" and press "Enter" 😉
![Tip 56]({{site.url}}/{{site.baseurl}}/assets/images/tip/56.gif)

## Tip of the week #55
Don’t forget to save you workbook 💾
Did you know that all you had to do was press the “Ctrl + S” shortcut on your keyboard to save your workbook in DataMa?
![Tip 55]({{site.url}}/{{site.baseurl}}/assets/images/tip/55.png)

## Tip of the week #54
New connectors are available in DataMa Prep 🥳
  * The Email Connector: it allows you to load CSV files from your emails, which helps you to easily retrieve data from different platforms such as Teads, Forms, Pinterest and many more.
  * Snowflake Connector: with a simple connection to your account, you can directly import your Snowflake data into DataMa
![Tip 54]({{site.url}}/{{site.baseurl}}/assets/images/tip/54.gif)

## Tip of the week #53

![Tip 53]({{site.url}}/{{site.baseurl}}/assets/images/tip/53.gif)

## Tip of the week #52
A little ad for a change, but that might interest you...
Do you know the DataMa sponsorship system?
Because our customers are our best spokespersons, a little reminder for those who don't remember:
  * you earn -20% on your DataMa license for 1 year for any subscription of a customer referenced by you! 🥳
  * and the goodies that go with it... the DataMa down jacket is yours 😊
By the way, we share with you some Q2 references at home or elsewhere, to give you news and ideas 💡
![Tip 52]({{site.url}}/{{site.baseurl}}/assets/images/tip/52.png)

## Tip of the week #51
Little tip for DataMa users, in DataMa Compare when you want to do a breakdown of a Waterfall step, DataMa will by default make you a split by the dimension with the highest "interest score".
However, you can choose a breakdown by another dimension by right-clicking on the step you choose and clicking “split by…” and you will see the available dimensions appear with the associated “interest score”. Higher is the latter, more relevant the variations of the segments will be.
![Tip 51]({{site.url}}/{{site.baseurl}}/assets/images/tip/51.gif)

## Tip of the week #50
You want to integrate DataMa directly into your dashboards? Are you working on :
  * Tableau? Use the DataMa extension in Tableau (see documentation)
  * PowerBI? Follow this process to use the DataMa extension
  * For any other online data visualization solution like DataStudio, you can use static exports, that you can schedule (with the “Automatically Schedule” option) so that the graphs update with your source.
PS: if you want to export all the exportable graphs of a solution, do the export from the export button next to the "Save" button, otherwise export only the desired graph with the button at the level of the graph "Export graph as Public URL »
![Tip 50]({{site.url}}/{{site.baseurl}}/assets/images/tip/50.gif)

## Tip of the week #49
A new DataMa release includes a new connector!
Test the GA4 connector in a very simple way, for example to check the consistency of your data with that of GA3, for this:
  * Prepare your DataFlow in 3 clicks as in the image
  * Open it in DataMa Compare
  * Identify what needs to be improved/corrected
![Tip 49]({{site.url}}/{{site.baseurl}}/assets/images/tip/49.jpg)

## Tip of the week #48
You want the date range of your use case to evolve according to the update of your source, it's very simple when creating your use case, select the desired period, then when saving, check that the “Dynamic saving of Start & End” box is checked ✅
If your source is updated daily 📅 and you want to do, for example, a weekly analysis compared to the same week last year, you need to create a Year-Week dimension and repeat the above operation by defining this new dimension in Start/End. This use case can be set up for analyses:
  * Weekly
  * Monthly
  * Quarterly
  * Annual
  * Custom (if you want to update the data not from the most recent but from the oldest, you can uncheck the option "Use decreasing order" which is under "Dynamic saving of Start & End" in the Save As menu )
⚠ Note: your data source must either
  * include Full Last Year and This Year To Date data
  * or have exactly the same number of weeks/months/... at each update
![Tip 48]({{site.url}}/{{site.baseurl}}/assets/images/tip/48.gif)

## Tip of the week #47
Did you know ? You can download the source used by DataMa, to do this go to the Source tab, then just below “Full Data Source” click on the Excel icon to download your source in Excel format.
Useful when the source was created in DataMa Prep or via the GA connector and you want to check its figures!
![Tip 47]({{site.url}}/{{site.baseurl}}/assets/images/tip/47.gif)

## Tip of the week #46
DataMa Prep continues its expansion with the arrival of the Facebook Ads connector in addition to those existing 🥳
A little reminder for those who want to take into account the effect of the evolution of their market in their analyses, nothing could be simpler on DataMa Prep, you can do it in a few clicks with the right Google Trend index, for more precision do not hesitate to consult this [article](https://www.datama.io/2021/11/22/how-to-take-into-account-market-trends-in-your-performance-analysis/)
![Tip 46]({{site.url}}/{{site.baseurl}}/assets/images/tip/46.gif)

## Tip of the week #45
Did you know, you have the possibility to see your ratios or the value of your steps thanks to the "Ratio Definition Helper" available by clicking on the "chart" 📊 next to the Include Step in the Settings in Compare or the "division" ➗ next to KPI Denominator in Pivot.
To have a vision with the two segments selected, consider activating the Compare mode in Pivot 😉
![Tip 45]({{site.url}}/{{site.baseurl}}/assets/images/tip/45.gif)

## Tip of the week #44
To complete your analysis in DataMa Compare, discover the "Comparison Definition Helper" available by clicking on the "chart" icon next to the Start/End Dimension. It allows you to follow the evolution over time of the chosen ratio (in curve) and its denominator (in bar 📊).
An “Overview Overlay”  is also available to compare the Start and End periods.
![Tip 44]({{site.url}}/{{site.baseurl}}/assets/images/tip/44.gif)

## Tip of the week #43
Today a little tip to go further in your analysis on Compare, it’s possible for you to activate the “Compare of Compare” option in the settings.
This visualization will allow you to see in the background of your Waterfall the variations over another period
So you can highlight the results you are analyzing by comparing it, for instance, to the same period of the previous year.
![Tip 43]({{site.url}}/{{site.baseurl}}/assets/images/tip/43.gif)

## Tip of the week #42
The DataMa Prep beta, which allows you to work on your sources directly in DataMa, is evolving.
A small overview of recent features:
  * Direct connection to Bigquery
  * Creation of filters
  * Addition of calculated fields
If you haven't discovered it yet, request access to your DataMa CSM, then go to the "data flow" tab on the DataMa home page.
![Tip 42]({{site.url}}/{{site.baseurl}}/assets/images/tip/42.gif)

## Tip of the week #41
You are afraid of missing the abnormal evolution of one of your indicators, DataMa allows you to automate anomaly detection. You will then benefit:
  * For each anomaly, a notification by email or Slack
  * An explanation of the reason that drives the variation
  * Time saving and a better responsiveness when an anomaly occurs
Find out how to implement it in the article: [Anomaly detection and explanation with DataMa](https://www.datama.io/2022/01/12/anomaly-detection-and-explanation-with-datama/)

## Tip of the week #40
We have improved our wonderfull Waterfall, a first step in our technological overhaul that will facilitate the creation of new uses in the future.
You can now:
  * open the details of several steps at the same time
  * have static exports of the Waterfall which are interactive
  * drill down easily within boxes
Find the latest changes in our last [release](https://datama-solutions.github.io/docs//release.html)!📑
![Tip 40]({{site.url}}/{{site.baseurl}}/assets/images/tip/40.gif)

## Tip of the week #39
Get inspired in your analysis with those new articles 📰 on our blog!
  * Measure the impact of your consent tool: [here](https://www.datama.io/2021/11/04/how-to-analyze-the-impact-of-your-consent-tool-on-your-performance-indicators/)
  * Monitor the performance of your acquisition campaigns: [here](https://www.datama.io/2021/11/22/how-to-track-your-media-campaigns-with-datama/)
  * Take into account market trends in your analyzes: [here](https://www.datama.io/2021/11/22/how-to-take-into-account-market-trends-in-your-performance-analysis/)

Do the same at home! Then send us your results 😉

## Tip of the week #38

Latest [release](https://datama-solutions.github.io/docs/#/release) of DataMa hapenned this weekend :slightly_smiling_face:
Among others, DataMa prep is now available in beta:test_tube: , which allows you to generate a dataset for DataMa in a simple and visual way, conbining multiple sources
No more time wasted with 25 worksheet in Gsheet :nerd_face:
  * Multiple connectors for DataMa, including Google Analytics and Google trends
  * Easy data manipulation including Pivot/ UnPivot/ Renaming/ Column Ordering/ Append
  * Scheduleur available to get data fresh and ready for analysing in DataMa
Test it by asking to your DataMa CSM, then go to the "data flow" tab on the home page of DataMa

![Tip 38]({{site.url}}/{{site.baseurl}}/assets/images/tip/38.gif)

## Tip of the week #37

It's hard to keep up with the frantic release pace of the product team :sweat_smile:

The latest release was a few weeks ago (see the [release note](https://datama-solutions.github.io/docs/#/release))

On the menu is the anomaly detection in DataMa Impact, which allows to quickly identify an abnormal point in the monitoring of a KPI, and then to understand its drivers.

Compatible with the classic Datama sources, you just need to activate the 'anomaly detection' toggle at the top left of Impact to see the results appear, which will soon be automatically exportable in a slack or an email :bell:

Read this [article](https://datama-solutions.github.io/docs/#/impact/web_application/dashboard/anomaly_detection?id=anomaly-detection) to learn more, and contact us for a demo!

![Tip 37]({{site.url}}/{{site.baseurl}}/assets/images/tip/37.gif)

<h2>Tip of the week #36</h2>

📢 Lots of new stuff on the platform this week!
 You have the full list [here](https://datama-solutions.github.io/docs/#/news).

In particular, a great news for analysts whose beautiful graphs always end up in slides (we know some of them 😅 ): you can now download all DataMa graphs and comments on PowerPoint in one click.
 Just click on the "ppt" icon on the top right of the graph.

Boom 💥

![Tip 36]({{site.url}}/{{site.baseurl}}/assets/images/tip/36.gif)



<h2>Tip of the week #34</h2>

Whether in Tableau or PowerBi, transparently display your DataMa graphs  🤓
* DataMa directly retrieves your data in your dataViz tool
* You only need 3 tabs in Tableau:
* 1 for data
* 1 for DataMa configuration
* 1 to make a beautiful dashboard

Find more information on our online [documentation](https://datama-solutions.github.io/docs//#/general/admin/create_use_case/extensions/extension_tableau?id=tableau-extension) ! 📕

![Tip 34]({{site.url}}/{{site.baseurl}}/assets/images/tip/34.gif)



<h2>Tip of the week #33</h2>

Again, another release this week 🎉 !

Within the [news](https://datama-solutions.github.io/docs/#/news), the ability to visualize ratios of your 'market equation' side by side.

For instance, the click through rate of each page of a funnel on the same bar chart  
📊

Named 'Ratio helper', this visualisation is useful to know which ratio is under/ over performing even before trying to understand the drivers in Pivot.

You can see it by clicking on the ➗   in the settings.

To learn more, click [here](https://datama-solutions.github.io/docs/#/general/menu/ratio_helper).

![Tip 33]({{site.url}}/{{site.baseurl}}/assets/images/tip/33.png)


<h2>Tip of the week #32</h2>

🤔  We often try to improve what drives its performance downwards rather than showing what is already going well ... and that's why we have implemented the functionality: Negative drivers first: ↘️ !!
* By activating this feature in the settings in the left menu, the solution will display as a priority for each step the segments that are driving the performance down
* This feature comes in handy when you have a growing stage, a lot of different segments, and you would like to focus on the ones that have gone down rather than seeing the ones that are doing well.
* We also take the opportunity to redo the scoring of the dimensions by looking first at the dimensions whose segments best explain the decrease (even for the increasing stages)

![Tip 32]({{site.url}}/{{site.baseurl}}/assets/images/tip/32.gif)



<h2>Tip of the week #30</h2>

🚒 Following the events at OVH, here is some information on the situation of DataMa hosting:
*       Being hosted at OVH, we were impacted by the shutdown of services following the Strasbourg fire, but ultimately without much consequence because we were able to switch the solution to other servers in Europe.
*       A few hours after the shutdown, everything was back to normal, the backups worked fine, everything was restored on solutions.datama.fr 🤓
*       We even took the opportunity to increase the power of the platform. 🚀
*       Do not hesitate to come back to us if you have any access problem.
*       Thank you for your understanding and again sorry for the inconvenience.

![Tip 31]({{site.url}}/{{site.baseurl}}/assets/images/tip/31.gif)



<h2>Tip of the week #29</h2>

🆕 Multiple [news](https://datama-solutions.github.io/docs/#/news) on DataMa this week, including some great features.
Within them, "right click"  🖱 on DataMa Compare waterfall is now available. You can easily decide to:

* Zoom on a given step to see the details of a dimension (left click equivalent)
* Skip (collapse) a step in the funnel
* Filter/ Exclude a given segment
* Change breakdown dimension
* Show more segments in a dimension

Your turn to test it!

![Tip 29]({{site.url}}/{{site.baseurl}}/assets/images/tip/29.png)



<h2>Tip of the week #28</h2>

Afraid of explaining what's a mix effect in that meeting with the DataMa Waterfall 😨 ?

Good news, you don't need to show it. Just de-activate the split between mix and perf in the settings. DataMa will then group the two effects and just show negative and positive total variations instead.

![Tip 28]({{site.url}}/{{site.baseurl}}/assets/images/tip/28.png)



<h2>Tip of the week #27</h2>

DataMa Pivot now has its own smart comment 📝!
 You can find your insights in bullet points under each chart of DataMa Pivot, as if an analyst would have work to get what you need!

This new feature is part of a set of releases from this week that you can see on https://datama-solutions.github.io/docs/#/news

Enjoy 😄

![Tip 27]({{site.url}}/{{site.baseurl}}/assets/images/tip/27.png)



<h2>Tip of the week #26</h2>

The DataMa team wish you a happy new year 🎉 !
 In case you want to filter out and forget this 2020 year 😷 from your analysis, we have what you need... with the new filter interface you can, in 2 clics:

* ✔️ select segments that you want to keep
* ❎ exclude a dimension from analysis using left button
* Combine the two previous points

The launch the calculations by hitting the button at bottom left  ('Enter' shortcut on your keyboard)

![Tip 26]({{site.url}}/{{site.baseurl}}/assets/images/tip/26.gif)


<h2>Tip of the week #25</h2>

At DataMa, it's Christmas every day. 🎅

Why? Because you don't need to wait for December the 25th, to write a wish list to Santa.

Why? Because you don't need to wait for December the 25th, to write a wish list to Santa. You just need to send us your ideas for features/ improvements by chat, directly in the app or through this channel, and it will go straight in the product pipeline.
And pipeline sprint is typically less than 2 weeks for prod... ⏩

Now you're turn ✏️ and merry Christmas 🎁!

![Tip 25]({{site.url}}/{{site.baseurl}}/assets/images/tip/25.gif)



<h2>Tip of the week #24</h2>

As annouced, new UI of DataMa is now in production on [solutions.Datama.io](solutions.Datama.io)
🎉

You can find everything that's new in the release note [here](https://datama-solutions.github.io/docs/#/news)

Within the news, we introduce a home page 🏠, which shows all your workbooks.

Each 'Card' is a use case.

From the home, you can easily:
* ✏️  Edit a workbook
* 🔒 Block a workbook to avoid edition
* ❎ Delete a workbook
* ⚖️ Launch any workbook on any DataMa Solution!

Learn more on the Home [here](https://datama-solutions.github.io/docs/#/home/home) !

![Tip 24]({{site.url}}/{{site.baseurl}}/assets/images/tip/24.png)


<h2>Tip of the week #23</h2>

DataMa is getting a new look! Christmas comes early this year 🎁

In a few days, you will discover the new DataMa interface, including:
* Your use cases directly accessible from the home page
* New experience in the use of filters
* A "source" tab to be able to view a summary of the data
* A more beautiful interface !
  😊

And a multitude of small improvements which are the fruit of your constant feedback... Thank you for your feedback and keep sending us your improvements wishes! 🙏

![Tip 23]({{site.url}}/{{site.baseurl}}/assets/images/tip/23.gif)


<h2>Tip of the week #22</h2>

A quick - yet not dirty - analysis from a spreadsheet into DataMa?

✂️  Just copy the cell range (Ctrl+C) and paste it straight in DataMa (Ctrl + V).

Easy enough?

![Tip 22]({{site.url}}/{{site.baseurl}}/assets/images/tip/22.gif)



<h2>Tip of the week #21</h2>

When you save an analysis in DataMa, and if that analysis is linked to a "live" source (e.g. a Gsheet), DataMa suggests to save the "Start" and "End" settings as dynamic.

Although that might look a little technical 🤓, this feature is quite useful for recurring analysis, because it allows to automatically adjust the time window 🗓.

For instance:
* At time t,  you have in your data source a "Week" column with possible values week 24, week 25 or week 26.
* Still at time t, in DataMa COMPARE you're comparing  week 25 to week 26 . You save this use case dynamically. DataMa records that it is the last 2 values in the alphabetical order that you want to get in your comparison
* Now, at time t+1, your data is updated with one additional week. Now in your "Week" column you have week 24, week 25, week 26 and week 27.
* DataMa will now automatically update your comparison (in the app, but also in your exports, by email, slack etc), taking the last 2 values in the aphabetical order. So you will move the comparison automatically to week 26 vs week 27

➡️ Therefore your analysis keeps up to date in a automated way, without having to change the settings 🤙!

![Tip 21]({{site.url}}/{{site.baseurl}}/assets/images/tip/21.png)



<h2>Tip of the week #20</h2>

Because September has just passed and we've been working hard all summer, the new backtoschool version 🎒 of DataMa is available in production!

On the agenda:

* Dynamic Google Analytics connector
* Extension of shareable widgets on viz tools
* Bootsrap test in DataMa Impact
* DataMa Journey UI redesign and performance improvement
* Interactive table in Compare
* and many more listed here: https://datama-solutions.github.io/docs//#/news

Thanks to all contributors for their ideas and your constant feedback on the tool!

Stay tune, there's a lot more to come... 🚀

![Tip 20]({{site.url}}/{{site.baseurl}}/assets/images/tip/20.JPG)

<h2>Tip of the week #19</h2>

When we analyze a variation via DataMa COMPARE, we sometimes need to check its significance 🧐

* DataMa COMPARE gives you the size of the effect also called amplitude of the effect 🌊
* and DataMa IMPACT will give you the combination with the power analysis (which ensures that the impact reaches a sufficient number of individuals) 👨‍👩‍👦‍👦

To find this combination of amplitude and power analysis you can of course use DataMa IMPACT, but also within DataMa COMPARE, where you also find the Significance Test functionality. A very useful feature when you want to ensure the interest of the variation that you observe! 💥


![Tip 19]({{site.url}}/{{site.baseurl}}/assets/images/tip/19.gif)



<h2>Tip of the week #18</h2>

In case you're getting bored at the beach 🏖, we have what you need: DataMa documentation 📖 ...

➡️ 🔗 [here](https://datama-solutions.github.io/docs/#/) is you're best summer read!

And as we acknowledge that we sometimes don't manage to keep up with the crazy pace of releases in the product, we've made you able to contribute on each page and suggest your own modifications by clicking on the "Edit document" link at the top of the page ✍️ !   #communitycontribution #thanksforyourhelp!


<h2>Tip of the week #17</h2>

As an analyst, we often try to analyse the performance of a segment compared to the rest (for example the performance of the Mobile compared to other devices) ... DataMa has just implemented a new feature that does just that! 🤓

* When you filter on a particular segment, you now have access to the "Display other segments" function just under the filter,
* This function will show as main information in the waterfall chart the segment that you have isolated and behind it, the variation of the other segments.

Very practical when you don't want to open 2 windows on your computer to compare variations between them 😉

![Tip 17]({{site.url}}/{{site.baseurl}}/assets/images/tip/17.gif)


<h2>Tip of the week #16</h2>

You don't have time to open the DataMa interface ... receive your analyses directly in your mailbox or on a Slack channel 📨

* By using the menu "export result" you can schedule for you or your boss an export directly to a mailbox at the frequency you want. 💡
  ￼
  Tip: as seen above you can just as easily share your DataMa graphs in a Data Studio (or others) and configure the sending of emails from your data viz tool!

![Tip 16]({{site.url}}/{{site.baseurl}}/assets/images/tip/16.gif)



<h2>Tip of the week #15</h2>

➡️ Want to find new ideas to leverage DataMa 💡?

Here is a set of ideas and corresponding dataset examples:

* [Period to period conversion comparison](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=0)
* [Email campaigns comparison](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=1286768317)
* [AB test analysis](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=1756377864)
* [Finance Budget vs. Actual controlling](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=1408263987)
* [In page product analytics between two pages](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=1740449585)
* [Media display campaigns ROI](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=42212778)
* [NPS evolution](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=256547091)
* [Churn Rate](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=2097497440)
* ... and much more that we can build together!

Feel free to reach out if you have new ideas that you want to share or build together!



<h2>Tip of the week #14</h2>

In the new features released during the containment, we find the functionality: Export graph as public URL :bar_chart:

All graphs from DataMa solutions can now be exported to your Tableau, Data Studio dashboards... or to your web browser!

This allows you to enrich your usual reporting with DataMa charts:

* In DataMa, at the top right of each graph, select the icon: "Export Graph as public URL"
* Authorise the rights to share this secure URL
* Then use this URL as a block "URL" in your usual data visualisation tool and voila!

The data in this new widget is constantly updated with the data loaded into DataMa.

**Note:** This feature is enabled on demand, contact us if you want to enable this feature.


<h2>Tip of the week #13</h2>

When you want to use DataMa, you often wonder about the data... 💻

How do I connect my data into DataMa? How do I get my data (and therefore my charts) updated as I go? One of the solutions...is Google spreadsheet!  💡

* In Google Spreadsheet, you can, thanks to the extensions available in the solution, connect any data source (here for example Google analytics)
* Once in DataMa, by creating a new Use Case from the URL of the Gsheet, you can specify (by checking the box: Keep Live connection with Gsheet) that you want the data to be automatically updated....
* And that's it...

You can also use other extensions such as "OWOX BI BigQuery" for your BigQuery queries or the "Supermetrics" add-on for connection to all other applications on the market!

![Tip 13]({{site.url}}/{{site.baseurl}}/assets/images/tip/13.gif)

<h2>Tip of the week #12</h2>

🆕 New header has been released on the platform !

Not only it makes admin functions (new data source, export etc) easier and more intuitive to access, but it also adds some cool features:

* Switch between DataMa Solutions (Compare, Impact, Pivot, Journey...) in the same page  🔄
* See if workbook has been saved or not easily with workbook name at top of page
* Quickly save under same name (with "Save" on top of "Save As")

Happy to have your feedbacks while testing it!

**Note:** this new header replaces the "Admin" menu that used to be at bottom left of the page

![Tip 12]({{site.url}}/{{site.baseurl}}/assets/images/tip/12.gif)

<h2>Tip of the week #11</h2>

In these troubled times 😷, you have some of your data that is "non-comparable" in your DataMa Compare analysis (like a distribution channel... that no longer exists 😕!), but you still want it to appear separately in your Waterfall, to only compare your KPIs on comparable things (🍎 to 🍎)?

➢ Create a 'Scope' column with 'In' for what you want to keep or 'Out' for what you want to exclude

➢ DataMa will automatically exclude the "Out" from the analysis and make it appear in a separate block of the waterfall, in light blue "Out of Scope"

See a concrete example [ici](https://www.docs.datama.fr/docs/datama-compare/general-introduction/use-cases-examples/marketing-campaign/marketing-campaign-scope/) !

Prepared with ❤️ from home, we think of you and accompany you on all your subjects from a distance!

![Tip 11]({{site.url}}/{{site.baseurl}}/assets/images/tip/11.png)

<h2>Tip of the week #10</h2>

When using DataMa COMPARE to compare two time periods. You can set up the solution so that your analyses in DataMa are always up-to-date with your latest data. 🏃♀️

All you need to do is:

1. Load a new source ("Change source" menu) via a "Google Sheet".
2. Then select the option "Keep Live connection with Gsheet".
3. Once the analysis is in place, you must save the use case by leaving the option "Dynamic saving of Start & End" selected. Be careful that the dates used as Start and End exist in the dataset!
4. From the interval used for Start and End (1st week compared to the 4th week of the dataset for example), DataMa will reproduce this same interval according to the last existing data...

Once your data updates itself, all you have to do is set up a regular send to your mailbox or a Slack channel and you're done!

![Tip 10]({{site.url}}/{{site.baseurl}}/assets/images/tip/10.gif)

<h2>Tip of the week #9</h2>

To speed up your analysis we have accelerated the loading of your data. 🚀

In DataMa, you can now:

* Copy & paste your Excel tables or Gsheet URLs.
* drag & drop your data files (excel, csv).

DataMa recognizes the source directly and offers you to launch the analysis directly!


<h2>Tip of the week #8</h2>

You can now use DataMa as a Tableau extension ➕ !

You drag and drop the extension provided by DataMa into your Tableau dashboard, and you access from DataMa the data viewed in a Tableau worksheet.

Not only is your data up-to-date with what you already have in Tableau, but your filters and other actions in Tableau are then active in DataMa! 🔄

![Tip 8]({{site.url}}/{{site.baseurl}}/assets/images/tip/8.gif)

For more information: https://www.docs.datama.fr/docs/extensions/tableau-extension/


<h2>Tip of the week #7</h2>

* Did you know that all you had to do was press the "Enter" shortcut ️ in your keyboard to update the calculations in DataMa?

* Now yes 🙂

![Tip 7]({{site.url}}/{{site.baseurl}}/assets/images/tip/7.png)

<h2>Tip of the week #6</h2>


Lost in DataMa :question:

In addition to the documentation, there is now a tutorial that interactively guides you through your first steps on the app 👣

* Click on "Launch tutorial" at the top right of the screen to get you started! 🧗♂️

![Tip 6]({{site.url}}/{{site.baseurl}}/assets/images/tip/6.png)

<h2>Tip of the week #5</h2>

You can easily filter your analyses in DataMa on a part of your source dataset.

* Simply exclude an entire dimension from the analysis using "Excluded Dimension". DataMa will no longer report this dimension as the one that can explain the variation in your performance, but this does not change the total performance you are explaining.
* Filter on only part of your data by using the filters, selecting the dimension and then the segment(s) of that dimension to keep. You can filter on two dimensions at the same time (Level 1 and Level 2). These filters will appear in the titles of your graphs for more context.


<h2>Tip of the week #4</h2>

As you know, in order to explain your overall performance variation, DataMa independently analyses for each stage each of your dimensions to bring up those that best explain the variation in that stage. But the tool also analyses combinations of dimensions. Either all dimensions combined together (Combined Dimensions) or all pairs of dimensions (Smart Dimension). 👨🔬

* The Combined Dimension is enabled by default but the Smart Dimension option must be enabled in the Settings menu.
* Once enabled, the Smart Dimension function will identify for each step, the best dimension combination. When a pair of dimensions makes more sense for your variation than a single dimension it will be displayed with an "x" sign between the 2 selected dimensions. 💑
* The combination chosen by the Smart Dimension function is available in the different graphics of the tool.


<h2>Tip of the week #3</h2>

In all DataMa solutions, you have the possibility to group together elements of a dimension that represents almost nothing on your performance. 🧐

* In the Settings menu, the "aggregation in %" bar corresponds to the level of aggregation you can choose. This allows you to group together items that represent less than 2%, 3%, 4%...of the total of your overall indicator. (By default DataMa aggregates what represents less than 2% of the total)

* This functionality corresponds to the mention "Other (<2% ot the total)" that you can often find in the charts!

Useful especially when your data has dimensions with hundreds of different values.


<h2>Tip of the week #2</h2>

In DataMa Compare and Impact, you can preview the definition of "Start" and "End" using "Overview chart"

* Click on the small graph icon to the right of the Start & End Dimension
* The bars represent the metric you are trying to track. Blue is 'Start', orange is 'End', grey is 'other', neither Start nor End
* The "Overview summarize" tab allows you to have an aggregated view

Useful in particular if you are not sure of what you want to compare!
