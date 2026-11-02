# anurag629.github.io

One page with my photo and the links where people can reach me. It is built to be opened from a QR code.

**Live:** [anurag629.github.io](https://anurag629.github.io)

## QR code

The QR codes point to `https://anurag629.github.io`. They are version 3 (29 by 29 modules) at error correction level Q, so they still scan with some glare or damage. Show them at 150px or larger.

| File | Use |
| --- | --- |
| [`docs/qr.png`](docs/qr.png) | Black on white, 1184px. The safest choice for any scanner. |
| [`docs/qr.svg`](docs/qr.svg) | Same code as a vector, for print. |
| [`docs/qr-amber.png`](docs/qr-amber.png) | Dark on amber, to match the site. |

They are also served from the live site, for example `https://anurag629.github.io/qr.png`.

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
