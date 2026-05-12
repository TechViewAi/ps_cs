# Freebie Landing Pages - Documentation

**Project**: Powerful Intention - 4 Freebie Landing Pages
**Date Created**: May 11, 2026
**Status**: Draft - Awaiting Content from Founder

---

## 📋 Overview

This folder contains 4 landing pages for digital freebie products. Each page has 4 sections as per contract requirements:

1. **Hero Section** - Headline, subtext, tagline, CTA
2. **What's Inside Section** - Features/benefits list
3. **Preview Section** - Visual preview (images or placeholders)
4. **Form + Explore More Section** - Email capture form + cross-promotion

---

## 📁 File Structure

```
ps_cs/
├── index.html                      (Original "Coming Soon" page)
├── freebie-micro-rituals.html      ✅ REAL CONTENT (Page 1)
├── freebie-product-2.html          📝 PLACEHOLDER (Page 2)
├── freebie-product-3.html          📝 PLACEHOLDER (Page 3)
├── freebie-product-4.html          📝 PLACEHOLDER (Page 4)
│
├── styles/
│   ├── base.css                    (Shared: fonts, colors, reset)
│   └── freebie-landing.css         (Landing page sections)
│
├── scripts/
│   └── form-handler.js             (Email form validation)
│
├── assets/
│   └── freebies/                   (Placeholder images go here)
│       ├── micro-rituals/
│       ├── product-2/
│       ├── product-3/
│       └── product-4/
│
├── styles.css                      (Original coming soon styles)
├── script.js                       (Original coming soon JS)
└── README-FREEBIE-PAGES.md         (This file)
```

---

## 🎨 Design System

**Fonts:**
- Display/Headings: "The Seasons" (serif)
- Subheadings: "Gotu" (serif)
- Body: "Karla" (sans-serif)

**Colors:**
- Primary Brand: `#82574d` (Mauve)
- Secondary: `#ad8682` (Heather)
- Light: `#e5d1cf` (Primrose)
- Background: `#f8f6f4` (Cream)
- Text: `#595354` (Charcoal)

**Typography Scale:**
- Hero Headline: 3.5rem (desktop) / 2.5rem (mobile)
- Section Heading: 2.5rem (desktop) / 2rem (mobile)
- Body: 1.15rem - 1.25rem
- Form Labels: 0.9rem uppercase

---

## 📄 Page Details

### **Page 1: 5 Micro Rituals Guide** ✅
**File**: `freebie-micro-rituals.html`
**Status**: Complete with real content
**Content**: From original brief (5 rituals to feel like yourself again)

**Sections:**
1. Hero: "5 Micro Rituals to Feel Like Yourself Again"
2. What's Inside: 5 bullet points + intro paragraphs
3. Preview: 3 placeholder geometric patterns (awaiting PDF screenshots)
4. Form: Name + Email + Consent checkbox

**Action Items for Founder:**
- [ ] Provide 3-5 PDF preview screenshots (800×1000px each)
- [ ] Review and approve copy
- [ ] Optionally add hero background image

---

### **Page 2: Daily Intention Planner** 📝
**File**: `freebie-product-2.html`
**Status**: Placeholder content
**Freebie Type**: TBD

**Placeholder Content:**
- Hero headline: "Daily Intention Planner"
- Subtext: "Structure your day with purpose and clarity"
- 5 feature placeholders (mix of real-sounding + [BRACKETS])
- 3 geometric pattern previews

**Action Items for Founder:**
- [ ] Provide actual freebie name/title
- [ ] Provide headline, subtext, tagline
- [ ] Provide 4-6 bullet points for "What's Inside"
- [ ] Provide 3 preview images
- [ ] Confirm freebie format (PDF, notion template, checklist, etc.)

---

### **Page 3: Gratitude Journal Prompts** 📝
**File**: `freebie-product-3.html`
**Status**: Placeholder content
**Freebie Type**: TBD

**Placeholder Content:**
- Hero: "Gratitude Journal Prompts"
- Subtext: "50 thoughtful prompts to deepen your practice"
- Mixed placeholder text (some real, some lorem ipsum, some [BRACKETS])

**Action Items for Founder:**
- [ ] Confirm or change product name
- [ ] Provide full copy (hero, intro, features)
- [ ] Provide preview images
- [ ] Confirm freebie format

---

### **Page 4: Self-Reflection Workbook** 📝
**File**: `freebie-product-4.html`
**Status**: Placeholder content
**Freebie Type**: TBD

**Placeholder Content:**
- Hero: "Self-Reflection Workbook"
- Subtext: "Guided exercises for deeper self-awareness"
- 6 feature placeholders

**Action Items for Founder:**
- [ ] Confirm or change product name
- [ ] Provide full copy
- [ ] Provide preview images
- [ ] Confirm freebie format

---

## 📧 Email Form Functionality

**Current State:**
- ✅ Client-side validation (name, email, checkbox)
- ✅ Success message after submit
- ✅ Stores user email in success message
- ❌ **NOT YET INTEGRATED** with backend API

**Form Fields:**
1. First Name (required, min 2 chars)
2. Email Address (required, email format)
3. Consent Checkbox (required)

**After Submit:**
- Form hides
- Success message appears: "Thank You! Check your inbox..."
- No actual email sent yet (backend team will integrate)

**Backend Integration TODO:**
Located in `scripts/form-handler.js` around line 50:
```javascript
// TODO: Replace with actual API call
// Example:
// fetch('/api/subscribe', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name, email, consent: true })
// })
```

---

## 🔗 Navigation Flow

**Cross-Promotion:**
Each page has "Explore More Freebies" section showing 3 other pages:
- Page 1 → Pages 2, 3, 4
- Page 2 → Pages 1, 3, 4
- Page 3 → Pages 1, 2, 4
- Page 4 → Pages 1, 2, 3

**Header:**
All pages have "POWERFUL INTENTION" logo linking back to `index.html` (coming soon page)

---

## 📐 The 4 Contractual Sections

Each landing page includes exactly 4 sections as per contract:

| Section # | Name | Contents |
|-----------|------|----------|
| **Section 1** | Hero | Headline, subtext, tagline, CTA button, optional hero image |
| **Section 2** | What's Inside | Intro paragraphs + 5-6 bulleted features with checkmarks |
| **Section 3** | Preview Gallery | 3 preview images (or geometric placeholders) in grid |
| **Section 4** | Form + Explore More | Email form (name, email, consent) + success message + 3 cross-promo cards |

**Note**: Header and Footer are NOT counted as sections (shared elements).

---

## 🎯 Content Replacement Guide

To replace placeholder content, search for these markers:

- `[PRODUCT NAME]` - Replace with actual freebie name
- `[HEADLINE GOES HERE]` - Replace with actual headline
- `[DESCRIPTION]` - Replace with actual description
- `[FEATURE 1]`, `[FEATURE 2]`, etc. - Replace with actual features
- `Lorem ipsum...` - Replace with real copy
- `[SECTION HEADING]` - Replace with actual section title
- `[IMAGE 1]`, `[IMAGE 2]` - Replace with actual images

**Files to edit:**
- `freebie-product-2.html` - Lines with `[BRACKETS]` or "Lorem ipsum"
- `freebie-product-3.html` - Lines with `[BRACKETS]` or "Lorem ipsum"
- `freebie-product-4.html` - Lines with `[BRACKETS]` or "Lorem ipsum"

---

## 🖼️ Image Specifications

**Preview Images (Section 3):**
- Format: PNG or JPG
- Size: 800×1000px (4:5 ratio) recommended
- Max file size: 500KB each (compress before upload)
- Naming: `preview-1.png`, `preview-2.png`, `preview-3.png`

**Hero Background (Optional):**
- Format: JPG or WebP
- Size: 1600×900px (16:9 ratio)
- Max file size: 300KB
- Add via inline style: `<section class="hero-section" style="background-image: url('assets/freebies/product-2/hero.jpg');">`

**Upload Location:**
```
assets/
└── freebies/
    ├── micro-rituals/
    │   ├── preview-1.png
    │   ├── preview-2.png
    │   └── preview-3.png
    ├── product-2/
    ├── product-3/
    └── product-4/
```

---

## 📱 Responsive Breakpoints

**Desktop** (990px+):
- 3-column "Explore More" grid
- Full-width hero (800px max content)
- 3-column preview grid

**Tablet** (769px - 989px):
- 2-column grids
- Adjusted font sizes

**Mobile** (< 768px):
- Single column layout
- Stacked sections
- Smaller fonts (2.5rem hero)
- Full-width form

---

## ✅ Testing Checklist

Before presenting to founder:

- [ ] All 4 pages load without errors
- [ ] Forms validate correctly (empty fields, invalid email)
- [ ] Success message appears after form submit
- [ ] All cross-promotion links work
- [ ] Header logo links to index.html
- [ ] Mobile responsive (test on phone)
- [ ] Tablet responsive (test on iPad)
- [ ] Desktop layout correct
- [ ] All fonts loading correctly
- [ ] Colors match brand guidelines

---

## 🚀 Deployment

**Local Testing:**
1. Open any HTML file in browser
2. Test form submission
3. Check navigation between pages

**Deploy to Hosting:**
- Upload all files maintaining folder structure
- Ensure `/styles/` and `/scripts/` folders are included
- Test all 4 pages after deployment
- Verify fonts load (check `/assets/fonts/` path)

**Recommended Hosts:**
- Vercel (already configured - see `vercel.json`)
- Netlify
- GitHub Pages

---

## 📞 Next Steps

**For Founder:**
1. Review Page 1 (Micro Rituals) - approve or request changes
2. Provide content for Pages 2, 3, 4:
   - Product names
   - Headlines and taglines
   - Feature bullet points (5-6 per page)
   - Preview images (3 per page)
3. Decide on freebie delivery method (Zapier, Mailchimp, custom backend)

**For Development Team:**
1. Integrate email form with backend API
2. Set up email automation (send freebie PDFs)
3. Add analytics tracking (Google Analytics, Facebook Pixel)
4. Deploy to production

---

**Questions?** Contact: [Your Contact Info]
**Last Updated**: May 11, 2026
**Version**: 1.0 (Draft)
