const headerMenu = document.getElementById("header-menu").classList;

headerMenu.add("hidden");

setTimeout(() => {
  document.getElementById("loading-page").remove();
  headerMenu.remove("hidden");
}, 1000);
