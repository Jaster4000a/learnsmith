# learnsmith

Catalog site for LearnSmith — group-sized STEM activity kits for large outreach events. A static site, no build step, no external dependencies: `index.html` (homepage), `kits/*.html` (one detail page per catalog kit — flagship Egg-Drop plus the top-5 candidates from the business plan), `style.css`, `script.js`.

## Local preview

Open `index.html` directly in a browser, or serve it from the project directory:

```bash
python3 -m http.server
```

## Deploy

Hosted on **GitHub Pages**, served directly from the repo:

1. Push to GitHub.
2. In the repo's **Settings > Pages**, set source to **Deploy from a branch**.
3. Select the `main` branch and the `/ (root)` folder, then save.

## Before going live

The quote-request form posts to [Formspree](https://formspree.io) — wired to a real endpoint (`https://formspree.io/f/maewrdaj`) as of 2026-08-25, tested end-to-end (submission confirmed landing in the Formspree dashboard).

Real pricing isn't set yet either — the tier table intentionally shows group sizes and what's included, not dollar figures, until a supplier quote is locked in (see the business plan in the `sapa` vault, `Personal-Ventures/kit-maker/Plan.md`).
