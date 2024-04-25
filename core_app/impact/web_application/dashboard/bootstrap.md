---
title: Boostraping
description: Calculating significance using Boostrap test
layout: page
---

Bootstrap testing is a very efficient statistic approach for reading out AB test results as we explain in this [article](https://www.linkedin.com/pulse/ab-test-optimisation-earlier-decisions-new-readout-de-b%C3%A9naz%C3%A9/?trk=portfolio_article-card_title)
While it is indeed quite efficient, the calculation time is relatively high, which makes this test something you might want to use only in specific cases. Because of this large computation time, Datama disables by default the calculation of the significance for each and every subsegments, but you can still re-enable that calculation by toggling the appropriate enabler at the bottom of the page.

Bootstrap testing basically consists in putting all your observations into one bucket, splitting it into two groups and measure the difference of the means of the two groups.
We then replicate that approach multiple times (100 times in Datama) and plot the distribution difference of the mean.
This distribution should roughly follow a normal distribution.
Placing your actual observation of the difference of the mean on that distribution gives you the answer of the significance of that difference.  

![Bootstrap result](images/Bootstrap_test.png)

See also: [wikipedia](https://en.wikipedia.org/wiki/Bootstrapping_(statistics))

Test data: [Gsheet](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=1756377864)
