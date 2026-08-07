import { now } from "@/data/profile";
import Reveal from "./Reveal";

const STATUS_TONE: Record<string, string> = {
  live: "text-ok",
  active: "text-signal",
  internal: "text-dim",
};

export default function Now() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {now.map((item, i) => {
        const body = (
          <>
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <span className="label">{item.kind}</span>
                <h3 className="display mt-1.5 text-lg font-semibold text-text">
                  {item.name}
                </h3>
              </div>
              <span
                className={`label flex flex-none items-center gap-1.5 ${
                  STATUS_TONE[item.status] ?? "text-dim"
                }`}
              >
                <span
                  className={`pip ${
                    item.status === "live"
                      ? "pip-live"
                      : item.status === "active"
                        ? "pip-signal"
                        : "pip-dim"
                  }`}
                />
                {item.status}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-text">{item.summary}</p>
            <p className="mt-3 text-sm leading-relaxed text-dim">
              {item.detail}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5 border-t border-rule pt-4">
              {item.stack.map((s) => (
                <span key={s} className="font-mono text-2xs text-dim">
                  {s}
                </span>
              ))}
            </div>

            <p className="label mt-3">{item.role}</p>
          </>
        );

        return (
          <Reveal key={item.id} delay={i * 80}>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="frame frame-hover group flex h-full flex-col p-5"
              >
                {body}
                <span className="mt-4 flex items-center gap-1.5 font-mono text-2xs text-trace">
                  visit
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </span>
              </a>
            ) : (
              <div className="frame flex h-full flex-col p-5">
                {body}
                <span className="mt-4 font-mono text-2xs text-dimmer">
                  closed source
                </span>
              </div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
