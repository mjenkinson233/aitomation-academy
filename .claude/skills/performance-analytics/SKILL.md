---
name: performance-analytics
description: "Pull and analyze site performance data from PostHog and Google Ads. Use this skill when the user asks: how are we doing, pull analytics, show me traffic, performance report, what are the numbers, how is the site doing, check PostHog, check Google Ads, traffic breakdown, conversion report, or any request for site/marketing performance data. Handles IP filtering, correct event names, paid vs organic Google breakdown, and conversion funnel analysis."
---

# AItomation Academy Performance Analytics

You are generating a clean performance report for AItomation Academy by pulling data from PostHog (site analytics) and Google Ads (paid traffic via Adspirer MCP).

## Owner IP Filter

**ALWAYS** exclude the owner's IP from all PostHog queries:

```
AND properties.$ip != '137.103.50.217'
```

This IP generates multiple person IDs across browsers/devices. Never filter by person_id alone — always filter by IP.

## Date Range

- If the user specifies a date range, use it (e.g., "last 2 days", "this week", "April 1-10")
- If the user says "last N days", calculate the start date as today minus N days
- Default to **last 7 days** if no range is specified
- Note if the current day is partial (today's data is incomplete)

## Step 1: Pull All Data in Parallel

Make these calls simultaneously:

### 1a. Google Ads Performance (Adspirer MCP)

Use `mcp__plugin_adspirer_adspirer__get_campaign_performance` with the appropriate `start_date` and `end_date`.

### 1b. PostHog Traffic Totals

```sql
SELECT
  count() as pageviews,
  count(DISTINCT person_id) as unique_visitors
FROM events
WHERE event = '$pageview'
  AND timestamp >= '{start_date}'
  AND timestamp <= '{end_date} 23:59:59'
  AND properties.$ip != '137.103.50.217'
```

### 1c. PostHog Traffic Sources (with paid/organic Google split)

This query must check for `gclid`/`gad_source` URL params BEFORE checking the referring domain. Google Ads clicks often have `www.google.com` as the referrer, so the paid check must come first to avoid misclassifying paid as organic.

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
  AND timestamp >= '{start_date}'
  AND timestamp <= '{end_date} 23:59:59'
  AND properties.$ip != '137.103.50.217'
GROUP BY source
ORDER BY pageviews DESC
```

### 1d. PostHog Conversion Events

```sql
SELECT event, count() as count
FROM events
WHERE timestamp >= '{start_date}'
  AND timestamp <= '{end_date} 23:59:59'
  AND event NOT LIKE '$%'
  AND properties.$ip != '137.103.50.217'
GROUP BY event
ORDER BY count DESC
LIMIT 20
```

## Step 2: Verify Numbers Add Up

After getting results, verify that traffic source pageviews sum to the total pageviews. If they don't match, investigate and fix the query logic before presenting.

## Step 3: Present the Report

Use this exact format:

---

### Traffic
| Metric | Count |
|--------|-------|
| **Pageviews** | **{n}** |
| **Unique Visitors** | **{n}** |

### Traffic Sources
| Source | Pageviews | Unique Visitors |
|--------|-----------|-----------------|
| Direct | {n} | {n} |
| Google Ads (paid) | {n} | {n} |
| Google Organic | {n} | {n} |
| YouTube | {n} | {n} |
| ... | ... | ... |
| **Total** | **{n}** | **{n}** |

### Conversions
| Event | Count |
|-------|-------|
| popup_shown | {n} |
| scroll_depth | {n} |
| popup_dismissed | {n} |
| lead_form_section_viewed | {n} |
| skool_redirect_viewed | {n} |
| cta_click | {n} |
| video_progress | {n} |
| popup_form_submitted | {n} |
| lead_form_started | {n} |
| lead_form_submitted | {n} |
| blog_lead_capture_opened | {n} |

### Google Ads (if data available from Adspirer)
Include campaign performance, spend, CPC, CTR, conversions.

### Analysis
Provide a short analysis covering:
- **Conversion rate**: form submissions / unique visitors
- **Skool redirect rate**: skool_redirect_viewed / unique visitors
- **Popup effectiveness**: popup_form_submitted / popup_shown
- **Lead form funnel**: section_viewed -> started -> submitted (drop-off %)
- **Channel mix**: what % of traffic is paid vs organic vs social
- **Trends**: any notable day-over-day patterns
- **Flags**: anything that looks off or needs attention

---

## Correct Event Names Reference

These are the actual PostHog event names used on the site. Do NOT guess alternatives:

| What it tracks | Event name |
|---------------|------------|
| Page view | `$pageview` |
| Skool redirect page hit | `skool_redirect_viewed` |
| CTA button click | `cta_click` |
| Lead form section scrolled into view | `lead_form_section_viewed` |
| Lead form input focused | `lead_form_started` |
| Lead form submit button clicked | `lead_form_submit_attempt` |
| Lead form successfully submitted | `lead_form_submitted` |
| Exit popup displayed | `popup_shown` |
| Exit popup dismissed | `popup_dismissed` |
| Exit popup form submitted | `popup_form_submitted` |
| Blog lead capture CTA opened | `blog_lead_capture_opened` |
| Newsletter subscribe clicked | `newsletter_subscribe_clicked` |
| Video play progress | `video_progress` |
| Video unmuted | `video_unmuted` |
| Scroll depth milestone | `scroll_depth` |
