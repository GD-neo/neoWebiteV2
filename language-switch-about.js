document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach((e) => {
    e.setAttribute("loading", "lazy");
  });
  document.getElementById("dynamic-text");
  document.querySelectorAll("img").forEach((e) => {
    e.setAttribute("loading", "lazy");
  });
  const e = {
    en: {
      meta: {
        title: "Neo Building | Philosophy | The Company",
        description:
          "Neo Building – specialists in industrial flooring, drainage systems, and custom glass solutions, based in Cologne, Germany (NRW). Over 20 years of experience delivering tailored construction services for factories, hotels, and commercial spaces. Learn more about our company philosophy and expertise.",
        keywords:
          "Neo Building GmbH, industrial floors Cologne, drainage systems NRW, glass solutions Cologne, specialist in industrial floors, custom drainage systems, stainless steel custom work, glass construction for hotels and industry, industrial floors and drainage, construction company Cologne, construction consulting, over 20 years experience in construction, industrial and commercial construction projects, glass, stainless steel and flooring solutions, consulting for industrial construction projects, construction partner for industry and commercial, custom construction projects Cologne, experts for hotel and commercial construction, Cologne construction company experience, high-quality construction products Cologne",
      },
      pageContent: {
        siteHeader: "Philosophy",
        siteCrum: "About Us",
        siteHeader2: "Overview",
        siteHeader3: "We bring your ideas to life!",
        siteHeader4: "Selected Images",
        pleaseNote:
          "They say an image is worth a thousand words. Here, each one speaks of dedication, innovation, and the beauty of precision craftsmanship.",
        moreThan: "More than",
        happyCustomer: "Satisfied Customers",
        projectsDone: "Projects Completed",
        glasUsed: "Tons of glass installed",
        steelUsed: "Tons of stainless steel processed",
        textPolaroid:
          "Scope of work carried out by us: 50m of new drainage/gutters, new drains, new industrial flooring, new grating.",
        textMars:
          "Scope of work carried out by us: Removal/excavation of the old floor and old drains, manufacturing and installation of 5m high stainless steel wall elements, new industrial flooring, new drains, new impact protection, and more.",
        textHotels:
          "Neo Building products for hotels and similar construction projects: Frameless all-glass shower enclosures, walk-in solutions, sliding doors, room dividers, shower drains, desks, shelves, mirrors & illuminated mirrors, backsplash glazing, etc.",
        toGallery: "See all images in the Galery",
        siteHeader5: "Commitment to Excellence and Development",
        siteHeader6: "Expertise. Experience. Quality.",
        aboutValuesDescription:
          "We set extremely high standards for the materials we use, as well as for design and functionality. The design of our products is timeless. Our goal has always been and continues to be that you enjoy our products for many years.",
        siteHeaderPhil: "Philosophy",
        aboutValuesDescription2:
          "Design, materiality, and manufacturing technology are interdependent. To meet the highest standards every day, we therefore rely exclusively on...",
        ownDesign: "Our own design",
        ownDevelopment: "In-house product development and...",
        ownProduction: "In-house manufacturing",
        aboutValuesDescription3:
          "By manufacturing all products 100% in Europe, we guarantee speed, quality, and reliability at the highest level.",
        headerIndustrieSteel: "Industrial & Stainless Steel Solutions",
        descriptionIndutriesSteel:
          "Throughout our many years of working with project developers, engineers, and architects, we have consistently been faced with new challenges that required tailored solutions. Our commitment is to use our expertise to deliver answers to these diverse tasks.",
        industriesSteelHeaderOne:
          "Industrial Drainage Systems Made of Stainless Steel",
        industriesSteelPointOne:
          "Stainless Steel Drainage Technology for Production Areas, Warehouses, Sculleries/Kitchens, Outdoor Spaces, and More.",
        industriesSteelHeaderTwo: "Industrial Flooring",
        industriesSteelPointTwo:
          "Industrial flooring for production areas, kitchens, warehouses...<br> Highly resistant to heat and chemicals (e.g., industrial cleaning agents)<br> Easy to clean thanks to a seamless finish.",
        industriesSteelHeaderThree: "Stainless Steel Construction Elements",
        industriesSteelPointThree:
          "Complete Stainless Steel Elements, such as: Wall Panels, Wall Cladding, Impact Protection Elements, Stairs & Railings, etc.",
        industriesSteelHeaderFour: "Stainless Steel Shower Drains",
        industriesSteelPointFour:
          "Shower drains made of stainless steel allow for free and continuous floor design. Custom widths and special solutions are standard for us.",
        headerIndustrieGlas: "Glass Manufacturing and Specials",
        descriptionIndutriesGlas:
          "Do you need a glass shower with a door or as a walk-in, a glass room divider, a custom mirror/illuminated mirror, a suitable towel holder, or a door lock?",
        industriesGlasHeaderOne: "Glass Showers",
        industriesGlasPointOne:
          "Minimalist and streamlined fittings made from high-quality materials. Crystal-clear aesthetics.",
        industriesGlasHeaderTwo: "Mirrors and Illuminated Mirrors",
        industriesGlasPointTwo:
          "Custom-made to your required dimensions and equipped with high-quality lighting.",
        industriesGlasHeaderThree: "Specials",
        industriesGlasPointThree:
          "Glass Doors & Sliding Doors, Back Wall Glazing, Composite Glass Room Dividers, Desks, Shelf and Storage Systems, Handles and Towel Holders, etc.",
        industriesGlasHeaderFour: "RENOBOX",
        industriesGlasPointFour:
          "REN<span style='color: #0baf16'>O</span>BOX<sup>®</sup> - The Modular Bad: A Concept by Neo Building GmbH.",
      },
      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title: "Neo Building | Philosophie | Das Unternehmen",
        description:
          "Neo Building – Ihr Spezialist für Industrieböden, Entwässerungssysteme und maßgefertigte Glaslösungen mit Sitz in Köln, NRW. Mit über 20 Jahren Erfahrung realisieren wir individuelle Bauprojekte für Fabriken, Hotels und Gewerbeimmobilien. Erfahren Sie mehr über unsere Unternehmensphilosophie und Kompetenz.",
        keywords:
          "Neo Building GmbH, Industrieböden Köln, Entwässerungssysteme NRW, Glaslösungen Köln, Spezialist für Industrieböden, maßgefertigte Entwässerungssysteme, Edelstahl Sonderanfertigungen, Glasbau für Hotels und Industrie, Industrieböden und Drainagen, Bauunternehmen Köln, Projektberatung Bauwesen, über 20 Jahre Erfahrung Bau, Bauprojekte Industrie und Gewerbe, Glas, Edelstahl und Bodenlösungen, Beratung für Industriebauprojekte, Baupartner für Industrie und Gewerbe, individuelle Bauprojekte Köln, Experten für Hotelbau und Gewerbebau, Köln Bauunternehmen Erfahrung, hochwertige Bauprodukte Köln",
      },
      pageContent: {
        siteHeader: "Philosophie",
        siteCrum: "Philosophie",
        siteHeader2: "Überblick",
        siteHeader3: "Wir finden die Lösung für Ihre Ideen!",
        siteHeader4: "Auswahl Bilder",
        pleaseNote:
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes Einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",
        moreThan: "Mehr als",
        happyCustomer: "Zufriedene Kunden",
        projectsDone: "Bauvorhaben abgeschlossen",
        glasUsed: "Tonnen Glas verbaut",
        steelUsed: "Tonnen Edelstahl verarbeitet",
        textPolaroid:
          "Umfang der von uns durchgeführten Arbeiten: 50m neue Entwässerung/Rinnen, neue Abläufe, neuer Industrieboden, neue Gitterroste.",
        textMars:
          "Umfang der von uns durchgeführten Arbeiten: Entnahme/ Abtragen des alten Bodens und alter Abläufe, Fertigung und Installation 5m hoher Wandelemente aus Edelstahl, neuer Industrieboden, neue Abläufe, neuer Rammschutz und weiteres.",
        textHotels:
          "Neo Building Produkte für Hotels und ähnliche Bauvorhaben: Rahmenlose Ganzglas-Duschabtrennungen, Walk-In Lösungen, Schiebetüren, Raumteiler, Duschrinnen, Schreibtische, Regalböden, Spiegel&Leuchtspiegel, Rückwandverglasungen etc.",
        toGallery: "Alle Bilder",
        siteHeader5: "Anspruch und Entwicklung",
        siteHeader6: "Kompetenz.Erfahrung.Qualität",
        aboutValuesDescription:
          "Wir stellen extrem hohe Anforderungen an das von uns verwendete Material, an die Form und die Funktionalität. Das Design unserer Produkte ist zeitlos. Unser Ziel war und ist es, dass Sie viele Jahre Freude an unseren Produkten haben.",
        siteHeaderPhil: "Philosophie",
        aboutValuesDescription2:
          "Design, Materialität und Fertigungstechnik bedingen sich wechselseitig. Um täglich höchsten Ansprüchen gerecht zu werden, setzen wir deshalb ausnahmslos auf",
        ownDesign: "eigenes Design",
        ownDevelopment: "eigene Produktentwicklung und",
        ownProduction: "eigene Fertigung",
        aboutValuesDescription3:
          " Durch die 100%-tige Fertigung aller Produkte in Europa garantieren wir Schnelligkeit, Qualität und Zuverlässigkeit auf höchstem Niveau.",
        headerIndustrieSteel: "Produktwelt Industrie & Edelstahl",
        descriptionIndutriesSteel:
          "Während unserer langjährigen Zusammenarbeit mit Projektentwicklern, Ingenieuren und Architekten wurden wir immer wieder vor neue Aufgaben gestellt, für die es eine Lösung zu entwickeln galt. Unser Anspruch ist es, mit unserer Kompetenz für diese vielfältigen Aufgaben Lösungen zu bieten.",
        industriesSteelHeaderOne: "Industrieentwässerung aus Edelstahl",
        industriesSteelPointOne:
          "Edelstahl Entwässerungstechnologie für Produktionsräume, Lagerhallen, Spulräume/-küchen, Außenbereiche und mehr.",
        industriesSteelHeaderTwo: "Industrieböden",
        industriesSteelPointTwo:
          "Industrieböden für Produktionflächen, Küchen, Lagerhallen...<br> Bieten hohe Widerstandsfähigkeit gegen Wärme und Chemikalien (Bspw.Industrielle-Reinigungsmittel) <br> Leichte Reinigung da keine Fugen vorhanden sind.",
        industriesSteelHeaderThree: "Edelstahlbauelemente",
        industriesSteelPointThree:
          "Komplette Edelstahlelemente, beispielsweise: Wandelemente, Wandverkleidungen, Rammschutz Elemente, Treppen & Geländer etc.",
        industriesSteelHeaderFour: "Duschrinnen aus Edelstahl",
        industriesSteelPointFour:
          "Duschrinnen, aus Edelstahl gefertigt, ermöglichen eine freie und durchgängige Bodengestaltung. Individuelle Breiten und Sonderlösungen sind dabei für uns Standard.",
        headerIndustrieGlas: "Glasmanufaktur und Specials",
        descriptionIndutriesGlas:
          "Sie benötigen eine Glasdusche, mit Tür oder als Walk-In, oder einen Raumteiler aus Glas, benötigen Sie einen Spiegel/ Leuchtspiegel auf maß, sind auf der Suche nach dem passenden Handtuchhalter oder einem Türverschluss?",
        industriesGlasHeaderOne: "Glasduschen",
        industriesGlasPointOne:
          "Minimalistisch und reduziert gestaltete Beschläge aus hochwertigen Materialien. Glasklare Ästhetik.",
        industriesGlasHeaderTwo: "Spiegel und Leutchspiegel",
        industriesGlasPointTwo:
          "Werden für Sie in den von Ihnen benötigten Maßen gefertigt und mit hochwertigen Leuchtmitteln ausgestattet.",
        industriesGlasHeaderThree: "Specials",
        industriesGlasPointThree:
          "Türen & Schiebetüren aus Glas, Rückwandverglasungen, Raumteiler aus Verbundglas, Schreibtische, Regal- und Ablagesysteme, Griffe und Handtuchhalter etc.",
        industriesGlasHeaderFour: "RENOBOX",
        industriesGlasPointFour:
          "REN<span style='color: #0baf16'>O</span>BOX<sup>®</sup> - Das Modulare Bad: Ein Konzept der Neo Building GmbH.",
      },
      imageTitleZoom:
        "Bei Fragen zu einzelnen Produkten oder Beratungsbedarf erreichen Sie uns unter info@neo-building.com oder telefonisch unter +49-221-95490929-0",
    },
  };
  let n = (navigator.language || navigator.userLanguage).includes("de")
      ? "de"
      : "en",
    t = localStorage.getItem("language"),
    r = t || n;
  function i() {
    document.title = e[r].meta.title;
    const n = document.querySelector("meta[name='description']");
    n && n.setAttribute("content", e[r].meta.description),
      (function e(n, t) {
        const r = document.querySelector(`#${n}`);
        r &&
          ("string" == typeof t
            ? (r.innerHTML = t)
            : "object" == typeof t &&
              Object.keys(t).forEach((n) => {
                e(n, t[n]);
              }));
        const i = document.querySelectorAll(`.${n}`);
        i &&
          "string" == typeof t &&
          i.forEach((e) => {
            e.innerHTML = t;
          });
      })("pageContent", e[r].pageContent);
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
    function t() {
      setTimeout(() => {
        document.querySelectorAll(".gslide-title").forEach((n) => {
          n.innerText = e[r].imageTitleZoom;
        });
      }, 100);
    }
    document.addEventListener("keydown", function (e) {
      "ArrowRight" === e.key && t(), "ArrowLeft" === e.key && t();
    });
    const i = new MutationObserver((e) => {
        e.forEach((e) => {
          "attributes" === e.type &&
            "false" === e.target.getAttribute("aria-hidden") &&
            t();
        });
      }),
      s = document.querySelector(".glightbox-container");
    s && i.observe(s, { attributes: !0, subtree: !0 }),
      document.querySelectorAll(".preview-link").forEach((e) => {
        e.addEventListener("click", t);
      }),
      document.addEventListener("click", (e) => {
        e.target.closest(".gnext, .gprev") && t();
      });
  }
  t || localStorage.setItem("language", r),
    i(),
    document
      .getElementById("toggle-lang")
      .addEventListener("click", function () {
        (r = "en" === r ? "de" : "en"),
          localStorage.setItem("language", r),
          (productIndex = 0),
          (charIndex = 0),
          (isDeleting = !1),
          i();
      });
  const s = [
      "ABZ Mellendorf",
      "Alpenhof Murnau, Murnau am Staffelsee",
      "Ambassador Frankfurt",
      "Ambassador München",
      "Amedia Hamburg",
      "Ascot Zürich",
      "Ballhaus München",
      "Bavaria Towers München",
      "Best Western Plus Hotel Bremerhaven",
      "Best Western Polisina Ochsenfurt",
      "Burgklause Hotel Fehmarn",
      "Capri by Fraser Frankfurt",
      "Château de Vignée Belgien",
      "Citadines City Centre Frankfurt",
      "Citadines Hamburg",
      "Comfort Hotel Monheim",
      "Concorde Opéra Paris",
      "Daimler Sindelfingen",
      "Das Rheinische Quartier Elsdorf",
      "Derag Livinghotel De Medici Düsseldorf",
      "Dormero Stuttgart",
      "Europäischer Hof Hamburg",
      "Golf Resort Budersand Sylt",
      "Golden Tulip Berlin",
      "Grand City Hotel Duisburg",
      "Grand City Hotel Hamburg",
      "GHotel Hannover",
      "GHotel Koblenz",
      "Gut Kump Hamm",
      "Humboldt-Institut Berlin",
      "IG Metall Bildungszentrum Sprockhövel",
      "Innside by Mélia Düsseldorf",
      "Kempinski Grand Hotel des Bains St. Moritz",
      "Hotel am Konzerthaus Wien",
      "Lanser Hof Tegernsee",
      "Lindenhof Fehmarn",
      "Lindner Park Hotel Hagenbeck Hamburg",
      "Le Méridien Grand Hotel Nürnberg",
      "Lindner Congress Hotel",
      "LVR-Klinikum Köln-Merheim",
      "LVR-Klinik Forensik Köln",
      "Main-Arkaden Frankfurt",
      "Marriott Hamburg",
      "Marriott Zürich",
      "Mars Confectionery Viersen",
      "Mercure Leipzig",
      "Mercure Salzburg",
      "Mercure Bristol Sindelfingen",
      "Mercure Orbis Perlach",
      "Motel One Dresden",
      "Motel One Düsseldorf",
      "Motel One Köln",
      "Motel One Wien",
      "New Wave Hotel Nordeney",
      "NIU Hotel Hamburg",
      "Novotel Frankfurt",
      "Novotel Krefeld",
      "Park Inn Köln",
      "Pentahotel Brüssel",
      "Pentahotel Liège",
      "Pentahotel Paris",
      "Pentahotel Prag",
      "Pentahotel Trier",
      "Pentahotel Wiesbaden",
      "Polaroid Film Monheim",
      "Pullman München",
      "Räterpark München",
      "Radison Blu Baden Baden",
      "Reichshof Hamburg Renaissance",
      "Hotel Zürich",
      "Ritter Hotel Durbach",
      "Robinson Hotel Kleinarl",
      "Österreich Ruhrturm Essen",
      "Scandic Hotel Frankfurt",
      "Scandic Hotel München",
      "Schloss Kranichstein Darmstadt",
      "Sheraton Essen",
      "Stage 47 Hotel Essen",
      "Steigenberger Airport Hotel Berlin",
      "Steigenberger Berlin",
      "Steigenberger Duisburger Hof",
      "Steigenberger Intercity Hotel Berlin",
      "Steigenberger Intercity Hotel Bonn",
      "Steigenberger Airport Hotel Frankfurt",
      "Swissotel Zürich",
      "The Garden Berlin",
      "The Westin Grand München",
      "Thomaskirchhof Hotel Leipzig",
      "Upstalsboom Parkhotel Emden",
      "Upstalsboom Hotel Seebad Heringsdorf",
      "Walhalla Hotel Zürich",
      "Weisses Kreuz Hotel Innsbruck",
      "Harzresort Torfhaus",
      "Hotel Kurhaus Wyk auf Föhr",
      "Hotel TUI Blue Sylt",
    ].sort(),
    a = s.slice(0, 19),
    o = s.slice(19, 38),
    l = s.slice(38, 57),
    u = s.slice(57, 76),
    d = s.slice(76, 92);
  function c(e, n) {
    const t = document.getElementById(e),
      r = n.map((e) => `<span class="scroll-item">${e}</span>`).join("");
    t.innerHTML = r + r;
  }
  c("row1", a), c("row2", o), c("row3", l), c("row4", u), c("row5", d);
});
