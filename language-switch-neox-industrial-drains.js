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
        siteHeader: "Industrial Drainages",
        siteCrum: "NEOX",
        siteHeader2: "We bring your ideas to life!",
        // Page Intro
        pageIntroHeader: "Stainless Steel Drainage",
        pageIntroDescription:
          "Stainless steel drainage technology for production areas, warehouses, washing rooms/kitchens, outdoor areas, and more.",
        pageIntroPointOne:
          "Channel bodies and drains made entirely of stainless steel.",
        pageIntroPointTwo: "Custom designs as standard.",
        pageIntroPointThree:
          "Seamless transition to <a href='../neoxid-industrial-flooring/' target='_blank'>NEOXID Industrial Flooring</a>",
        pageIntroHeader2: "Quality",
        pageIntroDescription2:
          "Discover our versatile NEOX industrial drainage systems, made from high-quality stainless steel to meet the needs of various industries.",
        pageIntroDescription3:
          "From seamless installations to custom solutions – our systems are designed to optimize environments such as factories, warehouses, and kitchens. Browse our project selection and experience the precision and durability of our work.",
        pageIntroDescription4:
          "If you have any questions or are unsure whether we can assist you, feel free to contact us. Our team looks forward to providing you with expert advice and finding the ideal solution.",
        pageInroToGallery: "Let the images speak",
        pageInroToContact: "Start Inquiry",
        //   Call to action examples
        callToActionHeaderExamples: "Project Experience",
        callToActionDescriptionExamples:
          "We place extremely high demands on the materials we use, as well as on form and functionality. The design of our products is timeless. Our goal has always been, and continues to be, to ensure that you enjoy our products for many years. All products are designed in-house: from prototype to mass production, with extensive testing to ensure they provide lasting benefits.",
        callToActionLinkExamples: "References",
        // Slider Sectios
        beforeAfterTitle: "Before | After",
        // Image Section Content
        filterAll: "Stainless Steel Drainage",
        pleaseNote:
          "They say a picture is worth a thousand words. Here, each one speaks of dedication, innovation, and the beauty of precise craftsmanship.",
        //   Image Titles
        descriptionImages:
          "Discover our versatile NEOX industrial drainage systems, made from high-quality stainless steel to meet the demands of various industries.",
        goToProjects: "References",
        goToPrivate: "Start Inquiry",
        titleImages: "Industrial drainage systems made from stainless steel",
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
        siteHeader: "Industrie Entwässerung",
        siteCrum: "NEOX",
        siteHeader2: "Wir finden die Lösung für Ihre Ideen!",
        // Page Intro
        pageIntroHeader: "Edelstahl Entwässerung",
        pageIntroDescription:
          "Edelstahl Entwässerungstechnologie für Produktionsräume, Lagerhallen, Spulräume/-küchen, Außenbereiche und mehr.",
        pageIntroPointOne: "Rinnenkörper und Abläufe komplett aus Edelstahl",
        pageIntroPointTwo: "Sonderanfertigungen als Standard",
        pageIntroPointThree:
          "Nahtloser Übergang zu <a href='../neoxid-industrial-flooring/' target='_blank'>NEOXID Industrieböden</a>",
        pageIntroHeader2: "Qualität",
        pageIntroDescription2:
          "Entdecken Sie unsere vielseitigen NEOX Industrie-Entwässerungssysteme, die aus hochwertigem Edelstahl gefertigt sind, um den Anforderungen verschiedenster Industrien gerecht zu werden.",
        pageIntroDescription3:
          "Von nahtlosen Installationen bis hin zu maßgeschneiderten Lösungen – unsere Systeme wurden entwickelt, um Umgebungen wie Fabriken, Lagerhallen und Küchen zu optimieren. Durchstöbern Sie unsere Projektauswahl und erleben Sie die Präzision und Langlebigkeit unserer Arbeit.",
        pageIntroDescription4:
          "Falls Sie Fragen haben oder sich unsicher sind, ob wir Ihnen weiterhelfen können, kontaktieren Sie uns gerne. Unser Team freut sich darauf, Sie fachkundig zu beraten und die ideale Lösung zu finden.",
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
        filterAll: "Edelstahl Entwässerung",
        pleaseNote:
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",
        //   Image Titles
        descriptionImages:
          "Entdecken Sie unsere vielseitigen NEOX Industrie-Entwässerungssysteme, die aus hochwertigem Edelstahl gefertigt sind, um den Anforderungen verschiedenster Industrien gerecht zu werden.",
        goToProjects: "Referenzen",
        goToPrivate: "Anfrage Starten",
        titleImages: "Industrie Entwässerung aus Edelstahl",
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
