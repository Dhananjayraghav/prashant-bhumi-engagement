/* ==========================================================================
   INVITATION CONFIG — edit everything here. No other file needs changing.
   Lines marked  ⚠ CONFIRM  must be checked against the printed card.
   Empty lists ( [] ) hide their section automatically, so guests never
   see a blank or placeholder.
   ========================================================================== */
window.INVITE = {
  /* Your public address after deploying (no trailing slash).
     Also update the same address in the 4 <meta> lines at the top of index.html. */
  siteUrl: "https://dhananjayraghav.github.io/prashant-bhumi-engagement",

  groom: { en: "Prashant", hi: "प्रशान्त" },
  bride: { en: "Bhumi", hi: "भूमि" },
  initials: ["P", "B"],

  occasion: { en: "Engagement Ceremony", hi: "सगाई समारोह" },

  /* Countdown target and calendar times (IST = +05:30) */
  startISO: "2026-12-06T16:00:00+05:30",
  endISO: "2026-12-06T21:00:00+05:30",
  date: { day: "06", month: "December", monthHi: "दिसम्बर", year: "2026", weekday: "Sunday", weekdayHi: "रविवार" },

  /* Ceremony schedule — names exactly as printed on the card.
     icon: "thali" | "kalash" | "rings" | "diya" | "lotus" */
  events: [
    { time: "11:00 AM", hiTime: "11:00 बजे दोपहर", en: "Feast", hi: "प्रीतिभोज", icon: "thali" },
    { time: "4:00 PM", hiTime: "4:00 बजे सायं", en: "Engagement Ceremony", hi: "वाग्दान संस्कार (सगाई समारोह)", icon: "rings" }
  ],
  scheduleShloka: ["विघ्न हरण मंगल करण श्री गणपति महाराज।", "प्रथम निमंत्रण आपको पूरण कीजो काज।।"],

  venue: {
    en: "Shilpa Marriage Home",
    hi: "शिल्पा मैरिज होम",
    hiAddress: "पहासू रोड, खुर्जा",
    address: "Pahasu Road, Khurja, Uttar Pradesh, India",
    /* Google Maps lists "Shilpa Garden", Pahasu Road, Khurja (place id ChIJuVAacXKpDDkRXhtILBt5ebc).
       If that IS the venue, paste the id below so directions land on the exact gate.
       Leave "" to route by name + address. */
    placeId: ""
  },

  /* Invitation text (Page 3), exactly as printed. Line prefixes:
     "# " = large name line,  "~ " = small line,  "! " = heading line */
  invitationHi: [
    "~ मान्यवर,",
    "परमपिता परमात्मा की असीम अनुकम्पा से",
    "! श्रीमती शकुन्तला देवी एवं श्री दौलत सिंह राघव",
    "अपने प्रिय सुपौत्र",
    "# चि० प्रशान्त",
    "~ सुपुत्र श्रीमती निशा राघव एवं श्री ठाकुर दास सिंह राघव",
    "~ निवासी : ग्राम पलरा, जिला बुलन्दशहर",
    "परिणय",
    "# आयु० भूमि",
    "~ (सुपुत्री श्रीमती कल्पना रावल एवं श्री धीरज सिंह रावल)",
    "~ निवासी : मौ० आमका, दादरी, जिला गौतम बुद्ध नगर",
    "के",
    "! सगाई समारोह",
    "की मांगलिक बेला पर आपको सादर आमन्त्रित करते हैं",
    "विधाता की तुलिका से रचित स्नेह मिलन के समारोह में",
    "कार्यक्रमानुसार पधार कर हमें अनुग्रहित करें।"
  ],

  /* Family lists from the card. Leave items: [] to hide a list. */
  families: [
    { label: "दर्शनाभिलाषी", items: ["मोहित राघव (इंजीनियर)", "डॉ. युग राघव, डॉ. धनन्जय राघव", "रोहन राघव एवं समस्त राघव परिवार"] },
    { label: "विनीत", items: ["हुक्म सिंह राघव", "कुँवरपाल सिंह राघव", "रवि राघव"] }
  ],

  /* "Contact Family" — the sender (प्रेषक) printed on the envelope. */
  sender: {
    name: "ठाकुर दास सिंह राघव",
    lines: ["R.G. Public School, Heerapur (BSR)", "निवासी : ग्राम पलरा, जिला बुलन्दशहर (उ०प्र०)"],
    phones: ["+91 96391 02655", "+91 83938 38333", "+91 84399 96664"]
  },

  /* The children's request and special request from the card (closing page). */
  balAagrah: {
    lines: ["समय भी गुजरा घड़ी भी गुजरी, आया समय मिलन का।", "बरसन लागे फूल नवयुगल पर, आया समय विहार का...", "हमाले चाचू की सगाई में जलूल-जलूल आना..."],
    by: "सार्थक, बिनी, कृशिव"
  },
  visheshAagrah: "कृपया इस कार्ड को ही व्यक्तिगत बुलावे की मान्यता प्रदान करें।",

  /* Printable card (PDF) offered on the gallery page. Leave "" to hide. */
  pdf: "assets/Prashant-Bhumi-Engagement-Invitation.pdf",

  /* Original card photos (put files in /photos). rotate: 0 | 90 | 180 | 270 */
  photos: [
    { src: "photos/card-1-envelope.jpg", caption: "लिफ़ाफ़ा · Envelope" },
    { src: "photos/card-2-cover.png", caption: "आवरण · Card cover", cutout: true },
    { src: "photos/card-3-invitation.jpg", caption: "निमंत्रण · Invitation" },
    { src: "photos/card-4-programme.jpg", caption: "मांगलिक कार्यक्रम · Programme" }
  ],
  invitationPhoto: 2,   // which photo "View original card" opens (0 = first)
  photoFilter: "none",   // photos are already straightened and brightened

  /* Optional couple photo for Page 2 (replaces the illustration), e.g. "photos/couple.jpg" */
  couplePhoto: "",

  /* Music: leave src "" to use the built-in soft raga melody (generated live, 0 KB).
     Or drop a royalty-free MP3 in /assets and set src: "assets/music.mp3" */
  music: { src: "", volume: 0.5 },

  share: {
    title: "Prashant & Bhumi | Engagement Invitation",
    message:
      "With immense joy and happiness, we invite you and your family to celebrate the engagement ceremony of Prashant & Bhumi.\n\n" +
      "Sunday, 6 December 2026\n\n" +
      "Your presence and blessings will make our celebration truly special.\n\n" +
      "Open our special invitation: {url}"
  }
};
