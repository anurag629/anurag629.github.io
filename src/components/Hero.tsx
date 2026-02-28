import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-accent-cyan/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent-violet/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-sm text-zinc-500 mb-4 animate-fade-in">
              Hello, I&apos;m
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-50 mb-4 leading-tight animate-fade-in animation-delay-100">
              {personalInfo.name}
            </h1>
            <div className="mb-6 animate-fade-in animation-delay-200">
              <span className="font-mono text-lg text-accent-cyan">
                &lt;{personalInfo.title} /&gt;
              </span>
            </div>
            <p className="text-lg text-zinc-400 max-w-xl mb-10 leading-relaxed animate-fade-in animation-delay-300">
              Building bridges between{" "}
              <span className="text-accent-cyan">data science</span> and{" "}
              <span className="text-accent-violet">software engineering</span>.
              Specializing in Python, Django, Next.js, and AI integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-violet text-zinc-50 font-medium hover:shadow-glow transition-all duration-300"
              >
                View My Work
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 text-zinc-300 font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right - Code block */}
          <div className="code-block overflow-hidden animate-fade-in animation-delay-300">
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/[0.08]">
              <div className="w-3 h-3 rounded-full bg-zinc-600" />
              <div className="w-3 h-3 rounded-full bg-zinc-600" />
              <div className="w-3 h-3 rounded-full bg-zinc-600" />
              <span className="ml-2 font-mono text-xs text-zinc-500">
                portfolio.py
              </span>
            </div>
            <pre className="font-mono text-sm leading-relaxed">
              <code>
                <span className="text-accent-violet">def</span>{" "}
                <span className="text-accent-cyan">build_something</span>
                <span className="text-zinc-400">():</span>
                {"\n"}
                <span className="text-zinc-500">  </span>
                <span className="text-accent-violet">return</span>{" "}
                <span className="text-accent-green">&quot;{personalInfo.tagline}&quot;</span>
                {"\n\n"}
                <span className="text-zinc-500"># </span>
                <span className="text-zinc-500">
                  Python · Django · Next.js · AI
                </span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-zinc-500">Explore</span>
        <svg
          className="w-5 h-5 text-zinc-500"
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
