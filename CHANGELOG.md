# Changelog

Every change to the website is listed here: what changed and why.
Each entry matches a pull request on GitHub, which holds the exact line-by-line changes.
Nothing goes live until Maarten merges the pull request himself.

## 2026-11-27: Contact email is now maarten@maartenstapel.dk (pull request #6)
**What changed**
- The "Get in touch" button, its email link and the search engine data now use maarten@maartenstapel.dk instead of hello@maartenstapel.dk.
- The downloadable CV (PDF) shows maarten@maartenstapel.dk too. Only that one line was changed: the old text was removed and the new address written in the same font, size and place.

**Why**
- Maarten prefers a personal address over hello@. maarten@ forwards to his own inbox through Cloudflare Email Routing.

## 2026-11-27: Show the roles I take on, interim or permanent (pull request #5)
**What changed**
- New section "Roles I take on" (first section after the top) with six cards: Finance Business Partner, Business Controller, Finance Manager, FP&A, Leading a small finance team (FP&A and controlling) and CFO services for a start-up.
- Intro line under it: available for interim assignments, including parental leave and vacancy cover, and open to permanent roles in Copenhagen.
- The old "Assignments I take on" cards are now "How I can help" (Planning cycles, Close and reporting, KPIs and performance, Group reporting). "Cover roles" and "Business partnering" were removed there because the new role cards cover them.
- Top section: the line under the big heading now lists the four roles; the status pill says "interim or permanent"; the intro ends with "Available for interim assignments and open to permanent roles."
- Engagement "Type" now says "Interim assignments or permanent roles". Contact text and footer no longer say interim only. Menu item "Services" is now "Roles".
- Search engine text and structured data mention the four roles and CFO services for start-ups.

**Why**
- Maarten wants to be hired for interim or permanent roles and the page read as interim only. Team leadership is phrased as what Maarten can do, with no invented team sizes or titles. The start-up CFO card points to the ten years co-founding and running Light Skateboards (already in About).
- The hidden Danish draft is not updated yet; it will be redone when the Danish version is reviewed.

## 2026-11-27: New colour scheme "Nordic Blue" (pull request #4)
**What changed**
- Main colour is now a clear blue (#1d5fa8) instead of dark teal, used for the "Get in touch" button, the line under the name and the years in the track record.
- A fresh green (#2f9e6f) highlights "in Copenhagen" in the big heading, the 01/02/03 numbers in "How I work" and the lines above the Engagement facts.
- Top section and every other section now have a light blue tint instead of plain white and grey. Cards are white with a thin blue line on top.
- "Get in touch" block at the bottom is now a navy-to-blue gradient (was dark navy). The footer has a light blue tint.
- Dark mode (for visitors whose computer is set to dark) uses matching darker blues.
- Browser tab icon ("MS") and the mobile browser bar colour are now the same blue.

**Why**
- The old look felt too white and grey. Maarten picked "Nordic Blue" from three sample schemes (previews in the project folder, website/colour-schemes).

## 2026-11-26: Full name in the header, 15+ years in About, project names (pull request #3)
**What changed**
- Projects: added a third card, "Wine Atlas", coming soon (no link yet).
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
