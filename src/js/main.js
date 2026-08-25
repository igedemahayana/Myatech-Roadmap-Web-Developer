
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuOverlay = document.getElementById("menu-overlay");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  function openMenu() {
    mobileMenu.classList.remove(
      "pointer-events-none",
      "opacity-0",
      "translate-y-[-12px]"
    );

    mobileMenu.classList.add(
      "pointer-events-auto",
      "opacity-100",
      "translate-y-0"
    );

    menuOverlay.classList.remove(
      "pointer-events-none",
      "opacity-0"
    );

    menuOverlay.classList.add(
      "pointer-events-auto",
      "opacity-100"
    );

    iconMenu.classList.add("hidden");
    iconClose.classList.remove("hidden");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Tutup menu navigasi");

    document.body.classList.add("overflow-hidden");
  }

  function closeMenu() {
    mobileMenu.classList.remove(
      "pointer-events-auto",
      "opacity-100",
      "translate-y-0"
    );

    mobileMenu.classList.add(
      "pointer-events-none",
      "opacity-0",
      "translate-y-[-12px]"
    );

    menuOverlay.classList.remove(
      "pointer-events-auto",
      "opacity-100"
    );

    menuOverlay.classList.add(
      "pointer-events-none",
      "opacity-0"
    );

    iconClose.classList.add("hidden");
    iconMenu.classList.remove("hidden");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu navigasi");

    document.body.classList.remove("overflow-hidden");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuOverlay.addEventListener("click", closeMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      closeMenu();
    }
  });