---
title: How to use Datama Assess (Light) in Power BI
layout: new-page
scope: Datama/light
keywords: Power Power BI assess get started
---

<br/>

> Using Datama Assess as a Power BI extension is a great way to make your report more insightful with the benefits of both.

<br/>

<!-- Here is what you get on this page:
1. [Overview](#1-overview) 
2. [Features](#2-features)
3. [Installation](#3-add-the-extension-into-your-report)
4. [Free trial Period](#4-get-a-free-trial-period)
5. [How to use](#5-getting-started)
6. [Read your analysis](#6-read-your-analysis)
7. [Settings](#7-advanced-usage)
8. [Support and Resources](#8-support-and-resources)

<br/> -->



# 1. Overview
This document provides detailed documentation for the "Datama Assess" plugin, a powerful extension for Power BI. This plugin enhances data analysis capabilities by computing statistical significance of variations;

Below is a short intro video
<br/>

<iframe width="560" height="315" src="https://www.youtube.com/embed/AzsYD3ly1y0?si=VcGwL6jcN5uSolpz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# 2. Features

- **Significance calculation:** Assess the statistical significance of KPI variations with customizable level of confidence, using Welch T test method
- **Multiple KPIs monitoring:** Based on your market equation, assess significance within unlimited number of KPIs
- **Remaining sizing:** When not significant, Datama computes the missing volume to reach significance
- **Smart comments:** Title and comments are automatically written, and you can define their structure 

<br/>


# 3. Add the extension into your report

Follow one or the other steps to install the Datama plugin:

1. **Download the Plugin from the Marketplace**:
    1. Navigate to "Insert" > "More Visuals" > "From appSource".
    2. Search for "Detect - Find anomalies".
    3. The visual will appear as a new icon in the visualization pane. Click on it to create the visual on the report canvas.
    4. You can also download the assess extension on Datama,then add it to powerBI as below:

<img src="{{site.url}}/{{site.baseurl}}/extensions/assets/download_assess_powerBI.png" align="center" width="650px" />


<img src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/add_asses_powerBI.gif" align="center" width="650px" />


<br/>

2. **or Install from the Visualization Pane**:
    1. In the visualization pane, click on the ellipsis ("...") to import a custom visual.
    2. Select "Import a custom visual".
    3. Choose the Datama visual from the list provided on your account on app.datama.io
    4. The visual will now appear as a new icon in the visualization pane. Click on it to create the visual on the report canvas.

<img src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/powerbi_addvisual.PNG" align="center" width="130px" />

<br>

# 4. Get a free trial period

Datama extension in Power BI allows you to benefit from all features.

On top of this, the paid version allows you to 
- Remove Datama Branding (Background logo and free pop in)
- Let any other viewer of your dashboard to see Datama's extension

You can get a free trial period of 7 days allowing you to test the full version of the extension by following these steps :

1. Click on "Trial version" link of Datama footer
2. Click on "Upgrade"
3. Create your Datama account
4. Get your Trial extension with no engagement, and no credit card required

See [here]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/pricing_plan_pbi.html) our different plans.

<!---<center><img src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/looker-try.gif" alt="Get a free trial period"/></center>-->

<br>

# 5. Getting started

Once you've imported the extension, here is how you can use it.

**1. Comparison Dimension**: Drag and drop the dimension on which you want to compare in the appropriate field. This would typically be a AB test variant column
<br>

**2. KPIs definition**: Drag and drop the metrics you want to monitor in the appropriate field. Make sure that you add summable metrics: Datama will compute ratios based on the market equation that you define in the extension settings
<br/>

**3. Custom settings**: Click on the "Settings" icon on the top right corner of Datama's widget. You can adjust the methodology for significance assessment and define which metric you want to analyse in the market equation pane


**4. Save settings**: Once you are happy with your settings, in the Power BI side panel, in the "Format your visual" tab, paste the JSON automatically added to your clipboard in the "Config JSON" field. 
If you’re unsure whether it’s the latest version, click the Save button in the top-right corner to generate the updated JSON, then paste it again into the Config JSON field.
Please note that no customized settings will be saved unless you complete this step.

**5. Leave edit mode**: In the Power BI side panel, in the "Format your visual" tab, untick the "Edit mode" toggle. Dashboard viewers won't see the top header and footer anymore, for a smoother experience. 

<br/>

# 6. Read your Analysis

To discover more about how to use Datama Assess, you can read our [dedicated section]({{site.url}}/{{site.baseurl}}/extensions/datama-assess/introduction.html)

<br/>


# 7. Advanced Usage

Follow this [link]({{site.url}}/{{site.baseurl}}/extensions/datama-assess/settings.html) to get the full view of the extension Settings. 

<br/>

# 8. Support and Resources
If you require assistance or have any questions, feel free to reach out. We're here to help!
    - 📧 **Email**: Send us an email at [contact@Datama.fr](mailto:contact@Datama.fr) for any inquiries or support issues.
    - 🌐 **Contact Form**: Prefer to use a form? Fill out our [online contact form](https://www.Datama.io/lets-talk/), and we'll get back to you promptly.

<br/>
