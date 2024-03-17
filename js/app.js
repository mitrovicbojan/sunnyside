const btnNavEl = document.querySelector(".btn");
const menu = document.querySelector(".main-nav");
const allLinks = document.querySelectorAll("a:link");

btnNavEl.addEventListener("click", () => {
  menu.classList.toggle("nav-open");
});

allLinks.forEach(function (link) {
  link.addEventListener("click", (e) => {
    if (link.classList.contains("main-nav-link"))
      menu.classList.toggle("nav-open");
  });
});
