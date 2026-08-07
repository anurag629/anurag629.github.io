"use client";

import { useEffect, useState } from "react";

const WINDOWS = [
  { id: "top", label: "identity" },
  { id: "now", label: "now" },
  { id: "stack", label: "stack" },
  { id: "work", label: "work" },
  { id: "trace", label: "trace" },
  { id: "open-source", label: "oss" },
  { id: "writing", label: "writing" },
  { id: "signals", label: "signals" },
  { id: "contact", label: "contact" },
];

/**
 * tmux-style status line, pinned to the bottom.
 *
 * The window list tracks real scroll position and the percentage is the real
 * scroll offset, so this is a position readout rather than decoration.
 * Purely informational, so it stays out of the accessibility tree — the
 * headings and skip link are how the page is actually navigated.
 */
export default function StatusBar() {
  const [active, setActive] = useState(0);
  const [pct, setPct] = useState(0);
  const [clock, setClock] = useState("");

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0);

      const line = window.scrollY + window.innerHeight * 0.32;
      let current = 0;
      WINDOWS.forEach((w, i) => {
        const el = document.getElementById(w.id);
        if (el && el.offsetTop <= line) current = i;
      });
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Rendered only after mount, so the static HTML has no stale timestamp.
  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-rule bg-panel px-2 font-mono text-2xs"
    >
      <span className="flex-none bg-signal px-2 py-1.5 text-on-signal">
        portfolio
      </span>

      <div className="flex min-w-0 flex-1 gap-2 overflow-hidden">
        {WINDOWS.map((w, i) => (
          <span
            key={w.id}
            className={`whitespace-nowrap py-1.5 ${
              i === active ? "text-signal" : "text-dimmer"
            }`}
          >
            {i}:{w.label}
            {i === active ? "*" : ""}
          </span>
        ))}
      </div>

      <span className="flex-none py-1.5 tabular-nums text-dim">{pct}%</span>
      {clock ? (
        <span className="hidden flex-none py-1.5 tabular-nums text-dim sm:inline">
          {clock}
        </span>
      ) : null}
    </div>
  );
}
