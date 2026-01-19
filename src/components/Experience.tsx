import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-6 w-px h-[calc(100%-160px)] bg-ink/10 hidden lg:block" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="font-handwriting text-5xl md:text-6xl text-ink mb-2">
            Experience
          </h2>
          <p className="font-sketch text-ink-faded">My professional journey ✎</p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-3 lg:left-3 top-6 w-6 h-6 bg-paper border-2 border-accent-red rounded-full hidden lg:flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-accent-red rounded-full" />
              </div>

              {/* Content card */}
              <div className="lg:ml-16 paper-card p-6 md:p-8 hover:shadow-paper-hover transition-shadow duration-300">
                <div className="tape-top" />

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4 pt-2">
                  <div>
                    <h3 className="font-handwriting text-2xl md:text-3xl text-ink">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="font-sketch text-lg text-accent-blue">
                        {job.company}
                      </span>
                      <span className="text-ink-faded">•</span>
                      <span className="font-body text-sm text-ink-faded">
                        {job.location}
                      </span>
                    </div>
                    {job.type && (
                      <span className="inline-block mt-2 px-2 py-1 bg-accent-green/10 text-accent-green font-sketch text-xs rounded">
                        {job.type}
                      </span>
                    )}
                  </div>

                  {/* Period badge */}
                  <div className="sticky-note-yellow px-4 py-2 !rotate-slight-right text-center">
                    <span className="font-handwriting text-sm text-ink">
                      {job.period}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mt-6">
                  {job.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3">
                      <span className="text-accent-red mt-1.5 flex-shrink-0">
                        ✦
                      </span>
                      <span className="font-body text-ink-light leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Doodle decoration */}
                {index === 0 && (
                  <div className="absolute -bottom-2 -right-2 font-handwriting text-2xl text-ink/20 rotate-12">
                    current
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Earlier contributions note */}
        <div className="mt-12 text-center">
          <div className="inline-block paper-card p-4 rotate-slight-left">
            <p className="font-handwriting text-lg text-ink-faded">
              Also contributed to open source at{" "}
              <span className="text-accent-blue">Oppia Foundation</span> &{" "}
              <span className="text-accent-green">IVY</span> ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
