# Freebie Landing Pages — Changelog

Two client briefs landed in parallel and both have been merged into the live site.

## Source briefs

- **`5-Freebie-Resource-Landing-Page-Content-Edits.pptx`** — content for pages 2–5 (Ground & Reset, Living More Intentionally, Working with the Moon, Crystal Cheat Sheet) and the popup confirmation copy.
- **`Micro-Rituals-Freebie-Landing-Page-Content-Edits.pptx`** — content for Page 1 (Micro Rituals), bullet-style features, "Sacred made simple." line below the form, cross-promo card titles.

Both PPTs are included in this `docs/` folder.

---

## What changed

### Pages

| # | Freebie | File |
|---|---|---|
| 1 | 5 Micro Rituals to Come Back to Yourself | `freebie-micro-rituals.html` |
| 2 | 5 Simple Ways to Ground & Reset | `freebie-product-2.html` |
| 3 | Living More Intentionally | `freebie-product-3.html` |
| 4 | Working with the Moon | `freebie-product-4.html` |
| 5 | Crystal Cheat Sheet | `freebie-crystal-cheat-sheet.html` *(new)* |

### Shared structure across all 5 pages

- Header with "Powerful Intention" wordmark + ring symbol (`hero-logo-symbol`) above the hero headline.
- Hero: headline, subtext, italic tagline, "Get the Free Guide" CTA.
- What's Inside: intro paragraphs + **bullet-point feature list** (`features-list--bullets`) + closing line.
- Inside Preview: 3 placeholder cards (awaiting actual PDF screenshots).
- Form: name + email + consent, `data-slug` attribute identifying the freebie, "No spam" reassurance line, and **"Sacred made simple."** italic line below it.
- Explore More: 4 cross-promo cards (always includes all 4 sibling freebies).
- Success modal with exact copy from PPT slide 2 / 7:
  > Thank you for being here. Your guide should arrive in your inbox within the next few minutes…

### Routing

- `vercel.json` → `"cleanUrls": true` — URLs are `/freebie-micro-rituals` etc., no `.html`.
- Every page has `<meta name="robots" content="noindex, nofollow">` so Google won't index them while in preview.

### Animations + smooth scroll

`scripts/freebie-animations.js` adds (with `prefers-reduced-motion` respected):

- **Lenis 1.1.13** smooth-wheel scroll synced with GSAP's ticker.
- **GSAP entrance timeline** on hero load: header fade-down → logo symbol → headline → subtext → tagline → CTA pop.
- **ScrollTrigger reveals** for: section headings, intro paragraphs (stagger), feature items (slide from left), preview cards (rise + scale), form, explore cards.
- **Floating particles** canvas (`#freebie-particles`) in brand colors (mauve, heather, primrose, soft gold).
- Subtle parallax drift on `.bg-gradient`.
- Logo symbol scales 1.04 on hover.

### Form behavior (`scripts/form-handler.js`)

- Client-side validation (name min 2 chars, email regex, consent required).
- On submit: 1.2 s loading state → opens `#success-modal` (in-page HTML, not JS-injected).
- Modal: backdrop click / ✕ button / Esc to close; focus trap saves and restores prior focus.
- Form resets after submit so a returning user can re-submit.
- Includes a `slug` field in the commented-out `fetch('/api/subscribe')` block — ready to wire to backend.

---

## Open items / pending input

1. **Preview images (Section 3 on all 5 pages)** — placeholders only. Awaiting actual PDF screenshots (3 per page × 5 = 15 images, 800 × 1000 px PNG/JPG, max 500 KB each).
2. **Backend wiring** — forms don't POST yet. `api/subscribe.js` (Resend) handles the coming-soon waitlist; it'll need to know which freebie (via `slug`) so it sends the matching PDF.
3. **Vini's logo placement** — slides reference "Vini has instructions on where to place the logo and symbol." Logo symbol is currently centered above the hero headline. Adjust if Vini has specifics.
4. **Slide 4 / 4-of-Micro-Rituals "Vini, we should talk about which pages to use"** — preview-image discussion pending.

---

**Last updated:** 2026-05-26
