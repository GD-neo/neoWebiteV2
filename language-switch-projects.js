document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("loading", "lazy");
  });
  const dynamicText = document.getElementById("dynamic-text");
  document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("loading", "lazy");
  });
  // Define translations for English and German
  const translations = {
    en: {
      meta: {
        title: "Neo Building | References Projects",
        description:
          "In addition to our commitment to project business, we have always offered our products to private customers as well. Take advantage of our many years of experience to bring your private construction project to life.",
        keywords:
          "neo building, references, images, private customers, glas shower enclosures, neo building experience,  neo building polaroid, polaroid, mars",
      },

      pageContent: {
        siteHeader: "Projects",
        siteCrum: "Projects",
        siteHeader2: "Overview",
        siteHeader3: "We bring your ideas to life!",
        siteHeader4: "Selected Images",
        pleaseNote:
          "They say an image is worth a thousand words. Here, each one speaks of dedication, innovation, and the beauty of precision craftsmanship.",
        moreThan: "More than",
        happyCustomer: "Satisfied Customers",
        projectsDone: "Projects Completed",
        glasUsed: "Tons of glass installed",
        steelUsed: "Tons of stainless steel processed",
        textPolaroid:
          "Scope of work carried out by us: 50m of new drainage/gutters, new drains, new industrial flooring, new grating.",
        textMars:
          "Scope of work carried out by us: Removal/excavation of the old floor and old drains, manufacturing and installation of 5m high stainless steel wall elements, new industrial flooring, new drains, new impact protection, and more.",
        textHotels:
          "Neo Building products for hotels and similar construction projects: Frameless all-glass shower enclosures, walk-in solutions, sliding doors, room dividers, shower drains, desks, shelves, mirrors & illuminated mirrors, backsplash glazing, etc.",
        toGallery: "See all images in the Galery",
      },
      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title: "Neo Building | Referenzen Projekte",
        description:
          "Wir freuen uns auf Ihre Anfrage - per E-Mail an info@neo-building.com oder telefonisch unter +49-221-95490929-0",
        keywords:
          "neo building, referenzen, bilder, privat kunden, glasduschen, neo building erfahrung, neo building polaroid, polaroid, mars",
      },

      pageContent: {
        siteHeader: "Projekte",
        siteCrum: "Projekte",
        siteHeader2: "Überblick",
        siteHeader3: "Wir finden die Lösung für Ihre Ideen!",
        siteHeader4: "Auswahl Bilder",
        pleaseNote:
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",
        moreThan: "Mehr als",
        happyCustomer: "Zufriedene Kunden",
        projectsDone: "Bauvorhaben abgeschlossen",
        glasUsed: "Tonnen Glas verbaut",
        steelUsed: "Tonnen Edelstahl verarbeitet",
        textPolaroid:
          "Umfang der von uns durchgeführten Arbeiten: 50m neuer Entwässerung/Rinnen, neue Abläufe, neuer Industrieboden, neue Gitterroste.",
        textMars:
          "Umfang der von uns durchgeführten Arbeiten: Entnahme/ Abtragen des alten Bodens und alter Abläufe, Fertigung und Installation 5m hoher Wandelemente aus Edelstahl, neuer Industrieboden, neue Abläufe, neuer Rammschutz und weiteres.",
        textHotels:
          "Neo Building Produkte für Hotels und ähnliche Bauvorhaben: Rahmenlose Ganzglas-Duschabtrennungen, Walk-In Lösungen, Schiebetüren, Raumteiler, Duschrinnen, Schreibtische, Regalböden, Spiegel&Leuchtspiegel, Rückwandverglasungen etc.",
        toGallery: "Alle Bilder",
      },
      imageTitleZoom:
        "Bei Fragen zu einzelnen Produkten oder Beratungsbedarf erreichen Sie uns unter info@neo-building.com oder telefonisch unter +49-221-95490929-0",
    },
  };
  // Detect browser language and set default correctly
  let browserLang = navigator.language || navigator.userLanguage;
  let detectedLang = browserLang.includes("de") ? "de" : "en";
  let storedLang = localStorage.getItem("language");
  let currentLang = storedLang ? storedLang : detectedLang;
  if (!storedLang) {
    localStorage.setItem("language", currentLang);
  }

  function updateStaticText() {
    // Update the page title and meta description
    document.title = translations[currentLang].meta.title;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        translations[currentLang].meta.description
      );
    }
    function applyTranslation(key, obj) {
      const element = document.querySelector(`#${key}`);
      if (element) {
        if (typeof obj === "string") {
          element.innerHTML = obj;
        } else if (typeof obj === "object") {
          Object.keys(obj).forEach((subKey) => {
            applyTranslation(subKey, obj[subKey]);
          });
        }
      }
      const classElement = document.querySelectorAll(`.${key}`);
      if (classElement) {
        if (typeof obj === "string") {
          classElement.forEach((text) => {
            text.innerHTML = obj;
          });
        }
      }
    }

    // applyTranslation("meta", translations[currentLang].meta);
    applyTranslation("pageContent", translations[currentLang].pageContent);

    const glightbox = GLightbox({
      selector: ".glightbox",
      openEffect: "zoom",
      closeEffect: "fade",
      onOpen: () => {
        document.body.setAttribute("inert", "true");
      },
      onClose: () => {
        document.body.removeAttribute("inert");
      },
    });

    // Function to update the image title
    function updateImageTitle() {
      setTimeout(() => {
        let imageTitles = document.querySelectorAll(".gslide-title"); // Refresh elements
        imageTitles.forEach((imageTitle) => {
          imageTitle.innerText = translations[currentLang].imageTitleZoom;
        });
      }, 100); // Small delay for rendering
    }
    document.addEventListener("keydown", function (event) {
      // Check if the right arrow key (ArrowRight) is pressed
      if (event.key === "ArrowRight") {
        updateImageTitle();
      }
      // Check if the left arrow key (ArrowLeft) is pressed
      if (event.key === "ArrowLeft") {
        updateImageTitle();
      }
    });
    // Observer to detect when Lightbox content changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.target.getAttribute("aria-hidden") === "false"
        ) {
          updateImageTitle(); // Update text only when visible
        }
      });
    });

    // Start observing changes in the lightbox container
    const lightboxContainer = document.querySelector(".glightbox-container");
    if (lightboxContainer) {
      observer.observe(lightboxContainer, { attributes: true, subtree: true });
    }

    // Event listeners for clicking images and navigation buttons
    document.querySelectorAll(".preview-link").forEach((link) => {
      link.addEventListener("click", updateImageTitle);
    });

    document.addEventListener("click", (event) => {
      if (event.target.closest(".gnext, .gprev")) {
        updateImageTitle();
      }
    });

    // console.log(nextPrevButtons);
    // console.log(imageLinks);
  }

  updateStaticText();

  function switchLanguage() {
    currentLang = currentLang === "en" ? "de" : "en";
    localStorage.setItem("language", currentLang);
    productIndex = 0;
    charIndex = 0;
    isDeleting = false;

    updateStaticText();
  }

  document.getElementById("toggle-lang").addEventListener("click", function () {
    switchLanguage();
  });
  //   Endless Scroll
  // Company names for each row (you can replace these with your actual partners)
  // All company names combined and sorted alphabetically
  const allCompanies = [
    "ABZ Mellendorf",
    "Alpenhof Murnau, Murnau am Staffelsee",
    "Ambassador Frankfurt",
    "Ambassador München",
    "Amedia Hamburg",
    "Ascot Zürich",
    "Ballhaus München",
    "Bavaria Towers München",
    "Best Western Plus Hotel Bremerhaven",
    "Best Western Polisina Ochsenfurt",
    "Burgklause Hotel Fehmarn",
    "Capri by Fraser Frankfurt",
    "Château de Vignée Belgien",
    "Citadines City Centre Frankfurt",
    "Citadines Hamburg",
    "Comfort Hotel Monheim",
    "Concorde Opéra Paris",
    "Daimler Sindelfingen",
    "Das Rheinische Quartier Elsdorf",
    "Derag Livinghotel De Medici Düsseldorf",
    "Dormero Stuttgart",
    "Europäischer Hof Hamburg",
    "Golf Resort Budersand Sylt",
    "Golden Tulip Berlin",
    "Grand City Hotel Duisburg",
    "Grand City Hotel Hamburg",
    "GHotel Hannover",
    "GHotel Koblenz",
    "Gut Kump Hamm",
    "Humboldt-Institut Berlin",
    "IG Metall Bildungszentrum Sprockhövel",
    "Innside by Mélia Düsseldorf",
    "Kempinski Grand Hotel des Bains St. Moritz",
    "Hotel am Konzerthaus Wien",
    "Lanser Hof Tegernsee",
    "Lindenhof Fehmarn",
    "Lindner Park Hotel Hagenbeck Hamburg",
    "Le Méridien Grand Hotel Nürnberg",
    "Lindner Congress Hotel",
    "LVR-Klinikum Köln-Merheim",
    "LVR-Klinik Forensik Köln",
    "Main-Arkaden Frankfurt",
    "Marriott Hamburg",
    "Marriott Zürich",
    "Mars Confectionery Viersen",
    "Mercure Leipzig",
    "Mercure Salzburg",
    "Mercure Bristol Sindelfingen",
    "Mercure Orbis Perlach",
    "Motel One Dresden",
    "Motel One Düsseldorf",
    "Motel One Köln",
    "Motel One Wien",
    "New Wave Hotel Nordeney",
    "NIU Hotel Hamburg",
    "Novotel Frankfurt",
    "Novotel Krefeld",
    "Park Inn Köln",
    "Pentahotel Brüssel",
    "Pentahotel Liège",
    "Pentahotel Paris",
    "Pentahotel Prag",
    "Pentahotel Trier",
    "Pentahotel Wiesbaden",
    "Polaroid Film Monheim",
    "Pullman München",
    "Räterpark München",
    "Radison Blu Baden Baden",
    "Reichshof Hamburg Renaissance",
    "Hotel Zürich",
    "Ritter Hotel Durbach",
    "Robinson Hotel Kleinarl",
    "Österreich Ruhrturm Essen",
    "Scandic Hotel Frankfurt",
    "Scandic Hotel München",
    "Schloss Kranichstein Darmstadt",
    "Sheraton Essen",
    "Stage 47 Hotel Essen",
    "Steigenberger Airport Hotel Berlin",
    "Steigenberger Berlin",
    "Steigenberger Duisburger Hof",
    "Steigenberger Intercity Hotel Berlin",
    "Steigenberger Intercity Hotel Bonn",
    "Steigenberger Airport Hotel Frankfurt",
    "Swissotel Zürich",
    "The Garden Berlin",
    "The Westin Grand München",
    "Thomaskirchhof Hotel Leipzig",
    "Upstalsboom Parkhotel Emden",
    "Upstalsboom Hotel Seebad Heringsdorf",
    "Walhalla Hotel Zürich",
    "Weisses Kreuz Hotel Innsbruck",
    "Harzresort Torfhaus",
    "Hotel Kurhaus Wyk auf Föhr",
    "Hotel TUI Blue Sylt",
  ].sort(); // Sort A-Z

  // Split into 5 rows, ~18-19 names each
  const companies1 = allCompanies.slice(0, 19); // 19 names (A-B)
  const companies2 = allCompanies.slice(19, 38); // 19 names (C-G)
  const companies3 = allCompanies.slice(38, 57); // 19 names (G-M)
  const companies4 = allCompanies.slice(57, 76); // 19 names (M-S)
  const companies5 = allCompanies.slice(76, 92); // 16 names (S-W)

  // Function to populate and duplicate items for infinite scroll
  function populateRow(rowId, companies) {
    const row = document.getElementById(rowId);
    const items = companies
      .map((company) => `<span class="scroll-item">${company}</span>`)
      .join("");
    row.innerHTML = items + items; // Duplicate for seamless looping
  }

  // Populate all rows
  populateRow("row1", companies1);
  populateRow("row2", companies2);
  populateRow("row3", companies3);
  populateRow("row4", companies4);
  populateRow("row5", companies5);
});
