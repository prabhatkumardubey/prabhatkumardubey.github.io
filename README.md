# Prabhat Dubey: Portfolio & Resume

Live site: https://prabhatdubey.github.io

A fast, static portfolio and resume site for a Senior Software Engineer (AI infrastructure, distributed systems, data protection). Plain HTML, CSS and vanilla JavaScript. No build step and no dependencies apart from Google Fonts.

## Features
- Dark-first design with a light/dark toggle that remembers your choice
- Sticky navigation that highlights the current section, plus a reading-progress bar
- Years of experience calculated automatically from an Aug 2016 start date (change it at the top of `script.js`)
- Headline stats link to the projects behind them; patent callout and one-line specialty statement in the intro
- Optional booking button: set `CALENDAR_URL` near the bottom of `script.js`
- Headline stats that count up on first view (respects reduced-motion settings)
- Clickable skills: select a skill to highlight the projects and roles where it was used
- Experience timeline with expandable roles and an Expand all / Collapse all control
- Project grid filterable by domain: All, AI/GenAI, Cloud & Distributed Systems, Virtualization/Storage
- Patents spotlight, education, achievements and a contact section with copy-email
- Downloadable PDF resume (`Prabhat_Dubey_Resume.pdf`) plus `@media print` styles if someone prints the page
- Patents section: 14 US patents granted, each linked to its public Justia record, with category filters (edit the category map near the bottom of `script.js`)
- Link-sharing tags (Open Graph and Twitter cards, preview image), favicon, structured data, `robots.txt` and `sitemap.xml`
- Optional cookie-free visit counts (GoatCounter), off until you add a code
- Responsive layout, keyboard-accessible controls and visible focus states

## Files
| File | Purpose |
| --- | --- |
| `index.html` | Page structure, hero, about, patents, education, contact |
| `style.css` | Theme variables, layout, print styles |
| `script.js` | Resume data (skills, experience, projects, achievements) and interactions |
| `Prabhat_Dubey_Resume.pdf` | Downloadable resume |
| `og-image.png`, `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png` | Link-preview image and site icon |
| `robots.txt`, `sitemap.xml` | Search engine files |
| `README.md` | This file |

## Updating content
- **Skills, experience, projects, achievements:** edit the data arrays at the top of `script.js`.
- **Headline, about text, contact, stats:** edit `index.html`. Stat numbers are the `data-n` attributes in the `#stats` block.
- **Colors:** change the CSS variables at the top of `style.css` (`:root` for dark, `:root[data-theme="light"]` for light).
- **Links:** LinkedIn and GitHub URLs are in the hero and contact section of `index.html`.

## Run locally
Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy on GitHub Pages
1. Keep the repo public and named `<username>.github.io`.
2. Push changes to `main`.
3. In Settings → Pages, set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Changes go live within a minute or two of each push.

## Resume PDF
The download buttons serve `Prabhat_Dubey_Resume.pdf`. Replace that file whenever your resume changes, keeping the same name.

## Analytics (optional)
Sign up at goatcounter.com, choose a site code, then set `var CODE = "your-code"` at the bottom of `script.js`. It loads last, skips visitors with Do Not Track, and uses no cookies.
