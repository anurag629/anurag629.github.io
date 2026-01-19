import {
  openSourceContributions,
  githubStats,
  featuredRepos,
} from "@/data/portfolio";

export default function OpenSource() {
  return (
    <section id="opensource" className="py-24 bg-paper-dark/30 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-6xl opacity-10 rotate-12">
        {"</>"}
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="font-handwriting text-5xl md:text-6xl text-ink mb-2">
            Open Source & GitHub
          </h2>
          <div className="w-24 h-1 bg-accent-green/60 rounded-full" />
        </div>

        {/* GitHub Profile Card */}
        <div className="paper-card p-6 md:p-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Profile Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-ink rounded-full flex items-center justify-center text-paper-cream">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
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
                  className="font-handwriting text-2xl text-ink hover:text-accent-blue transition-colors"
                >
                  @{githubStats.username}
                </a>
                <div className="flex flex-wrap gap-4 mt-1 font-sketch text-sm text-ink-faded">
                  <span>{githubStats.repos} repos</span>
                  <span>{githubStats.followers} followers</span>
                  <span>{githubStats.stars} stars earned</span>
                </div>
              </div>
            </div>

            {/* View Profile Button */}
            <a
              href={`https://github.com/${githubStats.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-ink text-paper-cream font-sketch rounded-sm hover:bg-accent-blue transition-colors"
            >
              View Profile
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Organizations */}
          <div className="mt-6 pt-6 border-t border-ink/10">
            <div className="font-sketch text-sm text-ink-faded mb-3">Organizations</div>
            <div className="flex flex-wrap gap-2">
              {githubStats.organizations.map((org) => (
                <span
                  key={org}
                  className="px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full font-body text-sm"
                >
                  {org}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-4">
            <div className="font-sketch text-sm text-ink-faded mb-3">Achievements</div>
            <div className="flex flex-wrap gap-2">
              {githubStats.achievements.map((achievement) => (
                <span
                  key={achievement}
                  className="px-3 py-1 bg-accent-yellow/20 text-ink rounded-full font-body text-sm"
                >
                  🏆 {achievement}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Repositories */}
        <div className="mb-12">
          <h3 className="font-handwriting text-3xl text-ink mb-6">
            Featured Repositories
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredRepos.map((repo, index) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`sticky-note-${index % 2 === 0 ? "blue" : "green"} ${
                  index % 2 === 0 ? "rotate-slight-left" : "rotate-slight-right"
                } hover:rotate-0 hover:scale-105 transition-all duration-300 block`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-handwriting text-xl text-ink">
                    {repo.name}
                  </h4>
                  <svg className="w-5 h-5 text-ink-faded" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="font-body text-sm text-ink-light mb-3">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-mono text-ink-faded">{repo.language}</span>
                  {repo.stars > 0 && (
                    <span className="flex items-center gap-1 text-ink-faded">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {repo.stars}
                    </span>
                  )}
                  {repo.forks > 0 && (
                    <span className="flex items-center gap-1 text-ink-faded">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                      </svg>
                      {repo.forks}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contributions to Other Projects */}
        <div>
          <h3 className="font-handwriting text-3xl text-ink mb-6">
            Contributions
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {openSourceContributions.map((contribution, index) => (
              <div
                key={contribution.project}
                className={`paper-card p-6 ${
                  index % 2 === 0 ? "rotate-slight-left" : "rotate-slight-right"
                } hover:rotate-0 transition-transform duration-300`}
              >
                <div className="tape-top" />

                {/* Project Header */}
                <div className="flex items-start justify-between mb-4 pt-2">
                  <div>
                    <h4 className="font-handwriting text-2xl text-ink">
                      {contribution.project}
                    </h4>
                    <p className="font-body text-sm text-ink-light mt-1">
                      {contribution.description}
                    </p>
                  </div>
                  <a
                    href={contribution.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-faded hover:text-accent-blue transition-colors flex-shrink-0"
                    aria-label={`View ${contribution.project} repository`}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>

                {/* PRs List */}
                <div className="space-y-2">
                  <div className="font-sketch text-sm text-ink-faded mb-2">
                    Merged Pull Requests:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {contribution.prs.map((pr) => (
                      <a
                        key={pr.number}
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 bg-accent-green/10 text-accent-green rounded-full font-mono text-sm hover:bg-accent-green/20 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                        </svg>
                        #{pr.number}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
