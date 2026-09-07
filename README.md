# SendResQPls — Landing Page

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-latest-646CFF?style=flat-square&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

Public-facing marketing site for **SendResQPls** — a mobile app that connects disaster-affected citizens with rescue coordinators. Built with a strict Bauhaus design philosophy: pure geometry, no gratuitous decoration, every element purposeful.

---

## Overview

`SendResQPls-landingpage` is a two-page React application that serves as the primary public entry point for the SendResQPls platform. It communicates the product's core value to both citizens in need and administrators managing relief operations.

Key characteristics:

- **Zero external CSS framework** — all styles are co-located via inline `<style>` JSX tags
- **Minimal dependency surface** — only `react-router-dom` beyond the React/Vite toolchain
- **Performance-first animations** — CSS `transform`/`opacity` only, `prefers-reduced-motion` respected throughout
- **Scroll reveals** — powered by native `IntersectionObserver`, no animation library required

---

## Pages

### `/` — Main Landing Page

The primary marketing surface, structured around a single scroll journey:

| Section | Description |
|---|---|
| **Hero** | Animated word ticker cycling through disaster scenarios; 5-slide interactive mobile app screenshot carousel with 4.5 s auto-advance, hover-pause, and touch/swipe support |
| **How It Works** | 3-step visual walkthrough (●▲■ iconography) with scroll-triggered reveal animations |
| **FAQ** | Accordion-style frequently asked questions |
| **Access Portal** | Dual CTA — citizen app download prompt + admin login link |

### `/get-the-app` — Download Page

Dedicated app acquisition flow featuring:

- Step-by-step download instructions
- QR code for direct mobile access
- Feature highlights with dark navy navigation header (`#0B132B`)

---

## Design Language

SendResQPls uses a strict **Bauhaus-inspired** design system.

| Token | Value | Usage |
|---|---|---|
| Background | `#0D1B2A` | Primary dark canvas |
| Red | `#E63946` | Primary CTA, urgency signifiers |
| Yellow | `#F4D03F` | Accent, secondary highlights |
| Blue | `#2563EB` | Interactive elements, links |
| White | `#FFFFFF` | Body text, structural contrast |
| Font | **Inter Tight** (Google Fonts) | Condensed geometric sans-serif throughout |

**Design rules:**

- Pure shapes only — `●`, `■`, `▲` as decorative/iconographic elements
- Zero `border-radius` on structural layout elements
- No gradients on layout components
- No `text-shadow` anywhere
- All animation via `transform` and `opacity` — no layout-triggering properties

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| Routing | react-router-dom |
| Styles | Inline `<style>` JSX (vanilla CSS) |
| Hosting | Vercel |

---

## Installation

**Prerequisites:** Node.js ≥ 18, npm ≥ 9

```bash
# Clone the repository
git clone https://github.com/<your-org>/SendResQPls-landingpage.git
cd SendResQPls-landingpage

# Install dependencies
npm install
```

No environment variables are required.

---

## Running Locally

```bash
npm run dev
```

Opens the dev server at `http://localhost:5173` with hot module replacement.

---

## Build & Deploy

```bash
# Production build — outputs to /dist
npm run build

# Preview the production build locally
npm run preview
```

**Deploying to Vercel:**

The repository is configured for zero-config Vercel deployment. Push to `main` and Vercel will automatically detect the Vite framework, run `npm run build`, and serve the `/dist` output.

```
Framework Preset : Vite
Build Command    : npm run build
Output Directory : dist
Install Command  : npm install
```

No environment variables need to be configured in the Vercel dashboard.

---

## Project Structure

```
SendResQPls-landingpage/
├── public/                  # Static assets (favicon, OG image, QR code)
├── src/
│   ├── pages/
│   │   ├── LandingPage.tsx  # / route — main marketing page
│   │   └── GetTheApp.tsx    # /get-the-app route — download page
│   ├── App.tsx              # Router setup
│   └── main.tsx             # React entry point
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## License

© SendResQPls. All rights reserved.
