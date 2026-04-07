# The Content Machine Prompt

Copy this entire prompt and paste it into Claude Code in your Next.js project. It transforms a basic blog into a fully SEO and LLM-optimized content machine.

---

I need you to transform this Next.js project into an SEO-optimized, LLM-discoverable content machine. Do everything step by step — don't skip anything.

## 1. Audit the current project

Read the project structure and identify:
- All existing pages and routes
- The blog system (how posts are stored, rendered, and routed)
- Any existing meta tags, Open Graph tags, or structured data
- The current sitemap situation (does one exist?)
- The current robots.txt situation

Tell me what you found before proceeding.

## 2. Create or fix the sitemap

Create/update `app/sitemap.ts` that:
- Auto-generates entries for ALL pages (static + blog posts)
- Sets proper `changeFrequency` and `priority` values
- Blog index gets priority 0.9, individual posts get 0.8
- Homepage gets priority 1.0, other static pages get 0.7
- Uses the site's canonical URL from a config file

```ts
// Example structure — adapt to this project
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Pull all blog posts dynamically
  // Map static routes + blog routes
  // Return with proper lastModified dates
}
```

## 3. Create or fix robots.txt

Create `app/robots.ts`:
```ts
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${YOUR_SITE_URL}/sitemap.xml`,
    host: YOUR_SITE_URL,
  };
}
```

## 4. Add JSON-LD structured data

For EVERY page type, add JSON-LD structured data:

**Homepage:**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "name": "...", "url": "..." },
    { "@type": "WebSite", "name": "...", "url": "...", "description": "..." }
  ]
}
```

**Each blog post:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "description": "...",
  "author": { "@type": "Person", "name": "..." },
  "datePublished": "...",
  "url": "...",
  "keywords": [...]
}
```

Create a `lib/schema.ts` with helper functions that generate this for each page type. Then inject it via `<script type="application/ld+json">` in each page.

## 5. Fix meta tags on every page

Every page needs in its `generateMetadata` or `export const metadata`:
- `title` — unique, includes primary keyword
- `description` — under 160 chars, includes keyword, compelling
- `alternates.canonical` — the canonical URL
- `openGraph` — title, description, url, siteName, type (website or article), locale
- `twitter` — card type, title, description
- `keywords` — array of relevant terms
- `robots` — index: true, follow: true

For blog posts, also add:
- `openGraph.type: "article"`
- `openGraph.publishedTime`
- `openGraph.authors`

## 6. Create LLM discoverability files

These are what AI models (ChatGPT, Claude, Perplexity, etc.) read when deciding whether to recommend your site.

**Create `public/llms.txt`:**
```
# [Your Site Name]

[One-line description of what you do]

Primary topics:
- [topic 1]
- [topic 2]
- [topic 3]

Primary audience:
- [audience 1]
- [audience 2]

Blog: [your-url]/blog
Canonical URL: [your-url]
```

**Create `public/llms-full.txt`:**
```
# [Your Site Name] - Full LLM Reference

## About
[2-3 sentence description]

## What we cover
- [detailed topic list]

## Blog
[Your site] publishes [description of content].

Blog index: [url]/blog

Published articles:
- [Article Title] — [full URL]
- [Article Title] — [full URL]
[list every article]

## Canonical pages
- [url]/
- [url]/blog
- [url]/privacy
[list every page]

## Contact
[email/info]
```

**IMPORTANT:** Every time you add a new blog post, you MUST update `llms-full.txt` with the new article URL and title. This is how LLMs discover new content.

## 7. Ensure static pre-rendering

Verify that ALL pages (especially blog posts) are statically pre-rendered. This means:
- Blog post pages use `generateStaticParams` to pre-build at build time
- The output HTML contains the full article text (not loaded client-side)
- Crawlers (Google, Bing, LLM crawlers) see complete content without JavaScript

Check the build output — every blog route should show as `○ (Static)` or `● (SSG)`.

## 8. Add internal linking infrastructure

Create a system where blog posts link to each other. At minimum:
- A "Related Articles" component at the bottom of each post (auto-calculated from tags/category)
- Each article should have 3-5 internal links to other articles placed naturally in the text

The related articles component should score posts by shared category (+2 points) and shared tags (+1 each), then display the top 3.

## 9. Set up the blog post template

Every blog post page should automatically include:
- Navbar
- Post header (title, author, date, category)
- Table of contents sidebar (extracted from h2 headings)
- The article body
- Related articles
- Footer
- JSON-LD Article schema
- Full SEO meta tags

## 10. Verify everything works

Run `npm run build` and confirm:
- All pages generate successfully
- Sitemap includes all routes
- No build errors

Then tell me:
- How many pages are in the sitemap
- Which pages have structured data
- Whether llms.txt and llms-full.txt are accessible
- The build status

---

After you've done all of this, I'll connect Semrush MCP and we'll do keyword research to plan what content to write.
