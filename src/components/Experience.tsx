import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
          Experience
        </h2>
        <p className="text-zinc-500 mb-16">My professional journey</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/[0.08] hidden md:block" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative flex gap-6 md:gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-12 justify-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet" />
                </div>

                <div className="flex-1 glass-card p-6 md:p-8 transition-colors glow-border min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl md:text-2xl font-semibold text-zinc-50">
                          {job.title}
                        </h3>
                        {index === 0 && (
                          <span className="font-mono text-xs px-2 py-0.5 rounded bg-accent-green/20 text-accent-green">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-accent-cyan">{job.company}</span>
                        <span className="text-zinc-600">·</span>
                        <span className="text-zinc-500 text-sm">
                          {job.location}
                        </span>
                      </div>
                      {job.type && (
                        <span className="inline-block mt-2 px-2 py-1 rounded bg-white/[0.06] font-mono text-xs text-zinc-400">
                          {job.type}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-sm text-zinc-500 flex-shrink-0">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {job.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed"
                      >
                        <span className="text-accent-cyan mt-1.5 flex-shrink-0">
                          •
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-zinc-500 text-sm">
          Also contributed to open source at{" "}
          <span className="text-accent-cyan">Oppia Foundation</span> &{" "}
          <span className="text-accent-violet">IVY</span>
        </p>
      </div>
    </section>
  );
}
