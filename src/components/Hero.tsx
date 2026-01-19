import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 rotate-12 select-none">
        ✦
      </div>
      <div className="absolute bottom-32 right-16 text-4xl opacity-20 -rotate-12 select-none">
        ✧
      </div>
      <div className="absolute top-40 right-20 w-20 h-20 border-2 border-ink/10 rounded-full" />
      <div className="absolute bottom-40 left-20 w-12 h-12 border border-accent-red/20 rotate-45" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Greeting - small handwritten note */}
        <div className="inline-block mb-6 rotate-slight-left">
          <span className="font-sketch text-lg text-ink-faded">
            ~ Hello, I&apos;m ~
          </span>
        </div>

        {/* Name - large handwritten */}
        <h1 className="font-handwriting text-7xl md:text-8xl lg:text-9xl text-ink mb-4 leading-tight animate-fade-in">
          {personalInfo.name}
        </h1>

        {/* Title with underline sketch */}
        <div className="mb-8 animate-fade-in animation-delay-200">
          <h2 className="font-sketch text-2xl md:text-3xl text-ink-light inline-block sketch-underline">
            {personalInfo.title}
          </h2>
        </div>

        {/* Tagline in a sticky note style */}
        <div className="inline-block sticky-note-yellow rotate-slight-right mb-12 animate-fade-in animation-delay-300">
          <p className="font-handwriting text-xl text-ink">
            &quot;{personalInfo.tagline}&quot;
          </p>
        </div>

        {/* Brief intro */}
        <p className="font-body text-lg text-ink-light max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-400">
          Building bridges between{" "}
          <span className="font-sketch text-accent-blue">data science</span> and{" "}
          <span className="font-sketch text-accent-green">
            software engineering
          </span>
          . Specializing in Python, Django, Next.js, and AI integration.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-500 pb-24 md:pb-0">
          <a
            href="#projects"
            className="group px-8 py-3 bg-ink text-paper-cream font-sketch text-lg rounded-sm shadow-paper hover:shadow-paper-hover hover:-translate-y-0.5 transition-all duration-200"
          >
            View My Work
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-ink text-ink font-sketch text-lg rounded-sm hover:bg-ink hover:text-paper-cream transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator - positioned relative to section, hidden on small screens */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="font-handwriting text-ink-faded text-sm mb-2">
          scroll down
        </div>
        <svg
          className="w-6 h-6 mx-auto text-ink-faded"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
