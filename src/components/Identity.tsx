import Image from "next/image";
import { identity, throughput } from "@/data/profile";
import gh from "@/data/generated/github.json";
import Reveal from "./Reveal";

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex gap-4 border-b border-rule py-2 last:border-0">
      <dt className="label w-24 flex-none pt-px">{k}</dt>
      <dd className="font-mono text-sm text-text">{v}</dd>
    </div>
  );
}

export default function Identity() {
  const years = gh.contributions;
  const peak = Math.max(...years.map((y) => y.total), 1);

  const stats = [
    { label: "Django core", value: String(throughput.djangoCore), signal: true },
    { label: "PRs merged", value: throughput.totalMerged.toLocaleString() },
    { label: "public repos", value: String(gh.totals.originalPublicRepos) },
    { label: "stars", value: String(gh.totals.stars) },
  ];

  return (
    <section id="top" className="scroll-mt-24 pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        {/* ---- Thesis ---- */}
        <div>
          <Reveal>
            <div className="mb-6 flex items-center gap-2.5">
              <span className="pip pip-live" />
              <span className="label">available for conversations</span>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="display text-[clamp(2.6rem,9vw,5.5rem)] font-bold uppercase">
              Anurag
              <br />
              Verma
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-5 font-mono text-sm text-signal md:text-base">
              {identity.role}
              <span className="mx-2 text-dimmer">·</span>
              {identity.secondRole}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-balance text-xl leading-snug text-text md:text-2xl">
              {identity.line}
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-dim">
              {identity.bio[0]}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="flex min-h-[44px] items-center gap-2 bg-signal px-5 font-mono text-sm font-medium text-on-signal transition-opacity hover:opacity-90"
              >
                See the work
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#contact"
                className="flex min-h-[44px] items-center border border-rule-bright px-5 font-mono text-sm text-text transition-colors hover:border-signal"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>

        {/* ---- Readout ---- */}
        <Reveal delay={300}>
          <div className="frame p-5 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-rule pb-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/profile.png"
                  alt=""
                  width={44}
                  height={44}
                  priority
                  className="h-11 w-11 border border-rule object-cover grayscale"
                />
                <div>
                  <p className="font-mono text-sm text-text">
                    @{identity.handle}
                  </p>
                  <p className="label mt-0.5">{identity.location}</p>
                </div>
              </div>
              <span className="label text-ok">online</span>
            </div>

            <dl className="mb-5">
              <Row k="shipping" v={identity.focus.join(" · ")} />
              <Row k="day job" v="Full Stack Eng — DataWars" />
              <Row k="night job" v="Founder — CoderCops" />
              <Row k="since" v="2021 · first commit" />
            </dl>

            {/* Contributions per calendar year, fetched at build time. */}
            <div>
              <div className="mb-2 flex items-baseline justify-between">
                <span className="label">contributions</span>
                <span className="font-mono text-2xs tabular-nums text-dim">
                  {years[0].year}—{years[years.length - 1].year}
                </span>
              </div>
              <div className="flex h-20 items-end gap-1.5">
                {years.map((y) => (
                  <div key={y.year} className="group flex-1">
                    <div
                      className="meter-fill w-full origin-bottom bg-signal"
                      style={{
                        height: `${Math.max(4, (y.total / peak) * 76)}px`,
                        opacity: 0.45 + (y.total / peak) * 0.55,
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex gap-1.5">
                {years.map((y) => (
                  <span
                    key={y.year}
                    className="flex-1 text-center font-mono text-2xs tabular-nums text-dimmer"
                  >
                    {String(y.year).slice(2)}
                  </span>
                ))}
              </div>
              <p className="mt-3 font-mono text-2xs text-dim">
                {years[years.length - 1].total.toLocaleString()} in{" "}
                {years[years.length - 1].year} — the busiest year so far.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ---- Stat strip ---- */}
      <Reveal delay={360}>
        <dl className="mt-12 grid grid-cols-2 border border-rule md:mt-16 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-b border-r border-rule p-4 last:border-r-0 md:border-b-0 md:p-5 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
            >
              <dd
                className={`display text-2xl font-bold tabular-nums md:text-3xl ${
                  s.signal ? "text-signal" : "text-text"
                }`}
              >
                {s.value}
              </dd>
              <dt className="label mt-1.5">{s.label}</dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
