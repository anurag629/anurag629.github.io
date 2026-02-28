import { personalInfo, education, certifications, languages } from "@/data/portfolio";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "300+", label: "Labs Created" },
  { value: "9", label: "Merged PRs" },
  { value: "35%", label: "Cost Reduction" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bio - large block spanning 2 cols on lg */}
          <div className="lg:col-span-2 glass-card p-6 md:p-8 transition-colors">
            <p className="text-zinc-300 leading-relaxed mb-4">
              {personalInfo.summary}
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              At DataWars, I focus on the engineering behind the scenes—designing
              database schemas, building RESTful APIs, and creating robust backend
              systems. I specialize in using{" "}
              <span className="text-accent-cyan">Python (Django/FastAPI)</span> and{" "}
              <span className="text-accent-cyan">JavaScript</span> to create
              backend systems that are both robust and scalable.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Beyond the traditional stack, I&apos;m exploring{" "}
              <span className="text-accent-violet">Web3 and blockchain</span>,
              working to understand how decentralized applications intersect with AI.
            </p>
            <p className="mt-6 font-mono text-xs text-zinc-500">
              — always learning, always building
            </p>
          </div>

          {/* Education */}
          <div className="glass-card p-6 transition-colors">
            <h3 className="font-mono text-sm text-accent-cyan mb-3">
              Education
            </h3>
            <p className="text-zinc-50 font-medium">{education.degree}</p>
            <p className="text-zinc-400 text-sm">{education.major}</p>
            <p className="text-zinc-500 text-xs mt-1">
              {education.institution} · {education.period}
            </p>
            <p className="font-mono text-sm text-accent-cyan mt-2">
              CGPA: {education.cgpa}
            </p>
          </div>

          {/* Certifications */}
          <div className="glass-card p-6 transition-colors">
            <h3 className="font-mono text-sm text-accent-cyan mb-3">
              Certifications
            </h3>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="text-zinc-400 text-sm flex items-start gap-2"
                >
                  <span className="text-accent-green mt-0.5">✓</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="glass-card p-6 transition-colors">
            <h3 className="font-mono text-sm text-accent-cyan mb-3">
              Languages
            </h3>
            <div className="space-y-2">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-zinc-300">{lang.name}</span>
                  <span className="font-mono text-xs text-zinc-500">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats - 2x2 */}
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 flex flex-col justify-center items-center text-center transition-colors"
            >
              <span className="font-mono text-2xl md:text-3xl gradient-text font-semibold">
                {stat.value}
              </span>
              <span className="text-zinc-500 text-xs mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
