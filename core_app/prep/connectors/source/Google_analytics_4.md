---
title: Google Analytics 4
description: Datama Prep includes a GA4 connector.
layout: page
scope: shiny
---

> **You can upload your Google Analytics 4 datasets in Datama PREP.**

<br>

## Instructions

Click on the `Analytics 4` icon to upload your document:
![GAstep1](/assets/images/GA4step1.png)

You might need to give authorization to your google account in order to access Google Analytics. 

To do so, login to your GA Account by pressing the authorize button!

Side note the same Analytics account used for Universal Analytics is also used for Google Analytics 4.

![GAstep2](/assets/images/GA4step2.png)

You can configure your GA report with the sidebar inputs. See image bellow
![GAstep3](/assets/images/GA4step3.png)

<br>

### What's different in GA4
In fact, the core principles are still the same. Dimensions still represents the attributes of your data and gives context to them such as the country, city or the url of a clicked page. Same goes for metrics, representing equantitative measurements and the actual values in your datasets, such as Sessions, Pages view and Bounce Rate.

<br>

#### Data Collection
That being said, Analytics introduced additional domains for traffic collection with Google Analytics 4 in June to ensure that EU-based traffic data is only collected through servers based in the EU.

If your sites use a content security policy and has visitors from the EU and you have not already updated your content security policy configurations, please work with your site administrators to include the following Analytics domains on the connect-src and img-src directives for all sites using Google Analytics 4 to resume traffic collection for your site and app visitors based in the EU:
```
region1.google-analytics.com
region1.analytics.google.com
```
Alternatively, you may consider including `*.google-analytics.com` and `*.analytics google.com` to account for future domain updates with Analytics.

<br>

#### Public dimensions and metrics

Multiple dimensions & metrics have been reworked or completely removed in the newer GA4 version such as `Bouce Rate, PageViews...` for more details check this [artice](https://support.google.com/analytics/answer/11986666?hl=en#zippy=%2Cin-this-article) published by Analytics

<br>

#### Data Streams vs Segments & Views

Google Analytics 4 features “data streams” instead of the views and segments used by old Universal Analytics properties. Thus, there is no “view” level section of GA4, bir a segment selector. Instead Google Analytics 4 uses properties as well user attributes or demographic information about the user.

<br>

#### Universal Analytics (or Google Analytics 3) will be going away

Google Analytics 4 Api's are still in Beta but here at Datama we'e ready for the migration. Since Google affirmed that Google Analytics 3 will be replaced. In this [article](https://support.google.com/analytics/answer/11583528) it reads:
> Google Analytics 4 is our next-generation measurement solution, and it's replacing Universal Analytics. On July 1, 2023, standard Universal Analytics properties will stop processing new hits. If you still rely on Universal Analytics, we recommend that you prepare to use Google Analytics 4 going forward.

<br>

### Timeframe selection
Select wether you want a relative date, or absolute. If you want to lock your timeframe selection, uncheck the "move the time window overtime"
