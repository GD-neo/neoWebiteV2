document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("loading", "lazy");
  });
  const dynamicText = document.getElementById("dynamic-text");

  // Define translations for English and German
  const translations = {
    en: {
      meta: {
        title:
          "Neo Building | Industrial Flooring & Stainless Steel Constructions | Consulting in Cologne",
        description:
          "NEO Building specializes in industrial flooring and drainage systems, offering durable and high-performance solutions for commercial and private projects. Based in Cologne, we also provide custom glass shower enclosures, LED mirrors, and stainless steel architectural elements. With a focus on precision craftsmanship and innovation, we deliver high-quality, Made-in-Germany products for modern construction. Whether for large-scale developments or bespoke designs, our tailored solutions ensure longevity and functionality. Contact us for expert consulting on planning, logistics, and execution of construction projects.",
        keywords:
          "Neo Building GmbH, industrial flooring Cologne, drainage systems NRW, glass solutions Cologne, specialist in industrial flooring, custom drainage systems, stainless steel custom fabrication, glass construction for hotels and industry, industrial floors and drains, construction company Cologne, project consulting construction, 20 years experience in construction, industrial and commercial building projects, glass, stainless steel and flooring solutions, consulting for industrial construction projects, construction partner for industry and commerce, custom construction projects Cologne, experts in hotel and commercial construction, high-quality building products Cologne, construction planning, logistics support, stainless steel construction, glass construction, architectural consulting, construction project management, custom construction planning, building design, stainless steel components, planning support, construction industry consulting, tailored construction projects",
      },
      static: {
        part1: "Stainless steel components", // Static translation for Edelstahlbauelemente
        part2: "Industrial flooring", // Static translation for Industrieboden
        part3: "and",
      },
      products: ["Industrial Drainages.", "Glas Elements.", "much more."],
      competentHero: "Competence . Experience . Quality",
      constructionsNeox: {
        h2Stahl: "Steel Construction",
        pDescriptionNeox:
          "From the modernisation of a production facility or industrial scullery's, over professional kitchens to new development/construction sites. Drainage technology (Industrial Gutters/Drains and Shower Drains - 100% Stainless Steel), Stainless steel elements (Walls, Panelling, Stairs etc.), Profiles in stainless steel and much more.  ",
        featureDrains: "Industrial Drainage",
        featureElements: "Stainless Steel Elements",
        featureShowerDrain: "Shower Drains",
        featureProfiles: "Profiles",
        // Edelstahl Entwaesserung
        featureDrainsTitle: "Stainless Steel Systems",
        featureDrainsDescription:
          "Stainless steel drainage technology for produktion sites, warehouses, scullerys, outdoor areas and more.",
        featureDrainsPointOne:
          "Gutter body and drainage element made from 100% stainless steel",
        featureDrainsPointTwo: "Custom-made solutions are our standard",
        featureDrainsPointThree:
          "Seamless transition to NEOXID<sup>®</sup> <a href='#featuresMore' class='custom-link'>industrial flooring</a>",
        featureDrainsPointThree2: "industrial flooring",
        // Edelstahl Bauelemente
        featureElementsTitle: "Stainless Steel Components",
        featureElementsDescription:
          "Complete stainless steel elements, including but not limited to:",
        featureElementPointOne:
          "Wall elements - see <a href='#projectGallery' class='custom-link' id='galleryLinkMars'>Project Mars</a>",
        featureElementPointOne2: "Project Mars",
        featureElementPointTwo: "Wall panelling",
        featureElementPointThree: "Ram protection/ crash guards",
        featureElementPointFour: "Stairs & Railings",
        featureElementMore: "More Information",
        // Edelstahl Duschrinnen
        featureShowerDrainTitle: "Stainless steel shower drains...",
        featureShowerDrainDescription:
          "allow for a free and continuous floor design. Custom widths and special solutions are standard for us.",
        featureShowerDrainPointOne: "Complete set made of stainless steel.",
        featureShowerDrainPointTwo: "Wall lip/upstand possible",
        featureShowerDrainPointThree: "Custom lengths available",
        // Edelstahl Profile
        featureProfilesTitle: "Stainless steel profiles...",
        featureProfilesDescription:
          "are manufactured to the highest standards and tailored to the desired dimensions of our customers.",
        featureProfilesPointOne:
          "U-profiles for screwing or gluing to the wall.",
        featureProfilesPointTwo: "Profiles with support flange for tiles",
        featureProfilesPointThree:
          "Stair profiles / Step edge protection / Door frames",
        featureProfilesPointFour:
          "Brilliant appearance through polished stainless steel – Coatings available",
        //   overview / References
        moreThan: "More than",
        happyCustomer: "Satisfied Customers",
        projectsDone: "Projects Completed",
        glasUsed: "Tons of glass installed",
        steelUsed: "Tons of stainless steel processed",
        siteHeader2: "Overview",
        siteHeader3: "We bring your ideas to life!",
        // Link To Gallery Call Out
        imagesOfWork: "Images of our work",
        imagesOfWorkDescription:
          "They say an image is worth a thousand words. Here, each one speaks of dedication, innovation, and the beauty of precision craftsmanship.",
        toGallery: "To the Gallery",
        // Image Titles
        titleMarsNew: "Mars: New",
        titlePolaroidNew: "Polaroid: New",
        titleMarsConstruction: "Mars: Construction",
        titlePolaroidConstruction: "Polaroid: Construction",
        descriptionMars:
          "5m high wall elements, new industrial flooring, new drains, new impact protection, and more.",
        descriptionPolaroid:
          "The work carried out by us: planning, removal/demolition of the old floor, manufacturing of new drains and channels (100% stainless steel) as well as their assembly/installation, and the application of a new industrial floor according to customer requirements.",
        // Go to references Call out
        projectExperience: "Project Experience",
        referencesDescription:
          "We place extremely high demands on the materials we use, as well as on the design and functionality. </br>The design of our products is timeless. Our goal has always been to ensure that you enjoy our products for many years to come. </br>All products are developed in-house: from prototype to series production, with extensive testing to ensure that they provide you with lasting value.",
        toReference: "References",
      },
      constructionsNeovision: {
        h2Glas: "Shower enclosures",
        pDescriptionNeovision:
          "Minimalist and sleekly designed fittings made from high-quality materials emphasize the crystal-clear aesthetics of our frameless shower partitions.",
        // Feature Section
        featureMore: "Mehr",
        // NEOVISION CLASSIC
        featureCLassicTitle:
          "<span class='custom-green'>NEOVISION</span> Classic",
        featureCLassicDescription:
          "The minimalist, delicate design of the NEOVISION Classic fitting gives the frameless real glass shower timeless elegance and maximum transparency.",
        featureCLassicPointOne: "Frameless full-glass shower enclosure",
        featureCLassicPointTwo:
          "Pivot door fittings mounted at the top and bottom of the glass",
        featureCLassicPointThree:
          "Custom-made fittings with powder coating/PVD, e.g., matte black, available",
        // NEOVISION Pura
        featurePuraTitle: "<span class='custom-green'>NEOVISION</span> Pura",
        featurePuraDescription:
          "The purist design of the frameless real glass shower made of 8 mm toughened safety glass is reflected in the completely flush inner surface.",
        featurePuraPointOne: "Frameless all-glass shower enclosure",
        featurePuraPointTwo:
          "Fittings recessed from the top and bottom edges of the glass",
        featurePuraPointThree:
          "Wall connection possible with highly adjustable wall brackets",
        // NEOVISION Easy
        featureEasyTitle: "<span class='custom-green'>NEOVISION</span> Easy",
        featureEasyDescription:
          "The extremely robust fitting system of the NEOVISION Easy, made of solid brass with maintenance-free plain bearings, is perfectly suited for project applications.",
        featureEasyPointOne: "Frameless all-glass shower enclosure",
        featureEasyPointTwo:
          "Fittings set back from the top and bottom edges of the glass",
        featureEasyPointThree:
          "Wall connection possible with stainless steel wall profile",
        // NEOVISION Walk-In
        featureWalkInTitle: "Other custom-made solutions",
        featureWalkInDescription:
          "In addition to showers with our fittings, we can also create other solutions, such as Walk-In showers completely without fittings. The following too applies to these:",
        featureWalkInPointOne:
          "The solution is tailored to your needs and planning.",
        featureWalkInPointTwo: "These are custom-made creations.",
      },
      featuresMore: {
        featureFloorsHeading: "Industrial Floors",
        featureMirrorHeading: "Mirrors & LED Mirrors",
        featureSpecialsHeading: "Specials",
        featureRenoboxHeading: "RENOBOX",
        // More Flooring
        featureFloorsTitle: "Industrial flooring – customized to your needs",
        featureFloorsDescription: "We implement",
        featureFloorsPointOne: "durable and resilient flooring solutions for",
        featureFloorsPointTwo: "factories, industrial kitchens, and warehouses",
        featureFloorsPointThree: "with or without custom drainage systems",
        featureFloorsDescription2: "Our focus is on",
        featureFloorsPointFour:
          "implementing according to the individual wishes and requirements of our customers and partners",
        //   More Mirrors
        featureMirrorsTitle: "Luxury and Light in Your Bathroom",
        featureMirrorsDescription:
          "Our mirrors and illuminated mirrors are custom-made to your required dimensions. The illuminated mirrors are equipped with high-quality light sources, available in your desired wattage (power) and color temperature (warm white/cool white).",
        featureMirrorsPointOne: "Custom-made for you",
        featureMirrorsPointTwo:
          "All mirrors available with an optional heated mirror function.",
        featureMirrorsPointThree:
          "Custom widths and special solutions available.",
        featureMirrorsPointFour:
          "Placement of the light sources within the mirror surface is customizable.",
        //   More Specials
        featureSpecialsTitle: "Handcrafted products for the living space",
        featureSpecialsDescription:
          "Do you need a glass door or room divider, are you looking for the perfect towel holder or a door lock? You’ll find what you’re looking for in our range of products.",
        featureSpecialsPointOne: "Glass doors & sliding doors",
        featureSpecialsPointTwo: "Backsplashes (backsplash glazing)",
        featureSpecialsPointThree: "Room dividers made of composite glass",
        featureSpecialsPointFour: "Desks",
        featureSpecialsPointFive: "Shelf and storage systems",
        featureSpecialsPointSix: "Handles and towel holders",
        // More Renobox
        featureRenoboxTitle: "The Modular Bathroom",
        featureRenoboxDescription:
          "The following short film provides you with a deeper understanding of the brand structure of NEO Building GmbH, as well as an animated rendering offering insight into the concept: REN<span style='color: #0baf16'>O</span>BOX<sup>®</sup> - The Modular Bathroom.",
        featureRenoboxPointOne: "Please turn on your sound.",
        featureRenoboxPointTwo: "Play Concept Film",
        // More Heading and Description
        h2More: "Industrial Floors",
        pDescriptionMore:
          "Industrial floors for production areas, kitchens, warehouses...</br>Offer high resistance to heat and chemicals (e.g., industrial cleaning agents)</br>Easy to clean thanks to seamless surfaces.",
        // Image Slider Title
        beforeAfterTitle: "Before | After",
        // Gallery Selection at beginning of page
        filterGalleryAll: "All",
      },
      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title:
          "Neo Building | Industrieböden & Edelstahlkonstruktionen | Beratung in Köln",
        description:
          "NEO Building ist Ihr Experte für Industrieböden und Entwässerungssysteme – langlebige und leistungsstarke Lösungen für gewerbliche und private Bauprojekte. Mit Sitz in Köln bieten wir zudem maßgefertigte Glasduschen, LED-Spiegel und Edelstahl-Bauelemente. Unser Fokus liegt auf Präzision, Innovation und Qualität 'Made in Germany'. Ob für Großprojekte oder individuelle Designs – unsere maßgeschneiderten Lösungen garantieren Langlebigkeit und Funktionalität. Kontaktieren Sie uns für professionelle Beratung zu Planung, Logistik und Umsetzung Ihrer Bauvorhaben.",
        keywords:
          "Neo Building GmbH, Industrieböden Köln, Entwässerungssysteme NRW, Glaslösungen Köln, Spezialist für Industrieböden, maßgefertigte Entwässerungssysteme, Edelstahl Sonderanfertigungen, Glasbau für Hotels und Industrie, Industrieböden und Drainagen, Bauunternehmen Köln, Projektberatung Bauwesen, 20 Jahre Erfahrung Bau, Bauprojekte Industrie und Gewerbe, Glas, Edelstahl und Bodenlösungen, Beratung Industriebau, Baupartner Industrie Gewerbe, individuelle Bauprojekte Köln, Experten Hotelbau Gewerbebau, hochwertige Bauprodukte Köln, Bauplanung, Logistik Unterstützung, Edelstahlbau, Architektur Beratung, Bauprojekt Management, individuelle Bauplanung, Baukonstruktion, Edelstahl Komponenten, Planungsunterstützung, Bauindustrie Beratung, maßgeschneiderte Bauprojekte",
      },
      static: {
        part1: "Edelstahlbauelemente",
        part2: "Industrieböden",
        part3: "und",
      },
      products: ["Industrieentwässerung.", "Glaselemente.", "weiteres."],
      competentHero: "Kompetenz . Erfahrung . Qualität",
      constructionsNeox: {
        h2Stahl: "Edelstahlkonstruktion",
        pDescriptionNeox:
          "Von der Modernisierung einer Produktionsstätte oder industriellen Spülräumen, über professionelle Küchen bis zum Neubau. Entwässerungstechnologie (Industrielle Rinnen/Abläufe und Duschrinnen - 100% Edelstahl), Edelstahlbauelemente (Wandelemente,Wandverkleidung, Treppen etc.), Profile aus Edelstahl und vieles mehr.",
        featureDrains: "Industrie Entwässerung",
        featureElements: "Edelstahl Bauelemente",
        featureShowerDrain: "Duschrinnen",
        featureProfiles: "Profile",
        // Edelstahl Entwaesserung
        featureDrainsTitle: "Edelstahl Entwässerung",
        featureDrainsDescription:
          "Edelstahl Entwässerungstechnologie für Produktionsräume, Lagerhallen, Spülräume/-küchen, Außenbereiche und mehr.",
        featureDrainsPointOne:
          "Rinnenkörper und Abläufe komplett aus Edelstahl",
        featureDrainsPointTwo: "Sonderanfertigungen als Standard",
        featureDrainsPointThree:
          "Nahtloser Übergang zu NEOXID<sup>®</sup> <a href='#featuresMore' class='custom-link'>Industrieböden</a>",
        featureDrainsPointThree2: "Industrieböden",
        // Edelstahl Bauelemente
        featureElementsTitle: "Edelstahlelemente",
        featureElementsDescription:
          "Komplette Edelstahlelemente, beispielsweise:",
        featureElementPointOne:
          "Wandelemente - siehe <a href='#projectGallery' class='custom-link' id='galleryLinkMars'>Bauvorhaben Mars</a>",
        featureElementPointOne2: "Bauvorhaben Mars",
        featureElementPointTwo: "Wandverkleidungen",
        featureElementPointThree: "Rammschutz Elemente",
        featureElementPointFour: "Treppen & Geländer",
        featureElementMore: "Mehr Erfahren",
        // Edelstahl Duschrinnen
        featureShowerDrainTitle: "Duschrinnen aus Edelstahl...",
        featureShowerDrainDescription:
          "ermöglichen eine freie und durchgängige Bodengestaltung Individuelle Breiten und Sonderlösungen sind dabei für uns Standard.",
        featureShowerDrainPointOne: "Komplett-Set aus Edelstahl",
        featureShowerDrainPointTwo: "Wandaufkantungen möglich",
        featureShowerDrainPointThree: "Sonderlängen möglich",
        // Edelstahl Profile
        featureProfilesTitle: "Profile aus Edelstahl...",
        featureProfilesDescription:
          "werden mit höchsten Ansprüchen gefertigt und an die gewünschten Dimensionen unserer Kunden angepasst.",
        featureProfilesPointOne:
          "U-Profile zum Verschrauben oder Verkleben and der Wand",
        featureProfilesPointTwo: "Profile mit Auflageschenkel für Fliesen",
        featureProfilesPointThree:
          "Treppenprofile/ Stufenkantenschutz/ Türlaibungen",
        featureProfilesPointFour:
          "Brillante Optik durch polierten Edelstahl - Beschichtungen möglich",
        //   Overview / References
        moreThan: "Mehr als",
        happyCustomer: "Zufriedene Kunden",
        projectsDone: "Bauvorhaben abgeschlossen",
        glasUsed: "Tonnen Glas verbaut",
        steelUsed: "Tonnen Edelstahl verarbeitet",
        siteHeader2: "Überblick",
        siteHeader3: "Wir finden die Lösung für Ihre Ideen!",
        // Link To Gallery Call Out
        imagesOfWork: "Bilder unserer Arbeiten",
        imagesOfWorkDescription:
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes Einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",
        toGallery: "Zur Galerie",
        // Image Titles
        titleMarsNew: "Mars: Zustand Neu",
        titlePolaroidNew: "Polaroid: Zustand Neu",
        titleMarsConstruction: "Mars: Montage",
        titlePolaroidConstruction: "Polaroid: Montage",
        descriptionMars:
          "5m hohe Wandelemente, neuer Industrieboden, neue Abläufe, neuer Rammschutz und weiteres.",
        descriptionPolaroid:
          "Die durch uns durchgeführten Arbeiten: Planung, Entfernung/ Abtragen des Alten Bodens, Fertigung neuer Rinnen und Abläufe(100% Edelstahl) sowie deren Montage/Installation, Einbringung neuen Industriebodens gemäß Kundenwunsch.",
        // Go to references Call out
        projectExperience: "Projekt Erfahrung",
        referencesDescription:
          "Wir stellen extrem hohe Anforderungen an das von uns verwendete Material, an die Form und die Funktionalität. Das Design unserer Produkte ist zeitlos. Unser Ziel war und ist es, dass Sie viele Jahre Freude an unseren Produkten haben. Alle Produkte werden von uns selbst konstruiert: vom Prototyp bis zur Serienreife, mit umfangreichen Tests, damit die Produkte Ihnen wirklich nachhaltigen Nutzen bringen.",
        toReference: "Referenzen",
      },
      constructionsNeovision: {
        h2Glas: "Glasduschen",
        pDescriptionNeovision:
          "Minimalistisch und reduziert gestaltete Beschläge aus hochwertigen Materialien unterstreichen die glasklare Ästhetik unserer rahmenlosen Duschtrennwände.",
        // Feature Section
        featureMore: "Mehr",
        // NEOVISION CLASSIC
        featureCLassicTitle:
          "<span class='custom-green'>NEOVISION</span> Classic",
        featureCLassicDescription:
          "Das minimalistische, filigrane Desing des NEOVISION Classic Beschlages verleiht der rahmenlosen Echtglasdusche zeitlose Eleganz und maximale Transparenz.",
        featureCLassicPointOne: "Rahmenlose Ganzglas-Duschabtrennung",
        featureCLassicPointTwo:
          "Drehtür-Beschläge oben und unten am Glas befestigt",
        featureCLassicPointThree:
          "Sonderanfertigungen des Beschlages mit Pulverbeschichtung/PVD z.B. Schwarzmatt möglich",
        // NEOVISION Pura
        featurePuraTitle: "<span class='custom-green'>NEOVISION</span> Pura",
        featurePuraDescription:
          "Der Purismus der rahmenlosen Echtglasdusche aus 8 mm Sicherheitsglas zeigt sich auf der völlig flächenbündigen Innenseite.",
        featurePuraPointOne: "Rahmenlose Ganzglas-Duschabtrennung",
        featurePuraPointTwo:
          "Beschläge von Ober- und Unterkante des Glases eingerückt",
        featurePuraPointThree:
          "Wandanbindung mit vielfach verstellbarem Wandwinkel möglich",
        // NEOVISION Easy
        featureEasyTitle: "<span class='custom-green'>NEOVISION</span> Easy",
        featureEasyDescription:
          "Das extrem robuste Beschlagsystem der NEOVISION Easy aus massivem Messing mit wartungsfreien Gleitlagern ist perfekt geeignet für den Projektbereich.",
        featureEasyPointOne: "Rahmenlose Ganzglas-Duschabtrennung",
        featureEasyPointTwo:
          "Beschläge von Ober- und Unterkante des Glases eingerückt",
        featureEasyPointThree:
          "Wandanbindung mit Wandleiste aus Edelstahl möglich",
        // NEOVISION Walk-In
        featureWalkInTitle: "Weitere Sonderanfertigungen",
        featureWalkInDescription:
          "Neben Duschen mit unseren Beschlägen lassen sich auch andere Lösungen realisieren, z.B. Walk-In Duschen komplett ohne Beschläge. Auch für diese gilt:",
        featureWalkInPointOne:
          "die Lösung wird auf Ihre Bedürfnisse und Planung zugeschnitten",
        featureWalkInPointTwo: "es handelt sich um Einzelanfertigungen",
      },
      featuresMore: {
        featureFloorsHeading: "Industrieböden",
        featureMirrorHeading: "Spiegel & Leuchtspiegel",
        featureSpecialsHeading: "Specials",
        featureRenoboxHeading: "RENOBOX",
        // More Flooring
        featureFloorsTitle:
          "Industrieböden – maßgeschneidert für Ihre Anforderungen",
        featureFloorsDescription: "Wir realisieren",
        featureFloorsPointOne: "langlebige und belastbare Bodenlösungen für",
        featureFloorsPointTwo: "Fabriken, Industrieküchen und Lagerhallen",
        featureFloorsPointThree:
          "mit oder ohne maßgeschneiderte Entwässerungssysteme",
        featureFloorsDescription2: "Unser Fokus liegt auf",
        featureFloorsPointFour:
          "der Umsetzung nach den individuellen Wünschen und Anforderungen unserer Kunden und Partner",
        //   More Mirrors
        featureMirrorsTitle: "Brillanz im Bad",
        featureMirrorsDescription:
          "Unsere Spiegel und Leuchtspiegel werden für Sie in den von Ihnen benötigten Maßen gefertigt. Die Leuchtspiegel werden mit hochwertigen Leuchtmitteln ausgestattet, in der von Ihnen gewünschten Wattage (Leistung) und Lichtfarbe (warmweiß/kaltweiß).",
        featureMirrorsPointOne: "Auf Maß für Sie gefertigt",
        featureMirrorsPointTwo: "Alle Spiegel auf Wunsch mit Spiegelheizung.",
        featureMirrorsPointThree:
          "Individuelle Breiten und Sonderlösungen möglich",
        featureMirrorsPointFour:
          "Platzierung der Leuchtmittel in der Spiegelfläche frei wählbar",
        //   More Specials
        featureSpecialsTitle: "Manufakturprodukte für den Wohnraum",
        featureSpecialsDescription:
          "Sie benötigen eine Tür oder einen Raumteiler aus Glas, sind auf der Suche nach dem passenden Handtuchhalter oder einem Türverschluss? Bei den weiteren Produkten unseres Sortiments werden Sie fündig.",
        featureSpecialsPointOne: "Türen & Schiebetüren aus Glas",
        featureSpecialsPointTwo: "Rückwandverglasungen",
        featureSpecialsPointThree: "Raumteiler aus Verbundglas",
        featureSpecialsPointFour: "Schreibtische",
        featureSpecialsPointFive: "Regal- und Ablagesysteme",
        featureSpecialsPointSix: "Griffe und Handtuchhalter",
        // More Renobox
        featureRenoboxTitle: "Das Modulare Bad",
        featureRenoboxDescription:
          "Der folgende kurze Film bietet Ihnen ein tieferes Verständnis der Markenstruktur der NEO Building GmbH sowie ein animiertes Rendering für einen Einblick in das Konzept: REN<span style='color: #0baf16'>O</span>BOX<sup>®</sup> - Das Modulare Bad.",
        featureRenoboxPointOne: "Bitte schalten Sie Ihren Ton ein",
        featureRenoboxPointTwo: "Konzept Film Abspielen",
        // More Heading and Description
        h2More: "Industrieböden",
        pDescriptionMore:
          "Industrieböden für Produktionflächen, Küchen, Lagerhallen...<br />Bieten hohe Widerstandsfähigkeit gegen Wärme und Chemikalien (Bspw.Industrielle-Reinigungsmittel) <br />Leichte Reinigung da keine Fugen vorhanden sind.",
        beforeAfterTitle: "Vorher | Nachher",
        // Gallery Selection at beginning of page
        filterGalleryAll: "Alle",
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

    applyTranslation("static-part1", translations[currentLang].static.part1);
    applyTranslation("static-part2", translations[currentLang].static.part2);
    applyTranslation("static-part3", translations[currentLang].static.part3);
    applyTranslation("competentHero", translations[currentLang].competentHero);
    applyTranslation(
      "constructionsNeox",
      translations[currentLang].constructionsNeox
    );
    applyTranslation(
      "constructionsNeovision",
      translations[currentLang].constructionsNeovision
    );
    applyTranslation("featuresMore", translations[currentLang].featuresMore);

    let moreInfos = document.querySelectorAll(".moreInfo");
    moreInfos.forEach(
      (info) =>
        (info.innerText =
          translations[currentLang].constructionsNeox.featureElementMore)
    );
    // JS Code for image title on zoom
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
    // END JS Code for image title zoom
  }

  updateStaticText();

  function typeEffect() {
    clearTimeout(typeTimeout);
    const currentWord = translations[currentLang].products[productIndex];

    if (!isDeleting) {
      dynamicText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, pauseTime);
        return;
      }
    } else {
      dynamicText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        productIndex =
          (productIndex + 1) % translations[currentLang].products.length;
      }
    }

    typeTimeout = setTimeout(
      typeEffect,
      isDeleting ? deleteSpeed : typingSpeed
    );
  }

  function switchLanguage() {
    currentLang = currentLang === "en" ? "de" : "en";
    localStorage.setItem("language", currentLang);
    productIndex = 0;
    charIndex = 0;
    isDeleting = false;

    updateStaticText();
    clearTimeout(typeTimeout);
    typeEffect();
    reinitializeIsotope(); // Reinitialize Isotope after language switch
    attachGalleryMarsFilter(); // Reattach event listener for Mars filter
    // 🔹 Preserve the currently selected filter 🔹
    const activeFilter = document.querySelector(
      ".isotope-filters .filter-active"
    );
    if (activeFilter) {
      const filterValue = activeFilter.getAttribute("data-filter");
      console.log("Reapplying filter after language switch:", filterValue);

      if (initIsotope) {
        initIsotope.arrange({ filter: filterValue });
      }
    }
  }

  document.getElementById("toggle-lang").addEventListener("click", function () {
    switchLanguage();
  });

  typeEffect();

  // Function to initialize and reinitialize Isotope
  let initIsotope;
  function reinitializeIsotope() {
    const isotopeContainer = document.querySelector(".isotope-container");
    if (isotopeContainer) {
      if (initIsotope) {
        initIsotope.destroy(); // Ensures the previous instance is destroyed before reinitializing
      }
      initIsotope = new Isotope(isotopeContainer, {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
        filter: "*",
      });

      document.querySelectorAll(".isotope-filters li").forEach((filters) => {
        filters.addEventListener("click", function () {
          document
            .querySelector(".isotope-filters .filter-active")
            .classList.remove("filter-active");
          this.classList.add("filter-active");
          const filterValue = this.getAttribute("data-filter");
          if (initIsotope) {
            initIsotope.arrange({ filter: filterValue });
          }
        });
      });
    }
  }
  window.addEventListener("load", function () {
    reinitializeIsotope();
    attachGalleryMarsFilter();
  });
  function attachGalleryMarsFilter() {
    const marsLink = document.querySelector("#galleryLinkMars");
    if (marsLink) {
      marsLink.addEventListener("click", function (event) {
        event.preventDefault();

        // Scroll smoothly to the gallery section
        const gallerySection = document.querySelector("#projectGallery");
        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        setTimeout(() => {
          // Ensure Isotope is reinitialized after a language switch
          reinitializeIsotope();

          // Remove active class from all filters
          document
            .querySelectorAll(".isotope-filters li")
            .forEach((btn) => btn.classList.remove("filter-active"));

          // Activate Mars filter
          const filterMars = document.querySelector("#filterGalleryMars");
          if (filterMars) {
            filterMars.classList.add("filter-active");

            console.log("Applying filter: .filter-mars");

            // Ensure Isotope instance is available before applying filter
            if (initIsotope) {
              initIsotope.arrange({ filter: ".filter-mars" });

              // Force re-layout to prevent hidden elements
              setTimeout(() => {
                initIsotope.layout();
              }, 50);
            } else {
              console.warn("Isotope not initialized yet.");
            }
          } else {
            console.warn("Mars filter button not found.");
          }
        }, 200);
      });
    }
  }

  //   // Initialize Isotope once the gallery is loaded
  //   window.addEventListener("load", function () {
  //     const isotopeContainer = document.querySelector(".isotope-container");
  //     if (isotopeContainer) {
  //       initIsotope = new Isotope(isotopeContainer, {
  //         itemSelector: ".isotope-item",
  //         layoutMode: "masonry",
  //         filter: "*",
  //       });
  //     }
  //   });

  //   // Add event listener to gallery link (Mars)
  //   document
  //     .querySelector("#galleryLinkMars")
  //     .addEventListener("click", function () {
  //       changeGallery();
  //     });

  //   function changeGallery() {
  //     const filterGalleryAll = document.querySelector("#filterGalleryAll");
  //     const filterGalleryPolaroid = document.querySelector(
  //       "#filterGalleryPolaroid"
  //     );
  //     const filterGalleryMars = document.querySelector("#filterGalleryMars");
  //     const filterGalleryPublic = document.querySelector("#filterGalleryPublic");

  //     if (!filterGalleryMars.classList.contains("filter-active")) {
  //       [filterGalleryAll, filterGalleryPolaroid, filterGalleryPublic].forEach(
  //         (button) => {
  //           if (button.classList.contains("filter-active")) {
  //             button.classList.remove("filter-active");
  //           }
  //         }
  //       );
  //     }

  //     filterGalleryMars.classList.add("filter-active");

  //     const activeFilter = document.querySelector(
  //       ".isotope-filters .filter-active"
  //     );
  //     const filterValue = activeFilter
  //       ? activeFilter.getAttribute("data-filter")
  //       : "*";

  //     if (initIsotope) {
  //       initIsotope.arrange({
  //         filter: filterValue,
  //       });
  //     }
  //   }

  // End new function
});
