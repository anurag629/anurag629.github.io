import { signals } from "@/data/profile";
import gh from "@/data/generated/github.json";
import Reveal from "./Reveal";

export default function Signals() {
  const { kaggle, education, languages } = signals;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Reveal className="lg:col-span-2">
        <a
          href={kaggle.href}
          target="_blank"
          rel="noopener noreferrer"
          className="frame frame-hover block h-full p-5"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="label">Kaggle</span>
            <span aria-hidden="true" className="font-mono text-2xs text-dimmer">
              ↗
            </span>
          </div>

          <ul className="mt-4 space-y-4">
            {kaggle.tiers.map((t) => (
              <li key={t.name}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-sm text-text">{t.name}</span>
                  <span className="label text-signal">{t.tier}</span>
                </div>
                <div className="mt-2 h-1 bg-rule">
                  {/* Position within the ranked population, best-first. */}
                  <div
                    className="meter-fill h-1 bg-signal"
                    style={{ width: `${100 - (t.rank / t.of) * 100}%` }}
                  />
                </div>
                <p className="mt-1.5 font-mono text-2xs tabular-nums text-dim">
                  rank {t.rank.toLocaleString()} of {t.of.toLocaleString()} ·{" "}
                  {t.medals} medals
                </p>
              </li>
            ))}
          </ul>
        </a>
      </Reveal>

      <Reveal delay={70}>
        <div className="frame h-full p-5">
          <span className="label">Education</span>
          <p className="mt-3 text-sm text-text">{education.degree}</p>
          <p className="mt-1 text-sm text-dim">{education.institution}</p>
          <p className="mt-2 font-mono text-2xs tabular-nums text-dimmer">
            {education.period}
          </p>
        </div>
      </Reveal>

      <Reveal delay={140}>
        <div className="frame h-full p-5">
          <span className="label">GitHub</span>
          <dl className="mt-3 space-y-2">
            {[
              ["repos", String(gh.totals.originalPublicRepos)],
              ["stars", String(gh.totals.stars)],
              ["followers", String(gh.user.followers)],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between">
                <dt className="font-mono text-2xs text-dim">{k}</dt>
                <dd className="font-mono text-sm tabular-nums text-text">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 space-y-1.5 border-t border-rule pt-3">
            {languages.map((l) => (
              <div key={l.name} className="flex items-baseline justify-between">
                <span className="font-mono text-2xs text-dim">{l.name}</span>
                <span className="font-mono text-2xs text-dimmer">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
