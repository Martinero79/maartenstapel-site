# maartenstapel-site
Personal website of Maarten Stapel, interim finance, Copenhagen. Live at https://maartenstapel.dk

Plain static site, no build step. Hosted on Cloudflare Pages (build command: none, output directory: `/`).

- `index.html` – the page (English text lives here)
- `assets/i18n.js` – Danish translations (keys match `data-i18n` attributes) and the EN/DA toggle
- `assets/style.css` – styles; accent colour is `--accent`
- `sitemap.xml`, `robots.txt`, `_headers` (security headers), `404.html`

To add the CV: put the PDF at `assets/Maarten-Stapel-CV.pdf` and point the "Download CV" button (`#cv-link`) to it.
