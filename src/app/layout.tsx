import type { Metadata } from "next";
import { Caveat, Kalam, Nunito, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-sketch",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://anurag629.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anurag Verma | Full Stack Developer & AI Engineer",
    template: "%s | Anurag Verma",
  },
  description:
    "Anurag Verma is a Full Stack Developer at DataWars specializing in Python, Django, FastAPI, Next.js, and AI integration. Building scalable web applications and ML solutions with 3+ years of experience.",
  keywords: [
    "Anurag Verma",
    "Full Stack Developer",
    "Software Engineer",
    "Python Developer",
    "Django Developer",
    "FastAPI",
    "Next.js Developer",
    "React Developer",
    "AI Engineer",
    "Machine Learning",
    "Data Science",
    "Web Developer",
    "Backend Developer",
    "Frontend Developer",
    "TypeScript",
    "JavaScript",
    "Web3 Developer",
    "Blockchain",
    "Azure",
    "AWS",
    "DataWars",
    "Open Source Contributor",
    "India",
    "Noida",
    "Remote Developer",
  ],
  authors: [{ name: "Anurag Verma", url: siteUrl }],
  creator: "Anurag Verma",
  publisher: "Anurag Verma",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Anurag Verma Portfolio",
    title: "Anurag Verma | Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer at DataWars specializing in Python, Django, Next.js, and AI integration. 3+ years of experience building scalable applications.",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Anurag Verma - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag Verma | Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer at DataWars specializing in Python, Django, Next.js, and AI integration.",
    creator: "@anurag_629",
    images: [`${siteUrl}/twitter-image`],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "google-site-verification": "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Anurag Verma Portfolio",
        description: "Personal portfolio of Anurag Verma, Full Stack Developer",
        publisher: { "@id": `${siteUrl}/#person` },
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Anurag Verma",
        url: siteUrl,
        image: `${siteUrl}/profile.jpg`,
        sameAs: [
          "https://github.com/anurag629",
          "https://linkedin.com/in/anurag629",
          "https://twitter.com/anurag_629",
          "https://www.codercops.com",
        ],
        jobTitle: "Full Stack Developer",
        worksFor: {
          "@type": "Organization",
          name: "DataWars",
          url: "https://datawars.io",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Dr. Bhim Rao Ambedkar University, Agra",
        },
        knowsAbout: [
          "Python",
          "Django",
          "FastAPI",
          "JavaScript",
          "TypeScript",
          "Next.js",
          "React",
          "Machine Learning",
          "Artificial Intelligence",
          "Web Development",
          "Backend Development",
          "Cloud Computing",
          "Azure",
          "AWS",
          "Docker",
          "PostgreSQL",
          "MongoDB",
        ],
        knowsLanguage: ["English", "Hindi"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Noida",
          addressCountry: "India",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Anurag Verma | Full Stack Developer & AI Engineer",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#person` },
        description:
          "Portfolio website of Anurag Verma showcasing projects, skills, and experience in full stack development and AI.",
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: "Anurag Verma Portfolio",
        mainEntity: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f5f1eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${caveat.variable} ${kalam.variable} ${nunito.variable} ${jetbrainsMono.variable} font-body`}
      >
        {children}
      </body>
    </html>
  );
}
