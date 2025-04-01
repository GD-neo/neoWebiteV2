document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach((e) => {
    e.setAttribute("loading", "lazy");
  });
  const e = {
    en: { pageContent: { beforeAfterTitle: "Before | After" } },
    de: { pageContent: { beforeAfterTitle: "Vorher | Nachher" } },
  };
  let t = (navigator.language || navigator.userLanguage).includes("de")
      ? "de"
      : "en",
    n = localStorage.getItem("language"),
    o = n || t;
  function r() {
    !(function e(t, n) {
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
  }
  n || localStorage.setItem("language", o),
    r(),
    document
      .getElementById("toggle-lang")
      .addEventListener("click", function () {
        (o = "en" === o ? "de" : "en"),
          localStorage.setItem("language", o),
          r(),
          r();
      }),
    r();
  const a = document.querySelector(".image-wrapper-polaroid"),
    c = document.querySelector(".divider-polaroid"),
    i = document.querySelector(".before-image-polaroid"),
    l = document.querySelector(".after-image-polaroid"),
    d = document.querySelector(".drag-circle-polaroid");
  let u = !1;
  d.addEventListener("mousedown", (e) => {
    e.preventDefault(), (u = !0), (d.style.cursor = "grabbing");
  }),
    document.addEventListener("mouseup", () => {
      u && ((u = !1), (d.style.cursor = "grab"));
    }),
    document.addEventListener("mousemove", (e) => {
      if (!u) return;
      const t = a.getBoundingClientRect(),
        n = e.clientY - t.top,
        o = t.height,
        r = (Math.max(0, Math.min(n, o)) / o) * 100;
      (c.style.top = `${r}%`),
        (i.style.clipPath = `inset(0 0 ${100 - r}% 0)`),
        (l.style.clipPath = `inset(${r}% 0 0 0)`);
    }),
    d.addEventListener("touchstart", (e) => {
      e.preventDefault(), (u = !0);
    }),
    document.addEventListener("touchend", () => {
      u && (u = !1);
    }),
    document.addEventListener("touchmove", (e) => {
      if (!u) return;
      const t = e.touches[0],
        n = a.getBoundingClientRect(),
        o = t.clientY - n.top,
        r = n.height,
        d = (Math.max(0, Math.min(o, r)) / r) * 100;
      (c.style.top = `${d}%`),
        (i.style.clipPath = `inset(0 0 ${100 - d}% 0)`),
        (l.style.clipPath = `inset(${d}% 0 0 0)`);
    });
});
