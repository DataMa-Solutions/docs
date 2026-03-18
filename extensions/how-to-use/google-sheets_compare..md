---
title: How to use Datama Compare (Light) in Google Sheets
layout: new-page
scope: Datama/light
keywords: Google Sheets cCompare Get Started
---

<br/>

> Using Datama Compare as a Google Sheets extension is a great way to make your spreadsheet more insightful with the benefits of both Datama and Google Sheets.



# 1. Overview
Add Datama Compare to your Google Sheets to analyze KPI variations where your data already lives. No exports, no switching tools—waterfall analysis runs directly in your spreadsheets.

The video below walks you through the basics.
<br/>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Vcvbk2rSG9Y?si=0lTlHphNybdqwb-i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<br/>

# 2. Features

- **Waterfall & Tree analysis:** Build waterfall charts and a performance tree from your sheet data to inspect step-by-step how your KPIs evolve.
- **Smart scoring engine:** Highlights the main drivers behind variations so you can focus on what matters most.
- **Mix effect analysis:** Quantifies how Mix effect contributes to your performance changes.
- **Intelligent Comments:** Summarizes the analysis and turns it into readable, actionable recommendations.
- **Interactive charts:** Zoom, filter, click, and drill down to explore your data in depth.
- **Customization options:** Adjust colors, units, fonts, and chart types to match your report.

<br/>

{% include embed_totw.html num=130 %}

<br>


# 3. Add the extension into your Spreadsheet

Datama Compare is an official extension of Google Sheet.
From Google Sheet, click on "Extensions" > "Add ons" > "Get Add Ons" and search of "Datama Compare".
If your Google Workspace & suite is managed at the organization level, you might need to involve the manager of the workspace to be able to install the extension properly.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/assets/Gsheet_add_extension_Compare.png" alt="Click on the extension menu"/></center>

<!-- {% include embed_totw.html num=151 %} -->

<br>

# 4. Get a free trial period

Datama extension in Google allows you to benefit from all features.

On top of this, the paid version allows you to 
- Remove Datama Branding (Background logo and free pop in)
- Save your settings to find them back when you or others reload the page

You can get a free trial period of 7 days allowing you to test the full version of the extension by following these steps :

1. Click on "Trial version" link of Datama footer
2. Click on "Upgrade"
3. Create your Datama account
4. Get your Trial extension with no engagement, and no credit card required
5. Add the licence key to the extension by clicking on on the "Editor Settings" tab and Paste your licence key

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/assets/Gsheet_licence_key.png" alt="Paste your licence key here"/></center>

<div class="info-box"> For Corporate clients, just get your licence key for no additional fee on the <a href="https://app.datama.io/a/dashboard/my-products" target="_blank">Extension Page</a>
</div>


<br>

# 5. Getting started

Once you've added the extension, here is how you can use it.

**1. First think about your use case**: You need first to consider which KPI you want to analyse and what are the steps that lead to the main KPI.

**2. Prepare your dataset**: The dataset required for Datama is essentially a Pivot table: an aggregated dataset with metrics aggregated on a set of dimensions. 4 steps are needed to properly set your dataset.
1.  **Main KPI:** Define the main KPI you want to compare (e.g. Revenue, Leads, Margin...)
2.  **Comparison Dimensions**: Define on which elements you want to compare your KPI (e.g. Period: Compare Month over Month, Country: Compare one country to the other...)
     - by default, Datama will select the first two elements of your dimension, or split a date range in two.
3.  **Steps**: Define the steps that correspond to the equation that lead to your main KPI. For example (eCommerce funnel, or Finance funnel) [See dataset examples](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=763618483)
     - To better define your steps (or metric equation), you can read our dedicated [article](https://datama.io/how-to-build-my-business-metric-relation/).
4.  **Explanation dimensions**: Include Dimensions that will be used to explain the variations of your performance. Each variation will have an interest score to see how important they are to explain your variations.


**3. Launch the extension**: Click on the extension pane, select "Datama Compare" and on the right side panel, make sure the proper range of data prepared is selected. Dimensions and Metrics should be automatically identified by Datama, but you can adjust this if required. Then hit the "See Chart" Button

**4. Custom settings**: Click on the "Settings" icon on the top right corner of Datama's widget. You can adjust the methodology for comparison explanation and define which metric you want to analyse in the market equation pane. [Learn more about settings]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html)

**5. [Paid user only] Save settings**: Once you’re satisfied with your settings, click apply or the "Save" button on the top right corner of Datama's extension. The settings will be automatically saved in the Config JSON input of the Editor Setting tab in the right side panel. 

**6. [Paid user only] Leave edit mode**: In the Edit Settings tab, untick the "Edit mode" toggle. Default viewers won't see the top header and footer anymore, for a smoother experience. 


<br/>

# 6. Read your Analysis

- **Performance Overview**: Each blue bar represents the performance of your main KPI, using your chosen comparison dimension. helping you quickly gauge performance across different segments.
- **Intermediary step analysis**: Intermediary steps depict the ratio evolution of your KPI. The impact is quantified in the units of your main KPI, allowing for a consistent measurement of progress or regression.
- By default, the most interesting dimension will be selected for this zoomed step. You can change the selected dimension for this zoomed step by changing right clicking on the boxes of a segment and select the appropriate dimension in the "split by". You can unzoom by clicking on other steps or clicking on the box again.
- **In-Depth exploration**: By interacting with a step—simply click on it—you'll delve into the underlying dimensions that are most influential in explaining your performance variances at each stage of your funnel.

To discover more about how to read a Waterfall, you can read our [dedicated section]({{site.url}}/{{site.baseurl}}/core_app/new/tutorial/first_use.html)

<br/>

# 7. Sample datasets

Following this [link](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit?gid=1408263987#gid=1408263987) to access live demo of the extension in Google Sheet. Don't hesitate to play with the extension with your own data. This is a free trial version with limited access. 

<br/>


# 8. Advanced Usage

Follow this [link]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html) to get the full view of the extension Settings available in this extension. 

<br/>

# 9. Get more insights

Explore related documentation to understand how to generate insights in [Datama Compare]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/introduction.html)

<br/>

# 10. Support and Resources
If you require assistance or have any questions, feel free to reach out. We're here to help!
    - 📧 **Email**: Send us an email at [contact@datama.fr](mailto:contact@Datama.fr) for any inquiries or support issues.
    - 🌐 **Contact Form**: Prefer to use a form? Fill out our [online contact form](https://www.Datama.io/lets-talk/), and we'll get back to you promptly.

<br/>