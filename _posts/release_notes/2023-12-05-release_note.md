---
feed: release_note
title:  "2023-12-05"
date:   2023-12-05 12:00:00 +0200
layout: post
---

* **Extensions:**
    * New Tableau extension documentation has been released  [here]({{site.url}}/{{site.baseurl}}/core_app/new/integration/tableau.html). Latest improvements includes ability to select the source worksheet in the configure panel.
    * Multiple bugs and UI improvements have been released. Make sure to use the latest version of the extension (in particular in Power Bi) when working with Datama.

* **General:**
    * Documentation available in app search bar (Ctrl + F) now includes only the new UI documentation. Old UI doc is still there, but not displayed in the search.

* **Compare:**
    * Tree mode now displays in top down view by default to align with the default settings of the waterfall (steps of market equation being from left to right)
    * The interactivity between the two slides has been improved to avoid unnecessary calculations: opening a step in the waterfall or changing a "Split by" dimension now waits 5s before impacting the second slide inputs (on that same step/ dimension selected in the waterfall)

* **Pivot:**
    * [Beta 🧪] **Check all steps** of metrics relation is now available. 

* **Prep:**
    * Join block has been added as a data prep option. This means that you can join one table on another using same logic as in SQL (Left Join/ Right Join/ Full Join). This is particularly useful if you want to bucket some dimensions using an other table.