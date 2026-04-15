# Context Handoff — Weekly Site Optimizer Routine

Paste this into your new Claude session to pick up where we left off.

---

## Prompt

```
I need to set up a Claude Code Routine (the new scheduled remote agent feature) for my website aitomationacademy.com. Most of the work is already done — I just need you to create the trigger and run it.

## What we're building

A weekly automated routine that:
1. Pulls PostHog analytics via curl (HogQL API)
2. Analyzes conversion rates, funnel drop-offs, traffic sources
3. Creates a git branch, makes up to 3 targeted code changes
4. Runs `npm run build` to verify
5. Opens a PR with a full analytics report

## Files already created

All files are in the `video/` folder:

- `video/routine-prompt-real.md` — The complete routine prompt with my PostHog API key, project ID, and all 7 HogQL queries baked in. This is the prompt to paste into the routine.
- `video/routine-prompt-template.md` — A template version for YouTube viewers with {{placeholders}} and instructions.
- `video/site-optimizer-skill.md` — The original skill file this was based on.
- `video/self-updating-website-script.md` — The YouTube script for the video about this system.

## What's left to do

1. Use `/schedule` to create a new remote trigger (the old one was on a different account: trig_01JRxBzJ3Z98U4TGyroMWt74)
2. The GitHub repo URL needs to be correct — ask me for the right org/repo if unsure
3. Make sure the Claude GitHub App is installed on the repo
4. Schedule: weekly, Monday 9am Eastern (= 1pm UTC, cron: `0 13 * * 1`)
5. Model: claude-sonnet-4-6
6. Run it once to test

## Key details

- PostHog host: us.posthog.com
- PostHog project ID: 367461
- PostHog API key: in `video/routine-prompt-real.md` (read the file, don't ask me for it)
- Owner IP to exclude: 137.103.50.217
- The prompt uses curl to hit PostHog API directly (no MCP needed) because I can't connect PostHog MCP as org connector

## Important constraints for the site

- Never modify: instrumentation-client.ts, components/analytics-events.tsx, components/posthog-provider.tsx, app/api/subscribe/route.ts
- Never change tracking event names
- Never remove internal links (SEO)
- Always preserve data-section attributes
- Always use /skool-redirect for community links
- Do NOT add emojis

Read `video/routine-prompt-real.md` to get the full prompt, then create the trigger with `/schedule`.
```
