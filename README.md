# IZYWORLD GLOBAL LIMITED — Official Website

> **Building Intelligent Digital Futures**

The official corporate website of Izyworld Global Limited — a technology and
creative enterprise based in Nigeria. Built with plain **HTML, CSS and
JavaScript** on purpose: no frameworks, no build tools, no confusion. Every
line is written to be **read, understood and modified** — this codebase is
also a learning material for the company's own web development journey.

---

## 1. What is in this repository?

```
izyworld-website/
│
├── index.html            ← HOME PAGE (the first page people see)
├── about.html            ← ABOUT PAGE (story, mission, vision, values)
├── services.html         ← SERVICES PAGE (the 6 service lines, detailed)
├── contact.html          ← CONTACT PAGE (enquiry form + contact details)
├── portfolio.html        ← OUR WORK PAGE (the portfolio — real projects)
│
├── css/                  ← ALL STYLES (how the site looks)
│   ├── variables.css     ←   brand colors & measurements (edit colors HERE)
│   └── main.css          ←   the full layout, section by section
│
├── js/
│   └── main.js           ← ALL BEHAVIOR (menu, scroll effects, form checking)
│
├── assets/               ← IMAGES
│   ├── izy-logo.png      ←   the master logo
│   └── portfolio/         ←   project showcase images
│   ├── favicon-32.png    ←   browser tab icon
│   └── apple-touch-icon.png
│
├── docs/
│   └── ARCHITECTURE.md   ← explains how everything fits together (read next!)
│
└── README.md             ← this file
```

## 2. How do the three languages work together?

Think of a website like a human being:

| Language | Role | File(s) |
|----------|------|---------|
| **HTML** | The **skeleton** — every heading, paragraph, button | `index.html`, `about.html`, `services.html`, `contact.html`, `portfolio.html` |
| **CSS**  | The **appearance** — colors, spacing, layout | `css/variables.css`, `css/main.css` |
| **JS**   | The **behavior** — menus, animations, form checking | `js/main.js` |

A change in the HTML changes the *content*. A change in the CSS changes the
*look*. A change in the JS changes *what it does*. They never mix — that is
why the folders are separate.

## 3. How do I view the website on my laptop?

No server needed. Just:

1. Download / clone this repository
2. Double-click `index.html` — it opens in your browser

That's it. To edit, open any file in Notepad (better: **VS Code**, free)
and save; refresh the browser to see your change.

## 4. How do I publish it live on the internet — free?

GitHub gives every repository a **free website** through *GitHub Pages*:

1. Open the repository on github.com → **Settings** → **Pages**
2. Under "Branch", choose **main** → **/(root)** → Save
3. Wait ~2 minutes. Your live address will be:
   `https://izyworld-a.github.io/izyworld-website/`

Later, you can connect a custom domain (like `izyworld.com`) in the same
place.

## 5. What still needs your real details?

Search the codebase for **`UPDATE ME`** — every unfinished placeholder is
marked. Currently that is: the contact email, the phone/WhatsApp number,
the WhatsApp chat link, and the social media links in the footer.

## 6. Where do the brand rules come from?

The brand colors match the official design tokens defined in the corporate
identity system (`izyrootcolor.css` / `.json` in the
IZYWORLD-CORPORATE-ASSETS → 01_BRAND-IDENTITY → Color Palette folder on
Google Drive):

| Token | Color | Hex |
|-------|-------|-----|
| `--izy-primary` | Izyworld Blue | `#2563EB` |
| `--izy-secondary` | Izyworld Indigo | `#4F46E5` |
| `--izy-accent` | Izyworld Cyan | `#06B6D4` |
| `--izy-navy` | Izyworld Navy | `#0A0F24` |
| `--izy-slate` | Izyworld Slate | `#334155` |
| `--izy-surface` | Izyworld Surface | `#F8FAFC` |

Change a brand color in **one place** (`css/variables.css`) and the whole
website updates.

---

© Izyworld Global Limited. All rights reserved.
