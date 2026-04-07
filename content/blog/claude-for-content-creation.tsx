import type { BlogPost } from "@/lib/blog";

export const post: BlogPost = {
  slug: "claude-for-content-creation",
  title: "Claude for Content Creation: 5 Workflows",
  description: "Five Claude workflows for content creation — blogs, social media, newsletters, repurposing, and SEO drafts. Copy-paste prompts included.",
  publishedAt: "2026-04-05",
  author: "Marko Sudar",
  category: "Claude Workflows",
  tags: [
    "Claude",
    "content creation",
    "marketing",
    "workflows",
    "prompts",
    "social media",
    "SEO",
    "newsletter",
    "non-technical",
  ],
  body: (
    <>
      <p>
        Most people using Claude for content creation open a new chat, type
        &quot;write me a LinkedIn post about productivity,&quot; get something
        generic, and conclude that AI content isn&apos;t very good. They&apos;re
        right — that workflow produces mediocre output.
      </p>
      <p>
        But the problem isn&apos;t Claude. It&apos;s the approach. Claude is
        genuinely excellent at content creation when you set it up correctly and
        give it the right inputs. It handles nuance, matches tone, and produces
        long-form work that doesn&apos;t read like a robot wrote it — if you
        know how to work with it. (If you want to understand the fundamentals first, start with <a href="/blog/claude-prompting-guide">our prompting fundamentals guide</a>.)
      </p>
      <p>
        This guide walks through five complete content creation workflows, each
        with a detailed prompt template you can copy and customize. These
        aren&apos;t one-liners. They&apos;re the kind of structured prompts
        that produce output you&apos;d actually publish.
      </p>

      <h2>Why Claude is particularly good for content creation</h2>
      <p>
        Before the workflows, it&apos;s worth understanding why Claude for
        marketing and content work is a strong fit compared to other tools:
      </p>
      <ul>
        <li>
          <strong>Nuanced writing.</strong> Claude doesn&apos;t default to the
          breathless, exclamation-heavy tone that plagues most AI writing. It
          can match sophisticated, understated, or conversational voices without
          constant correction. (This is a big reason <a href="/blog/claude-vs-chatgpt-for-writing">why Claude beats ChatGPT for writing</a>.)
        </li>
        <li>
          <strong>Long-form capability.</strong> Claude handles 3,000-word blog
          posts, 10-email welcome sequences, and full content calendars in a
          single conversation without losing coherence halfway through.
        </li>
        <li>
          <strong>Tone matching.</strong> Give Claude a sample of your writing
          and it can reproduce the cadence, vocabulary level, and sentence
          structure remarkably well. This is the difference between
          &quot;AI-generated content&quot; and &quot;content that sounds like
          you, produced faster.&quot;
        </li>
        <li>
          <strong>Projects for brand consistency.</strong> Claude&apos;s Projects
          feature lets you upload style guides, past content, audience research,
          and custom instructions. Every conversation in that project
          automatically uses that context — meaning Claude remembers your brand
          voice without you repeating yourself.
        </li>
        <li>
          <strong>Custom Styles.</strong> You can create and save a writing
          style in Claude that persists across conversations. Upload three
          examples of your best writing, describe the tone you want, and
          Claude will default to that style every time.
        </li>
      </ul>

      <h2>Setting up a Content Creation Project in Claude</h2>
      <p>
        Before using any of the workflows below, spend 15 minutes setting up a
        Claude Project. This one-time investment pays off on every piece of
        content you create.
      </p>

      {/* ── Setup diagram ── */}
      <div className="my-8 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6">
        <p className="text-center font-semibold text-slate-800 mb-6 text-lg">
          Content Creation Project Setup
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                1
              </span>
              <span className="font-semibold text-slate-800">
                Create Project
              </span>
            </div>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>Name it &quot;Content Engine&quot;</li>
              <li>Add custom instructions (see below)</li>
            </ul>
          </div>
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                2
              </span>
              <span className="font-semibold text-slate-800">
                Upload Files
              </span>
            </div>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>Brand style guide / voice doc</li>
              <li>3-5 of your best-performing posts</li>
              <li>Audience persona / research</li>
              <li>Content calendar or pillar topics</li>
            </ul>
          </div>
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                3
              </span>
              <span className="font-semibold text-slate-800">
                Set Custom Style
              </span>
            </div>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>Go to Settings &rarr; Styles</li>
              <li>Upload 3 writing samples</li>
              <li>Describe desired tone &amp; voice</li>
              <li>Apply to your Content Project</li>
            </ul>
          </div>
        </div>
      </div>

      <p>
        Here&apos;s what to put in your Project Instructions. This is the
        single most important step — it&apos;s what makes Claude consistently
        produce content that sounds like you instead of a generic AI:
      </p>
      <pre className="overflow-x-auto"><code>{`BRAND VOICE & CONTENT GUIDELINES

ABOUT US:
- Company/Brand: [Your brand name]
- What we do: [One-sentence description]
- Who we serve: [Specific audience — job titles, industries, pain points]
- Brand personality: [3-5 adjectives, e.g., "direct, knowledgeable, slightly irreverent, practical"]

VOICE RULES:
- Tone: [e.g., "Conversational but authoritative. Like a smart friend who happens to be an expert."]
- Vocabulary level: [e.g., "No jargon. Write at an 8th-grade reading level. If a simpler word exists, use it."]
- Sentence structure: [e.g., "Mix short punchy sentences with longer explanatory ones. Lead paragraphs with the point, then support it."]
- Things we NEVER say: [e.g., "game-changer, unlock, leverage, synergy, dive in, revolutionary"]
- Things we ALWAYS do: [e.g., "Use specific numbers over vague claims. Include real examples. Address objections directly."]

CONTENT PRINCIPLES:
- Every piece should give the reader something actionable
- Specificity over generality — "increased email open rates by 23%" not "improved results"
- We acknowledge tradeoffs and limitations honestly
- We write for practitioners, not theorists

AUDIENCE CONTEXT:
[Paste key findings from your audience research — what they care about, what they've tried, what frustrates them]`}</code></pre>

      <h2>Workflow 1: Writing a blog post from scratch</h2>
      <p>
        The biggest mistake people make with Claude for content creation is
        asking for a complete draft in one shot. You get 1,500 words of
        surface-level content that reads like every other AI blog post. Instead,
        work in stages.
      </p>

      {/* ── Blog post workflow diagram ── */}
      <div className="my-8 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 md:p-6">
        <p className="text-center font-semibold text-slate-800 mb-6 text-lg">
          Blog Post Creation Workflow
        </p>
        <div className="flex flex-col gap-3 items-center">
          {/* Step 1 */}
          <div className="w-full max-w-md rounded-lg border border-blue-200 bg-blue-50 p-4 md:p-5 flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
              1
            </span>
            <div>
              <span className="text-sm font-semibold text-blue-800">
                Topic + Audience Brief
              </span>
              <p className="text-xs text-blue-600 mt-1">
                Define topic, reader persona, goal of the piece
              </p>
            </div>
          </div>
          <div className="h-4 flex items-center justify-center text-slate-400">&darr;</div>
          {/* Step 2 */}
          <div className="w-full max-w-md rounded-lg border border-blue-200 bg-blue-50 p-4 md:p-5 flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
              2
            </span>
            <div>
              <span className="text-sm font-semibold text-blue-800">
                Outline Only (Not a Draft)
              </span>
              <p className="text-xs text-blue-600 mt-1">
                Ask Claude for a structured outline with key points per section
              </p>
            </div>
          </div>
          <div className="h-4 flex items-center justify-center text-slate-400">&darr;</div>
          {/* Step 3 */}
          <div className="w-full max-w-md rounded-lg border border-blue-200 bg-blue-50 p-4 md:p-5 flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
              3
            </span>
            <div>
              <span className="text-sm font-semibold text-blue-800">
                Refine the Outline
              </span>
              <p className="text-xs text-blue-600 mt-1">
                Rearrange, cut, and add sections before any writing starts
              </p>
            </div>
          </div>
          <div className="h-4 flex items-center justify-center text-slate-400">&darr;</div>
          {/* Step 4 */}
          <div className="w-full max-w-md rounded-lg border border-blue-200 bg-blue-50 p-4 md:p-5 flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
              4
            </span>
            <div>
              <span className="text-sm font-semibold text-blue-800">
                Expand Section by Section
              </span>
              <p className="text-xs text-blue-600 mt-1">
                Write one section at a time, providing feedback between each
              </p>
            </div>
          </div>
          <div className="h-4 flex items-center justify-center text-slate-400">&darr;</div>
          {/* Step 5 */}
          <div className="w-full max-w-md rounded-lg border border-orange-200 bg-orange-50 p-4 md:p-5 flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
              5
            </span>
            <div>
              <span className="text-sm font-semibold text-orange-800">
                Polish &amp; Finalize
              </span>
              <p className="text-xs text-orange-600 mt-1">
                Tighten intro, add transitions, cut filler
              </p>
            </div>
          </div>
        </div>
      </div>

      <p>
        Start with the outline. Paste this prompt into your Content Project —
        Claude will already have your brand voice from the Project Instructions:
      </p>
      <pre className="overflow-x-auto"><code>{`I'm writing a blog post and need your help developing it in stages. Do NOT write a draft yet — I only want an outline first.

TOPIC: [Your topic]
TARGET AUDIENCE: [Who will read this — be specific about their role, experience level, and what they already know]
GOAL: [What should the reader be able to DO after reading this? Not "understand X" but "implement X" or "make a decision about X"]
ANGLE: [What makes this piece different from the 50 other articles on this topic? What's your unique take?]
TARGET LENGTH: [e.g., 1,500 words, 2,500 words]

WRITING SAMPLE — match the style, tone, and structure of this excerpt from my previous work:
"""
[Paste 300-500 words of your best writing on a similar topic. This is the single most impactful thing you can include — it gives Claude a concrete voice to match.]
"""

Create a detailed outline with:
1. A working headline (aim for specific and curiosity-driven, not clickbait)
2. An intro approach — what hook will grab the reader in the first 2 sentences? What's the "why this matters now" framing?
3. For each main section:
   - H2 heading
   - 2-3 key points to cover
   - One specific example, stat, or case study to include (suggest what would work here)
   - How this section connects to the next
4. A conclusion approach — not just a summary, but a specific call to action or next step
5. Internal/external link opportunities (where could we reference other content?)

After presenting the outline, explain your reasoning: why this structure, why this order, what alternatives you considered.`}</code></pre>
      <p>
        After Claude returns the outline, review it, rearrange sections, cut
        anything weak, and add points Claude missed. Then expand section by
        section:
      </p>
      <pre className="overflow-x-auto"><code>{`Good outline. Now expand Section [X]: "[Section title]"

Write it to match the voice in my writing sample. Specific guidelines:
- Lead with the most valuable insight, not background context
- Include the example we outlined (or suggest a better one if you have it)
- Keep paragraphs to 3-4 sentences max
- End the section with a natural transition to the next topic
- Length: approximately [X] words for this section

Do NOT write the other sections yet — just this one.`}</code></pre>

      {/* ── Mid-article CTA 1 ── */}
      <div className="my-8 rounded-xl border border-amber-200 bg-amber-50/60 p-4 md:p-6">
        <p className="text-sm text-amber-900">
          These workflows are part of what 400+ professionals use inside our free community to create content faster with Claude.{" "}
          <a
            href="/skool-redirect"
            className="font-semibold text-orange-600 underline decoration-orange-300 underline-offset-4 hover:text-orange-700 hover:decoration-orange-400 transition-colors"
          >
            Join AItomation Academy for free &rarr;
          </a>
        </p>
      </div>

      <h2>Workflow 2: Content repurposing pipeline</h2>
      <p>
        This is where Claude for content creation becomes a genuine time
        multiplier. One long-form piece can become a week of content across
        platforms — but only if you maintain voice consistency and adapt
        format properly for each channel. Teams using this approach for broader operations can see <a href="/blog/claude-for-business">how businesses use Claude</a> across departments.
      </p>

      {/* ── Repurposing diagram ── */}
      <div className="my-8 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 md:p-6">
        <p className="text-center font-semibold text-slate-800 mb-6 text-lg">
          Content Repurposing Pipeline
        </p>
        <div className="flex flex-col items-center gap-3">
          <div className="w-full max-w-sm rounded-lg border-2 border-purple-300 bg-purple-50 p-4 sm:p-6 text-center">
            <span className="text-sm font-bold text-purple-800">
              Source: Long-Form Content
            </span>
            <p className="text-xs text-purple-600 mt-1">
              Blog post, podcast transcript, video script, webinar
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-3 w-px bg-slate-300" />
            <div className="text-xs font-semibold text-slate-500 py-1">
              &darr; Claude extracts &amp; adapts &darr;
            </div>
            <div className="h-3 w-px bg-slate-300" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {[
              { label: "LinkedIn Posts", detail: "2-3 posts, storytelling format" },
              { label: "Newsletter", detail: "Curated summary + takeaway" },
              { label: "Twitter/X Thread", detail: "Hook + 5-8 punchy tweets" },
              { label: "Short-Form Video", detail: "Script for 60s reel/short" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-green-200 bg-green-50 p-4 sm:p-6 text-center"
              >
                <span className="text-xs font-semibold text-green-800 block">
                  {item.label}
                </span>
                <span className="text-[11px] text-green-600 mt-1 block">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <pre className="overflow-x-auto"><code>{`I have a long-form piece of content that I want to repurpose across multiple platforms. The goal is to extract the most valuable ideas and repackage them for each platform's format and audience expectations — NOT to simply shorten the original.

SOURCE CONTENT:
"""
[Paste your full blog post, article, transcript, or long-form content here]
"""

BRAND VOICE REMINDER: [If not using a Project, describe your voice in 2-3 sentences. If using a Project, skip this — Claude already knows.]

Create the following assets from this source material:

1. LINKEDIN POSTS (create 3 separate posts):
   - Post 1: A "lesson learned" narrative post. Start with a bold or counterintuitive statement from the piece. Tell a short story. End with a practical takeaway. 150-200 words. No hashtag spam — 3 max.
   - Post 2: A "framework/model" post. Extract a process, framework, or mental model from the content. Present it as a numbered list or step-by-step. 100-150 words.
   - Post 3: A "hot take" post. Find the most contrarian or opinion-driven point in the piece. Lead with it directly. No hedging language. 80-120 words.

2. EMAIL NEWSLETTER SECTION (one section, not a full email):
   - Write a 150-word section that could slot into a weekly newsletter
   - Frame it as "here's what I've been thinking about" — personal, not promotional
   - Include one specific, actionable insight the reader can use immediately
   - End with a link prompt: "[Read the full piece here]"

3. TWITTER/X THREAD (6-8 tweets):
   - Tweet 1: Hook that creates curiosity — no "Thread:" or "1/" prefix
   - Tweets 2-7: One idea per tweet. Each should stand alone as a useful insight even outside the thread. Use short sentences. No corporate tone.
   - Final tweet: Summarize the core lesson + invite engagement with a question
   - Each tweet under 270 characters

4. SHORT-FORM VIDEO SCRIPT (60 seconds):
   - Hook (first 3 seconds): A question or surprising statement
   - Body: The single most counterintuitive or valuable point from the content
   - Close: One clear takeaway + a reason to follow for more
   - Write it as spoken words — casual, direct, no written-English formality

For each piece, explain which idea from the source content you chose to highlight and why it works best for that platform.`}</code></pre>

      <h2>Workflow 3: Social media content calendar</h2>
      <p>
        Planning a full month of social media content from scratch is
        exhausting. With Claude for marketing, you can turn 4-5 pillar topics
        into a complete content calendar with platform-specific formatting in a
        single conversation.
      </p>

      {/* ── Calendar planning diagram ── */}
      <div className="my-8 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 md:p-6">
        <p className="text-center font-semibold text-slate-800 mb-6 text-lg">
          Content Calendar Planning Flow
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          <div className="rounded-lg border-2 border-indigo-200 bg-indigo-50 p-4 sm:p-6 text-center">
            <span className="block text-xs font-bold text-indigo-800">
              Pillar Topics
            </span>
            <span className="block text-[11px] text-indigo-600 mt-1">
              4-5 core themes
            </span>
          </div>
          <div className="flex items-center justify-center text-slate-400 font-bold">
            <span className="hidden md:inline">&rarr;</span>
            <span className="md:hidden">&darr;</span>
          </div>
          <div className="rounded-lg border-2 border-indigo-200 bg-indigo-50 p-4 sm:p-6 text-center">
            <span className="block text-xs font-bold text-indigo-800">
              Sub-Topics
            </span>
            <span className="block text-[11px] text-indigo-600 mt-1">
              3-4 angles per pillar
            </span>
          </div>
          <div className="flex items-center justify-center text-slate-400 font-bold">
            <span className="hidden md:inline">&rarr;</span>
            <span className="md:hidden">&darr;</span>
          </div>
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4 sm:p-6 text-center">
            <span className="block text-xs font-bold text-orange-800">
              30-Day Calendar
            </span>
            <span className="block text-[11px] text-orange-600 mt-1">
              Platform-specific posts
            </span>
          </div>
        </div>
      </div>

      <pre className="overflow-x-auto"><code>{`I need to plan a full month of social media content. Help me go from pillar topics to a complete, platform-specific content calendar.

MY BUSINESS CONTEXT:
- Brand/Business: [What you do and who you serve]
- Primary goal this month: [e.g., "Drive email signups for our new course" / "Build authority in our niche" / "Promote our Q2 product launch"]
- Platforms I'm active on: [e.g., LinkedIn, Twitter/X, Instagram]
- Posting frequency: [e.g., "LinkedIn 4x/week, Twitter daily, Instagram 3x/week"]

MY PILLAR TOPICS (the 4-5 core themes I create content around):
1. [e.g., "AI productivity for small business owners"]
2. [e.g., "Lessons from scaling a consulting practice"]
3. [e.g., "Marketing strategies that don't require a big budget"]
4. [e.g., "Tools and systems I use to run my business"]
5. [e.g., "Industry commentary and trends"]

CONTENT MIX PREFERENCES:
- Educational/how-to: [e.g., 40%]
- Personal stories/behind-the-scenes: [e.g., 20%]
- Opinion/hot takes: [e.g., 20%]
- Promotional/CTA: [e.g., 10%]
- Engagement/questions: [e.g., 10%]

Now create:

PART 1: TOPIC EXPANSION
For each pillar topic, generate 4 specific sub-topics or angles I could cover this month. Make them specific enough to write from directly (not vague themes).

PART 2: 30-DAY CONTENT CALENDAR
Create a calendar for [month, year] with:
- Date
- Platform
- Pillar topic it maps to
- Content type (educational, story, opinion, promo, engagement)
- Post concept (one sentence describing the specific angle)
- Format note (text post, carousel, thread, image + caption, video script, poll)

Ensure:
- No pillar topic appears more than 2 days in a row
- Promotional content is never back-to-back
- Each week has a mix of content types
- Platform-specific formats (LinkedIn favors longer text and carousels; Twitter favors threads and punchy takes; Instagram favors visual and carousel posts)

PART 3: READY-TO-POST DRAFTS
Pick the 5 strongest concepts from the calendar and write full, ready-to-publish drafts for each. Follow the platform conventions:
- LinkedIn: 150-250 words, hook in first line, line breaks between paragraphs, 3 max hashtags at end
- Twitter: Under 270 characters for single tweets, or a 5-8 tweet thread
- Instagram: Caption under 150 words, include a call to action, suggest a visual concept

Present the calendar in a table format I can copy into a spreadsheet.`}</code></pre>

      {/* ── Mid-article CTA 2 ── */}
      <div className="my-8 rounded-xl border border-amber-200 bg-amber-50/60 p-4 md:p-6">
        <p className="text-sm text-amber-900">
          Want to see these workflows in action? Members get access to live walkthroughs and prompt libraries.{" "}
          <a
            href="/skool-redirect"
            className="font-semibold text-orange-600 underline decoration-orange-300 underline-offset-4 hover:text-orange-700 hover:decoration-orange-400 transition-colors"
          >
            Join AItomation Academy for free &rarr;
          </a>
        </p>
      </div>

      <h2>Workflow 4: Email newsletter writing</h2>
      <p>
        Newsletter writing is where Claude for content creation shines — and
        where most people get it wrong. The typical failure mode is asking
        Claude to &quot;write a newsletter about X,&quot; which produces
        something that reads like an AI summary of a Wikipedia article. Nobody
        wants that in their inbox.
      </p>
      <p>
        The key is giving Claude enough context about your newsletter&apos;s
        personality, your reader relationship, and the specific value you
        deliver.
      </p>

      {/* ── Newsletter workflow diagram ── */}
      <div className="my-8 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 md:p-6">
        <p className="text-center font-semibold text-slate-800 mb-6 text-lg">
          Newsletter Writing Process
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 md:p-5 flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white mt-0.5">
                1
              </span>
              <div>
                <span className="text-xs font-bold text-amber-800 block">
                  Subject Lines (5-7 options)
                </span>
                <span className="text-[11px] text-amber-600 block mt-1">
                  Curiosity-driven, specific, no clickbait
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 md:p-5 flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white mt-0.5">
                2
              </span>
              <div>
                <span className="text-xs font-bold text-amber-800 block">
                  Opening Hook
                </span>
                <span className="text-[11px] text-amber-600 block mt-1">
                  Personal story or observation that connects to the main topic
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 md:p-5 flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white mt-0.5">
                3
              </span>
              <div>
                <span className="text-xs font-bold text-amber-800 block">
                  Body Section
                </span>
                <span className="text-[11px] text-amber-600 block mt-1">
                  One core insight, expanded with examples and a clear takeaway
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 md:p-5 flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white mt-0.5">
                4
              </span>
              <div>
                <span className="text-xs font-bold text-amber-800 block">
                  CTA &amp; Close
                </span>
                <span className="text-[11px] text-amber-600 block mt-1">
                  Natural sign-off with one clear ask — reply, click, or share
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <pre className="overflow-x-auto"><code>{`I'm writing my weekly email newsletter and need help with this week's edition. This is NOT a marketing email — it's a relationship-building newsletter where I share insights with my audience.

NEWSLETTER CONTEXT:
- Newsletter name: [Name]
- Audience: [Who reads it — be specific: "500 marketing directors at mid-size B2B companies" is better than "marketers"]
- Tone: [e.g., "Like writing to a smart colleague. Casual but substantive. I use first person, share personal observations, and occasionally swear."]
- Format: [e.g., "One main topic explored in depth, ~600 words, with a PS that links to something interesting"]
- What readers expect: [e.g., "Practical tactics they can use this week, not thought leadership fluff"]

THIS WEEK'S TOPIC: [What you want to write about]
WHY NOW: [Why this topic is relevant this week — a trigger event, something you experienced, a trend you noticed]
KEY INSIGHT: [The one thing you want the reader to walk away with — state it in one sentence]
PERSONAL ANGLE: [A brief story, observation, or experience that connects you to this topic — even a few bullet points Claude can expand]

PREVIOUS NEWSLETTER SAMPLE (for voice matching):
"""
[Paste a previous newsletter you're proud of — 300-500 words minimum. This is critical for voice matching.]
"""

Create:

1. SUBJECT LINES — give me 7 options in these categories:
   - 2 curiosity-driven (make them want to open without being clickbait)
   - 2 specific/benefit-driven (tell them exactly what they'll learn)
   - 2 personal/story-driven (hint at the personal angle)
   - 1 wild card (something unexpected that might stand out in a crowded inbox)
   For each, write a preview text line (the secondary text shown in inbox previews) that complements the subject line.

2. FULL NEWSLETTER DRAFT:
   - Open with the personal angle — not "Today I want to talk about..." but drop the reader directly into the story or observation
   - Transition naturally into the main insight
   - Expand the insight with a specific example, mini case study, or "here's what this looks like in practice" section
   - Close with a concrete action step — something they can do in the next 24 hours
   - Add a PS with a relevant link, resource, or secondary thought
   - Total length: 500-700 words

3. ONE ALTERNATIVE OPENING:
   - Write a second version of just the opening paragraph using a completely different hook — give me options to choose from.

The most important thing: this should NOT sound like an AI wrote it. Read my sample carefully and match my actual voice — my sentence rhythms, my level of formality, how I transition between ideas. If I use contractions, use contractions. If I write short paragraphs, write short paragraphs.`}</code></pre>

      <h2>Workflow 5: SEO content brief to draft</h2>
      <p>
        Most SEO content reads like it was written by someone who&apos;s never
        actually done the thing they&apos;re writing about. That&apos;s because
        the typical workflow is: find keyword, check top 10 results, write a
        slightly different version of the same article. Claude for marketing can
        do better — if you give it a proper brief.
      </p>

      {/* ── SEO workflow diagram ── */}
      <div className="my-8 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 md:p-6">
        <p className="text-center font-semibold text-slate-800 mb-6 text-lg">
          SEO Content: Brief to Published Draft
        </p>
        <div className="flex flex-col items-center gap-3">
          <div className="w-full max-w-lg rounded-lg border border-teal-200 bg-teal-50 p-4 md:p-5 flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
              1
            </span>
            <div>
              <span className="text-sm font-semibold text-teal-800">
                Keyword Research Input
              </span>
              <p className="text-xs text-teal-600 mt-1">
                Primary keyword, secondary keywords, search intent, SERP analysis
              </p>
            </div>
          </div>
          <div className="h-4 flex items-center justify-center text-slate-400">&darr;</div>
          <div className="w-full max-w-lg rounded-lg border border-teal-200 bg-teal-50 p-4 md:p-5 flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
              2
            </span>
            <div>
              <span className="text-sm font-semibold text-teal-800">
                Content Brief Generation
              </span>
              <p className="text-xs text-teal-600 mt-1">
                Claude creates structured brief with outline, headings, key points
              </p>
            </div>
          </div>
          <div className="h-4 flex items-center justify-center text-slate-400">&darr;</div>
          <div className="w-full max-w-lg rounded-lg border border-teal-200 bg-teal-50 p-4 md:p-5 flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
              3
            </span>
            <div>
              <span className="text-sm font-semibold text-teal-800">
                Section-by-Section Draft
              </span>
              <p className="text-xs text-teal-600 mt-1">
                Write naturally first, optimize for SEO second
              </p>
            </div>
          </div>
          <div className="h-4 flex items-center justify-center text-slate-400">&darr;</div>
          <div className="w-full max-w-lg rounded-lg border border-orange-200 bg-orange-50 p-4 md:p-5 flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
              4
            </span>
            <div>
              <span className="text-sm font-semibold text-orange-800">
                SEO Polish Pass
              </span>
              <p className="text-xs text-orange-600 mt-1">
                Title tag, meta description, heading optimization, internal links
              </p>
            </div>
          </div>
        </div>
      </div>

      <pre className="overflow-x-auto"><code>{`I need to create an SEO-optimized article that ranks well but actually provides value to readers. Help me go from keyword research to a complete, publish-ready draft.

SEO INPUTS:
- Primary keyword: [e.g., "email marketing for small business"]
- Secondary keywords: [e.g., "email marketing tips, best email marketing practices, email list building"]
- Search intent: [Informational / Commercial / Transactional — what is the searcher actually trying to accomplish?]
- Target word count: [e.g., 2,000 words]
- Current top-ranking content: [Briefly describe what the top 3-5 results cover and what they're missing]

MY UNIQUE ANGLE:
- What experience or expertise do I bring that the current top results don't have? [e.g., "I've run email marketing for 50+ small businesses and most advice is written by people who've never managed a list under 10k subscribers"]
- What specific examples, data, or case studies can I include? [List them]
- What's the one thing readers will get from my article that they can't get elsewhere?

CONTENT CONTEXT:
- Brand/Site: [Your site name and what it covers]
- Audience: [Who you're writing for — their experience level with this topic]
- Existing content to link to: [List 3-5 related articles on your site for internal linking]

CREATE:

PART 1: CONTENT BRIEF
- Recommended title tag (under 60 characters, includes primary keyword naturally)
- Meta description (under 155 characters, includes keyword, creates click-worthy preview)
- H2 and H3 heading structure (include keywords naturally in headings — but never force them)
- For each section: key points to cover, target word count, and which keywords to naturally incorporate
- Suggested FAQ section (3-5 questions from "People Also Ask" that we can address)

PART 2: FULL DRAFT
Write the complete article following the brief. Critical guidelines:
- Write for HUMANS first, search engines second. If a sentence sounds awkward because of a keyword, rewrite it.
- Use the primary keyword in: the title, first 100 words, one H2, meta description. That's sufficient — don't stuff it.
- Use secondary keywords where they fit naturally. If they don't fit, don't force them.
- Every section should pass the "would I keep reading?" test. No filler paragraphs.
- Include specific examples, numbers, and actionable advice — not generic statements every competitor also makes.
- Internal link opportunities: suggest where to naturally link to my existing content [reference the list above]
- End with a genuine conclusion that adds value, not a "In conclusion, [keyword] is important" summary.

PART 3: SEO METADATA
- Final title tag
- Final meta description
- Suggested URL slug
- Recommended schema markup type (Article, HowTo, FAQ — which fits best?)
- Alt text suggestions for any images I should include (describe what the image should show)

Important: I'd rather rank position 4 with an article I'm proud of than rank position 1 with generic AI content that makes my brand look bad. Write accordingly.`}</code></pre>

      <h2>Pro tips for better content output with Claude</h2>
      <p>
        After running hundreds of pieces of content through these workflows,
        here are the habits that make the biggest difference:
      </p>

      {/* ── Before/After comparison ── */}
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-slate-50 p-4 sm:p-6 shadow-sm">
          <p className="font-bold text-red-800 mb-4 text-lg">What most people do</p>
          <ul className="text-sm text-red-700 space-y-3 list-none pl-0">
            <li className="flex items-start gap-2"><span className="shrink-0 text-red-400 mt-0.5">&#10007;</span>&quot;Write me a blog post about email marketing&quot;</li>
            <li className="flex items-start gap-2"><span className="shrink-0 text-red-400 mt-0.5">&#10007;</span>Start a new chat every time</li>
            <li className="flex items-start gap-2"><span className="shrink-0 text-red-400 mt-0.5">&#10007;</span>Accept the first draft as final</li>
            <li className="flex items-start gap-2"><span className="shrink-0 text-red-400 mt-0.5">&#10007;</span>No voice samples or style guidance</li>
            <li className="flex items-start gap-2"><span className="shrink-0 text-red-400 mt-0.5">&#10007;</span>One giant prompt, expect one perfect output</li>
          </ul>
        </div>
        <div className="rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-orange-50 p-4 sm:p-6 shadow-sm">
          <p className="font-bold text-green-800 mb-4 text-lg">What works</p>
          <ul className="text-sm text-green-700 space-y-3 list-none pl-0">
            <li className="flex items-start gap-2"><span className="shrink-0 text-green-500 mt-0.5">&#10003;</span>Structured brief with audience, goal, and angle</li>
            <li className="flex items-start gap-2"><span className="shrink-0 text-green-500 mt-0.5">&#10003;</span>Use Projects to maintain context across sessions</li>
            <li className="flex items-start gap-2"><span className="shrink-0 text-green-500 mt-0.5">&#10003;</span>Iterate within the same conversation</li>
            <li className="flex items-start gap-2"><span className="shrink-0 text-green-500 mt-0.5">&#10003;</span>Upload writing samples and set a Custom Style</li>
            <li className="flex items-start gap-2"><span className="shrink-0 text-green-500 mt-0.5">&#10003;</span>Work in stages: outline &rarr; sections &rarr; polish</li>
          </ul>
        </div>
      </div>

      <ol>
        <li>
          <strong>Use the Styles feature.</strong> Go to Claude&apos;s settings,
          create a custom style by uploading 3 samples of your best writing and
          a brief description of your tone. This style persists across all
          conversations and gives Claude a baseline voice to work from without
          you including writing samples in every prompt.
        </li>
        <li>
          <strong>Iterate, don&apos;t restart.</strong> When Claude produces
          something that&apos;s 70% right, don&apos;t open a new chat. Say
          &quot;The structure is good but section 3 is too generic — add a
          specific example from [your experience] and cut it to half the
          length.&quot; Claude improves much faster through conversation than
          through re-prompting from scratch.
        </li>
        <li>
          <strong>Use Artifacts for longer pieces.</strong> When writing anything
          over 500 words, ask Claude to use an Artifact. This gives you a
          separate, editable document pane that you can download, copy, or
          continue editing — much better than working in the chat window.
        </li>
        <li>
          <strong>Split complex pieces into a two-conversation workflow.</strong>{" "}
          Conversation 1: strategy and planning (outline, angle, structure).
          Conversation 2: writing and polishing. This prevents Claude from
          conflating the planning and execution phases.
        </li>
        <li>
          <strong>Give feedback in terms of &quot;more/less,&quot; not
          rewrites.</strong> &quot;Make this section more direct and less
          hedging&quot; works better than rewriting the section yourself and
          asking Claude to match it. Claude is excellent at understanding
          relative adjustments.
        </li>
        <li>
          <strong>Keep a &quot;swipe file&quot; in your Project.</strong> Upload
          examples of content you admire — not just your own work, but pieces
          from other creators whose style you want to incorporate. Name the file
          clearly (&quot;writing-examples-aspirational.txt&quot;) and reference
          it: &quot;Match the energy and pacing of the examples in my swipe
          file, but use my brand voice.&quot;
        </li>
        <li>
          <strong>Front-load your unique knowledge.</strong> Claude can structure,
          write, and polish. What it can&apos;t do is know the specific
          experience, data, and insights that make your content unique. Always
          provide those raw inputs — bullet points, rough notes, specific
          numbers — and let Claude shape them into polished content.
        </li>
      </ol>

      {/* ── Mid-article CTA 3 ── */}
      <div className="my-8 rounded-xl border border-amber-200 bg-amber-50/60 p-4 md:p-6">
        <p className="text-sm text-amber-900">
          These pro tips scratch the surface. Inside the community, members share their best-performing prompts and content systems daily.{" "}
          <a
            href="/skool-redirect"
            className="font-semibold text-orange-600 underline decoration-orange-300 underline-offset-4 hover:text-orange-700 hover:decoration-orange-400 transition-colors"
          >
            Join AItomation Academy for free &rarr;
          </a>
        </p>
      </div>

      <h2>Putting it all together</h2>
      <p>
        The workflows above aren&apos;t theoretical — they&apos;re the exact
        processes that marketers, founders, and consultants use to produce
        a week&apos;s worth of content in a fraction of the time, without
        sacrificing voice or quality. For more on <a href="/blog/how-to-use-claude-for-writing">writing with Claude</a> beyond content marketing, see our dedicated guide.
      </p>
      <p>
        The common thread across all five workflows: don&apos;t treat Claude
        like a vending machine where you insert a one-line prompt and receive
        finished content. Treat it like a skilled collaborator who needs a
        good brief, specific context, and iterative feedback.
      </p>
      <p>
        Set up a Project. Upload your voice documentation. Work in stages. Give
        feedback. That&apos;s the entire system — and it works remarkably well
        once you commit to it. If you want <a href="/blog/5-claude-workflows-for-non-technical-professionals">ready-made workflows</a> for tasks beyond content, we have those too.
      </p>
      <p>
        Inside AItomation Academy, we walk through these workflows live —
        building real content systems with Claude Projects, Custom Styles, and
        the prompt templates above. Not generic AI advice, but hands-on
        workflows for the content you actually need to produce.
      </p>
      <p>
        <a
          href="/skool-redirect"
          className="inline-block mt-2 font-semibold text-orange-600 underline decoration-orange-300 underline-offset-4 hover:text-orange-700 hover:decoration-orange-400 transition-colors"
        >
          Join AItomation Academy and build your Claude content system &rarr;
        </a>
      </p>
    </>
  ),
};
