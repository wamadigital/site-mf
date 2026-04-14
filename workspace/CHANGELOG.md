<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
<!-- NEXT_ENTRY_HERE -->
## 2026-04-14
- Complete SEO setup: `index.html` rewritten with lang="pt-BR", title, description, OG/Twitter/canonical meta tags, JSON-LD (SoftwareApplication, Organization, WebSite)
- Generated favicon PNG via image_generation, referenced as `<link rel="icon">` and `<link rel="apple-touch-icon">`
- Created `static/site.webmanifest`, `static/sitemap.xml`, `static/robots.txt`, `static/llms.txt`
- Removed `__ANIMA_DBG__` console.log from `TeamTabPanel.tsx`
- Fixed vite.config.ts (removed accidental duplicate `import { resolve }`)
## 2026-04-14
- Fixed TeamSection tab switching not working: rewrote `TeamTabPanel` animation state machine (enter→visible→exit→hidden)
- Exiting panels now use `position: absolute` so they don't stack and block layout
- Added `__ANIMA_DBG__` logs for debugging tab state transitions
## 2026-04-13
- Refactored TeamSection tabs with ManyFeed content: 5 tabs (Coleta, Gestão, Exibição, Integrações, Resultados)
- Updated `panelsData` to use `tab`, `learnMoreText`, `placeholderColor`, `placeholderIcon` fields
- `TeamTabList` now receives dynamic `tabs` prop from parent; added horizontal scroll on mobile (`overflow-x-auto`, `shrink-0`, `whitespace-nowrap`)
- `TeamTabPanel` replaced video with gradient placeholder mockup; added scale animation; CTA text is now dynamic per tab
- Section heading/description updated to Portuguese ManyFeed copy
## 2026-04-13
- Wired up TeamSection tabs: `useState` in `index.tsx`, `TeamTabList` now accepts `activeIndex`/`onTabChange`, tabs are `<button>` elements
- `TeamTabPanel` refactored: accepts `isActive`/`direction` props, animate enter/exit with directional slide + fade (cubic-bezier easing, 400ms)
- Panel data extracted into `panelsData` array in `index.tsx`; direction computed from `prevIndex` ref vs new index
## 2026-04-13
- Added mobile menu open/close functionality: state in `Navbar/index.tsx`, passed to `NavbarMobileToggle` (hamburger/close toggle) and `NavbarMenu` (full-screen slide-in with body scroll lock)
- Added scroll-based background to Navbar (`src/sections/Navbar/index.tsx`): white bg + shadow appears on scroll > 20px, matching arcade.software reference behavior
</changelog>
