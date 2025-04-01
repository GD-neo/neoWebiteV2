document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach((e) => {
    e.setAttribute("loading", "lazy");
  });
  document.getElementById("dynamic-text");
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
        siteHeader: "Private Customers",
        siteCrum: "Private Customers",
        siteHeader2: "We bring your ideas to life!",
        siteDescription1:
          "In addition to our commitment to project business, we have always offered our products to private customers as well. Take advantage of our many years of experience to bring your private construction project to life.",
        siteDescription2:
          "We bring your ideas for individual interior design to life—with the highest precision, using products we have developed, exclusively manufactured in Germany.",
        siteDescription3:
          " Design, materiality, and manufacturing technology are mutually dependent. To meet the highest standards every day, we therefore rely exclusively on",
        featurePointOne: "our own design",
        featurePointTwo: "our own product development",
        featurePointThree: "our own manufacturing",
        siteDescription4:
          " By manufacturing all products 100% in Germany, we guarantee speed, quality, and reliability at the highest level.",
        siteReferences: "References",
        category: "<strong>Category</strong>Private Customers",
        lastUpdate: "<strong>Updated</strong> February, 2025",
        moreReferences: "More References",
        goToProjects: "Projects",
        moreImages: "More Images",
        goToImages: "Gallery",
        goToContact: "Contact",
        pleaseNote:
          "We would like to point out that the following images are work/assembly photos.",
        descriptionShower:
          "Custom-made glass showers. If you have any questions, feel free to contact us.",
        descriptionMirror:
          "Mirrors & illuminated mirrors as custom-made products. If you have any questions, feel free to contact us.",
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
        siteHeader: "Privatkunden",
        siteCrum: "Privatkunden",
        siteHeader2: "Wir finden die Lösung für Ihre Ideen!",
        siteDescription1:
          "Neben unserem Engagement im Projektgeschäft haben wir stets unsere Produkte auch Privatkunden angeboten. Nutzen sie unsere langjährige Erfahrung für die Realisierung Ihres privaten Bauvorhabens.",
        siteDescription2:
          "Wir lassen Ihre Ideen für eine individuelle Gestaltung im Raum Realität werden. Mit höchster Präzision. Mit von uns entwickelten Produkten. Ausschließlich in Deutschland gefertigt.",
        siteDescription3:
          " Design, Materialität und Fertigungstechnik bedingen sich wechselseitig. Um täglich höchsten Ansprüchen gerecht zu werden, setzen wir deshalb ausnahmslos auf",
        featurePointOne: "eigenes Design",
        featurePointTwo: "eigene Produktentwicklung",
        featurePointThree: "eigene Fertigung",
        siteDescription4:
          " Durch die 100%-tige Fertigung aller Produkte in Deutschland garantieren wir Schnelligkeit, Qualität und Zuverlässigkeit auf höchstem Niveau.",
        siteReferences: "Referenzen",
        category: "<strong>Kategorie</strong>Privatkunden",
        lastUpdate: "<strong>Stand</strong> Februar, 2025",
        moreReferences: "Weitere Referenzen",
        goToProjects: "Projekte",
        moreImages: "Weitere Bilder",
        goToImages: "Bilder",
        goToContact: "Kontakt",
        pleaseNote:
          "Wir weisen darauf hin, dass es sich bei den folgenden Bildern um Arbeits-/ Montage- Fotos handelt.",
        descriptionShower:
          "Glasduschen als Sonderanfertigung. Bei Fragen kontaktieren Sie uns gerne.",
        descriptionMirror:
          "Spiegel & Leuchtspiegel als Sonderanfertigung. Bei Fragen kontaktieren Sie uns gerne.",
      },
      imageTitleZoom:
        "Bei Fragen zu einzelnen Produkten oder Beratungsbedarf erreichen Sie uns unter info@neo-building.com oder telefonisch unter +49-221-95490929-0",
    },
  };
  let t = (navigator.language || navigator.userLanguage).includes("de")
      ? "de"
      : "en",
    n = localStorage.getItem("language"),
    r = n || t;
  n || localStorage.setItem("language", r);
  let o = 0,
    i = 0,
    a = !1;
  function s() {
    document.title = e[r].meta.title;
    const t = document.querySelector("meta[name='description']");
    t && t.setAttribute("content", e[r].meta.description),
      (function e(t, n) {
        const r = document.querySelector(`#${t}`);
        r &&
          ("string" == typeof n
            ? (r.innerHTML = n)
            : "object" == typeof n &&
              Object.keys(n).forEach((t) => {
                e(t, n[t]);
              }));
      })("pageContent", e[r].pageContent),
      document
        .querySelectorAll(".contactText")
        .forEach((t) => (t.innerText = e[r].pageContent.contactText)),
      document.querySelectorAll(".descriptionShower").forEach((t) => {
        t.innerText = e[r].pageContent.descriptionShower;
      }),
      document.querySelectorAll(".descriptionMirror").forEach((t) => {
        t.innerText = e[r].pageContent.descriptionMirror;
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
          t.innerText = e[r].imageTitleZoom;
        });
      }, 100);
    }
    document.addEventListener("keydown", function (e) {
      "ArrowRight" === e.key && n(), "ArrowLeft" === e.key && n();
    });
    const o = new MutationObserver((e) => {
        e.forEach((e) => {
          "attributes" === e.type &&
            "false" === e.target.getAttribute("aria-hidden") &&
            n();
        });
      }),
      i = document.querySelector(".glightbox-container");
    i && o.observe(i, { attributes: !0, subtree: !0 }),
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
        (r = "en" === r ? "de" : "en"),
          localStorage.setItem("language", r),
          (o = 0),
          (i = 0),
          (a = !1),
          s();
      });
});
