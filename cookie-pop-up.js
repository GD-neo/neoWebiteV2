document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("cookiePopup");
  const agreeButton = document.getElementById("agreeButton");

  // Check cookie agreement
  const agreement = localStorage.getItem("cookieAgreement");
  const agreementTimestamp = localStorage.getItem("cookieAgreementTimestamp");
  const fourteenDays = 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds
  const now = new Date().getTime();

  if (
    !agreement ||
    !agreementTimestamp ||
    now - agreementTimestamp > fourteenDays
  ) {
    popup.style.display = "block";
  }

  // Handle button click
  agreeButton.addEventListener("click", function () {
    localStorage.setItem("cookieAgreement", "true");
    localStorage.setItem("cookieAgreementTimestamp", now);
    popup.style.display = "none";
  });

  // Handle scroll event
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // Trigger after scrolling 50px
      popup.classList.add("scrolled");
    } else {
      popup.classList.remove("scrolled");
    }
  });
});
