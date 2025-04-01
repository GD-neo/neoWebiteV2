document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach((e) => {
    e.setAttribute("loading", "lazy");
  });
  document.getElementById("dynamic-text");
  const e = {
    en: {
      meta: {
        title: "Neo Building | Contact Information",
        description:
          "We look forward to your inquiry either via email at info@neo-building.com or by phone at +49-221-95490929-0.",
        keywords: "Contact, Neo Building, email, address",
      },
      pageContent: {
        contactText: "Contact",
        addressStreet: "Albin-Haenseroth-Weg 19 | 50859 Cologne | Germany",
        addressHeading: "Address",
      },
    },
    de: {
      meta: {
        title: "Neo Building | Kontakt",
        description:
          "Wir freuen uns auf Ihre Anfrage - per E-Mail an info@neo-building.com oder telefonisch unter +49-221-95490929-0",
        keywords: "Kontakt, Neo Building, email, telefon, adresse",
      },
      pageContent: {
        contactText: "Kontakt",
        addressStreet: "Albin-Hänseroth-Weg 19 | 50859 Köln | Deutschland",
        addressHeading: "Adresse",
      },
    },
  };
  let t = (navigator.language || navigator.userLanguage).includes("de")
      ? "de"
      : "en",
    n = localStorage.getItem("language"),
    o = n || t;
  n || localStorage.setItem("language", o);
  let a = 0,
    r = 0,
    i = !1;
  function c() {
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
        const a = document.querySelectorAll(`.${t}`);
        a &&
          "string" == typeof n &&
          a.forEach((e) => {
            e.innerHTML = n;
          });
      })("pageContent", e[o].pageContent),
      document
        .querySelectorAll(".contactText")
        .forEach((t) => (t.innerText = e[o].pageContent.contactText));
  }
  c(),
    document
      .getElementById("toggle-lang")
      .addEventListener("click", function () {
        (o = "en" === o ? "de" : "en"),
          localStorage.setItem("language", o),
          (a = 0),
          (r = 0),
          (i = !1),
          c();
      });
});
