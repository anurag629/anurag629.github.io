import { routes } from "@/data/profile";
import Reveal from "./Reveal";

const NOW = 2026;

const STATUS: Record<string, { pip: string; tone: string }> = {
  primary: { pip: "pip-signal", tone: "text-signal" },
  active: { pip: "pip-ok", tone: "text-ok" },
  standby: { pip: "pip-dim", tone: "text-dim" },
};

/**
 * Signature section.
 *
 * A stack list rendered as the artifact Anurag actually builds: a provider
 * routing table. Nothing here is invented — `since` is the year the row became
 * routine, and the bar is simply the span from that year to now.
 */
export default function RoutingTable() {
  const longest = Math.max(...routes.map((r) => NOW - r.since), 1);

  return (
    <div className="frame overflow-hidden">
      {/* Column headers — desktop only; mobile reads as stacked cards. */}
      <div className="hidden border-b border-rule px-5 py-3 md:grid md:grid-cols-[7rem_1fr_9rem_7rem] md:gap-4">
        <span className="label">route</span>
        <span className="label">stack</span>
        <span className="label">status</span>
        <span className="label text-right">in rotation</span>
      </div>

      <ul>
        {routes.map((r, i) => {
          const yrs = NOW - r.since;
          const status = STATUS[r.status] ?? STATUS.standby;
          return (
            <li key={r.route} className="border-b border-rule last:border-0">
              <Reveal delay={i * 50}>
                <div className="grid gap-3 px-5 py-4 md:grid-cols-[7rem_1fr_9rem_7rem] md:items-center md:gap-4">
                  <span className="font-mono text-sm font-medium text-signal">
                    {r.route}
                  </span>

                  <div className="flex flex-wrap gap-1.5">
                    {r.stack.map((s) => (
                      <span
                        key={s}
                        className="border border-rule px-2 py-1 font-mono text-2xs text-dim"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <span
                    className={`label flex items-center gap-2 ${status.tone}`}
                  >
                    <span className={`pip ${status.pip}`} />
                    {r.status}
                  </span>

                  <div className="md:text-right">
                    <div className="flex items-center gap-2 md:justify-end">
                      <div
                        className="h-1 bg-rule md:order-1"
                        style={{ width: "48px" }}
                      >
                        <div
                          className="meter-fill h-1 bg-signal"
                          style={{ width: `${(yrs / longest) * 100}%` }}
                        />
                      </div>
                      <span className="font-mono text-2xs tabular-nums text-dim md:order-2">
                        {yrs}y
                      </span>
                    </div>
                    <span className="mt-1 hidden font-mono text-2xs tabular-nums text-dimmer md:block">
                      since {r.since}
                    </span>
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>

      <p className="border-t border-rule px-5 py-3 font-mono text-2xs text-dim">
        primary = daily · active = regular · standby = when the job calls for it
      </p>
    </div>
  );
}
