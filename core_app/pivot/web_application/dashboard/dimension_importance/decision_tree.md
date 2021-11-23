---
title: Decision tree
description: The decision tree is based on a Rpart model (Recursive Partitioning and Regression Trees). Helps you identifying the optimal characteristic of the sample that has the best performance.
layout: page
---

The decision tree is based on a Rpart model (Recursive Partitioning and Regression Trees)

Helps you identifying the optimal characteristic of the sample that has the best performance. This decision tree helps you understand your dimensions and the importance they have explaining your performance.

The figures in the square is the average KPI for this specific population and the percentage is the ratio of the population having this characteristic.

![decision_tree]({{site.url}}/{{site.baseurl}}/core_app/pivot/web_application/dashboard/dimension_importance/images/decision_tree.png)

Steps of the decision tree are ordered according the importance they have on the KPI.

On the right find the more important dimension to follow and the worst on the left.

In the box, see on the top the value of the KPI for the concerned population and in the bottom the percentage of population concerned by this selection.

![model_decision_tree]({{site.url}}/{{site.baseurl}}/core_app/pivot/web_application/dashboard/dimension_importance/images/DecisionTree_Pivot_Model.png)

See [details](https://www.rdocumentation.org/packages/rpart/versions/4.1-15/topics/rpart) on the Rpart package
