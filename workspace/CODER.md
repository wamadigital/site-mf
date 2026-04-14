<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
# File Content Goes Here

## SEO & Static Files
- Vite `publicDir` is `./static` (NOT `./public`) — all static assets (robots.txt, sitemap.xml, site.webmanifest, llms.txt) go in `static/`
- Favicon is a hosted PNG at `https://c.animaapp.com/mnxsvuft69auLT/img/generated-image-1776125443770.png`
- OG image uses existing hero asset `https://c.animaapp.com/mnxsvuft69auLT/assets/image-1.png`
- Live URL: `https://billowing-rice-5144.dev.animaapp.io`

## TeamSection Tabs
- Tab state (`activeIndex`) lives in `TeamSection/index.tsx`, passed to `TeamTabList` and each `TeamTabPanel`
- `TeamTabList` takes `tabs` (string[]), `activeIndex`, `onTabChange`; renders `<button>` elements with active styling (white bg + shadow); horizontal scroll on mobile
- `TeamTabPanel` handles mount/unmount with `shouldRender` + directional slide + scale animation (400ms cubic-bezier)
- `prevIndex` ref tracks previous tab for slide direction
- `panelsData` array in `index.tsx` holds: `tab`, `title`, `description`, `features`, `learnMoreText`, `learnMoreHref`, `placeholderColor`, `placeholderIcon`, `statText`
- Right side uses gradient placeholder (`bg-gradient-to-br`) with emoji icon instead of video — ready for real screenshots later

## Navbar
- Navbar is `fixed` positioned, inner container has `rounded-2xl`
- Scroll-based bg added via `useState`/`useEffect` listening to `window.scrollY > 20`
- Reference site (arcade.software): navbar goes from transparent → white bg on scroll
- Mobile menu state (`mobileOpen`) lives in `Navbar/index.tsx`, passed as props to `NavbarMobileToggle` and `NavbarMenu`
- `NavbarMobileToggle` is now a `<button>` with `isOpen`/`onToggle` props; swaps hamburger ↔ close icon via opacity
- `NavbarMenu` accepts `mobileOpen`/`onClose` props; on mobile shows as full-screen overlay with `overflow-y-auto`, hidden on `md:` via responsive classes
- Body scroll is locked (`overflow: hidden`) when mobile menu is open
</coder>
