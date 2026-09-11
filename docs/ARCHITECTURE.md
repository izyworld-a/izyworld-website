# Website Architecture — How the Izyworld Website Works

This document explains the website the way an architect explains a building:
what each part does, how the parts connect, and how to extend it.

---

## 1. The big picture

The site is a **multi-page static website**. "Static" means every page is a
ready-made HTML file the browser displays as-is — there is no database and no
server code. This is the right starting architecture for Izyworld because:

- it is **fast** (nothing to compute, pages just load),
- it is **free to host** (GitHub Pages),
- it is **easy to understand** (open a file, read it),
- and it **teaches real fundamentals** — HTML, CSS and JavaScript without a
framework hiding the details.

When the company later needs dynamic features (e.g. messages stored in a
database, client logins, online payments), a backend can be added without
throwing this away — the HTML/CSS/JS stays, only data-handling changes.

## 2. The page map

```
                 ┌──────────────────────────────────────────┐
   Visitor        │              NAVIGATION (4 links)        │
      │           └──────────────────────────────────────────┘
      ▼
 ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
 │  index   │──▶│  about   │   │ services │   │ contact  │
 │  .html   │   │  .html   │   │  .html   │   │  .html   │
 └──────────┘   └──────────┘   └──────────┘   └──────────┘
    Purpose:      Purpose:        Purpose:        Purpose:
    convince      build trust     explain what    capture
    in 5 seconds  and respect      we sell & to    enquiries
                  (who we are)    whom            (the form)
```

**Design logic:** every page answers one question — *Home: "why should I
care?" → Services: "what exactly do you do?" → About: "can I trust you?" →
Contact: "how do I start?"* A visitor should be able to travel that path
with two clicks.

## 3. Shared parts (why the site stays consistent)

Three pieces repeat on **every page**, kept identical by design:

1. **The header + navigation** — so users always know where they are.
2. **The footer** — company info, links, copyright (year updates itself).
3. **The stylesheet + script includes** — every page loads the same two CSS
   files and the same JS file.

If you change the footer, change it in all four HTML files. (When you later
learn a framework or a static-site generator, this repetition is the first
thing that disappears — that is one of the *reasons frameworks exist*.)
Knowing the manual way first makes you appreciate the automated way later.

## 4. The styling system (CSS)

```
css/variables.css                css/main.css
  the BRAND language               the LAYOUT grammar
  ───────────────────              ─────────────────
  --izy-primary  #2563EB           1. RESET      browser defaults removed
  --izy-secondary #4F46E5          2. BASE       text, containers
  --izy-accent   #06B6D4           3. HEADER     sticky nav, mobile menu
  --izy-navy     #0A0F24           4. HERO       home page opening
  ...                               5. BUTTONS   .btn, .btn-primary...
                                    6. SECTIONS  headings & spacing
                                    7. CARDS     services/values grids
                                    8. ABOUT     mission/vision blocks
                                    9. CONTACT   form + info card
                                   10. FOOTER
                                   11. UTILITIES helpers (.text-center)
                                   12. ANIMATIONS .reveal effect
                                   13. RESPONSIVE phones & tablets
```

**Rule used everywhere:** main.css never types a raw color. It only writes
`var(--izy-primary)` etc. So `variables.css` is the single source of brand
truth — exactly like the corporate design token system (EDTS) in IMS-000.

## 5. The behavior system (JavaScript)

`js/main.js` runs on every page. It has 5 independent parts — if one fails,
the others keep working:

| # | Feature | How it works (plain English) |
|---|---------|-------------------------------|
| 1 | Mobile menu | The hamburger button adds/removes an `.open` class; CSS shows/hides the menu. JS only toggles the class. |
| 2 | Header shadow | Every scroll event checks `window.scrollY > 10` and toggles a class. |
| 3 | Scroll reveal | Elements with class `reveal` start transparent (CSS). An **IntersectionObserver** watches them; when one enters the screen, JS adds `.visible` → CSS animates it in. |
| 4 | Form checking | On Submit, JS checks each `[required]` field; empty/bad fields get `.invalid` (red border) and their `.error-msg` is shown. Only when all pass, the browser opens the visitor's email app with the message pre-written (a `mailto:` link). |
| 5 | Extras | Footer year fills itself with `new Date().getFullYear()`; the ↑ button appears after 400px of scrolling and smooth-scrolls up. |

**Why mailto and not a "real" submit?** A static site has no server, so the
form cannot *send* anything by itself. `mailto:` hands the message to the
visitor's own email app — works today, costs nothing. The upgrade path:
when you learn backend (Node.js, PHP, or a service like Formspree), you
replace that one block in PART 4 with a real send request. Nothing else
changes.

## 6. Asset flow

```
Google Drive (IZYWORLD folder)            this repository
01_BRAND-IDENTITY/Logo/                        assets/
  IZY_LOGO_MASTER_v1.0.png   ── copied in ──▶   izy-logo.png
  Color Palette/izyrootcolor  ── mirrored ──▶   css/variables.css
                                              assets/favicon-32.png  (from logo)
                                              assets/apple-touch-icon.png
```

The **single source of truth** for the brand stays in the corporate asset
library. This repo consumes it. If the master logo changes (e.g. v2.0),
replace `assets/izy-logo.png` and regenerate the favicons — nothing else
in the code needs to change because every page references the same file.

## 7. Growth path (planned evolution)

| Stage | Feature | How (architecture) |
|-------|---------|--------------------|
| v1 ✅ | Live static site | GitHub Pages |
| v1.1 | Real contact details, socials | Replace `UPDATE ME` placeholders |
| v1.2 | Portfolio section | New `portfolio.html` + reuse the card grid |
| v2 | Working contact form | Add a backend or Formspree (one JS block) |
| v2.1 | Blog / news section | Still static pages, or a static-site generator |
| v3 | Client area / payments | Real app framework + database (new project, this repo stays as the corporate site) |

## 8. Golden rules when editing

1. **Never type color codes in main.css** — use the variables.
2. **One section at a time** — open the page in a browser, edit, save, refresh.
3. **Keep the comments** — they are documentation for the next developer (you).
4. **Commit small changes** with clear messages ("Add WhatsApp link to contact
   page") instead of one giant "update stuff" commit.
5. **If you break it** — `git checkout -- filename` restores the last good
   version. Git is your undo button. Nothing is ever truly lost.
