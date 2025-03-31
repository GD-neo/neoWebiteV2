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
        title: "NEOX Industrial Drainage Systems in Cologne | NEO Building",
        description:
          "Discover NEOX Industrial Drainage Systems in Cologne, designed with precision and crafted from high-quality stainless steel. Our solutions are ideal for diverse industrial environments, offering seamless integration and durability. Whether for factories, kitchens, or warehouses, we provide custom drainage solutions tailored to your needs. Contact NEO Building for expert consultation and high-performance systems that stand the test of time.",
        keywords:
          "NEOX Industrial Drainage, Edelstahl Entwässerungssysteme, Edelstahl Drainagesysteme, Industrieböden und Entwässerung, maßgeschneiderte Entwässerungslösungen, Entwässerungssysteme für Fabriken, Entwässerungssysteme für Lagerhallen, Entwässerungssysteme für Küchen, NEOX Drainage Köln, Edelstahl Entwässerung Köln, Industrie Entwässerung, nahtlose Entwässerungssysteme, langlebige Entwässerungssysteme, hochwertige Entwässerungslösungen, professionelle Entwässerungslösungen, Industrie Abflusssysteme",
      },

      pageContent: {
        siteHeader: "Stainless Steel Components",
        siteCrum: "NEOX",
        siteHeader2: "We bring your ideas to life!",
        // Page Intro
        pageIntroHeader: "Stainless Steel Work",
        pageIntroDescription: "Complete stainless steel elements, for example:",
        pageIntroPointOne: "Wall elements",
        pageIntroPointTwo: "Wall cladding",
        pageIntroPointThree: "Impact protection elements",
        pageIntroPointFour: "Stairs & railings",
        pageIntroPointFive: "Additional elements",
        pageIntroHeader2: "Quality",
        pageIntroDescription2:
          "NEOX stainless steel components offer a range of high-quality, durable solutions for various industrial applications.",
        pageIntroDescription3:
          "From wall elements and cladding to stairs, railings, and protective barriers – our products are designed to meet the highest standards.",
        pageIntroDescription4:
          "Whether structural elements or safety features, NEOX offers versatile, precision-engineered components made from the finest stainless steel, ensuring durability and functionality.",
        pageIntroDescription5:
          "Explore how our custom solutions enhance your spaces with style and reliability, offering both safety and sophistication.",
        pageInroToGallery: "Let the pictures speak for themselves",
        pageInroToContact: "Start Inquiry",
        //   Call to action examples
        callToActionHeaderExamples: "Project Experience",
        callToActionDescriptionExamples:
          "We set extremely high standards for the materials we use, as well as for the form and functionality of our products. Our designs are timeless, with the aim of ensuring long-lasting satisfaction. From prototype to series production, all our products are designed in-house, undergoing extensive testing to provide sustainable benefits.",
        callToActionLinkExamples: "References",
        // Slider Sectios
        beforeAfterTitle: "Before | After",
        // Image Section Content
        filterAll: "Stainless Steel Komponents",
        pleaseNote:
          "They say a picture is worth a thousand words. Each one here speaks of dedication, innovation, and the beauty of precise craftsmanship.",
        //   Image Titles
        descriptionImages:
          "NEOX stainless steel components offer a range of high-quality, durable solutions for various industrial applications",
        goToProjects: "References",
        goToPrivate: "Start Inquiry",
        titleImages: "NEOX Stainless Steel Components",
        // more info buttons
        moreInfo: "Learn more",
      },

      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title: "NEOX Industrie-Entwässerungssysteme in Köln | NEO Building",
        description:
          "Entdecken Sie NEOX Industrie-Entwässerungssysteme in Köln, die mit Präzision gefertigt und aus hochwertigem Edelstahl hergestellt sind. Unsere Lösungen bieten nahtlose Integration und Langlebigkeit für verschiedene industrielle Umgebungen. Ob für Fabriken, Küchen oder Lagerhallen – wir bieten maßgeschneiderte Entwässerungslösungen, die auf Ihre Bedürfnisse abgestimmt sind. Kontaktieren Sie NEO Building für eine fachkundige Beratung und leistungsstarke Systeme, die über Jahre hinweg zuverlässige Ergebnisse liefern.",
        keywords:
          "NEOX Entwässerungssysteme, Edelstahl Entwässerungssysteme, Edelstahl Drainagesysteme, Industrieböden und Entwässerung, maßgeschneiderte Entwässerungslösungen, Entwässerungssysteme für Fabriken, Entwässerungssysteme für Lagerhallen, Entwässerungssysteme für Küchen, NEOX Drainage Köln, Edelstahl Entwässerung Köln, Industrie Entwässerung, nahtlose Entwässerungssysteme, langlebige Entwässerungssysteme, hochwertige Entwässerungslösungen, professionelle Entwässerungslösungen, Industrie Abflusssysteme",
      },

      pageContent: {
        siteHeader: "Edelstahl Bauelemente",
        siteCrum: "NEOX",
        siteHeader2: "Wir finden die Lösung für Ihre Ideen!",
        // Page Intro
        pageIntroHeader: "Edelstahl Arbeit",
        pageIntroDescription: "Komplette Edelstahlelemente, beispielsweise:",
        pageIntroPointOne: "Wandelemente",
        pageIntroPointTwo: "Wandverkleidungen",
        pageIntroPointThree: "Rammschutz Elemente",
        pageIntroPointFour: "Treppen & Geländer",
        pageIntroPointFive: "Weiteres",
        pageIntroHeader2: "Qualität",
        pageIntroDescription2:
          "NEOX Edelstahlkomponenten bieten eine Reihe hochwertiger, langlebiger Lösungen für verschiedene industrielle Anwendungen.",
        pageIntroDescription3:
          "Von Wandelementen und Verkleidungen bis hin zu Treppen, Geländern und Schutzvorrichtungen – unsere Produkte sind auf die höchsten Anforderungen ausgelegt. ",
        pageIntroDescription4:
          "Ob strukturelle Elemente oder Sicherheitsfeatures, NEOX bietet vielseitige, präzisionsgefertigte Komponenten aus bestem Edelstahl, die Langlebigkeit und Funktionalität gewährleisten.",
        pageIntroDescription5:
          "Entdecken Sie, wie unsere maßgeschneiderten Lösungen Ihre Räume mit Stil und Zuverlässigkeit verbessern und sowohl Sicherheit als auch Raffinesse bieten.",
        pageInroToGallery: "Bilder Sprechen Lassen",
        pageInroToContact: "Anfrage Starten",
        //   Call to action examples
        callToActionHeaderExamples: "Projekt Erfahrung",
        callToActionDescriptionExamples:
          "Wir stellen extrem hohe Anforderungen an das von uns verwendete Material, an die Form und die Funktionalität. Das Design unserer Produkte ist zeitlos. Unser Ziel war und ist es, dass Sie viele Jahre Freude an unseren Produkten haben. Alle Produkte werden von uns selbst konstruiert: vom Prototyp bis zur Serienreife, mit umfangreichen Tests, damit die Produkte Ihnen wirklich nachhaltigen Nutzen bringen.",
        callToActionLinkExamples: "Referenzen",
        // Slider Sectios
        beforeAfterTitle: "Vorher | Nachher",
        // Image Section Content
        filterAll: "Edelstahlbauelemente",
        pleaseNote:
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes Einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",
        //   Image Titles
        descriptionImages:
          "NEOX Edelstahlkomponenten bieten eine Reihe hochwertiger, langlebiger Lösungen für verschiedene industrielle Anwendungen.",
        goToProjects: "Referenzen",
        goToPrivate: "Anfrage Starten",
        titleImages: "Edelstahlbauelemente",
        // more Link
        moreInfo: "Mehr Erfahren",
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

  let productIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 200;
  const pauseTime = 4000;
  const deleteSpeed = 100;

  let typeTimeout;

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
    applyTranslation(
      "constructionsNeovision",
      translations[currentLang].constructionsNeovision
    );

    let contactText = document.querySelectorAll(".contactText");
    contactText.forEach(
      (text) =>
        (text.innerText = translations[currentLang].pageContent.contactText)
    );
    let descriptionHotels = document.querySelectorAll(".descriptionHotels");
    descriptionHotels.forEach((descriptionHotel) => {
      descriptionHotel.innerText =
        translations[currentLang].pageContent.descriptionHotels;
    });
    let descriptionPolaroids = document.querySelectorAll(
      ".descriptionPolaroid"
    );
    descriptionPolaroids.forEach((descriptionPolaroid) => {
      descriptionPolaroid.innerText =
        translations[currentLang].pageContent.descriptionPolaroid;
    });
    let descriptionMarss = document.querySelectorAll(".descriptionMars");
    descriptionMarss.forEach((descriptionMars) => {
      descriptionMars.innerText =
        translations[currentLang].pageContent.descriptionMars;
    });
    let titleMarsNews = document.querySelectorAll(".titleMarsNew");
    titleMarsNews.forEach((titleMarsNew) => {
      titleMarsNew.innerText =
        translations[currentLang].pageContent.titleMarsNew;
    });
    let titlePolaroidNews = document.querySelectorAll(".titlePolaroidNew");
    titlePolaroidNews.forEach((titlePolaroidNew) => {
      titlePolaroidNew.innerText =
        translations[currentLang].pageContent.titlePolaroidNew;
    });
    let titleMarsConstructions = document.querySelectorAll(
      ".titleMarsConstruction"
    );
    titleMarsConstructions.forEach((titleMarsConstruction) => {
      titleMarsConstruction.innerText =
        translations[currentLang].pageContent.titleMarsConstruction;
    });
    let titlePolaroidConstructions = document.querySelectorAll(
      ".titlePolaroidConstruction"
    );
    titlePolaroidConstructions.forEach((titlePolaroidConstruction) => {
      titlePolaroidConstruction.innerText =
        translations[currentLang].pageContent.titlePolaroidConstruction;
    });
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
