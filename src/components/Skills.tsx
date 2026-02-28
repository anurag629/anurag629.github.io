import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
          Skills & <span className="gradient-text">Tools</span>
        </h2>
        <p className="text-zinc-500 mb-12">Things I work with daily</p>

        <div className="glass-card p-6 md:p-8 transition-colors">
          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-mono text-sm text-accent-cyan mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-white/[0.06] border border-white/[0.08] font-mono text-sm text-zinc-400 hover:border-white/[0.12] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 pt-6 border-t border-white/[0.08] font-mono text-xs text-zinc-500">
            ...and always excited to learn more
          </p>
        </div>
      </div>
    </section>
  );
}
