---
title: What is a Datama Skill?
layout: new-page
scope: Datama/light
keywords: skill agent AI Claude Cursor ChatGPT Compare Explore
---

<br/>

> A **Datama Skill** teaches your AI assistant how to deliver interactive Datama visualizations as standalone HTML — without sending your data to Datama servers.

<br/>

# 1. What is an AI Skill?

An **AI Skill** (also called *Agent Skill*) is a portable package of instructions, reference files, and assets that a compatible AI assistant can read and follow.

Instead of explaining Datama configuration rules in every conversation, you install the skill once. The assistant then knows:

- how to interpret your data and your question,
- which Datama solution to use,
- how to build a valid configuration,
- how to deliver a ready-to-open HTML page.

The skill package is a folder (or zip) that typically contains:

| File          | Role                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| `SKILL.md`    | Main instructions for the AI assistant (workflow, rules, routing)       |
| `references/` | Datama configuration specifications (Compare, Explore, market equation) |
| `assets/`     | HTML output template used to render the visualization                   |
| `scripts/`    | Optional validation tools for the generated output                      |
| `README.md`   | Human-readable overview of the package                                  |

<br/>

# 2. What does the Datama skill do?

The **datama** skill teaches a compatible assistant to produce a **standalone HTML page** with an interactive Datama visualization. All rendering happens in the browser — your dataset stays in the page.

The skill supports **two solutions**. The assistant picks one per delivered page:

## Compare — variance decomposition / waterfall

- **Intent:** explain **why** a KPI **changed** between **two** sides (periods, segments, groups: before/after, A vs B, X vs Y).
- **Typical asks:** "why did revenue drop?", "Compare Q1 vs Q2", "decompose the conversion change", "delta mobile vs desktop".
- **Output:** interactive waterfall chart with variance decomposition.

## Explore — breakdown / slicing

- **Intent:** **slice** a metric across one or two dimensions, or inspect a **funnel step** — **without** a mandatory two-group comparison.
- **Typical asks:** "break down revenue by country", "conversion by device and channel", "sessions per campaign", "explore the funnel at checkout".
- **Output:** interactive breakdown / slicing visualization.

### Routing (how the assistant chooses)

1. **Binary comparison** (two periods, two segments, "vs", "before/after", "why did X change") → **Compare**.
2. **Funnel step, single metric over a dimension, breakdown, or distribution** without a mandatory two-side comparison → **Explore**.
3. If both comparison and breakdown language appear → **Compare** (priority: compare > explore).
4. If unclear → **Compare**.

<br/>

# 3. Security and license

- **Your data stays in the browser.** The dataset is inlined in the HTML page; rows are not uploaded to Datama for rendering.
- **Your license is verified** when you download the skill with a license included. Generated visualizations run in paid mode.

<br/>

# 4. Compatible hosts

The Datama skill works with any **Agent Skills–compatible** assistant host — for example Claude, ChatGPT, Cursor, Copilot, or other products that support skills from a zip or folder.

- **Web assistant:** upload the `datama.zip` in your account or project skills (the exact menu varies by product).
- **IDE or desktop agent:** copy the skill folder into your host's skills directory (for example `.agents/skills/`).

<br/>

# 5. Next steps

- [Download the skill]({{site.url}}/{{site.baseurl}}/extensions/skills/download.html) from your Datama account.
- [Install the skill]({{site.url}}/{{site.baseurl}}/extensions/skills/install.html) in your AI assistant host.
- [Use the skill]({{site.url}}/{{site.baseurl}}/extensions/skills/use.html) with natural-language prompts.

<br/>
