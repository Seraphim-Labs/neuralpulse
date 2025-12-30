# NeuralPulse

The World's Best AI News Aggregator & Newsletter. Powered by AI to deliver the pulse of artificial intelligence news.

## Features

- **Modern, Sleek Design** - Dark theme with beautiful gradients, animations, and glass-morphism effects
- **Newsletter Signup** - Email capture with animated feedback
- **Featured Articles** - Curated AI news articles with category badges
- **Category Browsing** - Filter articles by AI & ChatGPT, Machine Learning, Research, Tools, and Industry
- **Individual Article Pages** - Rich article layout with related articles
- **Responsive Design** - Fully responsive across all devices
- **SEO Optimized** - Meta tags and Open Graph support

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   ├── articles/
│   │   ├── page.tsx      # Articles listing
│   │   └── [slug]/
│   │       └── page.tsx  # Individual article
│   ├── categories/
│   │   └── page.tsx      # Categories page
│   └── about/
│       └── page.tsx      # About page
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section with signup
│   ├── ArticleCard.tsx   # Article card component
│   ├── FeaturedArticles.tsx
│   ├── LatestArticles.tsx
│   ├── Categories.tsx
│   └── NewsletterCTA.tsx
└── data/
    └── articles.ts       # Sample article data
```

## Deploy

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
