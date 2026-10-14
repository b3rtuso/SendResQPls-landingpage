# SendResQPls — Landing Page

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-latest-646CFF?style=flat-square&logo=vite&logoColor=white)

Public website for **SendResQPls**, the disaster incident reporting and emergency response system for MDRRMO Balayan. It introduces the platform to citizens and directs them to download the mobile app.

---

## Pages

### `/`: Main Landing Page

| Section | Description |
|---|---|
| **Hero** | Animated disaster-scenario ticker and app screenshot carousel |
| **How It Works** | 3-step walkthrough with scroll-triggered animations |
| **FAQ** | Accordion-style common questions |
| **Access Portal** | App download prompt |
| **Terms & Privacy** | Terms & Conditions (PD 1727) and Privacy Policy (RA 10173) |

### `/get-the-app`: Download Page

Step-by-step download instructions, QR code, and feature highlights.

---

## Design Language

Bauhaus-inspired: pure geometric shapes (●, ■, ▲), a bold color palette (navy `#0D1B2A`, red `#E63946`, yellow `#F4D03F`, blue `#2563EB`), the **Inter Tight** typeface, and animations built only on `transform`/`opacity` that respect `prefers-reduced-motion`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| Routing | react-router-dom |

---

## Getting Started

**Prerequisites:** Node.js >= 18, npm >= 9

```bash
npm install
npm run dev       # development server
npm run build     # production build
npm run preview   # preview production build
```

---

## License

© SendResQPls. All rights reserved.
