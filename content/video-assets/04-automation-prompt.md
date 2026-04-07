# Daily Blog Automation Setup

This shows how to automate daily blog publishing using Claude Code's scheduling feature.

---

## Option 1: Claude Code Scheduled Agent (simplest)

In Claude Code, run:

```
/schedule create --name "daily-blog" --cron "0 8 * * *" --prompt "Use the /seo-blog-writer skill. Pick the next keyword from the publishing plan and write the article. After writing, commit the changes and tell me what you wrote so I can review before pushing."
```

This runs every morning at 8 AM. It:
1. Picks the next keyword from the plan
2. Researches the topic
3. Writes the article
4. Wires it up (imports, llms.txt, etc.)
5. Commits (but doesn't push — you review first)

## Option 2: n8n Workflow (if you want approval flow)

Create an n8n workflow that:
1. Triggers on a cron schedule (daily at 8 AM)
2. Calls Claude Code CLI: `claude -p "Use /seo-blog-writer skill. Write the next article from the publishing plan."`
3. Creates a GitHub PR instead of committing to main
4. Sends you a Slack/email notification with the PR link
5. You review, approve, and merge

## Option 3: GitHub Actions (if you want CI/CD)

```yaml
# .github/workflows/daily-blog.yml
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
          npx claude -p "Use the /seo-blog-writer skill. Pick the next keyword from the publishing plan and write the full article."
      - name: Create PR
        uses: peter-evans/create-pull-request@v7
        with:
          title: "New blog post: auto-generated"
          body: "Automated daily blog post. Review and merge."
          branch: blog/daily-post
```

## The Review Workflow

Regardless of which automation you use, the flow is:

1. Agent writes the article overnight/morning
2. You get notified (PR, Slack, or just check the commit)
3. You review — check facts, tone, quality
4. You say "looks good, push it" or "fix X, Y, Z"
5. After pushing, submit the new URL to Google Search Console

The automation handles the 80% grunt work. Your 20% is quality control and the final push.
