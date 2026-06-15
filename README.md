# Rena Ren Lab — Website

Laboratory of Spatial RNA Biology & Technology. A static, dependency-free site
(plain HTML/CSS/JS) designed to be edited in plain text and hosted anywhere.

## Preview it
Open a terminal in this folder and run:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. (Opening `index.html` directly also works,
but a tiny local server is more faithful.)

## File map

```
index.html            HOME — rotating cellular landscape + clickable-cell nav
research.html         RESEARCH — research description
rena-ren.html         RENA REN — bio + portrait
lab-members.html      LAB MEMBERS — one member per row + open positions
publications.html     PUBLICATION — one paper per row
contact.html          CONTACT — contact card
assets/
  css/styles.css      ALL design tokens (colors, fonts, spacing) + styling
  js/config.js        ALL structured content — THE main file you'll edit
  js/app.js           Renders shared header/footer + hero behavior (rarely edited)
  img/                cell-landscape.jpg, rena-ren.jpg, astar-gis-logo.svg
  fonts/              drop licensed AMAGRO / ORTICA web-fonts here (optional)
```

## How to edit (the common things)

Everything below is changed in **`assets/js/config.js`** unless noted.

| Want to change… | Where |
|---|---|
| Nav links / order | `nav[]` |
| Wordmark text / tagline | `brand{}` |
| Big floating home heading | `hero.heading` |
| Which cell opens which page (and where it sits) | `cells[]` — `x`,`y` are % positions over the artwork |
| Lab members (add/remove) | `members[]` — copy a block |
| Open positions | `openings[]` (set to `[]` to hide) |
| Publications (add a paper + screenshot) | `publications[]` — copy the template block |
| Contact details | `contact{}` |
| Research description text | `research.html`, between the `EDIT` comments |
| Rena's bio text | `rena-ren.html`, between the `EDIT` comments |
| Colors / theme | `assets/css/styles.css` → `:root` tokens |

### Add a publication
In `config.js`, inside `publications`, add:
```js
{
  title: "Your paper title",
  authors: "Ren J, ...",
  venue: "Journal, 2026",
  links: [ { label: "Journal", href: "https://..." }, { label: "PDF", href: "https://..." } ],
  thumb: "assets/img/paper-1.jpg"   // put the screenshot in assets/img/
}
```

### Add a lab member
In `config.js`, inside `members`, add:
```js
{
  name: "Full Name",
  role: "PhD Student",
  photo: "assets/img/their-photo.jpg",   // or "" for a soft placeholder
  blurb: "One or two sentences."
}
```

### Move a clickable cell
Each entry in `cells[]` has `x` and `y` as percentages over the artwork
(0–100, from the top-left of the image). Nudge those numbers to sit the doorway
over a different cell cluster. `accent` is the hover-glow color.

## Fonts — AMAGRO & ORTICA

These are **commercial fonts** and are not bundled (licensing). The site ships
with close free stand-ins so it looks right today:

- **AMAGRO** (wordmark) → currently rendered with **Fredoka**
- **ORTICA** (headings) → currently rendered with **Fraunces**
- Nav/body uses **Hanken Grotesk** (sleek, pairs with both)

To use the **real** fonts:
1. Buy/obtain the licensed web-font files (`.woff2`).
2. Drop them in `assets/fonts/` (e.g. `Amagro-Bold.woff2`, `Ortica-Bold.woff2`).
3. In `assets/css/styles.css`, **uncomment** the two `@font-face` blocks at the top.

That's it — the rest of the CSS already lists `"Amagro"` and `"Ortica"` first,
so they take over automatically.

## A*STAR GIS logo

`assets/img/astar-gis-logo.svg` is a **placeholder** typographic mark (the
official logo is trademarked). Replace that file with the official transparent
**PNG or SVG** from A*STAR GIS and it will appear in the top-right corner. The
CSS already makes it blend into the parchment (multiply + soft opacity); if the
official asset is full-color and you don't want blending, set
`.inst-logo img { mix-blend-mode: normal; }` in `styles.css`.

## Going live (deployment)

The site is static, so hosting is simple and usually free:

1. **Pick a host.** GitHub Pages, Netlify, Cloudflare Pages, or Vercel all work.
   Easiest no-build option: drag this folder onto **Netlify Drop**
   (app.netlify.com/drop), or push it to a GitHub repo and enable **Pages**.
2. **Register the domain** `renarenlab.org` at any registrar (Namecheap,
   Cloudflare, Google Domains successor, etc.) and verify availability first.
3. **Point the domain at the host** by adding the host's DNS records
   (an `A`/`ALIAS` record for the apex `renarenlab.org` and a `CNAME` for
   `www`). Each host shows the exact values in its "custom domain" settings.
4. **Enable HTTPS** (one click on all the hosts above).

No server, database, or build step is required.
