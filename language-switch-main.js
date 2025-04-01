const translations = {
  en: {
    meta: {
      title:
        "NEO Building | Industrial Flooring | Stainless Steel Constructions | Consulting",
      description:
        "This is a multi-language website with English and German support.",
    },
    navbar: {
      home: "Home",
      about: "About Us",
      products: "Products",
      neoxConstruct: "NEOX Stailess Steel Constructions",
      industrialDrains: "NEOX Industrial Drainage Systems",
      stainlessElements: "NEOX Stainless Steel Elements",
      drains: "NEOX Shower Drainage Systems",
      neoxOverview: "Overview",
      neoxE: "Channel E",
      neoxX: "Channel X",
      neoxS: "Channel S",
      neoxDrain: "Drains & Features",
      neoxProfile: "NEOX Profiles",
      neoxMore: "More",
      neoxidFloor: "NEOXID Industrial Flooring",
      neovisionShower: "NEOVISION Shower Enclosures",
      overview: "Overview",
      neovisionClassic: "NEOVISION Classic",
      neovisionPura: "NEOVISION Pura",
      neovisionEasy: "NEOVISION Easy",
      walkIn: "Walk-In Solutions",
      neolight: "NEOLIGHT Mirrors&LED-Mirrors",
      renobox: "RENOBOX Concept",
      more: "More Products",
      specials: "Specials",
      alcamo: "Alcamo by Kienle | Spare Parts",
      references: "References",
      projects: "Projects",
      private: "Private Customers",
      consulting: "Consulting",
      images: "Gallery",
      contact: "Contact",
    },
    footer: {
      footerStreet: "Albin-Haenseroth-Weg 19",
      footerPostCode: "50859 Cologne, Germany",
      footerOverview: "Overview",
      footerHome: "Home",
      footerTos: "ToS",
      footerConsult: "Consulting",
      footerData: "Privacy|Data",
      footerImpress: "Legal Notice",
      footerReference: "References",
      footerImages: "Images",
      footerProducts: "Products",
      footerIndustrialDrain: "Industrial Drainage Systems",
      footerIndustrialFloor: "Industrial Flooring",
      footerStainlessSteel: "Stainless Steel Elements",
      footerDrains: "Shower Drainage Systems",
      footerShower: "Shower Enclosures",
      footerMirror: "Mirrors&LED-Mirrors",
      footerRenobox: "RENOBOX Concept",
    },
    overlay: {
      popupTitle: "Alcamo ist a brand of Neo Building GmbH",
      popupText:
        "You can find all the relevant information about our current offers here on this page.",
      popupLink: "Leave Current Website for Alcamo",
    },
    cookiePopup: {
      cookieText:
        "This website uses cookies. If you continue to use this website, we assume your consent. <br /> NOTE: The visualizations on this website do not constitute an installation guide.",
      agreeButton: " I Agree & Understand",
    },
  },
  de: {
    meta: {
      title: "NEO Building | Industrieböden | Edelstahlkonstruktion | Beratung",
      description:
        "Dies ist eine mehrsprachige Webseite mit Unterstützung für Englisch und Deutsch.",
    },
    navbar: {
      home: "Home",
      about: "Philosophie",
      products: "Produkte",
      neoxConstruct: "NEOX Edelstahlkonstruktion",
      industrialDrains: "NEOX Industrieentwässerung",
      stainlessElements: "NEOX Edelstahlbauelemente",
      drains: "NEOX Duschrinnen",
      neoxOverview: "Übersicht",
      neoxE: "Channel E",
      neoxX: "Channel X",
      neoxS: "Channel S",
      neoxDrain: "Abläufe & Features",
      neoxProfile: "NEOX Profile",
      neoxMore: "Mehr",
      neoxidFloor: "NEOXID Industrieböden",
      neovisionShower: "NEOVISION Glasduschen",
      overview: "Übersicht",
      neovisionClassic: "NEOVISION Classic",
      neovisionPura: "NEOVISION Pura",
      neovisionEasy: "NEOVISION Easy",
      walkIn: "Walk-In Lösungen",
      neolight: "NEOLIGHT Spiegel&Leuchtspiegel",
      renobox: "RENOBOX Konzept",
      more: "Weitere Produkte",
      specials: "Specials",
      alcamo: "Alcamo by Kienle | Ersatzteile",
      references: "Referenzen",
      projects: "Projekte",
      private: "Privatkunden",
      consulting: "Beratung",
      images: "Bilder",
      contact: "Kontakt",
    },
    footer: {
      footerStreet: "Albin-Hänseroth-Weg 19",
      footerPostCode: "50859 Köln, Deutschland",
      footerOverview: "Übersicht",
      footerHome: "Home",
      footerTos: "AGB",
      footerConsult: "Beratung",
      footerData: "Datenschutz",
      footerImpress: "Impressum",
      footerReference: "Referenzen",
      footerImages: "Bilder",
      footerProducts: "Produkte",
      footerIndustrialDrain: "Industrieentwässerung",
      footerIndustrialFloor: "Industrieböden",
      footerStainlessSteel: "Edelstahlbauelemente",
      footerDrains: "Duschrinnen",
      footerShower: "Glasduschen",
      footerMirror: "Spiegel&Leuchtspiegel",
      footerRenobox: "RENOBOX Konzept",
    },
    overlay: {
      popupTitle: "Alcamo ist eine Marke der Neo Building GmbH",
      popupText:
        "Sie finden alle relevanten Informationen zu unseren aktuellen Angeboten hier auf dieser Seite.",
      popupLink: "Website verlassen zu Alcamo",
    },
    cookiePopup: {
      cookieText:
        "Diese Website benutzt Cookies. Wenn Sie diese Website weiter nutzen, gehen wir von Ihrem Einverständnis aus. <br /> HINWEIS: Die Visualisierungen auf dieser Website stellen keine Einbauanleitung dar.",
      agreeButton: "Zustimmen",
    },
  },
};
let currentLang = localStorage.getItem("lang") || "en";
function applyLanguage(e) {
  translations[e] || (e = "en"),
    Object.keys(translations[e].navbar).forEach((o) => {
      const n = document.querySelector(`nav #${o}`);
      n && (n.innerText = translations[e].navbar[o]);
    }),
    Object.keys(translations[e].footer).forEach((o) => {
      const n = document.querySelector(`footer #${o}`);
      n && (n.innerText = translations[e].footer[o]);
    }),
    localStorage.setItem("lang", e),
    Object.keys(translations[e].overlay).forEach((o) => {
      const n = document.querySelector(`#${o}`);
      n && (n.innerText = translations[e].overlay[o]);
    }),
    Object.keys(translations[e].cookiePopup).forEach((o) => {
      const n = document.querySelector(`#${o}`);
      n && (n.innerHTML = translations[e].cookiePopup[o]);
    });
}
function toggleLanguage(e) {
  e.preventDefault(),
    (currentLang = "en" === currentLang ? "de" : "en"),
    applyLanguage(currentLang),
    (document.querySelector("#toggle-lang").innerText =
      "en" === currentLang ? "Deutsch" : "English");
}
function detectLanguage() {
  const e = navigator.language || navigator.userLanguage;
  (currentLang = localStorage.getItem("lang")
    ? localStorage.getItem("lang")
    : e.includes("de")
    ? "de"
    : "en"),
    applyLanguage(currentLang),
    (document.querySelector("#toggle-lang").innerText =
      "en" === currentLang ? "Deutsch" : "English");
}
(window.onload = detectLanguage),
  document
    .querySelector("#toggle-lang")
    .addEventListener("click", toggleLanguage);
const alcamoLink = document.getElementById("alcamo"),
  popup = document.getElementById("popup"),
  overlay = document.getElementById("overlay"),
  closePopup = document.getElementById("closePopup");
alcamoLink.addEventListener("click", function (e) {
  e.preventDefault(),
    (popup.style.display = "block"),
    (overlay.style.display = "block");
}),
  closePopup.addEventListener("click", function () {
    (popup.style.display = "none"), (overlay.style.display = "none");
  }),
  overlay.addEventListener("click", function () {
    (popup.style.display = "none"), (overlay.style.display = "none");
  });
