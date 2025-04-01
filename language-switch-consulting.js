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
        title:
          "Consulting for Construction Projects – Planning & Logistics Support | NEO Building",
        description:
          "With over 500 completed projects, NEO Building offers expert consulting for construction projects. We support companies, architects, and organizations in planning, logistics, and execution—whether for glass elements, stainless steel components, or complete solutions. Benefit from our extensive experience and tailored solutions.",
        keywords:
          "Neo Building GmbH, industrial floors Cologne, drainage systems NRW, glass solutions Cologne, specialist in industrial floors, custom drainage systems, stainless steel custom work, glass construction for hotels and industry, industrial floors and drainage, construction company Cologne, construction consulting, over 20 years experience in construction, industrial and commercial construction projects, glass, stainless steel and flooring solutions, consulting for industrial construction projects, construction partner for industry and commercial, custom construction projects Cologne, experts for hotel and commercial construction, Cologne construction company experience, high-quality construction products Cologne, construction planning, project consulting, logistics support, stainless steel construction, glass construction, architecture consulting, project management, custom construction planning, building design, stainless steel components, glass solutions, construction expertise, planning support, construction industry consulting, stainless steel custom solutions, tailored construction projects",
      },
      pageContent: {
        siteHeader: "Consulting",
        siteCrum: "Consulting",
        siteHeader4: "Selected Images",
        pleaseNote:
          "They say an image is worth a thousand words. Here, each one speaks of dedication, innovation, and the beauty of precision craftsmanship.",
        moreThan: "More than",
        happyCustomer: "Satisfied Customers",
        projectsDone: "Projects Completed",
        glasUsed: "Tons of glass installed",
        steelUsed: "Tons of stainless steel processed",
        toGallery: "View the Gallery",
        siteHeader2: "Expertise for a Variety of Projects",
        toGallery: "Alle Bilder",
        pageIntroDescription:
          "With over 500 completed projects and more than 1,000 satisfied customers, NEO Building is your reliable partner for professional consulting services.",
        siteHeader3: "Consulting Services",
        pageIntroDescription2:
          "We have worked with renowned clients and successfully completed projects. Our expertise guarantees that we can tackle any challenge and offer tailored solutions.",
        pageIntroDescription3:
          "In addition to technical consulting, we also support you with logistics and project planning.",
        pageIntroDescription4:
          "Use our knowledge to make informed decisions and bring your ideas to life. Contact us for a consultation.",
        toReference: "References",
        counterHeader: "Overview",
        counterDescription: "We bring your ideas to life!",
        counterToGallery: "View the Gallery",
      },
      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title:
          "Beratung für Bauvorhaben – Unterstützung in Planung & Logistik | NEO Building",
        description:
          "Mit über 500 abgeschlossenen Projekten bietet NEO Building professionelle Beratung für Bauvorhaben. Wir unterstützen Unternehmen, Architekten und Organisationen in Planung, Logistik und Umsetzung – von Glaselementen über Edelstahlbauteile bis hin zu Komplettlösungen. Profitieren Sie von unserer Erfahrung und maßgeschneiderten Lösungen.",
        keywords:
          "Neo Building GmbH, Industrieböden Köln, Entwässerungssysteme NRW, Glaslösungen Köln, Spezialist für Industrieböden, maßgefertigte Entwässerungssysteme, Edelstahl Sonderanfertigungen, Glasbau für Hotels und Industrie, Industrieböden und Drainagen, Bauunternehmen Köln, Projektberatung Bauwesen, über 20 Jahre Erfahrung Bau, Bauprojekte Industrie und Gewerbe, Glas, Edelstahl und Bodenlösungen, Beratung für Industriebauprojekte, Baupartner für Industrie und Gewerbe, individuelle Bauprojekte Köln, Experten für Hotelbau und Gewerbebau, Köln Bauunternehmen Erfahrung, hochwertige Bauprodukte Köln, Bauplanung, Bauvorhaben Beratung, Projektberatung, Logistik Unterstützung, Edelstahlbau, Glasbau, Architektur Beratung, Bauprojekt Management, individuelle Bauplanung, Baukonstruktion, Edelstahl Komponenten, Glaslösungen, Bau Expertise, Planungsunterstützung, Bauindustrie Beratung, Edelstahl Sonderanfertigungen, maßgeschneiderte Bauprojekte",
      },
      pageContent: {
        siteHeader: "Beratung",
        siteCrum: "Beratung",
        siteHeader2: "Expertise für eine Vielzahl von Projekten",
        pleaseNote:
          "Man sagt, ein Bild sagt mehr als tausend Worte. Hier spricht jedes Einzelne von Hingabe, Innovation und der Schönheit präziser Handwerkskunst.",
        moreThan: "Mehr als",
        happyCustomer: "Zufriedene Kunden",
        projectsDone: "Bauvorhaben abgeschlossen",
        glasUsed: "Tonnen Glas verbaut",
        steelUsed: "Tonnen Edelstahl verarbeitet",
        toGallery: "Alle Bilder",
        pageIntroDescription:
          "Mit über 500 abgeschlossenen Projekten und mehr als 1.000 zufriedenen Kunden ist NEO Building Ihr zuverlässiger Partner für professionelle Beratungsdienste.",
        siteHeader3: "Beratungsservice",
        pageIntroDescription2:
          "Wir haben mit renommierten Kunden zusammengearbeitet und erfolgreiche Projekte realisiert. Unsere Expertise garantiert, dass wir jede Herausforderung meistern und maßgeschneiderte Lösungen anbieten können. ",
        pageIntroDescription3:
          "Neben der fachlichen Beratung unterstützen wir Sie auch bei der Logistik und der Planung Ihrer Projekte.",
        pageIntroDescription4:
          "Nutzen Sie unser Wissen, um informierte Entscheidungen zu treffen und Ihre Ideen zum Leben zu erwecken. Kontaktieren Sie uns für eine Beratung.",
        toReference: "Referenzen",
        counterHeader: "Überblick",
        counterDescription: "Wir finden die Lösung für Ihre Ideen!",
        counterToGallery: "Alle Bilder",
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
  function o() {
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
        const o = document.querySelectorAll(`.${n}`);
        o &&
          "string" == typeof t &&
          o.forEach((e) => {
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
    const o = new MutationObserver((e) => {
        e.forEach((e) => {
          "attributes" === e.type &&
            "false" === e.target.getAttribute("aria-hidden") &&
            t();
        });
      }),
      i = document.querySelector(".glightbox-container");
    i && o.observe(i, { attributes: !0, subtree: !0 }),
      document.querySelectorAll(".preview-link").forEach((e) => {
        e.addEventListener("click", t);
      }),
      document.addEventListener("click", (e) => {
        e.target.closest(".gnext, .gprev") && t();
      });
  }
  t || localStorage.setItem("language", r),
    o(),
    document
      .getElementById("toggle-lang")
      .addEventListener("click", function () {
        (r = "en" === r ? "de" : "en"),
          localStorage.setItem("language", r),
          (productIndex = 0),
          (charIndex = 0),
          (isDeleting = !1),
          o();
      });
});
