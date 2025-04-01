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
        title: "NEOXID Industrial Flooring in Cologne | NEO Building",
        description:
          "NEO Building offers NEOXID tailored industrial flooring solutions, ideal for production areas, kitchens, and warehouses. Our seamless, durable floors are highly resistant to heat and chemicals. For integrated stainless steel systems like NEOX drainage, we provide custom solutions that enhance performance. Get in touch for your project in Cologne.",
        keywords:
          "NEO Building, NEOXID industrial flooring, seamless industrial floors, epoxy flooring, polyurethane floors, NEOX drainage systems, custom industrial flooring, Cologne flooring solutions, high-resistance floors, industrial coatings",
      },
      pageContent: {
        siteHeader: "Industrial flooring",
        siteCrum: "NEOXID",
        siteHeader2: "We bring your ideas to life!",
        pageIntroHeader: "Tailored to your requirements",
        pageIntroPointOne:
          "Industrial flooring for production areas, kitchens, warehouses...",
        pageIntroPointTwo:
          "Offer high resistance to heat and chemicals (e.g., industrial cleaning agents)",
        pageIntroPointThree: "Easy to clean as there are no grout lines.",
        pageIntroPointFour:
          "Seamless transition to <a href='../neox-industrial-drainage-systems/' target='_blank'>NEOX industrial drainage systems made of stainless steel</a>",
        pageIntroHeader2: "Industrial flooring",
        pageIntroDescription2: "We implement",
        pageIntroPointFive: "Durable and resilient flooring solutions for",
        pageIntroPointSix: "Factories, industrial kitchens, and warehouses",
        pageIntroPointSeven: "With or without customized drainage systems",
        pageIntroDescription3: "Our focus is on",
        pageIntroPointEight:
          "the implementation according to the individual wishes and requirements of our customers and partners.",
        pageInroToGallery: "Start Inquiry",
        beforeAfterTitle: "Before | After",
        callToActionHeaderExamples: "Project Experience",
        callToActionDescriptionExamples:
          "We place extremely high demands on the materials we use, on the form, and on the functionality. The design of our products is timeless. Our goal has always been, and continues to be, to ensure that you enjoy our products for many years. All products are designed by us: from the prototype to serial production, with extensive testing to ensure that the products truly provide sustainable benefits to you.",
        callToActionLinkExamples: "References",
        moreInfo: "Learn more",
      },
      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title: "NEOXID Industrieboden in Köln | NEO Building",
        description:
          "NEO Building bietet maßgeschneiderte NEOXID Industrieböden, ideal für Produktionsflächen, Küchen und Lagerhallen. Unsere nahtlosen, strapazierfähigen Böden sind hochresistent gegenüber Wärme und Chemikalien. Für integrierte Edelstahl-Systeme wie NEOX Entwässerung bieten wir individuelle Lösungen zur Leistungssteigerung. Kontaktieren Sie uns für Ihr Projekt in Köln.",
        keywords:
          "NEO Building, NEOXID Industrieboden, nahtlose Industrieböden, Epoxidharzboden, Polyurethanböden, NEOX Entwässerungssysteme, maßgeschneiderte Industrieböden, Bodenlösungen Köln, widerstandsfähige Böden, industrielle Beschichtungen",
      },
      pageContent: {
        siteHeader: "Industrieböden",
        siteCrum: "NEOXID",
        siteHeader2: "Wir finden die Lösung für Ihre Ideen!",
        pageIntroHeader: "Maßgeschneidert für Ihre Anforderungen",
        pageIntroPointOne:
          "Industrieböden für Produktionflächen, Küchen, Lagerhallen...",
        pageIntroPointTwo:
          "Bieten hohe Widerstandsfähigkeit gegen Wärme und Chemikalien (Bspw.Industrielle-Reinigungsmittel)",
        pageIntroPointThree: "Leichte Reinigung da keine Fugen vorhanden sind.",
        pageIntroPointFour:
          "Nahtloser Übergang zu <a href='../neox-industrial-drainage-systems/' target='_blank'>NEOX Industrieentwässerung aus Edelstahl</a>",
        pageIntroHeader2: "Industrieböden",
        pageIntroDescription2: "Wir realisieren",
        pageIntroPointFive: "langlebige und belastbare Bodenlösungen für",
        pageIntroPointSix: "Fabriken, Industrieküchen und Lagerhallen",
        pageIntroPointSeven:
          "mit oder ohne maßgeschneiderte Entwässerungssysteme",
        pageIntroDescription3: "Unser Fokus liegt auf",
        pageIntroPointEight:
          "der Umsetzung nach den individuellen Wünschen und Anforderungen unserer Kunden und Partner",
        pageInroToGallery: "Anfrage Starten",
        beforeAfterTitle: "Vorher | Nachher",
        callToActionHeaderExamples: "Projekt Erfahrung",
        callToActionDescriptionExamples:
          "Wir stellen extrem hohe Anforderungen an das von uns verwendete Material, an die Form und die Funktionalität. Das Design unserer Produkte ist zeitlos. Unser Ziel war und ist es, dass Sie viele Jahre Freude an unseren Produkten haben. Alle Produkte werden von uns selbst konstruiert: vom Prototyp bis zur Serienreife, mit umfangreichen Tests, damit die Produkte Ihnen wirklich nachhaltigen Nutzen bringen.",
        callToActionLinkExamples: "Referenzen",
        moreInfo: "Mehr Erfahren",
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
  t || localStorage.setItem("language", r);
  let o = 0,
    i = 0,
    a = !1;
  function s() {
    document.title = e[r].meta.title;
    const n = document.querySelector("meta[name='description']");
    function t(e, n) {
      const r = document.querySelector(`#${e}`);
      r &&
        ("string" == typeof n
          ? (r.innerHTML = n)
          : "object" == typeof n &&
            Object.keys(n).forEach((e) => {
              t(e, n[e]);
            }));
      const o = document.querySelectorAll(`.${e}`);
      o &&
        "string" == typeof n &&
        o.forEach((e) => {
          e.innerHTML = n;
        });
    }
    n && n.setAttribute("content", e[r].meta.description),
      t("pageContent", e[r].pageContent),
      t("constructionsNeoxDrains", e[r].constructionsNeoxDrains),
      document
        .querySelectorAll(".contactText")
        .forEach((n) => (n.innerText = e[r].pageContent.contactText)),
      document.querySelectorAll(".descriptionHotels").forEach((n) => {
        n.innerText = e[r].pageContent.descriptionHotels;
      }),
      document.querySelectorAll(".descriptionPolaroid").forEach((n) => {
        n.innerText = e[r].pageContent.descriptionPolaroid;
      }),
      document.querySelectorAll(".descriptionMars").forEach((n) => {
        n.innerText = e[r].pageContent.descriptionMars;
      }),
      document.querySelectorAll(".titleMarsNew").forEach((n) => {
        n.innerText = e[r].pageContent.titleMarsNew;
      }),
      document.querySelectorAll(".titlePolaroidNew").forEach((n) => {
        n.innerText = e[r].pageContent.titlePolaroidNew;
      }),
      document.querySelectorAll(".titleMarsConstruction").forEach((n) => {
        n.innerText = e[r].pageContent.titleMarsConstruction;
      }),
      document.querySelectorAll(".titlePolaroidConstruction").forEach((n) => {
        n.innerText = e[r].pageContent.titlePolaroidConstruction;
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
    function o() {
      setTimeout(() => {
        document.querySelectorAll(".gslide-title").forEach((n) => {
          n.innerText = e[r].imageTitleZoom;
        });
      }, 100);
    }
    document.addEventListener("keydown", function (e) {
      "ArrowRight" === e.key && o(), "ArrowLeft" === e.key && o();
    });
    const i = new MutationObserver((e) => {
        e.forEach((e) => {
          "attributes" === e.type &&
            "false" === e.target.getAttribute("aria-hidden") &&
            o();
        });
      }),
      a = document.querySelector(".glightbox-container");
    a && i.observe(a, { attributes: !0, subtree: !0 }),
      document.querySelectorAll(".preview-link").forEach((e) => {
        e.addEventListener("click", o);
      }),
      document.addEventListener("click", (e) => {
        e.target.closest(".gnext, .gprev") && o();
      });
  }
  s(),
    document
      .getElementById("toggle-lang")
      .addEventListener("click", function () {
        (r = "en" === r ? "de" : "en"),
          localStorage.setItem("language", r),
          (o = 0),
          (i = 0),
          (a = !1),
          s();
      });
});
