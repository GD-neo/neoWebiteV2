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
          "RENOBOX by NEO Building: Sustainable Bathroom and Wellness Space Modernization | Made in Germany",
        description:
          "RENOBOX by NEO Building offers a sustainable and high-quality solution for modernizing bathrooms, wellness areas, and living spaces. Crafted with precision in Germany, our innovative design combines our vast experience with glass—such as shower enclosures, mirrors, and room dividers—and stainless steel, including drainage systems. Focusing on durability, functionality, and style, the RENOBOX ensures a seamless transformation of your space.",
        keywords:
          "RENOBOX, sustainable bathroom modernization, wellness space renovation, bathroom design, German engineering, shower enclosures, mirrors, room dividers, stainless steel drainage systems, made in Germany, bathroom solutions, high-quality bathroom renovation, functional design, modern living spaces, NEO Building, eco-friendly bathroom solutions, custom bathroom products",
      },

      pageContent: {
        siteHeader: "RENOBOX",
        siteCrum: "RENOBOX",
        siteHeader2: "We bring your ideas to life!",
        // Page Intro
        pageIntroHeader: "The modular solution for modern bathrooms.",
        pageIntroDescription:
          "Developed with German engineering expertise and a focus on sustainability, RENOBOX enables easy and high-quality modernization of bathrooms, wellness, and living spaces.",
        pageIntroDescription2:
          "Made in Germany, this innovative concept stands for durable design, functionality, and stylish aesthetics.",

        pageIntroHeader2: "RENOBOX by Neo Building",
        pageInroToGallery: "Play Concept Film",
        //   Call to action examples
        callToActionHeaderExamples: "We find the solution for your ideas!",
        callToActionDescriptionExamples:
          "In addition to our commitment to project business, we have always offered our products to private clients. Benefit from our years of experience in realizing your private construction project. We bring your ideas for a personalized design in space to life. With the highest precision. With products developed by us. Exclusively manufactured in Germany.",
        callToActionLinkExamples: "References",
        // more info buttons
        moreInfo: "Learn more",
      },

      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title:
          "RENOBOX von NEO Building: Nachhaltige Modernisierung von Bädern und Wellnessräumen | Made in Germany",
        description:
          "RENOBOX von NEO Building bietet eine nachhaltige und hochwertige Lösung für die Modernisierung von Bädern, Wellnessbereichen und Wohnräumen. Mit Präzision in Deutschland gefertigt, vereint unser innovatives Design unsere umfassende Erfahrung mit Glas – wie Duschabtrennungen, Spiegeln und Raumteilern – sowie Edelstahl, einschließlich Drainagesystemen. Fokussiert auf Langlebigkeit, Funktionalität und Stil sorgt die RENOBOX für eine nahtlose Transformation Ihres Raums.",
        keywords:
          "RENOBOX, nachhaltige Badezimmermodernisierung, Wellnessbereich Renovierung, Badezimmerdesign, deutsche Ingenieurskunst, Duschabtrennungen, Spiegel, Raumteiler, Edelstahl Drainagesysteme, Made in Germany, Badezimmerlösungen, hochwertige Badezimmerrenovierung, funktionales Design, moderne Wohnräume, NEO Building, umweltfreundliche Badezimmerlösungen, maßgeschneiderte Badezimmerprodukte",
      },

      pageContent: {
        siteHeader: "RENOBOX",
        siteCrum: "RENOBOX",
        siteHeader2: "Wir finden die Lösung für Ihre Ideen!",
        // Page Intro
        pageIntroHeader: "Die modulare Lösung für moderne Bäder.",
        pageIntroDescription:
          "Mit deutscher Ingenieurskunst und einem Fokus auf Nachhaltigkeit entwickelt, ermöglicht RENOBOX eine einfache und hochwertige Modernisierung von Bädern, Wellness- und Wohnräumen.",
        pageIntroDescription2:
          "Gefertigt in Deutschland, steht dieses innovative Konzept für langlebiges Design, Funktionalität und eine stilvolle Gestaltung.",

        pageIntroHeader2: "RENOBOX von Neo Building",
        pageInroToGallery: "Konzept Film Abspielen",
        //   Call to action examples
        callToActionHeaderExamples: "Wir finden die Lösung für Ihre Ideen!",
        callToActionDescriptionExamples:
          "Nutzen sie unsere langjährige Erfahrung für die Realisierung Ihres Bauvorhabens. Wir lassen Ihre Ideen für eine individuelle Gestaltung im Raum Realität werden. Mit höchster Präzision. Mit von uns entwickelten Produkten. Ausschließlich in Deutschland gefertigt.",
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
