const burger_menu = document.querySelector("#burger_menu");
const menue = document.querySelector("#nav_ul");
const close = document.querySelector(".close");
burger_menu.addEventListener("click", () => {
  menue.classList.add("closed");
});
close.addEventListener("click", (event) => {
  menue.classList.remove("closed");
});
