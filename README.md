# Prashant & Bhumi — Engagement Invitation

A static website (no server, no database, no login). Open `index.html` through any web host.

## 1. Edit the details
Open **config.js** in Notepad/VS Code. Everything is there, already filled in from the printed card:
- `invitationHi` — the invitation text line by line (`# ` = big name line, `~ ` = small line, `! ` = heading).
- `families` — दर्शनाभिलाषी / विनीत lists.
- `events` — times and ceremony names (प्रीतिभोज, वाग्दान संस्कार).
- `sender` — name, address and phone numbers shown under "Contact Family".
- `balAagrah`, `visheshAagrah` — the children's and special requests (schedule page).
- `photos` — the card photos in `/photos`; `pdf` — the printable card in `/assets`.
- `couplePhoto` — optional, replaces the bride & groom illustration.
- `venue.placeId` — paste the Google place id if you confirm the venue on Maps.
- `music.src` — optional MP3 in `/assets`; empty = built-in soft raga melody.

## 2. Deploy (free, ~2 minutes) — Netlify
1. Go to https://app.netlify.com/drop and sign in.
2. Drag this whole folder onto the page.
3. Site settings → Change site name → `prashant-bhumi-engagement` (gives https://dhananjayraghav.github.io/prashant-bhumi-engagement).
   If you pick a different name, replace that address in `config.js` (`siteUrl`) and the 4 `<meta>` lines at the top of `index.html`, then drag the folder again.

Vercel/GitHub Pages also work — just upload the folder as-is.

## 3. Check the WhatsApp preview
Paste the link into https://developers.facebook.com/tools/debug/ and press "Scrape Again". Then send the link to yourself on WhatsApp.
The preview image is `assets/og-image.jpg` (1200×630) — replace it with any image of the same size if you like.

## Files
index.html · style.css · app.js (logic) · config.js (content) · fonts/ (self-hosted) · assets/ · photos/
