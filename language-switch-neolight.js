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
          "Custom Mirrors & LED Mirrors | NEOLIGHT by Kienle | High-Quality, Tailored Designs | Neo Building",
        description:
          "Discover high-quality, custom-made mirrors and LED mirrors from NEOLIGHT by Kienle in Cologne, Germany. Perfect for modern bathrooms, our products offer customizable sizes, durable LED technology, and elegant designs. Whether with mirror heating, invisible mounting, or flexible placement of lighting elements – we tailor our mirror solutions to your requirements and space planning. Ideal for new builds and renovations. Quality made in Germany.",
        keywords:
          "mirrors, LED mirrors, custom mirrors, LED bathroom mirrors, mirrors with heating, custom LED mirrors, mirrors Cologne, LED mirrors Cologne, NEOLIGHT, stainless steel mirrors, modern mirrors, made-to-measure mirrors, bathroom mirrors, mirror installation, high-quality mirrors, designer mirrors, LED light mirrors, mirrors for renovation, customizable mirrors, NEOLIGHT by Kienle",
      },

      pageContent: {
        siteHeader: "Mirrors",
        siteCrum: "NEOLIGHT",
        siteHeader2: "We bring your ideas to life!",
        // Page Intro
        pageIntroHeader: "Made to measure for you",
        pageIntroDescription:
          "Our mirrors and illuminated mirrors are custom-made to your required dimensions. The illuminated mirrors are equipped with high-quality lighting elements, available in your desired wattage (power) and light color (warm white/cool white). We tailor our product to fit your space planning.",
        pageIntroDescription2:
          "Due to their extremely slim wall construction and minimalist design, the mirrors and illuminated mirrors are a standout feature in any bathroom.",
        pageIntroDescription3:
          "Especially in project planning, design requires the highest level of flexibility. With our custom-made solutions, we can cater to your ideas and support you in realizing your creativity down to the finest detail.",
        pageIntroDescription4:
          "All our mirrors are suitable for humid environments. The substructure of the illuminated mirrors varies depending on the construction project and requirements.",
        pageIntroHeader2: "Brilliance in the Bathroom",
        pageInroToGallery: "View Images",
        pageInroToGallery: "View Images",
        // Call to action references
        callToActionHeader: "Project Experience",
        callToActionDescription:
          "We set extremely high standards for the materials we use, as well as for the shape and functionality of our products. The design of our products is timeless. Our goal has always been, and continues to be, to ensure that you enjoy our products for many years to come. All of our products are designed in-house: from the prototype to series production, including extensive testing to guarantee lasting value and reliability.",
        callToActionLink: "References",
        // Mirrors Section Content
        neovisionContentHeader: "Mirrors and Illuminated Mirrors",
        neovisionContentPoint1: "Minimal wall distance",
        neovisionContentPoint2: "Durable LED lighting",
        neovisionContentPoint3: "Invisible mounting",
        neovisionContentPointDescription:
          "During our many years of collaboration with project developers, engineers, and architects, we have been repeatedly faced with new challenges for which solutions needed to be developed. Our goal is to offer solutions for these diverse tasks with our expertise.",
        neovisionContentPoint4: "Custom widths and special solutions available",
        neovisionContentPoint5:
          "Vertical and/or horizontal placement of the lighting elements",
        neovisionContentPoint6:
          "Placement of the light sources within the mirror surface is customizable.",
        neovisionContentPoint7:
          "All mirrors available with optional mirror heating.",
        neovisionContentPoint8:
          "Invisible mounting made of stainless steel or high-quality lightweight panels.",
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
        goToProjects: "References",
        goToPrivate: "Start inquiry",
        titleSpecials: "NEOLIGHT",
        descriptionSpecials: "Custom-made mirrors and light mirrors.",
        // more info buttons
        moreInfo: "Learn more",
      },

      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title:
          "Spiegel & Leuchtspiegel auf Maß | NEOLIGHT by Kienle | Hochwertige, maßgeschneiderte Designs | Neo Building",
        description:
          "Entdecken Sie hochwertige, maßgefertigte Spiegel und Leuchtspiegel von NEOLIGHT by Kienle in Köln, Deutschland. Perfekt für moderne Badezimmer, bieten unsere Produkte individuell anpassbare Größen, langlebige LED-Technologie und elegante Designs. Ob mit Spiegelheizung, unsichtbarer Halterung oder flexibler Platzierung der Leuchtelemente – wir passen unsere Spiegellösungen genau an Ihre Anforderungen und Raumgestaltung an. Ideal für Neubauten und Renovierungen. Qualität made in Germany.",
        keywords:
          "Spiegel, Leuchtspiegel, maßgefertigte Spiegel, LED Spiegel, Spiegel für Badezimmer, Spiegel mit Heizung, maßgefertigte Leuchtspiegel, Spiegel Köln, Leuchtspiegel Köln, NEOLIGHT, Spiegel aus Edelstahl, moderne Spiegel, Spiegel nach Maß, Badezimmer Spiegel, Spiegelmontage, hochwertige Spiegel, Designer Spiegel, LED Leuchtmittel Spiegel, Spiegel für Renovierung, individuell gestaltbare Spiegel, NEOLIGHT by Kienle",
      },

      pageContent: {
        siteHeader: "Spiegel",
        siteCrum: "NEOLIGHT",
        siteHeader2: "Wir finden die Lösung für Ihre Ideen!",
        // Page Intro
        pageIntroHeader: "Auf Maß für Sie gefertigt",
        pageIntroDescription:
          "Unsere Spiegel und Leuchtspiegel werden für Sie in den von Ihnen benötigten Maßen gefertigt. Die Leuchtspiegel werden mit hochwertigen Leuchtmitteln ausgestattet, in der von Ihnen gewünschten Wattage (Leistung) und Lichtfarbe (warmweiß/kaltweiß). Wir passen unser Produkt Ihrer Raumplanung an.",
        pageIntroDescription2:
          "Durch den sehr flachen Wandaufbau und durch das reduzierte Design sind die Spiegel und Leuchtspiegel ein Hingucker in jedem Bad.",
        pageIntroDescription3:
          "Gerade bei der Planung im Projektbereich fordert die Gestaltung ein höchstes Maß an Flexibilität. Mit unseren Mapanfertigungen können wir auf Ihre Vorstellungen eingehen und Sie so bei der Umsetzung Ihrer Kreativität bis ins Detail unterstützen.",
        pageIntroDescription4:
          "Sämtliche unserer Spiegel sind feuchtraumgeeignet. Die Unterkonstruktion der Leuchtspiegel variiert je nach Bauvorhaben und Anforderungen.",
        pageIntroHeader2: "Brillanz im Bad",
        pageInroToGallery: "Bilder Ansehen",
        // Call to action references
        callToActionHeader: "Projekt Erfahrung",
        callToActionDescription:
          "Wir stellen extrem hohe Anforderungen an das von uns verwendete Material, an die Form und die Funktionalität. Das Design unserer Produkte ist zeitlos. Unser Ziel war und ist es, dass Sie viele Jahre Freude an unseren Produkten haben. Alle Produkte werden von uns selbst konstruiert: vom Prototyp bis zur Serienreife, mit umfangreichen Tests, damit die Produkte Ihnen wirklich nachhaltigen Nutzen bringen.",

        callToActionLink: "Referenzen",
        // Mirrors Section Content
        neovisionContentHeader: "Spiegel und Leuchtspiegel",
        neovisionContentPoint1: "Geringer Wandabstand",
        neovisionContentPoint2: "Langlebige LED-Leuchtmittel",
        neovisionContentPoint3: "Unsichtbare Halterung",
        neovisionContentPointDescription:
          "Während unserer langjährigen Zusammenarbeit mit Projektentwicklern, Ingenieuren und Architekten wurden wir immer wieder vor neue Aufgaben gestellt, für die es eine Lösung zu entwickeln galt. Unser Anspruch ist es, mit unserer Kompetenz für diese vielfältigen Aufgaben Lösungen zu bieten.",
        neovisionContentPoint4:
          "Individuelle Breiten und Sonderlösungen möglich",
        neovisionContentPoint5:
          "Senkrechte und/ oder waagerechte Platzierung der Leuchtelemente",
        neovisionContentPoint6:
          "Platzierung der Leuchtmittel in der Spiegelfläche frei wählbar",
        neovisionContentPoint7: "Alle Spiegel auf Wunsch mit Spiegelheizung",
        neovisionContentPoint8:
          "Unsichtbare Halterung aus Edelstahl oder hochwertigen Leichtbauplatten",
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
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",
        callToActionLinkGallery: "Galerie",

        // Image Section Content
        filterAll: "Spiegel",
        filterDrains: "Abläufe",

        pleaseNote:
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",

        goToProjects: "Referenzen",
        goToPrivate: "Anfrage Starten",
        titleSpecials: "NEOLIGHT",
        descriptionSpecials: "Spiegel & Leuchtspiegel auf Maß gefertigt",
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
