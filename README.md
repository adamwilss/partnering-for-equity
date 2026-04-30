# Partnering for Equity

The AI-powered platform connecting startup founders with world-class service providers — trading skills for equity and building the future, together.

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)

## Overview

Partnering for Equity is a platform that enables:

- **Founders** to access elite talent without burning runway — pay service providers in equity instead of cash
- **Service Providers** (developers, designers, marketers) to earn equity in promising startups while doing work they love

Our AI matching engine analyzes skills, equity preferences, culture fit, and industry focus to create partnerships that thrive.

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 16](https://nextjs.org/) | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [Vercel](https://vercel.com/) | Hosting & deployment |

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (metadata, fonts, Navbar, Footer)
│   ├── page.tsx            # Main page composing all sections
│   └── globals.css         # Tailwind + custom styles
├── components/
│   ├── ui/                 # Reusable primitives (Button, Badge, Accordion, etc.)
│   ├── layout/             # Navbar & Footer
│   └── sections/           # Page sections (Hero, HowItWorks, FAQ, etc.)
├── content/
│   └── siteContent.ts      # All website content in one place
└── hooks/
    └── useScrollAnimation.ts  # Intersection Observer hook for scroll animations
```

## Deployment

This project is configured for zero-config deployment on [Vercel](https://vercel.com/).

1. Push to the `main` branch on GitHub
2. Import the repo in Vercel
3. Vercel auto-detects Next.js and deploys

## Content Editing

All website text is centralized in `src/content/siteContent.ts`. To update any section's content, edit that file — no need to touch components.

## License

Private
