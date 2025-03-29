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
          "NEOVISION Premium Shower Enclosures - Custom Glass Showers for Every Space | NEO Building",
        description:
          "NEOVISION Premium Shower Enclosures offer custom glass shower solutions designed for every space. Crafted with precision and durability, our shower enclosures are perfect for both residential and commercial projects. Located in Cologne, NRW, NEO Building delivers high-quality, tailored shower enclosures, ensuring comfort and style in every installation/situation.",
        keywords:
          "NEOVISION shower enclosures, custom glass showers, frameless glass shower enclosures, premium shower enclosures, luxury glass shower partitions, tailored shower enclosures, glass shower systems, modern shower enclosures, shower enclosures for homes, commercial shower enclosures, custom glass shower designs, bespoke shower enclosures, shower enclosure installation, durable shower enclosures, high-quality glass showers, Cologne shower enclosures, NRW shower solutions",
      },

      pageContent: {
        siteHeader: "Showers",
        siteCrum: "NEOVISION",
        siteHeader2: "We bring your ideas to life!",
        // Page Intro
        pageIntroHeader: "Expertise in Glass Integration",
        pageIntroDescription:
          "Minimalist and streamlined fittings made from high-quality materials emphasize the crystal-clear aesthetic of our frameless shower enclosures.",
        pageIntroHeader2: "Philosophy",
        pageIntroDescription2:
          "Design, materiality, and manufacturing technology are mutually dependent. To meet the highest standards every day, we therefore rely exclusively on",
        pageIntroPointOne: "Our own design",
        pageIntroPointTwo: "Our own product development",
        pageIntroPointThree: "Our own manufacturing",
        pageIntroDescription3:
          "We offer a range of shower enclosure solutions tailored to your individual needs and project requirements.",
        pageInroToGallery: "View Images",
        // Call to action references
        callToActionHeader: "Project Experience",
        callToActionDescription:
          "We set extremely high standards for the materials we use, as well as for the shape and functionality of our products. The design of our products is timeless. Our goal has always been, and continues to be, to ensure that you enjoy our products for many years to come. All of our products are designed in-house: from the prototype to series production, including extensive testing to guarantee lasting value and reliability.",
        callToActionLink: "References",
        // Classic Section Content
        classicContentHeader:
          "<span class='custom-green'>NEOVISION</span> Classic: Modern Classic",
        classicContentDescription:
          "The hinged door of the NEOVISION Classic series, made from 8 mm thick safety glass, can be attached directly to the wall or to a fixed element in alignment or overlapping, at an angle of 90° or 135°. With the extensive hardware system, nearly all shower configurations can be realized.",
        classicContentDescription2:
          "The almost flush interior construction of the highly polished chrome-plated hardware made of solid brass ensures the highest possible sealing and optimal cleaning comfort. The splash-proof lifting-lowering mechanism guarantees maximum durability and is infinitely adjustable in height, as well as the closing angle of the door.",
        classicContentHeader2:
          "<span class='custom-green'>NEOVISION</span> Classic - Overview",
        classicContentDescription3:
          "The minimalist, delicate design of the NEOVISION Classic fittings gives the frameless clear glass shower timeless elegance and maximum transparency.",
        classicContentPoint1: "Frameless all-glass shower enclosure",
        classicContentPoint2: "Made of 8mm safety glass (clear)",
        classicContentPoint3:
          "Pivot door fittings fixed at the top and bottom of the glass",
        classicContentPoint4:
          "Lift-and-lower mechanism made of stainless steel, adjustable",
        classicContentPoint5:
          "Lift-and-lower mechanism protected from splash water",
        classicContentPoint6: "Angle system flush on the inside",
        classicContentPoint7:
          "Fitting made of solid brass, high-gloss chrome-plated",
        classicContentPoint8:
          "Custom fittings with powder coating/PVD coating, e.g. matte black, available",
        //   Call to action examples
        callToActionHeaderExamples: "We find the solution for your ideas!",
        callToActionDescriptionExamples:
          "In addition to our commitment to project business, we have always offered our products to private clients. Benefit from our years of experience in realizing your private construction project. We bring your ideas for a personalized design in space to life. With the highest precision. With products developed by us. Exclusively manufactured in Germany.",
        callToActionLinkExamples: "Shower configurations",
        // Pura Section Content
        puraContentHeader:
          "<span class='custom-green'>NEOVISION</span> Pura: Pure Minimalism",
        puraContentDescription:
          "The purism of the frameless clear glass shower made from 8 mm safety glass is evident on the completely flush interior. The elegant, straight-line fittings made of highly polished or chrome-plated stainless steel are positioned at the same height. The doors open outward, with the integrated lift-and-lower mechanism allowing an opening angle of up to 180°, depending on the room layout.",
        puraContentDescription2:
          "NEOVISION Pura is ideal for showers with a door attachment to a glass element. The wall-mounted fixation of the fixed glass element can be made either with a flush-mounted wall angle or alternatively with the delicate NEOX U-profile made of polished stainless steel. With the extensive fitting system, almost all imaginable shower situations can be realized. <br /> Upon request, the NEOVISION Pura fittings can also be made from TITANIUM.",
        puraContentHeader2:
          "<span class='custom-green'>NEOVISION</span> Pura - An Overview",
        puraContentDescription3:
          "The minimalism of the frameless clear glass shower made of 8 mm safety glass is reflected in the completely flush inner side. The elegant, straight-line fittings made of highly polished or chrome-plated stainless steel are aligned at the same height. The doors, with an integrated lift-and-lower mechanism, open outward, and depending on the space situation, can open up to an angle of 180°.",
        puraContentPoint1: "Frameless full-glass shower partition",
        puraContentPoint2: "Made of 8mm safety glass (clear)",
        puraContentPoint3:
          "Fitting parts of the pivot door, angles, and wall angles at the same height",
        puraContentPoint4:
          "Fittings recessed from the top and bottom edge of the glass",
        puraContentPoint5: "Lift-and-lower mechanism",
        puraContentPoint6:
          "Minimalist fitting system, completely flush on the inside",
        puraContentPoint7:
          "Wall connection with adjustable wall angle possible",
        puraContentPoint8:
          "Wall connection with NEOX U-profile made of polished or brushed stainless steel possible",
        //   Call to action gallery
        callToActionHeaderGallery: "Further Insights",
        callToActionDescriptionGallery:
          "They say a picture is worth a thousand words. Here, each one speaks of dedication, innovation, and the beauty of precise craftsmanship.",
        callToActionLinkGallery: "Gallery",
        // Easy Section Content
        easyContentHeader:
          "<span class='custom-green'>NEOVISION</span> Easy: Simply Good",
        easyContentDescription:
          "The extremely robust hardware system of the NEOVISION Easy, made of solid brass with maintenance-free bearings, is perfectly suited for the project sector. Upon request, this hardware system can also accommodate 10 mm thick safety glass in addition to the standard 8 mm glass.",
        easyContentDescription2:
          "Glass showers with a height of 250 cm can also be easily realized with the NEOVISION Easy hardware.",
        easyContentHeader2:
          "<span class='custom-green'>NEOVISION</span> Easy - Overview",
        easyContentDescription3:
          "NEOVISION Easy is suitable for attaching the door directly to the wall, for mounting on a side panel at a 90° angle, or for attaching the hinged door in alignment with a fixed panel.",
        easyContentPoint1: "Frameless glass shower partition.",
        // easyContentPoint2: "Made of 8mm safety glass (clear).",
        easyContentPoint3: "Made of 8mm safety glass (clear).",
        easyContentPoint4:
          "Fitting parts of the pivot door, corners, and wall angles aligned at the same height.",
        easyContentPoint5:
          "Fittings recessed from the top and bottom edges of the glass.",
        easyContentPoint6: "Maintenance-free glide bearings.",
        easyContentPoint7:
          "The angle of the wall mount is continuously adjustable from 5° to 180° (aligned).",
        easyContentPoint8:
          "Wall connection with stainless steel wall strip possible.",

        // Image Section Content
        filterAll: "All",

        pleaseNote:
          "They say an image is worth a thousand words. Here, each one speaks of dedication, innovation, and the beauty of precision craftsmanship.",
        descriptionClassic: "Modern Classic",
        descriptionEasy: "Simply Good",
        descriptionPura: "Pure Minimalism",
        descriptionWalkIn: "Additional Custom Solutions",
        goToProjects: "References",
        goToPrivate: "Neo Building for private customers",
        titleClassic: "NEOVISION Classic",
        titleEasy: "NEOVISION Easy",
        titlePura: "NEOVISION Pura",
        titleWalkIn: "NEOVISION Walk-In",
        // more info buttons
        moreInfo: "Learn more",
      },
      constructionsNeovision: {
        h2Glas: "Overview",
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
      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title:
          "NEOVISION Premium Duschabtrennungen - Maßgeschneiderte Glasduschen für Jeden Raum | NEO Building",
        description:
          "NEOVISION Premium Duschabtrennungen bieten maßgeschneiderte Glaslösungen für jede Räumlichkeit. Mit Präzision und Langlebigkeit gefertigt, sind unsere Duschabtrennungen ideal für private und gewerbliche Projekte. Mit Sitz in Köln, NRW, liefert NEO Building hochwertige, individuell angefertigte Duschabtrennungen, die Komfort und Stil in jeder Installation/Situation garantieren.",
        keywords:
          "NEOVISION Duschabtrennungen, maßgeschneiderte Glasduschen, rahmenlose Glas-Duschabtrennungen, Premium Duschabtrennungen, luxuriöse Glas-Duschtrennwände, individuelle Duschabtrennungen, Glas-Duschsysteme, moderne Duschabtrennungen, Duschabtrennungen für Privathaushalte, gewerbliche Duschabtrennungen, maßgefertigte Glasduschen, maßgeschneiderte Duschabtrennungen, Duschabtrennungsinstallation, langlebige Duschabtrennungen, hochwertige Glasduschen, Duschabtrennungen Köln, NRW Duschlösungen",
      },

      pageContent: {
        siteHeader: "Glasduschen",
        siteCrum: "NEOVISION",
        siteHeader2: "Wir finden die Lösung für Ihre Ideen!",
        // Page Intro
        pageIntroHeader: "Kompetenz bei der Verbindung von Glas",
        pageIntroDescription:
          "Minimalistisch und reduziert gestaltete Beschläge aus hochwertigen Materialien unterstreichen die glasklare Ästhetik unserer rahmenlosen Duschtrennwände.",
        pageIntroHeader2: "Philosophie",
        pageIntroDescription2:
          " Design, Materialität und Fertigungstechnik bedingen sich wechselseitig. Um täglich höchsten Ansprüchen gerecht zu werden, setzen wir deshalb ausnahmslos auf",
        pageIntroPointOne: "Eigenes Design",
        pageIntroPointTwo: "Eigene Produktentwicklung",
        pageIntroPointThree: "Eigene Fertigung",
        pageIntroDescription3:
          "Wir bieten Ihnen verschiedene Lösungen für Duschabtrennungen ganz auf Ihre Bedürfnisse und Planung zugeschnitten.",
        pageInroToGallery: "Bilder Ansehen",
        // Call to action references
        callToActionHeader: "Projekt Erfahrung",
        callToActionDescription:
          "Wir stellen extrem hohe Anforderungen an das von uns verwendete Material, an die Form und die Funktionalität. Das Design unserer Produkte ist zeitlos. Unser Ziel war und ist es, dass Sie viele Jahre Freude an unseren Produkten haben. Alle Produkte werden von uns selbst konstruiert: vom Prototyp bis zur Serienreife, mit umfangreichen Tests, damit die Produkte Ihnen wirklich nachhaltigen Nutzen bringen.",
        callToActionLink: "Referenzen",
        // Classic Section Content
        classicContentHeader:
          "<span class='custom-green'>NEOVISION</span> Classic: Moderner Klassiker",
        classicContentDescription:
          "Die Drehtür der Serie NEOVISION Classic aus 8 mm strarkem Sicherheitsglas lässt sich sowohl direkt an der Wand befestigen als auch an einem Festelement in Flucht oder auch überlappend, im Winkel von 90° oder 135°. Mit dem umfangreichen Beschlagsystem lassen sich nahezu alle Duschsituationen realisieren.",
        classicContentDescription2:
          "Die innen fast flächenbündige Konstruktion des hochglänzend verchromten Beschlages aus massivem Messing sorgt für höchtmögliche Dichtigkeit und optimalen Reinigungskomfort. Der vor Spritzwasser geschützte Hebe-Senk-Mechanismus garantiert maximale Langlebigkeit und ist in der Höhe ebenso stufenlos einstellbar wie der Schließwinkel der Tür.",
        classicContentHeader2:
          "<span class='custom-green'>NEOVISION</span> Classic - Im Überblick",
        classicContentDescription3:
          "Das minimalistische, filigrane Design des NEOVISION Classic Beschlages verleiht der rahmenlosen Echtglasdusche zeitlose Eleganz und maximale Transparenz.",
        classicContentPoint1: "Rahmenlose Ganzglas-Duschabtrennung",
        classicContentPoint2: "Aus 8mm Sicherheitsglas (hell)",
        classicContentPoint3:
          "Drehtür-Beschläge oben und unten am Glas befestigt",
        classicContentPoint4: "Hebe-Senk-Mechanismus aus Edelstahl, justierbar",
        classicContentPoint5:
          "Hebe-Senk-Mechanismus vor Spritzwasser geschützt",
        classicContentPoint6: "Winkelsystem innen flächenbündig",
        classicContentPoint7:
          "Beschlag aus massivem Messing, hochglanz verchromt",
        classicContentPoint8:
          "Sonderanfertigungen des Beschlags mit Pulverbeschichtung/PVD Beschichtung z.B schwarzmatt möglich",
        //   Call to action examples
        callToActionHeaderExamples: "Wir finden die Lösung für Ihre Ideen!",
        callToActionDescriptionExamples:
          "Neben unserem Engagement im Projektgeschäft haben wir stets unsere Produkte auch Privatkunden angeboten. Nutzen sie unsere langjährige Erfahrung für die Realisierung Ihres privaten Bauvorhabens. Wir lassen Ihre Ideen für eine individuelle Gestaltung im Raum Realität werden. Mit höchster Präzision. Mit von uns entwickelten Produkten. Ausschließlich in Deutschland gefertigt.",
        callToActionLinkExamples: "Duschsituationen",
        // Pura Section Content
        puraContentHeader:
          "<span class='custom-green'>NEOVISION</span> Pura: Minimalismus Pur",
        puraContentDescription:
          "Der Purismus der rahmenlosen Echtglasdusche aus 8 mm Sicherheitsglas zeigt sich auf der völlig flächenbündigen Innenseite. Die edlen, geradlinigen Beschlagelemente aus hochglänzend poliertem oder verchromtem Edelstahl präsentieren sich jeweils auf einer Höhe. Die Öffnung der Türen mit integriertem Hebe-Senk-Mechanismus erfolgt nach außen, je nach Raumsituation bis zu einem Öffnungswinkel von 180°.",
        puraContentDescription2:
          " NEOVISION Pura bietet sich an für Duschen mit Türanschlag an einem Glaselement. Die wandgebundene Befestigung des festen Glaselements ist sowohl mit innen flächenbündigem Wandwinkel oder alternativ mit dem filigranen NEOX U-Profil aus poliertem Edelstahl möglich. So lassen sich mit dem umfangreichen Beschlagsystem nahezu alle erdenklichen Duschsituationen realisieren. <br /> Auf Wunsch werden die NEOVISION Pura Beschläge auch aus TITAN gefertigt.",
        puraContentHeader2:
          "<span class='custom-green'>NEOVISION</span> Pura - Im Überblick",
        puraContentDescription3:
          " Der Purismus der rahmenlosen Echtglasdusche aus 8 mm Sicherheitsglas zeigt sich auf der völlig flächenbündigen Innenseite. Die edlen, geradlinigen Beschlagelemente aus hochglänzend poliertem oder verchromtem Edelstahl präsentieren sich jeweils auf einer Höhe. Die Öffnung der Türen mit integriertem Hebe-Senk-Mechanismus erfolgt nach außen, je nach Raumsituation bis zu einem Öffnungswinkel von 180°.",
        puraContentPoint1: "Rahmenlose Ganzglas-Duschabtrennung",
        puraContentPoint2: "Aus 8mm Sicherheitsglas (hell)",
        puraContentPoint3:
          "Beschlagteile von Drehtür, Winkeln und Wandwinkeln auf einer Höhe",
        puraContentPoint4:
          "Beschläge von Ober- und Unterkante des Glases eingerückt",
        puraContentPoint5: "Hebe-Senk-Mechanismus",
        puraContentPoint6:
          "Minimalistisches Beschlagsystem innen völlig flächenbündig",
        puraContentPoint7:
          "Wandanbindung mit vielfach verstellbarem Wandwinkel möglich",
        puraContentPoint8:
          "Wandanbindung mit NEOX U-Profil aus poliertem oder geschliffenem Edelstahl möglich",
        //   Call to action gallery
        callToActionHeaderGallery: "Weitere Einblicke",
        callToActionDescriptionGallery:
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",
        callToActionLinkGallery: "Galerie",
        // Easy Section Content
        easyContentHeader:
          "<span class='custom-green'>NEOVISION</span> Easy: Einfach Gut",
        easyContentDescription:
          "Das extrem robuste Beschlagsystem der NEOVISION Easy aus massivem Messing, mit wartungsfreien Gleitlagern, ist perfekt geeignet für den Projektbereich. Auf Wunsch kann bei diesem Beschlagsystem neben dem Standardglas in 8 mm auch ein 10 mm starkes Sicherheitsglas verbaut werden.",
        easyContentDescription2:
          "Auch Glasduschen mit einer Höhe von 250 cm können mit dem Beschlag NEOVISION Easy problemlos realisiert werden.",
        easyContentHeader2:
          "<span class='custom-green'>NEOVISION</span> Easy - Im Überblick",
        easyContentDescription3:
          "NEOVISION Easy eignet sich für die Befestigung der Tür direkt an der Wand, für die Befestigung an einem Seitenteil über 90° oder auch für die Befestigung der Drehtür in Flucht an einem Festelement.",
        easyContentPoint1: "Rahmenlose Ganzglas-Duschabtrennung",
        // easyContentPoint2: "Aus 8mm Sicherheitsglas (hell)",
        easyContentPoint3: "Aus 8mm Sicherheitsglas (hell)",
        easyContentPoint4:
          "Beschlagteile von Drehtür, Winkeln und Wandwinkeln auf einer Höhe",
        easyContentPoint5:
          "Beschläge von Ober- und Unterkante des Glases eingerückt",
        easyContentPoint6: "Wartungsfreie Gleitlager",
        easyContentPoint7:
          "Winkel der Wandbefestigung stufenlos von 5° bis 180° (fluchtend) einstellbar",
        easyContentPoint8: "Wandanbindung mit Wandleiste aus Edelstahl möglich",
        // Image Section Content
        filterAll: "Alle",
        pleaseNote:
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",
        descriptionClassic: "Moderner Klassiker",
        descriptionEasy: "Einfach Gut.",
        descriptionPura: "Minimalismus Pur.",
        descriptionWalkIn: "Weitere Sonderanfertigungen",
        goToProjects: "Referenzen",
        goToPrivate: "Neo Building für Privatkunden",
        titleClassic: "NEOVISION Classic",
        titleEasy: "NEOVISION Easy",
        titlePura: "NEOVISION Pura",
        titleWalkIn: "NEOVISION Walk-In",
        // more Link
        moreInfo: "Mehr Erfahren",
      },
      constructionsNeovision: {
        h2Glas: "Übersicht",
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
          "Sonderanfertigungen des Beschlages mit Pulverbeschichtung/PVD z.B. schwarzmatt möglich",
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
