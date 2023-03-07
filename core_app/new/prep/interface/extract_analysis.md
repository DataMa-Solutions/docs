---
title: Prep - Export Analysis
description: This section helps you automatise the export of your analysis
layout: page
---

> **This section helps you automatise the export of your analysis**

You don’t have time to open the DataMa interface … receive your analyses directly in your mailbox or on a Slack channel
By using the menu “export result” you can schedule an export directly to a mailbox at the frequency you want.

Here's what it's going like to be in DataMa Prep: 

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/prep_export.jpg"/></center>

but you can also access the export menu within each solution.
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/prep_exportToggle.jpg"/></center>


Here are the available connectors to extract your analysis:
- [Slack](#slack)
- [Email](#email)
- [Static URL](#static-url)
- [Teams](#teams)

<br>

> ### <b>Slack</b> ###
<br>

- connect your slack account
- To sync your export with the data's update, activate the <i>"Sync with flow scheduler"</i> (a Scheduler need to be set in the menu Data > Schedule)
- Specify the frequency you want to receive your message (this setting is deactivated when the export is sync with a flow scheduler). 
- Select <i>Send on Alert only</i> if you only want to receive the analysis when you KPIs reached a certain [threshold]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/threshold.html")
- Arrange your extraction depending on your needs : 
    - **Slides**: Each slide is coming with title + graph + comment (except alert wich is just a message). <i>Bridge</i> is representing the detail on the step with the main variation.
    - **List**: Give you the ability to select at a lower lever the detail you want to display in your message.
    - **Dropdown**: see only one graph and select with a drowdown the graph or the comment to display 

    
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/prep_exportSlack.jpg"/></center>


<br>

> ### <b>Email</b> ###

<br>

- To sync your export with the data's update, activate the <i>"Sync with flow scheduler"</i> (a Scheduler need to be set in the menu Data > Schedule)
- Enter one or more email addresses by selecting "Enter" between each address,
- Specify the frequency you want to receive your message (this setting is deactivated when the export is sync with a flow scheduler). 
- Select <i>Send on Alert only</i> if you only want to receive the analysis when you KPIs reached a certain [threshold]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/threshold.html")
- Arrange your extraction depending on your needs : 
    - **Slides**: Each slide is coming with title + graph + comment (except alert wich is just a message). <i>Bridge</i> is representing the detail on the step with the main variation.
    - **List**: Give you the ability to select at a lower lever the detail you want to display in your message.
    - **Dropdown**: see only one graph and select with a drowdown the graph or the comment to display 

    <center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/prep_exportEmail.jpg"/></center>

<br>

> ### <b>Static URL</b> ###


This extraction allows to create URL accessible to every user without login to DataMa.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/export_URLCreateNew.jpg"/></center>

Activate <i>Public URL</i> to make the URL accessible to user without login to the DataMa account, when deactivated user will need to be logged-in. 

- Arrange your extraction depending on your needs : 
    - **Slides**: Each slide is coming with title + graph + comment (except alert wich is just a message). <i>Bridge</i> is representing the detail on the step with the main variation.
    - **List**: Give you the ability to select at a lower lever the detail you want to display in your message.
    - **Dropdown**: see only one graph and select with a drowdown the graph or the comment to display 

<br>

Export part or full view of the solution : "alert message", "Waterfall" or "Detailed step view". 

Your graph wil be updated according to your data. As soon as you load the URL the graph will be updated with the freshest data. 


<br>

> ### <b>Teams</b> ###

This connector is under development and will be available soon. (coming in March 2023)

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/workinprogress.jpg" style="width:250px; height:auto;"/></center>

<br>


