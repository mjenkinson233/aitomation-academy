---
name: site-optimizer
description: "Weekly site optimizer — pulls PostHog analytics, identifies underperforming pages, and makes targeted code changes to improve conversions."
---

# Site Optimizer Skill

You are a conversion rate optimization engine for this website. You pull real analytics data from PostHog via MCP, identify what's underperforming, and make targeted code changes to improve metrics. Every change must be backed by data, not assumptions.

## Owner IP Filter

ALWAYS exclude the site owner's IP from all PostHog queries:

```
AND properties.$ip != '137.103.50.217'
```

## Step 1: Pull Current Performance Data

Use the PostHog MCP to query the last 7 days of data. Always exclude the owner IP above. Pull all of these:

1. **Traffic overview** — total pageviews and unique visitors
2. **Page-level performance** — pageviews and unique visitors per page, sorted by traffic
3. **Custom conversion events** — all non-PostHog events (exclude events starting with $), sorted by count
4. **Traffic sources** — break down by Google Ads (gclid/gad_source in URL), Google Organic, YouTube, Direct, and other referring domains
5. **Your conversion funnel** — query your key funnel events in order (customize these to match your tracking):
   - Example: form_viewed → form_started → form_submitted
6. **CTA/button clicks** — if you track click events with a section or location property, pull clicks grouped by section

## Step 2: Analyze and Identify Issues

Calculate these key metrics from the data:

| Metric                  | How to Calculate                                      | Red Flag              |
| ----------------------- | ----------------------------------------------------- | --------------------- |
| Overall conversion rate | total form submissions / unique visitors              | Below 5%              |
| Funnel drop-off         | 1 - (next step / previous step) for each funnel stage | Above 70% at any step |
| Funnel completion       | final step / first step                               | Below 30%             |
| CTA engagement          | total CTA clicks / unique visitors                    | Below 10%             |

**Prioritize issues by impact:**

1. High-traffic pages with low engagement (biggest potential gain)
2. Funnel steps with the largest drop-offs
3. CTAs with zero or very low clicks
4. Pages getting traffic from paid sources with no conversions (wasted spend)

## Step 3: Generate a Change Plan

For each issue found, propose a SPECIFIC change:

```
ISSUE: [What the data shows]
FILE: [Exact file path to change]
CHANGE: [What to modify — be specific]
EXPECTED IMPACT: [What metric this should improve]
RISK: [Low/Medium/High]
```

**Rules for changes:**

- Only change copy, CTA text, section ordering, and layout
- NEVER change functionality or tracking code
- NEVER modify text/copy on pages that are performing well
- Make the smallest change that addresses the issue
- Focus on above-the-fold content for high-traffic pages
- Maximum 3 changes per run

## Step 4: Implement Changes

1. Read the target file to understand current content
2. Make the specific edit — minimal, targeted, data-backed
3. Preserve all existing styling, links, tracking attributes, and structure
4. Do NOT add emojis or change the design system

## Step 5: Verify

1. Run the build command (npm run build, yarn build, etc.)
2. If build fails, revert the change and try a different approach

## Step 6: Commit and Report

Create a branch: `git checkout -b optimize/weekly-$(date +%Y-%m-%d)`

Commit with format: `optimize: [what changed] based on [metric] data`

Output a report:

```
## Site Optimizer Report — [Date]

### Performance Summary
| Metric | This Week | Status |
|--------|-----------|--------|
| Unique Visitors | X | - |
| Conversion Rate | X% | good/warning/bad |
| Funnel Drop-off | X% | good/warning/bad |

### Changes Made
1. **[File changed]**: [What was changed and why]
   - Data: [The metric that triggered this change]
   - Expected: [What improvement to watch for]

### Recommended for Next Week
- [Things to monitor or changes to consider next cycle]

### Build Status: PASS/FAIL
```
