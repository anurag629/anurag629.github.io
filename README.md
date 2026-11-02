# anurag629.github.io

One page with my photo and the links where people can reach me. It is built to be opened from a QR code.

**Live:** [anurag629.github.io](https://anurag629.github.io)

## QR code

The QR codes point to `https://anurag629.github.io`. They are version 3 (29 by 29 modules) at error correction level Q, so they still scan with some glare or damage. Show them at 150px or larger.

| File | Use |
| --- | --- |
| [`site/qr.png`](site/qr.png) | Black on white, 1184px. The safest choice for any scanner. |
| [`site/qr.svg`](site/qr.svg) | Same code as a vector, for print. |
| [`site/qr-amber.png`](site/qr-amber.png) | Dark on amber, to match the site. |

They are also served from the live site, for example `https://anurag629.github.io/qr.png`.

## Changing a link

Everything is in [`site/index.html`](site/index.html). Each link is one `<li>` block. Copy a block, change the `href`, the name and the handle, and push to `main`. Icons come from [Simple Icons](https://simpleicons.org).

To preview locally:

```bash
python3 -m http.server 3111 --directory site
```

Then open <http://localhost:3111>.

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`, which publishes the `site/` folder to GitHub Pages. There is no build step.

## The old site

The previous terminal style portfolio (Next.js) is kept on the [`archive/terminal-portfolio`](https://github.com/anurag629/anurag629.github.io/tree/archive/terminal-portfolio) branch.

## Licence

MIT.
