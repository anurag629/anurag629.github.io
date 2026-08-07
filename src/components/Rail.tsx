"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", index: "00" },
  { id: "now", index: "01" },
  { id: "stack", index: "02" },
  { id: "work", index: "03" },
  { id: "open-source", index: "04" },
  { id: "writing", index: "05" },
  { id: "signals", index: "06" },
  { id: "contact", index: "07" },
];

/**
 * Fixed left rail: which section you are in, and how far down the page.
 *
 * Both numbers are read from real scroll state rather than being ornamental —
 * this is the page's own position readout.
 */
export default function Rail() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);

      // The section whose top has most recently passed the upper third.
      const line = window.scrollY + window.innerHeight * 0.34;
      let current = 0;
      SECTIONS.forEach((section, i) => {
        const el = document.getElementById(section.id);
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

  return (
    <aside
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 hidden h-screen w-rail flex-col items-center justify-center gap-6 border-r border-rule lg:flex"
    >
      <span className="font-mono text-2xs tabular-nums text-signal">
        {SECTIONS[active].index}
      </span>

      <div className="relative h-40 w-px bg-rule">
        <div
          className="absolute left-0 top-0 w-px bg-signal transition-[height] duration-150 ease-out"
          style={{ height: `${progress}%` }}
        />
      </div>

      <span className="font-mono text-2xs tabular-nums text-dim">
        {String(Math.round(progress)).padStart(2, "0")}
      </span>

      <span
        className="font-mono text-2xs uppercase tracking-[0.3em] text-dimmer"
        style={{ writingMode: "vertical-rl" }}
      >
        anurag verma
      </span>
    </aside>
  );
}
