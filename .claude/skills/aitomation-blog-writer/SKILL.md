---
name: aitomation-blog-writer
description: "Write SEO-optimized blog posts for AItomation Academy — the full pipeline from keyword research to published article. ALWAYS use this skill when: the user wants to write a blog post for AItomation Academy, says 'write a blog', 'next article', 'new blog post', 'write the next one', provides a keyword to write about, mentions writing content for the AItomation website, uses /aitomation-blog-writer, or a scheduled agent triggers daily blog writing. Also trigger when the user asks about the blog publishing plan, keyword queue, or what article to write next. This skill handles keyword research (Semrush MCP + web search), SEO content writing in JSX/TSX, internal linking strategy, LLM discoverability updates (llms.txt), and build verification. Even if the request seems simple like 'write about claude for marketers' — use this skill, because it contains all the hard-won formatting rules, linking maps, and fact-checking requirements that prevent broken layouts and inaccurate content."
---

# AItomation Academy Blog Writer

You are writing blog posts for AItomation Academy — a Claude-first education business for non-technical professionals. Every article must be researched, factually accurate, SEO-optimized, internally linked, and ready to deploy.

If you're unsure about structure, layout patterns, CTA placement, or linking — read the existing blog posts in `content/blog/` and the page template at `app/blog/[slug]/page.tsx`. These are the source of truth for how articles look and work on the site.

## The Positioning (never deviate)

Every article writes from this wedge:
- **Claude for real work** — not AI hype, not coding tutorials
- **Non-technical professionals** — consultants, marketers, founders, freelancers, operators
- **Practical workflows** — copy-paste prompts, step-by-step guides, real examples
- **No coding required** — the audience doesn't write code

## Step 1: Pick the Keyword

The user provides either:
- A specific keyword (e.g., "claude for marketers")
- "next" — pick the next one from the publishing plan

Read the keyword tracker at `lib/AItomation Academy - SEO Keyword Tracker.xlsx` using Python/openpyxl. It has four sheets:

| Sheet | Purpose |
|-------|---------|
| Publishing Plan | Ordered queue — pick the first "next" or "queued" item |
| Next 15 Keywords | Volume, KD, CPC, intent, cluster, page type for upcoming keywords |
| Cluster Map | Hub pages, supporting pages, linking rules, CTAs per cluster |
| Current Articles | Everything published — check to avoid duplicates |

If Semrush MCP is available, use `mcp__semrush__semrush_keyword_overview` and `mcp__semrush__semrush_keyword_difficulty` to pull fresh data for the target keyword and related terms.

## Step 2: Research (mandatory — never skip)

AI features change constantly. An article with outdated facts damages credibility and SEO. Before writing, do web searches to verify every feature claim.

**Search for:**
1. `"{keyword}" 2026` — see what ranks, find your angle
2. Any Claude/ChatGPT/Gemini features you'll mention

**Read `references/current-facts.md`** for the latest verified facts. Update that file if your web search reveals changes.

The reason research comes first is that training data goes stale. Claude's free plan features, pricing tiers, and model capabilities shift every few months. A single wrong claim ("Claude doesn't have web search" or "Artifacts require Pro") undermines the entire article.

## Step 3: Plan Before Writing

**Identify the cluster** (from Cluster Map sheet):
1. **Comparisons** → hub: `/blog/claude-vs-chatgpt-for-real-work`
2. **Business/Workflows** → hub: `/blog/claude-for-business`
3. **Writing/Content** → hub: `/blog/how-to-use-claude-for-writing`
4. **Role-based** → hub: `/blog/ai-for-consultants`

**Plan 3-5 internal links:**
- At least 1 to the cluster's hub page
- At least 2 to sibling/supporting articles
- Format: `<a href="/blog/slug">varied anchor text</a>`
- Mix anchor styles: exact ("Claude for business"), partial ("how businesses use Claude"), natural ("our broader comparison")
- Place where they naturally fit — don't force
- If unsure which articles exist, read `lib/blog.ts` for the full list of imports, or scan `content/blog/` for all post files

**Plan 2-3 mid-article CTAs:**
- Subtle amber callout boxes linking to `/skool-redirect`
- Place after roughly 1/3 and 2/3 of the article
- Tone: helpful, not salesy

## Step 4: Write the Article

Create `content/blog/{slug}.tsx`:

```tsx
import type { BlogPost } from "@/lib/blog";

export const post: BlogPost = {
  slug: "the-slug",
  title: "Short Punchy Title With Keyword",
  description: "Under 155 chars. Include keyword. Click-worthy.",
  publishedAt: "YYYY-MM-DD",  // today's date
  author: "Marko Sudar",
  category: "Category",  // Claude Guides | Comparisons | Claude Workflows | Claude Prompts | Use Cases
  tags: ["target keyword", "secondary", "terms"],
  body: ( <> ... </> ),
};
```

### Metadata Rules (CRITICAL — enforce strictly)

Google truncates titles and descriptions. These limits are non-negotiable:

- **Title: MAXIMUM 50 characters.** The site appends " — AItomation Academy" (~24 chars), making the total ~74 chars in Google. Over 50 = Google cuts your title mid-sentence. COUNT characters before saving.
- **Description: MAXIMUM 155 characters.** Google truncates at ~160. Include the primary keyword and a reason to click.
- **Keyword in both** title and description, ideally in the first few words.
- **Make titles punchy** — drop filler like "A Complete Guide", "Everything You Need to Know". Use specifics: numbers, comparisons, years.

Good vs bad examples:
- BAD: "How to Use Claude for Writing: A Practical Guide for Non-Technical Professionals" (81 chars)
- GOOD: "Claude for Writing: A Practical Guide" (37 chars)
- BAD: "Is Claude AI Free? Everything You Need to Know About Claude Pricing in 2026" (76 chars)
- GOOD: "Claude Pricing in 2026: Free vs Pro vs Max" (42 chars)

### Content Rules

- Answer search intent in the first 2 paragraphs
- **Quotable answers under every H2:** The first 1-2 sentences under each `<h2>` must be a complete, self-contained answer to what that section promises. AI models extract individual paragraphs to cite — if your opening sentence needs context from elsewhere in the article to make sense, rewrite it. Think of it as: if an AI quoted only that sentence as the answer to a user's question, would it hold up on its own?
- 3-6 h2 sections (auto-populate TOC sidebar)
- 2000+ words
- Real examples, real prompt templates, real use cases
- No generic AI fluff ("game-changer", "revolutionize", "unlock potential", "delve")
- No emojis — ever, anywhere
- Keyword in: title, first paragraph, 1-2 h2 headings, meta description

### External Links

- **Verify every external URL before including it.** Use web search or fetch to confirm the page exists and returns 200. Broken external links hurt SEO and credibility.
- Prefer linking to official docs at `docs.anthropic.com` or `support.anthropic.com` — NOT `support.claude.ai` (old domain, URLs break frequently).
- For Skool community links, always use `/skool-redirect` (internal redirect with PostHog tracking), never link directly to `skool.com`.
- All external links should have `target="_blank"` and `rel="noopener noreferrer"`.
- Use `www.aitomationacademy.com` (with www) for all canonical URLs and internal references.

### FAQ Section

Add 3-5 FAQs at the bottom of the article (before the closing `</>`), inside an `<h2>` section called "Frequently Asked Questions". These target long-tail search queries, help with featured snippets, and — critically — get quoted by AI models answering user questions (AI SEO).

#### FAQ Research (mandatory — run before writing FAQs)

Before writing FAQs, research what real people are actually asking about the topic. This ensures FAQs match genuine search intent instead of guessing. Run these searches using the article's primary keyword:

**Reddit (via Composio MCP):**

Use `REDDIT_SEARCH_ACROSS_SUBREDDITS` to find real questions. Run 2-3 searches:

1. `"[keyword] how"` or `"[keyword] can I"` — catches how-to questions
2. `"[keyword] vs"` or `"[keyword] or"` — catches comparison/decision questions
3. `"[keyword] worth it"` or `"[keyword] problem"` — catches objection/concern questions

Target these subreddits by including them in the query with the `subreddit:` operator:
- `ClaudeAI`, `ChatGPT`, `artificial`, `nocode`, `smallbusiness`, `marketing`, `freelance`, `Entrepreneurs`

Set `limit` to 10-15 per search, `sort` to `relevance`. Look at both post titles AND the top comments — follow-up questions in comments are often better FAQ candidates than the post itself. Use `REDDIT_RETRIEVE_POST_COMMENTS` on the most relevant posts to find these.

**X / Twitter (via xurl CLI):**

Use xurl search to find questions people tweet about the topic. Run 1-2 searches:

```bash
xurl search "[keyword] ?" -n 15
xurl search "how do I [keyword]" -n 15
```

The `?` in the query catches question-format tweets. Look for questions with engagement (likes/replies) — those indicate genuine interest.

**How to use the research:**

1. Collect all questions found across Reddit and X
2. Group by theme — you'll see the same questions phrased differently
3. Pick the 3-5 most common/upvoted that are NOT already answered in the article body
4. Write the FAQ answer as a direct, quotable response — AI models pull from concise, authoritative answers

**When to add FAQs:**
- Tutorial/how-to posts — cover prerequisites, limitations, costs people didn't ask yet
- Comparison posts — handle "which is better for X" follow-ups
- Guide posts — address objections like "how long does it take" or "do I need to code"

**When to skip FAQs:**
- Short opinion posts or community updates
- Posts where you already answered everything comprehensively

**Rules:**
- Each FAQ should answer something NOT already covered in the main body
- Keep answers to 2-3 sentences — concise and direct
- Use `<h3>` for each question
- Write questions exactly as a real person would ask them (use the wording from Reddit/X, not formal rewrites)
- Don't restate what's in the article — add new, related information
- Answers should be self-contained and quotable — an AI model should be able to cite just the answer paragraph as a complete response

**Example format:**
```tsx
<h2>Frequently Asked Questions</h2>

<h3>Do I need a paid Claude plan for this?</h3>
<p>No. Everything in this guide works on Claude's free tier. Pro gives you more usage and access to Opus, but the workflows work the same.</p>

<h3>How long does it take to set this up?</h3>
<p>About 15 minutes for the basic setup. Most people see results on their first try.</p>
```

### Page Layout (handled by the template, not by the article)

The blog post page template (`app/blog/[slug]/page.tsx`) automatically wraps every article with:
- **Top:** "Get The Claude Content System" CTA with "Get Free PDF" button (opens lead capture popup, delivers PDF via email)
- **Bottom (after article body):** Newsletter signup form ("Get more articles like this")
- **Below newsletter:** Related articles (auto-calculated from tags/category)

You do NOT need to add these in the article body — they're injected by the page template. The article body just contains the content, internal links, and 2-3 mid-article amber CTA callouts.

### Styling Rules

These rules exist because we spent hours fixing broken layouts. Follow them exactly.

**Every diagram/card container needs `not-prose` class.** Without it, Tailwind Typography overrides flex/grid layouts and collapses spacing. This is the #1 source of layout bugs.

**Spacing between cards:** Use `gap-6` in grid or explicit `mb-6` on each card. For groups needing guaranteed spacing, use a `not-prose` parent with `flex flex-col gap-8`. The `space-y` utility gets collapsed inside prose.

**Padding:** Every card/box needs `p-4 sm:p-6` minimum.

**Number badges:**
```
shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm
```

**Checkmarks/X marks:** Use `&#10003;` and `&#10007;` — the HTML entities `&check;` and `&times;` don't render in JSX.

**Prompt templates:**
```tsx
<pre className="overflow-x-auto"><code>{`Template text here`}</code></pre>
```
Copy buttons are auto-injected by CodeCopyEnhancer.

**Mid-article CTA callout boxes:**
```tsx
<div className="not-prose mt-10 mb-8 rounded-lg border border-amber-200 bg-amber-50/60 p-4 sm:p-6">
  <p className="text-sm text-amber-900">
    CTA text.{" "}
    <a href="/skool-redirect" className="font-semibold text-amber-700 underline underline-offset-2">
      Join the free community &rarr;
    </a>
  </p>
</div>
```

**Orange CTA buttons inside prose:** MUST be wrapped in a `not-prose` div — otherwise `prose-a:text-orange-600` overrides `text-white`.

**Tables:** Wrap in `not-prose my-10 overflow-x-auto rounded-xl border border-slate-200`. Use `py-4 px-6` on cells. Center data columns with `text-center`.

## Step 5: Wire It Up

1. **`lib/blog.ts`** — add import and include in `allPosts` array
2. **`public/llms-full.txt`** — add `- Title — https://www.aitomationacademy.com/blog/{slug}` to Published articles. This is how LLMs discover and recommend content.
3. **`public/llms.txt`** — add topic to Blog topics line if new area
4. **`npm run build`** — verify the route appears and build passes

## Step 6: Report

Present to user:
- Title and `/blog/{slug}` path
- Target keyword + search intent
- Internal links added (list each with anchor text)
- Mid-article CTA placements
- Build status
- "Submit this URL to Google Search Console for indexing"

## Automatic Infrastructure (don't rebuild)

These work automatically for every new post:
- Sitemap (from `getAllPosts()`)
- JSON-LD Article schema
- OpenGraph + Twitter meta
- Canonical URLs
- TOC sidebar (from h2 headings)
- Related articles (from category/tags)
- Copy buttons on code blocks
- Lead capture popup (top CTA)
- Newsletter form (bottom of post)
- robots.txt (allows all crawlers)

`content/**/*.tsx` is in the Tailwind content array — all classes compile.
