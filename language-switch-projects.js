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
        title: "Neo Building | References Projects",
        description:
          "In addition to our commitment to project business, we have always offered our products to private customers as well. Take advantage of our many years of experience to bring your private construction project to life.",
        keywords:
          "neo building, references, images, private customers, glas shower enclosures, neo building experience,  neo building polaroid, polaroid, mars",
      },
      pageContent: {
        siteHeader: "Projects",
        siteCrum: "Projects",
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
      },
      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title: "Neo Building | Referenzen Projekte",
        description:
          "Wir freuen uns auf Ihre Anfrage - per E-Mail an info@neo-building.com oder telefonisch unter +49-221-95490929-0",
        keywords:
          "neo building, referenzen, bilder, privat kunden, glasduschen, neo building erfahrung, neo building polaroid, polaroid, mars",
      },
      pageContent: {
        siteHeader: "Projekte",
        siteCrum: "Projekte",
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
      },
      imageTitleZoom:
        "Bei Fragen zu einzelnen Produkten oder Beratungsbedarf erreichen Sie uns unter info@neo-building.com oder telefonisch unter +49-221-95490929-0",
    },
  };
  let t = (navigator.language || navigator.userLanguage).includes("de")
      ? "de"
      : "en",
    n = localStorage.getItem("language"),
    o = n || t;
  function r() {
    document.title = e[o].meta.title;
    const t = document.querySelector("meta[name='description']");
    t && t.setAttribute("content", e[o].meta.description),
      (function e(t, n) {
        const o = document.querySelector(`#${t}`);
        o &&
          ("string" == typeof n
            ? (o.innerHTML = n)
            : "object" == typeof n &&
              Object.keys(n).forEach((t) => {
                e(t, n[t]);
              }));
        const r = document.querySelectorAll(`.${t}`);
        r &&
          "string" == typeof n &&
          r.forEach((e) => {
            e.innerHTML = n;
          });
      })("pageContent", e[o].pageContent);
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
    function n() {
      setTimeout(() => {
        document.querySelectorAll(".gslide-title").forEach((t) => {
          t.innerText = e[o].imageTitleZoom;
        });
      }, 100);
    }
    document.addEventListener("keydown", function (e) {
      "ArrowRight" === e.key && n(), "ArrowLeft" === e.key && n();
    });
    const r = new MutationObserver((e) => {
        e.forEach((e) => {
          "attributes" === e.type &&
            "false" === e.target.getAttribute("aria-hidden") &&
            n();
        });
      }),
      i = document.querySelector(".glightbox-container");
    i && r.observe(i, { attributes: !0, subtree: !0 }),
      document.querySelectorAll(".preview-link").forEach((e) => {
        e.addEventListener("click", n);
      }),
      document.addEventListener("click", (e) => {
        e.target.closest(".gnext, .gprev") && n();
      });
  }
  n || localStorage.setItem("language", o),
    r(),
    document
      .getElementById("toggle-lang")
      .addEventListener("click", function () {
        (o = "en" === o ? "de" : "en"),
          localStorage.setItem("language", o),
          (productIndex = 0),
          (charIndex = 0),
          (isDeleting = !1),
          r();
      });
});
