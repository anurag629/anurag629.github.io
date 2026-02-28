import { projects } from "@/data/portfolio";

// Exclude featured project (first with link)
const featuredProject = projects.find((p) => p.link) ?? projects[0];
const otherProjects = projects.filter((p) => p.name !== featuredProject.name);

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
          Projects
        </h2>
        <p className="text-zinc-500 mb-16">Things I&apos;ve built</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.name}
              className="glass-card glow-border p-6 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-zinc-50 group-hover:text-accent-cyan transition-colors">
                  {project.name}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-accent-cyan transition-colors"
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

              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-accent-cyan">
                  {project.category}
                </span>
                <span className="text-zinc-600">·</span>
                <span className="font-mono text-xs text-zinc-500">
                  {project.year}
                </span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded bg-white/[0.06] font-mono text-xs text-zinc-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.codercops.com/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-zinc-300 font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-300 group"
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
