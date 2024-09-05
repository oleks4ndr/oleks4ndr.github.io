document.addEventListener("DOMContentLoaded", function () {
  const introScreen = document.getElementById("intro-screen");

  introScreen.addEventListener("click", function () {
    document.body.classList.add("intro-hidden");
  });
});
