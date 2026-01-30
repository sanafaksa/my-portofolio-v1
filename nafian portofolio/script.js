
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
