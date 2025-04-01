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
          "RENOBOX by NEO Building: Sustainable Bathroom and Wellness Space Modernization | Made in Germany",
        description:
          "RENOBOX by NEO Building offers a sustainable and high-quality solution for modernizing bathrooms, wellness areas, and living spaces. Crafted with precision in Germany, our innovative design combines our vast experience with glass—such as shower enclosures, mirrors, and room dividers—and stainless steel, including drainage systems. Focusing on durability, functionality, and style, the RENOBOX ensures a seamless transformation of your space.",
        keywords:
          "RENOBOX, sustainable bathroom modernization, wellness space renovation, bathroom design, German engineering, shower enclosures, mirrors, room dividers, stainless steel drainage systems, made in Germany, bathroom solutions, high-quality bathroom renovation, functional design, modern living spaces, NEO Building, eco-friendly bathroom solutions, custom bathroom products",
      },
      pageContent: {
        siteHeader: "RENOBOX",
        siteCrum: "RENOBOX",
        siteHeader2: "We bring your ideas to life!",
        pageIntroHeader: "The modular solution for modern bathrooms.",
        pageIntroDescription:
          "Developed with German engineering expertise and a focus on sustainability, RENOBOX enables easy and high-quality modernization of bathrooms, wellness, and living spaces.",
        pageIntroDescription2:
          "Made in Germany, this innovative concept stands for durable design, functionality, and stylish aesthetics.",
        pageIntroHeader2: "RENOBOX by Neo Building",
        pageInroToGallery: "Play Concept Film",
        callToActionHeaderExamples: "We find the solution for your ideas!",
        callToActionDescriptionExamples:
          "In addition to our commitment to project business, we have always offered our products to private clients. Benefit from our years of experience in realizing your private construction project. We bring your ideas for a personalized design in space to life. With the highest precision. With products developed by us. Exclusively manufactured in Germany.",
        callToActionLinkExamples: "References",
        moreInfo: "Learn more",
      },
      imageTitleZoom:
        "For questions about specific products or if you need advice, you can reach us at info@neo-building.com or by phone at +49-221-95490929-0.",
    },
    de: {
      meta: {
        title:
          "RENOBOX von NEO Building: Nachhaltige Modernisierung von Bädern und Wellnessräumen | Made in Germany",
        description:
          "RENOBOX von NEO Building bietet eine nachhaltige und hochwertige Lösung für die Modernisierung von Bädern, Wellnessbereichen und Wohnräumen. Mit Präzision in Deutschland gefertigt, vereint unser innovatives Design unsere umfassende Erfahrung mit Glas – wie Duschabtrennungen, Spiegeln und Raumteilern – sowie Edelstahl, einschließlich Drainagesystemen. Fokussiert auf Langlebigkeit, Funktionalität und Stil sorgt die RENOBOX für eine nahtlose Transformation Ihres Raums.",
        keywords:
          "RENOBOX, nachhaltige Badezimmermodernisierung, Wellnessbereich Renovierung, Badezimmerdesign, deutsche Ingenieurskunst, Duschabtrennungen, Spiegel, Raumteiler, Edelstahl Drainagesysteme, Made in Germany, Badezimmerlösungen, hochwertige Badezimmerrenovierung, funktionales Design, moderne Wohnräume, NEO Building, umweltfreundliche Badezimmerlösungen, maßgeschneiderte Badezimmerprodukte",
      },
      pageContent: {
        siteHeader: "RENOBOX",
        siteCrum: "RENOBOX",
        siteHeader2: "Wir finden die Lösung für Ihre Ideen!",
        pageIntroHeader: "Die modulare Lösung für moderne Bäder.",
        pageIntroDescription:
          "Mit deutscher Ingenieurskunst und einem Fokus auf Nachhaltigkeit entwickelt, ermöglicht RENOBOX eine einfache und hochwertige Modernisierung von Bädern, Wellness- und Wohnräumen.",
        pageIntroDescription2:
          "Gefertigt in Deutschland, steht dieses innovative Konzept für langlebiges Design, Funktionalität und eine stilvolle Gestaltung.",
        pageIntroHeader2: "RENOBOX von Neo Building",
        pageInroToGallery: "Konzept Film Abspielen",
        callToActionHeaderExamples: "Wir finden die Lösung für Ihre Ideen!",
        callToActionDescriptionExamples:
          "Nutzen sie unsere langjährige Erfahrung für die Realisierung Ihres Bauvorhabens. Wir lassen Ihre Ideen für eine individuelle Gestaltung im Raum Realität werden. Mit höchster Präzision. Mit von uns entwickelten Produkten. Ausschließlich in Deutschland gefertigt.",
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
    i = t || n;
  t || localStorage.setItem("language", i);
  let o = 0,
    r = 0,
    a = !1;
  function s() {
    document.title = e[i].meta.title;
    const n = document.querySelector("meta[name='description']");
    function t(e, n) {
      const i = document.querySelector(`#${e}`);
      i &&
        ("string" == typeof n
          ? (i.innerHTML = n)
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
    n && n.setAttribute("content", e[i].meta.description),
      t("pageContent", e[i].pageContent),
      t("constructionsNeoxDrains", e[i].constructionsNeoxDrains),
      document
        .querySelectorAll(".contactText")
        .forEach((n) => (n.innerText = e[i].pageContent.contactText)),
      document.querySelectorAll(".descriptionHotels").forEach((n) => {
        n.innerText = e[i].pageContent.descriptionHotels;
      }),
      document.querySelectorAll(".descriptionPolaroid").forEach((n) => {
        n.innerText = e[i].pageContent.descriptionPolaroid;
      }),
      document.querySelectorAll(".descriptionMars").forEach((n) => {
        n.innerText = e[i].pageContent.descriptionMars;
      }),
      document.querySelectorAll(".titleMarsNew").forEach((n) => {
        n.innerText = e[i].pageContent.titleMarsNew;
      }),
      document.querySelectorAll(".titlePolaroidNew").forEach((n) => {
        n.innerText = e[i].pageContent.titlePolaroidNew;
      }),
      document.querySelectorAll(".titleMarsConstruction").forEach((n) => {
        n.innerText = e[i].pageContent.titleMarsConstruction;
      }),
      document.querySelectorAll(".titlePolaroidConstruction").forEach((n) => {
        n.innerText = e[i].pageContent.titlePolaroidConstruction;
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
          n.innerText = e[i].imageTitleZoom;
        });
      }, 100);
    }
    document.addEventListener("keydown", function (e) {
      "ArrowRight" === e.key && o(), "ArrowLeft" === e.key && o();
    });
    const r = new MutationObserver((e) => {
        e.forEach((e) => {
          "attributes" === e.type &&
            "false" === e.target.getAttribute("aria-hidden") &&
            o();
        });
      }),
      a = document.querySelector(".glightbox-container");
    a && r.observe(a, { attributes: !0, subtree: !0 }),
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
        (i = "en" === i ? "de" : "en"),
          localStorage.setItem("language", i),
          (o = 0),
          (r = 0),
          (a = !1),
          s();
      });
});
