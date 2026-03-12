# easy-yum memory

## Project
Next.js recipe site. Dev server runs on port 3000 via `npm run dev`.

## Current design
- Background: `#7aaa96` (darker muted mint green)
- Food watermarks: `FoodWatermarks.jsx` — Carrot (top-right), Celery (left-mid), Steak (bottom-right)
- Single color `#a8ccbe` for all watermarks (lighter mint tone, same family as bg)
- Watermarks are `fixed` positioned, `pointer-events-none`

## In progress — food watermark line color
- SVG files are in `/public/watermarks/` — filenames like `Asset 6.svg` (use %20 for spaces in src)
- Currently using: Asset%206.svg, Asset%2046.svg, Asset%2028.svg
- Rendering via `<motion.img>` with CSS filter to colorize black SVG lines
- Current filter: `invert(1) sepia(1) saturate(3) hue-rotate(100deg) brightness(0.72)`
- Background: `#b8d9cc` (light mint, set via inline style in page.js)
- Line color not quite right yet — too blue-green at 115deg, too lime at lower hue. Need a different green. User will return to dial it in.
- The filter chain: invert makes black→white, sepia adds warmth, hue-rotate shifts to green, brightness darkens

## Key files
- `app/page.js` — layout, background color, watermark placement
- `components/ui/FoodWatermarks.jsx` — SVG food watermarks
- `components/ui/Daisy.jsx` — old daisy watermark (no longer used)
- `components/sections/Hero.jsx` — animated title "Easy, Yum!"
