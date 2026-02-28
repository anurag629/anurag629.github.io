# Anurag Verma - Portfolio

A dark-themed developer portfolio built with Next.js and Tailwind CSS. Static export for GitHub Pages.

**Live:** [anurag629.github.io](https://anurag629.github.io)

## Features

- Dark theme with cyan–violet gradients and glass cards
- Dot grid background, gradient orbs, code-block hero
- Inter + JetBrains Mono typography
- Fully responsive, smooth scroll, hover glow effects
- Emoji favicon (⚡), OG images, PWA manifest

## Sections

- **Hero** - Split layout with code block and CTAs
- **About** - Bento grid (bio, education, certs, languages, stats)
- **Featured Project** - Single large project showcase
- **Experience** - Vertical timeline with glass cards
- **Skills** - Category headers with inline skill pills
- **Projects** - Grid of project cards
- **Open Source** - GitHub strip and contribution cards
- **Contact** - Email, social links, blog

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Fonts:** Inter, JetBrains Mono
- **Language:** TypeScript

## Run Locally

```bash
# Clone the repository
git clone https://github.com/anurag629/anurag629.github.io.git

# Navigate to directory
cd anurag629.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build   # Prebuild generates favicons + OG image
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Dark theme, glass cards, gradients
│   ├── layout.tsx     # Root layout, fonts, meta
│   └── page.tsx       # Main page
├── components/
│   ├── Header.tsx     # Fixed nav, glass on scroll
│   ├── Hero.tsx       # Split layout, code block
│   ├── About.tsx      # Bento grid
│   ├── FeaturedProject.tsx
│   ├── Experience.tsx # Timeline
│   ├── Skills.tsx     # Skill pills
│   ├── Projects.tsx   # Project cards
│   ├── OpenSource.tsx # GitHub & contributions
│   ├── Contact.tsx    # Contact info
│   ├── VisitorCounter.tsx
│   └── Footer.tsx     # Footer
└── data/
    └── portfolio.ts   # All portfolio data
```

## Customization

All personal data is in `src/data/portfolio.ts`. Update this file to customize:
- Personal info & social links
- Skills & certifications
- Work experience
- Projects
- GitHub stats & repos

## License

MIT
