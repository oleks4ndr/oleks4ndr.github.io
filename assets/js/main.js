AOS.init();

// Select each project div
const project1 = document.querySelector(".project1");
const project2 = document.querySelector(".project2");
const project3 = document.querySelector(".project3");
const project4 = document.querySelector(".project4");

// Add click event listeners to each project
project1.addEventListener("click", () => {
  window.location.href = "/30mff/index.html"; // Path to the first project
});

project2.addEventListener("click", () => {
  window.location.href = "/interactivecomic/index.html"; // Path to the second project
});

project3.addEventListener("click", () => {
  window.location.href = "/sound-project/index.html"; // Path to the third project
});

project4.addEventListener("click", () => {
  window.location.href = "/video-project/index.html"; // Path to the fourth project
});
