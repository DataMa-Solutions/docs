---
title: Waterfall in DataMa Compare
layout: page
scope: datama/serverless/compare
---

<br>

<center> <img src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/waterfall.gif"> </center>

<br>

* The Steps can be a multiplication of each KPI or can be additive
* Need to distribute co-variance proportionally to abs(gap) to 'make it match'. Co-variance has to be monitored in final output. See [Covariance]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/modeling_components.html) page
* Last step ("End") is considered as a step by itself when doing dimension calculations

To better defined your steps (or metric equation), you can read our dedicated [article](https://datama.fr/2020/03/24/how-to-build-my-business-metric-relation/).

<br>

Shows the impact of each step on your primary metric, from Start to End.

Click on a step to see the details of this step.

By default, the most interesting dimension will be selected for this zoomed step.

You can change the selected dimension for this zoomed step by changing right clicking on the boxes of a segment and select the appropriate dimension in the "split by".

You can unzoom by clicking on other steps or clicking on the box again.

