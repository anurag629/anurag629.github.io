# anurag629.github.io

One page with my photo, a short intro, and the links where people can reach me. It is built to be opened from a QR code.

**Live:** [anurag629.github.io](https://anurag629.github.io)

## QR code

Scan it to open [anurag629.github.io](https://anurag629.github.io).

| Black on white (scans best) | Amber (matches the site) |
| :---: | :---: |
| <img src="docs/qr.png" width="220" alt="QR code for anurag629.github.io, black on white"> | <img src="docs/qr-amber.png" width="220" alt="QR code for anurag629.github.io, dark on amber"> |
| Download [PNG](https://github.com/anurag629/anurag629.github.io/raw/main/docs/qr.png) or [SVG](https://github.com/anurag629/anurag629.github.io/raw/main/docs/qr.svg) | Download [PNG](https://github.com/anurag629/anurag629.github.io/raw/main/docs/qr-amber.png) or [SVG](https://github.com/anurag629/anurag629.github.io/raw/main/docs/qr-amber.svg) |

The PNGs are 1184px and the SVGs scale to any size, so use the SVG for print. Each link opens the full file; save it from there. Show the code at 150px or larger so phones can read it.

They are version 3 codes (29 by 29 modules) at error correction level Q, so they still scan through some glare or a scratched screen. The same files are on the live site too, for example `https://anurag629.github.io/qr.png`.

## Changing a link

Everything is in [`docs/index.html`](docs/index.html). Each link is one `<li>` block. Copy a block, change the `href`, the name and the handle, and push to `main`. Icons come from [Simple Icons](https://simpleicons.org).

To preview locally:

```bash
python3 -m http.server 3111 --directory docs
```

Then open <http://localhost:3111>.

## Deployment

GitHub Pages publishes the `docs/` folder of `main` directly (Settings, Pages, "Deploy from a branch"). Push to `main` and the site updates within a minute or two. There is no build step, and `docs/.nojekyll` stops GitHub from running Jekyll over the files.

## The old site

The previous terminal style portfolio (Next.js) is kept on the [`archive/terminal-portfolio`](https://github.com/anurag629/anurag629.github.io/tree/archive/terminal-portfolio) branch.

## Licence

MIT.
