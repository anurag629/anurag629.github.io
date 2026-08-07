import type { ReactNode } from "react";
import Reveal from "./Reveal";
import Prompt from "./Prompt";

/**
 * A section is one command and its output.
 *
 * The heading carries an sr-only title so assistive tech gets "Open source"
 * rather than "cat open-source.md", while sighted readers get the shell line.
 */
export default function Section({
  id,
  title,
  cmd,
  args,
  caption,
  children,
}: {
  id: string;
  title: string;
  cmd: string;
  args?: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-12 md:py-16">
      <Reveal>
        <header className="mb-6 md:mb-8">
          <h2 className="prompt">
            <Prompt cmd={cmd} args={args} srLabel={title} />
          </h2>
          {caption ? (
            <p className="mt-2 max-w-2xl pl-0 text-sm leading-relaxed text-dim md:pl-4">
              {caption}
            </p>
          ) : null}
        </header>
      </Reveal>
      {children}
    </section>
  );
}
