document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach((e) => {
    e.setAttribute("loading", "lazy");
  });
  const e = document.getElementById("dynamic-text"),
    t = {
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
          part1: "Stainless steel components",
          part2: "Industrial flooring",
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
          featureDrainsTitle: "Stainless Steel Systems",
          featureDrainsDescription:
            "Stainless steel drainage technology for produktion sites, warehouses, scullerys, outdoor areas and more.",
          featureDrainsPointOne:
            "Gutter body and drainage element made from 100% stainless steel",
          featureDrainsPointTwo: "Custom-made solutions are our standard",
          featureDrainsPointThree:
            "Seamless transition to NEOXID<sup>®</sup> <a href='#featuresMore' class='custom-link'>industrial flooring</a>",
          featureDrainsPointThree2: "industrial flooring",
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
          featureShowerDrainTitle: "Stainless steel shower drains...",
          featureShowerDrainDescription:
            "allow for a free and continuous floor design. Custom widths and special solutions are standard for us.",
          featureShowerDrainPointOne: "Complete set made of stainless steel.",
          featureShowerDrainPointTwo: "Wall lip/upstand possible",
          featureShowerDrainPointThree: "Custom lengths available",
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
          moreThan: "More than",
          happyCustomer: "Satisfied Customers",
          projectsDone: "Projects Completed",
          glasUsed: "Tons of glass installed",
          steelUsed: "Tons of stainless steel processed",
          siteHeader2: "Overview",
          siteHeader3: "We bring your ideas to life!",
          imagesOfWork: "Images of our work",
          imagesOfWorkDescription:
            "They say an image is worth a thousand words. Here, each one speaks of dedication, innovation, and the beauty of precision craftsmanship.",
          toGallery: "To the Gallery",
          titleMarsNew: "Mars: New",
          titlePolaroidNew: "Polaroid: New",
          titleMarsConstruction: "Mars: Construction",
          titlePolaroidConstruction: "Polaroid: Construction",
          descriptionMars:
            "5m high wall elements, new industrial flooring, new drains, new impact protection, and more.",
          descriptionPolaroid:
            "The work carried out by us: planning, removal/demolition of the old floor, manufacturing of new drains and channels (100% stainless steel) as well as their assembly/installation, and the application of a new industrial floor according to customer requirements.",
          projectExperience: "Project Experience",
          referencesDescription:
            "We place extremely high demands on the materials we use, as well as on the design and functionality. </br>The design of our products is timeless. Our goal has always been to ensure that you enjoy our products for many years to come. </br>All products are developed in-house: from prototype to series production, with extensive testing to ensure that they provide you with lasting value.",
          toReference: "References",
        },
        constructionsNeovision: {
          h2Glas: "Shower enclosures",
          pDescriptionNeovision:
            "Minimalist and sleekly designed fittings made from high-quality materials emphasize the crystal-clear aesthetics of our frameless shower partitions.",
          featureMore: "Mehr",
          featureCLassicTitle:
            "<span class='custom-green'>NEOVISION</span> Classic",
          featureCLassicDescription:
            "The minimalist, delicate design of the NEOVISION Classic fitting gives the frameless real glass shower timeless elegance and maximum transparency.",
          featureCLassicPointOne: "Frameless full-glass shower enclosure",
          featureCLassicPointTwo:
            "Pivot door fittings mounted at the top and bottom of the glass",
          featureCLassicPointThree:
            "Custom-made fittings with powder coating/PVD, e.g., matte black, available",
          featurePuraTitle: "<span class='custom-green'>NEOVISION</span> Pura",
          featurePuraDescription:
            "The purist design of the frameless real glass shower made of 8 mm toughened safety glass is reflected in the completely flush inner surface.",
          featurePuraPointOne: "Frameless all-glass shower enclosure",
          featurePuraPointTwo:
            "Fittings recessed from the top and bottom edges of the glass",
          featurePuraPointThree:
            "Wall connection possible with highly adjustable wall brackets",
          featureEasyTitle: "<span class='custom-green'>NEOVISION</span> Easy",
          featureEasyDescription:
            "The extremely robust fitting system of the NEOVISION Easy, made of solid brass with maintenance-free plain bearings, is perfectly suited for project applications.",
          featureEasyPointOne: "Frameless all-glass shower enclosure",
          featureEasyPointTwo:
            "Fittings set back from the top and bottom edges of the glass",
          featureEasyPointThree:
            "Wall connection possible with stainless steel wall profile",
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
          featureFloorsTitle: "Industrial flooring – customized to your needs",
          featureFloorsDescription: "We implement",
          featureFloorsPointOne: "durable and resilient flooring solutions for",
          featureFloorsPointTwo:
            "factories, industrial kitchens, and warehouses",
          featureFloorsPointThree: "with or without custom drainage systems",
          featureFloorsDescription2: "Our focus is on",
          featureFloorsPointFour:
            "implementing according to the individual wishes and requirements of our customers and partners",
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
          featureSpecialsTitle: "Handcrafted products for the living space",
          featureSpecialsDescription:
            "Do you need a glass door or room divider, are you looking for the perfect towel holder or a door lock? You’ll find what you’re looking for in our range of products.",
          featureSpecialsPointOne: "Glass doors & sliding doors",
          featureSpecialsPointTwo: "Backsplashes (backsplash glazing)",
          featureSpecialsPointThree: "Room dividers made of composite glass",
          featureSpecialsPointFour: "Desks",
          featureSpecialsPointFive: "Shelf and storage systems",
          featureSpecialsPointSix: "Handles and towel holders",
          featureRenoboxTitle: "The Modular Bathroom",
          featureRenoboxDescription:
            "The following short film provides you with a deeper understanding of the brand structure of NEO Building GmbH, as well as an animated rendering offering insight into the concept: REN<span style='color: #0baf16'>O</span>BOX<sup>®</sup> - The Modular Bathroom.",
          featureRenoboxPointOne: "Please turn on your sound.",
          featureRenoboxPointTwo: "Play Concept Film",
          h2More: "Industrial Floors",
          pDescriptionMore:
            "Industrial floors for production areas, kitchens, warehouses...</br>Offer high resistance to heat and chemicals (e.g., industrial cleaning agents)</br>Easy to clean thanks to seamless surfaces.",
          beforeAfterTitle: "Before | After",
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
          featureDrainsTitle: "Edelstahl Entwässerung",
          featureDrainsDescription:
            "Edelstahl Entwässerungstechnologie für Produktionsräume, Lagerhallen, Spülräume/-küchen, Außenbereiche und mehr.",
          featureDrainsPointOne:
            "Rinnenkörper und Abläufe komplett aus Edelstahl",
          featureDrainsPointTwo: "Sonderanfertigungen als Standard",
          featureDrainsPointThree:
            "Nahtloser Übergang zu NEOXID<sup>®</sup> <a href='#featuresMore' class='custom-link'>Industrieböden</a>",
          featureDrainsPointThree2: "Industrieböden",
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
          featureShowerDrainTitle: "Duschrinnen aus Edelstahl...",
          featureShowerDrainDescription:
            "ermöglichen eine freie und durchgängige Bodengestaltung Individuelle Breiten und Sonderlösungen sind dabei für uns Standard.",
          featureShowerDrainPointOne: "Komplett-Set aus Edelstahl",
          featureShowerDrainPointTwo: "Wandaufkantungen möglich",
          featureShowerDrainPointThree: "Sonderlängen möglich",
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
          moreThan: "Mehr als",
          happyCustomer: "Zufriedene Kunden",
          projectsDone: "Bauvorhaben abgeschlossen",
          glasUsed: "Tonnen Glas verbaut",
          steelUsed: "Tonnen Edelstahl verarbeitet",
          siteHeader2: "Überblick",
          siteHeader3: "Wir finden die Lösung für Ihre Ideen!",
          imagesOfWork: "Bilder unserer Arbeiten",
          imagesOfWorkDescription:
            "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes Einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",
          toGallery: "Zur Galerie",
          titleMarsNew: "Mars: Zustand Neu",
          titlePolaroidNew: "Polaroid: Zustand Neu",
          titleMarsConstruction: "Mars: Montage",
          titlePolaroidConstruction: "Polaroid: Montage",
          descriptionMars:
            "5m hohe Wandelemente, neuer Industrieboden, neue Abläufe, neuer Rammschutz und weiteres.",
          descriptionPolaroid:
            "Die durch uns durchgeführten Arbeiten: Planung, Entfernung/ Abtragen des Alten Bodens, Fertigung neuer Rinnen und Abläufe(100% Edelstahl) sowie deren Montage/Installation, Einbringung neuen Industriebodens gemäß Kundenwunsch.",
          projectExperience: "Projekt Erfahrung",
          referencesDescription:
            "Wir stellen extrem hohe Anforderungen an das von uns verwendete Material, an die Form und die Funktionalität. Das Design unserer Produkte ist zeitlos. Unser Ziel war und ist es, dass Sie viele Jahre Freude an unseren Produkten haben. Alle Produkte werden von uns selbst konstruiert: vom Prototyp bis zur Serienreife, mit umfangreichen Tests, damit die Produkte Ihnen wirklich nachhaltigen Nutzen bringen.",
          toReference: "Referenzen",
        },
        constructionsNeovision: {
          h2Glas: "Glasduschen",
          pDescriptionNeovision:
            "Minimalistisch und reduziert gestaltete Beschläge aus hochwertigen Materialien unterstreichen die glasklare Ästhetik unserer rahmenlosen Duschtrennwände.",
          featureMore: "Mehr",
          featureCLassicTitle:
            "<span class='custom-green'>NEOVISION</span> Classic",
          featureCLassicDescription:
            "Das minimalistische, filigrane Desing des NEOVISION Classic Beschlages verleiht der rahmenlosen Echtglasdusche zeitlose Eleganz und maximale Transparenz.",
          featureCLassicPointOne: "Rahmenlose Ganzglas-Duschabtrennung",
          featureCLassicPointTwo:
            "Drehtür-Beschläge oben und unten am Glas befestigt",
          featureCLassicPointThree:
            "Sonderanfertigungen des Beschlages mit Pulverbeschichtung/PVD z.B. Schwarzmatt möglich",
          featurePuraTitle: "<span class='custom-green'>NEOVISION</span> Pura",
          featurePuraDescription:
            "Der Purismus der rahmenlosen Echtglasdusche aus 8 mm Sicherheitsglas zeigt sich auf der völlig flächenbündigen Innenseite.",
          featurePuraPointOne: "Rahmenlose Ganzglas-Duschabtrennung",
          featurePuraPointTwo:
            "Beschläge von Ober- und Unterkante des Glases eingerückt",
          featurePuraPointThree:
            "Wandanbindung mit vielfach verstellbarem Wandwinkel möglich",
          featureEasyTitle: "<span class='custom-green'>NEOVISION</span> Easy",
          featureEasyDescription:
            "Das extrem robuste Beschlagsystem der NEOVISION Easy aus massivem Messing mit wartungsfreien Gleitlagern ist perfekt geeignet für den Projektbereich.",
          featureEasyPointOne: "Rahmenlose Ganzglas-Duschabtrennung",
          featureEasyPointTwo:
            "Beschläge von Ober- und Unterkante des Glases eingerückt",
          featureEasyPointThree:
            "Wandanbindung mit Wandleiste aus Edelstahl möglich",
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
          featureMirrorsTitle: "Brillanz im Bad",
          featureMirrorsDescription:
            "Unsere Spiegel und Leuchtspiegel werden für Sie in den von Ihnen benötigten Maßen gefertigt. Die Leuchtspiegel werden mit hochwertigen Leuchtmitteln ausgestattet, in der von Ihnen gewünschten Wattage (Leistung) und Lichtfarbe (warmweiß/kaltweiß).",
          featureMirrorsPointOne: "Auf Maß für Sie gefertigt",
          featureMirrorsPointTwo: "Alle Spiegel auf Wunsch mit Spiegelheizung.",
          featureMirrorsPointThree:
            "Individuelle Breiten und Sonderlösungen möglich",
          featureMirrorsPointFour:
            "Platzierung der Leuchtmittel in der Spiegelfläche frei wählbar",
          featureSpecialsTitle: "Manufakturprodukte für den Wohnraum",
          featureSpecialsDescription:
            "Sie benötigen eine Tür oder einen Raumteiler aus Glas, sind auf der Suche nach dem passenden Handtuchhalter oder einem Türverschluss? Bei den weiteren Produkten unseres Sortiments werden Sie fündig.",
          featureSpecialsPointOne: "Türen & Schiebetüren aus Glas",
          featureSpecialsPointTwo: "Rückwandverglasungen",
          featureSpecialsPointThree: "Raumteiler aus Verbundglas",
          featureSpecialsPointFour: "Schreibtische",
          featureSpecialsPointFive: "Regal- und Ablagesysteme",
          featureSpecialsPointSix: "Griffe und Handtuchhalter",
          featureRenoboxTitle: "Das Modulare Bad",
          featureRenoboxDescription:
            "Der folgende kurze Film bietet Ihnen ein tieferes Verständnis der Markenstruktur der NEO Building GmbH sowie ein animiertes Rendering für einen Einblick in das Konzept: REN<span style='color: #0baf16'>O</span>BOX<sup>®</sup> - Das Modulare Bad.",
          featureRenoboxPointOne: "Bitte schalten Sie Ihren Ton ein",
          featureRenoboxPointTwo: "Konzept Film Abspielen",
          h2More: "Industrieböden",
          pDescriptionMore:
            "Industrieböden für Produktionflächen, Küchen, Lagerhallen...<br />Bieten hohe Widerstandsfähigkeit gegen Wärme und Chemikalien (Bspw.Industrielle-Reinigungsmittel) <br />Leichte Reinigung da keine Fugen vorhanden sind.",
          beforeAfterTitle: "Vorher | Nachher",
          filterGalleryAll: "Alle",
        },
        imageTitleZoom:
          "Bei Fragen zu einzelnen Produkten oder Beratungsbedarf erreichen Sie uns unter info@neo-building.com oder telefonisch unter +49-221-95490929-0",
      },
    };
  let n = (navigator.language || navigator.userLanguage).includes("de")
      ? "de"
      : "en",
    r = localStorage.getItem("language"),
    i = r || n;
  r || localStorage.setItem("language", i);
  let s = 0,
    o = 0,
    a = !1;
  const l = 200,
    u = 4e3,
    d = 100;
  let c, f;
  function g() {
    document.title = t[i].meta.title;
    const e = document.querySelector("meta[name='description']");
    function n(e, t) {
      const r = document.querySelector(`#${e}`);
      r &&
        ("string" == typeof t
          ? (r.innerHTML = t)
          : "object" == typeof t &&
            Object.keys(t).forEach((e) => {
              n(e, t[e]);
            }));
      const i = document.querySelectorAll(`.${e}`);
      i &&
        "string" == typeof t &&
        i.forEach((e) => {
          e.innerHTML = t;
        });
    }
    e && e.setAttribute("content", t[i].meta.description),
      n("static-part1", t[i].static.part1),
      n("static-part2", t[i].static.part2),
      n("static-part3", t[i].static.part3),
      n("competentHero", t[i].competentHero),
      n("constructionsNeox", t[i].constructionsNeox),
      n("constructionsNeovision", t[i].constructionsNeovision),
      n("featuresMore", t[i].featuresMore),
      document
        .querySelectorAll(".moreInfo")
        .forEach(
          (e) => (e.innerText = t[i].constructionsNeox.featureElementMore)
        );
    GLightbox({
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
    function r() {
      setTimeout(() => {
        document.querySelectorAll(".gslide-title").forEach((e) => {
          e.innerText = t[i].imageTitleZoom;
        });
      }, 100);
    }
    document.addEventListener("keydown", function (e) {
      "ArrowRight" === e.key && r(), "ArrowLeft" === e.key && r();
    });
    const s = new MutationObserver((e) => {
        e.forEach((e) => {
          "attributes" === e.type &&
            "false" === e.target.getAttribute("aria-hidden") &&
            r();
        });
      }),
      o = document.querySelector(".glightbox-container");
    o && s.observe(o, { attributes: !0, subtree: !0 }),
      document.querySelectorAll(".preview-link").forEach((e) => {
        e.addEventListener("click", r);
      }),
      document.addEventListener("click", (e) => {
        e.target.closest(".gnext, .gprev") && r();
      });
  }
  function h() {
    clearTimeout(c);
    const n = t[i].products[s];
    if (a)
      (e.textContent = n.substring(0, o - 1)),
        o--,
        0 === o && ((a = !1), (s = (s + 1) % t[i].products.length));
    else if (((e.textContent = n.substring(0, o + 1)), o++, o === n.length))
      return (a = !0), void setTimeout(h, u);
    c = setTimeout(h, a ? d : l);
  }
  function m() {
    const e = document.querySelector(".isotope-container");
    e &&
      (f && f.destroy(),
      (f = new Isotope(e, {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
        filter: "*",
      })),
      document.querySelectorAll(".isotope-filters li").forEach((e) => {
        e.addEventListener("click", function () {
          document
            .querySelector(".isotope-filters .filter-active")
            .classList.remove("filter-active"),
            this.classList.add("filter-active");
          const e = this.getAttribute("data-filter");
          f && f.arrange({ filter: e });
        });
      }));
  }
  function p() {
    const e = document.querySelector("#galleryLinkMars");
    e &&
      e.addEventListener("click", function (e) {
        e.preventDefault();
        const t = document.querySelector("#projectGallery");
        t && t.scrollIntoView({ behavior: "smooth", block: "start" }),
          setTimeout(() => {
            m(),
              document
                .querySelectorAll(".isotope-filters li")
                .forEach((e) => e.classList.remove("filter-active"));
            const e = document.querySelector("#filterGalleryMars");
            e
              ? (e.classList.add("filter-active"),
                console.log("Applying filter: .filter-mars"),
                f
                  ? (f.arrange({ filter: ".filter-mars" }),
                    setTimeout(() => {
                      f.layout();
                    }, 50))
                  : console.warn("Isotope not initialized yet."))
              : console.warn("Mars filter button not found.");
          }, 200);
      });
  }
  g(),
    document
      .getElementById("toggle-lang")
      .addEventListener("click", function () {
        !(function () {
          (i = "en" === i ? "de" : "en"),
            localStorage.setItem("language", i),
            (s = 0),
            (o = 0),
            (a = !1),
            g(),
            clearTimeout(c),
            h(),
            m(),
            p();
          const e = document.querySelector(".isotope-filters .filter-active");
          if (e) {
            const t = e.getAttribute("data-filter");
            console.log("Reapplying filter after language switch:", t),
              f && f.arrange({ filter: t });
          }
        })();
      }),
    h(),
    window.addEventListener("load", function () {
      m(), p();
    });
});
