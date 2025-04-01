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
  const a = document.querySelector(".image-wrapper"),
    c = document.querySelector(".divider"),
    l = document.querySelector(".before-image"),
    i = document.querySelector(".after-image"),
    u = document.querySelector(".drag-circle");
  let d = !1;
  u.addEventListener("mousedown", (e) => {
    e.preventDefault(), (d = !0), (u.style.cursor = "grabbing");
  }),
    document.addEventListener("mouseup", () => {
      d && ((d = !1), (u.style.cursor = "grab"));
    }),
    document.addEventListener("mousemove", (e) => {
      if (!d) return;
      const t = a.getBoundingClientRect(),
        n = e.clientX - t.left,
        o = t.width,
        r = (Math.max(0, Math.min(n, o)) / o) * 100;
      (c.style.left = `${r}%`),
        (l.style.clipPath = `inset(0 ${100 - r}% 0 0)`),
        (i.style.clipPath = `inset(0 0 0 ${r}%)`);
    }),
    u.addEventListener("touchstart", (e) => {
      e.preventDefault(), (d = !0);
    }),
    document.addEventListener("touchend", () => {
      d && (d = !1);
    }),
    document.addEventListener("touchmove", (e) => {
      if (!d) return;
      const t = e.touches[0],
        n = a.getBoundingClientRect(),
        o = t.clientX - n.left,
        r = n.width,
        u = (Math.max(0, Math.min(o, r)) / r) * 100;
      (c.style.left = `${u}%`),
        (l.style.clipPath = `inset(0 ${100 - u}% 0 0)`),
        (i.style.clipPath = `inset(0 0 0 ${u}%)`);
    });
});
