import gh from "@/data/generated/github.json";
import { links } from "@/data/profile";
import Reveal from "./Reveal";

/**
 * Repositories as a directory listing.
 *
 * Stars, language, description and last-push date all come from
 * generated/github.json, refreshed on every build.
 */
export default function Work() {
  return (
    <>
      <div className="frame overflow-hidden font-mono text-sm">
        {/* Column headers, desktop only. Mobile stacks. */}
        <div
          aria-hidden="true"
          className="hidden border-b border-rule px-4 py-2 text-2xs uppercase tracking-widest text-dimmer md:grid md:grid-cols-[4.5rem_9rem_1fr_6rem] md:gap-4"
        >
          <span>stars</span>
          <span>lang</span>
          <span>name</span>
          <span className="text-right">pushed</span>
        </div>

        <ul>
          {gh.featured.map((r, i) => (
            <li key={r.fullName} className="border-b border-rule last:border-0">
              <Reveal delay={Math.min(i, 6) * 40}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block px-4 py-3 transition-colors hover:bg-void"
                >
                  <div className="md:grid md:grid-cols-[4.5rem_9rem_1fr_6rem] md:items-baseline md:gap-4">
                    <span className="tabular-nums text-signal">
                      {r.stars > 0 ? `★ ${r.stars}` : <span className="text-dimmer">—</span>}
                    </span>
                    <span className="text-dim">
                      {r.language ? r.language.toLowerCase() : "—"}
                    </span>
                    <span className="mt-1 block text-text group-hover:text-signal md:mt-0">
                      {r.name}
                      {r.fullName.startsWith("codercops/") ? (
                        <span className="ml-2 text-2xs text-trace">
                          @CODERCOPS
                        </span>
                      ) : null}
                      <span
                        aria-hidden="true"
                        className="ml-1.5 text-dimmer transition-colors group-hover:text-signal"
                      >
                        ↗
                      </span>
                    </span>
                    <span className="mt-1 block whitespace-nowrap text-2xs tabular-nums text-dimmer md:mt-0 md:text-right">
                      {r.pushedAt}
                    </span>
                  </div>

                  <p className="mt-1 max-w-3xl text-2xs leading-relaxed text-dim md:ml-[15rem] md:mt-0.5">
                    {r.description}
                  </p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <Reveal delay={100}>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 font-mono text-sm">
          <p className="text-dim">
            <span className="text-dimmer" aria-hidden="true">
              #{" "}
            </span>
            {gh.totals.originalPublicRepos} public repos, {gh.totals.stars}{" "}
            stars. DataWars and CODERCOPS work is in private repos.
          </p>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[44px] items-center border border-rule-bright px-4 text-sm text-text transition-colors hover:border-signal hover:text-signal"
          >
            ls ~/github <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Reveal>
    </>
  );
}
