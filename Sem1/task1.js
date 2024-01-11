const backBtn = document.querySelector(".backBTN");
const forwardBtn = document.querySelector(".forwardBTN");

backBtn.addEventListener("click", () => {
  window.history.back();
});

forwardBtn.addEventListener("click", () => {
  window.history.forward();
});
