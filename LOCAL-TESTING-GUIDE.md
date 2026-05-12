# Local Testing Guide - Freebie Landing Pages

## 🚀 Quick Start

### **Option 1: Open Files Directly** (Easiest)

**From Terminal:**
```bash
cd "/Users/ankit/Macbook/TechView/Powerful-Intention/landing pages/ps_cs"

# Open each page in browser
open freebie-micro-rituals.html
open freebie-product-2.html
open freebie-product-3.html
open freebie-product-4.html
```

**From Finder:**
1. Navigate to: `Powerful-Intention/landing pages/ps_cs/`
2. Double-click any `.html` file
3. Opens in your default browser

**From VS Code:**
1. Right-click on HTML file
2. Select "Open with Live Server" (if installed)
3. OR "Reveal in Finder" → Double-click

---

### **Option 2: Local Web Server** (Recommended for Full Testing)

This prevents CORS issues and simulates real hosting:

**Using Python (Built-in on Mac):**
```bash
cd "/Users/ankit/Macbook/TechView/Powerful-Intention/landing pages/ps_cs"

# Python 3 (recommended)
python3 -m http.server 8000

# OR Python 2
python -m SimpleHTTPServer 8000
```

**Then open in browser:**
- Main page: http://localhost:8000/freebie-micro-rituals.html
- Product 2: http://localhost:8000/freebie-product-2.html
- Product 3: http://localhost:8000/freebie-product-3.html
- Product 4: http://localhost:8000/freebie-product-4.html
- Coming Soon: http://localhost:8000/index.html

**To stop server:** Press `Ctrl + C` in terminal

---

**Using Node.js (if installed):**
```bash
# Install http-server globally (one time)
npm install -g http-server

# Run server
cd "/Users/ankit/Macbook/TechView/Powerful-Intention/landing pages/ps_cs"
http-server -p 8000

# Access at http://localhost:8000
```

---

**Using VS Code Live Server Extension:**
1. Install "Live Server" extension in VS Code
2. Right-click any `.html` file
3. Select "Open with Live Server"
4. Auto-opens at http://127.0.0.1:5500/filename.html
5. **Bonus:** Auto-refreshes when you edit files!

---

## ✅ **Testing Checklist**

### **1. Visual/Layout Test**

**Page 1 - Micro Rituals** (Real Content):
- [ ] Hero section displays correctly
- [ ] Headline: "5 Micro Rituals to Feel Like Yourself Again"
- [ ] CTA button visible and styled
- [ ] "What's Inside" section has 5 bullet points
- [ ] Preview section shows 3 placeholder images
- [ ] Form section visible
- [ ] "Explore More" shows 3 cards (Products 2, 3, 4)
- [ ] Footer displays

**Pages 2, 3, 4** (Placeholder Content):
- [ ] All placeholders render correctly
- [ ] Mix of Lorem ipsum, [BRACKETS], and real text visible
- [ ] Geometric patterns display in preview section
- [ ] "Explore More" shows correct 3 pages (excludes current page)

---

### **2. Form Functionality Test**

For **each page**, test the form:

**Test 1: Empty Form Submission**
1. Click "Send Me the Guide" without filling anything
2. ✅ Should see browser validation errors
3. ✅ Red border should appear on empty fields

**Test 2: Invalid Email**
1. Enter name: "John"
2. Enter email: "notanemail"
3. Click submit
4. ✅ Should show "Please enter a valid email address" OR browser validation

**Test 3: Missing Checkbox**
1. Enter name: "John"
2. Enter email: "john@example.com"
3. Don't check consent box
4. Click submit
5. ✅ Should see alert: "Please agree to receive emails to continue."

**Test 4: Valid Submission** ✨
1. Enter name: "John"
2. Enter email: "john@example.com"
3. Check consent box
4. Click "Send Me the Guide"
5. ✅ Button text changes to "Sending..."
6. ✅ After 1.5 seconds:
   - Form disappears
   - Success message appears: "Thank You!"
   - Your email shows in message: "john@example.com"
   - Page scrolls to success message

---

### **3. Navigation Test**

**Header:**
- [ ] Click "POWERFUL INTENTION" logo
- [ ] Should navigate to `index.html` (coming soon page)
- [ ] Click browser back button to return

**Explore More Cards:**
From Page 1 (Micro Rituals):
- [ ] Click "Daily Intention Planner" → Goes to `freebie-product-2.html`
- [ ] Click "Gratitude Journal Prompts" → Goes to `freebie-product-3.html`
- [ ] Click "Self-Reflection Workbook" → Goes to `freebie-product-4.html`

From Page 2:
- [ ] Should show Pages 1, 3, 4 (NOT Page 2)

From Page 3:
- [ ] Should show Pages 1, 2, 4 (NOT Page 3)

From Page 4:
- [ ] Should show Pages 1, 2, 3 (NOT Page 4)

**Hero CTA Button:**
- [ ] Click "Get Your Free Copy" in hero
- [ ] Should smooth-scroll down to form section

---

### **4. Responsive Design Test**

**Desktop View** (> 990px):
- [ ] Hero headline large (3.5rem)
- [ ] Preview section: 3 columns
- [ ] Explore More: 3 columns
- [ ] Form centered, max-width 600px

**Tablet View** (769px - 989px):
- [ ] Resize browser to ~800px width
- [ ] Preview section: 2 columns OR 1 column
- [ ] Explore More: 2 columns
- [ ] Fonts slightly smaller

**Mobile View** (< 768px):
- [ ] Resize browser to ~375px width (iPhone size)
- [ ] Hero headline smaller (2.5rem)
- [ ] All sections stack vertically
- [ ] Preview section: 1 column
- [ ] Explore More: 1 column
- [ ] Form full-width
- [ ] Text readable (no horizontal scroll)
- [ ] Buttons touch-friendly (big enough)

**Quick Responsive Test:**
1. Open browser DevTools (`Cmd + Option + I` on Mac)
2. Click device toolbar icon (phone/tablet icon)
3. Select device: iPhone 12, iPad, Desktop
4. Test on each

---

### **5. Browser Compatibility Test**

Test on **at least 2 browsers**:

**Chrome:**
- [ ] Open in Chrome
- [ ] Form works
- [ ] Layout correct
- [ ] No console errors (F12 → Console tab)

**Safari:**
- [ ] Open in Safari
- [ ] Form works
- [ ] Layout correct
- [ ] No console errors (Develop → Show JavaScript Console)

**Optional:**
- [ ] Firefox
- [ ] Edge

---

### **6. Performance Test**

**Check Load Speed:**
1. Open DevTools (`Cmd + Option + I`)
2. Go to "Network" tab
3. Refresh page (`Cmd + R`)
4. Check "Load" time at bottom
5. ✅ Should be under 2 seconds

**Check for Errors:**
1. Open DevTools Console
2. Refresh page
3. ✅ Should see NO red errors
4. ⚠️ Yellow warnings are OK

**Check Resources:**
- [ ] Fonts load (not using system fallback)
- [ ] No 404 errors for CSS/JS files
- [ ] Background gradient visible

---

### **7. Content Verification**

**Page 1 - Micro Rituals** (Real Content):
- [ ] Headline matches: "5 Micro Rituals to Feel Like Yourself Again"
- [ ] 5 bullet points match original content:
  - ✓ "gentle morning reset"
  - ✓ "quick midday pause"
  - ✓ "soft evening ritual"
  - ✓ "grounding practice for anxious moments"
  - ✓ "simple moment to reconnect"
- [ ] No [BRACKETS] or Lorem ipsum

**Pages 2, 3, 4** (Placeholders):
- [ ] Clearly visible placeholders (easy for founder to spot)
- [ ] Mix of placeholder types visible
- [ ] No broken HTML (all tags closed)

---

## 🐛 **Common Issues & Fixes**

### **Issue: Fonts don't load (shows Times New Roman instead)**

**Fix:**
1. Check if font files exist:
```bash
ls -la assets/fonts/
```
2. Should see:
   - `the-seasons-regular.ttf`
   - `Gotu-Regular.ttf`
   - `Karla-VariableFont_wght.ttf`
3. If missing, copy from original `ps_cs` folder

---

### **Issue: Styles not loading (page looks unstyled)**

**Fix:**
1. Check if CSS files exist:
```bash
ls -la styles/
```
2. Should see:
   - `base.css`
   - `freebie-landing.css`
3. Open DevTools → Network tab → Check for 404 errors
4. Verify file paths in HTML:
   ```html
   <link rel="stylesheet" href="styles/base.css">
   <link rel="stylesheet" href="styles/freebie-landing.css">
   ```

---

### **Issue: Form doesn't submit / JavaScript not working**

**Fix:**
1. Check if JS file exists:
```bash
ls -la scripts/
```
2. Should see: `form-handler.js`
3. Open DevTools Console → Check for errors
4. Verify script path in HTML:
   ```html
   <script src="scripts/form-handler.js"></script>
   ```

---

### **Issue: Background gradient not showing**

This is NORMAL for direct file open. Background works via:
- Local server (http://localhost)
- OR inline CSS

To test background, use **Option 2** (local server) above.

---

### **Issue: Links don't work / 404 errors**

**Check:**
1. File names match exactly (case-sensitive)
2. All HTML files are in same directory
3. No extra spaces in filenames

**Test navigation:**
```bash
# From terminal, verify files exist:
ls -la freebie-*.html
```

---

## 📸 **What to Look For (Visual Guide)**

### **Correct Layout:**
```
┌─────────────────────────────────────┐
│  POWERFUL INTENTION (header)        │
├─────────────────────────────────────┤
│                                     │
│  5 MICRO RITUALS TO FEEL LIKE      │
│  YOURSELF AGAIN                     │
│  (Large heading)                    │
│                                     │
│  [Get the Free Guide] Button       │
│                                     │
├─────────────────────────────────────┤
│  WHAT'S INSIDE (section)            │
│  ✓ Morning reset                    │
│  ✓ Midday pause                     │
│  ✓ Evening ritual                   │
│  ✓ Grounding practice               │
│  ✓ Reconnect moment                 │
├─────────────────────────────────────┤
│  INSIDE PREVIEW (section)           │
│  [img] [img] [img]                  │
│  (3 placeholders in a row)          │
├─────────────────────────────────────┤
│  GET YOUR FREE GUIDE (form)         │
│  Name: [___________]                │
│  Email: [___________]               │
│  ☐ I agree to receive emails        │
│  [Send Me the Guide] Button         │
├─────────────────────────────────────┤
│  EXPLORE MORE FREEBIES              │
│  [Card 1] [Card 2] [Card 3]        │
│  (3 cards in a row)                 │
├─────────────────────────────────────┤
│  © 2026 Powerful Intention          │
└─────────────────────────────────────┘
```

---

## ✨ **Quick Terminal Test Script**

Copy-paste this entire block to test all pages at once:

```bash
#!/bin/bash
cd "/Users/ankit/Macbook/TechView/Powerful-Intention/landing pages/ps_cs"

echo "🧪 Testing Landing Pages..."
echo ""

# Check files exist
echo "✓ Checking files..."
test -f freebie-micro-rituals.html && echo "  ✓ Page 1 exists" || echo "  ✗ Page 1 MISSING"
test -f freebie-product-2.html && echo "  ✓ Page 2 exists" || echo "  ✗ Page 2 MISSING"
test -f freebie-product-3.html && echo "  ✓ Page 3 exists" || echo "  ✗ Page 3 MISSING"
test -f freebie-product-4.html && echo "  ✓ Page 4 exists" || echo "  ✗ Page 4 MISSING"

# Check styles
echo ""
echo "✓ Checking styles..."
test -f styles/base.css && echo "  ✓ base.css exists" || echo "  ✗ base.css MISSING"
test -f styles/freebie-landing.css && echo "  ✓ freebie-landing.css exists" || echo "  ✗ freebie-landing.css MISSING"

# Check scripts
echo ""
echo "✓ Checking scripts..."
test -f scripts/form-handler.js && echo "  ✓ form-handler.js exists" || echo "  ✗ form-handler.js MISSING"

# Check fonts
echo ""
echo "✓ Checking fonts..."
test -d assets/fonts && echo "  ✓ Fonts folder exists" || echo "  ⚠️  Fonts folder missing (may affect display)"

echo ""
echo "🚀 Opening all pages in browser..."
echo ""

# Open all pages
open freebie-micro-rituals.html
sleep 1
open freebie-product-2.html
sleep 1
open freebie-product-3.html
sleep 1
open freebie-product-4.html

echo "✅ All pages opened! Check your browser."
echo ""
echo "📋 Testing checklist:"
echo "  1. Visual layout looks correct"
echo "  2. Form submission works"
echo "  3. Navigation links work"
echo "  4. Mobile responsive (resize browser)"
echo "  5. No console errors (F12 → Console)"
```

**To use:**
1. Save as `test-pages.sh`
2. Run: `chmod +x test-pages.sh && ./test-pages.sh`

---

## 🎯 **Before You Push - Final Checklist**

- [ ] All 4 pages open without errors
- [ ] Form validation works on all pages
- [ ] Form submission shows success message
- [ ] Navigation between pages works
- [ ] Header logo returns to index.html
- [ ] Mobile view tested (resize browser)
- [ ] No console errors (check DevTools)
- [ ] Placeholder content clearly visible
- [ ] Fonts load correctly (not Times New Roman)
- [ ] Colors match brand (mauve, cream, charcoal)
- [ ] Tested in at least 2 browsers

---

## 📤 **After Testing - Ready to Push**

Once everything looks good:

```bash
cd "/Users/ankit/Macbook/TechView/Powerful-Intention/landing pages/ps_cs"

# Check git status
git status

# Add new files
git add freebie-*.html styles/ scripts/ README-FREEBIE-PAGES.md

# Commit
git commit -m "Add 4 freebie landing pages with 4 sections each

- Page 1: 5 Micro Rituals (real content)
- Pages 2-4: Placeholder content for founder review
- Shared CSS (base.css + freebie-landing.css)
- Form validation JS
- Mobile responsive
- Cross-page navigation"

# Push
git push origin main
```

---

**Happy Testing! 🎉**

If you find any issues, let me know and I'll fix them before you push.
