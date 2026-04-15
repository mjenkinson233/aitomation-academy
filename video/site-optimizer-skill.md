---
name: site-optimizer
description: "Weekly site optimizer — pulls PostHog analytics, identifies underperforming pages, and makes targeted code changes to improve conversions. Run manually or schedule on a loop."
---

# Site Optimizer Skill

You are a conversion rate optimization engine for this website. You pull real analytics data from PostHog, identify what's underperforming, and make targeted code changes to improve metrics. Every change must be backed by data, not assumptions.

## Owner IP Filter

ALWAYS exclude the owner's IP from all PostHog queries:
```
AND properties.$ip != '137.103.50.217'
```

## Step 1: Pull Current Performance Data

Run ALL of these PostHog queries in parallel for the last 7 days:

### 1a. Traffic Overview
```sql
SELECT
  count() as pageviews,
  count(DISTINCT person_id) as unique_visitors
FROM events
WHERE event = '$pageview'
  AND timestamp >= now() - INTERVAL 7 DAY
  AND properties.$ip != '137.103.50.217'
```

### 1b. Page-Level Performance
```sql
SELECT
  properties.$pathname as page,
  count() as pageviews,
  count(DISTINCT person_id) as unique_visitors
FROM events
WHERE event = '$pageview'
  AND timestamp >= now() - INTERVAL 7 DAY
  AND properties.$ip != '137.103.50.217'
GROUP BY page
ORDER BY pageviews DESC
```

### 1c. Conversion Events
```sql
SELECT event, count() as count
FROM events
WHERE timestamp >= now() - INTERVAL 7 DAY
  AND event NOT LIKE '$%'
  AND properties.$ip != '137.103.50.217'
GROUP BY event
ORDER BY count DESC
LIMIT 20
```

### 1d. Traffic Sources
```sql
SELECT
  CASE
    WHEN properties.$current_url LIKE '%gclid%' OR properties.$current_url LIKE '%gad_source%' THEN 'Google Ads'
    WHEN properties.$referring_domain = 'www.google.com' THEN 'Google Organic'
    WHEN properties.$referring_domain = 'www.youtube.com' THEN 'YouTube'
    WHEN properties.$referring_domain IN ('$direct', '') OR properties.$referring_domain IS NULL THEN 'Direct'
    ELSE properties.$referring_domain
  END as source,
  count() as pageviews,
  count(DISTINCT person_id) as unique_visitors
FROM events
WHERE event = '$pageview'
  AND timestamp >= now() - INTERVAL 7 DAY
  AND properties.$ip != '137.103.50.217'
GROUP BY source
ORDER BY pageviews DESC
```

### 1e. Lead Form Funnel
```sql
SELECT
  event,
  count() as count
FROM events
WHERE event IN ('lead_form_section_viewed', 'lead_form_started', 'lead_form_submit_attempt', 'lead_form_submitted')
  AND timestamp >= now() - INTERVAL 7 DAY
  AND properties.$ip != '137.103.50.217'
GROUP BY event
ORDER BY count DESC
```

### 1f. Popup Funnel
```sql
SELECT
  event,
  count() as count
FROM events
WHERE event IN ('popup_shown', 'popup_dismissed', 'popup_form_submitted')
  AND timestamp >= now() - INTERVAL 7 DAY
  AND properties.$ip != '137.103.50.217'
GROUP BY event
ORDER BY count DESC
```

### 1g. CTA Click Attribution
```sql
SELECT
  properties.section as section,
  count() as clicks
FROM events
WHERE event = 'cta_click'
  AND timestamp >= now() - INTERVAL 7 DAY
  AND properties.$ip != '137.103.50.217'
GROUP BY section
ORDER BY clicks DESC
```

## Step 2: Analyze and Identify Issues

Calculate these key metrics from the data:

| Metric | Formula | Red Flag Threshold |
|--------|---------|-------------------|
| Overall conversion rate | form_submissions / unique_visitors | Below 5% |
| Popup effectiveness | popup_form_submitted / popup_shown | Below 5% |
| Lead form drop-off | 1 - (lead_form_started / lead_form_section_viewed) | Above 70% |
| Lead form completion | lead_form_submitted / lead_form_started | Below 60% |
| Skool redirect rate | skool_redirect_viewed / unique_visitors | Below 10% |
| Bounce indicator | Pages with high traffic but low time or no conversion events | Any page |

**Prioritize issues by impact:**
1. High-traffic pages with low engagement (biggest potential gain)
2. Funnel steps with the largest drop-offs
3. CTAs with zero or very low clicks
4. Pages getting traffic from paid sources with no conversions (wasted spend)

## Step 3: Generate a Change Plan

For each issue found, propose a SPECIFIC change:

**Format:**
```
ISSUE: [What the data shows]
FILE: [Exact file path to change]
CHANGE: [What to modify — be specific]
EXPECTED IMPACT: [What metric this should improve]
RISK: [Low/Medium/High — based on how much content changes]
```

**Rules for changes:**
- Only change copy, CTA text, section ordering, and layout — never change functionality or tracking code
- Never remove existing tracking events or PostHog integration code
- Never modify text/copy on pages that are performing well
- Make the smallest change that addresses the issue — don't rewrite entire pages
- Focus on above-the-fold content for high-traffic pages
- Prioritize CTA clarity and form friction reduction
- Maximum 3 changes per run — don't over-optimize in one pass

## Step 4: Implement Changes

For each approved change:

1. **Read the target file** to understand current content and structure
2. **Make the specific edit** — minimal, targeted, data-backed
3. **Preserve all existing styling, links, tracking attributes, and structure**
4. **Do NOT add emojis, do NOT change the design system**

## Step 5: Verify

1. Run `npm run build` — confirm it passes with zero errors
2. Verify the changed routes appear in the build output
3. If build fails, revert the change and try a different approach

## Step 6: Report

Output a report in this format:

```
## Site Optimizer Report — [Date]

### Performance Summary
| Metric | This Week | Status |
|--------|-----------|--------|
| Unique Visitors | X | - |
| Conversion Rate | X% | [good/warning/bad] |
| Popup Effectiveness | X% | [good/warning/bad] |
| Lead Form Drop-off | X% | [good/warning/bad] |

### Changes Made
1. **[File changed]**: [What was changed and why]
   - Data: [The metric that triggered this change]
   - Expected: [What improvement to watch for]

2. ...

### Recommended for Next Week
- [Things to monitor or changes to consider next cycle]

### Build Status: PASS/FAIL
```

## Running on Autopilot

To schedule this as a weekly automation, use Claude Code's loop or schedule feature:

```
/loop 7d Run the site-optimizer skill. Pull PostHog data for the last 7 days, analyze performance, and make up to 3 targeted changes to improve conversions. Commit changes with a descriptive message.
```

Or for manual runs:
```
Run the site-optimizer skill and analyze this week's performance. Show me what you'd change before making any edits.
```

## Important Constraints

- **Never modify these files**: `instrumentation-client.ts`, `components/analytics-events.tsx`, `components/posthog-provider.tsx`, `app/api/subscribe/route.ts`
- **Never change tracking event names** — they must match the PostHog dashboard
- **Never remove internal links** — they're part of the SEO strategy
- **Always preserve `data-section` attributes** on section elements
- **Always use `/skool-redirect`** for community links, never direct Skool URLs
- **Commit message format**: `optimize: [what changed] based on [metric] data`
