import type { BlogPost } from "@/lib/blog";

export const post: BlogPost = {
  slug: "claude-prompting-guide",
  title: "Claude Prompting Guide for Professionals",
  description: "The 5 elements of great Claude prompts, before/after examples, and the prompt improver technique. Built for business professionals.",
  publishedAt: "2026-04-05",
  author: "Marko Sudar",
  category: "Claude Guides",
  tags: [
    "Claude",
    "prompting",
    "prompt engineering",
    "claude prompting guide",
    "claude prompt improver",
    "non-technical",
    "business",
    "productivity",
  ],
  body: (
    <>
      <p>
        You open Claude, type a question, get a response that&apos;s fine but
        not great, and move on. Sound familiar? Most professionals use Claude
        the same way they use a search engine &mdash; one quick question, one
        generic answer. And then they wonder why people keep calling it a
        game-changer.
      </p>
      <p>
        The difference between a generic Claude response and one that saves you
        two hours of real work comes down to how you prompt it. Not
        &quot;prompt engineering&quot; in the technical sense &mdash; you
        don&apos;t need to learn special syntax or memorize formulas. You just
        need to understand how to communicate what you actually want.
      </p>
      <p>
        This claude prompting guide is built for consultants, marketers,
        founders, project managers, and operators who want better output from
        Claude without becoming prompt engineers. Every technique below uses
        plain English and comes with real examples you can adapt to your own
        work. (If you want ready-to-go templates instead of building your own, jump straight to our <a href="/blog/claude-prompts-for-business">15 copy-paste business prompts</a>.)
      </p>

      <h2>Why prompting matters more than people think</h2>
      <p>
        When someone says &quot;Claude gave me a useless answer,&quot; the
        problem is almost never Claude. It&apos;s the prompt. Claude responds
        to what you give it. Vague input produces vague output. Specific input
        produces specific, useful output.
      </p>
      <p>
        Think of it this way: if you hired a brilliant freelancer and sent them
        a one-line brief with no context, no examples, and no constraints,
        you&apos;d get generic work back. Not because they&apos;re bad at their
        job, but because you didn&apos;t give them what they needed to do great
        work. Claude works the same way.
      </p>

      {/* ── Generic vs Great output diagram ── */}
      <div className="my-8 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 sm:p-6 md:p-8">
        <p className="text-center font-semibold text-slate-800 mb-6 text-lg">
          The Prompting Gap
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4 sm:p-6">
            <p className="font-semibold text-red-700 mb-2">Generic prompt</p>
            <p className="text-sm text-slate-700 italic mb-3">
              &quot;Help me write a project update.&quot;
            </p>
            <p className="text-sm text-slate-600">
              Gets you a template that could apply to any project, any company,
              any audience. You spend 30 minutes rewriting it.
            </p>
          </div>
          <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4 sm:p-6">
            <p className="font-semibold text-green-700 mb-2">Great prompt</p>
            <p className="text-sm text-slate-700 italic mb-3">
              &quot;Write a weekly project update for my CMO. The project is a
              website redesign, we&apos;re 2 weeks behind on the content
              migration phase, and I need to explain why without creating
              panic. Tone: direct but calm. 200 words max.&quot;
            </p>
            <p className="text-sm text-slate-600">
              Gets you a draft you can send in 5 minutes with minor edits.
            </p>
          </div>
        </div>
      </div>

      <p>
        The second prompt took an extra 30 seconds to write. It saved 25
        minutes of editing. That&apos;s the real math of prompting &mdash; a
        small investment in input quality produces an outsized return in output
        quality.
      </p>

      <h2>The 5 elements of a great Claude prompt</h2>
      <p>
        Every great prompt has up to five elements. You don&apos;t always need
        all five, but the more you include, the better your output. Here&apos;s
        the framework:
      </p>

      {/* ── 5 Elements Framework Diagram ── */}
      <div className="not-prose my-10 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:p-8">
        <p className="text-center font-semibold text-slate-800 mb-6 text-lg">
          The 5-Element Prompt Framework
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4 md:p-5 text-center">
            <span className="flex mx-auto h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white mb-3">
              1
            </span>
            <p className="font-semibold text-slate-800 text-sm">Role</p>
            <p className="text-xs text-slate-600 mt-1">Who should Claude be?</p>
          </div>
          <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4 md:p-5 text-center">
            <span className="flex mx-auto h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white mb-3">
              2
            </span>
            <p className="font-semibold text-slate-800 text-sm">Context</p>
            <p className="text-xs text-slate-600 mt-1">What does Claude need to know?</p>
          </div>
          <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-4 md:p-5 text-center">
            <span className="flex mx-auto h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white mb-3">
              3
            </span>
            <p className="font-semibold text-slate-800 text-sm">Task</p>
            <p className="text-xs text-slate-600 mt-1">What should Claude do?</p>
          </div>
          <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4 md:p-5 text-center">
            <span className="flex mx-auto h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white mb-3">
              4
            </span>
            <p className="font-semibold text-slate-800 text-sm">Constraints</p>
            <p className="text-xs text-slate-600 mt-1">What are the limits?</p>
          </div>
          <div className="rounded-lg border-2 border-amber-200 bg-amber-50 p-4 md:p-5 text-center">
            <span className="flex mx-auto h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white mb-3">
              5
            </span>
            <p className="font-semibold text-slate-800 text-sm">Output Format</p>
            <p className="text-xs text-slate-600 mt-1">What should the result look like?</p>
          </div>
        </div>
      </div>

      <h3>1. Role &mdash; Tell Claude who to be</h3>
      <p>
        Starting with a role frames the entire response. It changes Claude&apos;s
        vocabulary, depth, perspective, and what it prioritizes.
      </p>
      <pre><code>{`You are a senior financial analyst who prepares board-ready reports for SaaS companies.`}</code></pre>
      <p>
        Without the role, Claude defaults to a general-purpose assistant. With
        it, Claude writes the way a financial analyst actually writes &mdash;
        with the right jargon, the right level of precision, and the right
        assumptions about what the reader cares about.
      </p>

      <h3>2. Context &mdash; Give Claude the backstory</h3>
      <p>
        Context is the most overlooked element. The more relevant background
        Claude has, the better it tailors its response.
      </p>
      <pre><code>{`Our company is a B2B SaaS platform selling to mid-market HR teams. We have 340 customers, average contract value of $18K/year. We just lost 3 enterprise accounts in Q1 and the board is asking questions about retention.`}</code></pre>
      <p>
        This kind of context changes everything. Without it, Claude gives you
        generic retention advice. With it, Claude gives you specific,
        situation-aware analysis.
      </p>

      <h3>3. Task &mdash; Be specific about the deliverable</h3>
      <p>
        Don&apos;t say &quot;help me with retention.&quot; Say exactly what you
        need Claude to produce.
      </p>
      <pre><code>{`Write a 1-page retention analysis memo that identifies the likely causes of churn for enterprise accounts and recommends 3 specific actions we can take in Q2.`}</code></pre>

      <h3>4. Constraints &mdash; Set the boundaries</h3>
      <p>
        Constraints prevent Claude from going off-track. They include word
        limits, what to avoid, audience assumptions, and tone.
      </p>
      <pre><code>{`Keep it under 500 words. Assume the reader is our CEO — she has context on the product but not on individual account details. Avoid jargon. Don't sugarcoat the situation.`}</code></pre>

      <h3>5. Output Format &mdash; Describe what the result looks like</h3>
      <p>
        Telling Claude the format avoids the back-and-forth of reformatting.
      </p>
      <pre><code>{`Structure it as: Executive Summary (3 sentences), Root Cause Analysis (bullet points), Recommended Actions (numbered list with owner and timeline for each).`}</code></pre>

      <p>
        When you combine all five elements, you get a prompt that produces
        near-final output on the first try. You don&apos;t need all five every
        time &mdash; a quick question doesn&apos;t need a role and output
        format. But for any real work task, three or more elements will
        dramatically improve what Claude gives you. For a deeper dive into applying these principles to writing tasks specifically, see <a href="/blog/how-to-use-claude-for-writing">our writing guide</a>.
      </p>

      <h2>Before and after: 5 real business prompts transformed</h2>
      <p>
        Theory is nice, but examples are better. Here are five real business
        scenarios showing how the 5-element framework transforms a weak prompt
        into one that produces genuinely useful output. These are the kinds of
        before/after comparisons that make this claude prompting guide
        practical, not theoretical.
      </p>

      <div className="not-prose my-10 flex flex-col gap-8">
      {/* ── Before/After 1: Strategy Memo ── */}
      <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:p-8">
        <p className="font-semibold text-slate-800 mb-4 text-lg">
          Scenario 1: Preparing a strategy memo
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4 md:p-5">
            <p className="text-xs font-bold uppercase text-red-600 mb-2">Before</p>
            <p className="text-sm text-slate-700 italic">
              &quot;Write a strategy memo about expanding to Europe.&quot;
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Result: Generic overview of European market expansion that could
              apply to any company in any industry.
            </p>
          </div>
          <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4 md:p-5">
            <p className="text-xs font-bold uppercase text-green-600 mb-2">After</p>
            <p className="text-sm text-slate-700 italic">
              &quot;You are a strategy consultant advising a 50-person B2B
              software company. We sell project management tools to
              construction firms in the US ($4M ARR). Our CEO wants to
              explore the UK and Germany as first European markets. Write a
              2-page strategy memo that covers: market sizing for
              construction project management in both countries, regulatory
              considerations, go-to-market options (direct sales vs.
              channel partners), and a recommended phased timeline. Tone:
              direct and analytical. Include a comparison table for UK vs.
              Germany.&quot;
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Result: A specific, actionable memo with real market context,
              a comparison table, and phased recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* ── Before/After 2: Client Feedback ── */}
      <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:p-8">
        <p className="font-semibold text-slate-800 mb-4 text-lg">
          Scenario 2: Responding to client feedback
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4 md:p-5">
            <p className="text-xs font-bold uppercase text-red-600 mb-2">Before</p>
            <p className="text-sm text-slate-700 italic">
              &quot;Help me respond to an unhappy client.&quot;
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Result: A template apology email with placeholder text that
              sounds robotic.
            </p>
          </div>
          <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4 md:p-5">
            <p className="text-xs font-bold uppercase text-green-600 mb-2">After</p>
            <p className="text-sm text-slate-700 italic">
              &quot;I run a marketing agency. My client (VP of Marketing at a
              fintech startup) just emailed saying our last campaign
              &apos;didn&apos;t move the needle&apos; and she&apos;s
              questioning our retainer. The campaign actually drove 40%
              more leads than the previous quarter, but their sales team
              didn&apos;t follow up on most of them. Write a reply that:
              acknowledges her frustration, presents the lead data without
              being defensive, diplomatically surfaces the sales follow-up
              gap, and proposes a joint meeting to align on the full
              funnel. Keep it under 250 words. Professional but warm.&quot;
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Result: A nuanced email that handles a delicate situation with
              the right balance of data and empathy.
            </p>
          </div>
        </div>
      </div>

      {/* ── Before/After 3: Process Documentation ── */}
      <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:p-8">
        <p className="font-semibold text-slate-800 mb-4 text-lg">
          Scenario 3: Creating process documentation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4 md:p-5">
            <p className="text-xs font-bold uppercase text-red-600 mb-2">Before</p>
            <p className="text-sm text-slate-700 italic">
              &quot;Write a process document for onboarding new clients.&quot;
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Result: A generic onboarding checklist that doesn&apos;t match
              your actual workflow.
            </p>
          </div>
          <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4 md:p-5">
            <p className="text-xs font-bold uppercase text-green-600 mb-2">After</p>
            <p className="text-sm text-slate-700 italic">
              &quot;You are an operations manager documenting internal
              processes. We&apos;re a 12-person accounting firm that
              onboards about 8 new small business clients per month. Our
              current process: intake call, collect documents via a shared
              Google Drive folder, assign a primary accountant, set up in
              QuickBooks, schedule a kickoff meeting. Write an SOP
              document that our team can follow step-by-step. Include:
              responsible person for each step, expected timeline, and a
              checklist format. Flag any steps where things commonly go
              wrong and add a troubleshooting note.&quot;
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Result: A team-ready SOP with ownership, timelines, and
              practical troubleshooting tips.
            </p>
          </div>
        </div>
      </div>

      {/* ── Before/After 4: Job Description ── */}
      <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:p-8">
        <p className="font-semibold text-slate-800 mb-4 text-lg">
          Scenario 4: Writing a job description
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4 md:p-5">
            <p className="text-xs font-bold uppercase text-red-600 mb-2">Before</p>
            <p className="text-sm text-slate-700 italic">
              &quot;Write a job description for a marketing manager.&quot;
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Result: A cookie-cutter JD full of buzzwords like
              &quot;dynamic self-starter&quot; that every company posts.
            </p>
          </div>
          <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4 md:p-5">
            <p className="text-xs font-bold uppercase text-green-600 mb-2">After</p>
            <p className="text-sm text-slate-700 italic">
              &quot;Write a job description for a Marketing Manager at a
              25-person B2B cybersecurity company. This person will own
              content marketing and demand gen. They&apos;ll manage one
              junior marketer and work closely with our sales team of 4.
              Budget: $15K/month for campaigns. We sell to CISOs at
              mid-market companies. The role is remote, US-based, salary
              range $95K-$120K. Write it in a conversational but
              professional tone. Include: what they&apos;ll actually do in
              the first 90 days, skills that actually matter (not generic
              lists), and what makes this role different from the same
              title at a bigger company.&quot;
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Result: A compelling JD that attracts the right candidates
              because it sounds like a real person wrote it about a real
              job.
            </p>
          </div>
        </div>
      </div>

      {/* ── Before/After 5: Meeting Prep ── */}
      <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:p-8">
        <p className="font-semibold text-slate-800 mb-4 text-lg">
          Scenario 5: Analyzing survey results
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4 md:p-5">
            <p className="text-xs font-bold uppercase text-red-600 mb-2">Before</p>
            <p className="text-sm text-slate-700 italic">
              &quot;Analyze these survey results.&quot; [pastes data]
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Result: A summary that restates the numbers without
              interpretation or recommendations.
            </p>
          </div>
          <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4 md:p-5">
            <p className="text-xs font-bold uppercase text-green-600 mb-2">After</p>
            <p className="text-sm text-slate-700 italic">
              &quot;You are a customer insights analyst. I&apos;m pasting
              results from our annual NPS survey (142 responses from B2B
              SaaS customers). Analyze the data and give me: (1) the top
              3 themes in promoter feedback and detractor feedback, (2) 2
              surprising or counterintuitive findings, (3) 3 specific
              actions our product team should take based on this data.
              Present the themes with direct quotes from respondents.
              Write it as a briefing document for our Head of Product, not
              as a statistics report.&quot;
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Result: An insight-driven briefing with real quotes, themes,
              and prioritized actions &mdash; ready to share.
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* ── CTA 1 ── */}
      <div className="not-prose mt-10 mb-10 rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-5 md:p-6">
        <p className="text-sm md:text-base text-slate-800">
          Get 7 ready-to-use Claude prompts built on these principles &mdash; plus access to a library of templates for every business function.
        </p>
        <a
          href="/skool-redirect"
          className="inline-block mt-3 text-sm font-semibold text-orange-600 underline decoration-orange-300 underline-offset-4 hover:text-orange-700 hover:decoration-orange-400 transition-colors"
        >
          Join AItomation Academy for free &rarr;
        </a>
      </div>

      <h2>How to use Claude Projects to avoid repeating yourself</h2>
      <p>
        One of the biggest mistakes non-technical users make with Claude is
        re-explaining their context in every single conversation. Your company
        background, your audience, your writing style, your industry &mdash;
        you type it all out again every time you start a new chat. Claude&apos;s{" "}
        <a
          href="https://support.claude.ai/hc/en-us/articles/35585014824339-Use-Projects-to-give-Claude-more-context"
          className="text-orange-600 underline decoration-orange-300 underline-offset-4 hover:text-orange-700 hover:decoration-orange-400 transition-colors"
        >
          Projects feature
        </a>{" "}
        eliminates this entirely.
      </p>

      {/* ── Projects Setup Diagram ── */}
      <div className="not-prose my-10 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:p-8">
        <p className="text-center font-semibold text-slate-800 mb-6 text-lg">
          Claude Projects: Set Up Once, Use Forever
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4 md:p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                1
              </span>
              <span className="font-semibold text-slate-800">
                Create a Project
              </span>
            </div>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>Go to Projects in Claude&apos;s sidebar</li>
              <li>Name it for the use case (e.g., &quot;Client Proposals&quot;)</li>
              <li>Write custom instructions describing your role, company, and audience</li>
            </ul>
          </div>
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4 md:p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                2
              </span>
              <span className="font-semibold text-slate-800">
                Upload reference files
              </span>
            </div>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>Brand voice guides</li>
              <li>Past examples of your best work</li>
              <li>Client briefs or audience research</li>
              <li>Templates and frameworks you use</li>
            </ul>
          </div>
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4 md:p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                3
              </span>
              <span className="font-semibold text-slate-800">
                Start every chat inside the Project
              </span>
            </div>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>Claude automatically uses your instructions and files</li>
              <li>No need to re-explain context</li>
              <li>Every conversation benefits from the same foundation</li>
            </ul>
          </div>
        </div>
      </div>

      <p>
        For example, if you create a &quot;Content Marketing&quot; project with
        your brand guidelines, target audience description, and three examples
        of your best blog posts uploaded as files, every new conversation in
        that project already knows your voice, your audience, and your
        standards. Your prompts go from 200 words of context + the actual
        request to just the request.
      </p>
      <p>
        The Project instructions are also the perfect place to put your
        reusable prompt templates. Instead of hunting through old conversations
        to find that prompt that worked well, store it in the project and
        reference it every time.
      </p>

      <h2>How to use Styles to maintain consistent voice</h2>
      <p>
        Even with great prompts, Claude&apos;s default voice might not match
        yours. The{" "}
        <a
          href="https://support.claude.ai/hc/en-us/articles/33783012122899-Create-and-manage-custom-styles"
          className="text-orange-600 underline decoration-orange-300 underline-offset-4 hover:text-orange-700 hover:decoration-orange-400 transition-colors"
        >
          Custom Styles feature
        </a>{" "}
        solves this by letting you define how Claude writes across all your
        conversations.
      </p>
      <p>
        Here&apos;s how to set one up:
      </p>
      <ol>
        <li>
          <strong>Go to Settings &rarr; Profile &rarr; Styles.</strong> You&apos;ll
          see options to create a new style.
        </li>
        <li>
          <strong>Paste 3 examples of your best writing.</strong> These should
          represent how you actually want to sound &mdash; not your most formal
          writing, but your natural professional voice.
        </li>
        <li>
          <strong>Add a short description.</strong> Something like: &quot;Direct,
          conversational, avoids corporate jargon. Short sentences. No
          exclamation marks. Uses specific examples instead of vague
          claims.&quot;
        </li>
        <li>
          <strong>Set it as your default.</strong> Now Claude uses this voice
          for every response unless you choose a different style.
        </li>
      </ol>

      {/* ── Tip Box: Styles ── */}
      <div className="my-6 rounded-lg border-l-4 border-orange-400 bg-orange-50 p-4">
        <p className="font-semibold text-orange-800 mb-1">Pro tip</p>
        <p className="text-sm text-slate-700">
          Create different styles for different types of work. You might have
          a &quot;Client Communication&quot; style that&apos;s polished and
          professional, and a &quot;Internal Notes&quot; style that&apos;s
          casual and concise. Switch between them based on the task instead of
          explaining tone in every prompt.
        </p>
      </div>

      <p>
        Styles and Projects work together. A Project gives Claude your context
        and reference materials. A Style gives Claude your voice. Together,
        they mean you can type a 20-word prompt and get output that sounds
        like you wrote it with full awareness of your business context.
      </p>

      <h2>How to use extended thinking for complex tasks</h2>
      <p>
        For simple requests &mdash; rewriting a paragraph, answering a quick
        question &mdash; Claude&apos;s standard mode works great. But for
        complex tasks that require analysis, strategy, or multi-step
        reasoning, Claude&apos;s{" "}
        <a
          href="https://support.claude.com/en/articles/10574485-using-extended-thinking"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 underline decoration-orange-300 underline-offset-4 hover:text-orange-700 hover:decoration-orange-400 transition-colors"
        >
          extended thinking
        </a>{" "}
        feature is a significant upgrade. (On the latest Opus 4.6 and Sonnet
        4.6 models, this has evolved into &quot;adaptive thinking&quot; where
        Claude automatically decides how deeply to think based on the
        complexity of your request.)
      </p>
      <p>
        When extended thinking is active, Claude reasons through the problem
        step by step before writing its response. You can see a summary of its
        thinking process. This produces better output for:
      </p>
      <ul>
        <li>Strategy memos where you need Claude to weigh tradeoffs</li>
        <li>Analysis tasks where the answer isn&apos;t obvious</li>
        <li>Complex writing that needs to consider multiple audiences</li>
        <li>Problem-solving where you want Claude to think before it answers</li>
        <li>Anything where you&apos;d tell a human &quot;take your time with this&quot;</li>
      </ul>

      {/* ── Extended Thinking Diagram ── */}
      <div className="not-prose my-10 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:p-8">
        <p className="text-center font-semibold text-slate-800 mb-6 text-lg">
          When to Use Extended Thinking
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-lg border-2 border-slate-200 bg-white p-4 md:p-6">
            <p className="font-semibold text-slate-700 mb-3">Standard mode</p>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>Rewriting text</li>
              <li>Answering factual questions</li>
              <li>Formatting or restructuring content</li>
              <li>Simple brainstorming</li>
              <li>Translation or summarization</li>
            </ul>
          </div>
          <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-4 md:p-6">
            <p className="font-semibold text-purple-700 mb-3">Extended thinking</p>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>Strategic analysis and recommendations</li>
              <li>Evaluating pros and cons of a decision</li>
              <li>Complex business case development</li>
              <li>Multi-stakeholder communication</li>
              <li>Anything requiring nuanced judgment</li>
            </ul>
          </div>
        </div>
      </div>

      <p>
        You don&apos;t need to change your prompt when using extended
        thinking. Just toggle it on. Claude will automatically take more time
        to reason through the problem. The output is often noticeably better
        for complex tasks &mdash; more thorough, more balanced, and with fewer
        gaps in logic.
      </p>

      <h2>The &quot;prompt improver&quot; technique (meta-prompting)</h2>
      <p>
        This is one of the most powerful techniques in this entire guide, and
        it requires zero skill. It turns Claude into your own claude prompt
        improver. Here&apos;s how it works:
      </p>
      <ol>
        <li>Write your prompt the way you normally would &mdash; don&apos;t overthink it</li>
        <li>Instead of sending it as your request, paste it into Claude and ask Claude to improve it</li>
        <li>Use the improved version for your actual task</li>
      </ol>

      {/* ── Prompt Improver Before/After ── */}
      <div className="not-prose my-10 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:p-8">
        <p className="text-center font-semibold text-slate-800 mb-6 text-lg">
          The Claude Prompt Improver in Action
        </p>
        <div className="space-y-4">
          <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4 md:p-6">
            <p className="text-xs font-bold uppercase text-red-600 mb-2">
              Step 1: Your original prompt
            </p>
            <p className="text-sm text-slate-700 italic">
              &quot;Help me write a business plan for my consulting
              firm.&quot;
            </p>
          </div>
          <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4 md:p-6">
            <p className="text-xs font-bold uppercase text-blue-600 mb-2">
              Step 2: Ask Claude to improve it
            </p>
            <p className="text-sm text-slate-700 italic">
              &quot;I want to give you a prompt, but I think it&apos;s too
              vague. Here&apos;s my prompt: &apos;Help me write a business
              plan for my consulting firm.&apos; Rewrite this prompt to be
              more specific and effective. Ask me any clarifying questions
              you need before rewriting it.&quot;
            </p>
          </div>
          <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4 md:p-6">
            <p className="text-xs font-bold uppercase text-green-600 mb-2">
              Step 3: Claude asks clarifying questions, then returns something like:
            </p>
            <p className="text-sm text-slate-700 italic">
              &quot;You are a business strategy consultant. I run a
              management consulting firm that specializes in operational
              efficiency for mid-market manufacturing companies. We&apos;re
              a team of 6, doing $1.2M in revenue, and I want to grow to
              $3M in 18 months by adding a fractional COO service line.
              Write a business plan that covers: market opportunity for
              fractional COO services in manufacturing, our competitive
              advantage, pricing model, hiring plan, and 18-month financial
              projections. Format: executive summary first, then detailed
              sections. Write it so I could show it to a potential investor
              or advisory board member.&quot;
            </p>
          </div>
        </div>
      </div>

      <p>
        The improved prompt is dramatically better &mdash; and you didn&apos;t
        need to know any prompting framework to get there. Claude knows what
        makes a good prompt. Let it do the work. This technique works as a
        claude prompt improver for any type of request.
      </p>

      {/* ── Tip Box: Meta-prompting ── */}
      <div className="my-6 rounded-lg border-l-4 border-orange-400 bg-orange-50 p-4">
        <p className="font-semibold text-orange-800 mb-1">Pro tip</p>
        <p className="text-sm text-slate-700">
          You can also use this technique to improve prompts you plan to reuse.
          Once Claude gives you the improved version, save it in your Project
          instructions so you never have to write it again.
        </p>
      </div>

      {/* ── CTA 2 ── */}
      <div className="my-8 rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-4 md:p-6">
        <p className="text-sm md:text-base text-slate-800">
          400+ professionals are using these techniques daily in our free community. See what they are building with Claude.
        </p>
        <a
          href="/skool-redirect"
          className="inline-block mt-3 text-sm font-semibold text-orange-600 underline decoration-orange-300 underline-offset-4 hover:text-orange-700 hover:decoration-orange-400 transition-colors"
        >
          Explore the community &rarr;
        </a>
      </div>

      <h2>Common mistakes non-technical users make</h2>
      <p>
        After working with hundreds of professionals learning Claude, these
        are the patterns that hold people back the most:
      </p>

      {/* ── Mistakes Diagram ── */}
      <div className="not-prose my-10 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:p-8">
        <div className="space-y-6">
          <div className="rounded-lg border border-red-200 bg-red-50 p-5 md:p-6 mb-6">
            <p className="font-semibold text-red-700 mb-3">
              Mistake 1: Being too vague
            </p>
            <p className="text-sm text-slate-700">
              &quot;Help me with marketing&quot; gives Claude nothing to work
              with. Even adding one sentence of context (&quot;I run a
              local bakery trying to get more weekday catering orders&quot;)
              changes the output entirely. Specificity is free and it makes
              everything better.
            </p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-5 md:p-6 mb-6">
            <p className="font-semibold text-red-700 mb-3">
              Mistake 2: Not providing context
            </p>
            <p className="text-sm text-slate-700">
              Claude doesn&apos;t know your industry, your company size,
              your audience, or your constraints unless you tell it. People
              assume Claude should &quot;just know&quot; &mdash; but it
              can&apos;t read your mind. Five seconds of context saves five
              minutes of editing.
            </p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-5 md:p-6 mb-6">
            <p className="font-semibold text-red-700 mb-3">
              Mistake 3: Starting over instead of iterating
            </p>
            <p className="text-sm text-slate-700">
              When Claude&apos;s first response isn&apos;t perfect, most
              people open a new chat and try again with a different prompt.
              This throws away all the context from the conversation.
              Instead, tell Claude what to fix: &quot;Make section 2 more
              concise&quot; or &quot;The tone is too formal, make it more
              conversational.&quot; Claude improves dramatically through
              feedback.
            </p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-5 md:p-6 mb-6">
            <p className="font-semibold text-red-700 mb-3">
              Mistake 4: Asking for too much at once
            </p>
            <p className="text-sm text-slate-700">
              &quot;Write me a full marketing strategy, a content calendar,
              10 blog post outlines, and social media copy for each&quot;
              &mdash; all in one prompt. Claude can handle a lot, but when
              you ask for everything at once, quality drops across the
              board. Break complex work into stages: strategy first, then
              calendar, then individual pieces.
            </p>
          </div>
        </div>
      </div>

      {/* ── CTA 3 ── */}
      <div className="not-prose mt-10 mb-10 rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-5 md:p-6">
        <p className="text-sm md:text-base text-slate-800">
          Want a done-for-you Claude setup? Inside AItomation Academy we build your Projects, Styles, and prompt templates together step by step.
        </p>
        <a
          href="/skool-redirect"
          className="inline-block mt-3 text-sm font-semibold text-orange-600 underline decoration-orange-300 underline-offset-4 hover:text-orange-700 hover:decoration-orange-400 transition-colors"
        >
          Get your Claude system set up &rarr;
        </a>
      </div>

      <h2>Advanced techniques in plain English</h2>
      <p>
        These techniques sound fancy in the prompt engineering world, but
        they&apos;re actually simple when you translate them to plain language.
      </p>

      <h3>Chain-of-thought prompting</h3>
      <p>
        This just means asking Claude to show its reasoning before giving you
        an answer. Instead of &quot;What should our pricing be?&quot; try:
      </p>
      <pre><code>{`Walk me through how you'd think about pricing for our product. Consider our target market (small business owners, price-sensitive), our costs ($12/user/month to deliver), our competitors (ranging from $19-$49/user/month), and our positioning (simplest tool in the category). Think through the tradeoffs step by step, then give me your recommended pricing with a rationale.`}</code></pre>
      <p>
        By asking Claude to think through the problem before answering, you
        get better reasoning and can spot where Claude&apos;s logic might be
        wrong. This is especially powerful paired with extended thinking.
      </p>

      <h3>Outcome delegation</h3>
      <p>
        Instead of telling Claude exactly what to create, describe the outcome
        you need and let Claude figure out the best way to deliver it.
      </p>

      {/* ── Outcome Delegation Before/After ── */}
      <div className="not-prose my-10 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-lg border-2 border-slate-200 bg-white p-4 md:p-5">
            <p className="text-xs font-bold uppercase text-slate-500 mb-2">
              Task-focused (less effective)
            </p>
            <p className="text-sm text-slate-700 italic">
              &quot;Write a 500-word blog post about our new feature.&quot;
            </p>
          </div>
          <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4 md:p-5">
            <p className="text-xs font-bold uppercase text-green-600 mb-2">
              Outcome-focused (more effective)
            </p>
            <p className="text-sm text-slate-700 italic">
              &quot;I need to announce our new scheduling feature in a way
              that gets existing customers to try it. The audience reads our
              blog casually &mdash; they&apos;re busy managers. What format
              and angle would be most effective? Give me your recommendation
              first, then write it.&quot;
            </p>
          </div>
        </div>
      </div>

      <p>
        Outcome delegation often leads Claude to suggest an approach you
        hadn&apos;t considered &mdash; maybe a short email to existing
        customers would work better than a blog post, or maybe a comparison
        chart would be more effective than a narrative. For <a href="/blog/5-claude-workflows-for-non-technical-professionals">practical Claude workflows</a> that put these techniques into action, see our workflow collection.
      </p>

      <h3>Giving Claude permission to push back</h3>
      <p>
        By default, Claude tries to do what you ask. But sometimes your
        request has a flaw, and you want Claude to tell you. Explicitly give
        it permission:
      </p>
      <pre><code>{`Before you do this, tell me if you think my approach is wrong or if there's a better way to achieve my goal. I'd rather hear a better idea than get exactly what I asked for.`}</code></pre>
      <p>
        This is particularly useful for strategy work, positioning, pricing,
        and any decision where you might have blind spots. Claude often has a
        valuable outside perspective &mdash; but it won&apos;t share it unless
        you ask.
      </p>

      {/* ── Tip Box: Push Back ── */}
      <div className="my-6 rounded-lg border-l-4 border-orange-400 bg-orange-50 p-4">
        <p className="font-semibold text-orange-800 mb-1">Pro tip</p>
        <p className="text-sm text-slate-700">
          Add this line to your Project instructions: &quot;Always tell me if
          you think my approach is flawed before executing. I value honest
          feedback over compliance.&quot; Now Claude will proactively flag
          issues across all your conversations in that project.
        </p>
      </div>

      <h2>Putting it all together: your prompting system</h2>
      <p>
        Here is the system that brings everything in this claude prompting
        guide together:
      </p>

      {/* ── System Summary Diagram ── */}
      <div className="not-prose my-10 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 md:p-8">
        <p className="text-center font-semibold text-slate-800 mb-6 text-lg">
          Your Claude Prompting System
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white mt-0.5">
              1
            </span>
            <div>
              <p className="font-semibold text-slate-800">Set up Projects</p>
              <p className="text-sm text-slate-600">
                Create a Project for each major area of your work. Upload
                reference materials and write custom instructions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white mt-0.5">
              2
            </span>
            <div>
              <p className="font-semibold text-slate-800">Create your Style</p>
              <p className="text-sm text-slate-600">
                Define your voice once so Claude matches your tone
                automatically.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white mt-0.5">
              3
            </span>
            <div>
              <p className="font-semibold text-slate-800">Use the 5-element framework</p>
              <p className="text-sm text-slate-600">
                For important tasks, include Role, Context, Task,
                Constraints, and Output Format. For quick tasks, context +
                task is usually enough.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white mt-0.5">
              4
            </span>
            <div>
              <p className="font-semibold text-slate-800">Use the prompt improver when stuck</p>
              <p className="text-sm text-slate-600">
                Paste your draft prompt into Claude and ask it to make the
                prompt better before you use it.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white mt-0.5">
              5
            </span>
            <div>
              <p className="font-semibold text-slate-800">Iterate, don&apos;t restart</p>
              <p className="text-sm text-slate-600">
                When the output isn&apos;t right, give Claude feedback in the
                same conversation. Don&apos;t start over.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white mt-0.5">
              6
            </span>
            <div>
              <p className="font-semibold text-slate-800">Turn on extended thinking for hard problems</p>
              <p className="text-sm text-slate-600">
                Strategy, analysis, multi-stakeholder decisions &mdash;
                let Claude think before it responds.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p>
        This system works because it addresses the real reason most people
        underperform with Claude: not lack of technical skill, but lack of
        structure. You don&apos;t need to become a prompt engineer. You need
        a repeatable system for giving Claude what it needs to help you. If you want to see how this applies to <a href="/blog/claude-for-business">using Claude for business</a> more broadly, we cover that in a separate guide.
      </p>
      <p>
        Inside AItomation Academy, we build this entire system together
        step by step &mdash; setting up Projects, creating Styles, building
        prompt templates for your specific work, and practicing the advanced
        techniques above with real scenarios. It&apos;s built for
        non-technical professionals who want to stop guessing and start
        getting consistently great output from Claude.
      </p>
      <p>
        <a
          href="/skool-redirect"
          className="inline-block mt-2 font-semibold text-orange-600 underline decoration-orange-300 underline-offset-4 hover:text-orange-700 hover:decoration-orange-400 transition-colors"
        >
          Join AItomation Academy and master Claude prompting &rarr;
        </a>
      </p>
    </>
  ),
};
