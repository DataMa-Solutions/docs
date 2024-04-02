---
feed: release_note
title:  "2024-04-02"
date:   2024-04-02 12:00:00 +0200
layout: post
description: |
  Welcome to the new Datama branding 👀!<br>
  On top of new logo and fancy style, this reshape includes a faster login system and access to tips, use cases and release notes from the home page <br>
  Additionnaly, "what if" module and hourly schedule are available for beta testers <br>
---

* **General:**
    * New branding has been rolled out on the login and home page of the app. We are aligning Datama's image with its mission to automate data analytics through innovation. The eyes 👀 of your "data mate" should help you find insights faster and new set of colors and fonts reveals our unique and innovative positionning. 
    * This new home page comes with new functionalities:
      * You can now access to tips and uses cases from the home page, as well as this release note
      * Data visualization extensions are available in the "Products" section - ask your CSM if you need to get a licence
    * Freemium access: all Datama Solutions are now available for free test, with datasets limited to 2 dimensions, 2 metrics and 1k lines. 
    *  [Beta 🧪] **Hourly schedule** is now available for Beta testers. This means that you can get notified by Datama on an hourly basis, which unlock use cases such as anomaly detection on KPIs on which you need to act quickly. We recommend to keep 
    * "Reverse palette" toggle is available in the Settings > Workbook Style > Language and colors section. This allow to switch up and downs colors, in case of "negative" KPIs, were an increase is not a good news so should be displayed in red instead of green. (such has cost) 

* **Marketplace extension** (aka "Datama Light")
  * Datama light is now available in self service suscription through Stripe. Just set up your payment method and you're good to go for a licence on Looker Studio and Tableau
  * The Tableau software and Looker Studio light extension are also available for Premium Web app suscriptions. You can download your own .trex file and Looker Studio community viz url from the "Product" page

* **Prep** 
  *  [Beta 🧪] **"What if"** block is available for Beta testers. This allows to create scenarios on your existing data, taking assumptions on variations of KPIs on a given scope (For instance +10% on Mobile Conversion Rate vs. last Month). This is particularly useful for Compare usage, and a specific interface will ultimately appear in the Compare solution to edit the scenarios directly from inputs in the waterfall. [Learn More]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/refine_data.html#what-if)
  * Email connector is now back. It was temporarly unavailable after last month's backend release. The logic has been improved, and Datama now use the attachment (CSV or Excel) of last email sent, even if it was opened

* **Compare**
  * "Dimension then Steps" approach is now available for "complex" market equation: if Datama finds a column of your dataset matching the provided total of a custom market equation, we will use that column to compute the Dimension then Step approach.
  * "Dimension then Step" selection is available in "quick actions" drop down at the top right corner of the waterfall to make the switch from one approach to another easier.
  * Single segment dimension interest score has been reduced, to avoid flagging dimensions with one single segment as the "most interesting" one
  * Segment text complement input now includes an additional option, to display variation 
  * Display of KPI Tree view of the Waterfall has been improved, to better use the space offered within the slide. This should allow to better read the text of cards when having a lot of boxes opened.
  * The second slide of Datama Compare (Moves and Bridge view) is now available for all full app extensions. 

* **Journey**
  * **Sankey chart** is available as an alternative option for journeys visualization. This is particularly useful to visalize "loops" of multiple iterations on the same touch point. 
