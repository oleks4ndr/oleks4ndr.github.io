AOS.init();

document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".header__nav").classList.toggle("active");
});
