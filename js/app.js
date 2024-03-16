const btnNavEl = document.querySelector(".btn");
const menu = document.querySelector(".main-nav");

btnNavEl.addEventListener("click", () => {
  menu.classList.toggle("nav-open");
});
