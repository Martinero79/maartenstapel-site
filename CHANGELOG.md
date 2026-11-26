# Changelog

Every change to the website is listed here: what changed and why.
Each entry matches a pull request on GitHub, which holds the exact line-by-line changes.
Nothing goes live until Maarten merges the pull request himself.

## 2026-11-26: Full name in the header, 15+ years in About, project names (pull request #3)
**What changed**
- Projects: the surf card is now called "Surf Travel Atlas". Removed the last mention of "Daily Pick" (it was left in the hidden Danish draft), because it is only a small part of Not Your Financial Advisor.
- About section now opens with "15+ years of experience in FP&A, business partnering and controlling" (same claim as the CV).
- The name at the top left of every page now reads "Maarten Pieter Stapel" (was "Maarten Stapel").
- Search engine data now also lists "Maarten Pieter Stapel" as an alternative name.

**Why**
- Matches the name on the CV.

## 2026-11-26: CV and real content (pull request #2)
**What changed**
- "Download CV" now downloads the CV as a PDF (`public/assets/Maarten-Stapel-CV.pdf`) instead of opening an email.
- Hero, "Assignments I take on", Track record and About now use facts from the CV only.
- Track record lists each role from 2007 to 2026 with selected results from the CV.
- Projects now links to the investing website notyourfinancialadvisor.com (named in the CV).
- Search engine text and structured data updated to FP&A, business partnering and controlling, CPA and languages.
- Removed the generic "Year-end and audit" service, because the CV doesn't mention it.

**Why**
- Replace the placeholders with real, checkable facts so visitors see relevant experience.

**Deliberately left out (do-not-claim list)**
- No people management, business cases, dashboards or automation claims. For that reason the CV points on SAP/EPM/BI rollouts, the SAP implementation lead, Power BI and the exit evaluation are not on the page.

**Privacy**
- The CV published on the website is a web version: home address, phone number and personal email were removed from the PDF (the text itself is deleted, not covered over) and replaced with "Copenhagen, Denmark", hello@maartenstapel.dk and maartenstapel.dk. Nothing else in the CV was changed.

**Hosting fix: Cloudflare Workers**
- The site runs as a Cloudflare Worker (not Pages). Added `wrangler.jsonc`, which tells Cloudflare exactly which folder is the website.
- Moved all website files into a `public/` folder. Why: only that folder is published, so the README, changelog and settings are never served as web pages.
- Pages that don't exist now show the "page not found" page.
- Added an empty `previews` block to `wrangler.jsonc`. Why: Cloudflare builds a test version of every pull request with `npx wrangler preview`, and that command refuses to run without this block (the test build of this pull request failed on it).
- Tested with Cloudflare's own tool (wrangler) locally: homepage, CV download, sitemap, security headers and the 404 page all work.

**Note**
- The Danish draft (`public/assets/i18n.js`) is now out of date and will be redone in the Danish update.

## 2026-11-26: First version (pull request #1)
**What changed**
- New single-page website: hero, What I do, How I work, Track record, Engagement, About, Projects, Contact.
- Visual identity: white background, dark navy text, teal accent, one sans-serif font, text wordmark "Maarten Stapel".
- Search engine basics: page title and description with "interim finance" and Copenhagen, structured data (Person, ProfessionalService), sitemap.xml, robots.txt.
- Security headers (`_headers`) and a "page not found" page.
- English only for launch. Danish text is drafted but switched off (DA button hidden).

**Why**
- Launch today with a simple, fast site aimed at CFOs, Heads of Finance, PE/portfolio companies and recruiters.
- No cookies or tracking, for privacy.

**Not yet done (placeholders, no invented facts)**
- Track record and About are generic until the brief and CV arrive.
- "Download CV" opens an email request until the PDF is added.
- Investing project has no link until its web address is known.
