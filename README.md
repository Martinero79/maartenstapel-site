# maartenstapel-site
Personal website of Maarten Stapel, interim finance, Copenhagen. Live at https://maartenstapel.dk

Plain static site, no build step. Hosted as a **Cloudflare Worker** (`maartenstapel-site`) connected to this repository: every merge to `main` deploys automatically with `npx wrangler deploy`.

- `wrangler.jsonc` – Cloudflare settings: serve the files in `public/` as the website
- `public/index.html` – the page (English text lives here)
- `public/assets/i18n.js` – Danish translations (keys match `data-i18n` attributes) and the EN/DA toggle (currently hidden)
- `public/assets/style.css` – styles; accent colour is `--accent`
- `public/assets/Maarten-Stapel-CV.pdf` – web version of the CV (no address/phone). To update, replace the file and keep the name
- `public/sitemap.xml`, `public/robots.txt`, `public/_headers` (security headers), `public/404.html`
- `CHANGELOG.md` – what changed and why, one entry per pull request

Files outside `public/` (this README, the changelog, the settings) are never published.
