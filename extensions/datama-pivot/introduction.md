---
title: Datama Pivot extension (alpha)
description: Score dimension dispersion on each market-equation step without a Start/End comparison — Datama Light Pivot
layout: new-page
scope: Datama/light/pivot
keywords: light pivot alpha dispersion CV tree compare without comparison
---

<br/>

> This page describes **Pivot in marketplace extensions (Datama Light)**. It is a different product surface from [Pivot on the Datama web app]({{site.url}}/{{site.baseurl}}/core_app/new/pivot/pivot_introduction.html) (Marimekko, importance charts, and other web-app views).

<br/>

# Purpose

**Datama Pivot (Light)** answers: *which dimensions disperse my KPI the most on each market-equation step?* — **without** requiring a Start / End comparison.

It scores every dimension on every step with a **coefficient of variation (CV)** (weighted for ratio steps; normalised for numerator-only steps), then renders a **KPI tree**:

- Root = total KPI  
- Children = market-equation **steps**, gauged by step interest (`max` CV among dimensions)  
- Under each step = **dimensions**, gauged by CV, with segment pills above / below average  

Steps are **collapsed by default**; expanding a step scores its dimensions on demand. Drill deeper on demand (infinite drill reuses Compare mechanics).

<br/>

# Availability (alpha)

| Host | Status |
|:---|:---|
| **Tableau** Viz Extension | Available |
| Local `serve` / dev | Available |
| Power BI, Looker Studio, Excel, Qlik, … | Not wired yet in this alpha |

<br/>

# Typical workflow

1. Drop metrics and dimensions as for Compare; define (or keep) the **market equation**.
2. Leave **comparison empty** — Pivot scores the full scope.
3. Expand steps / dimensions in the tree to find high-dispersion drivers.
4. Right-click a segment → **Compare to…** (sibling, or all others) to enable a comparison and switch the solution into the **full Compare** waterfall.
5. Delete the comparison to return to the scoring tree.

Pivot also exposes a **What If** settings tab and tree context-menu entry (same engine as Compare / Explore / Assess).

<br/>

# How scoring works (intuition)

For a step with a denominator, each segment’s ratio is compared to the overall ratio; dispersion is a **weighted standard deviation** divided by the absolute average ratio → **CV**.

For a **numerator-only** step, dispersion uses segment totals vs the average, with a normalisation factor so scores stay comparable to ratio CVs.

**Step interest** = highest CV among that step’s dimensions (aligned with Pivot on the Datama web app).

Composite market-equation steps that are **non-simplifiable** are skipped for dimensional scoring (they need market-equation **Sub-steps** instead).

<br/>

# Alpha scope

- Analysis path is step → dimension → dimension → … only (no Dimensions-then-Steps mode).
- The tree carries dimension children under each step (no separate secondary chart slide).
- Hosts beyond Tableau are not packaged in this alpha.

<br/>

# See also

- [Compare settings]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html)
- [Pivot on the Datama web app]({{site.url}}/{{site.baseurl}}/core_app/new/pivot/pivot_introduction.html)
