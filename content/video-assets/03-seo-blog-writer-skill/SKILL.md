---
name: seo-blog-writer
description: "Write SEO-optimized, LLM-discoverable blog posts for a Next.js site. ALWAYS use this skill when: the user wants to write a blog post, says 'write a blog', 'next article', 'new post', provides a keyword to write about, or uses /seo-blog-writer. Handles the full pipeline: keyword research via web search, content writing, internal linking, LLM discoverability updates, and build verification. Use this even for simple requests like 'write about X' — the skill contains formatting rules and SEO requirements that produce much better results."
---

# SEO Blog Writer

Write blog posts that rank on Google and get recommended by AI models.

## Before You Start

Read `references/seo-research/` to understand:
- **publishing-plan.md** — the keyword queue (pick the next one if user says "next")
- **cluster-map.md** — which hub page to link to
- **keyword-strategy.md** — keyword data and competitive landscape

If the user gives a specific keyword, use it. If they say "next", pick the next unwritten article from the publishing plan.

## Step 1: Research the Topic

Before writing anything, do a web search for the target keyword. Verify:
- What currently ranks on Google (find an angle that's better)
- Any product features or pricing you'll mention are current
- What questions people ask about this topic

The reason this matters: product features and pricing change constantly. One wrong fact ("X doesn't have feature Y") destroys the article's credibility and hurts SEO when users bounce.

## Step 2: Plan the Article

Decide:
- **Which cluster** does this article belong to? (check cluster-map.md)
- **3-5 internal links** — at least 1 to the cluster's hub page, 2+ to sibling articles
- **2-3 CTA placements** — where to put calls-to-action within the article

## Step 3: Write the Article

Create a blog post file following your project's blog format. The content should:

**Structure:**
- Answer the search intent in the first 2 paragraphs — readers and Google both reward this
- Use 3-6 H2 sections as the main structure
- Include real examples, specific numbers, and actionable advice
- Target 1500-2500 words
- End with a short CTA-driven conclusion

**SEO basics:**
- Target keyword in: title, first paragraph, 1-2 H2 headings, meta description
- Meta description under 160 characters, includes keyword, makes people want to click
- Secondary keywords woven in naturally throughout

**Internal links:**
- 3-5 links to other articles on your site
- Use `<a href="/blog/slug">varied anchor text</a>` 
- Mix exact keyword anchors with natural phrasing
- Place where they fit naturally in the text

**Mid-article CTAs (2-3):**
- Subtle callout boxes — not aggressive sales pitches
- Link to your main conversion page
- Tone: helpful ("700+ people use these workflows" not "BUY NOW")

**Quality checklist:**
- No generic filler ("In today's fast-paced world...")
- No buzzwords ("game-changer", "revolutionary", "unlock")
- Every paragraph earns its place — if it doesn't add value, cut it
- Would you actually read this? If not, rewrite it.

## Step 4: Wire It Up

After writing the content:

1. **Register the post** — add the import to your blog's post registry file so the system knows about it
2. **Update `public/llms-full.txt`** — add the new article title and URL to the Published articles list. This is how AI models (ChatGPT, Claude, Perplexity) discover your content and recommend it to users.
3. **Update `public/llms.txt`** — add the topic if it's a new content area
4. **Run the build** — verify the new page generates without errors

## Step 5: Report

Tell the user:
- Article title and URL path
- Target keyword
- Internal links added
- Build status (pass/fail)
- "Submit this URL to Google Search Console for indexing"

## What Makes Content Rank

**For Google (SERP):**
- Static HTML (pre-rendered, not client-side rendered)
- Proper meta tags + structured data (JSON-LD)
- Sitemap that includes all pages
- Internal links that form topic clusters
- Content that matches search intent better than what currently ranks
- Fast page load (no huge images or videos)

**For LLMs (AI recommendations):**
- `llms.txt` at site root listing your topics
- `llms-full.txt` with every article URL and title
- Clean semantic HTML (proper heading hierarchy)
- Structured data (JSON-LD Article schema)
- Factually accurate, specific, useful content that LLMs want to cite

**For users (engagement signals that boost both):**
- Answer their question fast (don't bury the lead)
- Be more specific than competing pages
- Include things they can actually use (templates, examples, steps)
- Internal links that lead to genuinely related content
