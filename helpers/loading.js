const loadingPage = document.getElementById("header-menu").classList;

loadingPage.add("hidden");

setTimeout(() => {
  document.getElementById("loading-page").remove();
  loadingPage.remove("hidden");
  loadingPage.add("slide-down");
}, 200);
