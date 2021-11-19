---
title: News
description: Find here the **latest releases** of DataMa Solutions
---

> {{ page.description }}

### 2021-11-18:

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
    * Date aggregation: Dates are now treated as numeric dimensions for clustering. DataMa will automatically create time frame with similar KPI trends to aggregate the data and make it easier to analyse (see [Settings menu]({{site.url}}{{site.baseurl}}/core_app/pivot/web_application/dashboard/clustering.md))
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
