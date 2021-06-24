# Waterfall

> The **waterfall analysis** is the main element of DataMa COMPARE interface. It concatenates all the detailed analysis that appear in other graphs.

<center> <img src="compare/model/images/Waterfall-768x627.jpg"> </center>

* Steps generally matching conversion funnel, can be additive branches as long as we add a % of traffic going to a given branch as a step in the waterfall
* Need to distribute co-variance proportionally to abs(gap) to 'make it match'. Co-variance has to be monitored in final output. See [Covariance](compare/model/covariance.md) page
* Last step ("End") is considered as a step by itself when doing dimension calculations

To better defined your steps (or metric equation), you can read our dedicated [article](https://datama.fr/2020/03/24/how-to-build-my-business-metric-relation/)

![waterfall1](images/waterfall2.png)

Shows the impact of each step on your primary metric, from Start to End.

Click on a step to see the details of this step

By default, the most interesting dimension will be selected for this zoomed step

You can change the selected dimension for this zoomed step by changing the Dimension filter in the detailed view - filter below

You can unzoom by clicking on other steps or double clicking on the chart
