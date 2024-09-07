// document.addEventListener("DOMContentLoaded", function () {
//   const introScreen = document.getElementById("intro-screen");

//   introScreen.addEventListener("click", function () {
//     document.body.classList.add("intro-hidden");
//   });
// });

let intro = document.querySelector(".intro");
let introImg = document.querySelector(".intro__image");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    introImg.classList.add("active");

    setTimeout(() => {
      introImg.classList.remove("active");
      introImg.classList.add("fade");
    }, 1700); //starts fading after 2 secs
  }, 500); //start the animation after half a sec

  setTimeout(() => {
    //move intro screen up
    intro.style.top = "-100vh";
  }, 2400); //move after animation with image is done
});
