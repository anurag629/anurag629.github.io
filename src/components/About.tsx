import { personalInfo, education, certifications, languages } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="font-handwriting text-5xl md:text-6xl text-ink mb-2">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent-red/60 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - About Text on lined paper */}
          <div className="paper-card lined-paper p-8 rotate-slight-left hover:rotate-0 transition-transform duration-300">
            <div className="tape-top" />
            <div className="space-y-4 pt-4">
              <p className="font-body text-ink leading-relaxed">
                {personalInfo.summary}
              </p>
              <p className="font-body text-ink-light leading-relaxed">
                At DataWars, I focus on the engineering behind the scenes—designing
                database schemas, building RESTful APIs, and creating robust backend
                systems. I specialize in using{" "}
                <span className="font-sketch text-accent-blue">
                  Python (Django/FastAPI)
                </span>{" "}
                and{" "}
                <span className="font-sketch text-accent-blue">JavaScript</span> to
                create backend systems that are both robust and scalable.
              </p>
              <p className="font-body text-ink-light leading-relaxed">
                Beyond the traditional stack, I am deeply curious about the future
                of the web. I&apos;m currently exploring{" "}
                <span className="font-sketch text-accent-green">
                  Web3 and blockchain technologies
                </span>
                , working to understand how decentralized applications can
                intersect with AI.
              </p>

              {/* Handwritten note */}
              <div className="mt-6 font-handwriting text-xl text-ink-faded rotate-slight-right">
                — always learning, always building ✦
              </div>
            </div>
          </div>

          {/* Right - Education & Certifications */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="sticky-note-blue rotate-slight-right hover:rotate-0 transition-transform duration-300">
              <h3 className="font-handwriting text-2xl text-ink mb-3">
                📚 Education
              </h3>
              <div className="font-body">
                <p className="text-ink font-medium">{education.degree}</p>
                <p className="text-ink-light">{education.major}</p>
                <p className="text-ink-faded text-sm mt-1">
                  {education.institution} • {education.period}
                </p>
                <p className="font-sketch text-accent-blue mt-2">
                  CGPA: {education.cgpa}
                </p>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="sticky-note-green rotate-slight-left hover:rotate-0 transition-transform duration-300">
              <h3 className="font-handwriting text-2xl text-ink mb-3">
                🏆 Certifications
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="font-body text-ink-light flex items-start gap-2 text-sm"
                  >
                    <span className="text-accent-green">✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages Card */}
            <div className="sticky-note-pink rotate-slight-right hover:rotate-0 transition-transform duration-300">
              <h3 className="font-handwriting text-2xl text-ink mb-3">
                🌐 Languages
              </h3>
              <div className="space-y-2">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-body text-ink">{lang.name}</span>
                    <span className="font-sketch text-sm text-ink-faded">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="paper-card p-4 text-center">
                <div className="font-handwriting text-4xl text-accent-red">
                  3+
                </div>
                <div className="font-sketch text-ink-faded text-sm">
                  Years Experience
                </div>
              </div>
              <div className="paper-card p-4 text-center">
                <div className="font-handwriting text-4xl text-accent-blue">
                  300+
                </div>
                <div className="font-sketch text-ink-faded text-sm">
                  Labs Created
                </div>
              </div>
              <div className="paper-card p-4 text-center">
                <div className="font-handwriting text-4xl text-accent-green">
                  9
                </div>
                <div className="font-sketch text-ink-faded text-sm">
                  Merged PRs
                </div>
              </div>
              <div className="paper-card p-4 text-center">
                <div className="font-handwriting text-4xl text-accent-yellow">
                  35%
                </div>
                <div className="font-sketch text-ink-faded text-sm">
                  Cost Reduction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
