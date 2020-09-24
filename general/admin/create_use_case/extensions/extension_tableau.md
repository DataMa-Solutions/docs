# Tableau extension

> Using DataMa Solutions as a **Tableau extension** is a great way to make your tableau report more insightful with the benefits of both DataMa and Tableau.



DataMa will basically use the Tableau Extension API to get data from your workbook, and analyze it there. Below example is a good overview.

![tableau_extension](images/Tableau-simplapp-extension.gif)

Below is a step by step video tutorial to get DataMa widget working in Tableau without login/ password so that all your stakeholders can access DataMa insights straight in Tableau.

<iframe width="800" height="450" src="https://www.youtube.com/watch?v=mgcsAiLLp_8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can learn more about tableau dashboard extension [here](https://help.tableau.com/current/pro/desktop/en-us/dashboard_extensions.html)

## Create you use case in DataMa app

* Download the extension manifest file <a href="https://www.docs.datama.fr/wp-content/uploads/2019/12/solutionsdatama_tableau.trex?dummy=dummy" target="_blank" download> here</a>, you should get a .trex file. Save it somewhere safe
* In Tableau desktop, add DataMa as a dashboard extension (see also Tableau documentation [here](https://help.tableau.com/current/pro/desktop/en-us/dashboard_extensions.htm))
    * In a Tableau workbook, open a dashboard sheet.
    * From the Objects section, drag Extension to the dashboard.
    * In the “Choose an Extension” dialog box, do either of the following, click My Extensions, and navigate to a .trex file you previously downloaded.
    * DataMa doesn’t need to access the underlying data of your workbook, so there is no security risk. If prompted, just validate the access. For more information, see [Data security, Network-enabled, and Sandboxed extensions](https://help.tableau.com/current/pro/desktop/en-us/dashboard_extensions.htm#Data).
* You should have the [SaaS](http://solutions.datama.fr/) version of DataMa now displayed within your Tableau dashboard

![Login-Tableau-extension](images/Login-Tableau-extension.jpg)

* Login to DataMa, and navigate to the model you need (Compare, Pivot, Impact etc)
* Once on the web app if launched, click on « Admin > Change Source » and in the extension section, click on « Tableau »
* Select the Tableau worksheet you want to connect to. This worksheet should contain Dimension and metrics as for DataMa sources in general (see [here](general/admin/input/source.md))
* Then follow usual steps to create a new analysis in DataMa. **Cautious: the dimensions and metrics are loaded in alphabetical order**, not the order you’re displaying them onto your worksheet, so you might want to define properly your steps by un-ticking the box « My source is in line with DataMa standards »
* You can save your use case as usual in DataMa, and reload it in the same Tableau environment (but you won’t be able to open it outside of Tableau, since DataMa is only able to get data from Tableau when used as an extension)
* Once saved, you can also use the refresh icon (next to the « loaded version »)

## Export DataMa widget as extensions

Last step is to export selected DataMa widget as self service Tableau widgets linked to your worksheet, so that other consumers of the report can access without logging in.

* Click on the share button on the top right of the widget your want to share, or on top bar, export>share as URL.
* Download the .trex file from DataMa
* Include this new extension in your Tableau dashboard, which should also contain the DataMa Source worksheet
