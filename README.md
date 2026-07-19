# Cecy Intelligence - Marketing Website

Public marketing site for Cecy Intelligence: health-data infrastructure for
Nigeria and  Africa. Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Setup

```bash
npm install
cp .env.local.example .env.local   # then fill in values (see below)
npm run dev                        # http://localhost:3000
```

`npm run build` produces the production build; the site deploys to Vercel
with zero config (set the env vars in the Vercel dashboard).

## Environment variables

All env vars live in `.env.local` (git-ignored). `.env.local.example`
documents each one:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com). When set, contact and survey submissions are emailed. |
| `CONTACT_TO_EMAIL` | Address that receives submissions. |
| `CONTACT_FROM_EMAIL` | Verified Resend sender. Until you verify a domain, use `onboarding@resend.dev`. |

**No key? Still works.** Without `RESEND_API_KEY`, both forms remain fully
functional: submissions are appended to `./data/contact-submissions.jsonl`
and `./data/survey-submissions.jsonl` (one JSON object per line, git-ignored).
Note this fallback is for local development - on Vercel the filesystem is
ephemeral, so set the Resend variables in production.

## Structure

```
app/
  page.tsx               Home
  about/page.tsx         Mission, why now, governance & ethics
  approach/page.tsx      The three horizons
  contact/               Contact page + client form component
  survey/                Multi-step survey + client form component
  api/contact/route.ts   Validates + delivers contact submissions
  api/survey/route.ts    Validates + delivers survey responses
  icon.png               Favicon (cropped from the logo)
  opengraph-image.png    OG/social image
components/
  Header.tsx  Footer.tsx  form.tsx (shared field primitives)
  PageHeader.tsx         UKB-style page banner (title chip + gold pattern)
lib/
  validation.ts          Validation shared by client forms and API routes
  deliver.ts             Resend delivery with local-file dev fallback
public/logo.jpg          Brand logo (source asset: ./cecy.jpg)
```

## Design notes for maintainers

- Palette and fonts are defined once in `app/globals.css` (`@theme` block) -
  white ground, gold as the identity. Text-level golds are darkened
  (`#8A5F16` / `#6F4C10`) to pass WCAG AA on white; the pure logo golds
  (`#F5D68A` / `#D4A03C`) appear only as fills - the header rule, the CTA
  bands, the deep-gold footer. Typography is all-sans (Inter via
  `next/font`, UK Biobank style): headings are bold and deep gold rather
  than a different typeface. `font-serif` utility classes remain in
  components but resolve to Inter - see the token comment in `globals.css`.
- Pages alternate white and cream-gold sections. Add the `light` class to
  any `<section>` for the cream variant: the `.light` scope in
  `globals.css` re-maps the theme variables, so all token-based utilities
  inside flip automatically.
- Headings use the UK Biobank "chip" pattern — bold white text in a
  deep-gold box (`.chip` in `globals.css`; `box-decoration-break: clone`
  boxes each wrapped line). Subpages open with `components/PageHeader.tsx`:
  cream band, title chip, angled gold geometric panel. Imagery is generated
  SVG plus the brand globe (`public/globe.png`) — no third-party stock
  photos, so there are no licensing constraints.
- Motion is restrained: pure opacity fades only (hero via `.anim-rise`,
  sections on scroll via CSS scroll-driven animations as progressive
  enhancement), wrapped in `prefers-reduced-motion: no-preference`.
- Gold-on-black text colors were chosen to pass WCAG AA (gold mid on
  `#0A0A0A` ≈ 8.7:1). Keep gold off large fills.
- Form validation rules live in `lib/validation.ts` and are imported by both
  the client components and the API routes - change them in one place.
