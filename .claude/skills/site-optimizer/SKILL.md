---
name: site-optimizer
description: "Weekly site optimizer — pulls PostHog analytics, identifies underperforming pages, and makes targeted code changes to improve conversions. Use this skill when the user says: optimize the site, run the weekly optimization, check what's underperforming, improve conversions, site optimizer, what should we change, CRO pass, weekly CRO, optimize for conversions, fix drop-offs, or any request to use analytics data to improve site performance. Also trigger when a scheduled agent runs weekly optimization. This skill handles the full loop: pull data, analyze, make code changes, verify build, commit, and report."
---

# Site Optimizer

You are a conversion rate optimization engine for AItomation Academy. Your job is to pull real analytics data from PostHog, identify what's underperforming, and make targeted code changes to improve metrics. Every change must be backed by data — never guess.

This skill builds on top of the performance-analytics skill's data but goes further: it interprets the data, decides what to change, makes the edits, and verifies the build.

## Owner IP Filter

The site owner browses the site frequently across multiple browsers and devices, which inflates pageview counts and creates noise in conversion metrics. Exclude this IP from every PostHog query:

```
AND properties.$ip != '137.103.50.217'
```

## Step 1: Pull Current Performance Data

Use the PostHog MCP (`query-run` tool with HogQL) to query the last 7 days of data. Run all queries in parallel to save time. Every query must include the IP filter above.

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
LIMIT 20
```

### 1c. Custom Conversion Events

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

### 1d. Traffic Sources (paid vs organic Google split)

Google Ads clicks arrive with `www.google.com` as the referrer, so the `gclid`/`gad_source` check must come before the referring domain check. Getting this order wrong misclassifies paid traffic as organic.

```sql
SELECT
  CASE
    WHEN properties.$current_url LIKE '%gclid%' OR properties.$current_url LIKE '%gad_source%' THEN 'Google Ads (paid)'
    WHEN properties.$referring_domain = 'www.google.com' THEN 'Google Organic'
    WHEN properties.$referring_domain = 'www.youtube.com' THEN 'YouTube'
    WHEN properties.$referring_domain = 'app.brevo.com' THEN 'Brevo (email)'
    WHEN properties.$referring_domain = 'www.facebook.com' THEN 'Facebook'
    WHEN properties.$referring_domain = 'l.instagram.com' THEN 'Instagram'
    WHEN properties.$referring_domain = 'www.aitomationacademy.com' THEN 'Self-referral'
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

The site tracks a clear lead capture funnel. Query each stage:

```sql
SELECT
  event,
  count() as count
FROM events
WHERE event IN (
  'lead_form_section_viewed',
  'lead_form_started',
  'lead_form_submit_attempt',
  'lead_form_submitted',
  'popup_shown',
  'popup_dismissed',
  'popup_form_submitted',
  'blog_lead_capture_opened',
  'newsletter_subscribe_clicked'
)
  AND timestamp >= now() - INTERVAL 7 DAY
  AND properties.$ip != '137.103.50.217'
GROUP BY event
ORDER BY count DESC
```

### 1f. CTA Clicks by Section

The site tracks `cta_click` events with a `section` property derived from `data-section` attributes on each page section. This tells you which CTAs are getting clicks and which are being ignored.

```sql
SELECT
  properties.section as section,
  properties.text as cta_text,
  count() as clicks
FROM events
WHERE event = 'cta_click'
  AND timestamp >= now() - INTERVAL 7 DAY
  AND properties.$ip != '137.103.50.217'
GROUP BY section, cta_text
ORDER BY clicks DESC
```

## Step 2: Analyze and Identify Issues

Calculate these metrics from the data you pulled:

| Metric | How to Calculate | Red Flag |
|--------|-----------------|----------|
| Overall conversion rate | (lead_form_submitted + popup_form_submitted) / unique_visitors | Below 5% |
| Lead form funnel drop-off | 1 - (next step / previous step) for each stage | Above 70% at any step |
| Lead form completion | lead_form_submitted / lead_form_section_viewed | Below 30% |
| Popup conversion | popup_form_submitted / popup_shown | Below 15% |
| CTA engagement | total cta_click / unique_visitors | Below 10% |

**Prioritize by impact** (highest potential gain first):

1. **High-traffic pages with low engagement** — a 1% improvement on a page with 500 visitors beats a 10% improvement on a page with 20
2. **Largest funnel drop-offs** — where are you losing the most people between steps?
3. **Dead CTAs** — sections with zero or near-zero cta_click events
4. **Paid traffic with no conversions** — pages receiving Google Ads traffic that produce zero form submissions (wasted ad spend)

## Step 3: Generate a Change Plan

For each issue, propose a specific, minimal change:

```
ISSUE: [What the data shows — include the actual numbers]
FILE: [Exact file path]
CHANGE: [What to modify — be specific about what text/layout changes]
EXPECTED IMPACT: [Which metric this should improve and by roughly how much]
RISK: Low/Medium/High
```

### What you can change

- CTA copy (button text, heading text, supporting copy)
- Section ordering in `app/page.tsx`
- Layout tweaks within sections (spacing, emphasis, hierarchy)
- Blog post lead capture copy in `app/components/lead-capture-trigger.tsx`
- Popup copy in `app/components/entry-popup.tsx`
- Lead form copy in `app/components/lead-magnet-form.tsx`

### What you must never change

- Tracking code or `data-section` attributes — these are the source of the data you depend on
- The design system (CSS variables, color palette, typography scale)
- Functionality (API routes, form submission logic, PostHog initialization)
- Pages/sections that are performing well — don't fix what isn't broken
- Links, URLs, or navigation structure

### Guardrails

- **Maximum 3 changes per run.** Small batches make it possible to attribute metric changes to specific edits in next week's run.
- **Smallest change that addresses the issue.** Don't rewrite a section when changing the headline suffices.
- **Above-the-fold first.** For high-traffic pages, changes visitors see without scrolling have the highest leverage.

## Site Section Map

These are the sections and their tracked `data-section` values, in page order:

| Section | File | data-section |
|---------|------|-------------|
| Navbar | `app/components/navbar.tsx` | `navbar` |
| Hero | `app/sections/hero.tsx` | `hero` |
| Social Proof | `app/sections/social-proof.tsx` | — |
| How It Works | `app/sections/how-it-works.tsx` | `how_it_works` |
| What You Get | `app/sections/what-you-get.tsx` | `what_you_get` |
| Community Wins | `app/sections/community-wins.tsx` | `community_wins` |
| Lead Magnet Form | `app/sections/lead-magnet-section.tsx` | `lead_magnet` |
| FAQ | `app/sections/faq.tsx` | — |
| Final CTA | `app/sections/final-cta.tsx` | `final_cta` |
| Footer | `app/sections/footer.tsx` | `footer` |
| Entry Popup | `app/components/entry-popup.tsx` | — |
| Blog Lead Capture | `app/components/lead-capture-trigger.tsx` | — |

## Step 4: Implement Changes

For each approved change:

1. **Read the target file first** to understand the full context
2. **Make the edit** — minimal, targeted, backed by the data from Step 2
3. **Preserve everything else** — styling, class names, links, `data-section` attributes, tracking calls, component structure
4. Do NOT add emojis or deviate from the existing design language

## Step 5: Verify

Run `npm run build` and confirm it passes. If the build fails:

1. Read the error
2. Revert the breaking change with `git checkout -- <file>`
3. Try a different approach that doesn't break the build
4. If you can't make the change without breaking things, skip it and note it in the report

## Step 6: Commit and Report

### Branch and commit

```bash
git checkout -b optimize/weekly-$(date +%Y-%m-%d)
```

Commit with this format — the prefix `optimize:` makes these changes easy to find in git log:

```
optimize: [what changed] based on [which metric] data
```

### Report

Output this report so the user can review what happened:

```
## Site Optimizer Report — [Date]

### Performance Summary (last 7 days)
| Metric | Value | Status |
|--------|-------|--------|
| Unique Visitors | X | — |
| Overall Conversion Rate | X% | [green/yellow/red] |
| Lead Form Completion | X% | [green/yellow/red] |
| Popup Conversion | X% | [green/yellow/red] |
| CTA Engagement | X% | [green/yellow/red] |

### Top Pages by Traffic
| Page | Pageviews | Unique Visitors |
|------|-----------|-----------------|
| / | X | X |
| /blog/... | X | X |
| ... | ... | ... |

### Funnel Analysis
| Stage | Count | Drop-off |
|-------|-------|----------|
| lead_form_section_viewed | X | — |
| lead_form_started | X | X% |
| lead_form_submitted | X | X% |
| popup_shown | X | — |
| popup_form_submitted | X | X% |

### Changes Made
1. **[File]**: [What was changed and why]
   - Data: [The specific metric that triggered this]
   - Expected: [What to watch for next week]

### No Changes Made To
- [List sections/pages that are performing well — briefly note why they were left alone]

### Watch List for Next Week
- [Metrics to re-check after this week's changes take effect]
- [Issues that didn't make the top 3 but should be addressed soon]

### Build Status: PASS/FAIL
```

## Event Names Reference

These are the actual PostHog event names tracked on the site. Use these exact strings — do not guess alternatives:

| What it tracks | Event name |
|---------------|------------|
| Page view | `$pageview` |
| Skool redirect page hit | `skool_redirect_viewed` |
| CTA button click | `cta_click` (has `section` and `text` properties) |
| Lead form section visible | `lead_form_section_viewed` |
| Lead form input focused | `lead_form_started` |
| Lead form submit clicked | `lead_form_submit_attempt` |
| Lead form successfully submitted | `lead_form_submitted` |
| Exit popup displayed | `popup_shown` |
| Exit popup dismissed | `popup_dismissed` |
| Exit popup form submitted | `popup_form_submitted` |
| Blog lead capture CTA opened | `blog_lead_capture_opened` |
| Newsletter subscribe clicked | `newsletter_subscribe_clicked` |
| Video play progress | `video_progress` |
| Video unmuted | `video_unmuted` |
| Scroll depth milestone | `scroll_depth` (has `percent` property: 25/50/75/100) |
| AI referral detected | `ai_referral` (has `source` property) |
