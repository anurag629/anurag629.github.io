import {
  openSourceContributions,
  githubStats,
  featuredRepos,
} from "@/data/portfolio";

export default function OpenSource() {
  return (
    <section id="opensource" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
          Open Source & <span className="gradient-text">GitHub</span>
        </h2>

        {/* GitHub Profile Strip */}
        <div className="glass-card p-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-zinc-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <a
                  href={`https://github.com/${githubStats.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-lg text-zinc-50 hover:text-accent-cyan transition-colors"
                >
                  @{githubStats.username}
                </a>
                <div className="flex flex-wrap gap-4 mt-1 font-mono text-sm text-zinc-500">
                  <span>{githubStats.repos} repos</span>
                  <span>{githubStats.followers} followers</span>
                  <span>{githubStats.stars} stars</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {githubStats.organizations.map((org) => (
                    <span
                      key={org}
                      className="px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan font-mono text-xs"
                    >
                      {org}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <a
              href={`https://github.com/${githubStats.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-zinc-300 text-sm font-medium hover:bg-white/5 transition-colors"
            >
              View Profile
              <svg
                className="w-4 h-4"
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
          </div>
        </div>

        {/* Contributions + Featured Repos - 2 columns */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contributions */}
          <div>
            <h3 className="font-mono text-sm text-accent-cyan mb-4">
              Contributions
            </h3>
            <div className="space-y-4">
              {openSourceContributions.map((contribution) => (
                <div
                  key={contribution.project}
                  className="glass-card p-5 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-zinc-50">
                        {contribution.project}
                      </h4>
                      <p className="text-zinc-500 text-sm mt-1">
                        {contribution.description}
                      </p>
                    </div>
                    <a
                      href={contribution.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-accent-cyan flex-shrink-0"
                      aria-label={`View ${contribution.project}`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {contribution.prs.map((pr) => (
                      <a
                        key={pr.number}
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded bg-accent-green/10 text-accent-green font-mono text-xs hover:bg-accent-green/20 transition-colors"
                      >
                        #{pr.number}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Repos */}
          <div>
            <h3 className="font-mono text-sm text-accent-cyan mb-4">
              Featured Repos
            </h3>
            <div className="space-y-4">
              {featuredRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass-card p-5 transition-colors hover:border-white/[0.12]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-zinc-50">
                        {repo.name}
                      </h4>
                      <p className="text-zinc-500 text-sm mt-1">
                        {repo.description}
                      </p>
                      <div className="flex items-center gap-4 mt-2 font-mono text-xs text-zinc-500">
                        <span>{repo.language}</span>
                        {repo.stars > 0 && (
                          <span className="flex items-center gap-1">
                            ★ {repo.stars}
                          </span>
                        )}
                        {repo.forks > 0 && (
                          <span className="flex items-center gap-1">
                            ⎇ {repo.forks}
                          </span>
                        )}
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-zinc-500 flex-shrink-0"
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
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
