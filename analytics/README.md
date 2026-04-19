# Analytics Archive

Weekly snapshots of site analytics, PostHog data exports, and A/B test records. This folder is the single source of truth for tracking whether site changes improve conversions over time.

## When to read this folder

- **Before running the `site-optimizer` skill** — read the most recent `weekly/*.md` to see last week's baseline and changes. The optimizer diffs against this.
- **When planning a site change** — check `ab-tests/` for any in-flight tests on the component you're about to edit.
- **When reviewing whether a past change worked** — compare the weekly file from the week before a change to the week after.

## Structure

```
analytics/
├── README.md                       ← this file
├── weekly/
│   └── YYYY-MM-DD.md               ← one file per weekly site-optimizer run (date = end of the window)
├── posthog-snapshots/
│   └── YYYY-MM-DD/
│       ├── traffic-overview.json   ← raw HogQL query results
│       ├── source-split.json
│       ├── events.json
│       └── ...
└── ab-tests/
    └── <test-slug>.md              ← one file per A/B test
```

## Weekly file format

Each `weekly/YYYY-MM-DD.md` is a snapshot of the window ending on that date (default: 7 days; the first baseline covers 3 weeks). It must include:

- Window start and end dates
- Traffic overview: pageviews, sessions, unique visitors, bounce rate, avg session duration
- Source split: paid Google Ads (via `gclid`), Google organic, direct, YouTube, ChatGPT, etc.
- Top 10 pages by pageviews
- Entry pages (top 10)
- Funnel counts: popup_shown / popup_form_submitted / popup_dismissed; lead_form_section_viewed / lead_form_started / lead_form_submitted; skool_redirect_viewed
- CTA clicks by section
- Scroll depth milestones for homepage and top blog
- Brevo List 6 (Website Lead Magnet) new contacts in the window
- Google Ads summary (campaign, spend, clicks, conversions, CPA)
- Week-over-week deltas against the previous `weekly/*.md` file
- "Changes made this week" — every site change shipped in the window, with commit SHAs
- "Watch list" — what to re-check next week

## A/B test file format

Each `ab-tests/<test-slug>.md` must include:

- Hypothesis (one sentence)
- PostHog feature flag name (if applicable)
- Variants (control vs treatment description)
- Primary metric (e.g., `popup_form_submitted / popup_shown`)
- Minimum sample size per variant
- Start date / end date
- Status: `draft`, `running`, `concluded`, `shipped`, `abandoned`
- Result: winner, lift, p-value (or confidence interval)
- Commit SHA that shipped the winner (if concluded)

## Rules

- **No PII.** Never commit raw email addresses, names, or Brevo contact attributes. Aggregate counts only.
- **Filter owner IP.** Every HogQL query used to produce these files must include `AND properties.$ip != '137.103.50.217'` so the site owner's own browsing doesn't inflate metrics.
- **Don't rewrite history.** Once a weekly file is committed, don't edit it retroactively. If a number was wrong, note the correction in the next week's file.
- **Snapshots are append-only.** Never delete a past `weekly/*.md` or `posthog-snapshots/*/` — week-over-week analysis depends on them.
