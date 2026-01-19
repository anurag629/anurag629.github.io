import { projects } from "@/data/portfolio";

const colorClasses: Record<string, string> = {
  yellow: "sticky-note-yellow",
  blue: "sticky-note-blue",
  pink: "sticky-note-pink",
  green: "sticky-note-green",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-paper-dark/30 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 text-8xl opacity-5 rotate-12">
        {"</>"}
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="font-handwriting text-5xl md:text-6xl text-ink mb-2">
            Projects
          </h2>
          <p className="font-sketch text-ink-faded">Things I&apos;ve built ✎</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const colorClass = colorClasses[project.color] || "sticky-note-yellow";
            const rotation =
              index % 4 === 0
                ? "rotate-slight-left"
                : index % 4 === 1
                ? "rotate-slight-right"
                : index % 4 === 2
                ? "rotate-slight-2"
                : "rotate-slight-3";

            return (
              <div
                key={project.name}
                className={`${colorClass} ${rotation} hover:rotate-0 hover:scale-105 transition-all duration-300 group`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-handwriting text-2xl text-ink group-hover:text-accent-blue transition-colors">
                    {project.name}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-faded hover:text-accent-blue transition-colors"
                      aria-label={`View ${project.name}`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Category & Year */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-white/50 rounded font-sketch text-xs text-ink-faded">
                    {project.category}
                  </span>
                  <span className="font-handwriting text-sm text-ink-faded">
                    {project.year}
                  </span>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-ink-light leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-ink/10">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-ink/5 rounded font-mono text-xs text-ink-faded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* View more link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.codercops.com/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-ink text-ink font-sketch text-lg rounded-sm hover:bg-ink hover:text-paper-cream transition-all duration-200 group"
          >
            View All Projects
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
