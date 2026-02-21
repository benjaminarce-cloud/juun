# JUUN wellness — Landing Page

Premium functional drink landing page built with Next.js 16 App Router + Tailwind CSS v4.

---

## Stack

- **Next.js 16** App Router (Turbopack)
- **Tailwind CSS v4** with `ui-*` utilities backed by CSS variables
- **Unbounded** font (Google Fonts, loaded via `next/font`)
- **Vercel** deployment
- **Level 2 commerce** — selection on-page, redirect to hosted checkout

---

## Setup (full overwrite from scratch)

### 1. Replace all source files

Copy the contents of `src/` into your repo's `src/` directory, overwriting everything.

### 2. Install dependencies

Make sure you have the correct packages. Your `package.json` should include:

```json
{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0"
  }
}
```

Run:
```bash
npm install
```

### 3. Environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
- Add your checkout URL when ready (Shopify / Stripe)
- Leave empty to keep the dev stub (shows an alert in development)

### 4. Tailwind v4 config

Your `postcss.config.js` (or `postcss.config.mjs`) should be:

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

No `tailwind.config.js` needed for v4 — all tokens live in `globals.css`.

### 5. Add hero photo

Place your lifestyle hero photo at:
```
public/placeholders/hero.jpg
```

Or update the `backgroundImage` in `src/components/sections/Hero.tsx` with your Cloudinary URL:
```tsx
backgroundImage: "url('https://res.cloudinary.com/YOUR_CLOUD/image/upload/YOUR_ID.jpg'), ..."
```

### 6. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel

```bash
git add .
git commit -m "feat: JUUN landing page — full redesign"
git push
```

Vercel will auto-deploy from your connected repo. No extra config needed.

Add `NEXT_PUBLIC_CHECKOUT_URL` as an environment variable in your Vercel project settings when you're ready to go live.

---

## Wiring the checkout

Open `src/lib/commerce.ts` and replace the stub URL in `buildCheckoutUrl()`:

**Shopify Storefront API:**
```ts
return `https://juunwellness.myshopify.com/cart/${variantId}:${qty}?channel=buy_button`
```

**Stripe Payment Link:**
```ts
return `https://buy.stripe.com/YOUR_LINK?prefilled_quantity=${qty}`
```

---

## Updating copy

All text lives in `src/content/siteCopy.ts`. Edit there — no need to touch components.

## Adding / changing flavors

All product config lives in `src/content/products.ts`. Add a new `Flavor` object with gradient colors, glow, and accent text — the purchase module picks it up automatically.

---

## Architecture

```
src/
  app/
    layout.tsx              # Root layout — font + metadata
    globals.css             # CSS variables + ui-* utilities + animations
    (site)/
      layout.tsx            # Minimal site wrapper
      page.tsx              # Page assembly (server component)
  components/
    ui/
      Button.tsx            # ui-* utility button, variants + sizes
      Container.tsx         # Max-width + gutter wrapper
      Pill.tsx              # Flavor/pack selector pill
      JuunLogo.tsx          # Inline SVG logo (color via currentColor)
    motion/
      Reveal.tsx            # IntersectionObserver reveal, reduced-motion safe
    sections/
      Header.tsx            # [client] Scroll-aware header, logo color flip
      Hero.tsx              # [client] Full-height hero, lifestyle photo bg
      SinesMarquee.tsx      # [server] "Los sines" ticker
      ValueProps.tsx        # [server] 4-benefit grid
      PurchaseModule.tsx    # [client] Flavor tinting + configurator
      HowItWorks.tsx        # [server] 3-step cards
      Ingredients.tsx       # [server] Yes/No ingredient table
      SocialProof.tsx       # [server] Testimonials on dark bg
      FAQ.tsx               # [client] Accordion
      FinalCTA.tsx          # [client] Closing CTA + footer
  content/
    siteCopy.ts             # All copy — headlines, descriptions, FAQ, etc.
    products.ts             # Flavors, packs, checkout config
  lib/
    cn.ts                   # className join helper
    commerce.ts             # Checkout seam (stub → replace with real URL)
    scroll.ts               # scrollToId() client helper
```
