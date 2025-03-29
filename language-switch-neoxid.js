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
        title: "NEOXID Industrial Flooring in Cologne | NEO Building",
        description:
          "NEO Building offers NEOXID tailored industrial flooring solutions, ideal for production areas, kitchens, and warehouses. Our seamless, durable floors are highly resistant to heat and chemicals. For integrated stainless steel systems like NEOX drainage, we provide custom solutions that enhance performance. Get in touch for your project in Cologne.",
        keywords:
          "NEO Building, NEOXID industrial flooring, seamless industrial floors, epoxy flooring, polyurethane floors, NEOX drainage systems, custom industrial flooring, Cologne flooring solutions, high-resistance floors, industrial coatings",
      },

      pageContent: {
        siteHeader: "Industrial flooring",
        siteCrum: "NEOXID",
        siteHeader2: "We bring your ideas to life!",
        // Page Intro
        pageIntroHeader: "Tailored to your requirements",
        pageIntroPointOne:
          "Industrial flooring for production areas, kitchens, warehouses...",
        pageIntroPointTwo:
          "Offer high resistance to heat and chemicals (e.g., industrial cleaning agents)",
        pageIntroPointThree: "Easy to clean as there are no grout lines.",
        pageIntroPointFour:
          "Seamless transition to <a href='../neox-industrial-drainage-systems/' target='_blank'>NEOX industrial drainage systems made of stainless steel</a>",
        pageIntroHeader2: "Industrial flooring",
        pageIntroDescription2: "We implement",
        pageIntroPointFive: "Durable and resilient flooring solutions for",
        pageIntroPointSix: "Factories, industrial kitchens, and warehouses",
        pageIntroPointSeven: "With or without customized drainage systems",
        pageIntroDescription3: "Our focus is on",
        pageIntroPointEight:
          "the implementation according to the individual wishes and requirements of our customers and partners.",
        // Section
        pageInroToGallery: "Start Inquiry",
        // Slider before After
        beforeAfterTitle: "Before | After",
        //   Call to action examples
        callToActionHeaderExamples: "Project Experience",
        callToActionDescriptionExamples:
          "We place extremely high demands on the materials we use, on the form, and on the functionality. The design of our products is timeless. Our goal has always been, and continues to be, to ensure that you enjoy our products for many years. All products are designed by us: from the prototype to serial production, with extensive testing to ensure that the products truly provide sustainable benefits to you.",
        callToActionLinkExamples: "References",
        // more info buttons
        moreInfo: "Learn more",
      },

      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title: "NEOXID Industrieboden in Köln | NEO Building",
        description:
          "NEO Building bietet maßgeschneiderte NEOXID Industrieböden, ideal für Produktionsflächen, Küchen und Lagerhallen. Unsere nahtlosen, strapazierfähigen Böden sind hochresistent gegenüber Wärme und Chemikalien. Für integrierte Edelstahl-Systeme wie NEOX Entwässerung bieten wir individuelle Lösungen zur Leistungssteigerung. Kontaktieren Sie uns für Ihr Projekt in Köln.",
        keywords:
          "NEO Building, NEOXID Industrieboden, nahtlose Industrieböden, Epoxidharzboden, Polyurethanböden, NEOX Entwässerungssysteme, maßgeschneiderte Industrieböden, Bodenlösungen Köln, widerstandsfähige Böden, industrielle Beschichtungen",
      },

      pageContent: {
        siteHeader: "Industrieböden",
        siteCrum: "NEOXID",
        siteHeader2: "Wir finden die Lösung für Ihre Ideen!",
        // Page Intro
        pageIntroHeader: "Maßgeschneidert für Ihre Anforderungen",
        pageIntroPointOne:
          "Industrieböden für Produktionflächen, Küchen, Lagerhallen...",
        pageIntroPointTwo:
          "Bieten hohe Widerstandsfähigkeit gegen Wärme und Chemikalien (Bspw.Industrielle-Reinigungsmittel)",
        pageIntroPointThree: "Leichte Reinigung da keine Fugen vorhanden sind.",
        pageIntroPointFour:
          "Nahtloser Übergang zu <a href='../neox-industrial-drainage-systems/' target='_blank'>NEOX Industrieentwässerung aus Edelstahl</a>",
        pageIntroHeader2: "Industrieböden",
        pageIntroDescription2: "Wir realisieren",
        pageIntroPointFive: "langlebige und belastbare Bodenlösungen für",
        pageIntroPointSix: "Fabriken, Industrieküchen und Lagerhallen",
        pageIntroPointSeven:
          "mit oder ohne maßgeschneiderte Entwässerungssysteme",
        pageIntroDescription3: "Unser Fokus liegt auf",
        pageIntroPointEight:
          "der Umsetzung nach den individuellen Wünschen und Anforderungen unserer Kunden und Partner",
        // Section
        pageInroToGallery: "Anfrage Starten",
        // Slider before After
        beforeAfterTitle: "Vorher | Nachher",
        //   Call to action examples
        callToActionHeaderExamples: "Projekt Erfahrung",
        callToActionDescriptionExamples:
          "Wir stellen extrem hohe Anforderungen an das von uns verwendete Material, an die Form und die Funktionalität. Das Design unserer Produkte ist zeitlos. Unser Ziel war und ist es, dass Sie viele Jahre Freude an unseren Produkten haben. Alle Produkte werden von uns selbst konstruiert: vom Prototyp bis zur Serienreife, mit umfangreichen Tests, damit die Produkte Ihnen wirklich nachhaltigen Nutzen bringen.",
        callToActionLinkExamples: "Referenzen",
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
      "constructionsNeoxDrains",
      translations[currentLang].constructionsNeoxDrains
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
