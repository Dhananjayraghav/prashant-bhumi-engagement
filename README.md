# Prashant & Bhumi — Engagement Invitation

A static website (no server, no database, no login). Open `index.html` through any web host.

## 1. Fill in the details from the printed card
Open **config.js** in Notepad/VS Code. Everything is there:
- `hosts`, `blessings` — family names (निवेदक / आशीर्वाद). Empty = hidden.
- `contacts` — `{ name: "श्री ...", phone: "+91..." }`. Adds Call + WhatsApp buttons and the "Contact" button.
- `events` — times and exact Hindi ceremony names (the 11 AM name needs confirming).
- `photos` — put the 3 card photos in `/photos` (JPG, ~1600px long side, under 400 KB each) and list them. This turns on the Gallery page and the "View original card" button. Use `rotate: 90` etc. if a photo is sideways.
- `couplePhoto` — optional, replaces the bride & groom illustration.
- `venue.placeId` — paste the Google place id if confirmed (see comment in file).
- `music.src` — optional MP3 in `/assets`; empty = built-in soft raga melody.

## 2. Deploy (free, ~2 minutes) — Netlify
1. Go to https://app.netlify.com/drop and sign in.
2. Drag this whole folder onto the page.
3. Site settings → Change site name → `prashant-bhumi-engagement` (gives https://prashant-bhumi-engagement.netlify.app).
   If you pick a different name, replace that address in `config.js` (`siteUrl`) and the 4 `<meta>` lines at the top of `index.html`, then drag the folder again.

Vercel/GitHub Pages also work — just upload the folder as-is.

## 3. Check the WhatsApp preview
Paste the link into https://developers.facebook.com/tools/debug/ and press "Scrape Again". Then send the link to yourself on WhatsApp.
The preview image is `assets/og-image.jpg` (1200×630) — replace it with any image of the same size if you like.

## Files
index.html · style.css · app.js (logic) · config.js (content) · fonts/ (self-hosted) · assets/ · photos/
