# SEMrush Research Prompt

Use this after connecting the Semrush MCP. Paste this into Claude Code.

---

I've connected the Semrush MCP to this project. I need you to do a full SEO research analysis for my website.

## Step 1: Analyze my domain

Use the Semrush MCP tools to pull:
- Domain overview (organic keywords, traffic, rank)
- Current organic keywords we rank for
- Our competitors in organic search

Tell me what you find.

## Step 2: Research keyword opportunities

Based on my site's topic and audience, research keywords across these categories:

1. **Core topic keywords** — the main things we teach/cover
2. **Comparison keywords** — "[our tool] vs [competitor]" type searches
3. **How-to keywords** — "how to use [tool] for [task]"
4. **Role-based keywords** — "[tool] for [job title]"
5. **Pricing/evaluation keywords** — "is [tool] free", "[tool] pricing"

For each keyword, pull:
- Search volume
- Keyword difficulty (KD)
- CPC (shows commercial value)

Use these Semrush tools:
- `semrush_keyword_overview` for individual keywords
- `semrush_keyword_difficulty` to batch-check difficulty
- `semrush_broad_match_keywords` to find related terms
- `semrush_phrase_questions` to find question-based keywords

## Step 3: Build a keyword strategy

Organize the keywords into:

**Priority 1 (write first):** KD 0-25, decent volume, strong fit
**Priority 2 (write next):** KD 25-45, higher volume
**Priority 3 (long-term):** KD 45+, aspirational

## Step 4: Create the keyword cluster map

Group keywords into 3-4 clusters with hub pages and supporting pages:

```
Cluster 1: [Name]
  Hub page: [main article]
  Supporting: [article 1], [article 2], [article 3]

Cluster 2: [Name]
  Hub page: [main article]
  Supporting: [article 1], [article 2], [article 3]
```

## Step 5: Create the publishing plan

Order the first 10-15 articles by priority. For each:
- Article title
- Target keyword
- Search volume and KD
- Cluster it belongs to
- Page type (guide, comparison, template page, etc.)

## Step 6: Save everything

Save the research to `references/seo-research/`:
- `keyword-strategy.md` — the full analysis
- `cluster-map.md` — the cluster structure
- `publishing-plan.md` — the ordered content queue

These files will be used by our blog writing skill as reference material.
