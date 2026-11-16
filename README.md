# Countdown Lock Screen Studio (Horizon & Chronos Editions)

> **Official Project for Handshake AI Skills Studio × Google November Challenge**  
> *"Your Deadline, Your Design: Create a Countdown Lock Screen with Google"*  
> **Contest Deadline:** November 23, 2026 at 11:59 PM PT  

![Countdown Lock Screen Studio Showcase](assets/cover_showcase.svg)

---

## 🌟 Overview

**Countdown Lock Screen Studio** is an interactive, browser-based design studio and wallpaper generator that reverse-engineers major deadlines into an actionable **Heads-Up Display (HUD)** for mobile and desktop lock screens.

The project features **two award-caliber editions** built into a single, unified codebase:
1. **Version 1 — Horizon Edition:** A cyberpunk/glassmorphic HUD designed for college-to-career sprints (Tech Job Offer, AI Hackathon Ship Day). Features glowing circular pacing rings and 4 dynamic cyber palettes.
2. **Version 2 — Chronos Edition:** A minimalist Swiss Editorial publication layout (International Typographic Style) designed for academic summits (Senior Capstone, Thesis Defense, Commencement). Features Roman numeral milestone indices, Swiss hairline progress rules, and dual paper styles (Dark Obsidian vs. Light Ivory).

---

## ✨ Features

- **Dual-Edition Switching:** Toggle instantly between Horizon and Chronos editions right in the navbar.
- **Calibrated Device Safe Zones:** Top 24% clear zone for native iOS & Android system clocks, dynamic islands, and notification widgets.
- **Dual Resolution Canvas Engine:**
  - **Phone (9:19.5):** 1179 × 2556 Retina resolution.
  - **Desktop (16:10):** 2880 × 1800 Retina resolution.
- **Live Real-Time Ticker:** Countdown digits update every single second.
- **Google / Apple Calendar Sync:** 1-click RFC 5545 `.ics` export that schedules milestone reminders directly to your calendar with notification alarms.
- **Pre-Rendered Wallpapers:** Direct SVG & PNG files ready to set as wallpapers immediately.

---

## 🚀 Quick Start / Local Preview

Zero external dependencies (pure HTML5, CSS3, and JavaScript Canvas API). Run immediately:

```bash
open index.html
```

Or start a local web server:
```bash
python3 -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

---

## 📂 Repository Contents

```text
countdown-lock-screen/
├── index.html                   # Unified Studio with dual-edition switcher
├── app.js                       # Master canvas renderer, countdown ticker & .ics engine
├── style.css                    # Unified styling supporting both Horizon & Chronos
├── SUBMISSION.md                # Official copy-paste submissions for both entries
├── README.md                    # Project documentation
├── assets/
│   ├── cover_showcase.svg       # Dual-edition showcase cover mockup (1600x900)
│   ├── cover_horizon.svg        # Version 1 (Horizon) presentation cover (1600x900)
│   └── cover_chronos.svg        # Version 2 (Chronos) presentation cover (1600x900)
└── wallpapers/
    ├── phone_career_sprint.svg          # Horizon Mobile Career Sprint (1179x2556)
    ├── phone_ai_hackathon.svg           # Horizon Mobile AI Hackathon (1179x2556)
    ├── phone_capstone_graduation.svg    # Horizon Mobile Capstone (1179x2556)
    ├── desktop_career_sprint.svg        # Horizon Desktop Career Sprint (2880x1800)
    ├── phone_editorial_obsidian.svg     # Chronos Mobile Dark Obsidian (1179x2556)
    ├── phone_editorial_ivory.svg        # Chronos Mobile Light Ivory (1179x2556)
    └── desktop_editorial_obsidian.svg   # Chronos Desktop Editorial (2880x1800)
```

---

## 🌐 60-Second Free Deployment to GitHub Pages

To obtain your live `Project link/URL` for your Handshake submission:

```bash
# 1. Add your remote repository
git remote add origin https://github.com/<your-username>/countdown-lock-screen.git

# 2. Push to GitHub
git branch -M main
git push -u origin main --tags
```
Then on GitHub:
1. Navigate to **Settings** > **Pages**.
2. Select branch `main` and root `/`, then click **Save**.
3. Your live link will be: `https://<your-username>.github.io/countdown-lock-screen/`
