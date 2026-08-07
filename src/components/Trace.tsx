import { experience, identity } from "@/data/profile";
import Reveal from "./Reveal";

/**
 * Experience as `git log --graph`.
 *
 * Refs are HEAD, HEAD~1 and so on rather than invented commit hashes — the
 * shape is borrowed, the data stays real.
 */
export default function Trace() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_19rem] lg:gap-10">
      <ol className="font-mono text-sm">
        {experience.map((job, i) => {
          const last = i === experience.length - 1;
          return (
            <li key={`${job.org}-${job.title}`}>
              <Reveal delay={i * 50}>
                <div className="flex gap-3">
                  {/* Graph gutter */}
                  <div
                    aria-hidden="true"
                    className="flex flex-none flex-col items-center"
                  >
                    <span
                      className={job.current ? "text-signal glow" : "text-dim"}
                    >
                      ●
                    </span>
                    {!last ? (
                      <span className="w-px flex-1 bg-rule-bright" />
                    ) : null}
                  </div>

                  <div className={last ? "min-w-0" : "min-w-0 pb-7"}>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-dimmer" aria-hidden="true">
                        {i === 0 ? "HEAD" : `HEAD~${i}`}
                      </span>
                      <h3 className="text-text">
                        {job.title}
                        <span className="text-dimmer"> — </span>
                        {job.href ? (
                          <a
                            href={job.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link tap"
                          >
                            {job.org}
                          </a>
                        ) : (
                          <span className="text-dim">{job.org}</span>
                        )}
                      </h3>
                      {job.current ? (
                        <span className="border border-ok px-1.5 text-2xs uppercase tracking-widest text-ok">
                          current
                        </span>
                      ) : null}
                      <span className="ml-auto whitespace-nowrap text-2xs tabular-nums text-dimmer">
                        {job.period}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-2">
                      {job.notes.map((note) => (
                        <li key={note} className="flex gap-2 leading-relaxed">
                          <span
                            aria-hidden="true"
                            className="flex-none text-dimmer"
                          >
                            +
                          </span>
                          <span className="text-dim">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>

      <Reveal delay={100}>
        <aside className="frame h-fit p-4 lg:sticky lg:top-20">
          <p className="label mb-3">man anurag</p>
          <div className="space-y-3">
            {identity.bio.slice(1).map((para) => (
              <p key={para} className="text-sm leading-relaxed text-dim">
                {para}
              </p>
            ))}
          </div>
        </aside>
      </Reveal>
    </div>
  );
}
