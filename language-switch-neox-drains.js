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
          "NEOX Stainless Steel Shower Drains | Custom Sizes & High Drainage Capacity | Neo Building",
        description:
          "Discover high-quality NEOX stainless steel shower drains from Neo Building in Cologne, Germany. With custom solutions, high drainage capacity, and low construction height, we offer the perfect solution for renovations and new builds.",
        keywords:
          "NEOX stainless steel shower drains, custom shower drains, high drainage capacity, low construction height, floor-level shower drains, shower drain solutions, custom sizes, shower drain installation, stainless steel drains, barrier-free shower drains, shower drainage systems, Neo Building Cologne, premium shower drains, bathroom drainage solutions, renovation shower drains, modern shower drains",
      },

      pageContent: {
        siteHeader: "Drains",
        siteCrum: "NEOX",
        siteHeader2: "We bring your ideas to life!",
        // Page Intro
        pageIntroHeader: "Floor-level elegance",
        pageIntroDescription:
          "NEOX shower drains, made of stainless steel, enable a free and continuous floor design. Custom widths and special solutions are standard for us.",
        pageIntroHeader2: "Barrier-free showering",
        pageIntroDescription2:
          "Especially in project planning, design demands the highest level of flexibility. With our custom-made solutions, we can cater to your ideas and support you in implementing your creativity down to the finest detail.",
        pageIntroPointOne: "Extremely low construction height possible",
        pageIntroPointTwo: "High drainage capacity",
        pageIntroPointThree: "Custom widths and special solutions available",
        pageIntroPointFour:
          "Can be installed directly on the wall or at any desired location.",
        pageIntroDescription3:
          "Our stainless steel shower drains can be installed directly on the wall or at any location on the shower floor and integrated into the bonded waterproofing. Due to the low construction height, floor-level showers can even be implemented with minimal floor buildup during renovations.",
        pageInroToGallery: "View images",
        // Call to action references
        callToActionHeader: "Project Experience",
        callToActionDescription:
          "We set extremely high standards for the materials we use, as well as for the shape and functionality of our products. The design of our products is timeless. Our goal has always been, and continues to be, to ensure that you enjoy our products for many years to come. All of our products are designed in-house: from the prototype to series production, including extensive testing to guarantee lasting value and reliability.",
        callToActionLink: "References",
        // Channel E Section Content
        channelEContentHeader:
          "<span class='custom-green'>NEO</span>X Channel E",
        channelEContentPoint1: "Deep-drawn channel",
        channelEContentPoint2: "Stainless steel 1.4301 (all components)",
        channelEContentPoint3: "Without weld seams",
        channelEContentPoint4:
          "Height adjustment via pre-mounted adjustment screws",
        channelEContentPoint5:
          "Integrated sound insulation under the channel feet",
        channelEContentPoint6: "Sealing collar (fleece) factory-applied",
        channelEContentPoint7: "Frame for secondary drainage",
        channelEContentPoint8: "Frame made of stainless steel 1.4301",
        channelEContentPoint9: "Height adjustable from 10 to 20mm",
        channelEContentPoint10:
          "With integrated elegant design drain profile made of solid stainless steel",
        channelEContentPoint11:
          "Integrated cover made of solid stainless steel for easy cleaning",
        channelEContentPoint12: "With integrated drain",
        channelEContentPoint13: "DN50 with flat drain",
        channelEContentPoint14: "DN50 with standard-compliant drain",
        channelEContentPoint15: "DN40 with ultra-flat drain",
        channelEContentPoint16:
          "Odor trap with integrated stainless steel hair strainer",
        //   Call to action examples
        callToActionHeaderExamples: "We find the solution for your ideas!",
        callToActionDescriptionExamples:
          "In addition to our commitment to project business, we have always offered our products to private clients. Benefit from our years of experience in realizing your private construction project. We bring your ideas for a personalized design in space to life. With the highest precision. With products developed by us. Exclusively manufactured in Germany.",
        callToActionLinkExamples: "References",
        // Channel X Section Content
        channelXContentHeader:
          "<span class='custom-green'>NEO</span>X Channel X",
        channelXContentPoint1: "Deep-drawn channel",
        channelXContentPoint2: "Stainless steel 1.4301 (all components)",
        channelXContentPoint3: "Without weld seams",
        channelXContentPoint4:
          "Height adjustment via pre-mounted adjustment screws",
        channelXContentPoint5:
          "Integrated sound insulation under the channel feet",
        channelXContentPoint6: "Sealing collar (fleece) factory-applied",
        channelXContentPoint7: "Frame for secondary drainage",
        channelXContentPoint8: "Frame made of stainless steel 1.4301",
        channelXContentPoint9: "Height adjustable from 10 to 20mm",
        channelXContentPoint10: "Insert cover made of stainless steel 1.4301",
        channelXContentPoint11:
          "Insert reversible: Cover made of brushed stainless steel or usable as a tile recess",
        channelXContentPoint12: "With integrated drain",
        channelXContentPoint13: "DN50 with flat drain",
        channelXContentPoint14: "DN50 with standard-compliant drain",
        channelXContentPoint15: "DN40 with ultra-flat drain",
        channelXContentPoint16:
          "Odor trap with integrated stainless steel hair strainer",
        //   Call to action gallery
        callToActionHeaderGallery: "Further Insights",
        callToActionDescriptionGallery:
          "They say a picture is worth a thousand words. Here, each one speaks of dedication, innovation, and the beauty of precise craftsmanship.",
        callToActionLinkGallery: "Gallery",
        /// Channel S Section Content
        channelSContentHeader:
          "<span class='custom-green'>NEO</span>X Channel S",
        channelSContentPoint1: "Popular in the project sector",
        channelSContentPoint2: "Stainless steel 1.4301 (all components)",
        channelSContentPoint3:
          "Channel cover as tile recess or stainless steel cover. Laser engravings possible.",
        channelSContentPoint4:
          "Height adjustment via pre-mounted adjustment screws",
        channelSContentPoint5:
          "Height adjustment via pre-mounted adjustment screws",
        channelSContentPoint6:
          "Integrated sound insulation under the channel feet",
        channelSContentPoint7: "Sealing collar (fleece) factory-applied",
        channelSContentPoint8: "With integrated drain",
        channelSContentPoint9: "DN50 with flat drain",
        channelSContentPoint10: "DN50 with standard-compliant drain",
        channelSContentPoint11: "DN40 with ultra-flat drain",
        channelSContentPoint12: "Wall upstands available",
        channelSContentPoint13: "One-sided (left, rear, or right)",
        channelSContentPoint14: "Two-sided (left + rear or right + rear)",
        channelSContentPoint15: "Three-sided (left + rear + right)",
        channelSContentPoint16:
          "Odor trap with integrated stainless steel hair strainer",
        /// Channel Drains Section Content
        channelDrainsContentHeader:
          "<span class='custom-green'>NEO</span>X Drains & Features",
        channelDrainsContentPoint1:
          "Sealing collar (fleece) pre-applied at the factory with special adhesive",
        channelDrainsContentPoint2:
          "Construction protection for the sealing collar included in the scope of delivery",
        channelDrainsContentPoint3: "Compliant with DIN 18534",
        channelDrainsContentPoint4:
          "Typically manufactured with DN50 flat drain",
        channelDrainsContentPoint5:
          "Available on request with ultra-flat DN40 drain or",
        channelDrainsContentPoint6:
          "Available on request with standard-compliant drain and a trap water seal height of over 50mm",

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
        titleChannelE: "Channel E",
        titleChannelX: "Channel X",
        titleChannelS: "Channel S",
        titleChannelDrains: "Drains",
        // more info buttons
        moreInfo: "Learn more",
      },
      constructionsNeoxDrains: {
        h2Glas: "Overview",
        pDescriptionNeovision:
          "Minimalistisch und reduziert gestaltete Beschläge aus hochwertigen Materialien unterstreichen die glasklare Ästhetik unserer rahmenlosen Duschtrennwände.",
        // Feature Section
        featureMore: "Drains",
        // NEOX Channel E
        featureChannelETitle:
          "<span class='custom-green'>NEO</span>X Channel E",
        featureChannelEtoVideo: "Channel E Visualization - Video",
        featureChannelEDescription: "Complete Set",
        featureChannelEPointOne: "Shower drain with secondary drainage",
        featureChannelEPointTwo: "Complete set made of stainless steel",
        featureChannelEPointThree: "With elegant design drain cover",
        featureChannelEPointFour: "Custom-made options available",
        // NEOX Channel X
        featureChannelXTitle:
          "<span class='custom-green'>NEO</span>X Channel X",
        featureChannelXtoVideo: "Channel X Visualization - Video",
        featureChannelXDescription: "Complete Set",
        featureChannelXPointOne: "Shower drain with secondary drainage",
        featureChannelXPointTwo: "Complete set made of stainless steel",
        featureChannelXPointThree:
          "Reversible cover – as tile recess or brushed stainless steel cover",
        featureChannelXPointFour:
          "Custom-made options (e.g., wall upstands) available",
        // NEOX Channel S
        featureChannelSTitle:
          "<span class='custom-green'>NEO</span>X Channel S",
        featureChannelSDescription: "Complete Set",
        featureChannelSPointOne: "Popular option among project clients",
        featureChannelSPointTwo: "Complete set made of stainless steel",
        featureChannelSPointThree:
          "With tile recess or with elegant design cover made of stainless steel",
        featureChannelSPointFour: "Wall upstands available",
        // NEOX Ablaeufe
        featureChannelDrainTitle: "Drainage outlets and features",
        featureChannelDrainDescription: "Stainless steel drains",
        featureChannelDrainPointOne:
          "Manufactured as standard with DN50 flat drain",
        featureChannelDrainPointTwo:
          "Available on request with ultra-flat DN40 drain or...",
        featureChannelDrainPointThree:
          "Available on request with standard-compliant drain and a trap water seal height of over 50mm.",
        featureChannelDrainDescription2: "Waterproofing/Sealing",
        featureChannelDrainPointFour:
          "Sealing collar (fleece) pre-applied at the factory with special adhesive",
        featureChannelDrainPointFive:
          "Construction protection for the sealing collar included in the scope of delivery",
        featureChannelDrainPointSix: "Compliant with DIN 18534",
      },
      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title:
          "NEOX Edelstahl-Duschrinnen | Maßanfertigungen & Hohe Ablaufleistung | Neo Building",
        description:
          "Entdecken Sie die hochwertigen NEOX Edelstahl-Duschrinnen von Neo Building aus Köln, Deutschland. Mit maßgeschneiderten Lösungen, hoher Ablaufleistung und niedriger Bauhöhe bieten wir Ihnen die perfekte Lösung für Renovierungen und Neubauten.",
        keywords:
          "NEOX Edelstahl-Duschrinnen, maßgeschneiderte Duschrinnen, hohe Ablaufleistung, niedrige Bauhöhe, bodenebene Duschrinnen, Duschrinnenlösungen, individuelle Größen, Duschrinneninstallation, Edelstahl-Duschrinnen, barrierefreie Duschrinnen, Duschentwässerungssysteme, Neo Building Köln, hochwertige Duschrinnen, Badezimmer-Entwässerungslösungen, Renovierungs-Duschrinnen, moderne Duschrinnen",
      },

      pageContent: {
        siteHeader: "Duschrinnen",
        siteCrum: "NEOX",
        siteHeader2: "Wir finden die Lösung für Ihre Ideen!",
        // Page Intro
        pageIntroHeader: "Bodenebene Eleganz",
        pageIntroDescription:
          "NEOX Duschrinnen, aus Edelstahl gefertigt, ermöglichen eine freie und durchgängige Bodengestaltung. Individuelle Breiten und Sonderlösungen sind dabei für uns Standard.",
        pageIntroHeader2: "Barrierefrei duschen",
        pageIntroDescription2:
          "Gerade bei der Planung im Projektbereich fordert die Gestaltung ein höchstes Maß an Flexibilität. Mit unseren Maßanfertigungen können wir auf Ihre Vorstellungen eingehen und Sie so bei der Umsetzung Ihrer Kreativität bis ins Detail unterstützen.",
        pageIntroPointOne: "Extrem niedrige Bauhöhe möglich",
        pageIntroPointTwo: "Hohe Ablaufleistung",
        pageIntroPointThree: "Individuelle Breiten und Sonderlösungen möglich",
        pageIntroPointFour:
          "Direkt an der Wand oder an beliebiger Stelle zu montieren",
        pageIntroDescription3:
          "Unsere Edelstahlduschrinnen lassen sich direkt an der Wand oder an beliebiger Stelle der Duschfläche montieren und in die Verbundabdichtung integrieren. Durch die niedrige Bauhöhe lassen sich bodenbündige Duschen selbst bei Renovierungen mit nur geringem Bodenaufbau realisieren.",
        pageInroToGallery: "Bilder Ansehen",
        // Call to action references
        callToActionHeader: "Projekt Erfahrung",
        callToActionDescription:
          "Wir stellen extrem hohe Anforderungen an das von uns verwendete Material, an die Form und die Funktionalität. Das Design unserer Produkte ist zeitlos. Unser Ziel war und ist es, dass Sie viele Jahre Freude an unseren Produkten haben. Alle Produkte werden von uns selbst konstruiert: vom Prototyp bis zur Serienreife, mit umfangreichen Tests, damit die Produkte Ihnen wirklich nachhaltigen Nutzen bringen.",
        callToActionLink: "Referenzen",
        // Channel E Section Content
        channelEContentHeader:
          "<span class='custom-green'>NEO</span>X Channel E",
        channelEContentPoint1: "Tiefziehrinne",
        channelEContentPoint2: "Edelstahl 1.4301 (sämtliche Bauteile)",
        channelEContentPoint3: "ohne Schweißnähte",
        channelEContentPoint4:
          "Höhenverstellung über vormontierte Verstellschrauben",
        channelEContentPoint5:
          "Integrierter Schallschutz unter den Rinnenfüßen",
        channelEContentPoint6: "Dichtmanschette (Vlies) werkseitig aufgebracht",
        channelEContentPoint7: "Rahmen für Sekundärentwässerung",
        channelEContentPoint8: "Rahmen aus Edelstahl 1.4301",
        channelEContentPoint9: "höhenverstellbar 10 bis 20mm",
        channelEContentPoint10:
          "mit integriertem elegantem Design-Ablaufprofil aus massivem Edelstahl",
        channelEContentPoint11:
          "integrierte Abdeckung aus massivem Edelstahl zur leichten Reinigung",
        channelEContentPoint12: "mit integriertem Ablauf",
        channelEContentPoint13: "DN50 mit flachem Ablauf",
        channelEContentPoint14: "DN50 mit normgerechtem Ablauf",
        channelEContentPoint15: "DN40 mit superflachem Ablauf",
        channelEContentPoint16:
          "Geruchsverschluss mit integriertem Haarsieb aus Edelstahl",
        //   Call to action examples
        callToActionHeaderExamples: "Wir finden die Lösung für Ihre Ideen!",
        callToActionDescriptionExamples:
          "Nutzen sie unsere langjährige Erfahrung für die Realisierung Ihres Bauvorhabens. Wir lassen Ihre Ideen für eine individuelle Gestaltung im Raum Realität werden. Mit höchster Präzision. Mit von uns entwickelten Produkten. Ausschließlich in Deutschland gefertigt.",
        callToActionLinkExamples: "Referenzen",
        // Channel X Section Content
        channelXContentHeader:
          "<span class='custom-green'>NEO</span>X Channel X",
        channelXContentPoint1: "Tiefziehrinne",
        channelXContentPoint2: "Edelstahl 1.4301 (sämtliche Bauteile)",
        channelXContentPoint3: "ohne Schweißnähte",
        channelXContentPoint4:
          "Höhenverstellung über vormontierte Verstellschrauben",
        channelXContentPoint5:
          "Integrierter Schallschutz unter den Rinnenfüßen",
        channelXContentPoint6: "Dichtmanschette (Vlies) werkseitig aufgebracht",
        channelXContentPoint7: "Rahmen für Sekundärentwässerung",
        channelXContentPoint8: "Rahmen aus Edelstahl 1.4301",
        channelXContentPoint9: "höhenverstellbar 10 bis 20mm",
        channelXContentPoint10: "Einsatzabdeckung aus Edelstahl 1.4301",
        channelXContentPoint11:
          "einsatz wendbar: Abdeckung aus Edelstahl gebürstet oder als Fliesenmulde nutzbar",
        channelXContentPoint12: "mit integriertem Ablauf",
        channelXContentPoint13: "DN50 mit flachem Ablauf",
        channelXContentPoint14: "DN50 mit normgerechtem Ablauf",
        channelXContentPoint15: "DN40 mit superflachem Ablauf",
        channelXContentPoint16:
          "Geruchsverschluss mit integriertem Haarsieb aus Edelstahl",
        //   Call to action examples
        callToActionHeaderExamples: "Wir finden die Lösung für Ihre Ideen!",
        callToActionDescriptionExamples:
          "Nutzen sie unsere langjährige Erfahrung für die Realisierung Ihres Bauvorhabens. Wir lassen Ihre Ideen für eine individuelle Gestaltung im Raum Realität werden. Mit höchster Präzision. Mit von uns entwickelten Produkten. Ausschließlich in Deutschland gefertigt.",
        //   Call to action gallery
        callToActionHeaderGallery: "Weitere Einblicke",
        callToActionDescriptionGallery:
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes Einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",
        callToActionLinkGallery: "Galerie",
        /// Channel S Section Content
        channelSContentHeader:
          "<span class='custom-green'>NEO</span>X Channel S",
        channelSContentPoint1: "Beliebt im Projektbereich",
        channelSContentPoint2: "Edelstahl 1.4301 (sämtliche Bauteile)",
        channelSContentPoint3:
          "Rinnenabdeckung als Fliesenmulde oder Edelstahlabdeckung. Läsergravuren möglich",
        channelSContentPoint4:
          "Höhenverstellung über vormontierte Verstellschrauben",
        channelSContentPoint5:
          "Höhenverstellung über vormontierte Verstellschrauben",
        channelSContentPoint6:
          "Integrierter Schallschutz unter den Rinnenfüßen",
        channelSContentPoint7: "Dichtmanschette (Vlies) werkseitig aufgebracht",
        channelSContentPoint8: "mit integriertem Ablauf",
        channelSContentPoint9: "DN50 mit flachem Ablauf",
        channelSContentPoint10: "DN50 mit normgerechtem Ablauf",
        channelSContentPoint11: "DN40 mit superflachem Ablauf",
        channelSContentPoint12: "Wandaufkantungen möglich",
        channelSContentPoint13: "einseitig (links, hinten oder rechts)",
        channelSContentPoint14: "zweiseitig (links+hinten oder rechts+hinten)",
        channelSContentPoint15: "dreiseitig (links+hinten+rechts)",
        channelSContentPoint16:
          "Geruchsverschluss mit integriertem Haarsieb aus Edelstahl",
        /// Channel Drains Section Content
        channelDrainsContentHeader:
          "<span class='custom-green'>NEO</span>X Abläufe & Features",
        channelDrainsContentPoint1:
          "Dichtmanschette (Vlies) bereits werkseitig mit Spezialkleber aufgebracht",
        channelDrainsContentPoint2:
          "Bauschutz für die Dichtmanschette im Lieferumfang",
        channelDrainsContentPoint3: "DIN 18534 Konform",
        channelDrainsContentPoint4:
          "standardmäßig gefertigt mit Ablauf DN50 flach",
        channelDrainsContentPoint5:
          "auf Wunsch mit superflachem Ablauf DN40 oder",
        channelDrainsContentPoint6:
          "auf Wunsch mit normgerechtem Ablauf Sperrwasserhöhe über 50mm",

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
      constructionsNeoxDrains: {
        h2Glas: "Übersicht",
        pDescriptionNeovision:
          "Minimalistisch und reduziert gestaltete Beschläge aus hochwertigen Materialien unterstreichen die glasklare Ästhetik unserer rahmenlosen Duschtrennwände.",
        // Feature Section
        featureMore: "Abläufe",
        // NEOX Channel E
        featureChannelETitle:
          "<span class='custom-green'>NEO</span>X Channel E",
        featureChannelEtoVideo: "Channel E Visualisierug - Video",
        featureChannelEDescription: "Komplett Set",
        featureChannelEPointOne: "Duschrinne mit Sekundärentwässerung",
        featureChannelEPointTwo: "Komplett-Set aus Edelstahl",
        featureChannelEPointThree: "Mit elegantem Design-Ablauf",
        featureChannelEPointFour: "Sonderanfertigungen möglich",
        // NEOX Channel X
        featureChannelXTitle:
          "<span class='custom-green'>NEO</span>X Channel X",
        featureChannelXtoVideo: "Channel X Visualisierug - Video",
        featureChannelXDescription: "Komplett Set",
        featureChannelXPointOne: "Duschrinne mit Sekundärentwässerung",
        featureChannelXPointTwo: "Komplett-Set aus Edelstahl",
        featureChannelXPointThree:
          "Abdeckung wendbar - als Fliesenmulde oder Abdeckung gebürtet",
        featureChannelXPointFour:
          "Sonderanfertigungen (z.B. Wandaufkantungen) möglich",
        // NEOX Channel S
        featureChannelSTitle:
          "<span class='custom-green'>NEO</span>X Channel S",
        featureChannelSDescription: "Komplett Set",
        featureChannelSPointOne: "Beliebte Variante bei Projektkunden",
        featureChannelSPointTwo: "Komplett-Set aus Edelstahl",
        featureChannelSPointThree:
          "mit Fliesenmulde oder mit eleganter Designabdeckung aus Edelstahl",
        featureChannelSPointFour: "Wandaufkantungen möglich",
        // NEOX Ablaeufe
        featureChannelDrainTitle: "Abläufe und Features",
        featureChannelDrainDescription: "Edelstahl-Abläufe:",
        featureChannelDrainPointOne:
          "standardmäßig gefertigt mit Ablauf DN50 flach",
        featureChannelDrainPointTwo:
          "auf Wunsch mit superflachem Ablauf DN40 oder",
        featureChannelDrainPointThree:
          "auf Wunsch mit normgerechtem Ablauf Sperrwasserhöhe über 50mm",
        featureChannelDrainDescription2: "Abdichtung",
        featureChannelDrainPointFour:
          "Dichtmanschette (Vlies) bereits werkseitig mit Spezialkleber aufgebracht",
        featureChannelDrainPointFive:
          "Bauschutz für die Dichtmanschette im Lieferumfang",
        featureChannelDrainPointSix: "DIN 18534 Konform",
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
