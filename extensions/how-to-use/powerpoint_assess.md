---
title: How to use Datama Assess (Light) in PowerPoint
layout: new-page
scope: Datama/light
keywords: PowerPoint Assess Get Started HTML viewer
---

<br/>

> Using Datama Assess in PowerPoint lets you present statistical significance results interactively during stakeholder reviews and A/B test readouts.

<br/>


# 1. Overview

Add **HTML viewer by Datama** to PowerPoint, then import a Datama Assess HTML export from another Datama extension. The add-in detects Assess automatically and renders the same interactive significance analysis you configured upstream.

The dataset is embedded in the HTML at export time, so the analysis stays self-contained in the presentation while remaining interactive in presentation mode.

<!-- <center><img src="{{site.url}}/{{site.baseurl}}/extensions/how-to-use/assets/Assess_PowerPoint.gif" alt="Datama Assess in PowerPoint"/></center> -->

<br/>

# 2. Features

- **Significance calculation:** Assess the statistical significance of KPI variations with a customizable level of confidence, using the Welch T-test method.
- **Multiple KPIs monitoring:** Based on your market equation, assess significance across unlimited KPIs.
- **Remaining sizing:** When not significant, Datama computes the missing volume to reach significance.
- **Smart comments:** Titles and comments are written automatically; you can define their structure in the source extension.
- **Interactive charts:** Explore significance results live—also available during PowerPoint presentation mode.

<br/>

# 3. Add the extension into PowerPoint

**HTML viewer by Datama** is an official PowerPoint Office add-in (Content App).

1. Open PowerPoint.
2. Go to **Insert** > **Add-ins** > **More Add-ins**.
3. Search for **HTML viewer by Datama** (or **Datama**).
4. Add the add-in to your presentation.
5. Insert it on the slide where you want the interactive visualization.

If your Microsoft account and 365 subscription are managed at the organization level, you might need to involve your workspace administrator to install the add-in.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/assets/PowerPoint_add_extension.png" alt="Add HTML viewer by Datama from PowerPoint Add-ins"/></center>

<br>

# 4. A free complement to Datama extensions

The PowerPoint add-in is **completely free**. There is no trial period and no separate licence for PowerPoint itself.

It comes as a complement to your existing Datama extensions: prepare and configure the analysis in your datavisualisation tool, or another supported host, then bring the interactive result into your slides.


<br>

# 5. Getting started

Once the add-in is on your slide, follow this workflow.

**1. Build your Assess analysis in another Datama extension**  
Prepare your dataset and configure Datama Assess as usual in Looker Studio, Tableau, Qlik, or another supported host.  
See for example [Assess on Looker Studio]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/looker-studio_assess.html).

**2. Export as HTML (or custom code for Power BI)**  
In the Datama header of the source extension, click **Download as HTML**. This downloads a self-contained `.html` file or for Power BI copy the code in your clipboard with your data and configuration.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/assets/PowerPoint_download_html.png" alt="Download as HTML from a Datama extension"/></center>

**3. Import into PowerPoint**  
On the PowerPoint waiting screen, choose one of the two options:

- **File upload** — select the exported `.html` file from your computer.
- **Custom code** — open the panel, paste the HTML content from your clipboard, then click **Apply**.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/assets/PowerPoint_file_upload.png" alt="File upload and Custom code in PowerPoint"/></center>

**4. Present interactively**  
The Assess visualization appears on the slide. It remains interactive in edit mode and in **presentation / slideshow mode**, with the same reactivity as in the source extension—with a fixed dataset based on the HTML export.

<br/>

# 6. Edit options at the top of the add-in

Once content is loaded, hover the top of the add-in to reveal editing controls:

- **Edit HTML** — opens the HTML editor so you can update the source code directly. Useful for more technical users who want to tweak or replace the embedded HTML without re-exporting from another tool.
- **Edit mode** — turns on the full Datama editing experience (header and settings). From there you can adjust the analysis options, use the **Save** button to persist changes in the presentation, and open the link to the Datama documentation.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/assets/PowerPoint_edit_options.png" alt="Edit HTML and Edit mode controls in PowerPoint"/></center>

<br/>

# 7. Read your Analysis

To discover more about how to use Datama Assess, see our [dedicated section]({{site.url}}/{{site.baseurl}}/extensions/datama-assess/introduction.html).

<br/>

# 8. Advanced Usage

Follow this [link]({{site.url}}/{{site.baseurl}}/extensions/datama-assess/settings.html) for the full view of Datama Assess settings available in the source extension (and preserved in the HTML export).

<br/>

# 9. Support and Resources

If you require assistance or have any questions, feel free to reach out. We're here to help!

- 📧 **Email**: Send us an email at [contact@datama.fr](mailto:contact@Datama.fr) for any inquiries or support issues.
- 🌐 **Contact Form**: Prefer to use a form? Fill out our [online contact form](https://www.Datama.io/lets-talk/), and we'll get back to you promptly.
- 📚 **PowerPoint overview**: [How to use Datama Light in PowerPoint]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/powerpoint.html)

<br/>
