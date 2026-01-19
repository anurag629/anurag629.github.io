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

export const metadata: Metadata = {
  title: "Anurag Verma | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Python, Django, Next.js, and AI integration. Building bridges between data science and software engineering.",
  keywords: [
    "Full Stack Developer",
    "Python",
    "Django",
    "Next.js",
    "React",
    "AI",
    "Machine Learning",
    "Web Development",
  ],
  authors: [{ name: "Anurag Verma" }],
  openGraph: {
    title: "Anurag Verma | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Python, Django, Next.js, and AI integration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${caveat.variable} ${kalam.variable} ${nunito.variable} ${jetbrainsMono.variable} font-body`}
      >
        {children}
      </body>
    </html>
  );
}
