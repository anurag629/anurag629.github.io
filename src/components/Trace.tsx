import { experience, identity } from "@/data/profile";
import Reveal from "./Reveal";

export default function Trace() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-14">
      <ol className="relative">
        {/* Spine. Decorative, so it stays out of the reading order. */}
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-[5px] top-2 hidden w-px bg-rule md:block"
        />

        {experience.map((job, i) => (
          <li key={`${job.org}-${job.title}`} className="relative md:pl-8">
            <Reveal delay={i * 60}>
              <span
                aria-hidden="true"
                className={`absolute left-0 top-[7px] hidden h-[11px] w-[11px] rounded-full border-2 border-void md:block ${
                  job.current ? "bg-signal" : "bg-rule-bright"
                }`}
              />

              <div className="pb-10">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="display text-base font-semibold text-text">
                    {job.title}
                  </h3>
                  {job.current ? (
                    <span className="label text-ok">current</span>
                  ) : null}
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  {job.href ? (
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link tap font-mono text-sm"
                    >
                      {job.org}
                    </a>
                  ) : (
                    <span className="font-mono text-sm text-dim">{job.org}</span>
                  )}
                  <span className="text-dimmer" aria-hidden="true">
                    ·
                  </span>
                  <span className="font-mono text-2xs tabular-nums text-dim">
                    {job.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {job.notes.map((note) => (
                    <li
                      key={note}
                      className="flex gap-3 text-sm leading-relaxed text-dim"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-px w-3 flex-none bg-rule-bright"
                      />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={120}>
        <div className="frame h-fit p-5 lg:sticky lg:top-24">
          <span className="label">the short version</span>
          <div className="mt-4 space-y-4">
            {identity.bio.slice(1).map((para) => (
              <p key={para} className="text-sm leading-relaxed text-dim">
                {para}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
