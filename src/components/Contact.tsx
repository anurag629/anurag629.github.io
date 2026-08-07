import { identity, links } from "@/data/profile";
import Reveal from "./Reveal";

const CHANNELS = [
  { label: "GitHub", href: links.github, note: "code" },
  { label: "LinkedIn", href: links.linkedin, note: "fastest reply" },
  { label: "X", href: links.x, note: "shorter thoughts" },
  { label: "CoderCops", href: links.codercops, note: "what I'm building" },
];

export default function Contact() {
  return (
    <div className="frame p-6 md:p-10">
      <Reveal>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="display text-2xl font-bold uppercase md:text-3xl">
              Open a connection
            </p>
            <p className="mt-3 max-w-lg text-dim">
              {identity.available} Happiest talking about model routing, agent
              memory, or Django internals.
            </p>
            <a
              href={`mailto:${identity.email}`}
              className="link tap mt-6 inline-block font-mono text-base md:text-lg"
            >
              {identity.email}
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="pip pip-live" />
            <span className="label">not open to recruiter spam</span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <ul className="mt-8 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[76px] flex-col justify-center bg-void px-4 py-4 transition-colors hover:bg-panel"
              >
                <span className="flex items-center gap-2 font-mono text-sm text-text group-hover:text-signal">
                  {c.label}
                  <span
                    aria-hidden="true"
                    className="text-2xs text-dimmer transition-transform group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </span>
                <span className="label mt-1">{c.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
