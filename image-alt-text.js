document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach((e) => {
    e.setAttribute("loading", "lazy");
  });
  const e = {
    en: {
      showerFittingType1:
        "NEOVISION Classic modern frameless glass shower fitting, custom-made shower enclusure",
      showerFittingType2:
        "NEOVISION Pura premium frameless glass shower fitting, custom-made shower enclusure",
      showerFittingType3:
        "NEOVISION Easy robust brass shower fitting, custom-made shower enclusure",
      showerFittingType4:
        "NEOVISION Walk-In modern frameless glass walk-in shower custom-made shower enclusure",
      showerDrain1:
        "NEOX Channel E elegant stainless steel shower drain custom-made",
      showerDrain2:
        "NEOX Channel X modern stainless steel shower drain custom-made",
      showerDrain3:
        "NEOX Channel S elegant stainless steel shower drain for projects",
      showerDrain4:
        "NEOX Drainage Outlet modern stainless steel flat shower drain",
      glassShower: "Custom glass shower enclosure with high-end finish",
      mirror: "NEOLIGHT bespoke LED mirror with integrated lighting anti-fog",
      specialsImg: "Neo Building versatile glass designs doors dividers",
      showerDrainage:
        "Advanced shower drainage system for optimized water flow",
      industrialDrainage:
        "NEOX Heavy-duty industrial drainage solution for factories and warehouses",
      industrialFlooring:
        "NEOXID Durable industrial flooring for commercial and manufacturing spaces",
      modularBathroom:
        "RENOBOX Innovative modular bathroom concept for flexible design",
      stainlessSteelProfiles:
        "NEOX High-quality stainless steel profiles for construction and design",
      steelConstruction:
        "NEOX Robust steel construction elements for various applications",
    },
    de: {
      showerFittingType1:
        "NEOVISION Classic moderne rahmenlose Glasdusche maßgefertigt",
      showerFittingType2:
        "NEOVISION Pura hochwertige rahmenlose Glasdusche maßgefertigt",
      showerFittingType3:
        "NEOVISION Easy robuste Messing Glasdusche maßgefertigt",
      showerFittingType4:
        "NEOVISION Walk-In moderne rahmenlose Glas-Walk-In-Dusche maßgefertigt",
      showerDrain1:
        "NEOX Channel E eleganter Edelstahl-Duschablauf maßgefertigt",
      showerDrain2:
        "NEOX Channel X moderner Edelstahl-Duschablauf maßgefertigt",
      showerDrain3:
        "NEOX Channel S eleganter Edelstahl-Duschablauf für Projekte",
      showerDrain4: "NEOX Drainage Outlet moderner Edelstahl-Flachduschablauf",
      glassShower:
        "NEOVISION Maßgefertigte Glasdusche mit hochwertiger Verarbeitung",
      mirror:
        "NEOLIGHT individueller LED-Spiegel mit integrierter Beleuchtung Spiegelheizung",
      specialsImg: "Neo Building vielseitige Glasdesigns Türen Trennwände",
      showerDrainage:
        "Fortschrittliches Duschentwässerungssystem für optimierte Wasserführung",
      industrialDrainage:
        "NEOX Schwerlast-Industrieentwässerungslösung für Fabriken und Lagerhallen",
      industrialFlooring:
        "NEOXID Strapazierfähiger Industrieboden für Gewerbe- und Produktionsflächen",
      modularBathroom:
        "RENOBOX Innovatives modulares Badezimmerkonzept für flexible Gestaltung",
      stainlessSteelProfiles:
        "NEOX Hochwertige Edelstahlprofile für Bau und Design",
      steelConstruction:
        "NEOX Robuste Edelstahlbauelemente für vielseitige Anwendungen",
    },
  };
  let s = (navigator.language || navigator.userLanguage).includes("de")
      ? "de"
      : "en",
    r = localStorage.getItem("language"),
    t = r || s;
  function a() {
    document.querySelectorAll("img").forEach((s) => {
      s.classList.forEach((r) => {
        e[t][r] && s.setAttribute("alt", e[t][r]);
      });
    });
  }
  r || localStorage.setItem("language", t), "de" !== t && a();
  const n = document.getElementById("toggle-lang");
  n &&
    n.addEventListener("click", function () {
      (t = "en" === t ? "de" : "en"), localStorage.setItem("language", t), a();
    });
});
