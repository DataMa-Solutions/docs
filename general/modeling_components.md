# Other important modeling components

## Clustering

Clustering is necessary for dimension analysis
* For discrete dimensions, anything below X% (X=2) of primary numerator is aggregated into “other”
* For continuous dimensions, cuts are made using weighted decision tree methodology, in order to create coherent buckets. read docs related to [continuous dimension](/)

## Absolute metric

If primary metric is an absolute value (e.g. Revenue), an artificial “N=1” metric is created and used as denominator for first step, to match previous [methodology](/)

## Interdependence

In ‘Safe Mode’, most correlated dimensions are flagged. Interdependencies between dimensions are tested using Chi-Square and simple business calculation.

## Combined dimension

Combined dimension is created by concatenating all clustered dimensions into one “Combined_Dimension”. It is then considered as all other dimensions and it’s contribution in the variation performance is assessed as it is for the other dimensions.

## Significance

In ‘Safe Mode’, Simple check of minimal volume (manually inputted) for given metric in Start and End

## Scope

‘Out’ segment defined in column ‘Scope’ is excluded from analysis, and simply stacked on Start and End column in waterfall chart

## Covariance

For waterfall analysis, covariance is distributed on each step. User should check that it remains reasonable (typically, <30%)

For Dimension analysis, covariance is not distributed on neither mix nor performance sizing. Hence user should be careful when looking at dimension impact

Read more about [Covariance](/)
