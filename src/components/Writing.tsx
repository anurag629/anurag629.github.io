import { writing } from "@/data/profile";
import Reveal from "./Reveal";

export default function Writing() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_18rem]">
      <Reveal>
        <div className="frame">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule px-5 py-4">
            <div className="flex gap-8">
              <div>
                <span className="display block text-xl font-bold tabular-nums text-text">
                  {writing.stats.posts}
                </span>
                <span className="label mt-0.5 block">posts</span>
              </div>
              <div>
                <span className="display block text-xl font-bold tabular-nums text-signal">
                  {writing.stats.reactions}
                </span>
                <span className="label mt-0.5 block">reactions</span>
              </div>
            </div>
            <span className="label">{writing.stats.platform}</span>
          </div>

          <ul>
            {writing.featured.map((post) => (
              <li key={post.href} className="border-b border-rule last:border-0">
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[44px] items-center gap-4 px-5 py-3.5 transition-colors hover:bg-[color-mix(in_srgb,var(--panel)_60%,transparent)]"
                >
                  <span className="font-mono text-2xs tabular-nums text-signal">
                    {post.reactions}
                  </span>
                  <span className="flex-1 text-sm text-text group-hover:text-signal">
                    {post.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-2xs text-dimmer transition-transform group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="frame h-full p-5">
          <p className="text-sm leading-relaxed text-dim">{writing.summary}</p>

          <ul className="mt-5 space-y-3 border-t border-rule pt-4">
            {writing.elsewhere.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link tap text-sm"
                >
                  {item.label} ↗
                </a>
                {item.note ? (
                  <p className="mt-0.5 font-mono text-2xs text-dimmer">
                    {item.note}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
