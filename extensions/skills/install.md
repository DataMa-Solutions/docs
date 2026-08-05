---
title: Install the Datama Skill
layout: new-page
scope: Datama/light
keywords: skill install Claude Cursor IDE agent
---

<br/>

> Install the Datama skill once in your AI assistant. Whether you use a web chat or a coding IDE, the package is always the same `datama.zip` file from your Datama account.

<br/>

Before you start, [download the skill]({{site.url}}/{{site.baseurl}}/extensions/skills/download.html) (`datama.zip`).

<br/>

# 1. Which tools are supported?

The Datama skill follows the open **Agent Skills** format. Any product that supports this format can run the skill — you are not limited to a single vendor.

The [Agent Skills client showcase](https://agentskills.io/clients) lists assistants, IDEs, and agents that support skills today. Examples include **Claude**, **Cursor**, **GitHub Copilot**, **VS Code**, **OpenAI Codex**, **Gemini CLI**, **Mistral AI Vibe**, and **Snowflake Cortex Code**. The list grows as new products adopt the standard — check the showcase for the latest compatible tools and their setup instructions.

<br/>

# 2. Install in a web assistant

Many web-based assistants let you upload a skill zip from their settings. The screenshots below show **Claude** as an example; other web hosts follow a similar flow.

1. Open the **Skills** section in your assistant's settings (the exact menu name varies by product).
2. Choose **Upload a skill** (or the equivalent option).
3. Select the `datama.zip` file you downloaded from Datama.
4. Confirm. The **datama** skill appears in your skills list.

<center><img style="width:70%;" src="{{site.url}}/{{site.baseurl}}/extensions/skills/assets/claude-upload-skill.png" alt="Upload a skill in a web AI assistant (example: Claude)" /></center>

<br/>

Once installed, you can review the skill details, enable or disable it, and try it directly from the chat:

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/skills/assets/claude-skill-detail.png" alt="Datama skill details in a web assistant (example: Claude)" /></center>

<br/>

# 3. Install in an IDE or desktop agent

IDEs and desktop agents usually load skills from a folder in your workspace or user directory. The screenshot below shows **Cursor** as an example; other IDEs and agents follow the same pattern.

1. Unzip `datama.zip`.
2. Copy the extracted `datama` folder into your host's skills directory (for example `.agents/skills/` at the root of your project).
3. The folder structure should look like this:

<center><img style="width:50%;" src="{{site.url}}/{{site.baseurl}}/extensions/skills/assets/ide-skill-folder.png" alt="Datama skill folder in an IDE (example)" /></center>

<br/>

```
.agents/skills/datama/
├── SKILL.md
├── README.md
├── assets/
├── references/
└── scripts/
```

4. Open a new agent chat. The host detects the skill when you mention **datama** in your prompt.

<br/>

<div class="info-box">
 <strong>Note</strong>: Menu labels and folder paths vary by product. If the steps above do not match your environment, check the <a href="https://agentskills.io/clients">Agent Skills client showcase</a> for setup instructions specific to your assistant.
</div>

<br/>

# 4. Requirements

- An AI assistant listed on the [Agent Skills client showcase](https://agentskills.io/clients), or any other product that supports the Agent Skills format.
- Ability to produce or open standalone HTML in the host (file save, preview panel, canvas, or chat attachment).

<br/>

# 5. Next steps

- [Use the skill]({{site.url}}/{{site.baseurl}}/extensions/skills/use.html) with natural-language prompts and your data.
- [Download page]({{site.url}}/{{site.baseurl}}/extensions/skills/download.html) — change license option or re-download after a subscription update.

<br/>
