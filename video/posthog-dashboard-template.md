# PostHog Dashboard Template — Site Optimizer

Build a dashboard that shows everything your AI site optimizer needs to see. Copy each query below into PostHog as a new insight, then add them all to one dashboard.

## Setup

1. Go to PostHog > Dashboards > New Dashboard
2. Name it "Site Optimizer" (or whatever you want)
3. For each insight below: click "+ New Insight" > select "SQL" (HogQL) > paste the query > save to your dashboard

**Before you start:** Replace `{{YOUR_IP}}` with your IP address in every query (Google "what is my IP"). This filters out your own visits so you only see real visitor data.

---

## Insight 1: Weekly Unique Visitors (Line Graph)

Shows your traffic trend over 30 days. Set visualization to **Line Graph**.

```sql
SELECT
  toStartOfDay(timestamp) as day,
  count(DISTINCT person_id) as unique_visitors
FROM events
WHERE event = '$pageview'
  AND timestamp >= now() - INTERVAL 30 DAY
  AND properties.$ip != '{{YOUR_IP}}'
GROUP BY day
ORDER BY day
```

**Chart settings:** X-axis = `day`, Y-axis = `unique_visitors`

---

## Insight 2: Traffic Sources (Bar Chart)

Shows where your visitors come from. Set visualization to **Bar Chart**.

```sql
SELECT
  CASE
    WHEN properties.$current_url LIKE '%gclid%'
      OR properties.$current_url LIKE '%gad_source%' THEN 'Google Ads'
    WHEN properties.$referring_domain = 'www.google.com' THEN 'Google Organic'
    WHEN properties.$referring_domain = 'www.youtube.com' THEN 'YouTube'
    WHEN properties.$referring_domain IN ('$direct', '')
      OR properties.$referring_domain IS NULL THEN 'Direct'
    ELSE properties.$referring_domain
  END as source,
  count(DISTINCT person_id) as unique_visitors
FROM events
WHERE event = '$pageview'
  AND timestamp >= now() - INTERVAL 7 DAY
  AND properties.$ip != '{{YOUR_IP}}'
GROUP BY source
ORDER BY unique_visitors DESC
LIMIT 8
```

**Chart settings:** X-axis = `source`, Y-axis = `unique_visitors`

---

## Insight 3: Top Pages (Table)

Shows which pages get the most traffic. Keep visualization as **Table**.

```sql
SELECT
  properties.$pathname as page,
  count() as pageviews,
  count(DISTINCT person_id) as unique_visitors
FROM events
WHERE event = '$pageview'
  AND timestamp >= now() - INTERVAL 7 DAY
  AND properties.$ip != '{{YOUR_IP}}'
GROUP BY page
ORDER BY pageviews DESC
LIMIT 10
```

---

## Insight 4: Conversion Events (Table)

Shows all your custom events and how often they fire. This is how you see what people actually DO on your site. Keep visualization as **Table**.

```sql
SELECT
  event,
  count() as count
FROM events
WHERE timestamp >= now() - INTERVAL 7 DAY
  AND event NOT LIKE '$%'
  AND properties.$ip != '{{YOUR_IP}}'
GROUP BY event
ORDER BY count DESC
LIMIT 20
```

**Note:** This only shows custom events (filters out PostHog's built-in events that start with `$`). If this is empty, you haven't set up custom event tracking yet — PostHog's docs explain how: https://posthog.com/docs/product-analytics/capture-events

---

## Insight 5: Your Conversion Funnel (Bar Chart)

This is the most important one — it shows where people drop off. Set visualization to **Bar Chart**.

**You need to customize this query.** Replace the event names with YOUR actual conversion events. Here are common patterns:

| What you're tracking | Example events |
|---------------------|---------------|
| Lead form | `form_viewed`, `form_started`, `form_submitted` |
| Signup flow | `signup_page_viewed`, `signup_started`, `signup_completed` |
| Checkout | `cart_viewed`, `checkout_started`, `payment_completed` |
| Newsletter | `newsletter_shown`, `newsletter_subscribed` |
| Free trial | `pricing_viewed`, `trial_started`, `trial_activated` |

```sql
SELECT
  event,
  count() as count
FROM events
WHERE event IN (
  '{{EVENT_1}}',
  '{{EVENT_2}}',
  '{{EVENT_3}}',
  '{{EVENT_4}}'
)
  AND timestamp >= now() - INTERVAL 7 DAY
  AND properties.$ip != '{{YOUR_IP}}'
GROUP BY event
ORDER BY count DESC
```

**Chart settings:** X-axis = `event`, Y-axis = `count`

**How to find your event names:** Run Insight 4 first (Conversion Events table). It lists every custom event on your site. Pick the ones that form a funnel — a sequence of steps you want users to complete.

---

## Insight 6: CTA Clicks by Section (Bar Chart)

Shows which parts of your site drive clicks. Set visualization to **Bar Chart**.

**This only works if you track click events with a section property.** If you don't have this yet, skip it — or set up click tracking with a `section` property in your code.

```sql
SELECT
  properties.section as section,
  count() as clicks
FROM events
WHERE event = '{{YOUR_CLICK_EVENT}}'
  AND timestamp >= now() - INTERVAL 7 DAY
  AND properties.$ip != '{{YOUR_IP}}'
GROUP BY section
ORDER BY clicks DESC
```

**Chart settings:** X-axis = `section`, Y-axis = `clicks`

Replace `{{YOUR_CLICK_EVENT}}` with whatever you named your click tracking event (e.g., `cta_click`, `button_clicked`, `link_clicked`). If you don't track clicks by section, you can skip this insight.

---

## Dashboard Layout Tips

Once all insights are saved to your dashboard, arrange them like this for the best overview:

```
+---------------------------+---------------------------+
| Weekly Unique Visitors    | Traffic Sources            |
| (line graph, wide)        | (bar chart)                |
+---------------------------+---------------------------+
| Conversion Funnel         | CTA Clicks by Section      |
| (bar chart)               | (bar chart)                |
+---------------------------+---------------------------+
| Top Pages                 | Conversion Events          |
| (table)                   | (table)                    |
+---------------------------+---------------------------+
```

Drag and resize tiles in PostHog to match this layout. Put the visitor trend and funnel charts at the top — those are what the AI optimizer looks at first.
