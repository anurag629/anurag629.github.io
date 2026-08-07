import { identity, links } from "@/data/profile";
import Reveal from "./Reveal";

const CHANNELS = [
  { label: "linkedin", href: links.linkedin, note: "fastest reply" },
  { label: "github", href: links.github, note: "code" },
  { label: "x", href: links.x, note: "shorter thoughts" },
  { label: "CODERCOPS", href: links.codercops, note: "what I'm building" },
];

export default function Contact() {
  return (
    <div className="frame p-5 font-mono text-sm md:p-7">
      <Reveal>
        {/* Reads as connection output. The prefixes are decoration. */}
        <div className="space-y-1 text-dim">
          <p>
            <span className="text-dimmer" aria-hidden="true">
              ***{" "}
            </span>
            Connected to anurag@github.
          </p>
          <p>
            <span className="text-dimmer" aria-hidden="true">
              ***{" "}
            </span>
            <span className="text-ok">{identity.available}</span>
          </p>
          <p>
            <span className="text-dimmer" aria-hidden="true">
              ***{" "}
            </span>
            Happiest talking about model routing, agent memory, or Django
            internals.
          </p>
          <p className="text-dimmer">*** Not open to recruiter spam.</p>
        </div>

        <p className="mt-6">
          <span className="prompt-sigil" aria-hidden="true">
            ${" "}
          </span>
          <span className="text-dim">mail </span>
          <a
            href={`mailto:${identity.email}`}
            className="link tap text-base md:text-lg"
          >
            {identity.email}
          </a>
        </p>
      </Reveal>

      <Reveal delay={80}>
        <ul className="mt-7 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[72px] flex-col justify-center bg-panel px-4 py-3 transition-colors hover:bg-void"
              >
                <span className="text-text group-hover:text-signal">
                  <span className="text-dimmer" aria-hidden="true">
                    ./
                  </span>
                  {c.label}
                  <span
                    aria-hidden="true"
                    className="ml-1.5 text-dimmer group-hover:text-signal"
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
