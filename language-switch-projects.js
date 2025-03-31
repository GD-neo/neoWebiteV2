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
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes Einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",
        moreThan: "Mehr als",
        happyCustomer: "Zufriedene Kunden",
        projectsDone: "Bauvorhaben abgeschlossen",
        glasUsed: "Tonnen Glas verbaut",
        steelUsed: "Tonnen Edelstahl verarbeitet",
        textPolaroid:
          "Umfang der von uns durchgeführten Arbeiten: 50m neue Entwässerung/Rinnen, neue Abläufe, neuer Industrieboden, neue Gitterroste.",
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
});
