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
          "Specials | Innovative Custom Solutions for Doors, Partitions, and Interiors | Neo Building",
        description:
          "Explore Neo Building's wide range of innovative custom glass solutions, including doors, room partitions, vanity frames, towel holders, and more. We offer tailored products designed to meet the highest standards of quality, flexibility, and style. Collaborating closely with architects and designers, we bring your creative vision to life with precision and craftsmanship. Based in Cologne, we specialize in both standard and custom-made products for residential and commercial spaces.",
        keywords:
          "custom glass doors, glass partitions, custom room partitions, glass vanity frames, towel holders, custom glass solutions, glass products for interiors, made-to-measure glass products, Neo Building Cologne, bespoke glass designs, interior glass solutions, high-quality glass products, flexible glass solutions, architect-designed glass products, residential glass products, commercial glass solutions, glass installation services, innovative glass design",
      },

      pageContent: {
        siteHeader: "Specials",
        siteCrum: "More",
        siteHeader2: "We bring your ideas to life!",
        // Page Intro
        pageIntroHeader: "Manufactured products for the living space",
        pageIntroDescription:
          "Do you need a door or room divider made of glass, are you looking for the perfect towel holder, or a door lock? You’ll find what you're looking for in the other products of our range.",
        pageIntroHeader2: "Custom creations",
        pageIntroPointOne:
          "In project planning, design often requires the highest level of flexibility. With our custom creations, we can meet your ideas and support you in implementing your creativity down to the smallest detail.",
        pageIntroPointTwo:
          "During our many years of collaboration with project developers and interior designers, we have repeatedly faced new challenges that required the development of solutions. Our goal is to provide solutions for these diverse tasks with our expertise.",
        pageInroToGallery: "View Images",
        // Call to action references
        callToActionHeader: "Project Experience",
        callToActionDescription:
          "We set extremely high standards for the materials we use, as well as for the shape and functionality of our products. The design of our products is timeless. Our goal has always been, and continues to be, to ensure that you enjoy our products for many years to come. All of our products are designed in-house: from the prototype to series production, including extensive testing to guarantee lasting value and reliability.",
        callToActionLink: "References",
        // Specials Section Content
        specialsContentHeader: "Manufactured products for the living space",
        specialsContentPoint1: "Doors & sliding doors made of glass",
        specialsContentPoint1Text:
          "Our doors and sliding doors bring timeless elegance to the room. Whether made of transparent or frosted glass, with digital printing or decorative film – all wishes and ideas are realized.",
        specialsContentPoint2: "Back wall glazing",
        specialsContentPoint2Text:
          "Back wall glazing can be printed with screen printing in any custom color. Digital prints with photographs and patterns are also possible. Our back wall glazing can be directly mounted onto old tiles, creating a seamless, hygienic, and easy-to-clean surface. Ideal for renovations and new constructions.",
        specialsContentPoint3: "Partition walls made of composite glass",
        specialsContentPoint3Text:
          "Glass partition walls are the perfect element for exclusive room design. They offer fascinating possibilities through the custom printing of the glass. Also available as composite glass, combining two different types of glass.",
        specialsContentPointDescription:
          "During our many years of collaboration with project developers, engineers, and architects, we have repeatedly been faced with new challenges for which solutions had to be developed. Our goal is to use our expertise to provide solutions for these diverse tasks.",
        specialsContentPoint4: "Desks",
        specialsContentPoint4Text:
          "Desks with flush surfaces. Available in any desired decor. Easy to clean, hygienic, and stable. Also possible with the addition of a shelving system using the same mounting components.",
        specialsContentPoint5: "Shelf and storage systems",
        specialsContentPoint5Text:
          "Our shelves are custom-made and installed. Whether with or without visible mounts, the customer's ideas and plans are implemented with millimeter precision.",
        specialsContentPoint6: "Handles and towel holders",
        specialsContentPoint6Text:
          "Handles and towel holders are adapted to the design of the bathroom, as well as towel hooks or door stoppers upon request. Whether screwed flush to the glass or UV-bonded, the implementation is carried out in close coordination with the architects and planners.",
        specialsContentPoint7: "Magnetic lock",
        specialsContentPoint7Text:
          "The magnetic lock we developed ensures that the door and fixed glass panel close seamlessly in alignment. This creates a calm and high-quality impression of the entire surface.",
        specialsContentPoint8: "Vanity frames",
        specialsContentPoint8Text:
          "We manufacture, supply, and install vanity frames made of stainless steel and brass. We create simple bracket-style consoles from stainless steel as well as elaborate, visible vanity understructures in bi-color combinations, such as stainless steel combined with gold-plated brass. Whether polished with surface protection or gold-plated, nearly all requests can be fulfilled.",
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
        titleSpecials: "More Specials",
        descriptionSpecials:
          "Explore our additional specials, featuring custom glass doors, back wall glazing, glass partitions, desks, shelving and storage systems, handles and towel holders, magnetic locks, and washbasin frames. Discover high-quality, bespoke solutions tailored to your interior design needs.",
        // more info buttons
        moreInfo: "Learn more",
      },

      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title:
          "Specials | Innovative Maßgeschneiderte Lösungen für Türen, Raumteiler und Innenräume | Neo Building",
        description:
          "Entdecken Sie die breite Palette an innovativen, maßgeschneiderten Glaslösungen von Neo Building, darunter Türen, Raumteiler, Waschtischgestelle, Handtuchhalter und mehr. Wir bieten maßgeschneiderte Produkte, die höchsten Qualitäts-, Flexibilitäts- und Designansprüchen gerecht werden. In enger Zusammenarbeit mit Architekten und Planern setzen wir Ihre kreativen Visionen mit Präzision und Handwerkskunst um. Mit Sitz in Köln spezialisieren wir uns auf sowohl Standard- als auch maßgefertigte Produkte für Wohn- und Gewerbeflächen.",
        keywords:
          "maßgeschneiderte Glastüren, Glasraumteiler, maßgefertigte Raumteiler, Glastischgestelle, Handtuchhalter, maßgeschneiderte Glaslösungen, Glasprodukte für Innenräume, maßgefertigte Glasprodukte, Neo Building Köln, individuelle Glasdesigns, Innenraum-Glaslösungen, hochwertige Glasprodukte, flexible Glaslösungen, von Architekten gestaltete Glasprodukte, Glasprodukte für den Wohnbereich, Glaslösungen für den Gewerbebereich, Glasinstallationsdienste, innovative Glasdesigns",
      },

      pageContent: {
        siteHeader: "Specials",
        siteCrum: "Weitere",
        siteHeader2: "Wir finden die Lösung für Ihre Ideen!",
        // Page Intro
        pageIntroHeader: "Manufakturprodukte für den Wohnraum",
        pageIntroDescription:
          "Sie benötigen eine Tür oder einen Raumteiler aus Glas, sind auf der Suche nach dem passenden Handtuchhalter oder einem Türverschluss? Bei den weiteren Produkten unseres Sortiments werden Sie fündig.",
        pageIntroHeader2: "Sonderanfertigungen",
        pageIntroPointOne:
          "Gerade bei der Planung im Projektbereich fordert die Gestaltung ein höchstes Maß an Flexibilität. Mit unseren Maßanfertigungen können wir auf Ihre Vorstellungen eingehen und Sie so bei der Umsetzung Ihrer Kreativität bis ins Detail unterstützen.",
        pageIntroPointTwo:
          "Während unserer langjährigen Zusammenarbeit mit Projektentwicklern und Innenarchitekten wurden wir immer wieder vor neue Aufgaben gestellt, für die es eine Lösung zu entwickeln galt. Unser Anspruch ist es, mit unserer Kompetenz für diese vielfältigen Aufgaben Lösungen zu bieten.",
        pageInroToGallery: "Bilder Ansehen",
        // Call to action references
        callToActionHeader: "Projekt Erfahrung",
        callToActionDescription:
          "Wir stellen extrem hohe Anforderungen an das von uns verwendete Material, an die Form und die Funktionalität. Das Design unserer Produkte ist zeitlos. Unser Ziel war und ist es, dass Sie viele Jahre Freude an unseren Produkten haben. Alle Produkte werden von uns selbst konstruiert: vom Prototyp bis zur Serienreife, mit umfangreichen Tests, damit die Produkte Ihnen wirklich nachhaltigen Nutzen bringen.",
        callToActionLink: "Referenzen",
        // Specials Section Content
        specialsContentHeader: "Manufakturprodukte für den Wohnraum",
        specialsContentPoint1: "Türen & Schiebetüren aus Glas",
        specialsContentPoint1Text:
          "Unsere Türen und Schiebetüren sorgen für zeitlose Eleganz im Raum. Ob aus transparentem oder satiniertem Glas, ob mit Digitaldruck oder Dekorfolie – alle Wünsche und Vorstellungen werden realisiert.",
        specialsContentPoint2: "Rückwandverglasungen",
        specialsContentPoint2Text:
          "Rückwandverglasungen können mit Siebdruck in allen Sonderfarben bedruckt werden. Ebenso möglich sind Digitaldrucke mit Fotografien und Dekoren. Unsere Rückwandverglasungen können direkt auf alte Fliesen montiert werden und bilden eine fugenlose, hygienische und leicht zu reinigende Fläche. Ideal für die Sanierung und den Neubau.",
        specialsContentPoint3: "Raumteiler aus Verbundglas",
        specialsContentPoint3Text:
          "Raumteiler aus Glas sind das perfekte Element für die exklusive Raumgestaltung. Sie bieten faszinierende Möglichkeiten durch das individuelle Bedrucken der Gläser. Auch als Verbundglas in der Kombination aus zwei verschiedenen Gläsern möglich.",
        specialsContentPointDescription:
          "Während unserer langjährigen Zusammenarbeit mit Projektentwicklern, Ingenieuren und Architekten wurden wir immer wieder vor neue Aufgaben gestellt, für die es eine Lösung zu entwickeln galt. Unser Anspruch ist es, mit unserer Kompetenz für diese vielfältigen Aufgaben Lösungen zu bieten.",
        specialsContentPoint4: "Schreibtische",
        specialsContentPoint4Text:
          "Schreibtische mit flächenbündiger Oberfläche. Mit jedem Dekor nach Wunsch. Leicht zu reinigen, hygienisch und stabil. Auch mit Erweiterung eines Regalsystems mit gleichen Befestigungskomponenten möglich.",
        specialsContentPoint5: "Regal- und Ablagesysteme",
        specialsContentPoint5Text:
          "Unsere Regale werden passgenau gefertigt und montiert. Ob mit oder ohne sichtbare Befestigung, die Vorstellungen und Planungen des Kunden werden millimetergenau umgesetzt.",
        specialsContentPoint6: "Griffe und Handtuchhalter",
        specialsContentPoint6Text:
          "Griffe und Handtuchhalter werden ebenso dem Design des Bades angepasst wie auf Wunsch auch Handtuchhaken oder Türstopper. Ob flächenbündig am Glas verschraubt oder UV-verklebt. Die Umsetzung erfolgt in enger Abstimmung mit den Architekten und Planern.",
        specialsContentPoint7: "Magnetschliesse",
        specialsContentPoint7Text:
          "Die von uns entwickelte Magnetschließe lässt Tür und Festteil aus Glas dauerhaft in einer Flucht zueinader schließen. Dies ergibt einen ruhigen und hochwertigen Eindruck der Gesamtfläche.",
        specialsContentPoint8: "Waschtischgestelle",
        specialsContentPoint8Text:
          "Wir fertigen, liefern und montieren Waschtischuntergestelle aus Edelstahl und Messing. Die einfache Halterung als Konsole aus Edelstahl fertigen wir ebenso wie aufwändige, sichtbare Waschtischunterkonstruktionen in Bicolor, z.B. aus Edelstahl in der Kombination mit vergoldetem Messing. Ob poliert mit Oberflächenschutz oder auch vergoldet – nahezu alle Wünsche können erfüllt werden.",
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
        filterAll: "Alle",
        filterDrains: "Abläufe",

        pleaseNote:
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",

        goToProjects: "Referenzen",
        goToPrivate: "Anfrage Starten",
        titleSpecials: "Weitere Specials",
        descriptionSpecials:
          "Entdecken Sie unsere weiteren Specials, darunter maßgeschneiderte Glastüren, Rückwandverglasungen, Raumteiler aus Verbundglas, Schreibtische, Regal- und Ablagesysteme, Griffe und Handtuchhalter, Magnetschlösser und Waschtischgestelle. Finden Sie hochwertige, maßgefertigte Lösungen für Ihre Innenraumgestaltung.",
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
