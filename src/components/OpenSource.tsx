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
                  className="group flex min-h-[44px] flex-wrap items-center gap-x-4 gap-y-1 py-3 transition-colors hover:bg-[color-mix(in_srgb,var(--panel)_60%,transparent)]"
                >
                  <span className="label flex flex-none items-center gap-2 text-ok">
                    <span className="pip pip-ok" />
                    merged
                  </span>
                  <span className="font-mono text-2xs tabular-nums text-dim">
                    #{pr.number}
                  </span>
                  <span className="flex-1 text-sm text-text group-hover:text-signal">
                    {pr.title}
                  </span>
                  <span className="font-mono text-2xs tabular-nums text-dimmer">
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
                className="group flex min-h-[44px] flex-wrap items-center gap-x-4 gap-y-1 py-3"
              >
                <span className="label flex flex-none items-center gap-2 text-signal">
                  <span className="pip pip-signal" />
                  open
                </span>
                <span className="font-mono text-2xs tabular-nums text-dim">
                  #{headline.open.number}
                </span>
                <span className="flex-1 text-sm text-dim group-hover:text-signal">
                  {headline.open.title}
                </span>
              </a>
            </li>
          </ul>

          <a
            href={headline.proposal.href}
            target="_blank"
            rel="noopener noreferrer"
            className="frame frame-hover mt-6 block p-4"
          >
            <span className="label text-trace">proposal</span>
            <p className="mt-1.5 text-sm text-text">
              {headline.proposal.title} ↗
            </p>
            <p className="mt-1 text-sm text-dim">{headline.proposal.note}</p>
          </a>
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
