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

  /* Ceremony schedule. icon: "kalash" | "rings" | "diya" | "lotus" */
  events: [
    // ⚠ CONFIRM: replace with the exact Hindi ceremony name printed on the card
    { time: "11:00 AM", en: "Morning Ceremony", hi: "प्रातःकालीन कार्यक्रम", icon: "kalash" },
    { time: "4:00 PM", en: "Engagement Ceremony", hi: "सगाई समारोह", icon: "rings" }
  ],

  venue: {
    en: "Shilpa Marriage Home",
    hi: "शिल्पा मैरिज होम",
    address: "Pahasu Road, Khurja, Uttar Pradesh, India",
    /* ⚠ CONFIRM: Google Maps lists "Shilpa Garden", Pahasu Road, Khurja
       (place id ChIJuVAacXKpDDkRXhtILBt5ebc). If that IS the venue, paste the id
       below so directions land on the exact gate. Leave "" to route by address. */
    placeId: ""
  },

  /* Traditional invitation text (Page 3). Use {groom} {bride} {date} {venue}. */
  invitationHi: [
    "परमपिता परमेश्वर की असीम अनुकम्पा एवं पूज्य बुजुर्गों के आशीर्वाद से",
    "चि. {groom} संग आयु. {bride}",
    "का शुभ सगाई समारोह दिनांक {date} को {venue} में सम्पन्न होना निश्चित हुआ है।",
    "इस मंगल अवसर पर आप सपरिवार सादर आमंत्रित हैं।"
  ],

  /* ⚠ CONFIRM — copy exactly from the card. Leave [] to hide. */
  hosts: [            // "निवेदक" / with best compliments from
    // "श्री ______ एवं श्रीमती ______",
  ],
  blessings: [        // "आशीर्वाद" (grandparents / elders)
    // "श्री ______",
  ],
  contacts: [         // shown in "Contact Family"; phone with country code
    // { name: "श्री ______", phone: "+91XXXXXXXXXX" },
  ],

  /* Original card photos (put files in /photos). rotate: 0 | 90 | 180 | 270 */
  photos: [
    // { src: "photos/card-1.jpg", caption: "Cover", rotate: 0 },
    // { src: "photos/card-2.jpg", caption: "Invitation", rotate: 0 },
    // { src: "photos/card-3.jpg", caption: "Programme", rotate: 0 },
  ],
  photoFilter: "brightness(1.06) contrast(1.06)",   // readability boost, text untouched

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
