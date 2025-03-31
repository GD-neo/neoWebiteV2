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
          "NEOX Stainless Steel Profiles by NEO Building: Custom-Made Solutions for Your Projects | High-Quality and Precision",
        description:
          "NEOX stainless steel profiles by NEO Building are crafted with the highest standards and tailored to meet the specific dimensions of our customers. Whether you're looking for standard or custom-made profiles, we offer a wide range of solutions for your construction and architectural projects. Located in Cologne, Germany, we provide exceptional quality and expert consulting for all your stainless steel profile needs, including U-profiles, T90 profiles, and more.",
        keywords:
          "NEOX stainless steel profiles, stainless steel profiles Cologne, stainless steel profiles Germany, custom stainless steel profiles, made-to-measure stainless steel profiles, NEO Building, stainless steel U-profiles, stainless steel T90 profiles, stainless steel tile profiles, PVD coating stainless steel, stainless steel profiles for construction projects, quality stainless steel profiles, custom-made stainless steel profiles, stainless steel profiles for architecture, professional stainless steel profile consulting, stainless steel profiles for industrial applications",
      },

      pageContent: {
        siteHeader: "Profiles",
        siteCrum: "NEOX",
        siteHeader2: "We bring your ideas to life!",
        // Page Intro
        pageIntroHeader: "Profiles made of stainless steel",
        pageIntroDescription:
          "NEOX stainless steel profiles are manufactured with the highest standards and customized to the desired dimensions of our customers.",
        pageIntroHeader2: "Philosophy",
        pageIntroDescription2:
          "If you cannot find what you're looking for in our standard profiles or would like to have your own profile made, please contact us. We will find the solution for your ideas.",
        pageIntroPointOne: "Stainless Steel Profiles",
        pageIntroPointTwo: "Custom Fabrications/Custom Sizes Available",
        pageIntroPointThree: "PVD Coating Available Upon Request",
        pageIntroDescription3:
          "We offer various solutions for profiles tailored to your needs and planning.",
        pageInroToGallery: "View Images",
        // Call to action references
        callToActionHeader: "Project Experience",
        callToActionDescription:
          "We set extremely high standards for the materials we use, as well as for the shape and functionality of our products. The design of our products is timeless. Our goal has always been, and continues to be, to ensure that you enjoy our products for many years to come. All of our products are designed in-house: from the prototype to series production, including extensive testing to guarantee lasting value and reliability.",
        callToActionLink: "References",

        //   Call to action examples
        callToActionHeaderExamples: "We find the solution for your ideas!",
        callToActionDescriptionExamples:
          "In addition to our commitment to project business, we have always offered our products to private clients. Benefit from our years of experience in realizing your private construction project. We bring your ideas for a personalized design in space to life. With the highest precision. With products developed by us. Exclusively manufactured in Germany.",
        callToActionLinkExamples: "References",
        //   Call to action gallery
        callToActionHeaderGallery: "Further Insights",
        callToActionDescriptionGallery:
          "They say a picture is worth a thousand words. Here, each one speaks of dedication, innovation, and the beauty of precise craftsmanship.",
        callToActionLinkGallery: "Gallery",
        // Image Section Content
        filterAll: "All",
        filterDrains: "Drains",
        pleaseNote:
          "They say an image is worth a thousand words. Here, each one speaks of dedication, innovation, and the beauty of precision craftsmanship.",
        descriptionChannelE:
          "Complete set made of stainless steel with integrated elegant design drain profile made of solid stainless steel.",
        descriptionChannelX:
          "Complete set made of stainless steel with reversible insert: cover made of brushed stainless steel or usable as a tile recess.",
        descriptionChannelS:
          "Complete set made of stainless steel, wall upstands available, popular in the project sector.",
        descriptionChannelDrains:
          "Stainless steel drains, available in 3 basic variants.",
        goToProjects: "References",
        goToPrivate: "Start inquiry",
        // more info buttons
        moreInfo: "Learn more",
      },
      constructionsNeoxProfiles: {
        h2Glas: "Overview",
        pageIntroDescription4:
          "If you do not find what you are looking for in our standard profiles or would like to have your own profile manufactured, contact us. We will find the solution for your ideas.",
        // Feature Section
        featureMore: "Profil DF",
        // NEOX Profil U
        featureProfilUTitle:
          "<span class='custom-green'>NEO</span>X Profil U made of stainless steel",
        featureProfilUtoVideo:
          "Profil U made of stainless steel visualization - video",
        featureProfilUPointOne:
          "Stainless steel U-profile for screwing or gluing to the wall",
        featureProfilUPointTwo:
          "U-profile with slight prestress for easy glass fixation",
        featureProfilUPointThree:
          "No sharp edges at the transition from profile to glass (edges flanged)",
        featureProfilUPointFour:
          "Also suitable for ceiling installation for floor-to-ceiling glazing",
        featureProfilUPointFive:
          "High-quality stainless steel U-profile with a brilliant surface",
        featureProfilUPointSix: "PVD coating available on request",
        // NEOX Profil UW nicht U
        featureProfilUWTitle:
          "<span class='custom-green'>NEO</span>X Profil UW made of stainless steel",
        featureProfilUWtoVideo:
          "Profil UW made of stainless steel visualization - video",
        featureProfilUWPointOne:
          "Stainless steel U-profile with support leg for tiles",
        featureProfilUWPointTwo:
          "U-profile with slight pre-tension for easy glass fixation",
        featureProfilUWPointThree:
          "No sharp edges at the profile-to-glass transition (edges turned over)",
        featureProfilUWPointFour: "For wall and floor installation",
        featureProfilUWPointFive: "Custom designs/special sizes available",
        // NEOX Profil T90
        featureProfilT90Title:
          "<span class='custom-green'>NEO</span>X Profil T90 made of stainless steel",
        featureProfilT90toVideo:
          "Profil T90 made of stainless steel visualization - video",
        featureProfilT90PointOne: "Stainless Steel T90 Stair Profile",
        featureProfilT90PointTwo: "Step Edge Protection in Various Designs",
        featureProfilT90PointThree: "Tile Profile of High Stability",
        featureProfilT90PointFour: "Easy to Install",
        featureProfilT90PointFive:
          "Brilliant appearance with polished stainless steel",
        featureProfilT90PointSix: "Also perfectly suitable for door frames",
        // NEOX Profil DF
        featureProfilDFTitle:
          "<span class='custom-green'>NEO</span>X Profil DF made of stainless steel",
        featureProfilDFPointOne:
          "Expansion joint profile made of stainless steel",
        featureProfilDFPointTwo:
          "High-quality composite material between the stainless steel elements",
        featureProfilDFPointThree: "Custom fabrications/custom sizes available",
        // NEOX profile Slider Section
        siteHeaderSlider: "Images",
        sliderFilterMore: "More",
        titleSliderU: "NEOX U-profile made of stainless steel",
        titleSliderUW: "NEOX UW profile made of stainless steel",
        titleSliderT90: "NEOX T90 profile made of stainless steel",
        titleSlidermore: "NEOX profiles made of stainless steel",
        textSliderAll:
          "NEOX profiles made of stainless steel are manufactured to the highest standards and tailored to the desired dimensions of our customers. If you cannot find what you are looking for in our standard profiles or wish to have your own profile made, please contact us. We will find the solution for your ideas.",
      },
      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title:
          "NEOX Edelstahlprofile von NEO Building: Maßgeschneiderte Lösungen für Ihre Projekte | Hochwertig und Präzise",
        description:
          "Entdecken Sie NEO Building's NEOX Edelstahlprofile aus Köln, Deutschland – perfekte Maßanfertigungen für Ihre Projekte. Unsere Profile bieten erstklassige Qualität, Präzision und Anpassungsfähigkeit für jede Anwendung. Kontaktieren Sie uns für individuelle Lösungen und professionelle Beratung.",
        keywords:
          "NEOX Edelstahlprofile, Edelstahlprofile Köln, Edelstahlprofile Deutschland, maßgefertigte Edelstahlprofile, Edelstahlprofile nach Maß, NEO Building, Edelstahl U-Profile, Edelstahl T90 Profile, Fliesenprofile aus Edelstahl, PVD-Beschichtung Edelstahl, Edelstahlprofile für Bauprojekte, Qualitäts Edelstahlprofile, Sonderanfertigungen Edelstahlprofile, Edelstahlprofile für Architektur, professionelle Beratung Edelstahlprofile, Edelstahlprofile für Industrieanwendungen",
      },

      pageContent: {
        siteHeader: "Profile",
        siteCrum: "NEOX",
        siteHeader2: "Wir finden die Lösung für Ihre Ideen!",
        // Page Intro
        pageIntroHeader: "Profile aus Edelstahl",
        pageIntroDescription:
          "NEOX Profile aus Edelstahl werden mit höchsten Ansprüchen gefertigt und an die gewünschten Dimensionen unserer Kunden angepasst.",
        pageIntroHeader2: "Philosophie",
        pageIntroDescription2:
          "Sollten Sie bei unseren Standard Profilen nicht fündig werden oder Ihr eigenes Profil fertigen lassen wollen, kontaktieren Sie uns. Wir finden die Lösung für Ihre Ideen.",
        pageIntroPointOne: "Edelstahl Profile",
        pageIntroPointTwo: "Sonderanfertigungen/Sondermaße möglich",
        pageIntroPointThree: "PVD-Beschichtung auf Wunsch möglich",
        pageIntroDescription3:
          "Wir bieten Ihnen verschiedene Lösungen für Profile ganz auf Ihre Bedürfnisse und Planung zugeschnitten.",
        pageInroToGallery: "Bilder Ansehen",
        // Call to action references
        callToActionHeader: "Projekt Erfahrung",
        callToActionDescription:
          "Wir stellen extrem hohe Anforderungen an das von uns verwendete Material, an die Form und die Funktionalität. Das Design unserer Produkte ist zeitlos. Unser Ziel war und ist es, dass Sie viele Jahre Freude an unseren Produkten haben. Alle Produkte werden von uns selbst konstruiert: vom Prototyp bis zur Serienreife, mit umfangreichen Tests, damit die Produkte Ihnen wirklich nachhaltigen Nutzen bringen.",
        callToActionLink: "Referenzen",

        //   Call to action examples
        callToActionHeaderExamples: "Wir finden die Lösung für Ihre Ideen!",
        callToActionDescriptionExamples:
          "Nutzen sie unsere langjährige Erfahrung für die Realisierung Ihres Bauvorhabens. Wir lassen Ihre Ideen für eine individuelle Gestaltung im Raum Realität werden. Mit höchster Präzision. Mit von uns entwickelten Produkten. Ausschließlich in Deutschland gefertigt.",
        callToActionLinkExamples: "Referenzen",

        //   Call to action examples
        callToActionHeaderExamples: "Wir finden die Lösung für Ihre Ideen!",
        callToActionDescriptionExamples:
          "Nutzen sie unsere langjährige Erfahrung für die Realisierung Ihres Bauvorhabens. Wir lassen Ihre Ideen für eine individuelle Gestaltung im Raum Realität werden. Mit höchster Präzision. Mit von uns entwickelten Produkten. Ausschließlich in Deutschland gefertigt.",
        //   Call to action gallery
        callToActionHeaderGallery: "Weitere Einblicke",
        callToActionDescriptionGallery:
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes Einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",
        callToActionLinkGallery: "Galerie",

        // Image Section Content
        filterAll: "Alle",
        filterDrains: "Abläufe",

        pleaseNote:
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes Einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",
        descriptionChannelE:
          "Komplett-Set aus Edelstahl mit integriertem elegantem Design-Ablaufprofil aus massivem Edelstahl",
        descriptionChannelX:
          "Komplett-Set aus Edelstahl mit einsatz wendbar: Abdeckung aus Edelstahl gebürstet oder als Fliesenmulde nutzbar",
        descriptionChannelS:
          "Komplett-Set aus Edelstahl, Wandaufkantungen Möglich, Beliebt im Projektbereich",
        descriptionChannelDrains: "Edelstahl Abläufe, in 3 Grund-Varianten",
        goToProjects: "Referenzen",
        goToPrivate: "Anfrage Starten",
        titleChannelE: "Channel E",
        titleChannelX: "Channel X",
        titleChannelS: "Channel S",
        titleChannelDrains: "Abläufe",
        // more Link
        moreInfo: "Mehr Erfahren",
      },
      constructionsNeoxProfiles: {
        h2Glas: "Übersicht",
        pageIntroDescription4:
          "Sollten Sie bei unseren Standard Profilen nicht fündig werden oder Ihr eigenes Profil fertigen lassen wollen, kontaktieren Sie uns. Wir finden die Lösung für Ihre Ideen.",
        // Feature Section
        featureMore: "Profil DF",
        // NEOX Profil U
        featureProfilUTitle:
          "<span class='custom-green'>NEO</span>X Profil U aus Edelstahl",
        featureProfilUtoVideo: "Profil U aus Edelstahl Visualisierug - Video",
        featureProfilUPointOne:
          "Edelstahl U-Profil zum Verschrauben oder Verkleben an der Wand",
        featureProfilUPointTwo:
          "U-Profil mit leichter Vorspannung zur einfachen Glasfixierung",
        featureProfilUPointThree:
          "Keine scharfen Kanten beim Übergang Profil zu Glas (Kanten umbördelt)",
        featureProfilUPointFour:
          "Auch zur Deckenmontage geeignet für raumhohe Verglasung",
        featureProfilUPointFive:
          "Hochwertiges Edelstahl U-Profil mit brillanter Oberfläche",
        featureProfilUPointSix: "PVD-Beschichtung auf Wunsch möglich",
        // NEOX Profil UW nicht U
        featureProfilUWTitle:
          "<span class='custom-green'>NEO</span>X Profil UW aus Edelstahl",
        featureProfilUWtoVideo: "Profil UW aus Edelstahl Visualisierug - Video",
        featureProfilUWPointOne:
          "Edelstahl U-Profil mit Auflageschenkel für Fliesen",
        featureProfilUWPointTwo:
          "U-Profil mit leichter Vorspannung zur einfachen Glasfixierung",
        featureProfilUWPointThree:
          "Keine scharfen Kanten beim Übergang Profil zu Glas (Kanten umbördelt)",
        featureProfilUWPointFour: "Für Wand- und Bodenmontage",
        featureProfilUWPointFive: "Sonderanfertigungen/Sondermaße möglich",
        // NEOX Profil T90
        featureProfilT90Title:
          "<span class='custom-green'>NEO</span>X Profil T90 aus Edelstahl",
        featureProfilT90toVideo:
          "Profil UW aus Edelstahl Visualisierug - Video",
        featureProfilT90PointOne: "Edelstahl T90 Treppenprofil",
        featureProfilT90PointTwo:
          "Stufenkantenschutz in verschiedenen Ausführungen",
        featureProfilT90PointThree: "Fliesenprofil von hoher Stabilität",
        featureProfilT90PointFour: "Leicht zu montieren",
        featureProfilT90PointFive: "Brillante Optik durch polierten Edelstahl",
        featureProfilT90PointSix: "Auch für Türlaibungen hervorragend geeignet",
        // NEOX Profil DF
        featureProfilDFTitle:
          "<span class='custom-green'>NEO</span>X Profil DF aus Edelstahl",
        featureProfilDFPointOne: "Dehnfugen-Profil aus Edelstahl",
        featureProfilDFPointTwo:
          "Hochwertiger Verbundwerkstoff zwischen den Edelstahlelementen",
        featureProfilDFPointThree: "Sonderanfertigungen/Sondermaße möglich",
        // NEOX profile Slider Section
        siteHeaderSlider: "Bilder",
        sliderFilterMore: "Weitere",
        titleSliderU: "NEOX Profil U aus Edelstahl",
        titleSliderUW: "NEOX Profil UW aus Edelstahl",
        titleSliderT90: "NEOX Profil T90 aus Edelstahl",
        titleSlidermore: "NEOX Profile aus Edelstahl",
        textSliderAll:
          "NEOX Profile aus Edelstahl werden mit höchsten Ansprüchen gefertigt und an die gewünschten Dimensionen unserer Kunden angepasst. Sollten Sie bei unseren Standard Profilen nicht fündig werden oder Ihr eigenes Profil fertigen lassen wollen, kontaktieren Sie uns. Wir finden die Lösung für Ihre Ideen.",
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
      "constructionsNeoxProfiles",
      translations[currentLang].constructionsNeoxProfiles
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
