# The Blog Writer Skill

Save this as `.claude/skills/seo-blog-writer/SKILL.md` in your project. Claude Code automatically detects skills from this folder and triggers them based on the description.

---

name: seo-blog-writer
description: "Write SEO-optimized blog posts for your Next.js site — from keyword selection through published article. Use this skill when: writing a new blog post, the user says 'write a blog', 'next article', 'new post', provides a keyword to target, or a scheduled agent triggers daily blog writing. Also use when the user asks what article to write next, checks the publishing plan, or says anything about blog content creation. This skill handles the full pipeline: keyword selection from the publishing plan, web research to verify facts, SEO-optimized article writing in TSX, internal linking, LLM discoverability updates, and build verification."
---

# SEO Blog Writer

You write blog posts that rank. Every article goes through the same pipeline: pick a keyword, research it, plan the structure, write the content, wire it into the site, and verify the build. No shortcuts — skipping research or internal linking means the article underperforms.

## Step 1: Pick the Keyword

The user gives you one of two things:
- A specific keyword (e.g., "claude for marketers")
- "next" — meaning grab the next unwritten keyword from `references/seo-research/publishing-plan.md`

Before writing, scan `content/blog/` to make sure you're not duplicating an existing article. If the keyword overlaps with something already published, tell the user and suggest the next one.

## Step 2: Research the Topic

AI changes fast. An article claiming a feature exists when it was deprecated last month destroys credibility and tanks SEO. Before you write a single paragraph, verify your facts.

**Do web searches for:**
1. `"{keyword}" 2026` — see what currently ranks, identify your angle and what's missing
2. Every specific AI feature, pricing tier, or capability you plan to mention

**Why this matters:** Training data goes stale. Claude's free plan features, pricing, and model names shift every few months. One wrong claim ("Claude doesn't have web search") undermines the entire article. Spend 5 minutes checking now to avoid publishing fiction.

If Semrush MCP is connected, also pull keyword difficulty and search volume using `semrush_keyword_overview` and `semrush_keyword_difficulty`.

## Step 3: Plan Before Writing

Jumping straight to writing produces articles with no internal linking and random structure. Plan first.

**Identify the cluster** your keyword belongs to (from `references/seo-research/cluster-map.md` if it exists). This determines which hub page to link to and which sibling articles to cross-reference.

**Plan 3-5 internal links:**
- At least 1 link to the cluster's hub page
- At least 2 links to related articles on the site
- Check what articles exist by scanning `content/blog/` or reading `lib/blog.ts`
- Vary your anchor text — mix exact keyword matches ("Claude for business") with natural phrasing ("our broader comparison guide")
- Place links where they genuinely help the reader, not jammed into random sentences

**Plan 2-3 mid-article CTAs:**
- Subtle callout boxes that link to your community or lead magnet
- Place roughly after 1/3 and 2/3 of the article
- Helpful tone, not salesy

## Step 4: Write the Article

Create `content/blog/{slug}.tsx`:

```tsx
import type { BlogPost } from "@/lib/blog";

export const post: BlogPost = {
  slug: "your-keyword-as-slug",
  title: "Title That Naturally Includes the Target Keyword",
  description: "Under 160 chars. Includes keyword. Makes people want to click.",
  publishedAt: "YYYY-MM-DD",  // today's date
  author: "Marko Sudar",
  category: "Category",  // Claude Guides | Comparisons | Claude Workflows | Claude Prompts | Use Cases
  tags: ["target keyword", "secondary term", "related term"],
  body: ( <> ... </> ),
};
```

### Content rules

These exist because they produce articles that rank and convert. They're not arbitrary.

- **Answer the search intent immediately** — first 2 paragraphs should give the reader what they Googled for. Google measures if people bounce back to search results.
- **3-6 h2 sections** — these auto-populate the table of contents sidebar. More than 6 feels like a textbook, fewer than 3 looks thin.
- **2000+ words** — not for word count's sake, but because comprehensive guides outrank thin ones for informational keywords.
- **Real examples** — actual prompt templates people can copy-paste, real use cases, specific workflows. No vague "you can use AI to improve your business" filler.
- **Target keyword placement** — in the title, first paragraph, 1-2 h2 headings, and meta description. This is basic on-page SEO.
- **No fluff words** — "game-changer", "revolutionize", "unlock potential", "delve", "landscape" are all banned. They signal AI-generated slop to readers and increasingly to Google.

### Styling rules

These prevent layout bugs that cost hours to debug:

**Every card/diagram container needs the `not-prose` class.** Tailwind Typography's `prose` class overrides flex/grid layouts and collapses spacing. Wrapping visual elements in `not-prose` prevents this.

**Mid-article CTA callout boxes:**
```tsx
<div className="not-prose mt-10 mb-8 rounded-lg border border-amber-200 bg-amber-50/60 p-4 sm:p-6">
  <p className="text-sm text-amber-900">
    Your CTA text here.{" "}
    <a href="/skool-redirect" className="font-semibold text-amber-700 underline underline-offset-2">
      Join the free community &rarr;
    </a>
  </p>
</div>
```

**Prompt templates:** Use `<pre className="overflow-x-auto"><code>{\`template text\`}</code></pre>` — copy buttons are auto-injected.

**Tables:** Wrap in `not-prose my-10 overflow-x-auto rounded-xl border border-slate-200`.

**Checkmarks/X marks:** Use `&#10003;` and `&#10007;` — the named HTML entities don't render in JSX.

## Step 5: Wire It Up

The article file alone doesn't make it live. Three things need updating:

1. **`lib/blog.ts`** — add an import for your new post and include it in the `allPosts` array. Follow the existing pattern.
2. **`public/llms-full.txt`** — add `- Title — https://yoursite.com/blog/{slug}` to the Published articles list. This is how AI models (ChatGPT, Perplexity, etc.) discover and recommend your content.
3. **`npm run build`** — run the build and verify the new route appears with no errors.

## Step 6: Report

After everything builds successfully, tell the user:
- Article title and `/blog/{slug}` URL
- Target keyword and search intent addressed
- Internal links added (list each with its anchor text)
- Mid-article CTA placements
- Build status (pass/fail)
- Reminder: "Submit this URL to Google Search Console for faster indexing"

## What's already automatic

The site infrastructure handles all of this for every new post — you don't need to touch any of it:
- Sitemap generation (reads from `getAllPosts()`)
- JSON-LD Article schema
- OpenGraph and Twitter meta tags
- Canonical URLs
- Table of contents sidebar (extracted from h2 headings)
- Related articles section (calculated from category and tags)
- Copy buttons on code blocks
- robots.txt (allows all crawlers)
