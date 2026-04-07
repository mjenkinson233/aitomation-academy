<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of your project. PostHog is now initialized via `instrumentation-client.ts` (the canonical approach for Next.js 15.3+), replacing the previous `useEffect`-based initialization in `posthog-provider.tsx`. Nine new events are instrumented across six files, covering your full lead generation funnel from first engagement to community join. Users are identified by email on every successful form submission, enabling cross-session tracking. Error tracking is enabled via `capture_exceptions: true` in `instrumentation-client.ts`.

| Event | Description | File |
|-------|-------------|------|
| `lead_form_submitted` | User successfully submitted the main lead magnet form and PDF download triggered | `app/components/lead-magnet-form.tsx` |
| `popup_shown` | Entry popup appeared to the user (after 2s delay on first visit) | `app/components/entry-popup.tsx` |
| `popup_dismissed` | User dismissed the entry popup via X or backdrop click | `app/components/entry-popup.tsx` |
| `popup_form_submitted` | User successfully submitted the entry popup form | `app/components/entry-popup.tsx` |
| `blog_lead_capture_opened` | User clicked the "Download Free PDF" CTA in a blog post | `app/components/lead-capture-trigger.tsx` |
| `blog_lead_capture_submitted` | User successfully submitted the lead capture form from a blog CTA | `app/components/lead-capture-trigger.tsx` |
| `newsletter_subscribe_clicked` | User clicked Subscribe in the blog newsletter form | `app/components/newsletter-form.tsx` |
| `video_unmuted` | User clicked to unmute the hero video (high-engagement signal) | `app/sections/hero.tsx` |
| `skool_redirect_viewed` | User landed on the /skool-redirect page (community join conversion) | `app/skool-redirect/page.tsx` |

Previously instrumented events (unchanged): `scroll_depth`, `cta_click`, `lead_form_started`, `lead_form_submit_attempt`, `lead_form_section_viewed`

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/367461/dashboard/1440000
- **Lead Capture Conversion Funnel** (section viewed → started → attempted → submitted): https://us.posthog.com/project/367461/insights/0XJJxt8s
- **CTA Click to Community Join Funnel** (cta_click → skool_redirect_viewed): https://us.posthog.com/project/367461/insights/j8IfL7VN
- **Daily Lead Submissions by Source** (main form, popup, blog CTA): https://us.posthog.com/project/367461/insights/zDIn2Eay
- **Entry Popup Conversion Rate** (popup_shown → popup_form_submitted): https://us.posthog.com/project/367461/insights/i4PuvXK5
- **Scroll Depth Engagement by Depth** (scroll depth broken down by %, last 30 days): https://us.posthog.com/project/367461/insights/izMR3vhW

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
