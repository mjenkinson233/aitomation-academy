TITLE: My Website Updates Itself Using AI
TYPE: Long Form
TARGET LENGTH: 8-9 minutes
ESTIMATED WORD COUNT: ~1,350 words (150 words/min)

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
[VISUAL]: Talking head with subtle text overlay: "20,000+ hrs production Claude | 100M+ tokens"
[SPOKEN]:
"I've spent over 20,000 hours building production systems with Claude and burned through more than 100 million tokens doing it. What I'm about to show you is the exact system I use on my own site. By the end of this video, your website will monitor its own performance and fix itself on a schedule — fully automated."

[TIMESTAMP: 0:30-1:00]
[SECTION: OPEN LOOPS + PREVIEW]
[VISUAL]: Quick cuts — PostHog dashboard, MCP connection, Claude Code running, before/after of a page change
[SPOKEN]:
"Here's what we're building. First, we connect Claude to PostHog so it can pull real analytics — pageviews, conversion rates, where people drop off. Then we give it a skill that knows how to analyze that data and make changes to our code. And finally, we put it on a schedule so it runs every single week without you touching it. The part that blew my mind was when it caught a conversion leak that I completely missed — and I'll show you that at the end."

---

[TIMESTAMP: 1:00-2:30]
[SECTION: CORE — Step 1: PostHog Setup]
[VISUAL]: Screen recording — PostHog signup, copying project API key, pasting into project
[SPOKEN]:
"Step one. PostHog. If you don't have it, sign up — it's free for up to a million events per month, which is more than enough. Grab your project API key and your host URL."

[VISUAL]: Screen recording — showing the instrumentation-client.ts file or however PostHog is initialized
[SPOKEN]:
"Now you need PostHog actually tracking events on your site. The basics — pageviews, clicks, scroll depth — PostHog handles automatically. But the real power is custom events. Things like form submissions, CTA clicks, popup interactions. Here's what mine looks like."

[VISUAL]: Screen recording — show analytics-events.tsx and the PostHog dashboard with real events flowing in
[SPOKEN]:
"I'm tracking CTA clicks with the section they came from, lead form submissions through the full funnel — viewed, started, submitted — popup interactions, scroll depth, video engagement. All of these become data points that Claude can analyze."

[PATTERN INTERRUPT]: Cut to talking head
[SPOKEN]:
"Now, PostHog alone is just a dashboard you stare at. Let's make Claude stare at it for us."

---

[TIMESTAMP: 2:30-4:00]
[SECTION: CORE — Step 2: Connect PostHog MCP to Claude Code]
[VISUAL]: Screen recording — showing the PostHog MCP plugin setup in Claude Code
[SPOKEN]:
"Step two. Connect PostHog to Claude Code. PostHog has an official MCP plugin, which means Claude can query your analytics directly — no API wrangling, no code. To set it up, you install the PostHog plugin from Claude's MCP settings. Once connected, Claude can run HogQL queries, pull event data, check conversion funnels — all through natural language."

[VISUAL]: Live demo — type a natural language question in Claude Code, show PostHog MCP returning real data
[SPOKEN]:
"Watch this. I ask Claude: 'What's my conversion rate this week?' And it pulls real data — 151 unique visitors, 19 form submissions, 12.6% conversion rate. This is live production data, not a mock. And now Claude knows everything about how my site is performing."

[PATTERN INTERRUPT]: Quick zoom on the data results
[SPOKEN]:
"But pulling data is step one. The real magic is what we do with it."

---

[TIMESTAMP: 4:00-5:30]
[SECTION: CORE — Step 3: The Self-Update Skill]
[VISUAL]: Screen recording — show the SKILL.md file being created/opened
[SPOKEN]:
"Step three. We give Claude a skill — a set of instructions it follows automatically. I call this one the site optimizer. Here's what it does."

[VISUAL]: Show the skill file with key sections highlighted as you talk through them
[SPOKEN]:
"First, it pulls traffic data — pageviews, unique visitors, sources. Then conversion events — every form submission, CTA click, popup interaction. Then it runs the analysis: Where's the biggest drop-off? Which pages have high traffic but low engagement? Which CTAs are getting ignored? And here's the key part — it doesn't just tell you what's wrong. It opens the actual code files and makes the changes. New copy, restructured sections, better CTA placement. Then it runs the build to make sure nothing breaks."

[VISUAL]: Show a real diff of changes Claude made — before/after of actual code
[SPOKEN]:
"Look at this. Claude found that my lead form had a 79% drop-off between people seeing it and actually starting to type. So it restructured the section, made the value prop more specific, and added a stronger hook above the form. Real code change, real improvement."

---

[TIMESTAMP: 5:30-7:00]
[SECTION: VALUE BOMB — The Automation Loop]
[VISUAL]: Screen recording — show the /loop command or scheduled agent setup
[SPOKEN]:
"Now here's the part that makes this truly autopilot. Instead of running this manually, we schedule it. In Claude Code, you can set up a recurring task. I have mine running weekly."

[VISUAL]: Show the automation running — pulling data, analyzing, making changes, committing
[SPOKEN]:
"Every Monday, Claude wakes up, pulls the last 7 days of PostHog data, compares it to the previous week, identifies what's underperforming, makes targeted changes, runs the build, and commits the update. I wake up to a pull request with a full report of what changed and why."

[PATTERN INTERRUPT]: Cut to talking head, slightly closer framing
[SPOKEN]:
"Think about what this means. Most people build a website and forget about it. Or they check analytics once a month, feel overwhelmed, and close the tab. This system turns your website into a living thing that gets better every single week. And the crazy part? The changes it makes are backed by actual data — not guessing, not 'best practices' from a blog post from 2019."

[VISUAL]: Show the PostHog dashboard with an upward trend or improved metric
[SPOKEN]:
"After running this for three weeks on my site, my popup conversion rate went from 6% to 9%, and my lead form started rate improved by 40%. Those are real numbers from a real site."

---

[TIMESTAMP: 7:00-7:45]
[SECTION: QUICK RECAP + WHAT YOU NEED]
[VISUAL]: Talking head with bullet overlay
[SPOKEN]:
"Quick recap. You need three things. PostHog for analytics — free tier works. The PostHog MCP plugin connected to Claude Code. And the site optimizer skill, which I'm giving you for free — link is in the description. Drop it into your project and you have a self-updating website."

[PATTERN INTERRUPT]: Slight lean in, energy shift
[SPOKEN]:
"Now, this skill is tuned for conversion optimization — CTAs, forms, copy. But you can modify it for anything. SEO improvements, accessibility fixes, performance optimization. The pattern is the same: pull data, analyze, change code, verify."

---

[TIMESTAMP: 7:45-8:30]
[SECTION: SOFT CTA + TEASE]
[VISUAL]: Talking head, casual energy
[SPOKEN]:
"If you want the full prompt, the skill file, and the PostHog setup template — I put everything on aitomationacademy.com. You can also join our free community where 400+ people are building stuff like this with Claude every day."

[VISUAL]: End screen with video cards
[SPOKEN]:
"If you want to see how I built the analytics tracking that feeds this system, I made a video on that — link right here. And if you want to see the SEO automation I showed in my last video, that one's right here. See you in the next one."

---

DESCRIPTION:
My website reads its own PostHog analytics and automatically fixes underperforming pages using Claude Code — no human required. Here's exactly how to set it up from scratch in under 9 minutes.

What you'll learn:
- How to connect PostHog analytics to Claude Code via MCP
- How to build a "site optimizer" skill that analyzes real traffic data
- How to schedule automatic weekly updates that improve your conversion rates

Free resources (skill file + prompts): https://www.aitomationacademy.com
Join the free community: https://www.skool.com/claude-academy-5969

TIMESTAMPS:
0:00 - My website just fixed itself
0:08 - This is a real production site
0:30 - What we're building
1:00 - Step 1: PostHog setup
2:30 - Step 2: Connect PostHog MCP to Claude
4:00 - Step 3: The self-update skill
5:30 - The autopilot loop (this is the magic)
7:00 - What you need to get started
7:45 - Free resources + community

#ClaudeCode #PostHog #WebDevelopment #AIAutomation #SelfUpdatingWebsite #Claude #WebsiteOptimization #ConversionRate

THUMBNAIL CONCEPTS:
1. Split screen — left side: PostHog dashboard with red downward arrows, right side: same dashboard with green upward arrows. Center text: "SELF-UPDATING" with a robot/AI icon. Marko's face with surprised expression in corner.
2. Website screenshot with a glowing loop/refresh arrow around it. Text: "UPDATES ITSELF". Claude Code logo in corner. Marko pointing at the loop.
3. Before/after of analytics graph (red to green). Text: "NO HUMAN NEEDED". Simple, clean, high contrast.

TAGS:
claude code, posthog, self-updating website, website automation, claude code tutorial, ai website optimization, posthog analytics, claude mcp, website autopilot, conversion rate optimization, claude code skills, ai automation 2026
