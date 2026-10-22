# Build brief: Cuantos Tacos demo landing page (Pawzled food portfolio piece)

This folder is the project root (H:\Pawzled\Landing\cuantos-tacos). Make it a git repo; GitHub repo `cuantos-tacos` under SleepingProgrammer. Static site (HTML/CSS/JS or Vite), deployable to Cloudflare Workers; copy the `.github/workflows/deploy.yml` pattern from `H:\Pawzled\Landing\vindam-fitness`. Photos are in `assets/photos` (use ONLY these). Run locally, check desktop + mobile widths, fix overlap/unreadable text before finishing.

# Argon build prompt — Cuantos Tacos (Austin, TX) landing page

Build a single-page, mobile-first landing page for **Cuantos Tacos**, a Michelin Bib Gourmand–recognized Mexico City–style taco truck in East Austin, Texas. It replaces their current site, which is only a bare Square Online order cart. The page should feel like a confident independent brand. Think a Mexico City taquería sign crossed with a Texas gig poster. It should not look like a SaaS template. Use only the facts below. Do not invent dishes, prices, reviews, or quotes.

## Brand facts (use verbatim where possible)
- Name: Cuantos Tacos ("¿Cuántos tacos?" = "How many tacos?"). This is the brand's hook. Use it as the main headline device.
- What: Mexico City–style street tacos and quesadillas. Serving Austin since September 2019.
- Chef/owner: Luis "Beto" Robledo.
- Recognition: Michelin Guide Bib Gourmand, 2024 & 2025.
- Craft: 100% nixtamal corn tortillas. They are bright yellow and paper-thin. Meats are cooked in a traditional chorizera pan with a raised center.
- Known for: suadero (brisket) taco with onion & cilantro. The cachete (beef cheek) is a close second. The champiñones (mushroom) taco is the pick for anyone wanting less meat.
- Address: 1108 E 12th St, Austin, TX 78702. It's in a shaded food-truck park with picnic tables. You order at the counter.
- Phone: (512) 903-3918
- Hours: Tue–Sat 11:00 AM–10:00 PM · Sun 10:00 AM–4:00 PM · Mon closed
- Instagram: @cuantostacos512 → https://www.instagram.com/cuantostacos512/
- TikTok: add a placeholder link `https://www.tiktok.com/@cuantostacos512` and mark it `<!-- TODO confirm handle -->`
- Online ordering: https://www.cuantostacosaustin.com/ (keep it as the "Order pickup" link)

## Menu highlights (descriptions from their own menu)
Tacos are on nixtamal corn tortillas with onion & cilantro, **$2.75 each** (from their site; add a small "prices subject to change" note).
- **Suadero** — brisket. The signature.
- **Cachete** — barbacoa (beef cheek).
- **Campechana** — suadero & longaniza.
- **Longaniza** — Mexican chorizo.
- **Carnitas** — pork.
- **Buche** — pork stomach.
- **Revuelta** — carnitas & buche.
- **Champiñones** — grilled mushrooms in salsa adobo (note: not vegetarian or vegan).
- **Champi-Longi** — champiñones & longaniza.
Quesadillas: 10-inch flour tortilla, melted cheese, grilled onion and one chile toreado. **Suadero Quesadilla $8.** Also available as Cachete, Campechana, Longaniza, Buche, Revuelta, Champiñón, Carnitas, and plain Cheese. Show these without prices.
Extras: **Frijoles Especiales** (charro-style beans with campechano meat from the pot, 8 oz) and **Cebolla Asada** (grilled onions).
Weekly specials strip: **Tripa Tuesdays · Lengua Wednesdays · Torta Fridays · Trompo (Pastor) Saturdays.**
Also mention: taco packages and on-site catering (link to the order site).

## Sections (in order)
1. **Sticky header**: wordmark "CUANTOS TACOS" on the left. On the right: "Order pickup" pill button and a hamburger menu on mobile.
2. **Hero**: full-bleed `01-tacos-overhead-on-orange-table.jpg` with a dark gradient at the bottom. Headline in huge condensed type: "¿Cuántos?" On the next line: "Mexico City street tacos. East Austin." Badge: "Michelin Bib Gourmand 2024 & 2025". Two CTAs: "Order pickup" (primary) and "Find the truck" (anchors to location). Below that, a live open/closed chip computed in JS from the hours above, using the America/Chicago timezone.
3. **Ticker marquee**: a slow horizontal scroll repeating "SUADERO · CACHETE · CAMPECHANA · LONGANIZA · CARNITAS · BUCHE · CHAMPIÑONES · NIXTAMAL ·". Respect prefers-reduced-motion.
4. **Menu highlights**: "The board." Design it like a hand-painted taquería menu board, not cards. Use two columns on desktop and one on mobile. Put the name in display type, the short description in body type, and the price right-aligned with dotted leaders. Feature the Suadero row with a "the one" tag. Inset photos: `10-five-tacos-yellow-nixtamal-tortillas.jpg` beside Tacos, `03-quesadilla-chile-toreado.jpg` beside Quesadillas, `09-tacos-and-frijoles.jpg` beside Extras. Follow with the weekly-specials strip as a bold yellow band.
5. **Story**: "Since 2019, one pan at a time." Write 2–3 short paragraphs using only the facts above: Beto Robledo, Mexico City style, the chorizera pan, nixtamal tortillas, and the Bib Gourmand. Images: `06-yellow-truck-exterior.jpg` (large) plus `07-truck-logo-open-sign.jpg` (offset and overlapping, slightly rotated −2°).
6. **Gallery**: an asymmetric mosaic. On mobile, use a horizontal snap-scroll. Photos: `02-tacos-closeup-plate.jpg`, `04-spread-tacos-quesadilla-beans.jpg`, `05-picnic-table-food-truck-park.jpg`, `08-food-truck-park-picnic-tables.jpg`, `09-tacos-and-frijoles.jpg`, `10-five-tacos-yellow-nixtamal-tortillas.jpg`. Add a lightbox on tap. Small caption: "Photos: The Infatuation (Richard Casteel, Nicolai McCrary)".
7. **Launch list signup**: "Get the taco text." Copy: "Specials, sell-outs and new drops — straight to your phone." Include an email field and an optional US phone field with SMS consent checkbox text: "I agree to receive recurring texts from Cuantos Tacos. Msg & data rates may apply. Reply STOP to opt out." Add client-side validation and an inline success state. No backend: use a form POST to `#` with a `<!-- TODO connect provider -->` comment.
8. **Location & hours**: an embedded Google Map (iframe, lazy-loaded) for 1108 E 12th St, Austin, TX 78702. Next to it, an hours table that highlights today. Add a tap-to-call button for (512) 903-3918 and a "Get directions" button. Note: "Order at the counter, eat at the shaded picnic tables."
9. **Footer**: big wordmark, Instagram + TikTok icon links, an order link, and "© Cuantos Tacos, Austin TX". Add a small "Site concept by Pawzled — pawzled.com".

## Design direction: "Taquería sign-painter meets Texas gig poster"
- **Palette (exact hex):**
  - Masa Yellow `#F2B705` (signature; matches the truck and the tortillas). Use it for bands, badges, and the primary button.
  - Chile Red `#C8261B` for prices, highlights, and hover states.
  - Comal Black `#141210` for the main text and dark sections.
  - Nixtamal Cream `#FBF3E2` for the page background.
  - Cilantro `#2F6B3A`, used sparingly for the open-now chip and success states.
  - Picnic Orange `#E5772B` for small accents only (it echoes the picnic tables in the photos).
- **Fonts (Google Fonts):**
  - Display: **Anton** (uppercase, tight tracking −0.01em) for headlines, the wordmark, and menu item names.
  - Body/UI: **Work Sans** 400/500/700.
  - Accent: **DM Mono** 500 for prices, hours, and small labels. Use tabular figures.
  - No script fonts. No Cormorant Garamond, Plus Jakarta Sans, or Inter.
- **Texture & details:** add a subtle paper-grain noise overlay on cream sections (CSS/SVG, under 5 KB). Use thick 3px Comal Black rules between menu rows and sticker-style rotated badges for "Bib Gourmand" and "the one". Use hard-edged offset shadows (4px 4px 0 #141210) on buttons, not soft blurs. Photos get square corners, never rounded "card" corners. Keep the layout generous and blocky. Very large type is welcome.
- **Motion:** keep it minimal. Use the marquee, a fade-up on scroll, and a tiny hover tilt on menu photos. Everything must be disabled under prefers-reduced-motion.

## Tech, performance & SEO
- One static HTML page with vanilla CSS/JS (or Tailwind), mobile-first, aiming for Lighthouse 95+.
- Images: put them in `assets/photos/` with the filenames above. Use `<picture>` with WebP plus JPEG fallback, `srcset` at 480/960/1600 widths, explicit width/height, and `loading="lazy"` on everything except the hero. Use `fetchpriority="high"` on the hero. Preload the Anton font.
- SEO: `<title>Cuantos Tacos — Mexico City Street Tacos in East Austin | Michelin Bib Gourmand</title>`. Meta description: "Mexico City–style tacos on 100% nixtamal tortillas from chef Beto Robledo. Suadero, cachete, campechana & more at 1108 E 12th St, Austin. Bib Gourmand 2024 & 2025." Add Open Graph and Twitter tags using `01-tacos-overhead-on-orange-table.jpg`. Add JSON-LD `Restaurant` schema with name, address, telephone, servesCuisine "Mexican", priceRange "$", openingHoursSpecification matching the hours above, sameAs Instagram, url, and an award of "Michelin Bib Gourmand 2024, 2025". Use semantic headings (single h1) and descriptive alt text for every photo.
- Accessibility: WCAG AA contrast. Use black text on yellow, never white on yellow. Add a visible focus ring in Chile Red, labelled form fields, and a skip link.
