/**
 * A shell prompt line: `anurag@github:~$ cat now.md`
 *
 * The chrome (user, path, sigil) is decoration and is hidden from assistive
 * tech; only the command text is announced. Where this is used as a heading,
 * pass `srLabel` so screen readers get a real section name instead of "cat
 * open-source.md".
 */
export default function Prompt({
  cmd,
  args,
  srLabel,
  cursor = false,
  path = "~",
}: {
  cmd: string;
  args?: string;
  srLabel?: string;
  cursor?: boolean;
  path?: string;
}) {
  return (
    <>
      <span aria-hidden="true">
        <span className="prompt-user">anurag</span>
        <span className="text-dimmer">@</span>
        <span className="prompt-user">github</span>
        <span className="prompt-path">:{path}</span>
        <span className="prompt-sigil">$ </span>
        <span className="prompt-cmd">{cmd}</span>
        {args ? <span className="prompt-flag"> {args}</span> : null}
        {cursor ? <span className="cursor" /> : null}
      </span>
      {srLabel ? <span className="sr-only">{srLabel}</span> : null}
    </>
  );
}
