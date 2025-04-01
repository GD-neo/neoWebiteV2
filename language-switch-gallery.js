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
        title: "Neo Building | References Images",
        description:
          "In addition to our commitment to project business, we have always offered our products to private customers as well. Take advantage of our many years of experience to bring your private construction project to life.",
        keywords:
          "neo building, references, images, private customers, glas shower enclosures, neo building experience",
      },
      pageContent: {
        siteHeader: "Gallery",
        siteCrum: "Gallery",
        siteHeader2: "We bring your ideas to life!",
        filterAll: "All",
        pleaseNote:
          "They say an image is worth a thousand words. Here, each one speaks of dedication, innovation, and the beauty of precision craftsmanship.",
        descriptionMars:
          "5m high wall elements, new industrial flooring, new drains, new impact protection, and more.",
        descriptionPolaroid:
          "50m of new drainage/gutters, new drains, new industrial flooring.",
        descriptionHotels:
          "Glass showers/mirrors/desks/room dividers as custom-made products. If you have any questions, feel free to contact us.",
        goToProjects: "References",
        goToPrivate: "Neo Building for private customers",
        titleMarsNew: "Mars: New",
        titlePolaroidNew: "Polaroid: New",
        titleMarsConstruction: "Mars: Construction",
        titlePolaroidConstruction: "Polaroid: Construction",
        textPolaroid:
          "Scope of work carried out by us: 50m of new drainage/gutters, new drains, new industrial flooring, new grating.",
        textMars:
          "Scope of work carried out by us: Removal/excavation of the old floor and old drains, manufacturing and installation of 5m high stainless steel wall elements, new industrial flooring, new drains, new impact protection, and more.",
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
        siteHeader: "Galerie",
        siteCrum: "Bilder",
        siteHeader2: "Wir finden die Lösung für Ihre Ideen!",
        filterAll: "Alle",
        pleaseNote:
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes Einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",
        descriptionMars:
          "5m hohe Wandelemente, neuer Industrieboden, neue Abläufe, neuer Rammschutz und weiteres.",
        descriptionPolaroid:
          "50m neue Entwässerung/Rinnen, neue Abläufe, neuer Industrieboden.",
        descriptionHotels:
          "Glasduschen/Spiegel/Schreibtische/Raumteiler als Sonderanfertigung. Bei Fragen kontaktieren Sie uns gerne.",
        goToProjects: "Referenzen",
        goToPrivate: "Neo Building für Privatkunden",
        titleMarsNew: "Mars: Zustand Neu",
        titlePolaroidNew: "Polaroid: Zustand Neu",
        titleMarsConstruction: "Mars: Montage",
        titlePolaroidConstruction: "Polaroid: Montage",
        textPolaroid:
          "Umfang der von uns durchgeführten Arbeiten: 50m neue Entwässerung/Rinnen, neue Abläufe, neuer Industrieboden, neue Gitterroste.",
        textMars:
          "Umfang der von uns durchgeführten Arbeiten: Entnahme/ Abtragen des alten Bodens und alter Abläufe, Fertigung und Installation 5m hoher Wandelemente aus Edelstahl, neuer Industrieboden, neue Abläufe, neuer Rammschutz und weiteres.",
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
  n || localStorage.setItem("language", o);
  let r = 0,
    i = 0,
    a = !1;
  function s() {
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
      })("pageContent", e[o].pageContent),
      document
        .querySelectorAll(".contactText")
        .forEach((t) => (t.innerText = e[o].pageContent.contactText)),
      document.querySelectorAll(".descriptionHotels").forEach((t) => {
        t.innerText = e[o].pageContent.descriptionHotels;
      }),
      document.querySelectorAll(".descriptionPolaroid").forEach((t) => {
        t.innerText = e[o].pageContent.descriptionPolaroid;
      }),
      document.querySelectorAll(".descriptionMars").forEach((t) => {
        t.innerText = e[o].pageContent.descriptionMars;
      }),
      document.querySelectorAll(".titleMarsNew").forEach((t) => {
        t.innerText = e[o].pageContent.titleMarsNew;
      }),
      document.querySelectorAll(".titlePolaroidNew").forEach((t) => {
        t.innerText = e[o].pageContent.titlePolaroidNew;
      }),
      document.querySelectorAll(".titleMarsConstruction").forEach((t) => {
        t.innerText = e[o].pageContent.titleMarsConstruction;
      }),
      document.querySelectorAll(".titlePolaroidConstruction").forEach((t) => {
        t.innerText = e[o].pageContent.titlePolaroidConstruction;
      });
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
  s(),
    document
      .getElementById("toggle-lang")
      .addEventListener("click", function () {
        (o = "en" === o ? "de" : "en"),
          localStorage.setItem("language", o),
          (r = 0),
          (i = 0),
          (a = !1),
          s();
      });
});
