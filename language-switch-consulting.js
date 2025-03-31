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
        title:
          "Consulting for Construction Projects – Planning & Logistics Support | NEO Building",
        description:
          "With over 500 completed projects, NEO Building offers expert consulting for construction projects. We support companies, architects, and organizations in planning, logistics, and execution—whether for glass elements, stainless steel components, or complete solutions. Benefit from our extensive experience and tailored solutions.",
        keywords:
          "Neo Building GmbH, industrial floors Cologne, drainage systems NRW, glass solutions Cologne, specialist in industrial floors, custom drainage systems, stainless steel custom work, glass construction for hotels and industry, industrial floors and drainage, construction company Cologne, construction consulting, over 20 years experience in construction, industrial and commercial construction projects, glass, stainless steel and flooring solutions, consulting for industrial construction projects, construction partner for industry and commercial, custom construction projects Cologne, experts for hotel and commercial construction, Cologne construction company experience, high-quality construction products Cologne, construction planning, project consulting, logistics support, stainless steel construction, glass construction, architecture consulting, project management, custom construction planning, building design, stainless steel components, glass solutions, construction expertise, planning support, construction industry consulting, stainless steel custom solutions, tailored construction projects",
      },

      pageContent: {
        siteHeader: "Consulting",
        siteCrum: "Consulting",
        siteHeader4: "Selected Images",
        pleaseNote:
          "They say an image is worth a thousand words. Here, each one speaks of dedication, innovation, and the beauty of precision craftsmanship.",
        moreThan: "More than",
        happyCustomer: "Satisfied Customers",
        projectsDone: "Projects Completed",
        glasUsed: "Tons of glass installed",
        steelUsed: "Tons of stainless steel processed",
        toGallery: "View the Gallery",

        // Intro Section
        siteHeader2: "Expertise for a Variety of Projects",
        toGallery: "Alle Bilder",
        //   Intro Section Consulting
        pageIntroDescription:
          "With over 500 completed projects and more than 1,000 satisfied customers, NEO Building is your reliable partner for professional consulting services.",
        siteHeader3: "Consulting Services",
        pageIntroDescription2:
          "We have worked with renowned clients and successfully completed projects. Our expertise guarantees that we can tackle any challenge and offer tailored solutions.",
        pageIntroDescription3:
          "In addition to technical consulting, we also support you with logistics and project planning.",
        pageIntroDescription4:
          "Use our knowledge to make informed decisions and bring your ideas to life. Contact us for a consultation.",
        toReference: "References",
        // Stats Counter
        counterHeader: "Overview",
        counterDescription: "We bring your ideas to life!",
        counterToGallery: "View the Gallery",
      },
      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title:
          "Beratung für Bauvorhaben – Unterstützung in Planung & Logistik | NEO Building",
        description:
          "Mit über 500 abgeschlossenen Projekten bietet NEO Building professionelle Beratung für Bauvorhaben. Wir unterstützen Unternehmen, Architekten und Organisationen in Planung, Logistik und Umsetzung – von Glaselementen über Edelstahlbauteile bis hin zu Komplettlösungen. Profitieren Sie von unserer Erfahrung und maßgeschneiderten Lösungen.",
        keywords:
          "Neo Building GmbH, Industrieböden Köln, Entwässerungssysteme NRW, Glaslösungen Köln, Spezialist für Industrieböden, maßgefertigte Entwässerungssysteme, Edelstahl Sonderanfertigungen, Glasbau für Hotels und Industrie, Industrieböden und Drainagen, Bauunternehmen Köln, Projektberatung Bauwesen, über 20 Jahre Erfahrung Bau, Bauprojekte Industrie und Gewerbe, Glas, Edelstahl und Bodenlösungen, Beratung für Industriebauprojekte, Baupartner für Industrie und Gewerbe, individuelle Bauprojekte Köln, Experten für Hotelbau und Gewerbebau, Köln Bauunternehmen Erfahrung, hochwertige Bauprodukte Köln, Bauplanung, Bauvorhaben Beratung, Projektberatung, Logistik Unterstützung, Edelstahlbau, Glasbau, Architektur Beratung, Bauprojekt Management, individuelle Bauplanung, Baukonstruktion, Edelstahl Komponenten, Glaslösungen, Bau Expertise, Planungsunterstützung, Bauindustrie Beratung, Edelstahl Sonderanfertigungen, maßgeschneiderte Bauprojekte",
      },

      pageContent: {
        siteHeader: "Beratung",
        siteCrum: "Beratung",
        // Intro Section
        siteHeader2: "Expertise für eine Vielzahl von Projekten",
        pleaseNote:
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes Einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",
        moreThan: "Mehr als",
        happyCustomer: "Zufriedene Kunden",
        projectsDone: "Bauvorhaben abgeschlossen",
        glasUsed: "Tonnen Glas verbaut",
        steelUsed: "Tonnen Edelstahl verarbeitet",
        toGallery: "Alle Bilder",
        //   Intro Section Consulting
        pageIntroDescription:
          "Mit über 500 abgeschlossenen Projekten und mehr als 1.000 zufriedenen Kunden ist NEO Building Ihr zuverlässiger Partner für professionelle Beratungsdienste.",
        siteHeader3: "Beratungsservice",
        pageIntroDescription2:
          "Wir haben mit renommierten Kunden zusammengearbeitet und erfolgreiche Projekte realisiert. Unsere Expertise garantiert, dass wir jede Herausforderung meistern und maßgeschneiderte Lösungen anbieten können. ",
        pageIntroDescription3:
          "Neben der fachlichen Beratung unterstützen wir Sie auch bei der Logistik und der Planung Ihrer Projekte.",
        pageIntroDescription4:
          "Nutzen Sie unser Wissen, um informierte Entscheidungen zu treffen und Ihre Ideen zum Leben zu erwecken. Kontaktieren Sie uns für eine Beratung.",
        toReference: "Referenzen",
        // Stats Counter
        counterHeader: "Überblick",
        counterDescription: "Wir finden die Lösung für Ihre Ideen!",
        counterToGallery: "Alle Bilder",
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
