# AItomation Academy Landing Page

A high-converting landing page for AItomation Academy — Claude education for non-technical professionals.

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Email:** Brevo (integration ready)

## Project Structure

```
app/
├── components/
│   ├── navbar.tsx              # Sticky navigation
│   └── lead-magnet-form.tsx    # Email capture form
├── sections/
│   ├── hero.tsx                # Above the fold
│   ├── social-proof.tsx        # Stats & trust signals
│   ├── what-you-get.tsx        # Feature grid
│   ├── how-it-works.tsx        # 3-step process
│   ├── lead-magnet-section.tsx # Form + value prop
│   ├── faq.tsx                 # Objection handling
│   ├── final-cta.tsx           # Bottom conversion
│   └── footer.tsx              # Full footer
├── globals.css                 # Tailwind + CSS variables
├── layout.tsx                  # Root layout + metadata
└── page.tsx                    # Main page composition
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

Static files output to `dist/` directory.

## Environment Variables

Create `.env.local`:

```
BREVO_API_KEY=your_brevo_api_key
```

## Copy Sources

All marketing copy is derived from research:

- `knowledge/competitors.md` — Competitive analysis
- `knowledge/audience.md` — Personas and voice of customer
- `knowledge/seo-keywords.md` — Target keywords
- `.agents/product-marketing-context.md` — Positioning and objections

## Skills Applied

- **ui-ux-pro-max:** Design system, component structure
- **page-cro:** Conversion optimization, CTA placement
- **copywriting:** Headlines, benefit-focused copy
- **form-cro:** Minimal fields, inline validation
- **lead-magnets:** Workflow Starter as lead magnet
- **signup-flow-cro:** Success states, next steps

## Next Steps

See `build-progress.md` for Phase 3 tasks (analytics, SEO, compliance pages).
