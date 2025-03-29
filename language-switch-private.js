document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("loading", "lazy");
  });
  const dynamicText = document.getElementById("dynamic-text");

  // Define translations for English and German
  const translations = {
    en: {
      meta: {
        title: "Neo Building | References Images",
        description:
          "In addition to our commitment to project business, we have always offered our products to private customers as well. Take advantage of our many years of experience to bring your private construction project to life.",
        keywords:
          "neo building, references, images, private customers, glas shower enclosures, neo building experience",
      },

      pageContent: {
        siteHeader: "Private Customers",
        siteCrum: "Private Customers",
        siteHeader2: "We bring your ideas to life!",
        siteDescription1:
          "In addition to our commitment to project business, we have always offered our products to private customers as well. Take advantage of our many years of experience to bring your private construction project to life.",
        siteDescription2:
          "We bring your ideas for individual interior design to life—with the highest precision, using products we have developed, exclusively manufactured in Germany.",
        siteDescription3:
          " Design, materiality, and manufacturing technology are mutually dependent. To meet the highest standards every day, we therefore rely exclusively on",
        featurePointOne: "our own design",
        featurePointTwo: "our own product development",
        featurePointThree: "our own manufacturing",
        siteDescription4:
          " By manufacturing all products 100% in Germany, we guarantee speed, quality, and reliability at the highest level.",
        siteReferences: "References",
        category: "<strong>Category</strong>Private Customers",
        lastUpdate: "<strong>Updated</strong> February, 2025",
        moreReferences: "More References",
        goToProjects: "Projects",
        moreImages: "More Images",
        goToImages: "Gallery",
        goToContact: "Contact",
        pleaseNote:
          "We would like to point out that the following images are work/assembly photos.",
        descriptionShower:
          "Custom-made glass showers. If you have any questions, feel free to contact us.",
        descriptionMirror:
          "Mirrors & illuminated mirrors as custom-made products. If you have any questions, feel free to contact us.",
      },
      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title: "Neo Building | Referenzen Privatkunden",
        description:
          "Wir freuen uns auf Ihre Anfrage - per E-Mail an info@neo-building.com oder telefonisch unter +49-221-95490929-0",
        keywords:
          "neo building, referenzen, bilder, privat kunden, glasduschen, neo building erfahrung",
      },

      pageContent: {
        siteHeader: "Privatkunden",
        siteCrum: "Privatkunden",
        siteHeader2: "Wir finden die Lösung für Ihre Ideen!",
        siteDescription1:
          "Neben unserem Engagement im Projektgeschäft haben wir stets unsere Produkte auch Privatkunden angeboten. Nutzen sie unsere langjährige Erfahrung für die Realisierung Ihres privaten Bauvorhabens.",
        siteDescription2:
          "Wir lassen Ihre Ideen für eine individuelle Gestaltung im Raum Realität werden. Mit höchster Präzision. Mit von uns entwickelten Produkten. Ausschließlich in Deutschland gefertigt.",
        siteDescription3:
          " Design, Materialität und Fertigungstechnik bedingen sich wechselseitig. Um täglich höchsten Ansprüchen gerecht zu werden, setzen wir deshalb ausnahmslos auf",
        featurePointOne: "eigenes Design",
        featurePointTwo: "eigene Produktentwicklung",
        featurePointThree: "eigene Fertigung",
        siteDescription4:
          " Durch die 100%-tige Fertigung aller Produkte in Deutschland garantieren wir Schnelligkeit, Qualität und Zuverlässigkeit auf höchstem Niveau.",
        siteReferences: "Referenzen",
        category: "<strong>Kategorie</strong>Privatkunden",
        lastUpdate: "<strong>Stand</strong> Februar, 2025",
        moreReferences: "Weitere Referenzen",
        goToProjects: "Projekte",
        moreImages: "Weitere Bilder",
        goToImages: "Bilder",
        goToContact: "Kontakt",
        pleaseNote:
          "Wir weisen darauf hin, dass es sich bei den folgenden Bildern um Arbeits-/ Montage- Fotos handelt.",
        descriptionShower:
          "Glasduschen als Sonderanfertigung. Bei Fragen kontaktieren Sie uns gerne.",
        descriptionMirror:
          "Spiegel & Leuchtspiegel als Sonderanfertigung. Bei Fragen kontaktieren Sie uns gerne.",
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
    }

    // applyTranslation("meta", translations[currentLang].meta);
    applyTranslation("pageContent", translations[currentLang].pageContent);

    let contactText = document.querySelectorAll(".contactText");
    contactText.forEach(
      (text) =>
        (text.innerText = translations[currentLang].pageContent.contactText)
    );
    let descriptionShowers = document.querySelectorAll(".descriptionShower");
    descriptionShowers.forEach((descriptionShower) => {
      descriptionShower.innerText =
        translations[currentLang].pageContent.descriptionShower;
    });
    let descriptionMirrors = document.querySelectorAll(".descriptionMirror");
    descriptionMirrors.forEach((descriptionMirror) => {
      descriptionMirror.innerText =
        translations[currentLang].pageContent.descriptionMirror;
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
