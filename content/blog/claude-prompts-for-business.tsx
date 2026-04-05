import type { BlogPost } from "@/lib/blog";

export const post: BlogPost = {
  slug: "claude-prompts-for-business",
  title: "Claude Prompts for Business: 15 Copy-Paste Templates That Actually Work",
  description:
    "Skip the generic prompt dumps. These 15 Claude prompts are built for real business work — research, writing, strategy, and operations. Copy, paste, customize.",
  publishedAt: "2026-04-05",
  author: "Marko Sudar",
  category: "Claude Prompts",
  tags: [
    "Claude",
    "prompts",
    "business",
    "templates",
    "productivity",
    "non-technical",
    "workflows",
  ],
  body: (
    <>
      <p>
        Most "Claude prompt" lists give you surface-level templates like "write me an email" or "summarize this article." You paste them in, get a generic response, and wonder what the hype is about.
      </p>
      <p>
        The problem isn't Claude. It's that shallow prompts produce shallow output. Claude is one of the most capable AI models available — but it needs real context, a clear job description, and constraints to produce work you'd actually use.
      </p>
      <p>
        These 15 prompts are different. Each one is long on purpose. They include the context framing, role definition, constraints, and output structure that make Claude produce genuinely useful business output. They're built for consultants, marketers, founders, freelancers, and operators who do real work — not people who want to demo AI at a dinner party.
      </p>
      <p>
        Copy any prompt below, replace the bracketed sections with your specifics, and paste it into Claude.
      </p>

      <h2>How to get the most out of these prompts</h2>
      <p>
        Before you dive in, a few principles that make these work:
      </p>
      <ul>
        <li><strong>Replace every bracket.</strong> The bracketed sections are where you add your real context. The more specific you are, the better Claude's output. "Marketing consultant" is fine. "B2B SaaS marketing consultant who works with Series A startups in fintech" is 10x better.</li>
        <li><strong>Use Claude Projects.</strong> If you're going to use a prompt repeatedly, create a Claude Project and paste the prompt into the Project Instructions. Upload relevant files (brand guides, past work, client briefs). Claude will remember this context across every conversation in that project — you won't need to repeat yourself.</li>
        <li><strong>Iterate, don't restart.</strong> After Claude gives you a first response, don't start a new chat. Tell it what to change: "Make section 2 more specific to our fintech audience" or "Cut the length in half and make the tone more direct." Claude improves dramatically through conversation.</li>
        <li><strong>Use extended thinking for complex prompts.</strong> For the strategy and analysis prompts below, toggle on extended thinking in Claude's settings. This makes Claude reason through the problem step by step before responding, which produces significantly better strategic output.</li>
      </ul>

      <h2>1. Deep market research brief</h2>
      <p>
        Most people ask Claude to "research a market" and get a Wikipedia-level overview. This prompt forces Claude to think like an actual research analyst.
      </p>
      <pre className="overflow-x-auto"><code>{`I need you to act as a senior market research analyst preparing a brief for a business leader who needs to make real decisions based on this research.

COMPANY CONTEXT:
- Company: [Your company name and what you do]
- Stage: [Startup / growing / established]
- Current revenue range: [Approximate range]
- Target customer: [Who you sell to — be specific about company size, industry, role of buyer]

RESEARCH TASK:
Analyze the market for [specific product/service category] with a focus on:

1. MARKET STRUCTURE
- Who are the top 5-7 players and what is each one's actual positioning? Don't just list them — explain what makes each one's approach different and who they win with.
- Where are the gaps? What customer segments or use cases are underserved?
- What pricing models dominate and why?

2. BUYER BEHAVIOR
- What triggers the buying decision for [your target customer]? What pain gets bad enough that they actually start looking?
- What does their evaluation process look like? Who else is involved in the decision?
- What objections come up most often and how do winning competitors handle them?

3. TRENDS WITH TEETH
- What are 3-4 trends that are actually changing how buyers behave (not just trends that sound impressive in a slide deck)?
- For each trend, explain: what's driving it, who benefits, who's threatened, and what the timeline looks like.

4. STRATEGIC IMPLICATIONS FOR US
- Given our positioning and stage, where should we focus?
- What are 2-3 moves we could make in the next 6 months that would give us an unfair advantage?
- What should we explicitly NOT pursue and why?

FORMAT: Write this as a structured brief with clear headers. Use specific examples and data points where possible. When you're uncertain about a data point, say so rather than guessing. I'd rather have honest uncertainty than false precision.

LENGTH: Comprehensive but scannable — a senior leader should be able to read this in 15 minutes and walk away with clear next steps.`}</code></pre>

      <h2>2. Competitive positioning analysis</h2>
      <p>
        This prompt doesn't just list competitors — it maps out the strategic landscape so you can find your actual differentiation.
      </p>
      <pre className="overflow-x-auto"><code>{`You are a positioning strategist helping me find our competitive advantage.

MY BUSINESS:
- We are: [What you do, for whom, and how]
- Our best customers are: [Describe your ideal customer — industry, size, pain point, buying trigger]
- Our current positioning: [How you describe yourself today]
- What we're actually best at: [The thing your happiest customers praise most]

COMPETITORS TO ANALYZE:
[List 4-6 competitors with their websites]

For each competitor, analyze:

1. POSITIONING: What is their core promise? Who is their ideal customer? What's the emotional hook they use?

2. PRICING STRATEGY: What do they charge and how? (Per seat, flat rate, usage-based, etc.) What does this tell us about who they're optimized for?

3. CONTENT & MESSAGING: What topics do they create content about? What language and tone do they use? What does this reveal about how they see the market?

4. STRENGTHS I SHOULD RESPECT: What are they genuinely good at that I shouldn't try to out-compete?

5. WEAKNESSES I CAN EXPLOIT: Where do they underserve customers? What complaints or gaps exist?

THEN, SYNTHESIZE:
- Draw a 2x2 positioning map with axes that actually matter for our market (suggest the axes based on your analysis)
- Identify 2-3 positioning angles we could own that no competitor currently dominates
- For each angle, explain: what it would look like in practice, who it would attract, and what we'd need to be true about our product/service to credibly claim it
- Recommend which angle is strongest given our actual strengths

Be direct. I don't need diplomatic language — I need honest strategic analysis.`}</code></pre>

      <h2>3. Client proposal draft from raw notes</h2>
      <p>
        You had a discovery call, scribbled some notes, and now you need to turn that into a proposal that wins the deal. This prompt handles the transformation.
      </p>
      <pre className="overflow-x-auto"><code>{`I need you to turn my raw discovery call notes into a professional client proposal. Do NOT write a generic proposal template — build this specifically from the details I give you.

MY BUSINESS:
- I am a [your role/title] at [your company]
- We provide [your service/product]
- Our typical engagement looks like: [brief description of how you work with clients]

CLIENT CONTEXT (from my discovery call notes):
[Paste your raw notes here — bullet points, fragments, whatever you have. Include: who you talked to, their role, what they said their problems were, what they've tried before, their timeline, their budget range if mentioned, and any specific things they reacted positively to]

PROPOSAL STRUCTURE:
Write a proposal with these sections:

1. EXECUTIVE SUMMARY (3-4 sentences max)
- Mirror back their problem in their own language
- State the outcome we'll deliver
- Give a confident but not arrogant tone

2. SITUATION ANALYSIS
- Show that we understood their current state and challenges
- Reference specific things they mentioned (this proves we listened)
- Frame the cost of inaction — what happens if they don't solve this

3. PROPOSED APPROACH
- Break our solution into clear phases or workstreams
- For each phase: what we'll do, what they'll need to provide, what the deliverable is, and the timeline
- Be specific enough that they can picture the work happening

4. INVESTMENT
- Present pricing with clear scope
- If there are options/tiers, present 2-3 with clear differences
- Include what's NOT included to prevent scope creep

5. WHY US
- 2-3 specific reasons we're the right fit for THIS client (not generic credentials)
- If possible, reference similar work or results

6. NEXT STEPS
- Make it dead simple — one clear action to move forward

TONE: Professional but warm. Confident but not salesy. Write like a trusted advisor, not a vendor. Match the formality level of the client based on what I described about them.`}</code></pre>

      <h2>4. Weekly content strategy from one core idea</h2>
      <p>
        One insight, repurposed into a full week of content across channels. Not "write 5 LinkedIn posts" — a real content system.
      </p>
      <pre className="overflow-x-auto"><code>{`I want you to act as my content strategist and take one core idea and turn it into a full week of content across multiple channels.

MY CONTEXT:
- I'm a [your role] in [your industry]
- My audience is: [who follows you and what they care about]
- My brand voice is: [describe your tone — e.g., "direct and practical, uses real examples, avoids buzzwords, occasionally uses humor"]
- Channels I post on: [e.g., LinkedIn, newsletter, Twitter/X, Instagram]

THIS WEEK'S CORE IDEA:
[Describe the insight, lesson, observation, or opinion you want to build content around this week. Be specific — not "AI is changing business" but "I used Claude to rewrite our entire onboarding sequence in 2 hours and our completion rate went from 34% to 61%"]

CREATE A CONTENT PLAN:

MONDAY — LinkedIn post (thought leadership)
- Hook that stops the scroll (first line must create curiosity or tension)
- The insight or contrarian take
- A specific example or proof point
- A question or CTA that drives comments
- 150-200 words max

TUESDAY — Twitter/X thread (5-7 tweets)
- Tweet 1: Bold claim or surprising result
- Tweets 2-5: The breakdown — how, why, what happened
- Tweet 6: The lesson or framework
- Tweet 7: CTA to follow or reply
- Each tweet must stand alone AND flow as a thread

WEDNESDAY — Newsletter section (education)
- Take the same idea and go deeper
- Add context the social posts couldn't fit
- Include a "try this yourself" section with specific steps
- 400-600 words

THURSDAY — LinkedIn post (story format)
- Tell the same idea as a personal narrative
- Before/after structure
- Vulnerability or honest mistake included
- End with the takeaway
- 150-250 words

FRIDAY — Instagram carousel outline (8-10 slides)
- Slide 1: Hook headline (big text, no clutter)
- Slides 2-8: One point per slide with a short explanation
- Slide 9: Summary or key takeaway
- Slide 10: CTA (follow, save, share, link in bio)
- For each slide, write the headline text AND the supporting caption text

Make sure each piece feels native to its platform. A LinkedIn post should not read like a tweet thread. An Instagram carousel should not read like a blog post. Same idea, different execution.`}</code></pre>

      <h2>5. Meeting notes to action items pipeline</h2>
      <p>
        You sat through a 45-minute call and now you have a wall of transcript text. This prompt extracts everything that matters.
      </p>
      <pre className="overflow-x-auto"><code>{`I'm going to paste a meeting transcript (or my rough notes from a meeting). I need you to process this into a structured action document.

MEETING CONTEXT:
- Meeting type: [e.g., client kickoff, internal strategy, sales discovery, team standup]
- Attendees: [List who was there and their roles]
- My role: [Your role — this affects what action items are yours vs. others']

TRANSCRIPT/NOTES:
[Paste your transcript, notes, or even voice memo text here]

PROCESS THIS INTO:

1. EXECUTIVE SUMMARY (4-6 sentences)
- What was this meeting about and what was decided?
- A busy executive who wasn't in the meeting should understand the outcome after reading this.

2. KEY DECISIONS MADE
- List every decision that was explicitly agreed upon
- For each: what was decided, who proposed it, and any conditions or caveats

3. ACTION ITEMS TABLE
Format as a table with columns:
| Action Item | Owner | Deadline | Dependencies | Priority |

- Extract EVERY commitment anyone made, even casual ones ("I'll send that over")
- If no deadline was stated, flag it as "TBD — needs follow-up"
- Assign priority: Critical (blocks other work), High (this week), Medium (next 2 weeks), Low (when possible)

4. OPEN QUESTIONS
- Things that were raised but not resolved
- For each: what the question is, who needs to answer it, and what's blocked until it's answered

5. FOLLOW-UP EMAIL DRAFT
- Write a brief email I can send to attendees summarizing the meeting
- Professional tone, scannable format
- Include: what we discussed, what we decided, action items with owners, and next meeting date if mentioned

6. RISKS OR CONCERNS I SHOULD WATCH
- Anything that sounded like a potential problem, disagreement, or misalignment
- Things that were said diplomatically but might be red flags`}</code></pre>

      <div className="not-prose my-8 rounded-lg bg-orange-50 border border-orange-200 p-4 sm:p-5">
        <p className="text-sm sm:text-base text-slate-700 mb-2">
          These prompts are just the start. <strong>400+ professionals</strong> share their best Claude workflows in our free community.
        </p>
        <a
          href="/skool-redirect"
          className="inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors no-underline hover:underline"
        >
          Join the free AItomation Academy community &rarr;
        </a>
      </div>

      <h2>6. SOW/scope document from vague client request</h2>
      <p>
        Client says "we need help with our marketing" — you need to turn that into a scope of work that protects both sides.
      </p>
      <pre className="overflow-x-auto"><code>{`I need you to help me draft a scope of work (SOW) document based on a vague or informal client request. The goal is to create a clear, professional scope that protects both parties and prevents scope creep.

MY BUSINESS:
- I provide: [your service — e.g., marketing strategy consulting, brand design, content production]
- My typical project duration: [e.g., 4-8 weeks]
- My pricing model: [e.g., project-based, retainer, hourly]

CLIENT'S REQUEST (in their words):
[Paste the email, message, or your notes from the conversation. Include everything they said, even if it's vague or contradictory]

CREATE A SCOPE OF WORK WITH:

1. PROJECT OVERVIEW
- Translate their vague request into a clear problem statement
- Define the objective in measurable terms where possible

2. SCOPE — IN AND OUT
- IN SCOPE: Exactly what's included, broken into specific deliverables
- OUT OF SCOPE: What is explicitly NOT included (be specific — this is where scope creep happens)
- ASSUMPTIONS: What must be true for this scope to hold (e.g., "client provides brand assets within 5 business days of kickoff")

3. DELIVERABLES TABLE
| Deliverable | Description | Format | Delivery Date |

4. TIMELINE
- Break the project into phases with milestones
- Include client review/approval points (these are often what delays projects)
- Build in buffer where you know clients typically slow down

5. INVESTMENT
- Pricing broken down by phase or deliverable
- Payment schedule (e.g., 50% upfront, 50% on completion)
- What triggers additional charges (revisions beyond X rounds, scope additions, etc.)

6. CHANGE ORDER PROCESS
- How scope changes get handled
- What requires a formal change order vs. what's absorbed

Write this in professional but plain language. No legal jargon — a non-lawyer client should read this and feel clear and comfortable, not intimidated.`}</code></pre>

      <h2>7. Customer interview analysis</h2>
      <p>
        You've done 5 customer interviews. Now you need to find the patterns that actually matter for product and marketing decisions.
      </p>
      <pre className="overflow-x-auto"><code>{`I've conducted customer interviews and I need you to analyze them for patterns that will inform our product development and marketing strategy.

BUSINESS CONTEXT:
- Product/service: [What you sell]
- Target market: [Who it's for]
- Current stage: [e.g., validating a new feature, trying to reduce churn, exploring a new market segment]
- Key question we're trying to answer: [The strategic question these interviews should help answer]

INTERVIEW TRANSCRIPTS/NOTES:
[Paste all your interview notes. Label each one with the person's role/context, e.g., "Interview 1: Marketing director at 50-person SaaS company, customer for 8 months"]

ANALYZE FOR:

1. JOBS TO BE DONE
- What are the actual jobs customers are hiring our product to do?
- Not feature requests — the underlying outcomes they're trying to achieve
- Rank by frequency (how many interviewees mentioned this) and intensity (how much they care)

2. PAIN POINTS (verbatim where possible)
- What frustrations did multiple people mention?
- Quote the exact words they used — these become marketing copy
- Separate: pains with our product vs. pains with alternatives vs. pains with doing nothing

3. UNEXPECTED INSIGHTS
- What surprised you? What did someone say that contradicts our assumptions?
- Any use cases we didn't design for but customers discovered?

4. LANGUAGE PATTERNS
- How do customers describe what we do in their own words? (These become headline candidates)
- What words do they use repeatedly?
- How do they describe the before/after of using our product?

5. SEGMENTATION SIGNALS
- Are there distinct groups of customers with different needs?
- What attributes predict whether someone gets high value from us?

6. STRATEGIC RECOMMENDATIONS
- Based on this analysis, what 3 things should we do in the next 30 days?
- What should we stop doing or de-prioritize?
- What messaging changes would better match how customers actually think about us?

Be direct in your analysis. If the data is inconclusive, say so. If only one person said something, don't present it as a pattern.`}</code></pre>

      <h2>8. Standard operating procedure (SOP) builder</h2>
      <p>
        You have a process in your head that you need to document so someone else (or future you) can follow it without asking questions.
      </p>
      <pre className="overflow-x-auto"><code>{`I need you to help me create a standard operating procedure (SOP) document. I'm going to describe a process I currently do, and I need you to turn it into a document that someone with no context could follow successfully.

PROCESS CONTEXT:
- Process name: [e.g., "Client onboarding", "Monthly reporting", "Content publication"]
- Who will follow this SOP: [e.g., new hire, virtual assistant, team member in another department]
- Their skill level: [What can you assume they already know?]
- Tools involved: [List the software/tools used in this process]
- Frequency: [How often is this done?]

MY DESCRIPTION OF THE PROCESS:
[Describe the process in whatever level of detail you have — stream of consciousness is fine. Include: what triggers it, what steps you take, what decisions you make along the way, common mistakes, and what "done" looks like]

CREATE AN SOP WITH:

1. PURPOSE
- Why this process exists
- What outcome it produces
- When it should be triggered

2. BEFORE YOU START (prerequisites)
- Access/permissions needed
- Information you need to gather first
- Tools that should be set up

3. STEP-BY-STEP PROCEDURE
- Numbered steps with clear actions (each step = one action)
- For decision points: "IF [condition], do [A]. IF [other condition], do [B]."
- Screenshots placeholders where they'd be helpful: [SCREENSHOT: description of what to capture]
- Time estimates for each major section

4. QUALITY CHECKLIST
- What to verify before marking the process as complete
- Common mistakes and how to avoid them

5. TROUBLESHOOTING
- "If X happens, do Y"
- When to escalate and to whom
- Known edge cases

6. REVISION LOG
- Version: 1.0
- Created: [today's date]
- Created by: [your name]
- Last updated: [today's date]

Write at the level of a smart person who is doing this for the first time. Don't assume they'll figure out ambiguous steps — spell everything out. Better too detailed than too vague.`}</code></pre>

      <h2>9. Pricing strategy analysis</h2>
      <p>
        Not "how should I price this" — a structured analysis that considers your market, positioning, costs, and psychology.
      </p>
      <pre className="overflow-x-auto"><code>{`I need help analyzing and refining my pricing strategy. Don't give me generic pricing advice — analyze my specific situation.

MY BUSINESS:
- What I sell: [Product or service — be specific]
- Current pricing: [What you charge now, including any tiers or packages]
- How long I've had this pricing: [When you last changed it]
- Target customer: [Who buys this — their role, company size, budget authority]
- Average deal size: [Current average revenue per customer]
- Sales cycle: [How long from first contact to purchase]
- Biggest competitor's pricing: [What you know about competitor pricing]

MY CONCERNS:
[What's bothering you about your current pricing? E.g., "I think I'm underpriced but I'm afraid to raise prices," or "I'm losing deals to cheaper competitors," or "My pricing doesn't match the value we actually deliver"]

ANALYZE:

1. VALUE ASSESSMENT
- Based on what I've described, what is the likely economic value I create for my customer? (Cost savings, revenue increase, time saved, risk reduced)
- How does my current price compare to this value? What's the rough value-to-price ratio?

2. PRICING MODEL ANALYSIS
- Is my current pricing model (per project, retainer, per seat, etc.) the right one for this market?
- What are the pros and cons of my current model?
- What alternative models should I consider and why?

3. TIER/PACKAGE STRUCTURE
- If I offer tiers: are they differentiated on the right dimensions? Does each tier have a clear "this is for you if..." identity?
- If I don't offer tiers: should I? What would a good tier structure look like?

4. PSYCHOLOGICAL PRICING FACTORS
- Am I anchoring correctly? What should the first price a prospect sees be?
- Is there a decoy or contrast effect I could use?
- Am I making the price feel proportional to the outcome?

5. COMPETITIVE POSITIONING
- Am I priced to compete or priced to differentiate?
- What does my price signal about quality and positioning?

6. RECOMMENDED CHANGES
- What specific changes would you make to my pricing?
- How would you implement these changes? (Grandfather existing customers? Phase in? Change immediately?)
- What should I test first?
- What's the risk of each recommendation?

Be specific with numbers and percentages where possible. I can handle honest feedback — if my pricing is broken, tell me directly.`}</code></pre>

      <h2>10. Email sequence strategy for new leads</h2>
      <p>
        Not "write me a welcome email." A full strategic sequence that nurtures new leads from signup to purchase decision.
      </p>
      <pre className="overflow-x-auto"><code>{`I need you to design a complete email nurture sequence for new leads. This is a strategy document AND draft copy — I want both the thinking and the execution.

BUSINESS CONTEXT:
- Business: [What you do and for whom]
- Lead source: [How people get on this list — e.g., downloaded a lead magnet, signed up for free trial, joined a webinar]
- What they received: [What the lead magnet or entry point was]
- What I want them to do eventually: [The conversion goal — e.g., book a call, buy a course, upgrade to paid]
- Typical time from lead to customer: [How long does this usually take?]
- My brand voice: [How you communicate — e.g., "casual and direct, like talking to a smart friend"]

DESIGN A SEQUENCE:

For each email, provide:
- SEND TIMING: When this email goes out (e.g., Day 0, Day 2, Day 5)
- STRATEGIC PURPOSE: Why this email exists in the sequence (not just "to follow up")
- SUBJECT LINE: 3 options ranked by predicted open rate
- PREVIEW TEXT: The snippet that shows after the subject line
- FULL EMAIL COPY: Written in my brand voice, ready to paste into my email tool
- CTA: What exactly am I asking them to do?

THE SEQUENCE:

Email 1 (Day 0): DELIVERY + FIRST IMPRESSION
- Deliver what they signed up for
- Set expectations for what's coming
- Plant the seed for the transformation you offer

Email 2 (Day 2): QUICK WIN
- Give them an immediate, tangible result they can get in under 10 minutes
- Build trust by proving you actually help, not just sell

Email 3 (Day 4): STORY + CREDIBILITY
- Share a specific customer transformation story
- Make it relatable to their situation
- Subtly introduce your product/service as the mechanism

Email 4 (Day 7): TEACH SOMETHING VALUABLE
- Your best thinking on a topic they care about
- Position yourself as the expert without being self-promotional
- End with a bridge to your offer

Email 5 (Day 10): OBJECTION HANDLING
- Address the #1 reason people don't buy
- Use social proof, logic, or reframing
- Soft CTA

Email 6 (Day 14): DIRECT OFFER
- Clear, confident pitch
- Restate the transformation
- Create urgency without being manipulative
- Strong CTA with specific next step

Email 7 (Day 18): LAST CHANCE / DIFFERENT ANGLE
- For people who didn't convert
- Try a completely different angle or hook
- Lower-commitment CTA option (reply to this email, watch a video, etc.)

After you write the sequence, add a section called "SEQUENCE STRATEGY NOTES" explaining:
- The psychological arc of the sequence
- Where to expect the most unsubscribes and why that's okay
- How to A/B test the most important elements
- When to move non-converters to a different sequence`}</code></pre>

      <div className="not-prose my-8 rounded-lg bg-orange-50 border border-orange-200 p-4 sm:p-5">
        <p className="text-sm sm:text-base text-slate-700 mb-2">
          Want more templates like these? Our community members share prompt libraries, workflows, and real results every day.
        </p>
        <a
          href="/skool-redirect"
          className="inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors no-underline hover:underline"
        >
          Join the free AItomation Academy community &rarr;
        </a>
      </div>

      <h2>11. Quarterly business review preparation</h2>
      <p>
        Turn your scattered data and gut feelings into a structured QBR that makes you look like the most prepared person in the room.
      </p>
      <pre className="overflow-x-auto"><code>{`Help me prepare a quarterly business review (QBR) document. I'll give you the raw data and context — you turn it into a structured, insight-driven review.

BUSINESS CONTEXT:
- Business/department: [What you run or manage]
- Reporting period: [e.g., Q1 2026]
- Audience for this QBR: [Who will read/see this — e.g., CEO, board, leadership team, client]
- Tone needed: [e.g., "confident but honest", "board-level polish", "casual team update"]

RAW DATA AND OBSERVATIONS:
[Dump everything here — revenue numbers, customer metrics, project updates, wins, losses, things you're worried about, team changes, market observations, competitor moves. Don't organize it — just dump it]

GOALS FROM LAST QUARTER:
[List what you set out to achieve last quarter]

CREATE A QBR WITH:

1. EXECUTIVE SUMMARY (5-6 sentences)
- Headline result for the quarter
- What went well, what didn't, what changed
- A senior leader should get 80% of the story from this paragraph

2. SCORECARD
- Table format: Goal | Target | Actual | Status (🟢 🟡 🔴) | Commentary
- For each goal, a one-line explanation of why we hit or missed

3. WINS (top 3-5)
- What happened, why it matters, and what we can learn from it
- Quantify where possible

4. MISSES AND LEARNINGS (top 3-5)
- Honest assessment — not excuses, but root cause analysis
- What we're doing differently as a result

5. KEY INITIATIVES UPDATE
- Status of major projects/initiatives
- What shipped, what's in progress, what's blocked

6. NEXT QUARTER PRIORITIES
- Top 3-5 priorities with clear success criteria
- Why these priorities over other options
- Key risks and mitigation plans

7. RESOURCE/SUPPORT NEEDS
- What I need from leadership to execute on next quarter
- Any decisions I need made

Format this for a presentation — use clear headers, bullet points, and data callouts. It should look like something you'd walk through in a 30-minute meeting.`}</code></pre>

      <h2>12. Competitor content gap analysis</h2>
      <p>
        Find the content your competitors haven't created yet — and build it before they do.
      </p>
      <pre className="overflow-x-auto"><code>{`I need you to analyze my competitors' content strategies and identify gaps I can exploit.

MY BUSINESS:
- I'm a [your role] at [your company]
- We serve: [your target audience]
- Our content channels: [blog, newsletter, LinkedIn, YouTube, etc.]
- Our content goal: [e.g., "drive organic traffic that converts to email signups", "build authority in our niche"]

COMPETITORS TO ANALYZE:
[List 3-5 competitors with their blog/content URLs]

For each competitor, analyze their content strategy:

1. CONTENT INVENTORY
- What topics do they cover most frequently?
- What content formats do they use? (how-to guides, listicles, case studies, comparisons, etc.)
- How often do they publish?
- What appears to perform best? (Use signals like social shares, comments, or if they promote it repeatedly)

2. WHAT THEY'RE DOING WELL
- Which content pieces are genuinely good?
- What content angles or formats are smart?
- What should I learn from their approach?

3. WHAT THEY'RE MISSING
- What questions does their audience have that they never answer?
- What topics do they cover superficially that deserve depth?
- What audience segments do they ignore?
- What content formats have they never tried?

THEN SYNTHESIZE:

4. GAP MAP
- Table format: Topic/Question | Competitor A | Competitor B | Competitor C | Our Opportunity
- Mark each cell: ✅ (covered well), 🟡 (covered poorly), ❌ (not covered)
- Sort by opportunity size

5. CONTENT PLAYS
- Recommend 10 specific pieces of content I should create
- For each: title, target keyword if relevant, format, why it wins, and which gap it fills
- Prioritize by: ease of creation × potential impact

6. STRATEGIC POSITIONING
- How should our content voice differ from competitors?
- What can we claim as our territory?
- What's one content series or format that would be uniquely ours?`}</code></pre>

      <h2>13. Sales call preparation brief</h2>
      <p>
        Walk into every sales call knowing exactly what to say, what to ask, and what objections to expect.
      </p>
      <pre className="overflow-x-auto"><code>{`I have a sales call coming up and I need to prepare. Help me create a comprehensive pre-call brief.

MY BUSINESS:
- I sell: [What you sell — product or service]
- Typical deal size: [Average contract value]
- Our ideal customer profile: [Who we're best for]
- Our main value proposition: [The transformation you deliver]

PROSPECT INFORMATION:
- Company: [Name and what they do]
- Website: [URL]
- Contact: [Name, title, role]
- How they found us: [Referral, inbound, cold outreach, etc.]
- What I know so far: [Any prior emails, form submissions, or context about why they're talking to you]
- Industry: [Their industry and any relevant trends]

CREATE A PRE-CALL BRIEF:

1. COMPANY SNAPSHOT
- What does this company actually do? (In plain language, not their marketing jargon)
- What stage are they at? (Startup, growth, enterprise)
- What challenges is their industry facing right now?
- Recent news or changes? (Funding, leadership changes, product launches, layoffs)

2. PROBABLE PAIN POINTS
- Based on their company type and role, what 3-5 problems are they most likely experiencing that we solve?
- For each: the pain, why it's probably urgent now, and how we specifically address it

3. CALL STRATEGY
- Recommended opening: How to start the conversation (not "tell me about your business" — something more engaging)
- Discovery questions: 8-10 questions ranked by importance, designed to uncover their real pain, timeline, budget, and decision process
- Listening triggers: What phrases should I listen for that signal they're a great fit vs. a poor fit?

4. OBJECTION PREPARATION
- Top 5 objections this type of prospect raises
- For each: the objection, what it really means, and the best response framework

5. COMPETITIVE INTELLIGENCE
- If they're evaluating alternatives, what are they likely considering?
- How should I position against each without badmouthing?
- Our genuine advantages with this type of buyer

6. CLOSE STRATEGY
- What's the ideal next step after this call?
- What should I propose at the end of the call?
- What commitment should I try to get before hanging up?`}</code></pre>

      <h2>14. Process audit and improvement</h2>
      <p>
        You know something in your business is inefficient but you can't pinpoint where the waste is. This prompt finds it.
      </p>
      <pre className="overflow-x-auto"><code>{`I want you to audit one of my business processes and identify where I'm wasting time, creating unnecessary steps, or missing opportunities for improvement.

PROCESS TO AUDIT:
- Process name: [e.g., "How we handle inbound leads", "Our content production pipeline", "Client offboarding"]
- How long this process has existed: [When it was created or last revised]
- Who's involved: [List every person or role that touches this process]
- How often it runs: [Daily, weekly, per client, etc.]

CURRENT PROCESS (describe honestly, including the messy parts):
[Walk through every step of the process as it actually happens — not how it should happen in theory. Include: manual steps, tools used, handoff points, where things get stuck, where errors happen, how long each step takes, and any workarounds people have created]

KNOWN PAIN POINTS:
[What you already know is broken or annoying about this process]

AUDIT THIS PROCESS FOR:

1. WASTE IDENTIFICATION
- Which steps add no value to the end result?
- Where are there unnecessary handoffs or approvals?
- Where is the same information entered or communicated more than once?
- What's done manually that could be templated, automated, or eliminated?

2. BOTTLENECK ANALYSIS
- Where does work pile up or get stuck?
- Which person or step is the constraint?
- What happens when that constraint is unavailable?

3. ERROR-PRONE AREAS
- Where do mistakes happen most?
- What's the cost of those mistakes? (Time to fix, customer impact, revenue impact)
- What causes the errors? (Unclear instructions, missing information, tool limitations, human fatigue)

4. RECOMMENDED IMPROVEMENTS
For each recommendation:
- What to change
- Why it matters (time saved, errors reduced, etc.)
- How hard it is to implement (Easy / Medium / Hard)
- Expected impact (Low / Medium / High)
- Priority order (implement in this sequence)

5. QUICK WINS (implement this week)
- 3-5 changes that require minimal effort but produce immediate improvement

6. BIGGER MOVES (implement this quarter)
- Structural changes that would fundamentally improve this process
- What it would take to implement each one

Be ruthless in your analysis. I don't want validation that my process is fine — I want to see every inefficiency, even the small ones.`}</code></pre>

      <h2>15. Annual planning framework</h2>
      <p>
        Turn your big ambitions and scattered priorities into a structured annual plan with quarterly milestones.
      </p>
      <pre className="overflow-x-auto"><code>{`I need help creating a structured annual plan for my business. I have a lot of ideas and priorities swirling around — help me organize them into a clear plan with real accountability structure.

BUSINESS CONTEXT:
- Business: [What you do]
- Current annual revenue: [Approximate]
- Team size: [Number of people]
- Revenue target for next year: [What you're aiming for]
- Business model: [How you make money — e.g., services, products, subscriptions, a mix]

WHERE I AM NOW:
[Describe your current state honestly — what's working, what's not, what's at capacity, what's underperforming, what you're excited about, what you're dreading]

MY IDEAS AND PRIORITIES (unfiltered):
[List everything you're considering for the year — new products, markets, hires, marketing campaigns, operational changes, partnerships, skill development. Don't filter — just dump it all]

CONSTRAINTS:
- Budget available for growth: [Approximate]
- My time: [How many hours/week can I dedicate to growth vs. delivery?]
- Team bandwidth: [Who has capacity and for what?]
- Non-negotiables: [Things that must continue regardless — e.g., existing client commitments]

CREATE AN ANNUAL PLAN:

1. STRATEGIC FOCUS AREAS (max 3)
- Given everything above, what are the 3 areas that will have the most impact?
- Why these 3 and not others?
- What am I explicitly saying no to, and why?

2. ANNUAL GOALS
- For each focus area: 1-2 specific, measurable goals
- Each goal needs: a metric, a target number, and a deadline
- Total annual goals should be 4-6 max (more = less focus)

3. QUARTERLY BREAKDOWN

Q1: [Quarter dates]
- Theme: [One word or phrase for what this quarter is about]
- Key initiatives (2-3 max)
- Milestones: What's true by the end of this quarter if things go well?
- Resource allocation: Who works on what?

Q2: [Quarter dates]
[Same structure]

Q3: [Quarter dates]
[Same structure]

Q4: [Quarter dates]
[Same structure]

4. RISK ASSESSMENT
- Top 3 risks to this plan
- For each: likelihood, impact, and mitigation strategy

5. DECISION POINTS
- What decisions need to be made and by when?
- What information do I need to make each decision?
- What triggers a plan change?

6. WEEKLY/MONTHLY RHYTHM
- What should I review weekly to stay on track?
- What should I review monthly?
- What's my "check-in with myself" framework to prevent drift?

Be opinionated about priorities. If I listed 20 ideas but only 3 matter, tell me which 3 and why the rest should wait. I need a plan that's ambitious but achievable — not a wish list.`}</code></pre>

      <h2>How to use these prompts as a system</h2>
      <p>
        These prompts are most powerful when you don't treat them as one-offs. Here's how to build a system:
      </p>
      <ol>
        <li><strong>Create a Claude Project for each area of your business.</strong> One for sales, one for marketing, one for operations, one for client work. Add the relevant prompts to each project's instructions.</li>
        <li><strong>Upload your context once.</strong> Your brand guide, pricing sheet, past proposals, customer research — upload these as project files. Claude will reference them automatically.</li>
        <li><strong>Save your best outputs.</strong> When Claude produces something great, save it as an artifact or download it. Next time, you can reference it: "Write another proposal in the same style as the Acme Corp proposal we did last month."</li>
        <li><strong>Iterate and customize.</strong> These prompts are starting points. After using each one 2-3 times, you'll know what to add or remove for your specific business. Edit the prompt in your Project Instructions to make it yours.</li>
      </ol>
      <p>
        The goal isn't to have Claude do your thinking. It's to have Claude do the structured work so you can focus on the thinking that actually matters — strategy, relationships, and decisions that require your judgment.
      </p>
    </>
  ),
};
