# Weekly Site Optimizer — Routine Template

Use this template to set up your own self-updating website with Claude Code Routines.

## Setup

1. Go to claude.ai/code/routines
2. Create a new routine
3. Link your GitHub repo
4. If you have PostHog MCP connected: use Option A (simpler)
5. If you don't have PostHog MCP: use Option B (uses API directly)
6. Set trigger to Weekly

---

## Customize Before Using

Replace every `{{placeholder}}` with your own values:

| Placeholder | Where to Find It | Example |
|-------------|-------------------|---------|
| `{{YOUR_SITE}}` | Your website URL | mysite.com |
| `{{YOUR_POSTHOG_HOST}}` | PostHog > Settings > Project | us.posthog.com or eu.posthog.com |
| `{{YOUR_POSTHOG_API_KEY}}` | PostHog > Settings > Personal API Keys > + Create | phx_abc123... |
| `{{YOUR_PROJECT_ID}}` | The number in your PostHog URL after /project/ | 12345 |
| `{{YOUR_IP}}` | Google "what is my IP" | 123.45.67.89 |
| `{{YOUR_EVENTS}}` | Your custom PostHog event names (see below) | signup_clicked, form_submitted |

### About Custom Events

Your site probably tracks different events than this template. Open your PostHog dashboard, go to Events, and look at your custom events (the ones that DON'T start with $). Replace the event names in the queries below with yours.

Common patterns:
- Form submissions: signup_form_submitted, contact_form_sent, newsletter_subscribed
- CTA clicks: cta_clicked, button_clicked, link_clicked
- Key pages: pricing_viewed, demo_requested, checkout_started

If you only have PostHog's default autocapture events and no custom events yet, simplify the prompt — remove the funnel queries and just use pageview data.

---

## Option A: With PostHog MCP Connected (Recommended)

If you connected PostHog as an MCP connector in your routine, Claude can query it directly. Use this simpler prompt:

```
You are the weekly site optimizer for {{YOUR_SITE}}. Pull analytics from PostHog using the MCP connector, find what's underperforming, make targeted code changes, and open a PR.

## Step 1: Pull Data (last 7 days)

Use the PostHog MCP connector to run these HogQL queries. Always exclude owner traffic: AND properties.$ip != '{{YOUR_IP}}'

Run all queries for the last 7 days:

1. Traffic: SELECT count() as pageviews, count(DISTINCT person_id) as unique_visitors FROM events WHERE event = '$pageview' AND timestamp >= now() - INTERVAL 7 DAY AND properties.$ip != '{{YOUR_IP}}'

2. Pages: SELECT properties.$pathname as page, count() as pageviews, count(DISTINCT person_id) as unique_visitors FROM events WHERE event = '$pageview' AND timestamp >= now() - INTERVAL 7 DAY AND properties.$ip != '{{YOUR_IP}}' GROUP BY page ORDER BY pageviews DESC

3. Custom events: SELECT event, count() as count FROM events WHERE timestamp >= now() - INTERVAL 7 DAY AND event NOT LIKE '$%' AND properties.$ip != '{{YOUR_IP}}' GROUP BY event ORDER BY count DESC LIMIT 20

4. Traffic sources: SELECT CASE WHEN properties.$current_url LIKE '%gclid%' OR properties.$current_url LIKE '%gad_source%' THEN 'Google Ads' WHEN properties.$referring_domain = 'www.google.com' THEN 'Google Organic' WHEN properties.$referring_domain = 'www.youtube.com' THEN 'YouTube' WHEN properties.$referring_domain IN ('$direct', '') OR properties.$referring_domain IS NULL THEN 'Direct' ELSE properties.$referring_domain END as source, count() as pageviews, count(DISTINCT person_id) as unique_visitors FROM events WHERE event = '$pageview' AND timestamp >= now() - INTERVAL 7 DAY AND properties.$ip != '{{YOUR_IP}}' GROUP BY source ORDER BY pageviews DESC

5. Your conversion funnel (customize these events to match YOUR tracking):
SELECT event, count() as count FROM events WHERE event IN ('{{YOUR_EVENTS}}') AND timestamp >= now() - INTERVAL 7 DAY AND properties.$ip != '{{YOUR_IP}}' GROUP BY event ORDER BY count DESC

## Step 2: Analyze

Look at the data and identify:
1. High-traffic pages with low engagement (biggest gain potential)
2. Funnel steps with the largest drop-offs
3. CTAs or sections getting zero clicks
4. Pages receiving paid traffic with no conversions (wasted ad spend)

## Step 3: Create Branch and Make Changes

git checkout -b optimize/weekly-$(date +%Y-%m-%d)

Make up to 3 targeted changes based on the data.

Rules:
- Only change copy, CTA text, section ordering, layout
- NEVER change functionality, tracking code, or analytics setup
- NEVER touch pages that are performing well
- Make the smallest change that fixes the issue
- Do NOT add emojis

## Step 4: Verify

Run your build command (npm run build, yarn build, etc.) and make sure it passes. If it fails, revert and try a different approach.

## Step 5: Open PR

Commit format: optimize: [what changed] based on [metric] data

Push the branch and open a PR with:
- Performance summary table (key metrics + status)
- What you changed and why (with the data that triggered it)
- What to monitor next week

If everything looks healthy, still open the PR with just the analytics report.
```

---

## Option B: Without PostHog MCP (Using API Directly)

If you can't connect PostHog MCP, use curl to query the API. Same prompt as above but replace Step 1 with:

```
## Step 1: Pull Data (last 7 days)

Use curl to query PostHog's HogQL API:

curl -s -X POST "https://{{YOUR_POSTHOG_HOST}}/api/projects/{{YOUR_PROJECT_ID}}/query/" \
  -H "Authorization: Bearer {{YOUR_POSTHOG_API_KEY}}" \
  -H "Content-Type: application/json" \
  -d '{"query": {"kind": "HogQLQuery", "query": "YOUR_SQL_HERE"}}'

Results are in .results (array of arrays) and .columns (column names) in the JSON response.

Always exclude owner traffic in every query: AND properties.$ip != '{{YOUR_IP}}'

Run these queries:
[same queries as Option A]
```

---

## How to Get Your Values

### PostHog Personal API Key
1. Go to PostHog (app.posthog.com or us.posthog.com)
2. Click your avatar > Settings > Personal API Keys
3. Click "+ Create Personal API Key"
4. Name it "Claude Routine" and create
5. Copy the key (starts with phx_)

### Project ID
1. Open your PostHog project
2. Look at the URL: https://us.posthog.com/project/**12345**/
3. The number is your project ID

### Your IP Address
1. Google "what is my IP"
2. This filters out your own visits from analytics

### Your Custom Events
1. Go to PostHog > Data Management > Events
2. Look for events that don't start with $ — those are your custom ones
3. Replace the event names in the funnel queries with yours
