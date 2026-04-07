# Video Script Outline: Turn Any Next.js Blog Into an SEO Content Machine

## What viewers get

A step-by-step system to turn a basic Next.js blog into an automated content machine that:
- Ranks on Google
- Gets recommended by AI models (ChatGPT, Perplexity, etc.)
- Publishes new SEO-optimized articles on autopilot

## Prerequisites (what the starting project has)

- A Next.js project with a basic blog (posts render, that's about it)
- No SEO optimization
- No sitemap
- No structured data
- No LLM discoverability
- No internal linking
- No automation

## Step-by-Step Flow

### Step 1: Connect Semrush MCP (2 min)

"First thing we need is data. I'm connecting the Semrush MCP to Claude Code so we can do real keyword research."

- Show `.mcp.json` setup with Semrush API key
- Restart Claude Code
- Show the Semrush tools are available

### Step 2: Run the Transform Prompt (5-10 min)

"Now I'm going to paste one prompt that transforms this basic blog into a properly optimized site."

- Paste `01-transform-prompt.md` into Claude Code
- Show Claude creating:
  - Sitemap (`app/sitemap.ts`)
  - Robots.txt (`app/robots.ts`)
  - JSON-LD structured data (`lib/schema.ts`)
  - Meta tags on every page
  - `llms.txt` and `llms-full.txt`
  - Related articles component
  - Build verification

"Now our site has everything Google and AI models need to find and understand our content."

### Step 3: Semrush Research (5 min)

"Now let's figure out WHAT to write about. This is where Semrush MCP comes in."

- Paste `02-semrush-research-prompt.md`
- Show Claude pulling real keyword data:
  - Domain overview
  - Keyword opportunities with volume + difficulty
  - Competitor analysis
- Show the output: keyword strategy, cluster map, publishing plan
- Show the files saved to `references/seo-research/`

"We now have a data-driven plan for exactly which articles to write, in what order."

### Step 4: Install the Blog Writer Skill (2 min)

"Instead of writing prompts every time, we're going to install a skill that handles the entire blog writing pipeline."

- Copy `03-seo-blog-writer-skill/` into `.claude/skills/`
- Copy the `references/seo-research/` folder into the skill's `references/`
- Show the skill appears in `/skills` list

"This skill knows our keyword plan, our linking structure, our formatting rules, and our SEO requirements."

### Step 5: Write the First Article (5-10 min)

"Let's test it. I'll just say: write the next article."

- Type `/seo-blog-writer next`
- Show Claude:
  - Picking the top keyword from the plan
  - Doing web research
  - Writing the full article
  - Adding internal links
  - Updating llms.txt
  - Running the build
- Show the finished article in the browser

"That's a 2000+ word, fully SEO-optimized article with internal links, structured data, and LLM discoverability — in under 10 minutes."

### Step 6: Set Up Automation (2 min)

"Now let's make this happen every day without us doing anything."

- Show the scheduled agent setup or n8n workflow
- Explain the review flow: agent writes, you approve

"Every morning, a new article gets written from our keyword plan. We review it, push it, and submit to Google. That's a content machine."

### Closing

"To recap what we built:
1. Connected Semrush for real keyword data
2. Transformed the blog with proper SEO, structured data, and LLM files
3. Did data-driven keyword research and built a publishing plan
4. Installed a skill that handles the entire blog writing pipeline
5. Wrote our first article in minutes
6. Set up daily automation

This system works for any Next.js blog. The prompt, skill template, and automation config are all linked below."

## Files to Share

Link in video description:
- `01-transform-prompt.md` — the base setup prompt
- `02-semrush-research-prompt.md` — the research prompt
- `03-seo-blog-writer-skill/` — the skill template (copy into your .claude/skills/)
- `04-automation-prompt.md` — automation setup options
