---
title: Causal Impact
description: Inferring the causal impact of a change on a test group in a time serie
layout: page
---
Causal Impact test allows to assess the significance of a variation **pre-post an intervention on a test group**.

This can be very useful to assess the impact of an action in wide variety of business, such as SEO experiments, marketing and advertising campaigns or Stock Market analysis.

For instance, you are a large website and you want to test a new strategy in SEO (Search Engine Optimization). Say that you want to include the price of a product in the meta-description seen by users in Google search results, and see the impact of that change on the click through rate. You cannot properly AB test such a thing: Google allows you to refer only one page per product, and you can't split Google users between A and B variant. So you end up creating a set of product pages that will make that change on a specific day (your variant group) and you keep a set of product pages that won't change at all (your control group) and will be used as a base line to assess the real impact of the change.

> Here is an example of a compatible [dataset](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=365429622). Note that CausalImpact is a time serie approach so requires a "date" column.

Once uploaded in DataMa Impact, you then need to define what you are comparing (in that case, pre-post the change, on the 30th of Jan 2022)
![Comparison Defiition](images/CI_StartEnd_Definition.png)

You also need to optin for Causal Impact test in the "settings" section.
![Causal Impact test](images/Causal_Impact.png)

Then, define where is the Control/ Variant group column and what's the segment that is impacted by the change
![Causal Impact settings](images/CI_Impacted_Dimension.png)

Once settings are properly defined, you can hit "Impact" and results will show you
  * In grey line, the value of the defined KPI for the control group over time
  * In a blue line, the value of the defined KPI for the test group
  * In orange, the estimation and the confidence interval, based on forecast and control group

![Causal Impact test](images/Causal_Impact_results.png)
_In the example above, the Click/ Impression for the test group has increased quite a bit after the change (30th of Jan 2022), but the control group also increased by the same range, hence the causal impact is not significant: We don't think that the observed variation of the KPI was actually due to the applied change, but to another reason._

Note: DataMa Causal Impact is based on the work from Kay H. Brodersen, Alain Hauser at Google released through the [CausalImpact R package](https://google.github.io/CausalImpact/CausalImpact.html)
See also: [CausalImpact](https://research.google/pubs/pub41854/)

Test data: [Gsheet](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=365429622)
