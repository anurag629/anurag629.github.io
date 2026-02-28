import { projects } from "@/data/portfolio";

// Featured project: first one with a live link, or first project
const featuredProject = projects.find((p) => p.link) ?? projects[0];

export default function FeaturedProject() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
          Featured <span className="gradient-text">Project</span>
        </h2>

        <a
          href={featuredProject.link ?? "#projects"}
          target={featuredProject.link ? "_blank" : undefined}
          rel={featuredProject.link ? "noopener noreferrer" : undefined}
          className="block glass-card glow-border overflow-hidden group transition-all duration-300"
        >
          <div className="h-1 bg-gradient-to-r from-accent-cyan to-accent-violet" />
          <div className="p-6 md:p-10">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="font-mono text-xs text-accent-cyan">
                  {featuredProject.category} · {featuredProject.year}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-50 mt-2 group-hover:text-accent-cyan transition-colors">
                  {featuredProject.name}
                </h3>
              </div>
              {featuredProject.link && (
                <span className="flex-shrink-0 w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center group-hover:border-accent-cyan/50 transition-colors">
                  <svg
                    className="w-5 h-5 text-zinc-400 group-hover:text-accent-cyan transition-colors"
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
                </span>
              )}
            </div>
            <p className="text-zinc-400 leading-relaxed mb-6 max-w-2xl">
              {featuredProject.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-white/[0.06] border border-white/[0.08] font-mono text-xs text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
