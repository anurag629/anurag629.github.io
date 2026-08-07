import type { Metadata, Viewport } from "next";
import { Martian_Mono, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { identity, links, signals } from "@/data/profile";
import "./globals.css";

const martian = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian",
  display: "swap",
  weight: ["400", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://anurag629.github.io";
const title = "Anurag Verma — AI infra engineer & founder";
const description =
  "Anurag Verma builds LLM gateways, agent memory and model routing. Full Stack Engineer at DataWars, founder of CoderCops, and a Django core contributor with three patches merged into the framework.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s — Anurag Verma" },
  description,
  keywords: [
    "Anurag Verma",
    "AI infrastructure engineer",
    "LLM gateway",
    "model routing",
    "agent memory",
    "Django contributor",
    "Python",
    "FastAPI",
    "Next.js",
    "TypeScript",
    "DataWars",
    "CoderCops",
    "India",
  ],
  authors: [{ name: identity.name, url: siteUrl }],
  creator: identity.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: identity.name,
    title,
    description,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${identity.name} — ${identity.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@anurag_629",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: { canonical: siteUrl },
  category: "technology",
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0c10" },
    { media: "(prefers-color-scheme: light)", color: "#f2f4f7" },
  ],
};

/**
 * Applies the stored theme before first paint so the page never flashes the
 * wrong background. Kept tiny and dependency-free on purpose.
 */
const themeScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}d.setAttribute('data-theme',t)}catch(e){d.setAttribute('data-theme','dark')}d.classList.remove('no-js');setTimeout(function(){d.classList.add('reveal-all')},2000)})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: identity.name,
        url: siteUrl,
        image: `${siteUrl}/profile.png`,
        email: identity.email,
        jobTitle: "AI Infrastructure Engineer",
        description,
        sameAs: [
          links.github,
          links.linkedin,
          links.x,
          links.codercops,
          links.devto,
          links.kaggle,
        ],
        worksFor: [
          {
            "@type": "Organization",
            name: "DataWars",
            url: links.datawars,
          },
          {
            "@type": "Organization",
            name: "CoderCops",
            url: links.codercops,
          },
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: signals.education.institution,
        },
        knowsAbout: [
          "LLM infrastructure",
          "Model routing",
          "Agent memory",
          "Python",
          "Django",
          "FastAPI",
          "TypeScript",
          "Next.js",
          "PostgreSQL",
          "Docker",
          "Machine learning",
        ],
        knowsLanguage: ["English", "Hindi"],
        address: {
          "@type": "PostalAddress",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: title,
        mainEntity: { "@id": `${siteUrl}/#person` },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en" className="no-js" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${martian.variable} ${plexMono.variable} ${plexSans.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
