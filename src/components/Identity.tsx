import Image from "next/image";
import { identity, throughput } from "@/data/profile";
import gh from "@/data/generated/github.json";
import Reveal from "./Reveal";
import Prompt from "./Prompt";

/** The chip motif from Anurag's own GitHub profile README. */
const CHIP = `   ┌─────────────────┐
───┤ ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ ├───
───┤ █             █ ├───
───┤ █ A N U R A G █ ├───
───┤ █             █ ├───
───┤ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ├───
   └───────┬─┬───────┘
           │ │`;

const BLOCKS = ["▁", "▂", "▃", "▄", "▅", "▆", "▇", "█"];

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex gap-2 leading-relaxed">
      <dt className="w-[4.75rem] flex-none text-signal">{k}</dt>
      <dd className="min-w-0 text-dim">
        <span className="mr-2 text-dimmer" aria-hidden="true">
          ·
        </span>
        <span className="text-text">{v}</span>
      </dd>
    </div>
  );
}

export default function Identity() {
  const years = gh.contributions;
  const peak = Math.max(...years.map((y) => y.total), 1);
  const spark = years
    .map((y) => BLOCKS[Math.round((y.total / peak) * (BLOCKS.length - 1))])
    .join(" ");

  const stats = [
    { k: "django core", v: String(throughput.djangoCore), hot: true },
    { k: "prs merged", v: throughput.totalMerged.toLocaleString() },
    { k: "public repos", v: String(gh.totals.originalPublicRepos) },
    { k: "stars", v: String(gh.totals.stars) },
  ];

  return (
    <section id="top" className="scroll-mt-20 pb-12 pt-8 md:pb-16">
      {/* ---- neofetch ---- */}
      <Reveal>
        <h1 className="prompt">
          <Prompt cmd="neofetch" srLabel={identity.name} cursor />
        </h1>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-5 grid gap-6 font-mono text-sm md:grid-cols-[auto_1fr] md:gap-9">
          <pre
            className="ascii overflow-x-auto text-[0.6rem] text-signal glow sm:text-xs"
            aria-hidden="true"
          >
            {CHIP}
          </pre>

          <dl className="min-w-0">
            <div className="flex items-center gap-3 pb-2">
              <Image
                src="/profile.png"
                alt=""
                width={34}
                height={34}
                priority
                className="h-[34px] w-[34px] flex-none border border-rule object-cover grayscale contrast-125"
              />
              <span className="text-ok">
                anurag629<span className="text-dimmer">@</span>github
              </span>
            </div>
            <div
              className="mb-2 text-dimmer"
              aria-hidden="true"
            >{`──────────────────────────────────`}</div>

            <Field k="role" v={`${identity.role} · ${identity.secondRole}`} />
            <Field k="location" v={identity.location} />
            <Field k="uptime" v="5 yrs shipping, no rollback" />
            <Field k="day job" v="Full Stack Eng @ DataWars" />
            <Field k="night job" v="Founder @ CODERCOPS" />
            <Field k="shell" v="zsh · tmux · nvim" />
            <Field k="focus" v={identity.focus.join(" · ")} />
            <Field k="django" v="3 patches merged into core" />

            {/* Contribution histogram, drawn with block characters. The
                figures are repeated in text below so it is not colour- or
                shape-only information. */}
            <div className="mt-4 flex gap-2">
              <dt className="w-[4.75rem] flex-none text-signal">activity</dt>
              <dd className="min-w-0 text-dim">
                <span className="mr-2 text-dimmer" aria-hidden="true">
                  ·
                </span>
                <span
                  className="text-signal glow tracking-[0.2em]"
                  aria-hidden="true"
                >
                  {spark}
                </span>
                <span className="ml-2 whitespace-nowrap text-dimmer">
                  {years[0].year}–{years[years.length - 1].year}
                </span>
                <span className="mt-1 block text-text">
                  {years[years.length - 1].total.toLocaleString()} contributions
                  in {years[years.length - 1].year}, the busiest year so far.
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </Reveal>

      {/* ---- cat README.md ---- */}
      <Reveal delay={160}>
        <div className="mt-12">
          <p className="prompt">
            <Prompt cmd="cat" args="README.md" />
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-snug text-text md:text-xl">
            {identity.line}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-dim">
            {identity.bio[0]}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#work"
              className="flex min-h-[44px] items-center gap-2 bg-signal px-4 font-mono text-sm font-medium text-on-signal transition-opacity hover:opacity-90"
            >
              <span aria-hidden="true">▸</span> see the work
            </a>
            <a
              href="#contact"
              className="flex min-h-[44px] items-center border border-rule-bright px-4 font-mono text-sm text-text transition-colors hover:border-signal hover:text-signal"
            >
              get in touch
            </a>
          </div>
        </div>
      </Reveal>

      {/* ---- stats --stat ---- */}
      <Reveal delay={220}>
        <div className="mt-12">
          <p className="prompt">
            <Prompt cmd="stats" args="--summary" />
          </p>
          <dl className="mt-4 grid grid-cols-2 border border-rule font-mono md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.k}
                className={`border-rule p-4 ${i < 2 ? "border-b md:border-b-0" : ""} ${
                  i % 2 === 0 ? "border-r" : "md:border-r"
                } ${i === 3 ? "md:border-r-0" : ""}`}
              >
                <dd
                  className={`text-2xl tabular-nums md:text-3xl ${
                    s.hot ? "text-signal glow" : "text-text"
                  }`}
                >
                  {s.v}
                </dd>
                <dt className="label mt-1">{s.k}</dt>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
