import { skills } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  "Backend Development": "yellow",
  "Cloud & DevOps": "blue",
  "Database Systems": "green",
  "AI & ML Integration": "pink",
  "Tools & Frameworks": "yellow",
};

const categoryIcons: Record<string, string> = {
  "Backend Development": "⚡",
  "Cloud & DevOps": "☁️",
  "Database Systems": "🗄️",
  "AI & ML Integration": "🤖",
  "Tools & Frameworks": "🔧",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-paper-dark/30 relative">
      {/* Decorative doodles */}
      <div className="absolute top-10 right-10 font-handwriting text-4xl text-ink/10 rotate-12">
        skills
      </div>
      <div className="absolute bottom-10 left-10 text-6xl opacity-10">✦</div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="font-handwriting text-5xl md:text-6xl text-ink mb-2">
            Skills & Tools
          </h2>
          <p className="font-sketch text-ink-faded">
            Things I work with daily ✎
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => {
            const color = categoryColors[category] || "yellow";
            const icon = categoryIcons[category] || "📌";
            const rotation =
              index % 3 === 0
                ? "rotate-slight-left"
                : index % 3 === 1
                ? "rotate-slight-right"
                : "rotate-slight-2";

            return (
              <div
                key={category}
                className={`sticky-note-${color} ${rotation} hover:rotate-0 transition-transform duration-300`}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-ink/10">
                  <span className="text-2xl">{icon}</span>
                  <h3 className="font-handwriting text-xl text-ink">
                    {category}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/50 rounded-sm font-sketch text-sm text-ink-light border border-ink/10 hover:border-ink/30 hover:bg-white/80 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional note */}
        <div className="mt-12 text-center">
          <p className="font-handwriting text-xl text-ink-faded inline-block rotate-slight-left">
            ...and always excited to learn more! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
