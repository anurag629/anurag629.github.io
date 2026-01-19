# Anurag Verma - Portfolio

A handwritten paper-style portfolio website built with Next.js and Tailwind CSS.

**Live:** [anurag629.github.io](https://anurag629.github.io)

## Features

- Handwritten fonts (Caveat, Kalam) for a personal touch
- Paper texture backgrounds with notebook aesthetics
- Sticky notes, tape decorations, and sketch-style elements
- Fully responsive design
- Smooth scroll navigation
- Interactive hover animations

## Sections

- **Hero** - Introduction with animated elements
- **About** - Summary, education, certifications, languages
- **Skills** - Technical skills organized by category
- **Experience** - Work history with timeline
- **Open Source** - GitHub profile, featured repos, contributions
- **Projects** - Portfolio of work with tech stacks
- **Contact** - Email, phone, social links

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Caveat, Kalam, Nunito, JetBrains Mono)
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
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Paper styling, animations
│   ├── layout.tsx     # Root layout with fonts
│   └── page.tsx       # Main page
├── components/
│   ├── Header.tsx     # Navigation
│   ├── Hero.tsx       # Landing section
│   ├── About.tsx      # Bio, education, certs
│   ├── Skills.tsx     # Technical skills
│   ├── Experience.tsx # Work timeline
│   ├── OpenSource.tsx # GitHub & contributions
│   ├── Projects.tsx   # Project cards
│   ├── Contact.tsx    # Contact info
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
