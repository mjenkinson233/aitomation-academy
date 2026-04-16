TITLE: My Website Updates Itself Using AI
TYPE: Long Form
TARGET LENGTH: 9-10 minutes
ESTIMATED WORD COUNT: ~1,500 words (150 words/min)
VERSION: 2 — includes setup steps, local demo approach

---

RECORDING PLAN:
Before filming talking head, do ONE local run of the site optimizer in Claude Code while screen recording. This gives you every visual you need: PostHog data pulling, analysis, code changes, build, commit. Then film talking head and stitch together.

---

[TIMESTAMP: 0:00-0:08]
[SECTION: HOOK]
[VISUAL]: Screen recording — PostHog dashboard showing real analytics, then cut to Claude Code terminal making live code changes, then cut to the website visually changing
[SPOKEN]:
"This website just read its own analytics, found a page where 79% of visitors drop off, rewrote the section, and deployed the fix. No human involved."

[TIMESTAMP: 0:08-0:15]
[SECTION: ANTI-HOOK]
[VISUAL]: Cut to talking head, then briefly flash the live aitomationacademy.com site
[SPOKEN]:
"And no, this is not a demo on a fake project. This is my production website with real traffic, real conversions, and real money on the line. Let me show you exactly how to set this up."

[TIMESTAMP: 0:15-0:30]
[SECTION: CREDIBILITY + PROMISE]
[VISUAL]: Talking head with subtle text overlay: "2000+ hrs production Claude | 10 B+ tokens"
[SPOKEN]:
"I've spent over 2000 hours building production systems with Claude andInburned through more than 10 billion tokens doing it. What I'm about to show you is the exact system I use on my own site. By the end of this video, your website will monitor its own performance and fix itself — fully automated."

[TIMESTAMP: 0:30-0:40]
[SECTION: QUICK TRANSITION]
[VISUAL]: Quick cuts — PostHog dashboard, Claude Code running, before/after of a page change
[SPOKEN]:
"The only two things you need for this are Claude Code and an analytics tool called PostHog. Let's get into it."

---

[TIMESTAMP: 1:00-2:30]
[SECTION: CORE — Step 1: PostHog Setup]
[VISUAL]: Screen recording — PostHog signup page
[SPOKEN]:
"Step one. PostHog. Go to posthog.com and sign up — it's free for up to a million events per month, which is way more than you need."

[VISUAL]: Screen recording — terminal, running the AI wizard command
[SPOKEN]:
"Now here's the cool part. You don't have to set any of this up manually. PostHog has an AI wizard. One command in your terminal — npx posthog-cli@latest setup — and it does everything. It scans your codebase, installs the right SDKs, configures your environment variables, sets up session replay, error tracking, and even creates custom events based on your actual product flows. It took about 10 minutes on my project and I didn't touch a single file."

[VISUAL]: Screen recording — show the wizard running, scanning the codebase, writing code
[SPOKEN]:
"It detected my Next.js app, installed both the client and server SDKs, set up a reverse proxy, and wrote tracking code directly into my components. It even generated a dashboard in PostHog with the events it created. And here's the best part — it also installs the PostHog MCP server and Claude Code skills, so Claude can already query your analytics the moment the wizard finishes."

[VISUAL]: Screen recording — show the PostHog dashboard with events flowing in, then show the MCP connection in Claude Code
[SPOKEN]:
"One command and Claude already has eyes on your analytics. You can go deeper by adding your own custom events — form funnels, CTA clicks by section, popup interactions. Here's what I added to mine."

[VISUAL]: Screen recording — quickly flash analytics-events.tsx, then show PostHog Activity tab with real events
[SPOKEN]:
"These custom events give Claude more specific data to work with. But even without them, the wizard setup gives you more than enough to start optimizing."

[PATTERN INTERRUPT]: Cut to talking head
[SPOKEN]:
"So PostHog is tracking our site and Claude can already query it. Let me show you what that looks like."

---

[TIMESTAMP: 2:30-3:45]
[SECTION: CORE — Step 2: Claude Talks to PostHog]
[VISUAL]: Live demo — type a question in Claude Code, show PostHog MCP returning real data
[SPOKEN]:
"Since the wizard already connected the PostHog MCP, Claude can query your analytics with natural language. Watch this. I ask Claude: 'What's my conversion rate this week?' And it pulls real data. 151 unique visitors, 19 form submissions, 12.6% conversion rate. This is live production data, not a mock."

[VISUAL]: Show Claude running a more complex query — funnel data or traffic sources
[SPOKEN]:
"I can ask it anything. Show me where people drop off. Which pages get the most traffic from paid ads. What's my popup conversion rate. Claude runs HogQL queries under the hood and gives you plain English answers."

[PATTERN INTERRUPT]: Quick zoom on the data results
[SPOKEN]:
"But pulling data is step one. The real magic is what we do with it."

---

[TIMESTAMP: 3:45-5:30]
[SECTION: CORE — Step 3: The Site Optimizer Skill]
[VISUAL]: Screen recording — open the skill file, show the top with placeholders
[SPOKEN]:
"This is the skill I was talking about in the last step. I made this as a template for you — there are a couple placeholders you need to fill out. This IP field — enter your own IP so we filter out your visits and don't mess up the data. And if you have a custom conversion funnel, you can define those events here. Here's the example I use on my website."

[VISUAL]: Scroll to Step 1 of the skill
[SPOKEN]:
"Now let's quickly cover the steps. Step one — we pull current performance data from PostHog. Self-explanatory. We're collecting all the real traffic data from real customers that we set up with the wizard in the previous step."

[VISUAL]: Highlight the analysis section and thresholds table
[SPOKEN]:
"Step two — we analyze the data and identify issues. I set up some metrics with red flags so it's easier to follow — conversion rate below 5%, funnel drop-off above 70%. You can add your own metrics and red flags here. We also tell Claude to prioritize issues by impact — biggest potential gain first."

[VISUAL]: Highlight the change plan, rules, implement, verify, and report sections as you scroll through them
[SPOKEN]:
"Then it generates a change plan, follows the rules for what it can and can't touch, implements the changes, and verifies that everything works by running the build. If everything passes, Claude creates a new branch, commits the changes, and you get a report of what was done. You review the branch, and if it looks good, you just merge it and test the new version of your site."

[PATTERN INTERRUPT]: Cut to talking head
[SPOKEN]:
"Now let me show you what happens when we actually run this thing."

---

[TIMESTAMP: 5:30-7:00]ru
[SECTION: VALUE BOMB — Live Demo]
[VISUAL]: Screen recording — Claude Code running the full optimizer. Show it pulling data, analyzing, finding an issue, making a change, running the build.
[SPOKEN]:
"I'm running the optimizer right now on my production site. Watch. It pulls the last 7 days of PostHog data — traffic, conversions, funnels, everything. Then it crunches the numbers."

[VISUAL]: Show the moment Claude identifies an issue in the terminal output
[SPOKEN]:
"It found that my lead form has a 79% drop-off between people seeing it and actually starting to type. That's a problem. So it opens the file, restructures the section, makes the value proposition more specific, and adds a stronger hook above the form."

[VISUAL]: Show the git diff — before/after of the actual code change
[SPOKEN]:
"Look at this diff. Real code change. Not a suggestion, not a report — an actual edit to my production codebase. Then it runs the build — passes — creates a branch, and pushes a commit."

[VISUAL]: Show the PR or commit with the report
[SPOKEN]:
"And I get a full report. Performance summary, what changed and why, what to monitor next week. All backed by data."

[PATTERN INTERRUPT]: Cut to talking head, slightly closer framing
[SPOKEN]:
"Now you could run this manually every week. Open Claude Code, trigger the skill, review the PR. But we can do better."

---

[TIMESTAMP: 7:00-8:00]
[SECTION: Step 4 — Autopilot with Routines]
[VISUAL]: Screen recording — claude.ai/code/routines in browser
[SPOKEN]:
"Step four. Claude just launched Routines — and this is what makes this fully autonomous. Go to claude.ai/code/routines. Create a new routine. Paste your optimizer prompt. Link your GitHub repo. Add the PostHog connector. Set the schedule to weekly."

[VISUAL]: Show the routine configuration — prompt, repo, connectors, trigger
[SPOKEN]:
"What this does is run your optimizer on Anthropic's cloud infrastructure. Every Monday, it wakes up, clones your repo, pulls PostHog data, makes changes, and opens a PR. Your laptop can be off. You wake up to a pull request with a full report."

[PATTERN INTERRUPT]: Cut to talking head
[SPOKEN]:
"Think about what this means. Most people build a website and forget about it. Or they check analytics once a month, feel overwhelmed, and close the tab. This system turns your website into a living thing that gets better every single week. And the changes are backed by actual data — not guessing, not best practices from 2019."

[VISUAL]: Show the PostHog dashboard with the Site Optimizer dashboard we built
[SPOKEN]:
"After running this for three weeks, my popup conversion rate went from 6% to 9%, and my lead form started rate improved by 40%. Real numbers from a real site."

---

[TIMESTAMP: 8:00-8:45]
[SECTION: QUICK RECAP + WHAT YOU NEED]
[VISUAL]: Talking head with bullet overlay
[SPOKEN]:
"Quick recap. Three things. One — run the PostHog wizard, it sets up analytics AND the Claude connection in one command. Two — drop the site optimizer skill into your project. Three — set up a Routine to run it weekly. I'm giving you the skill file, the prompt template, and the PostHog dashboard queries all for free — link in the description."

[PATTERN INTERRUPT]: Slight lean in, energy shift
[SPOKEN]:
"This skill is tuned for conversion optimization — CTAs, forms, copy. But you can modify it for anything. SEO improvements, accessibility fixes, performance tuning. The pattern is always the same: pull data, analyze, change code, verify."

---

[TIMESTAMP: 8:45-9:30]
[SECTION: SOFT CTA + TEASE]
[VISUAL]: Talking head, casual energy
[SPOKEN]:
"If you want all the files — the skill, the routine prompt, the dashboard template — everything is on aitomationacademy.com. You can also join our free community where 400+ people are building stuff like this with Claude every day."

[VISUAL]: End screen with video cards
[SPOKEN]:
"If you want to see how I built the analytics tracking that feeds this system, watch this video. And if you want to see the SEO automation I built with Claude, that's right here. See you in the next one."

---

DESCRIPTION:
My website reads its own PostHog analytics and automatically fixes underperforming pages using Claude Code — no human required. Here's exactly how to set it up step by step.

What you'll learn:
- How to set up PostHog analytics with custom event tracking
- How to connect PostHog to Claude Code via MCP
- How to build a site optimizer skill that analyzes real traffic data
- How to schedule it with Claude Code Routines (runs in the cloud, laptop off)

Free resources:
- Site optimizer skill file
- Routine prompt template
- PostHog dashboard queries

Download everything: https://www.aitomationacademy.com
Join the free community: https://www.skool.com/claude-academy-5969

TIMESTAMPS:
0:00 - My website just fixed itself
0:08 - This is a real production site
0:30 - What we're building (4 steps)
1:00 - Step 1: PostHog setup + custom events
2:30 - Step 2: Connect PostHog MCP to Claude Code
3:45 - Step 3: The site optimizer skill
5:30 - Live demo: watch it fix my site
7:00 - Step 4: Autopilot with Claude Routines
8:00 - Everything you need to get started
8:45 - Free resources + community

#ClaudeCode #PostHog #WebDevelopment #AIAutomation #SelfUpdatingWebsite #Claude #WebsiteOptimization #ConversionRate #ClaudeRoutines

THUMBNAIL CONCEPTS:
1. Split screen — left side: PostHog dashboard with red downward arrows, right side: same dashboard with green upward arrows. Center text: "SELF-UPDATING" with a robot/AI icon. Marko's face with surprised expression in corner.
2. Website screenshot with a glowing loop/refresh arrow around it. Text: "UPDATES ITSELF". Claude Code logo in corner. Marko pointing at the loop.
3. Before/after of analytics graph (red to green). Text: "NO HUMAN NEEDED". Simple, clean, high contrast.

TAGS:
claude code, posthog, self-updating website, website automation, claude code tutorial, ai website optimization, posthog analytics, claude mcp, website autopilot, conversion rate optimization, claude code skills, ai automation 2026, claude routines, claude code routines
