document.addEventListener("DOMContentLoaded", function () {
  // Lazy load images
  document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("loading", "lazy");
  });

  // Define translations for slider content
  const translations = {
    en: {
      pageContent: {
        beforeAfterTitle: "Before|After",
      },
    },
    de: {
      pageContent: {
        beforeAfterTitle: "Vorher|Nachher",
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

  // Slider drag functionality
  const container = document.querySelector(".image-wrapper"); // Updated to image-wrapper
  const divider = document.querySelector(".divider");
  const beforeImage = document.querySelector(".before-image");
  const afterImage = document.querySelector(".after-image");
  const dragCircle = document.querySelector(".drag-circle");

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
    const x = e.clientX - rect.left;
    const width = rect.width;
    const newPos = Math.max(0, Math.min(x, width));
    const percentage = (newPos / width) * 100;

    divider.style.left = `${percentage}%`;
    beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;
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
    const x = touch.clientX - rect.left;
    const width = rect.width;
    const newPos = Math.max(0, Math.min(x, width));
    const percentage = (newPos / width) * 100;

    divider.style.left = `${percentage}%`;
    beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;
  });
});
