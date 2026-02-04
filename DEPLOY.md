# Kyro Zhao · Personal Site — Deploy Guide

## File Structure

```
Kyro619-star.github.io/
├── index.html
├── style.css
├── script.js
├── DEPLOY.md
└── assets/
    ├── photo.jpg      ← Your photo goes here
    └── berklee.svg    ← Berklee "B" icon (already included)
```

---

## 1. Where to Place Your Photo

- **Path:** `assets/photo.jpg`
- Place your personal photo in the `assets` folder and name it `photo.jpg`.
- If the file is missing, the site shows an elegant "KZ" placeholder circle.

---

## 2. Berklee Icon Location

- **Path:** `assets/berklee.svg`
- A clean "B" monogram SVG is already included.
- To use Berklee's official logo, replace this file with the official SVG.

---

## 3. GitHub Pages Setup

- **Branch:** `main`
- **Folder:** root (`/`)
- In your repo: **Settings → Pages → Source:** `Deploy from a branch`
- **Branch:** `main` | **Folder:** `/ (root)`

---

## 4. Commit & Push in Cursor

1. Open **Source Control** (left sidebar icon or `Cmd+Shift+G`).
2. Stage all changes (click **+** next to each file or **Stage All**).
3. Enter commit message: `Refactor: premium modular site, modal portfolio, dark theme`.
4. Click **✓ Commit**.
5. Click **Sync Changes** or **Push**.

Or in Terminal:

```bash
cd /Users/brian/Documents/GitHub/Kyro619-star.github.io
git add .
git commit -m "Refactor: premium modular site, modal portfolio, dark theme"
git push origin main
```

---

## 5. View the Live Site

1. Wait 1–2 minutes for GitHub Pages to redeploy.
2. Hard refresh your browser: **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R** (Windows).
3. Visit: **https://kyro619-star.github.io**
