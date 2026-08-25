# learnsmith

Catalog site for LearnSmith — group-sized STEM activity kits for large outreach events. A single-page static site: `index.html`, `style.css`, `script.js`, no build step, no external dependencies.

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

The quote-request form posts to [Formspree](https://formspree.io) and is not wired to a real endpoint yet:

1. Sign up at [formspree.io](https://formspree.io) and create a form.
2. Copy the form ID.
3. In `index.html`, replace the placeholder `YOUR_FORM_ID` in the `<form action="...">` attribute with the real ID.

Real pricing isn't set yet either — the tier table intentionally shows group sizes and what's included, not dollar figures, until a supplier quote is locked in (see the business plan in the `sapa` vault, `Personal-Ventures/kit-maker/Plan.md`).
