import { openSource, throughput } from "@/data/profile";
import Reveal from "./Reveal";

const { headline, projects, orgs } = openSource;

export default function OpenSource() {
  return (
    <div className="space-y-4">
      {/* ---- Django: the credential worth leading with ---- */}
      <Reveal>
        <div className="frame p-5 md:p-7">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="label text-signal">headline</span>
              <h3 className="display mt-2 text-xl font-bold uppercase md:text-2xl">
                {headline.project}
              </h3>
              <a
                href={headline.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link tap mt-1 inline-block font-mono text-2xs"
              >
                {headline.repo} ↗
              </a>
            </div>
            <div className="text-right">
              <span className="display text-3xl font-bold tabular-nums text-signal md:text-4xl">
                {headline.prs.length}
              </span>
              <span className="label mt-1 block">merged into core</span>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-dim">
            {headline.note}
          </p>

          <ul className="mt-6 border-t border-rule">
            {headline.prs.map((pr) => (
              <li key={pr.number} className="border-b border-rule">
                <a
                  href={pr.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block min-h-[44px] py-3 transition-colors hover:bg-void sm:flex sm:items-baseline sm:gap-4"
                >
                  <span className="flex items-baseline gap-3 sm:contents">
                    <span className="flex-none font-mono text-2xs text-ok">
                      [merged]
                    </span>
                    <span className="flex-none font-mono text-2xs tabular-nums text-dim">
                      #{pr.number}
                    </span>
                  </span>
                  <span className="mt-1 block text-sm text-text group-hover:text-signal sm:mt-0 sm:flex-1">
                    {pr.title}
                  </span>
                  <span className="mt-1 block flex-none font-mono text-2xs tabular-nums text-dimmer sm:mt-0">
                    {pr.merged}
                  </span>
                </a>
              </li>
            ))}
            <li className="border-b border-rule">
              <a
                href={headline.open.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block min-h-[44px] py-3 sm:flex sm:items-baseline sm:gap-4"
              >
                <span className="flex items-baseline gap-3 sm:contents">
                  <span className="flex-none font-mono text-2xs text-signal">
                    [ open ]
                  </span>
                  <span className="flex-none font-mono text-2xs tabular-nums text-dim">
                    #{headline.open.number}
                  </span>
                </span>
                <span className="mt-1 block text-sm text-dim group-hover:text-signal sm:mt-0 sm:flex-1">
                  {headline.open.title}
                </span>
              </a>
            </li>
          </ul>

        </div>
      </Reveal>

      {/* ---- Earlier projects ---- */}
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.project} delay={i * 70}>
            <div className="frame flex h-full flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="display text-base font-semibold text-text">
                    {p.project}
                  </h3>
                  <span className="font-mono text-2xs tabular-nums text-dimmer">
                    {p.years}
                  </span>
                </div>
                <span className="display flex-none text-xl font-bold tabular-nums text-signal">
                  {p.count}
                </span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-dim">
                {p.note}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-rule pt-4">
                {p.prs.map((pr) => (
                  <a
                    key={pr.number}
                    href={pr.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap border border-rule px-2 py-1.5 font-mono text-2xs tabular-nums text-dim transition-colors hover:border-ok hover:text-ok"
                  >
                    #{pr.number}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ---- Volume, labelled honestly ---- */}
      <Reveal delay={140}>
        <div className="frame p-5">
          <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8">
            <div className="flex gap-8">
              <div>
                <span className="display block text-2xl font-bold tabular-nums text-text">
                  {throughput.totalMerged.toLocaleString()}
                </span>
                <span className="label mt-1 block">PRs merged, all time</span>
              </div>
              <div>
                <span className="display block text-2xl font-bold tabular-nums text-text">
                  {throughput.thirdParty}
                </span>
                <span className="label mt-1 block">into third-party repos</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-dim">
              {throughput.note}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-rule pt-4">
            <span className="label">orgs</span>
            {orgs.map((o) => (
              <span key={o} className="font-mono text-2xs text-dim">
                {o}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
