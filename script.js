// startup.js
(function () {
  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile menu toggle
  var toggleBtn = document.getElementById("mobile-menu-toggle");
  var menu = document.getElementById("mobile-menu");

  if (toggleBtn && menu) {
    function closeMenu() {
      menu.classList.add("hidden");
      toggleBtn.setAttribute("aria-expanded", "false");
    }

    function toggleMenu() {
      var isHidden = menu.classList.contains("hidden");
      if (isHidden) {
        menu.classList.remove("hidden");
        toggleBtn.setAttribute("aria-expanded", "true");
      } else {
        closeMenu();
      }
    }

    // Default hidden
    menu.classList.add("hidden");

    toggleBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMenu();
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && e.target !== toggleBtn) {
        closeMenu();
      }
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    // Close after clicking a menu link
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        closeMenu();
      });
    });
  }
})();