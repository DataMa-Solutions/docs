---
title: News
description: Find here the **latest releases** of DataMa Solutions
---

> {{ page.description }}

### 2023-09-12:

* **General:**
    * [Beta 🧪] **Hourly alerting**: DataMa now handles dataset with timestamps has a dimension, and allows scheduling emails at hourly frequency. This enables use cases such as anomaly detection on hourly basis, to flag any issue in your business as soon as it happens. This feature is available as a paid option - ask your customer success manager for early access <!--feature to be developed and tested-->

* **Extension:**
    * [Beta 🧪] **New Tableau extension**: New tableau extension gives access to the new UI in Tableau. Benefits includes access to all charts & comments of the new UI (including new waterfall with decision tree viz), simplified process to create extension, and higher flexibility to use case customization <!--documentation to be done-->
    * Performance and user experience of extensions have been improved, providing faster results and allowing demo mode for all extensions based on the new UI

* **Compare:**
    * Performance of compute has been improved in particular when you have a large number of dimensions (which is often the case for when activating smart dimension for instance)
    * Display of the new waterfall (activate it using the ⚙️ icon at top right of waterfall side) and tree view has been improved since beta release, with additional capabilities for customizing labels and layout

* **Pivot:**
    * **Clustering tree** is now available in the new UI, with enhanced vizualization. This helps you create clusters within your dataset accross multiple dimensions using regression tree machine learning <!--documentation to be done-->
    * **Numerator only** option makes DataMa Pivot work on metrics that have no denominator. Just select the numerator and "1" as denominator in the KPI panel <!--To be checked-->

* **Detect:**
    * **New detection methods**: detection methods has been revamped and enriched, adding 3 user defined threshold methods to make anomaly detection more flexible. Use cases include for instance flagging any change of more than +-10% vs. same day of week. Please refer to the [detection method page]({{site.url}}/{{site.baseurl}}/core_app/new/detect/detection_method.html) to learn more
    * The above feature include also a upgrade of anomaly detection inputs:
        * Ability to increase the confidence interval for anomaly detection in forecast and volatility method up to 99.9% (if you want to avoid having too many alerts sent by DataMa detect)
        * The capacity to reduce the number of points for baseline calculation down to 1, which is particularly useful for threshold methods
        * A new input for type of points included in base line, whether it is all points, same day of week, or same hour

* **Prep:**
    * **Piano analytics connector**: Piano (ex AT Internet) connector is now available - you can get the data from Piano into DataMa and analyse it there.[Learn More]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/add_source.html#piano-analytics)

### 2023-08-03:

* **General:**
    * **Export custom settings** Exports (emails, slack & iframes) can now be customized with additional inputs, such as filters. This allows for instance to schedule 2 emails for 2 different scope (e.g. 2 countries) using one single workbook
    * All charts are now displayed as SVG, which means that, once exported to Power Point (using the PPT icon at top of each slide), you can then right click on any chart and "Convert to Shape", so that you can customized further there (including editing the text, shapes and colors)
    * "Copy Paste" capabilites of DataMa Prep to easily import a source (such as an excel cell range) has been improved to better match original format. Just select a cell range in Excel, copy it, and paste it (Ctrl+V) in DataMa Prep
    * Inputs are now available through the search bar: in a workbook, just hit Ctrl+F, and type the name of the input, it will come as the first result in the "Settings" block and you can change it here
    * Detailed view of workbooks is available on home page. This allows to display list of workbooks as a table, as you can usually explore files through icons or list in your operating system
    * **User preference** can now be set by default for any new workbook on the home page. Any setting of any solution is available there. For instance, you could make default color palette for any new workbook your own prefered palette. Just click on the user preference icon on the top right corner and edit here. Note that previously saved workbooks won't be impacted. 

* **Pivot:**
    * **Explore in Compare** By right clicking on a bubble in the importance chart, you can easily switch to DataMa Compare to explain the over/ under performance of a given segments vs. other. This comes handy when trying to find opportunities for optimization of a KPI.

* **Compare:**
    * [Smart Dimension]({{site.url}}/{{site.baseurl}}/core_app/compare/web_application/menu/smart_dimension.html) has been improved: you can now decide of the number of dimensions to include in combinations (previously only pairs of dimensions were available) and you can keep all combinations in your results (instead of just the most interesting combination)
    * Secondary comparison (aka Compare of Compare) labeling has been improved and is now available in most charts & tables

### 2023-06-31:

* **Extension:**
    * PowerBI and Looker Studio can now leverage computing cache when available for faster results 

* **General:**
    * All settings in the new UI have been organized by group for better readibility
    * Improved error message with technical logs 
    * Animation on comments (in user preference) allow to display comments word by word, with a "generative AI" style

* **Compare:**
    * [Beta 🧪] **New waterfall chart**  - navigate from one display to another with shorcuts at the top bar. 3 displays are available:
        * Waterfall:
            * UI improvements
                * Zoom on axis
                * Link between bars
                * Reverse axis
                * Displayed text is editable & conditional formating
                * Text: custom font and font size
                * Improved animation (on hover and when appearing)
                * Auto cropping of bar labels
                * Explore multiple box at the same time - No lock necessary 
            * Secondary comparison 
                * Separate chart & custom positioning
                * Overlap of common bar in secondary comparison (aka "merge feature")
            * Improvement of performance & reactivity
        * **Tree view** (NEW!)
            * Display up to 4 indicators at the same time in a card, with conditional formatting
            * Explore top X contributors accross multiple dimensions
        * Bubble view (In development)
    * Added Start and End value as an column option for table and tree view

* **Journey:**
    * Multiple fixes in the new UI (comparison, attribution toggle)

### 2023-05-31:

* **Extension:**
    * [Beta 🧪] **Advanced extension settings** For PowerBI and LookerStudio extension, you can now make advanced settings (e.g. change color palette, or custom metric relation) of any extension use case in app.datama.io. To do so:
        * Define a worbook name in the settings of the extension
        * Save in DataMa app using the "..." on the top right corner
        * Find your worbook in app.datama.io and define advanced settings
        * Save your workbook in app.datama.io
        * Reload your use case in your extension (Looker Studio or PowerBI)
    * Assess, Pivot and Journey charts are now available within extensions (Looker Studio & PowerBI)

* **Compare:**
    * [Beta 🧪] **Drill down by Dimensions then Steps**: Until then, DataMa Compare was analysing a variation first by Steps of the Market equation, then by Dimension within a Step. 
    You can now decide to reverse that pattern and breakdown the total variation by top impacting segments of any dimension and then by Steps within each Segment
    DataMa even gives you an assessment of what might be the most interesting pattern with an interest score ranking both approaches
    Click below to learn more on this important feature
    [Learn More]({{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/subheader/drill_down_hierarchy.html)

 * **Prep**
    * From DataMa block output you can now switch directly to the suggested datama solution
    * New calculated field UI, including columns/ formula auto completion

### 2023-05-10:

* **Global:**
    * **Compact Numbers** toggle is now available in settings - this allows to automatically display large numbers with appropriate unit (e.g. 1,234 will be displayed as 1.23k)

* **Prep**
    * BigQuery connector performance has been significantly improved for large dataset. As such, global performance and memory usage has been improved, making large dataset schedule more reliable
    * Clean block now allows to transform string to int or float (e.g. "2.3" as 2.3). Strings that can't be converted will be displayed as "NaN" or "null"

* **Compare**
    * You can now decide on what to display behind Segment name in the waterfall labelling, under "Segment text complement" input: 
        * Variation relative to average (e.g. "x2.43")
        * Percentage Variation (e.g. "-46%")
        * Nothing
    * In the new UI, table sort has been improved, and can be applied even when using secondary comparison


### 2023-04-27:

* **New platform:**
    * Get inspired use cases exploration has been improved with filters by solution and by function
    * Multiple bug fixes and UI improvements (incl. Send feedback button, better error message handling, Duplicate button on workbook card, Filter block and arrows management in Prep, Excel loading)
    * Dimensions and Ratio helpers are now reactive to applied filters

* **Assess**
    * In the new UI, statistical test used to compute significance is now visible directly on subheader

* **Compare**
    * In the new UI, significance test calculations are now available through settings for all assess enabled clients

* **Journey**
    * Old UI now includes the improved version of Sunburst (with interactions on clicks)

### 2023-03-31:

* **Extensions:**
    * Looker Studio extension includes "Comparison Period" toggler to facilitate comparison definiton
    * Tableau extension in the new UI is available for testing, but only sharable with Login/ Pwd
    * PowerBI extension has been improved, with better management of versioning and dates/ timezone handling

* **New platform:**
    * Documentation for the new UI has been released check out [here](https://datama-solutions.github.io/docs/core_app/new_docs.html)
    * Metrics relation and market equation definition UI has been improved, in a separate pop up
    * Multiple bug fixes and UI improvements (incl. Excel handling in prep, file management on home page, KPIs & Filter pills display, and cache management)

* **Compare**
    * In the new UI, you can now display waterfall in % points instead of total KPIs by right clicking on the blue total bars
    * [Table view](https://datama-solutions.github.io/docs/core_app/new/compare/interface/table.html) in the second slide can now display the total KPI impact and secondary comparison (in a subline)

* **Prep**
    * Snowflake connector now allows higer timeout and view querying



### 2023-02-28:

* **Extensions:**
    * Power BI extension is now available for testing. Contact your customer success manager to get early access
    * Clarified welcome message for Tableau demo extension

* **New platform:**
    * Workbook scheduled exports are now available in beta mode (email, slack, public URL) - ask your Customer Success for experimental access
    * Account usage statistics are now available in beta mode - ask your Customer Success for experimental access
    * DataMa Journey is now available in the new UI - Sunbursts interactivity has been revamped, feel free to have a look !
    * Multiple bug fixes and UI improvements (incl. compatibility of datasets having a column titled "Cluster", Pre-check of dataset accuracy in DataMa Prep)

* **Compare**
    * You can now drill down/ interact with a bucket by right clicking on the label of that bucket at the bottom. This is particularly usefull when buckets are small.
    * Smart Dimension is now labeled "dimension1*dimension2" in waterfall and inputs, for easier understanding of which pair or dimension is computed as most interesting pair of dimension (aka "Smart Dimension")

* **Detect**
    * Excluded/ forced dimensions for a given step in metrics relation are now taken into account within anomaly explanations in exports (email/ slack)
    * Default outlier selected for explanation is now the most recent outlier instead of the biggest outlier, to avoid missing historical data in explanation

* **Prep**
    * CSV connector now include a "Skip first X row" input to avoid first lines of a file
    * Excel connector has been improved for faster and more accurate loading


### 2023-01-27:

* **General:**
    * DataMa's new platform is now accessible for all clients in beta. Try it out on [app.datama.io](https://app.datama.io) (see below on the 2022-12-15 release for included features)
    * Google Looker Studio (ex Data Studio) extension is now available for testing. Contact your customer success manager to get early access
    * Multiple bug fixes and UI improvements (incl. including default rounding of $.* Units to two decimals)

* **Compare:**
    * Comparable date will now give the name of the day or week when relevant. For instance, if you are comparing one week vs. another, DataMa will create "Monday", "Tuesday"... segments to find if one of those days is the driver of the variation (available in English only)
    * Title of second slide now takes into account custom palette, so that an increase of a "bad" KPI (e.g. Costs or Bounce rate) is properly worded

* **Impact:**
    * Anomaly detection is now available for multiple KPIs with no denominators. This is particularly useful in case you want to monitor a simple KPI on multiple segments separately (e.g. Revenues on each and every country separately)
    * Anomaly detection now takes into account custom color palette for outliers and for over/ underperformance wording
    * Comments in second slide are now dynamic depending on selected dimension in the slide title

### 2022-12-20:

* **General:**
    * Lines with only 0 on metrics do not trigger a warning error anymore, especially in slack/ mail messages

* **Compare:**
    * Covariance distibution for impact calculations now takes into account the formula linking the metrics. This allows to avoid distributing covariance to independant KPIs (e.g. if your market equation is `Total_Revenues = Quantity_Existing_Business * Avg_Price_Existing_Business + Revenue_new_business` , no covariance will be distributed on `Revenue_new_business` if market equation, as this KPI is independant from others)

### 2022-12-15: New app beta release

DataMa v2 has been released for beta testers on <a href="https://app.datama.io/" target="_blank">app.datama.io</a> ! 

This is an important step on a major migration process scheduled for 2023.You can ask to your Customer Success Manager to get a tour on the new platform, which is a beta version for now.

While full documentation is still work in process, here is a quick preview of the main benefits of the new app:

* The Home page has been significantly improved:
<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/assets/images/DataMa_v2_Home.jpg"/></center>

* The Prep page now has new functionalities:
<center><img style="width:50%;" src="{{site.url}}/{{site.baseurl}}/assets/images/DataMa_v2_Flow.jpg"/></center>

* DataMa Solutions are now accessible in what used to be the Prep environment:
<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/assets/images/DataMa_v2_Solution.jpg"/></center>

### 2022-11-30:

* **General:**
    * Multiple bug fixes and UI improvements (including no "Other <..." segment when only one segment bucketed and alphabetical ranking of filter values)

* **Compare:**
    * Segment covariance is now included in the calculation of relative weight of mix and performance effects
    * Display of "Out of Scope" and "Compare of Compare" variations have been improved for better readability in the waterfall
    * Other bug fixes and minor improvements (No more "Remaining" segment in Waterfall when only one segment Remaining, Removed "Unknown" NA values in Compare table, significance calculation in Compare now available again, not creating comparable date when only one day on each side of comparison)

* **Impact:**
    * Anomaly alert first message now includes the value of each detected anomaly for each KPI
    * Anomaly explanation now takes into account the advanced settings of metric relation, in particular the manually excluded dimensions as potential explainers for a given step
    * All charts are now available for (scheduled) static export on a given URL

* **Prep:**
    * Added "WEEKDAY()","ISOWEEK()" and "WEEK()" fonctions to calculated Dates
    * 🤫 DataMa Prep is about to host the brand new version of DataMa platform, including some really exciting features. Stay tuned to enter in the beta tester program!

### 2022-10-25:

* **General:**
    * Multiple bug fixes and UI improvements (including clearer hovers on Moves chart for Compare, zoom out magnifying glass on last level of waterfall, order and hover on anomaly explanation plot)
    * Timezone now on UTC for all schedulers, both on Prep and in solutions, within Compare and Impact. As many countries are switching from summer time to winter time, DataMa scheduled jobs with stay on the same universal time, so that it fits with other external dependencies on data sources.

* **Prep**
    * Service account connector for Big Query as a secondary option for credentials sharing

### 2022-09-30:

* **General:**
    * Number of decimals in all numbers displayed can be manually defined in "Settings">"Display">"Force Rounding"
    * Multiple bug fixes and UI improvements (including minor edits in smart comments, improved exports of Compare and Impact charts)

* **Compare:**    
    * Custom colors now impacts also font color in comments and slide titles
    * Right click on Detailed bridge in Second slide allows to change dynamically selected KPI. This is also true for exported version of that same bridge, hence you can analyse any step of your market equation separately in an exported bridge
    * Hovering clickable boxes in waterfalls now display a "+"/ "-" magnifying icon to better reflect that functionnality of DataMa waterfalls
    * Hovering on "lock" icon better explains what this feature should be used for: keeping on step open on a given dimension and yet be allowed to open other steps at the same time

* **Impact:**    
    * All DataMa Impact charts has been revamped, and are now built on the client's browser. This prepares for future technical enhancements of DataMa performance and integration (more to come!)
    * Anomaly detection waterfall chart is now dynamic, using same UI as in DataMa Compare

* **Prep**
    * Tableau connector in prep (Beta - please ask specific extension to your CSM for testing)
    * Shortcuts (CTRL+V: copy paste gsheet or Excel Range, Suppr: Delete a block)
    * Multiple UI fixes & improvements (BigQuery edit interface, calculated fields, arrows between blocks)

### 2022-08-25:

* **General:**
    * Crop Y axis: in the settings>display options you can opt out from 0 bar inclusion of Y axis of the waterfall to increase the scale
    * Multiple bug fixes and UI improvements (Noteworthy Updates, Crop y axis on compare, and home bug fixe of prep sources)

* **Prep:**
    * UI improvements (incl. Loading bar of the App)
    * Performance improvements, better types management, and more robust backend

### 2022-07-28:

* **General:**
    * Multiple bug fixes and UI improvements (including improved error message for non accessible or empty data, skipped steps naming in Compare, xNA display in Compare table, Date handling in Prep)
    * Tableau extension now handles measure names as a dimension

* **Compare:**
    * Delta of % are now displayed as "pts", both for changes in mix and absolute variation of steps with unit set as "%"

* **Pivot:**
    * Improved performance for large datasets with high number of unique values in one column

### 2022-06-30:

* **General:**
    * Multiple bug fixes and UI improvements (including Dynamic saving of Start & End even without "Save As", Compare of Compare deactivation for Anomaly detection, Chart size and titles in Pivot)

* **Compare:**
    * Covariance roll up: Covariance for waterfall can now be computed at segment level in a given dimension before rolling up at total level. [Learn More]({{site.url}}/{{site.baseurl}}/core_app/compare/web_application/menu/covariance_rollup)
    * Split Mix and Perf parameter is now saved allong with other settings

* **Prep:**
    * UI improvements: Colors & text have been revamped to better prepare DataMa Solution future, all objects are now visible on the side bar
    * New header: Top page of prep now includes Title on the left and Classic sub menus (File, Edit, Data, Help) to simplify access to actions and information
    * **Email Connector**: You can now import in DataMa Prep a CSV file sent to an email (link or attachment). This enables almost any data platform connection, since most of them allow to schedule and send a custom report to a specific email. Example of platforms could be Teads, Forms, Pinterest, Criteo, etc
    * **Snowflake Connector**: You can connect to your Snowflake data with simple login/ password. This enables access to any data on Snowflake, including AT Internet/ Piano data

### 2022-05-30:

* **General:**
    * URL export has been improved with faster load for static version, vertical and horizontal responsiveness, and more charts available (incl Dimension Comparison in Pivot, Moves and detailed bridge in Compare)
    * Multiple bug fixes and UI improvements (including non-default separators in Journey, NAs robustness in Impact, Scheduler timing display in Prep, User button display in Prep)

* **Compare:**
    * Clarified wording, titles and hovers in dimensions comparison charts
    * Moves chart has been revamped, and is now built on the client's browser. This is part of future technical enhancements of DataMa performance and integration (more to come!)

* **Prep**
    * Google Analytics 4 connector is available in beta! Connect to your GA4 property and use the API to extract data and analyse it in DataMa
    * Link to documentation has been added to all objects in the title of the side bar (under "i" icon), as well as clarified tooltips

### 2022-04-30:

* **General:**
    * Multiple bug fixes and UI improvements (including Compare of Compare unit display, Dimension identification in case of only numeric dataset)

* **Compare:**
    * Bridges for a given Step and given dimension (aka 'Second slide waterfall') is now dynamic: you can click, filter and drill down as in the global waterfall, including in widget export. It also takes into account unit, if provided for a given step
    * Smart Dimension now exclude dimensions that have been excluded from analysis, either globally or for a given step within metrics relation definition
    * Funnel view and dimension comparison charts has been revamped, and are now built on the client's browser. This prepares for future technical enhancements of DataMa performance and integration (more to come!)

* **Impact:**
    * Combined_Dimension is now excluded from possible explanation of anomaly detection, to avoid unreadable details

* **Journey**
    * By default, attribution model is now activated

* **Prep**
    * DataMa Prep dataset load time in DataMa Core have been dramatically improved. You can now open a workbook based on a DataMa Prep flow in seconds


### 2022-03-31:

* **General:**
    * Exports in Slack and Emails have been improved to get faster access to insights in the notifications
    * Multiple bug fixes and UI improvements (including value box for impact sizing in DataMa Impact, clarification of error messages for Compare and Impact)

* **Impact:**
    * Added "**Causal Impact**" test as an option for assessing statistical significance. Use case include pre/post change on a test group of customers for instance submitted to a specific treatment, with a control group to inform base line of "normal" evolution. [Learn More]({{site.url}}/{{site.baseurl}}/core_app/impact/web_application/dashboard/causal_impact.html)
    * Anomaly detection notification slack and email messages now includes a list of all KPIs that are flagged as having an anomaly

* **Prep**
    * **Facebook ads connector** is now available, to get your campaigns statistics through FB Insights API and analyse it in DataMa
    * Data flows can now be deleted from the flow selector in the header
    * Multiple bug fixes and UI improvements (including Filter object enhancement, tooltips, ability to read Excel files saved on Mac)

### 2022-02-25:

* **General:**
    * Multiple bug fixes and UI improvements (including hover on select input, progress bar on prep source connection, inputs stickiness when editing metric relation, URL sharing of second slide of compare...)

* **Compare:**
    * Units definition in Metric relation window now supports Regex anotation. (E.g. putting a "$(.*)M" as unit will display $125M for 125 value)
    * Analysis depth parameter is now saved along with your use case

* **Exports & Extension:**
    * DataMa Tableau extension (simple widget) is now reactive to Tableau parameters changes
    * Slack export now send a notification when error happen on a scheduled compute

* **Prep**
    * Create new flow button added at the end of your data flow list in the header dropdown
    * Shortcut to DataMa Journey solution added to output object when relevant (i.e. when "Journey" column exists)
    * Included examples in tips for Calculated fields
    * Multiple bugs fixes and ui improvements

### 2022-01-26:

* **General:**
    * DataMa application is now available through solutions.datama.io instead of solutions.datama.fr. Whyle the .fr is still redirecting to .io, you may want to update your bookmarks to avoid login/ token issues in the future
    * Multiple bug fixes and UI improvements (including custom input stickiness when changing metric relation, default rounding of currencies to 2 decimals, connection to prep improvements...)

* **Compare:**
    * Variation significance testing can now be saved for a use case (available only with Impact license)
    * Renamed "Positive"/ "Negative" variations as "Increase"/ "Decrease"
    * Custom Palette now applies to new dynamic waterfall

* **Journey:**
    * Attribution toggle is now saved along with your use case (can be especially useful to save time when exporting a sunburst)

* **Prep:**
  * **Filter object**: in a flow, you can now filter data, using either exact match or regex
  * Flows can be deleted and renamed from the top right flow name drop down
  * Shortcut to DataMa Solutions (Compare, Impact, Pivot) are available in output object
  * Improved documentation

### 2021-12-26:

* **Compare:**
    * New animated waterfall: Compare waterfall has been fully reshaped to improve performance and enable new usage within extensions in the future.
    Current visible benefits include :
      * Static export (on a URL, with a schedule to avoid computation time) of waterfall is now interactive (zoom/ unzoom is available)
      * Capability to "lock" one step into a given state (opened, split by a given dimension) and open other steps at the same time. This makes the "Detailed waterfall" tab useless, so not displayed in the interface anymore.
      * Easier drill down within boxes : changing dimension, seeing "remaining" segments is more fluid
      * Nice transition effects
    Note that you can still go back to previous template by clicking by opting out from "New waterfall" in the display section at the bottom left of the side bar, and click "Compare"
    * When a segment does not exist on start or end definition, the impact calculation now include a "unknown segment" bar to reflect this missing part.

* **Impact:**
    * Confidence interval settings can now be saved

* **Prep:**
  * Big Query connector
  * CSV Separator added
  * Calculated fields
  * Logout button for GA and BQR
  * Multiple bug fixes, among them
    - Dates bug fixed
    - Limitation to 4 segments on GA
    - Switch between flow & blocs
    - Sometimes, dates were not casted properly

### 2021-11-20:

* **General:**
    * Get inspired use cases: Included latest examples from our blog on [Consent analysis](https://www.datama.io/fr/2021/11/04/comment-analyser-limpact-de-votre-outil-de-consentement-sur-vos-indicateurs-de-performance/) and [Market trend analysis](https://www.datama.io/fr/2021/11/10/comment-prendre-en-compte-les-tendances-de-marche-dans-son-analyse-de-performance/)
    * Multiple bug fixes and UI improvements (including slack messages template and Big Query pagination)

* **Impact:**
    * Anomaly detection: Enhanced forecasting method to improve accounting of seasonality

* **Journey:**
    * Sunbursts can now be shared as a static URL to avoid computation time

* **Source:**
    * Excel export: DataMa source now supports excel export, which allow to export any DataMa source (including DataMa prep results) in an Excel spreadsheet

### 2021-10-08:

* **General:**
    * Comparable Date: When comparing two ranges of dates with same number of days, DataMa now automatically creates a "Comparable_date" dimension which allows to compare similar objects between different time frames (e.g. Month 1, Month 2... Month 12 when comparing two years, or Day 1, Day 2... Day 7 when comparing 2 weeks)
    * Date aggregation: Dates are now treated as numeric dimensions for clustering. DataMa will automatically create time frame with similar KPI trends to aggregate the data and make it easier to analyse (see [Settings menu]({{site.url}}/{{site.baseurl}}/core_app/pivot/web_application/dashboard/clustering.md))
    * Regex Filtering: Filter UI have been improved and now includes a Regex option, to filter on specific regular expressions
    * Language (English or French) can now be saved for a given workbook
    * Improved interface for Tableau dashboard extension
    * Multiple bug fixes and UI improvements (including enhanced print view for Compare and Pivot, busy cursor when loading)

* **Compare:**
    * Improved display of "Out of scope" data (see [Scope example](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=1172240978))
    * Focused/ Excluded dimensions are now available for Total step

* **Impact:**
    * Anomaly detection: Slider input to select % of point used for moving average window
    * Anomaly detection: Ability to analyse all steps of market equation for a given use case. Each step is analysed separately, and you can navigate from one indicator to another using drop down within first slide title. This is particularly useful to get notified from any anomaly within any step of a conversion funnel without setting up multiple use cases in DataMa
    * Anomaly detection: Forecasting method as an option on top of moving average for detection of anomaly, available for latest point only within settings

* **Journey:**
    * Right click on the sunburst allows to activate filtering on specific Journey, based on Regex logic

* **DataMa Prep:**
    * Flow scheduler: You can now schedule the run of flow, so that it is available in advance before you update your analysis
    * Short term cache: computations are cached for 30min by default, which avoids lag and computation time
    * DataMa Prep is still in beta mode. Multiple bug fixes and UI improvements have been performed. Reach out for testing and thanks for your precious feedback!

* **Documentation:**
        * Documentation has migrated on new tech, now includes metabalise. This allows to
            * Reference documentation on Google Search (SEO)
            * Acccess documentation in a glance in DataMa solutions
            * Share preview on social network and messaging apps (e.g. slack)
            * Improve sharing of "tips of the week"


### 2021-07-30:

* **General:**
    * Ability to edit Gsheet/ BQ connection from HomePage
    * **Alert reports only option**: when scheduling an email/ slack, you can decide to receive it only if alerts are reached.
    In DataMa Compare, alerts are reached when some KPI reaches a pre-defined variation [threshold](docs\general\admin\change_metric_relation.md).
    In DataMa Impact with Anomaly detection, alerts are reached when an anomaly is found
    * Multiple bug fixes and UI improvements (including improvement of home page)

* **Compare:**
    * **Advanced metric relation**: for each step of your market equation (aka Metric relation), you can now define a unit, and specify prioritized or excluded dimension for drill down.
    Total step function definition is also easier to read and define

* **Impact:**
    * **Anomaly detection report** : As in Compare, you can now schedule an automated export by email/ slack of DataMa Impact anomaly analysis to receive a notification when computed.
    * Included Waterfall tab and smart comments in Anomaly detection detailed slide
    * Option to select only last point for analysis in anomaly detection, so that you can focus on what's new.
    * Option to analyse only a numerator (not a ratio) in anomaly detection

* **Journey:**
    * **Slide titles** : Journey now includes smart titles, to help you understand the analysis

* **DataMa Prep:**
    * **Beta release of DataMa Prep**: from DataMa solutions home page, you can now access DataMa Prep. This is a brand new tool that allows user to visualy prepare data, by connecting, combining, transforming sources before plugin into DataMa analysis.
    Particularly interesting features includes
      * Advanced Google Analytics connector, with Segments, Filters, Custom dimensions and More
      * Google trends connector, opening the door for market analysis and correlation with your own performance
      * Pivot/ unpivot objects, to quickly transform columns in lines and vice versa
      * Append object, which allows to "paste" one dataset below another. This is especially useful when building DataMa sources from different sources, or when some metrics are not distributed on all dimensions of your dataset
      * Cleaning object, to rename/ change order of columns
    * DataMa Prep is available to our beta testers. Please reach out to your Customer Success Manager if you want to give it a try

* **Documentation:**
  * Added a page with all historical "Tips of the week". You can check [here](tip_of_the_week.md)

### 2021-06-25:

* **General:**
    * **Enhanced metric relation interface**: editing metric relation definition is now easier (deleting a step, changing name, switching orders or steps...)
    * Spline and Gant bars: lines have been replaced by gant bars for discrete dimensions charts, and "splines" (smoothed lines) for continuous dimensions or dates. This makes data visualizations both more accurate and good looking
    * **Excel download**: Data behind each chart can now be downloaded in excel format with one single click on the Excel icon in the top right corner
    * [Ratio helper](general/menu/ratio_helper) now allows to compare a starting and ending point, when in compare mode
    * Both [Ratio helper](general/menu/ratio_helper) and [Start end helper](general/menu/start_end_help) are now reactive to filters
    * Multiple bug fixes and UI improvements (including default color palette update and standardization of all interaction buttons)

* **Compare:**
    * **Dimension interest display** : Interest score is now displayed in the dimension dropdown (right click in waterfall, or second slide)

* **Impact:**
    * **Anomaly detection** : this brand new feature (in  beta mode for now) allows to automate outlier identification on a given ratio, and understand the drivers of that anomaly. This is particularly useful in time series for being able to quickly spot issues in your KPIs overtime [Learn More](impact/web_application/dashboard/anomaly_detection)

* **Pivot:**
    * For the detailed view slide, dimension selection is now ranked by order of importance and the rank is displayed in the dropdown menu
    * Dimension correlation matrix has been merged with the correlation slide, in a third tab for easier readability

* **Journey:**
    * Aligned UI with slide styles (smart titles will come in next release)

* **Plugins:**
    * URL export and Tableau extension are now resizable both vertically and horizontaly
    * Enhanced Power BI extension, with ability to select the desired output for each DataMa Solution
    * Improved backend and user info management for on premise deployment


### 2021-05-28:

* **General:**
    * **Power Point download**: Each DataMa slide (Title, Chart and Comments) can now be extracted in Microsoft Power Point format
    * DataMa progressive web app can be installed for Chrome users to get quick access to DataMa platform from desktop
    * Quick upload of source through Ctrl+V shortcut is now available from Home page (for Excel cell range, or Gsheet Url link)
    * Option to save a cache of the results to avoid long computation time when loading same calculations
    * Multiple bug fixes and UI improvements (including scrollbars on aside bar, clearer contextual hovering on all charts, and improved notifications)

* **Compare:**
    * Improved management of dimensions that are not distributed on all metrics (e.g. Product category at session level on a ecommerce website)

* **Impact:**
    * Improved readability of **volatility test**
    * Slide title on each section
    * French translation available

* **Pivot:**
    * Slide title on each section
    * French translation available

* **Journey:**
    * Matrix areas with recommended actions on attribution chart to improve readability
    * Ability to **filter on specific journeys with right click on sunburst**
    * Improved readability of sunbursts
    * Improved performance for large files, and options to reduce computation time (disabling of sunburst generation, limitation of analyzed touch points)


### 2021-04-24:

* **General:**
    * **Ratio helper**: A new visualization helps you define the ratio you want to analyze, by comparing the different ratios in your metrics relation. You can also see the numerator of each ratio, which is particularly useful for funnel analysis to see where you're loosing customers. Available by clicking on the '÷' icon in Pivot / Impact and above 'Settings>Included steps' in compare [Learn More](general/menu/ratio_helper)
    * Improved header: Save/ Settings/ Download icon have been reshuffled so that it is more intuitive to use
    * Tableau extension: DataMa extension is now reactive to any interaction with worksheet source, and provides a capability to refresh the data manually
    * Improved Slack connector
    * Multiple bug fixes and UI improvements

* **Compare:**
    * **Slide style**: Added a 'Slide Title' above each chart, to better tell the compare story. Download as PPT will come soon
    * **Right click** is now available in shared waterfall: this gives the possibility to switch analyzed dimension and collapse steps when sharing widget outside of DataMa core app (e.g. Tableau or Data Studio)  


### 2021-03-24:

* **General:**
    * **Tableau extension - paid version**: Client version (for licensees) of the demo extension to quickly create, adjust and save your use case in Tableau with no limitation of time
    * Tableau extension UI improvement: Easily navigate between solutions, outputs and source worksheets
    * **Custom color**: you can decide of the look and feel of all your charts (Settings>Display)
    * Multiple bug fixes and UI improvements (incl. ability to switch Start & End)

* **Compare:**
    * **Translation**: French translation is available for all text & comments (Settings>Display)
    * Waterfall right click improvement: ability to filter/ exclude Combined_Dimension and Smart Dimension
    * Metric relation quick definition: the Metric relation modal now includes a 'Sum' option when metrics are additive, not multiplicative

* **Impact:**
    * Clarified wording on p-value and test side options

### 2021-02-19:

* **General:**
    * Added a **Big Query** connector in Beta. You can now pull data from BQ and edit the SQL query to do so in DataMa
    * Scheduled **HTML export** feature: avoid computation time when exporting DataMa as a URL
    * Multiple bug fixes and UI improvements   

* **Compare:**
    * **Right click on the waterfall** to dynamically change the dimension, skip steps, show more segments, filter on a specific segment etc.
    * **Split of Mix effect and Performance effect only when it makes sense**. In "Auto" mode, mix effect won't be shown if it's too small vs. the overall variation
    * "Negative drivers only" option in settings. Allows to always show negative variation first, and give highest interest to dimensions with large negative variations, even if the overall variation is positive
    * Detailed table is now showing details of variations only for the selected Step

* **Pivot:**
    * **Compare mode** in Pivot. Enable comparison between two segments of the traditional Pivot charts (Dimension Importance and Clustering)
    * **Mekko chart** representation for showing correlation between one dimension and another on a given metric

* **Journey**
    * **Sequence** logic enabling analysis of pairs of touch points instead of single touch point


### 2021-01-15:

* **General:**
    * Enhanced Google Analytics connector, including GA Segments and automatic refresh of extract in case of date change in Start & End definition
    * DataMa Tableau extension now has a demo mode, listed on the official [Tableau extension Gallery](https://extensiongallery.tableau.com/extensions/233?version=2020.3&per-page=50)
    * Ability to easily duplicate workbooks and see live source links on Home page
    * Ability to change chart colors in display settings
    * Simplified display of automated email report
    * Multiple bug fixes and UI improvements (including ability to see which DataMa Solution is available, given your Licence & Data Source)

* **Compare:**
    * Improvement of the dimension interest scoring

* **Pivot:**
    * Added smart comments to Pivot charts

* **Impact:**
    * Included confidence interval on Welch T test calculation

### 2020-12-06: New UI

* **General:**
    * Added **home page** as a welcome page allowing quick access to saved workbooks. You can also edit and lock a workbook on the home page. [Learn More](source/source.md).
    * DataMa Solution and Workbook name is now stored in the URL, which allows to bookmark your analysis to find it quickly when you're back
    * Added **DataMa solution tab in header**, allowing to switch quickly from one solution to another, while keeping current settings in the menu
    * **Improved filters** by adding the capability to filter or exclude for all dimensions. [Learn More](general/menu/filters.md)
    * General refacto of the architecture of the app, which results in **improved performance**
    * Overall improvement of the UI, cleaner and whiter, which results in **easier and more enjoyable usage**
    * Multiple bug fixes

* **Source: (beta)**
    * Released first version of DataMa Source, which allows to check the source of your workbook. [Learn More](source/source.md)

* **Compare:**
    * Widgets have been reorganized, to improve performance and make it easier/ shorter to read

* **Pivot:**
    * Interdependence tab is now interactive: by clicking on a cell, you update the interdependence detailed view below.

* **Journey:**
    * Added difference of sunburst tab, which represent the gap between two sunbursts in compare mode.


### 2020-10-07:

* **General:**
    * Multiple fixes for stability and performance improvements
    * Improvement of Google Analytics connector
    * Minor UI improvements

* **Compare:**
    * Waterfall is now zoomable when exported as widget in a public url
    * Improved speed of waterfall and moves chart rendering

### 2020-09-23: 2020 Back to school release

* **General:**
    * Google Analytics is now a possible source, that can be saved with live update of the time window, and without using gsheet anymore
    * Executive summary and chart comments have been moved in a "Comments" section below charts for easier access
    * "Get inspired" button in the list of saved version gives you access to pre-saved use cases
    * Dynamic widgets (e.g. 'Moves' in Compare or 'Detailed view' in Impact) are now sharable through webview
    * Overview chart enhanced with KPI selection to better define start and end, and be able to spot breaks in trends
    * Ctrl+S save shortcut
    * Minor bugs and UI fixes

* **Impact:**
    * Added bootstrap test, which allows higher precision in roll out decision for AB test readouts - see our blog for more info on research and development done by the DataMa team
    * Increased confidence range for selection: research shows that one could decrease the expected level of confidence (increase alpha) in order to kill AB test earlier
    * Improved detailed view chart: significant changes have now a "*" to be easier to spot

* **Journey:**
    * Improved performance for large files
    * First documentation created (at last!)
    * Reshaped the UI, so that it is easier to read
    * Attribution is now an option that one can deactivate in the settings
    * "Simple metrics" in detail section now allow to compare one touch point to another on simple metrics like frequency of appearance
    * "Flow" chart in detail section now has color on the links to be able to easily read if one flow is increasing or decreasing between start and end (in compare mode)
    * Some UI improvements (colors aligned with other DataMa solutions, sunburst legend display etc)

* **Compare:**
    * Detailed table gives the % variation of each step but also the impact on the given step with conditional formated bar chart, given the segment weight


### 2020-07-29: New documentation

* **General:**
    * New documentation is available - check https://datama-solutions.github.io/docs/
