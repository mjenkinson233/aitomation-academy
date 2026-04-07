import puppeteer from "puppeteer-core";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const logoPath = join(projectRoot, "public/images/creatives/aitomation_logo.png");
const logoBase64 = readFileSync(logoPath).toString("base64");
const logoDataUri = `data:image/png;base64,${logoBase64}`;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  :root {
    --bg-dark: #0a0f1a;
    --bg-card: #111827;
    --bg-code: #1a2235;
    --orange: #e8871e;
    --orange-light: #f5a623;
    --orange-glow: rgba(232, 135, 30, 0.15);
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
    --border: #1e293b;
  }

  @page { size: A4; margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-dark);
    color: var(--text-primary);
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ── Cover Page ── */
  .cover {
    page-break-after: always;
    padding: 100px 60px 60px;
    text-align: center;
    position: relative;
    background:
      radial-gradient(ellipse 60% 50% at 50% 40%, rgba(232, 135, 30, 0.08), transparent),
      var(--bg-dark);
  }

  .cover::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(148, 163, 184, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(148, 163, 184, 0.04) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
  }

  .cover-content {
    position: relative;
    z-index: 1;
    max-width: 500px;
    margin: 0 auto;
  }

  .cover .logo {
    width: 72px;
    height: 72px;
    margin-bottom: 16px;
    border-radius: 16px;
  }

  .cover .badge {
    display: inline-block;
    padding: 4px 14px;
    border: 1px solid var(--orange);
    border-radius: 999px;
    color: var(--orange);
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 16px;
  }

  .cover h1 {
    font-size: 28px;
    font-weight: 900;
    line-height: 1.15;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    margin-bottom: 10px;
  }

  .cover h1 .highlight {
    color: var(--orange);
  }

  .cover .subtitle {
    font-size: 13px;
    color: var(--text-secondary);
    max-width: 400px;
    margin: 0 auto 24px;
    line-height: 1.5;
  }

  .cover .toc {
    text-align: left;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px 20px;
  }

  .cover .toc h3 {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--text-muted);
    margin-bottom: 10px;
  }

  .toc-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 7px 0;
    border-bottom: 1px solid var(--border);
  }
  .toc-item:last-child { border-bottom: none; }

  .toc-num {
    width: 24px;
    height: 24px;
    border-radius: 6px;
    background: var(--orange-glow);
    color: var(--orange);
    font-weight: 700;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .toc-label { font-weight: 600; font-size: 13px; }
  .toc-desc { color: var(--text-secondary); font-size: 11px; margin-top: 1px; }

  /* ── Prompt Sections ── */
  .prompt-section {
    padding: 40px 40px 16px;
    page-break-before: always;
  }

  .prompt-header {
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--border);
    page-break-after: avoid;
  }

  .prompt-number {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--orange);
    font-weight: 700;
    margin-bottom: 6px;
  }
  .prompt-number span {
    width: 20px;
    height: 1px;
    background: var(--orange);
  }

  .prompt-section h2 {
    font-size: 22px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: -0.01em;
    line-height: 1.15;
    margin-bottom: 6px;
  }

  .prompt-intro {
    color: var(--text-secondary);
    font-size: 13px;
    line-height: 1.55;
  }

  .prompt-block {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .prompt-block-header {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 10px 20px;
    background: var(--bg-code);
    border-bottom: 1px solid var(--border);
    font-size: 10px;
    color: var(--text-muted);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .prompt-block-header .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--orange);
  }

  .prompt-body {
    padding: 24px;
    font-size: 13px;
    line-height: 1.7;
  }

  .prompt-body h3 {
    font-size: 14px;
    font-weight: 700;
    color: var(--text-primary);
    margin-top: 18px;
    margin-bottom: 5px;
    text-transform: none;
    page-break-after: avoid;
  }
  .prompt-body h3:first-child { margin-top: 0; }

  .prompt-body p { color: var(--text-secondary); margin-bottom: 8px; }
  .prompt-body ul, .prompt-body ol { color: var(--text-secondary); margin-bottom: 8px; padding-left: 18px; }
  .prompt-body li { margin-bottom: 3px; }
  .prompt-body strong { color: var(--text-primary); font-weight: 600; }

  .prompt-body code {
    background: var(--bg-code);
    padding: 1px 5px;
    border-radius: 3px;
    font-size: 12px;
    color: var(--orange-light);
    font-family: 'SF Mono', 'Fira Code', monospace;
  }

  .prompt-body pre {
    background: var(--bg-code);
    border: 1px solid var(--border);
    border-radius: 7px;
    padding: 14px;
    overflow-x: auto;
    margin: 10px 0;
    font-size: 11px;
    line-height: 1.55;
    color: var(--text-secondary);
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .prompt-body pre code { background: none; padding: 0; color: inherit; }

  /* ── Footer ── */
  .pdf-footer {
    page-break-before: always;
    padding: 200px 40px 40px;
    text-align: center;
  }

  .pdf-footer .logo-small {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    margin-bottom: 14px;
  }

  .pdf-footer h3 {
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  .pdf-footer p {
    color: var(--text-secondary);
    font-size: 13px;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  .pdf-footer .cta-box {
    display: inline-block;
    padding: 10px 28px;
    background: linear-gradient(135deg, var(--orange), var(--orange-light));
    color: var(--bg-dark);
    font-weight: 700;
    font-size: 12px;
    border-radius: 7px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .pdf-footer .footer-links {
    margin-top: 20px;
    font-size: 11px;
    color: var(--text-muted);
  }
</style>
</head>
<body>

<!-- COVER PAGE -->
<section class="cover">
  <div class="cover-content">
    <img src="${logoDataUri}" alt="AItomation Academy" class="logo">
    <div class="badge">Free Resource</div>
    <h1>4 Claude Code Prompts<br>That <span class="highlight">Actually Work</span></h1>
    <p class="subtitle">Copy-paste prompts to transform your blog SEO, run keyword research, automate publishing, and create a reusable blog writer skill &mdash; all with Claude Code.</p>
    <div class="toc">
      <h3>What's inside</h3>
      <div class="toc-item">
        <div class="toc-num">1</div>
        <div>
          <div class="toc-label">The Content Machine Prompt</div>
          <div class="toc-desc">Turn any Next.js blog into a fully SEO &amp; LLM-optimized content machine</div>
        </div>
      </div>
      <div class="toc-item">
        <div class="toc-num">2</div>
        <div>
          <div class="toc-label">The SEMrush Research Prompt</div>
          <div class="toc-desc">Run a full keyword strategy analysis using the Semrush MCP</div>
        </div>
      </div>
      <div class="toc-item">
        <div class="toc-num">3</div>
        <div>
          <div class="toc-label">The Blog Writer Skill</div>
          <div class="toc-desc">A reusable Claude Code skill that writes SEO blog posts on autopilot</div>
        </div>
      </div>
      <div class="toc-item">
        <div class="toc-num">4</div>
        <div>
          <div class="toc-label">The Daily Blog Automation Setup</div>
          <div class="toc-desc">Automate daily blog publishing with Claude Code scheduling</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PROMPT 1 -->
<section class="prompt-section">
  <div class="prompt-header">
    <div class="prompt-number"><span></span> Prompt 1 of 4</div>
    <h2>The Content Machine Prompt</h2>
    <p class="prompt-intro">Copy this entire prompt and paste it into Claude Code in your Next.js project. It transforms a basic blog into a fully SEO and LLM-optimized content machine.</p>
  </div>
  <div class="prompt-block">
    <div class="prompt-block-header"><div class="dot"></div> Paste into Claude Code</div>
    <div class="prompt-body">
<p>I need you to transform this Next.js project into an SEO-optimized, LLM-discoverable content machine. Do everything step by step &mdash; don't skip anything.</p>

<h3>1. Audit the current project</h3>
<p>Read the project structure and identify:</p>
<ul>
  <li>All existing pages and routes</li>
  <li>The blog system (how posts are stored, rendered, and routed)</li>
  <li>Any existing meta tags, Open Graph tags, or structured data</li>
  <li>The current sitemap situation (does one exist?)</li>
  <li>The current robots.txt situation</li>
</ul>
<p>Tell me what you found before proceeding.</p>

<h3>2. Create or fix the sitemap</h3>
<p>Create/update <code>app/sitemap.ts</code> that:</p>
<ul>
  <li>Auto-generates entries for ALL pages (static + blog posts)</li>
  <li>Sets proper <code>changeFrequency</code> and <code>priority</code> values</li>
  <li>Blog index gets priority 0.9, individual posts get 0.8</li>
  <li>Homepage gets priority 1.0, other static pages get 0.7</li>
  <li>Uses the site's canonical URL from a config file</li>
</ul>

<h3>3. Create or fix robots.txt</h3>
<p>Create <code>app/robots.ts</code> with proper rules allowing all user agents and pointing to the sitemap.</p>

<h3>4. Add JSON-LD structured data</h3>
<p>For EVERY page type, add JSON-LD structured data:</p>
<ul>
  <li><strong>Homepage:</strong> Organization + WebSite schema</li>
  <li><strong>Each blog post:</strong> Article schema with headline, description, author, datePublished, url, and keywords</li>
</ul>
<p>Create a <code>lib/schema.ts</code> with helper functions that generate this for each page type. Then inject it via <code>&lt;script type="application/ld+json"&gt;</code> in each page.</p>

<h3>5. Fix meta tags on every page</h3>
<p>Every page needs in its <code>generateMetadata</code> or <code>export const metadata</code>:</p>
<ul>
  <li><code>title</code> &mdash; unique, includes primary keyword</li>
  <li><code>description</code> &mdash; under 160 chars, includes keyword, compelling</li>
  <li><code>alternates.canonical</code> &mdash; the canonical URL</li>
  <li><code>openGraph</code> &mdash; title, description, url, siteName, type, locale</li>
  <li><code>twitter</code> &mdash; card type, title, description</li>
  <li><code>keywords</code> &mdash; array of relevant terms</li>
  <li><code>robots</code> &mdash; index: true, follow: true</li>
</ul>
<p>For blog posts, also add <code>openGraph.type: "article"</code>, <code>publishedTime</code>, and <code>authors</code>.</p>

<h3>6. Create LLM discoverability files</h3>
<p>These are what AI models (ChatGPT, Claude, Perplexity, etc.) read when deciding whether to recommend your site.</p>
<ul>
  <li>Create <code>public/llms.txt</code> &mdash; short summary with topics, audience, and canonical URL</li>
  <li>Create <code>public/llms-full.txt</code> &mdash; full reference listing every article URL, every page, and contact info</li>
</ul>
<p><strong>IMPORTANT:</strong> Every time you add a new blog post, you MUST update <code>llms-full.txt</code> with the new article URL and title.</p>

<h3>7. Ensure static pre-rendering</h3>
<p>Verify that ALL pages are statically pre-rendered:</p>
<ul>
  <li>Blog post pages use <code>generateStaticParams</code> to pre-build at build time</li>
  <li>The output HTML contains full article text (not loaded client-side)</li>
  <li>Crawlers see complete content without JavaScript</li>
</ul>

<h3>8. Add internal linking infrastructure</h3>
<p>Create a system where blog posts link to each other:</p>
<ul>
  <li>A "Related Articles" component at the bottom of each post</li>
  <li>Each article should have 3-5 internal links to other articles</li>
</ul>

<h3>9. Set up the blog post template</h3>
<p>Every blog post page should include: navbar, post header, table of contents sidebar, article body, related articles, footer, JSON-LD Article schema, and full SEO meta tags.</p>

<h3>10. Verify everything works</h3>
<p>Run <code>npm run build</code> and confirm all pages generate successfully, sitemap includes all routes, and no build errors.</p>

<p>After you've done all of this, I'll connect Semrush MCP and we'll do keyword research to plan what content to write.</p>
    </div>
  </div>
</section>

<!-- PROMPT 2 -->
<section class="prompt-section">
  <div class="prompt-header">
    <div class="prompt-number"><span></span> Prompt 2 of 4</div>
    <h2>The SEMrush Research Prompt</h2>
    <p class="prompt-intro">Use this after connecting the Semrush MCP. Paste this into Claude Code to run a complete keyword strategy analysis.</p>
  </div>
  <div class="prompt-block">
    <div class="prompt-block-header"><div class="dot"></div> Paste into Claude Code</div>
    <div class="prompt-body">
<p>I've connected the Semrush MCP to this project. I need you to do a full SEO research analysis for my website.</p>

<h3>Step 1: Analyze my domain</h3>
<p>Use the Semrush MCP tools to pull:</p>
<ul>
  <li>Domain overview (organic keywords, traffic, rank)</li>
  <li>Current organic keywords we rank for</li>
  <li>Our competitors in organic search</li>
</ul>
<p>Tell me what you find.</p>

<h3>Step 2: Research keyword opportunities</h3>
<p>Based on my site's topic and audience, research keywords across these categories:</p>
<ol>
  <li><strong>Core topic keywords</strong> &mdash; the main things we teach/cover</li>
  <li><strong>Comparison keywords</strong> &mdash; "[our tool] vs [competitor]" type searches</li>
  <li><strong>How-to keywords</strong> &mdash; "how to use [tool] for [task]"</li>
  <li><strong>Role-based keywords</strong> &mdash; "[tool] for [job title]"</li>
  <li><strong>Pricing/evaluation keywords</strong> &mdash; "is [tool] free", "[tool] pricing"</li>
</ol>
<p>For each keyword, pull search volume, keyword difficulty (KD), and CPC.</p>
<p>Use these Semrush tools: <code>semrush_keyword_overview</code>, <code>semrush_keyword_difficulty</code>, <code>semrush_broad_match_keywords</code>, <code>semrush_phrase_questions</code></p>

<h3>Step 3: Build a keyword strategy</h3>
<p>Organize the keywords into:</p>
<ul>
  <li><strong>Priority 1 (write first):</strong> KD 0-25, decent volume, strong fit</li>
  <li><strong>Priority 2 (write next):</strong> KD 25-45, higher volume</li>
  <li><strong>Priority 3 (long-term):</strong> KD 45+, aspirational</li>
</ul>

<h3>Step 4: Create the keyword cluster map</h3>
<p>Group keywords into 3-4 clusters with hub pages and supporting pages:</p>
<pre><code>Cluster 1: [Name]
  Hub page: [main article]
  Supporting: [article 1], [article 2], [article 3]

Cluster 2: [Name]
  Hub page: [main article]
  Supporting: [article 1], [article 2], [article 3]</code></pre>

<h3>Step 5: Create the publishing plan</h3>
<p>Order the first 10-15 articles by priority. For each: article title, target keyword, search volume and KD, cluster it belongs to, and page type.</p>

<h3>Step 6: Save everything</h3>
<p>Save the research to <code>references/seo-research/</code>:</p>
<ul>
  <li><code>keyword-strategy.md</code> &mdash; the full analysis</li>
  <li><code>cluster-map.md</code> &mdash; the cluster structure</li>
  <li><code>publishing-plan.md</code> &mdash; the ordered content queue</li>
</ul>
    </div>
  </div>
</section>

<!-- PROMPT 3: SKILL -->
<section class="prompt-section">
  <div class="prompt-header">
    <div class="prompt-number"><span></span> Prompt 3 of 4</div>
    <h2>The Blog Writer Skill</h2>
    <p class="prompt-intro">Save this as <code>.claude/skills/seo-blog-writer/SKILL.md</code> in your project. Claude Code automatically detects skills from this folder and triggers them when you say things like "write a blog post" or "next article".</p>
  </div>
  <div class="prompt-block">
    <div class="prompt-block-header"><div class="dot"></div> Save as .claude/skills/seo-blog-writer/SKILL.md</div>
    <div class="prompt-body">
<p><em>Frontmatter (between --- markers):</em></p>
<pre><code>name: seo-blog-writer
description: "Write SEO-optimized blog posts. Use when the user says
'write a blog', 'next article', 'new post', provides a keyword,
or a scheduled agent triggers daily blog writing."</code></pre>

<h3>Step 1: Pick the Keyword</h3>
<p>The user provides either a specific keyword (e.g., "claude for marketers") or "next" &mdash; meaning grab the next unwritten keyword from <code>references/seo-research/publishing-plan.md</code>.</p>
<p>Check <code>content/blog/</code> to avoid writing duplicates.</p>

<h3>Step 2: Research the Topic</h3>
<p>AI features change constantly. Before writing, do web searches to verify every feature claim.</p>
<ul>
  <li><code>"{keyword}" 2026</code> &mdash; see what currently ranks, find your angle</li>
  <li>Every specific AI feature, pricing tier, or capability you plan to mention</li>
</ul>
<p>One wrong claim ("Claude doesn't have web search") undermines the entire article. Spend 5 minutes checking now to avoid publishing fiction.</p>
<p>If Semrush MCP is connected, also pull keyword difficulty and search volume.</p>

<h3>Step 3: Plan Before Writing</h3>
<p>Identify the cluster your keyword belongs to (from the cluster map). Then plan:</p>
<ul>
  <li><strong>3-5 internal links</strong> &mdash; at least 1 to the cluster hub page, at least 2 to sibling articles</li>
  <li><strong>2-3 mid-article CTAs</strong> &mdash; subtle callout boxes linking to your community/product</li>
  <li><strong>Search intent</strong> &mdash; what does someone Googling this actually want?</li>
</ul>

<h3>Step 4: Write the Article</h3>
<p>Create <code>content/blog/{slug}.tsx</code> with the BlogPost export. Content rules:</p>
<ul>
  <li>Answer search intent in the first 2 paragraphs</li>
  <li>3-6 h2 sections (auto-populate the TOC sidebar)</li>
  <li>2000+ words with real examples and prompt templates</li>
  <li>No fluff ("game-changer", "revolutionize", "unlock potential")</li>
  <li>Keyword in: title, first paragraph, 1-2 h2 headings, meta description</li>
</ul>

<h3>Step 5: Wire It Up</h3>
<ol>
  <li><code>lib/blog.ts</code> &mdash; add import and include in allPosts array</li>
  <li><code>public/llms-full.txt</code> &mdash; add the new article URL</li>
  <li><code>npm run build</code> &mdash; verify the route appears and build passes</li>
</ol>

<h3>Step 6: Report</h3>
<p>Tell the user: title, URL, target keyword, internal links added, build status, and remind them to submit to Google Search Console.</p>

<h3>What's Already Automatic</h3>
<p>Sitemap, JSON-LD schema, OpenGraph/Twitter meta, canonical URLs, TOC sidebar, related articles, copy buttons on code blocks, and robots.txt all work automatically for every new post.</p>
    </div>
  </div>
</section>

<!-- PROMPT 4 -->
<section class="prompt-section">
  <div class="prompt-header">
    <div class="prompt-number"><span></span> Prompt 4 of 4</div>
    <h2>The Daily Blog Automation Setup</h2>
    <p class="prompt-intro">Three ways to automate daily blog publishing using Claude Code &mdash; from simple scheduling to full CI/CD pipelines. These all use the blog writer skill from Prompt 3.</p>
  </div>
  <div class="prompt-block">
    <div class="prompt-block-header"><div class="dot"></div> Choose your automation method</div>
    <div class="prompt-body">
<h3>Option 1: Claude Code Scheduled Agent (simplest)</h3>
<p>In Claude Code, run:</p>
<pre><code>/schedule create --name "daily-blog" --cron "0 8 * * *" --prompt "Use the /seo-blog-writer skill. Pick the next keyword from the publishing plan and write the article. After writing, commit the changes and tell me what you wrote so I can review before pushing."</code></pre>
<p>This runs every morning at 8 AM. It:</p>
<ol>
  <li>Picks the next keyword from the plan</li>
  <li>Researches the topic</li>
  <li>Writes the article</li>
  <li>Wires it up (imports, llms.txt, etc.)</li>
  <li>Commits (but doesn't push &mdash; you review first)</li>
</ol>

<h3>Option 2: n8n Workflow (if you want approval flow)</h3>
<p>Create an n8n workflow that:</p>
<ol>
  <li>Triggers on a cron schedule (daily at 8 AM)</li>
  <li>Calls Claude Code CLI to write the next article</li>
  <li>Creates a GitHub PR instead of committing to main</li>
  <li>Sends you a Slack/email notification with the PR link</li>
  <li>You review, approve, and merge</li>
</ol>

<h3>Option 3: GitHub Actions (if you want CI/CD)</h3>
<pre><code># .github/workflows/daily-blog.yml
name: Daily Blog Post
on:
  schedule:
    - cron: '0 8 * * 1-5'  # Weekdays at 8 AM
  workflow_dispatch:  # Manual trigger

jobs:
  write-blog:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '24'
      - run: npm install
      - name: Write blog post
        run: |
          npx claude -p "Use the /seo-blog-writer skill. Pick the next keyword and write the full article."
      - name: Create PR
        uses: peter-evans/create-pull-request@v7
        with:
          title: "New blog post: auto-generated"
          body: "Automated daily blog post. Review and merge."
          branch: blog/daily-post</code></pre>

<h3>The Review Workflow</h3>
<p>Regardless of which automation you use, the flow is:</p>
<ol>
  <li>Agent writes the article overnight/morning</li>
  <li>You get notified (PR, Slack, or just check the commit)</li>
  <li>You review &mdash; check facts, tone, quality</li>
  <li>You say "looks good, push it" or "fix X, Y, Z"</li>
  <li>After pushing, submit the new URL to Google Search Console</li>
</ol>
<p><strong>The automation handles the 80% grunt work. Your 20% is quality control and the final push.</strong></p>
    </div>
  </div>
</section>

<!-- FOOTER -->
<section class="pdf-footer">
  <img src="${logoDataUri}" alt="AItomation Academy" class="logo-small">
  <h3>Want more prompts like these?</h3>
  <p>Join 400+ professionals learning to use Claude for real work &mdash; workflows, automations, and practical AI skills.</p>
  <div class="cta-box">Join the Community &rarr; skool.com/aitomation-academy</div>
  <div class="footer-links">
    aitomationacademy.com &nbsp;&bull;&nbsp; youtube.com/@MarcoSudar &nbsp;&bull;&nbsp; skool.com/aitomation-academy
  </div>
</section>

</body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });

  const outputPath = join(projectRoot, "public/3-claude-code-prompts-that-actually-work.pdf");

  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();
  console.log(`PDF generated: ${outputPath}`);
})();
