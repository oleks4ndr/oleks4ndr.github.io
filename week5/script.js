let buns = document.getElementById("Buns");
let meat = document.getElementById("Meat");
let tomatoes = document.getElementById("Tomatoes");
let onions = document.getElementById("Onions");
let salad = document.getElementById("Salad");

buns.addEventListener("click", () => {
  document.getElementById("textbox").innerText = "You've clicked on the buns!";
});

meat.addEventListener("click", () => {
  document.getElementById("textbox").innerText =
    "You've clicked on the meat patty!";
});

tomatoes.addEventListener("click", () => {
  document.getElementById("textbox").innerText =
    "You've clicked on the tomatoes!";
});

onions.addEventListener("click", () => {
  document.getElementById("textbox").innerText =
    "You've clicked on the onions!";
});

salad.addEventListener("click", () => {
  document.getElementById("textbox").innerText =
    "You've clicked on the lettuce!";
});
