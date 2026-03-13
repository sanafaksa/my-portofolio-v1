
const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLinks = document.querySelectorAll(".nav-link");

const openMenu = () => {
  nav.classList.add("show");
  nav.setAttribute("aria-hidden", "false");
  menu.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
};

const closeMenu = () => {
  nav.classList.remove("show");
  nav.setAttribute("aria-hidden", "true");
  menu.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "auto";
};

menu.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

nav.addEventListener("click", (e) => {
  if (e.target === nav) {
    closeMenu();
  }
});

// Smooth scroll to "About" section when arrow is clicked
const scrollDownBtn = document.querySelector(".scroll-down");
if (scrollDownBtn) {
  scrollDownBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector("#about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// 1. Remove "Built with Spline" logo using Shadow DOM manipulation
// 2. Handle click on Spline objects (like the 3D Portfolio button)
const splineViewer = document.querySelector("spline-viewer");
if (splineViewer) {
  // Hide logo forcefully
  const hideSplineLogo = () => {
    const shadowLogo = splineViewer.shadowRoot?.querySelector("#logo");
    if (shadowLogo) {
      shadowLogo.style.display = "none";
      shadowLogo.remove(); // Remove it entirely
    }
  };

  // Check periodically since the 3D scene takes a moment to load
  const logoInterval = setInterval(hideSplineLogo, 500);
  setTimeout(() => clearInterval(logoInterval), 10000); // Stop checking after 10s

  // Intercept clicks on the 3D canvas
  splineViewer.addEventListener("mouseDown", (e) => {
    // If the 3D object has a name, we can route it.
    // If you want to change the destination, ganti link di bawah ini:
    const targetLink = "https://nafian.my.id/"; // <-- Ganti dengan link web Anda

    if (e.detail && e.detail.name) {
      const objName = e.detail.name.toLowerCase();
      // If user clicks anything named "portfolio", "button", "text", etc. inside Spline
      if (objName.includes("portfolio") || objName.includes("button") || objName.includes("group")) {
        window.open(targetLink, "_blank"); // Buka di tab baru
        // window.location.href = targetLink; // Buka di halaman yang sama
      }
    } else {
      // Fallback jika tidak ada namanya, tapi elemen diklik
      window.open(targetLink, "_blank");
    }
  });
}
