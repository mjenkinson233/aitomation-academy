# A/B Tests

One file per A/B test. Use the template below.

## When to create a file

- Before launching a test — status starts as `draft` or `running`.
- The file lives here through the entire test lifecycle, ending as `concluded`, `shipped`, or `abandoned`.
- Before editing any component involved in an in-flight test, check this folder first.

## Template

```markdown
---
slug: <short-kebab-case-slug>
status: draft | running | concluded | shipped | abandoned
start_date: YYYY-MM-DD
end_date: YYYY-MM-DD
feature_flag: <posthog-flag-key-or-none>
primary_metric: <event/funnel>
---

# <Human-readable title>

## Hypothesis
<One sentence: "If we do X, then Y will improve by Z, because W.">

## Variants
- **Control**: <description>
- **Treatment**: <description>

## Primary metric
<How we measure success — include the exact HogQL or PostHog Insight URL.>

## Sample size plan
- Minimum sessions per variant: <N>
- Expected test duration (based on current traffic): <weeks>

## Result
<Fill in after the test concludes.>
- Winner: control | treatment | inconclusive
- Lift: +X% / -X% / no difference
- Confidence: <p-value or CI>
- Commit SHA that shipped the winner: <SHA>

## Notes
<Any context, screenshots, or links to PostHog experiment dashboard.>
```

## Current tests

_None._
