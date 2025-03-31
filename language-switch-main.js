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

let currentLang = localStorage.getItem("lang") || "en"; // Default language is English or saved language

function applyLanguage(lang) {
  if (!translations[lang]) lang = "en"; // Default to English if language is invalid

  // Update the page title and meta description
  //   document.title = translations[lang].meta.title;
  //   const metaDescription = document.querySelector("meta[name='description']");
  //   if (metaDescription) {
  //     metaDescription.setAttribute(
  //       "content",
  //       translations[lang].meta.description
  //     );
  //   }
  // Update the navbar text
  Object.keys(translations[lang].navbar).forEach((key) => {
    const element = document.querySelector(`nav #${key}`);
    if (element) element.innerText = translations[lang].navbar[key];
  });

  //   document.querySelector("nav #home").innerText =
  //     translations[lang].navbar.home;
  //   document.querySelector("nav #about").innerText =
  //     translations[lang].navbar.about;
  //   document.querySelector("nav #products").innerText =
  //     translations[lang].navbar.products;
  //   document.querySelector("nav #neoxConstruct").innerText =
  //     translations[lang].navbar.neoxConstruct;
  //   document.querySelector("nav #industrialDrains").innerText =
  //     translations[lang].navbar.industrialDrains;
  //   document.querySelector("nav #stainlessElements").innerText =
  //     translations[lang].navbar.stainlessElements;
  //   document.querySelector("nav #drains").innerText =
  //     translations[lang].navbar.drains;
  //   document.querySelector("nav #neoxOverview").innerText =
  //     translations[lang].navbar.neoxOverview;
  //   document.querySelector("nav #neoxE").innerText =
  //     translations[lang].navbar.neoxE;
  //   document.querySelector("nav #neoxX").innerText =
  //     translations[lang].navbar.neoxX;
  //   document.querySelector("nav #neoxS").innerText =
  //     translations[lang].navbar.neoxS;
  //   document.querySelector("nav #neoxDrain").innerText =
  //     translations[lang].navbar.neoxDrain;
  //   document.querySelector("nav #neoxProfile").innerText =
  //     translations[lang].navbar.neoxProfile;
  //   document.querySelector("nav #neoxMore").innerText =
  //     translations[lang].navbar.neoxMore;
  //   document.querySelector("nav #neoxidFloor").innerText =
  //     translations[lang].navbar.neoxidFloor;
  //   document.querySelector("nav #neovisionShower").innerText =
  //     translations[lang].navbar.neovisionShower;
  //   document.querySelector("nav #overview").innerText =
  //     translations[lang].navbar.overview;
  //   document.querySelector("nav #neovisionClassic").innerText =
  //     translations[lang].navbar.neovisionClassic;
  //   document.querySelector("nav #neovisionPura").innerText =
  //     translations[lang].navbar.neovisionPura;
  //   document.querySelector("nav #neovisionEasy").innerText =
  //     translations[lang].navbar.neovisionEasy;
  //   document.querySelector("nav #walkIn").innerText =
  //     translations[lang].navbar.walkIn;
  //   document.querySelector("nav #neolight").innerText =
  //     translations[lang].navbar.neolight;
  //   document.querySelector("nav #renobox").innerText =
  //     translations[lang].navbar.renobox;
  //   document.querySelector("nav #more").innerText =
  //     translations[lang].navbar.more;
  //   document.querySelector("nav #specials").innerText =
  //     translations[lang].navbar.specials;
  //   document.querySelector("nav #alcamo").innerText =
  //     translations[lang].navbar.alcamo;
  //   document.querySelector("nav #references").innerText =
  //     translations[lang].navbar.references;
  //   document.querySelector("nav #projects").innerText =
  //     translations[lang].navbar.projects;
  //   document.querySelector("nav #private").innerText =
  //     translations[lang].navbar.private;
  //   document.querySelector("nav #consulting").innerText =
  //     translations[lang].navbar.consulting;
  //   document.querySelector("nav #images").innerText =
  //     translations[lang].navbar.images;
  //   document.querySelector("nav #contact").innerText =
  //     translations[lang].navbar.contact;
  // update the footer text
  Object.keys(translations[lang].footer).forEach((key) => {
    const element = document.querySelector(`footer #${key}`);
    if (element) {
      element.innerText = translations[lang].footer[key];
    }
  });
  //   document.querySelector("footer #footerStreet").innerText =
  //     translations[lang].footer.footerStreet;
  //   document.querySelector("footer #footerPostCode").innerText =
  //     translations[lang].footer.footerPostCode;
  //   document.querySelector("footer #footerOverview").innerText =
  //     translations[lang].footer.footerOverview;
  //   document.querySelector("footer #footerHome").innerText =
  //     translations[lang].footer.footerHome;
  //   document.querySelector("footer #footerTos").innerText =
  //     translations[lang].footer.footerTos;
  //   document.querySelector("footer #footerConsult").innerText =
  //     translations[lang].footer.footerConsult;
  //   document.querySelector("footer #footerData").innerText =
  //     translations[lang].footer.footerData;
  //   document.querySelector("footer #footerImpress").innerText =
  //     translations[lang].footer.footerImpress;
  //   document.querySelector("footer #footerReference").innerText =
  //     translations[lang].footer.footerReference;
  //   document.querySelector("footer #footerImages").innerText =
  //     translations[lang].footer.footerImages;
  //   document.querySelector("footer #footerProducts").innerText =
  //     translations[lang].footer.footerProducts;
  //   document.querySelector("footer #footerIndustrialDrain").innerText =
  //     translations[lang].footer.footerIndustrialDrain;
  //   document.querySelector("footer #footerIndustrialFloor").innerText =
  //     translations[lang].footer.footerIndustrialFloor;
  //   document.querySelector("footer #footerStainlessSteel").innerText =
  //     translations[lang].footer.footerStainlessSteel;
  //   document.querySelector("footer #footerDrains").innerText =
  //     translations[lang].footer.footerDrains;
  //   document.querySelector("footer #footerShower").innerText =
  //     translations[lang].footer.footerShower;
  //   document.querySelector("footer #footerMirror").innerText =
  //     translations[lang].footer.footerMirror;
  //   document.querySelector("footer #footerRenobox").innerText =
  //     translations[lang].footer.footerRenobox;
  // Store the selected language in local storage
  localStorage.setItem("lang", lang);
  Object.keys(translations[lang].overlay).forEach((key) => {
    const element = document.querySelector(`#${key}`);
    if (element) {
      element.innerText = translations[lang].overlay[key];
    }
  });
  // Cookie Pop up translation
  Object.keys(translations[lang].cookiePopup).forEach((key) => {
    const element = document.querySelector(`#${key}`);
    if (element) {
      element.innerHTML = translations[lang].cookiePopup[key];
    }
  });
}

function toggleLanguage(event) {
  event.preventDefault(); // Prevent page reload when clicking the toggle link

  // Toggle language between 'en' and 'de'
  currentLang = currentLang === "en" ? "de" : "en";

  // Apply the new language
  applyLanguage(currentLang);

  // Update the toggle link text
  document.querySelector("#toggle-lang").innerText =
    currentLang === "en" ? "Deutsch" : "English";
}

// Initialize with the stored language or browser language detection as fallback
function detectLanguage() {
  const userLang = navigator.language || navigator.userLanguage; // Get the browser's language
  if (localStorage.getItem("lang")) {
    currentLang = localStorage.getItem("lang"); // Use saved language from localStorage
  } else if (userLang.includes("de")) {
    currentLang = "de"; // Set language to German if user's language is German
  } else {
    currentLang = "en"; // Default to English
  }

  applyLanguage(currentLang); // Apply the correct language

  // Set the toggle link text based on initial language
  document.querySelector("#toggle-lang").innerText =
    currentLang === "en" ? "Deutsch" : "English";
}

// Detect language on page load
window.onload = detectLanguage;
document
  .querySelector("#toggle-lang")
  .addEventListener("click", toggleLanguage);

// Alcamo Pop Up
// Get elements
const alcamoLink = document.getElementById("alcamo");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const closePopup = document.getElementById("closePopup");

// Show pop-up when clicking the link
alcamoLink.addEventListener("click", function (event) {
  event.preventDefault();
  popup.style.display = "block";
  overlay.style.display = "block";
});

// Hide pop-up when clicking the close button
closePopup.addEventListener("click", function () {
  popup.style.display = "none";
  overlay.style.display = "none";
});

// Hide pop-up when clicking the overlay
overlay.addEventListener("click", function () {
  popup.style.display = "none";
  overlay.style.display = "none";
});
