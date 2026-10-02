# Izyworld Global Limited — Website

## What this is
A plain static corporate website: HTML + CSS + JavaScript. No frameworks, no build tools, no backend, no database. Five pages: `index.html`, `about.html`, `services.html`, `contact.html`, `portfolio.html`.

## How it runs in Base44
Served by `nginx:alpine` via `docker-compose.base44.yml`. The repo root is bind-mounted read-only into the container at `/usr/share/nginx/html`, so edits to any HTML/CSS/JS file appear on the next page refresh (no rebuild needed). Call `reload_preview` after edits to force the preview iframe to refresh.

## Gotchas
- The repo root must be world-traversable (`chmod 755 .`) or nginx's worker process (uid 101) cannot read the mounted files and returns 403.
- No environment variables or secrets are required.
