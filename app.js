/* Prashant & Bhumi — engagement invitation. All content comes from config.js. */
{
const C = window.INVITE;
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
const HI_DIGITS = "०१२३४५६७८९";
const hiNum = n => String(n).replace(/\d/g, d => HI_DIGITS[d]);

/* ---------- links ---------- */
const onRealHost = /^https?:$/.test(location.protocol) && !/claude|anthropic/.test(location.hostname);
const SHARE_URL = onRealHost ? location.origin + location.pathname : C.siteUrl;
const V = C.venue;
const DEST = `${V.en}, ${V.address}`;
const DIR_URL = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(DEST) +
  (V.placeId ? "&destination_place_id=" + encodeURIComponent(V.placeId) : "") + "&travelmode=driving";
const MAP_EMBED = "https://www.google.com/maps?q=" + encodeURIComponent(DEST) + "&output=embed";
const shareText = () => C.share.message.replace("{url}", SHARE_URL);
const WA_URL = () => "https://wa.me/?text=" + encodeURIComponent(shareText());
const START = new Date(C.startISO), END = new Date(C.endISO);
const utc = d => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
const morning = C.events[0] && C.events.length > 1 ? `${C.events[0].en} at ${C.events[0].time}. ` : "";
const EVT_TITLE = `${C.groom.en} & ${C.bride.en} – ${C.occasion.en}`;
const EVT_DESC = `${morning}${C.occasion.en} at ${C.events[C.events.length - 1]?.time || ""}. Invitation: ${SHARE_URL}`;
const GCAL = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent(EVT_TITLE) +
  "&dates=" + utc(START) + "/" + utc(END) + "&details=" + encodeURIComponent(EVT_DESC) + "&location=" + encodeURIComponent(DEST) + "&ctz=Asia/Kolkata";
const icsEsc = s => s.replace(/([,;\\])/g, "\\$1");
const ICS = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//PrashantBhumi//Invite//EN", "CALSCALE:GREGORIAN", "BEGIN:VEVENT",
  "UID:prashant-bhumi-engagement-20261206@invite", "DTSTAMP:" + utc(new Date()), "DTSTART:" + utc(START), "DTEND:" + utc(END),
  "SUMMARY:" + icsEsc(EVT_TITLE), "LOCATION:" + icsEsc(DEST), "DESCRIPTION:" + icsEsc(EVT_DESC),
  "BEGIN:VALARM", "TRIGGER:-P1D", "ACTION:DISPLAY", "DESCRIPTION:" + icsEsc(EVT_TITLE), "END:VALARM",
  "END:VEVENT", "END:VCALENDAR"].join("\r\n");
const ICS_HREF = "data:text/calendar;charset=utf-8," + encodeURIComponent(ICS);

/* ---------- icons ---------- */
const I = {
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>',
  cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  again: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4z"/><path d="M8 2v16M16 6v16"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>'
};
const ICON = {
  kalash: '<svg viewBox="0 0 40 40"><path d="M14 13c-3-4-8-4-10-2 4 0 7 2 10 4zM26 13c3-4 8-4 10-2-4 0-7 2-10 4zM18 12c-2-5-1-9 2-10 3 1 4 5 2 10z" fill="#4f8a4a"/><circle cx="20" cy="10" r="4.5" fill="#9a6a35"/><path d="M12 15h16l-2 3c6 3 8 8 6 12-2 5-8 7-12 7s-10-2-12-7c-2-4 0-9 6-12z" fill="url(#gGold)"/><path d="M10 25h20" stroke="#6b1530" stroke-width="1.5"/><path d="M18 22l2 5 2-5" fill="none" stroke="#a8304f" stroke-width="1.5"/></svg>',
  rings: '<svg viewBox="0 0 40 40" fill="none"><circle cx="15" cy="23" r="9" stroke="url(#gGold)" stroke-width="3"/><circle cx="25" cy="23" r="9" stroke="url(#gGold)" stroke-width="3"/><path d="M22 10l3-4 3 4-3 3z" fill="#f1c9cf" stroke="#c9a24a"/></svg>',
  diya: '<svg viewBox="0 0 60 60"><use href="#diya"/></svg>',
  lotus: '<svg viewBox="0 0 120 60"><use href="#lotus"/></svg>'
};

/* ---------- illustrations ---------- */
const petalsRing = Array.from({ length: 24 }, (_, i) => `<ellipse cx="100" cy="17" rx="3" ry="8" transform="rotate(${i * 15} 100 105)" fill="#c9a24a" opacity=".6"/>`).join("");
const GANESHA = `<svg class="ganesha" viewBox="0 0 200 210" role="img" aria-label="Lord Ganesha">
  <defs><radialGradient id="gaGlow"><stop offset="0" stop-color="#ffe7a8" stop-opacity=".9"/><stop offset="1" stop-color="#ffe7a8" stop-opacity="0"/></radialGradient></defs>
  <circle cx="100" cy="105" r="96" fill="url(#gaGlow)"/>
  <g class="halo"><circle cx="100" cy="105" r="90" fill="none" stroke="url(#gGold)" stroke-width="1"/><circle cx="100" cy="105" r="80" fill="none" stroke="#c9a24a" stroke-width=".8" stroke-dasharray="2 5"/>${petalsRing}</g>
  <path d="M68 84c-30-12-52 8-48 36s26 42 46 32" fill="#fbe7c2" stroke="url(#gGold)" stroke-width="2.5"/>
  <path d="M132 84c30-12 52 8 48 36s-26 42-46 32" fill="#fbe7c2" stroke="url(#gGold)" stroke-width="2.5"/>
  <path d="M58 96c-14-3-24 8-22 22s12 20 24 18M142 96c14-3 24 8 22 22s-12 20-24 18" fill="none" stroke="#e7b7a2" stroke-width="2"/>
  <path d="M100 58c26 0 40 18 40 44 0 20-10 34-22 40H82c-12-6-22-20-22-40 0-26 14-44 40-44z" fill="#fdf0d2" stroke="url(#gGold)" stroke-width="2.5"/>
  <path d="M68 68Q70 40 100 16Q130 40 132 68Q100 56 68 68z" fill="url(#gGold)"/>
  <path d="M74 63Q100 53 126 63" stroke="#6b1530" stroke-width="2.5" fill="none"/>
  <path d="M84 50Q100 44 116 50" stroke="#8a6a25" stroke-width="1.2" fill="none"/>
  <circle cx="100" cy="38" r="5" fill="#a8304f" stroke="#f3dfa2" stroke-width="1.5"/><circle cx="100" cy="14" r="3.5" fill="#f3dfa2"/>
  <circle cx="84" cy="56" r="2" fill="#a8304f"/><circle cx="116" cy="56" r="2" fill="#a8304f"/>
  <path d="M93 74Q100 68 107 74" stroke="#a8304f" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M100 73v11" stroke="#c0392b" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M80 94q8-7 15 0q-8 4-15 0zM105 94q7-7 15 0q-7 4-15 0z" fill="#3a1220"/>
  <path d="M100 100C97 128 99 148 110 160C120 170 134 168 136 156C137 148 130 144 124 148" fill="none" stroke="url(#gGold)" stroke-width="18" stroke-linecap="round"/>
  <path d="M100 100C97 128 99 148 110 160C120 170 134 168 136 156C137 148 130 144 124 148" fill="none" stroke="#fdf0d2" stroke-width="13.5" stroke-linecap="round"/>
  <path d="M93 114h13M93 124h13M95 134h13M99 144h12M105 153h11" stroke="#dcbd85" stroke-width="1.4"/>
  <path d="M84 124q-8 10-6 20q5-8 10-10z" fill="#fffaf0" stroke="#c9a24a" stroke-width="1.2"/>
  <use href="#lotus" x="40" y="166" width="120" height="42"/>
</svg>`;

const COUPLE = `<svg class="couple" viewBox="0 0 220 250" role="img" aria-label="Bride and groom illustration">
  <path d="M32 250V114Q32 54 110 26Q188 54 188 114V250z" fill="#f6dfe2" opacity=".55"/>
  <path d="M20 250V110Q20 42 110 12Q200 42 200 110V250" fill="none" stroke="url(#gGold)" stroke-width="2.2"/>
  <path d="M32 250V114Q32 54 110 26Q188 54 188 114V250" fill="none" stroke="#c9a24a" stroke-width="1"/>
  <path d="M110 12v-8M106 4h8" stroke="#c9a24a" stroke-width="1.5"/>
  ${Array.from({ length: 9 }, (_, i) => `<circle cx="${50 + i * 15}" cy="${60 - Math.sin(i / 8 * Math.PI) * 14 + 6}" r="2" fill="#c9a24a"/>`).join("")}
  <path d="M66 112Q82 104 98 112L104 198Q82 204 60 198z" fill="#7a1a36" stroke="#c9a24a" stroke-width="1.2"/>
  <path d="M82 110v86" stroke="#e8d3a0" stroke-width="1.6" stroke-dasharray="1.5 7"/>
  <path d="M72 112Q80 150 70 198" stroke="#e1c27a" stroke-width="5" fill="none"/>
  <path d="M60 198q22 6 44 0" stroke="#e8d3a0" stroke-width="2" fill="none"/>
  <rect x="66" y="199" width="11" height="38" rx="3" fill="#f3e7cf" stroke="#c9a24a" stroke-width=".8"/><rect x="87" y="199" width="11" height="38" rx="3" fill="#f3e7cf" stroke="#c9a24a" stroke-width=".8"/>
  <path d="M63 238h17M84 238h17" stroke="#8a6a25" stroke-width="4" stroke-linecap="round"/>
  <path d="M97 120Q106 138 108 150" stroke="#7a1a36" stroke-width="9" stroke-linecap="round" fill="none"/>
  <rect x="78" y="100" width="8" height="10" fill="#e3bf98"/>
  <circle cx="82" cy="92" r="13" fill="#e9c9a5"/>
  <path d="M67 91Q64 70 82 68Q100 68 98 89Q91 79 82 81Q73 79 67 91z" fill="url(#gGold)"/>
  <path d="M70 80q12-6 26 0" stroke="#a8304f" stroke-width="1.6" fill="none"/>
  <path d="M93 72q9-12 4-24q-3 11-9 17z" fill="#f1c9cf" stroke="#c9a24a"/>
  <path d="M155 96Q160 140 178 236H150Q152 150 150 110z" fill="#f1c9cf" opacity=".95" stroke="#c9a24a" stroke-width=".8"/>
  <path d="M127 96Q126 76 141 74Q157 74 157 96L152 108Q141 102 132 108z" fill="#f1c9cf" stroke="#c9a24a"/>
  <rect x="136" y="104" width="7" height="9" fill="#e3bf98"/>
  <circle cx="140" cy="98" r="11.5" fill="#e9c9a5"/>
  <circle cx="140" cy="88" r="1.6" fill="#a8304f"/>
  <path d="M130 112Q140 108 150 112L148 146H132z" fill="#a8304f"/>
  <path d="M132 146H148Q172 196 175 237H105Q109 196 132 146z" fill="#a8304f" stroke="#c9a24a" stroke-width="1.2"/>
  <path d="M108 226Q140 233 174 226M112 210Q140 216 170 210" stroke="#e8d3a0" stroke-width="2.4" fill="none"/>
  ${[120, 132, 144, 156].map(x => `<circle cx="${x}" cy="194" r="1.8" fill="#e8d3a0"/>`).join("")}
  <path d="M133 120Q120 140 112 150" stroke="#a8304f" stroke-width="7" stroke-linecap="round" fill="none"/>
  <circle cx="110" cy="151" r="4.5" fill="#e3bf98"/>
  <path d="M100 238h20" stroke="#c9a24a" stroke-width="1"/>
</svg>`;

const VENUE = `<svg class="venue-art" viewBox="0 0 280 150" role="img" aria-label="Venue illustration">
  <path d="M110 70Q110 32 140 22Q170 32 170 70z" fill="#f4d6da" stroke="url(#gGold)" stroke-width="1.5"/><path d="M140 22v-12M136 12h8" stroke="#c9a24a" stroke-width="1.5"/>
  <path d="M46 72Q46 52 60 46Q74 52 74 72zM206 72Q206 52 220 46Q234 52 234 72z" fill="#f4d6da" stroke="url(#gGold)" stroke-width="1.2"/>
  <rect x="34" y="72" width="212" height="68" fill="#f8ead0" stroke="url(#gGold)" stroke-width="1.5"/>
  <path d="M34 82h212" stroke="#c9a24a" stroke-width=".8"/>
  ${[64, 102, 178, 216].map(x => `<path d="M${x - 11} 140V108Q${x} 92 ${x + 11} 108V140" fill="#7a1a36" opacity=".88" stroke="#c9a24a"/>`).join("")}
  <path d="M124 140V104Q140 82 156 104V140" fill="#5a1027" stroke="#c9a24a" stroke-width="1.4"/>
  <path d="M10 140h260M24 146h232" stroke="url(#gGold)" stroke-width="1.6"/>
  <path d="M34 84Q90 100 140 86Q190 100 246 84" fill="none" stroke="#c9a24a" stroke-width=".6"/>
  ${Array.from({ length: 13 }, (_, i) => { const x = 40 + i * 17; return `<circle cx="${x}" cy="${88 + Math.sin(i / 12 * Math.PI * 2) * 3}" r="2" fill="#ffcf6b"/>`; }).join("")}
</svg>`;

/* ---------- pages ---------- */
const lines = arr => arr.map(x => `<li>${esc(x)}</li>`).join("");
const hiDate = `${C.date.weekdayHi}, ${hiNum(+C.date.day)} ${C.date.monthHi} ${hiNum(C.date.year)}`;
const invHTML = C.invitationHi.map(l => {
  const s = esc(l).replace("{groom}", `<span class="nm">${esc(C.groom.hi)}</span>`).replace("{bride}", `<span class="nm">${esc(C.bride.hi)}</span>`)
    .replace("{date}", esc(hiDate)).replace("{venue}", esc(V.hi));
  return s;
}).join("<br>");
const hasPhotos = C.photos.length > 0, hasContacts = C.contacts.length > 0;

const PAGES = [
  `<div class="mid">${GANESHA}
     <p class="mantra-title rv" style="--d:1">॥ ॐ श्री गणेशाय नमः ॥</p>
     <svg class="divider rv" style="--d:2"><use href="#divider"/></svg>
     <p class="shloka rv" style="--d:3">वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br>निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥</p>
     <div class="diyas rv" style="--d:4"><svg><use href="#diya"/></svg><svg><use href="#diya"/></svg><svg><use href="#diya"/></svg></div></div>`,

  `<div class="mid">${C.couplePhoto ? `<img class="couple-photo rv" src="${esc(C.couplePhoto)}" alt="${esc(C.groom.en)} and ${esc(C.bride.en)}">` : COUPLE}
     <h2 class="names-hi ink-reveal" style="--d:1">${esc(C.groom.hi)} <span>संग</span> ${esc(C.bride.hi)}</h2>
     <p class="names-en gold-text ink-reveal" style="--d:3">${esc(C.groom.en)} <span>&amp;</span> ${esc(C.bride.en)}</p>
     <p class="tagline rv" style="--d:5">Two hearts, one promise, a lifetime of togetherness.</p>
     <svg class="bloom" viewBox="0 0 120 60"><use href="#lotus"/></svg></div>`,

  `<div class="mid">
     <h2 class="eyebrow rv">॥ शुभ सगाई ॥</h2>
     <svg class="divider rv" style="--d:1"><use href="#divider"/></svg>
     <p class="inv-text rv" style="--d:2">${invHTML}</p>
     ${C.hosts.length ? `<p class="fam-h rv" style="--d:3">निवेदक</p><ul class="fam rv" style="--d:4">${lines(C.hosts)}</ul>` : ""}
     ${C.blessings.length ? `<p class="fam-h rv" style="--d:5">आशीर्वाद</p><ul class="fam rv" style="--d:6">${lines(C.blessings)}</ul>` : ""}
     ${hasPhotos ? `<button class="btn ghost rv" style="--d:7;margin-top:14px" data-act="card">${I.eye} View original card</button>` : ""}</div>`,

  `<div class="mid">
     <p class="eyebrow rv" style="font-size:22px">Save the Date</p>
     <div class="date-big"><span class="d rv" style="--d:1">${esc(C.date.day)}</span><span class="m rv" style="--d:2">${esc(C.date.month)}</span><span class="y rv" style="--d:3">${esc(C.date.year)}</span></div>
     <p class="weekday rv" style="--d:4">${esc(C.date.weekday)} | <span class="hi">${esc(C.date.weekdayHi)}</span></p>
     <div id="countWrap" class="rv" style="--d:5;width:100%"></div>
     <div class="row rv" style="--d:6"><button class="btn" data-act="cal">${I.cal} Add to Calendar</button></div></div>`,

  `<div class="mid">
     <h2 class="eyebrow rv">मांगलिक कार्यक्रम</h2>
     <svg class="divider rv" style="--d:1"><use href="#divider"/></svg>
     <ol class="timeline">${C.events.map((e, i) => `<li class="rv" style="--d:${i * 2 + 2}"><span class="t-ic">${ICON[e.icon] || ICON.lotus}</span>
       <span><span class="t-time">${esc(e.time)}</span><br>${e.hi ? `<span class="t-hi">${esc(e.hi)}</span><br>` : ""}<span class="t-en">${esc(e.en)}</span></span></li>`).join("")}</ol>
     <p class="rv" style="--d:7;margin:10px 0 0;font-style:italic;color:var(--ink-2)">${esc(C.date.weekday)}, ${+C.date.day} ${esc(C.date.month)} ${esc(C.date.year)}</p></div>`,

  `<div class="mid">
     <h2 class="eyebrow rv">समारोह स्थल</h2>
     ${VENUE}
     <p class="venue-name rv" style="--d:1">${esc(V.en)}</p>
     <p class="venue-hi rv" style="--d:2">${esc(V.hi)}</p>
     <p class="addr rv" style="--d:3">${esc(V.address)}</p>
     <p class="route-hi rv" style="--d:4">समारोह स्थल तक पहुँचने का मार्ग</p>
     <a class="btn big rv" style="--d:5;margin-top:8px" href="${esc(DIR_URL)}" target="_blank" rel="noopener">${I.pin} Get Directions</a>
     <div id="mapSlot" class="rv" style="--d:6;width:100%"><button class="btn ghost" style="margin-top:10px" data-act="map">${I.map} Show map preview</button></div></div>`,

  hasPhotos ? `<div class="mid">
     <h2 class="eyebrow rv">मूल निमंत्रण पत्र</h2>
     <p class="en-sub rv" style="--d:1">The original invitation · tap to enlarge</p>
     <div class="gallery rv" style="--d:2">${C.photos.map((p, i) => `<button class="g-item" data-photo="${i}" aria-label="Enlarge ${esc(p.caption || "photo " + (i + 1))}">
       <img src="${esc(p.src)}" alt="${esc(p.caption || "Invitation card")}" loading="lazy" style="filter:${esc(C.photoFilter)};${p.rotate ? `transform:rotate(${+p.rotate}deg)${p.rotate % 180 ? " scale(.75)" : ""}` : ""}"></button>`).join("")}</div>
     ${C.photos.length > 1 ? `<p class="g-cap rv" style="--d:3">Swipe for more ›</p>` : ""}</div>` : null,

  `<div class="mid">
     <div class="diyas rv"><svg><use href="#diya"/></svg><svg><use href="#diya"/></svg><svg><use href="#diya"/></svg></div>
     <p class="closing-en rv" style="--d:1;margin-top:10px">Every beautiful journey begins with a special moment.<br>Your presence and blessings will make ours unforgettable.</p>
     <svg class="divider rv" style="--d:2"><use href="#divider"/></svg>
     <p class="closing-hi rv" style="--d:3">आपकी उपस्थिति एवं आशीर्वाद हमारे लिए अमूल्य हैं।<br>आप सपरिवार सादर आमंत्रित हैं।</p>
     <p class="signoff rv" style="--d:4">With love,<b>${esc(C.groom.en)} &amp; ${esc(C.bride.en)}</b>and Family</p>
     <div class="grid-btn rv" style="--d:5">
       <a class="btn" href="${esc(DIR_URL)}" target="_blank" rel="noopener">${I.pin} Directions</a>
       <button class="btn" data-act="share">${I.share} Share</button>
       <button class="btn ghost" data-act="again" ${hasContacts ? "" : 'style="grid-column:1/-1"'}>${I.again} View Again</button>
       ${hasContacts ? `<button class="btn wine" data-act="contact">${I.phone} Contact</button>` : ""}
     </div></div>`
].filter(Boolean);

/* ---------- build book ---------- */
const book = $("#book"), N = PAGES.length;
const corners = ["tl", "tr", "bl", "br"].map(c => `<svg class="corner ${c}"><use href="#corner"/></svg>`).join("");
book.innerHTML = PAGES.map((html, i) => `<div class="page" data-i="${i}" aria-hidden="${i ? "true" : "false"}">
  <div class="face front"><div class="frame"></div>${corners}<div class="content">${html}</div><div class="pg-no hi">— ${hiNum(i + 1)} —</div></div>
  <button class="more-cue" tabindex="-1" aria-hidden="true">↓</button><div class="face back"></div></div>`).join("");
const pages = [...book.children];
const dots = $("#dots");
dots.innerHTML = pages.map((_, i) => `<button role="tab" aria-label="Page ${i + 1}" data-go="${i}"></button>`).join("");
let cur = 0;
const timers = new Map();
const zOf = (i, turned) => turned ? i + 1 : 2 * N - i;
function turnPage(i, fwd, delay) {
  const p = pages[i];
  clearTimeout(timers.get(i));
  p.classList.remove("gone");
  p.style.zIndex = zOf(i, false) + (fwd ? 0 : N);
  const run = () => {
    p.classList.add("turning");
    p.classList.toggle("turned", fwd);
    timers.set(i, setTimeout(() => { p.classList.remove("turning"); if (fwd) { p.classList.add("gone"); p.style.zIndex = zOf(i, true); } else p.style.zIndex = zOf(i, false); }, RM ? 220 : 1050));
  };
  void p.offsetWidth;
  delay ? timers.set(i, setTimeout(run, delay)) : run();
}
function go(n, quiet) {
  n = Math.max(0, Math.min(N - 1, n));
  if (n === cur) return;
  const step = RM ? 0 : 140;
  if (n > cur) for (let i = cur, k = 0; i < n; i++, k++) turnPage(i, true, k * step);
  else for (let i = cur - 1, k = 0; i >= n; i--, k++) turnPage(i, false, k * step);
  cur = n;
  if (!quiet) Sound.page();
  update();
}
function update() {
  pages.forEach((p, i) => { p.classList.toggle("current", i === cur); p.setAttribute("aria-hidden", i === cur ? "false" : "true"); p.inert = i !== cur; });
  [...dots.children].forEach((d, i) => d.setAttribute("aria-selected", i === cur));
  $("#prev").disabled = cur === 0; $("#next").disabled = cur === N - 1;
  if (cur > 0) $("#swipeHint").style.opacity = 0;
  setTimeout(checkMore, 60);
}
function checkMore() {
  pages.forEach(p => { const c = $(".content", p); p.classList.toggle("more", c.scrollHeight - c.clientHeight - c.scrollTop > 24); });
}
pages.forEach(p => { $(".content", p).addEventListener("scroll", checkMore, { passive: true }); $(".more-cue", p).onclick = () => { const c = $(".content", p); c.scrollBy({ top: c.clientHeight * .7, behavior: "smooth" }); }; });
addEventListener("resize", checkMore);
pages.forEach((p, i) => p.style.zIndex = zOf(i, false));
$("#prev").onclick = () => go(cur - 1);
$("#next").onclick = () => go(cur + 1);
dots.onclick = e => { const b = e.target.closest("[data-go]"); if (b) go(+b.dataset.go); };

/* swipe */
let sx = 0, sy = 0, st = 0;
book.addEventListener("touchstart", e => { const t = e.touches[0]; sx = t.clientX; sy = t.clientY; st = Date.now(); }, { passive: true });
book.addEventListener("touchend", e => {
  const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
  if (e.target.closest(".gallery")) return;
  if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3 && Date.now() - st < 900) go(cur + (dx < 0 ? 1 : -1));
}, { passive: true });
/* desktop drag */
let mx = null;
book.addEventListener("mousedown", e => { if (!e.target.closest("button,a,.gallery")) mx = e.clientX; });
addEventListener("mouseup", e => { if (mx !== null && Math.abs(e.clientX - mx) > 60) go(cur + (e.clientX < mx ? 1 : -1)); mx = null; });

/* ---------- countdown ---------- */
const pad = n => String(n).padStart(2, "0");
function tick() {
  const w = $("#countWrap"); if (!w) return;
  const ms = START - Date.now();
  if (ms <= 0) {
    if (!w.dataset.done) { w.dataset.done = 1; w.innerHTML = `<p class="celebrate">${Date.now() < END ? "The celebration has begun!" : "Thank you for celebrating with us"}</p><p class="hi" style="margin:0">शुभ मंगल सावधान — आपके आशीर्वाद के लिए हृदय से आभार।</p>`; }
    return;
  }
  const d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24, m = Math.floor(ms / 6e4) % 60, s = Math.floor(ms / 1e3) % 60;
  if (!w.firstElementChild || !w.querySelector(".count")) w.innerHTML = `<div class="count" role="timer" aria-label="Countdown to the ceremony"><div><b data-k="d"></b><small>Days</small></div><div><b data-k="h"></b><small>Hours</small></div><div><b data-k="m"></b><small>Minutes</small></div><div><b data-k="s"></b><small>Seconds</small></div></div>`;
  const set = (k, v) => { const el = w.querySelector(`[data-k=${k}]`); if (el.textContent !== v) el.textContent = v; };
  set("d", String(d)); set("h", pad(h)); set("m", pad(m)); set("s", pad(s));
}
tick(); setInterval(tick, 1000);

/* ---------- sheet / toast ---------- */
const sheet = $("#sheet");
function openSheet(title, html) { $("#sheetTitle").textContent = title; $("#sheetBody").innerHTML = html; sheet.hidden = false; $("[data-close]", sheet).focus(); }
const closeSheet = () => { sheet.hidden = true; };
sheet.addEventListener("click", e => { if (e.target === sheet || e.target.closest("[data-close]")) closeSheet(); });
let toastT;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2600); }
async function copy(text) {
  try { await navigator.clipboard.writeText(text); return true; } catch (e) {
    const ta = document.createElement("textarea"); ta.value = text; ta.setAttribute("readonly", ""); ta.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(ta); ta.select(); let ok = false; try { ok = document.execCommand("copy"); } catch (_) { } ta.remove(); return ok;
  }
}

function shareSheet() {
  openSheet("Share Invitation", `
    ${navigator.share ? `<button class="btn" data-sh="native">${I.share} Share via…</button>` : ""}
    <a class="btn wine" href="${esc(WA_URL())}" target="_blank" rel="noopener">${I.wa} Share on WhatsApp</a>
    <button class="btn ghost" data-sh="copy">${I.copy} Copy Invitation Link</button>
    <p class="note">${esc(SHARE_URL)}</p>`);
}
$("#sheetBody").addEventListener("click", async e => {
  const b = e.target.closest("[data-sh]"); if (!b) return;
  if (b.dataset.sh === "native") { try { await navigator.share({ title: C.share.title, text: shareText().replace(SHARE_URL, "").trim(), url: SHARE_URL }); closeSheet(); } catch (_) { } }
  if (b.dataset.sh === "copy") toast((await copy(SHARE_URL)) ? "Invitation link copied" : "Copy failed — press and hold the link above");
});
function calSheet() {
  openSheet("Add to Calendar", `
    <a class="btn" href="${esc(GCAL)}" target="_blank" rel="noopener">${I.cal} Google Calendar</a>
    <a class="btn ghost" href="${ICS_HREF}" download="Prashant-Bhumi-Engagement.ics">${I.cal} Apple / Outlook (.ics)</a>
    <p class="note">${esc(C.date.weekday)}, ${+C.date.day} ${esc(C.date.month)} ${esc(C.date.year)} · ${esc(C.events[C.events.length - 1]?.time || "")} IST · reminder one day before</p>`);
}
function contactSheet() {
  openSheet("Contact Family", C.contacts.map(c => {
    const digits = String(c.phone).replace(/\D/g, "");
    return `<div class="contact"><span class="who">${esc(c.name)}<small>${esc(c.phone)}</small></span>
      <a class="btn" href="tel:${esc(c.phone.replace(/\s/g, ""))}" aria-label="Call ${esc(c.name)}">${I.phone}</a>
      <a class="btn wine" href="https://wa.me/${digits}" target="_blank" rel="noopener" aria-label="WhatsApp ${esc(c.name)}">${I.wa}</a></div>`;
  }).join(""));
}

/* ---------- actions ---------- */
book.addEventListener("click", e => {
  const a = e.target.closest("[data-act]"), ph = e.target.closest("[data-photo]");
  if (ph) return openLB(+ph.dataset.photo);
  if (!a) return;
  const act = a.dataset.act;
  if (act === "share") shareSheet();
  if (act === "cal") calSheet();
  if (act === "contact") contactSheet();
  if (act === "card") openLB(0);
  if (act === "again") { go(0); FX.burst(16); }
  if (act === "map") { $("#mapSlot").innerHTML = `<iframe class="map-frame" src="${esc(MAP_EMBED)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map of ${esc(V.en)}"></iframe>`; }
});

/* ---------- lightbox with pinch / pan / double-tap ---------- */
const lb = $("#lightbox"), lbImg = $("#lbImg");
let li = 0, z = { s: 1, x: 0, y: 0 }, rot = 0;
const ptrs = new Map(); let pinch0 = null, pan0 = null, lastTap = 0, swipe0 = null;
const applyZ = () => { lbImg.style.transform = `translate(${z.x}px,${z.y}px) scale(${z.s}) rotate(${rot}deg)`; };
function showLB(i) {
  li = (i + C.photos.length) % C.photos.length; const p = C.photos[li];
  rot = +p.rotate || 0; z = { s: 1, x: 0, y: 0 };
  lbImg.src = p.src; lbImg.alt = p.caption || "Invitation card"; lbImg.style.filter = C.photoFilter;
  lbImg.style.maxWidth = rot % 180 ? "84vh" : ""; lbImg.style.maxHeight = rot % 180 ? "94vw" : "";
  applyZ();
  lb.querySelectorAll(".lb-nav").forEach(b => b.hidden = C.photos.length < 2);
}
function openLB(i) { if (!hasPhotos) return; showLB(i); lb.hidden = false; $(".lb-close", lb).focus(); }
const closeLB = () => { lb.hidden = true; };
$(".lb-close", lb).onclick = closeLB;
$(".lb-prev", lb).onclick = () => showLB(li - 1);
$(".lb-next", lb).onclick = () => showLB(li + 1);
const stage = $(".lb-stage", lb);
stage.addEventListener("pointerdown", e => {
  stage.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch0 = { d: Math.hypot(a.x - b.x, a.y - b.y), s: z.s }; }
  else { pan0 = { x: e.clientX - z.x, y: e.clientY - z.y }; swipe0 = { x: e.clientX, t: Date.now() };
    const now = Date.now(); if (now - lastTap < 300) { z = z.s > 1 ? { s: 1, x: 0, y: 0 } : { s: 2.4, x: 0, y: 0 }; applyZ(); swipe0 = null; } lastTap = now; }
});
stage.addEventListener("pointermove", e => {
  if (!ptrs.has(e.pointerId)) return; ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (ptrs.size === 2 && pinch0) { const [a, b] = [...ptrs.values()]; z.s = Math.min(5, Math.max(1, pinch0.s * Math.hypot(a.x - b.x, a.y - b.y) / pinch0.d)); if (z.s === 1) { z.x = z.y = 0; } applyZ(); }
  else if (ptrs.size === 1 && z.s > 1 && pan0) { z.x = e.clientX - pan0.x; z.y = e.clientY - pan0.y; applyZ(); }
});
const endPtr = e => {
  ptrs.delete(e.pointerId); if (ptrs.size < 2) pinch0 = null;
  if (ptrs.size === 0 && swipe0 && z.s === 1) { const dx = e.clientX - swipe0.x; if (Math.abs(dx) > 60 && Date.now() - swipe0.t < 600 && C.photos.length > 1) showLB(li + (dx < 0 ? 1 : -1)); }
  if (ptrs.size === 0) swipe0 = null;
};
stage.addEventListener("pointerup", endPtr); stage.addEventListener("pointercancel", endPtr);
stage.addEventListener("wheel", e => { e.preventDefault(); z.s = Math.min(5, Math.max(1, z.s * (e.deltaY < 0 ? 1.15 : 0.87))); if (z.s === 1) z.x = z.y = 0; applyZ(); }, { passive: false });
lb.addEventListener("click", e => { if (e.target === lb) closeLB(); });

/* ---------- keyboard ---------- */
addEventListener("keydown", e => {
  if (e.key === "Escape") { if (!lb.hidden) closeLB(); else if (!sheet.hidden) closeSheet(); return; }
  if (!lb.hidden) { if (e.key === "ArrowRight") showLB(li + 1); if (e.key === "ArrowLeft") showLB(li - 1); return; }
  if (!sheet.hidden || $("#story").hidden) return;
  if (["ArrowRight", "PageDown"].includes(e.key) || (e.key === " " && !e.target.closest("button,a"))) { e.preventDefault(); go(cur + 1); }
  if (["ArrowLeft", "PageUp"].includes(e.key)) { e.preventDefault(); go(cur - 1); }
  if (e.key === "Home") go(0); if (e.key === "End") go(N - 1);
});

/* ---------- sound: generated raga melody + paper effects (Web Audio) ---------- */
const Sound = {
  ctx: null, on: true, master: null, wet: null, el: null,
  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    const ctx = this.ctx = new AC();
    this.master = ctx.createGain(); this.master.gain.value = 0; this.master.connect(ctx.destination);
    this.master.gain.setTargetAtTime(Math.min(1, C.music.volume ?? .5), ctx.currentTime, 1.5);
    const len = ctx.sampleRate * 2.8, ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6); }
    const conv = ctx.createConvolver(); conv.buffer = ir; this.wet = ctx.createGain(); this.wet.gain.value = .55; this.wet.connect(conv); conv.connect(this.master);
    this.noise = ctx.createBuffer(1, ctx.sampleRate * .6, ctx.sampleRate); const nd = this.noise.getChannelData(0); for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
  },
  out(node, dry = .7) { const g = this.ctx.createGain(); g.gain.value = dry; node.connect(g); g.connect(this.master); node.connect(this.wet); },
  start() {
    this.init(); if (!this.ctx) return; this.ctx.resume?.();
    $("#sound").hidden = false;
    if (C.music.src) { this.el = new Audio(C.music.src); this.el.loop = true; this.el.volume = Math.min(1, C.music.volume ?? .5); this.el.play().catch(() => { }); return; }
    this.drone(); this.flute();
  },
  drone() {
    const ctx = this.ctx, notes = [110, 146.83, 146.83, 73.42]; let k = 0, t = ctx.currentTime + .3;
    const sched = () => {
      while (t < ctx.currentTime + 1.5) {
        const o = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain();
        o.type = "sawtooth"; o.frequency.value = notes[k++ % 4]; f.type = "lowpass"; f.frequency.value = 900; f.Q.value = 2;
        g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.045, t + .03); g.gain.exponentialRampToValueAtTime(.0008, t + 4.2);
        o.connect(f); f.connect(g); this.out(g, .5); o.start(t); o.stop(t + 4.4); t += 1.25;
      }
    };
    sched(); this.droneT = setInterval(sched, 500);
  },
  flute() {
    const ctx = this.ctx, Sa = 293.66;
    const R = { N_: 15 / 16 * Sa, S: Sa, R: 9 / 8 * Sa, G: 5 / 4 * Sa, M: 45 / 32 * Sa, P: 3 / 2 * Sa, D: 5 / 3 * Sa, N: 15 / 8 * Sa, S2: 2 * Sa };
    const phrases = [["N_", 1.2, "R", .8, "G", 2.2, "R", .8, "S", 2.6], ["G", .9, "M", .9, "P", 2.4, "M", .7, "G", .9, "R", 2.4],
      ["P", 1, "D", .8, "N", .8, "S2", 2.8, "N", .8, "D", .8, "P", 2.4], ["G", .8, "M", .8, "D", 1, "N", 1, "D", .8, "P", 1.2, "M", .8, "G", 1, "R", .8, "S", 3]];
    const o = ctx.createOscillator(), o2 = ctx.createOscillator(), v = ctx.createGain(), lfo = ctx.createOscillator(), lg = ctx.createGain(), lp = ctx.createBiquadFilter();
    o.type = "sine"; o2.type = "triangle"; const g2 = ctx.createGain(); g2.gain.value = .18;
    lfo.frequency.value = 5.2; lg.gain.value = 3.2; lfo.connect(lg); lg.connect(o.frequency); lg.connect(o2.frequency);
    lp.type = "lowpass"; lp.frequency.value = 2600; v.gain.value = 0;
    o.connect(v); o2.connect(g2); g2.connect(v); v.connect(lp); this.out(lp, .55);
    o.frequency.value = o2.frequency.value = Sa; [o, o2, lfo].forEach(x => x.start());
    let t = ctx.currentTime + 4, pi = 0;
    const sched = () => {
      while (t < ctx.currentTime + 2) {
        const ph = phrases[pi++ % phrases.length];
        for (let i = 0; i < ph.length; i += 2) {
          const f = R[ph[i]], d = ph[i + 1];
          o.frequency.setTargetAtTime(f, t, .045); o2.frequency.setTargetAtTime(f, t, .045);
          v.gain.setTargetAtTime(.075, t, .09); v.gain.setTargetAtTime(.05, t + d * .7, .2);
          t += d;
        }
        v.gain.setTargetAtTime(0, t - .2, .35); t += 2.6 + Math.random() * 2;
      }
    };
    this.fluteT = setInterval(sched, 400); sched();
  },
  sfx(type) {
    if (!this.ctx || !this.on) return; const ctx = this.ctx, t = ctx.currentTime;
    const n = ctx.createBufferSource(); n.buffer = this.noise; const f = ctx.createBiquadFilter(), g = ctx.createGain();
    if (type === "page") {
      f.type = "bandpass"; f.Q.value = .8; f.frequency.setValueAtTime(700, t); f.frequency.exponentialRampToValueAtTime(3200, t + .35);
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.16, t + .08); g.gain.exponentialRampToValueAtTime(.001, t + .45);
    } else {
      f.type = "highpass"; f.frequency.value = 1800; g.gain.setValueAtTime(.28, t); g.gain.exponentialRampToValueAtTime(.001, t + .09);
      const o = ctx.createOscillator(), og = ctx.createGain(); o.frequency.setValueAtTime(160, t); o.frequency.exponentialRampToValueAtTime(60, t + .15);
      og.gain.setValueAtTime(.25, t); og.gain.exponentialRampToValueAtTime(.001, t + .18); o.connect(og); og.connect(this.master); o.start(t); o.stop(t + .2);
    }
    n.connect(f); f.connect(g); g.connect(this.master); n.start(t); n.stop(t + .5);
  },
  chime(base = 880) {
    if (!this.ctx || !this.on) return; const ctx = this.ctx, t0 = ctx.currentTime;
    [1, 1.25, 1.5, 2, 2.5].forEach((m, i) => {
      const t = t0 + i * .09, o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "sine"; o.frequency.value = base * m; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.05, t + .01); g.gain.exponentialRampToValueAtTime(.0005, t + 2.2);
      o.connect(g); this.out(g, .5); o.start(t); o.stop(t + 2.3);
    });
  },
  whoosh() {
    if (!this.ctx || !this.on) return; const ctx = this.ctx, t = ctx.currentTime, n = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    n.buffer = this.noise; n.loop = true; f.type = "bandpass"; f.Q.value = 1.2; f.frequency.setValueAtTime(300, t); f.frequency.exponentialRampToValueAtTime(1800, t + 1.4);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.12, t + .7); g.gain.exponentialRampToValueAtTime(.001, t + 1.8);
    n.connect(f); f.connect(g); this.out(g, .6); n.start(t); n.stop(t + 1.9);
  },
  page() { this.sfx("page"); }, seal() { this.sfx("seal"); },
  toggle() {
    this.on = !this.on; const b = $("#sound"); b.setAttribute("aria-pressed", this.on); b.setAttribute("aria-label", this.on ? "Music on" : "Music off");
    if (this.el) this.on ? this.el.play().catch(() => { }) : this.el.pause();
    if (this.ctx) this.on ? this.ctx.resume() : this.ctx.suspend();
  }
};
$("#sound").onclick = () => Sound.toggle();
document.addEventListener("visibilitychange", () => { if (!Sound.ctx && !Sound.el) return; if (document.hidden) { Sound.ctx?.suspend(); Sound.el?.pause(); } else if (Sound.on) { Sound.ctx?.resume(); Sound.el?.play().catch(() => { }); } });

/* ---------- petals & golden particles ---------- */
const FX = (() => {
  const cv = $("#fx"), cx = cv.getContext("2d"); let W, H, dpr, parts = [], run = !RM, petalRate = 0.025, sparkRate = 0.2;
  const size = () => { dpr = Math.min(2, devicePixelRatio || 1); W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0); };
  size(); addEventListener("resize", size);
  const cols = ["#c2185b", "#d81b60", "#e57399", "#f1a7b8", "#a31545"];
  const petal = (y) => ({ k: "p", x: Math.random() * W, y: y ?? -20, r: 6 + Math.random() * 7, vy: .6 + Math.random() * 1.1, vx: -.3 + Math.random() * .6, a: Math.random() * 6.28, va: -.03 + Math.random() * .06, sw: Math.random() * 6.28, c: cols[Math.random() * 5 | 0], o: .75 + Math.random() * .25 });
  const ember = (x, y, sp) => { const a = Math.random() * 6.283, v = sp * (.4 + Math.random()); return { k: "e", x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 1.5, life: 0, max: 50 + Math.random() * 60, r: 1 + Math.random() * 2.2 }; };
  const spark = () => ({ k: "s", x: Math.random() * W, y: H * (.2 + Math.random() * .85), r: .8 + Math.random() * 1.8, vy: -.15 - Math.random() * .35, life: 0, max: 160 + Math.random() * 200 });
  function frame() {
    if (!run) return;
    cx.clearRect(0, 0, W, H);
    if (Math.random() < petalRate) parts.push(petal());
    if (Math.random() < sparkRate) parts.push(spark());
    parts = parts.filter(p => {
      if (p.k === "p") {
        p.sw += .02; p.x += p.vx + Math.sin(p.sw) * .6; p.y += p.vy; p.a += p.va;
        cx.save(); cx.translate(p.x, p.y); cx.rotate(p.a); cx.scale(1, .55 + .45 * Math.abs(Math.sin(p.sw * 1.3))); cx.globalAlpha = p.o;
        cx.fillStyle = p.c; cx.beginPath(); cx.moveTo(0, -p.r); cx.bezierCurveTo(p.r, -p.r * .6, p.r * .8, p.r * .8, 0, p.r); cx.bezierCurveTo(-p.r * .8, p.r * .8, -p.r, -p.r * .6, 0, -p.r); cx.fill();
        cx.restore(); return p.y < H + 30;
      }
      if (p.k === "e") {
        p.life++; p.vx *= .965; p.vy = p.vy * .965 + .09; const ox = p.x, oy = p.y; p.x += p.vx; p.y += p.vy;
        const a = 1 - p.life / p.max; cx.globalAlpha = a; cx.strokeStyle = p.life < 12 ? "#fffbe6" : "#ffcf6b"; cx.lineWidth = p.r; cx.lineCap = "round";
        cx.shadowColor = "#ffb84a"; cx.shadowBlur = 10; cx.beginPath(); cx.moveTo(ox - p.vx * 2, oy - p.vy * 2); cx.lineTo(p.x, p.y); cx.stroke();
        cx.shadowBlur = 0; cx.globalAlpha = 1; return p.life < p.max;
      }
      p.life++; p.y += p.vy; const a = Math.sin(Math.PI * p.life / p.max);
      cx.globalAlpha = a * .9; cx.fillStyle = "#ffd97a"; cx.shadowColor = "#ffcf6b"; cx.shadowBlur = 8;
      cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.28); cx.fill(); cx.shadowBlur = 0; cx.globalAlpha = 1;
      return p.life < p.max;
    });
    requestAnimationFrame(frame);
  }
  if (run) { for (let i = 0; i < 6; i++) parts.push(petal(Math.random() * H)); requestAnimationFrame(frame); }
  document.addEventListener("visibilitychange", () => { if (RM) return; run = !document.hidden; if (run) requestAnimationFrame(frame); });
  return {
    sparks(x, y, n = 70, sp = 9) { if (RM) return; for (let i = 0; i < n; i++) parts.push(ember(x, y, sp)); if (!run) { run = true; requestAnimationFrame(frame); } },
    seam(n = 60) { if (RM) return; for (let i = 0; i < n; i++) { const e = ember(W / 2, Math.random() * H, 6); e.vx = (Math.random() < .5 ? -1 : 1) * (3 + Math.random() * 7); e.vy = -1 + Math.random() * 2; parts.push(e); } },
    burst(n = 45) { if (RM) return; for (let i = 0; i < n; i++) parts.push(petal(-20 - Math.random() * H * .6)); },
    mode(p, s) { petalRate = p; sparkRate = s; }
  };
})();

/* ---------- gentle parallax ---------- */
const far = $(".palace-far"), near = $(".palace-near");
if (!RM && matchMedia("(pointer:fine)").matches) addEventListener("pointermove", e => {
  const dx = e.clientX / innerWidth - .5, dy = e.clientY / innerHeight - .5;
  far.style.transform = `translate(${dx * -10}px,${dy * -4}px)`; near.style.transform = `translate(${dx * -22}px,${dy * -6}px)`;
});

/* ---------- opening sequence ---------- */
const env = $("#envelope"), intro = $("#intro"), story = $("#story"), skip = $("#skip");
env.classList.add("float"); $(".seal", env).classList.add("glow");
let opened = false; const seqT = [];
const flash = $("#flash"), doors = $("#doors");
const at = (ms, fn) => seqT.push(setTimeout(fn, ms));
function showStory() {
  seqT.forEach(clearTimeout); skip.hidden = true;
  flash.classList.remove("on"); doors.hidden = true;
  story.hidden = false; story.classList.add("enter"); requestAnimationFrame(() => story.classList.add("show"));
  intro.classList.add("zoom"); setTimeout(() => { intro.hidden = true; }, RM ? 50 : 900);
  document.body.classList.add("reading"); FX.mode(.012, .08); update(); setTimeout(checkMore, 1800);
}
env.addEventListener("click", () => {
  if (opened) return; opened = true;
  Sound.start(); Sound.seal(); Sound.chime(1046.5);
  env.classList.remove("float"); $(".seal", env).classList.remove("glow");
  if (RM) { env.classList.add("open"); return showStory(); }
  skip.hidden = false;
  const r = $(".seal", env).getBoundingClientRect();
  env.classList.add("burst"); intro.classList.add("shake", "opening");
  FX.sparks(r.left + r.width / 2, r.top + r.height / 2, 90, 10);
  at(350, () => { env.classList.add("open"); intro.classList.remove("shake"); });
  at(1100, () => { intro.classList.add("lit"); FX.sparks(innerWidth / 2, r.top - r.height, 40, 5); });
  at(1500, () => FX.burst(18));
  at(2500, () => { env.classList.add("away"); intro.classList.add("away"); Sound.whoosh(); });
  at(3150, () => flash.classList.add("on"));
  at(3700, () => {
    doors.hidden = false; intro.hidden = true;
    story.hidden = false; story.classList.add("show"); document.body.classList.add("reading"); FX.mode(.012, .08);
    flash.classList.remove("on");
  });
  at(4300, () => { doors.classList.add("opening"); Sound.chime(784); Sound.whoosh(); FX.seam(80); });
  at(4900, () => { story.classList.add("enter"); update(); FX.burst(34); });
  at(6400, () => { doors.hidden = true; skip.hidden = true; checkMore(); });
});
skip.onclick = showStory;
}
