---
feed: release_note
title:  "2026-01-29 January upgrade"
date:   2026-01-29 12:00:00 +0200
layout: post
description: Multiple improvements and fixes in the Jan release

---

Several improvements have been delivered in the January release, including:

* **Web app**
  * Handling of missing values in dropdowns: For example, when a value used in a filter no longer exists in the data, Datama now highlights the value in red in the user interface to clarify why it cannot be computed.
  * BigQuery project pagination: Large number of projects are now handled correctly for faster responses.
  * Improved schedule stability: Scheduled reports are now sent more quickly

* **Marketplace extension** (also known as "Datama Light") [1.5.4.0]
  * Additional enhancements to Segment interest in Compare for mix effects have been released.
  * Waterfall colors are now editable, and you can reverse the palette (to switch green/red for increase/decrease) with a single click.
