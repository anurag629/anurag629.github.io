import gh from "@/data/generated/github.json";
import { links } from "@/data/profile";
import Reveal from "./Reveal";

/**
 * Star counts, languages and descriptions all come from generated/github.json,
 * refreshed on every build. Nothing here needs hand-maintaining.
 */
export default function Work() {
  const repos = gh.featured;

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((r, i) => (
          <Reveal key={r.fullName} delay={(i % 3) * 70}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="frame frame-hover group flex h-full flex-col p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="display text-base font-semibold text-text group-hover:text-signal">
                  {r.name}
                </h3>
                <span
                  aria-hidden="true"
                  className="flex-none font-mono text-2xs text-dimmer transition-transform group-hover:translate-x-0.5 group-hover:text-signal"
                >
                  ↗
                </span>
              </div>

              {r.fullName.startsWith("codercops/") ? (
                <span className="label mt-1 text-trace">codercops</span>
              ) : null}

              <p className="mt-3 flex-1 text-sm leading-relaxed text-dim">
                {r.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-rule pt-4">
                {r.language ? (
                  <span className="font-mono text-2xs text-dim">
                    {r.language}
                  </span>
                ) : null}
                {r.stars > 0 ? (
                  <span className="font-mono text-2xs tabular-nums text-signal">
                    ★ {r.stars}
                  </span>
                ) : null}
                {r.forks > 0 ? (
                  <span className="font-mono text-2xs tabular-nums text-dim">
                    ⑂ {r.forks}
                  </span>
                ) : null}
                {r.pushedAt ? (
                  <span className="ml-auto font-mono text-2xs tabular-nums text-dimmer">
                    {r.pushedAt}
                  </span>
                ) : null}
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border border-rule px-5 py-4">
          <p className="text-sm text-dim">
            {gh.totals.originalPublicRepos} public repositories,{" "}
            {gh.totals.stars} stars. Work at DataWars and CoderCops lives in
            private repositories.
          </p>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[44px] flex-none items-center gap-2 border border-rule-bright px-4 font-mono text-sm text-text transition-colors hover:border-signal"
          >
            All repositories
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Reveal>
    </>
  );
}
