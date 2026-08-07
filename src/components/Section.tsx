import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * The repeating structural unit.
 *
 * The index is not decoration — sections are a fixed sequence and the number
 * is what the left rail tracks against, so a reader always knows where in the
 * page they are.
 */
export default function Section({
  id,
  index,
  title,
  caption,
  children,
}: {
  id: string;
  index: string;
  title: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <Reveal>
        <header className="mb-8 md:mb-12">
          <div className="tick-rule mb-4" />
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="label text-signal">{index}</span>
            <h2 className="display text-2xl font-bold uppercase md:text-3xl">
              {title}
            </h2>
          </div>
          {caption ? (
            <p className="mt-2 max-w-2xl text-sm text-dim">{caption}</p>
          ) : null}
        </header>
      </Reveal>
      {children}
    </section>
  );
}
