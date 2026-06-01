# Birmingham Clutch Repair

A modern React website for affordable, professional clutch repair services in Birmingham, UK.

Inspired by local clutch garage sites, rebuilt with a contemporary UI, original copy, and Unsplash photography.

## Features

- **React 19 + Vite** — fast development and production builds
- **React Router** — home, contact, and individual service pages
- **Responsive design** — mobile-friendly navigation and layout
- **Sections**: hero, trust badges, about, services, pricing, areas covered, contact form, FAQs

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Customisation

Edit `src/data/content.js` to update:

- Phone number and email
- Business name
- Service descriptions
- FAQ content
- Areas covered

All site images are defined in `src/data/images.js` (verified URLs). Replace those paths with your own workshop photos for a fully branded site. Images use `SafeImage` so a broken remote URL falls back automatically.

## Contact form & WhatsApp

- **Form submissions** are emailed to `Mas9211@yahoo.com` via [FormSubmit](https://formsubmit.co).
- **First submission only:** FormSubmit sends an **activation email** to that address — you must click the link once to start receiving enquiries.
- The form uses a standard POST (not `fetch`) so it works on localhost without CORS errors.
- **WhatsApp:** All call buttons open `+44 7405 851192` in WhatsApp (`07405 851192`).

To change email or WhatsApp number, edit `src/data/content.js`.
