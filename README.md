# GMX-LABS

GMX-LABS is a digital services landing page for Web3 consulting, AI automation, landing page development, and technical launch support.

Live site: https://rigocrypto.github.io/GMX-Labs/

## What GMX-LABS Does

GMX-LABS helps teams and founders move from idea to launch with online digital delivery:

- Web3 consulting
- AI automation support
- Landing page development
- Technical setup and launch support
- SEO and discoverability foundations
- Stripe payment and Calendly booking flows

## Key Features

- Multi-language landing page (EN, ES, FR, PT)
- Service-focused sections with conversion CTAs
- Stripe checkout entry point
- Calendly booking flow
- FAQ and trust-building sections
- SEO metadata and social preview support
# GMX Labs

GMX Labs is a digital services landing page focused on Web3 consulting, AI automation, landing page development, technical setup, launch support, and online digital delivery.

## What GMX Labs Does

This project is built to:

- Explain services clearly to non-technical visitors
- Guide users to booking and payment actions
- Maintain launch-critical SEO and metadata readiness
- Support pre-launch governance with QA and checklist documentation

## Key Features

- Conversion-focused landing page with clear CTA flow
- Service sections for Web3, AI automation, and launch support
- FAQ and trust/readiness sections for buyer confidence
- Stripe payment CTA and Calendly booking CTA
- Multi-language support (EN, ES, FR, PT)
- SEO metadata and social preview support
- robots.txt and sitemap.xml configured
- QA and launch governance docs in-repo

## Tech Stack

- React 19
- TypeScript 6
- Vite 8
- ESLint
- Stripe Payment Links
- Calendly

## Local Development Setup

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

## Available npm Scripts

- `npm run dev` - start local dev server
- `npm run build` - type-check and create production bundle
- `npm run preview` - preview production build locally
- `npm run lint` - run eslint

## Production Build Instructions

```bash
npm run build
npm run lint
```

## Launch-Critical Files

- `index.html`
- `src/App.tsx`
- `src/i18n.ts`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/og/gmx-labs-preview.jpg`
- `QA_REPORT.md`
- `LAUNCH_CHECKLIST.md`
- `REPLACE_BEFORE_LIVE.md`
- `DEPLOYMENT_NOTES.md`

## SEO and Discoverability Notes

The project includes:

- Canonical metadata
- Open Graph tags and preview image
- Twitter card metadata
- robots.txt
- sitemap.xml
- JSON-LD structured data in source

Before final launch, validate all metadata values on the deployed URL.

## Security and Launch-Readiness Notes

Current readiness process includes:

- Build and lint verification
- Runtime placeholder sweeps
- Launch risk tracking in docs
- External links using security-conscious attributes for new-tab flows

Do not consider the project fully launch-approved until manual smoke checks and Lighthouse checks are completed and documented.

## Payment and Booking Integration Notes

- Stripe payment link: https://buy.stripe.com/7sY7sL0BdakRcERa7SgnK02
- Calendly booking link: https://calendly.com/rigocrypto
- Contact email: rigovivas71@gmail.com

Recommended manual checks before public promotion:

- Stripe link opens and payment flow starts
- Calendly link opens and booking flow is available
- Email link opens with correct subject

## QA Checklist Summary

Status from current repository docs:

- Build and lint: Done
- Placeholder runtime sweep: Done
- Metadata and SEO files present: Done
- Manual device/browser QA: Blocked
- Lighthouse targets: Blocked
- Final release governance: Soft No-Go

See `QA_REPORT.md` and `LAUNCH_CHECKLIST.md` for full details.

## Deployment Notes

Project targets GitHub Pages with base path:

- `/GMX-Labs/`

After deploying, verify:

- Homepage renders correctly
- CTA links work
- `robots.txt` returns 200
- `sitemap.xml` returns 200
- OG image loads from production URL

## Project Status

Current status:

`Release Candidate / Pre-Launch QA (Soft No-Go)`

The project should not be publicly announced until manual validation and launch sign-off are complete.

## Contact and Support

For project inquiries:

- Email: rigovivas71@gmail.com
- Booking: https://calendly.com/rigocrypto
Still required before final Go decision:

- Manual cross-device QA
- Live smoke tests
- Lighthouse evidence capture

## Payment and Booking Integration Notes

- Stripe payment link is integrated in CTA sections:
  - https://buy.stripe.com/7sY7sL0BdakRcERa7SgnK02
- Calendly booking link is integrated:
  - https://calendly.com/rigocrypto
- Contact email flow:
  - rigovivas71@gmail.com

Before launch, verify all CTA links manually on deployed production pages.

## QA Checklist Summary

Reference files:

- `QA_REPORT.md`
- `LAUNCH_CHECKLIST.md`

Current status:

- Automated checks: mostly done
- Manual QA and production validation: blocked/pending
- Release decision: Soft No-Go

## Deployment Notes

Vite base path is configured for GitHub Pages deployment:

- `/GMX-Labs/`

Standard pre-deploy checks:

```bash
npm run build
npm run lint
git status
```

After deployment, run manual checks for:

- Homepage rendering on desktop/mobile
- CTA links (Stripe, Calendly, mailto)
- `robots.txt` and `sitemap.xml` availability
- OG image and metadata visibility
- Browser console health

## Project Status

`Release Candidate / Pre-Launch QA`

This project should remain in Soft No-Go until manual QA, live smoke testing, and documented launch sign-off are complete.

## Contact and Support

- Email: rigovivas71@gmail.com
- Booking: https://calendly.com/rigocrypto
- Payment: https://buy.stripe.com/7sY7sL0BdakRcERa7SgnK02
