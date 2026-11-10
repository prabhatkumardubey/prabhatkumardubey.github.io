# Prabhat Dubey: Portfolio & Resume

Live site: https://prabhatkumardubey.github.io

A fast, static portfolio and resume site for a Senior Software Engineer (AI infrastructure, distributed systems, data protection). Plain HTML, CSS and vanilla JavaScript. No build step and no dependencies apart from Google Fonts.

## Features
- Dark-first design with a light/dark toggle that remembers your choice
- Sticky navigation that highlights the current section, plus a reading-progress bar
- Headline stats that count up on first view (respects reduced-motion settings)
- Clickable skills: select a skill to highlight the projects and roles where it was used
- Experience timeline with expandable roles and an Expand all / Collapse all control
- Project grid filterable by domain: All, AI/GenAI, Cloud & Distributed Systems, Virtualization/Storage
- Patents spotlight, education, achievements and a contact section with copy-email
- "Download PDF resume" button backed by `@media print` styles for a clean, recruiter-friendly PDF
- Responsive layout, keyboard-accessible controls and visible focus states

## Files
| File | Purpose |
| --- | --- |
| `index.html` | Page structure, hero, about, patents, education, contact |
| `style.css` | Theme variables, layout, print styles |
| `script.js` | Resume data (skills, experience, projects, achievements) and interactions |
| `README.md` | This file |

## Updating content
- **Skills, experience, projects, achievements:** edit the data arrays at the top of `script.js`.
- **Headline, about text, contact, stats:** edit `index.html`. Stat numbers are the `data-n` attributes in the `#stats` block.
- **Colors:** change the CSS variables at the top of `style.css` (`:root` for dark, `:root[data-theme="light"]` for light).
- **LinkedIn link:** replace `YOUR-LINKEDIN` in `index.html` (it appears in the hero and the contact section).

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

## Saving the resume as PDF
Click "Download PDF resume" (or press Ctrl/Cmd+P), choose "Save as PDF", and use A4 or Letter with default margins. Print styles switch to a white background and hide the nav and buttons.
