"use client";

import { useEffect, useState } from "react";
import { nav } from "@/data/profile";

function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(
      document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark",
    );
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* Private mode: the toggle still works for this session. */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex h-11 min-w-[44px] items-center justify-center whitespace-nowrap px-2 font-mono text-2xs uppercase tracking-widest text-dim transition-colors hover:text-signal"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? "[ dark ]" : "[ light ]"}
    </button>
  );
}

/** Terminal window title bar, pinned to the top of the viewport. */
export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="term-bar">
        <span className="flex flex-none gap-1.5 pr-1" aria-hidden="true">
          <span className="term-dot" />
          <span className="term-dot" />
          <span className="term-dot" />
        </span>

        <span className="truncate font-mono text-2xs text-dim">
          anurag@github: ~/portfolio
          <span className="hidden text-dimmer sm:inline"> — zsh — 132×48</span>
        </span>

        <nav aria-label="Sections" className="ml-auto hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-2 py-2 font-mono text-2xs lowercase text-dim transition-colors hover:text-signal"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1 md:ml-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 min-w-[44px] items-center justify-center font-mono text-2xs text-dim transition-colors hover:text-signal md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? "[ x ]" : "[ ≡ ]"}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-b border-rule bg-panel md:hidden"
          onClick={() => setOpen(false)}
        >
          <ul className="px-3 py-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 font-mono text-sm text-dim"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-signal" aria-hidden="true">
                    ▸{" "}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
