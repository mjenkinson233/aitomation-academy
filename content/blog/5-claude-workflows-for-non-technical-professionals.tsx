import type { BlogPost } from "@/lib/blog";

export const post: BlogPost = {
  slug: "5-claude-workflows-for-non-technical-professionals",
  title: "5 Claude Workflows for Non-Technical Professionals (Copy-Paste Ready)",
  description: "Five practical Claude workflows for writing, research, content, decisions, and meeting prep. No coding. No setup. Just copy, paste, and get useful output.",
  publishedAt: "2026-04-02",
  author: "Marko Sudar",
  category: "Claude Workflows",
  tags: ["Claude", "workflows", "productivity", "non-technical", "prompts"],
  body: (
    <>
      <p>
        The gap between people who get real value from Claude and people who don't usually isn't ability or intelligence. It's systems. The people getting value have repeatable workflows they use every week. The people who don't are starting from scratch every time.
      </p>
      <p>
        Here are five workflows you can start using today.
      </p>

      <h2>1. The Draft From Chaos workflow</h2>
      <p><strong>Best for:</strong> turning rough notes into polished writing</p>
      <p>
        Collect everything you have on a topic — notes, bullet points, voice memo transcripts, links, half-finished sentences. Paste it all into Claude with this prompt:
      </p>
      <blockquote>
        <p>
          "Here's my raw material on [topic]. My audience is [who will read this]. I want to write [type of content — email, article, report, etc.]. First give me a suggested structure, then I'll tell you to write the full draft."
        </p>
      </blockquote>
      <p>
        Review the structure, adjust it if needed, then ask Claude to write the draft. You'll spend 15 minutes instead of 2 hours.
      </p>

      <h2>2. The Research Digest workflow</h2>
      <p><strong>Best for:</strong> understanding something quickly without reading everything</p>
      <p>
        Paste the source material — article, report, transcript, document — and use this prompt:
      </p>
      <blockquote>
        <p>
          "I need to understand [topic] for [purpose]. Here's the source material. Give me: (1) the 5 most important points, (2) anything that surprised you or seems counterintuitive, (3) what I should think about or do differently based on this."
        </p>
      </blockquote>
      <p>This works for long reports, industry research, competitor websites, client documents — anything you need to process quickly.</p>

      <h2>3. The Content Repurposing workflow</h2>
      <p><strong>Best for:</strong> getting more out of content you've already created</p>
      <p>
        Paste an existing piece of content — an article, a newsletter, a video transcript — and use:
      </p>
      <blockquote>
        <p>
          "Here's a piece of content I've already created. I want to repurpose it into [LinkedIn posts / Twitter threads / email newsletter / short video scripts]. Create [number] versions, each with a different angle or hook. Keep my voice."
        </p>
      </blockquote>
      <p>One long piece becomes a week of content. You wrote it once.</p>

      <h2>4. The Decision Clarity workflow</h2>
      <p><strong>Best for:</strong> making better decisions when you have too much in your head</p>
      <blockquote>
        <p>
          "I need to make a decision about [situation]. Here's what I know: [all the context]. Here's what I'm uncertain about: [the tensions or unknowns]. Help me think through this by: (1) identifying the key tradeoffs, (2) asking me 3 clarifying questions that would change your recommendation, (3) giving me your honest assessment."
        </p>
      </blockquote>
      <p>The clarifying questions part is the most valuable. Claude often identifies what you actually need to figure out before you can decide.</p>

      <h2>5. The Meeting Prep workflow</h2>
      <p><strong>Best for:</strong> walking into important conversations prepared</p>
      <blockquote>
        <p>
          "I have a [type of meeting] with [who] about [topic] on [date]. Here's the context: [relevant background]. Help me prepare by: (1) identifying the 3 most important things I need to communicate, (2) anticipating the hardest questions or objections I'll face, (3) suggesting how I should open the conversation."
        </p>
      </blockquote>
      <p>Takes 10 minutes. Makes a real difference.</p>

      <h2>The pattern behind all five</h2>
      <p>
        Every workflow above follows the same structure: give Claude context, give it a clear job, and ask for structured output. That's it. No magic. No advanced prompt engineering. Just giving Claude what it needs to be useful.
      </p>
      <p>
        The Claude Workflow Starter has seven of these workflows in a format you can copy and reuse. It's free, and you can get it below.
      </p>
    </>
  ),
};
