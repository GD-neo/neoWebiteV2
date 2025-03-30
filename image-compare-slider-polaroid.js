document.addEventListener("DOMContentLoaded", function () {
  // Lazy load images
  document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("loading", "lazy");
  });

  // Define translations for slider content
  const translations = {
    en: {
      pageContent: {
        beforeAfterTitle: "Before | After",
      },
    },
    de: {
      pageContent: {
        beforeAfterTitle: "Vorher | Nachher",
      },
    },
  };

  // Detect browser language and set default correctly
  let browserLang = navigator.language || navigator.userLanguage;
  let detectedLang = browserLang.includes("de") ? "de" : "en";
  let storedLang = localStorage.getItem("language");
  let currentLang = storedLang ? storedLang : detectedLang;
  if (!storedLang) {
    localStorage.setItem("language", currentLang);
  }
  // Translation logic for slider
  function updateStaticText() {
    function applyTranslation(key, obj) {
      const element = document.querySelector(`#${key}`);
      if (element) {
        if (typeof obj === "string") {
          element.innerHTML = obj;
        } else if (typeof obj === "object") {
          Object.keys(obj).forEach((subKey) => {
            applyTranslation(subKey, obj[subKey]);
          });
        }
      }
      const classElement = document.querySelectorAll(`.${key}`);
      if (classElement) {
        if (typeof obj === "string") {
          classElement.forEach((text) => {
            text.innerHTML = obj;
          });
        }
      }
    }
    // applyTranslation("meta", translations[currentLang].meta);
    applyTranslation("pageContent", translations[currentLang].pageContent);
  }
  updateStaticText();
  function switchLanguage() {
    currentLang = currentLang === "en" ? "de" : "en";
    localStorage.setItem("language", currentLang);

    updateStaticText();
  }
  document.getElementById("toggle-lang").addEventListener("click", function () {
    switchLanguage();
    updateStaticText();
  });
  updateStaticText();
  // Vertical slider dragging
  const container = document.querySelector(".image-wrapper-polaroid");
  const divider = document.querySelector(".divider-polaroid");
  const beforeImage = document.querySelector(".before-image-polaroid");
  const afterImage = document.querySelector(".after-image-polaroid");
  const dragCircle = document.querySelector(".drag-circle-polaroid");

  let isDragging = false;

  dragCircle.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDragging = true;
    dragCircle.style.cursor = "grabbing";
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      dragCircle.style.cursor = "grab";
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const rect = container.getBoundingClientRect();
    const y = e.clientY - rect.top; // Vertical position
    const height = rect.height;
    const newPos = Math.max(0, Math.min(y, height));
    const percentage = (newPos / height) * 100;

    divider.style.top = `${percentage}%`;
    beforeImage.style.clipPath = `inset(0 0 ${100 - percentage}% 0)`; // More "before" downward
    afterImage.style.clipPath = `inset(${percentage}% 0 0 0)`; // More "after" upward
  });

  // Touch support
  dragCircle.addEventListener("touchstart", (e) => {
    e.preventDefault();
    isDragging = true;
  });

  document.addEventListener("touchend", () => {
    if (isDragging) {
      isDragging = false;
    }
  });

  document.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const rect = container.getBoundingClientRect();
    const y = touch.clientY - rect.top;
    const height = rect.height;
    const newPos = Math.max(0, Math.min(y, height));
    const percentage = (newPos / height) * 100;

    divider.style.top = `${percentage}%`;
    beforeImage.style.clipPath = `inset(0 0 ${100 - percentage}% 0)`;
    afterImage.style.clipPath = `inset(${percentage}% 0 0 0)`;
  });
});
