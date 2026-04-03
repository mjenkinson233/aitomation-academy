# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server at localhost:3000
- `npm run build` — Production build (static export to `dist/`)
- `npm run lint` — Run Next.js linter

## Architecture

This is a **statically exported** Next.js 16 landing page for AItomation Academy (Claude education for non-technical professionals). There is no server-side runtime — `next.config.js` uses `output: 'export'`.

### Key architectural decisions

- **Static export only**: No API routes, no server components with dynamic data. The Brevo email integration documented in `BREVO_INTEGRATION.md` is not yet implemented — the lead magnet form currently simulates submission client-side.
- **Single-page composition**: `app/page.tsx` composes all sections in order. Each section is a self-contained component in `app/sections/`.
- **Two component directories**: `app/components/` holds page-specific components (navbar, lead magnet form). `components/` at the root holds app-wide concerns (PostHog provider, analytics events, structured data).
- **CSS variables design system**: Colors are defined as HSL CSS variables in `app/globals.css` and consumed via Tailwind config (`tailwind.config.js`). Uses the shadcn/ui variable naming convention (--primary, --secondary, --muted, etc.) but does not use shadcn components.
- **Site config centralized**: All site metadata, URLs, social links, and keywords live in `lib/site.ts`. Structured data (JSON-LD) is generated from this config in `lib/schema.ts`.
- **Analytics**: PostHog loaded client-side via dynamic import in `components/posthog-provider.tsx`. Custom event tracking (scroll depth, CTA clicks, form interactions) in `components/analytics-events.tsx`. Requires `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` env vars.

### Environment variables

- `NEXT_PUBLIC_POSTHOG_KEY` — PostHog project API key
- `NEXT_PUBLIC_POSTHOG_HOST` — PostHog instance host
- `BREVO_API_KEY` — For future email integration (not yet wired up)
