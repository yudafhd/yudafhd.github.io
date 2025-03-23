const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
  if (navMenu.classList.contains("hidden")) {
    navMenu.classList.remove("hidden", "slide-up");
    navMenu.classList.add("slide-down");
  } else {
    navMenu.classList.remove("slide-down");
    navMenu.classList.add("slide-up");
    setTimeout(() => navMenu.classList.add("hidden"), 300);
  }
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});
