document.addEventListener("DOMContentLoaded", function () {
  const e = document.getElementById("cookiePopup"),
    t = document.getElementById("agreeButton"),
    o = localStorage.getItem("cookieAgreement"),
    n = localStorage.getItem("cookieAgreementTimestamp"),
    l = new Date().getTime();
  (!o || !n || l - n > 12096e5) && (e.style.display = "block"),
    t.addEventListener("click", function () {
      localStorage.setItem("cookieAgreement", "true"),
        localStorage.setItem("cookieAgreementTimestamp", l),
        (e.style.display = "none");
    }),
    window.addEventListener("scroll", function () {
      window.scrollY > 50
        ? e.classList.add("scrolled")
        : e.classList.remove("scrolled");
    });
});
