const infoBtn = document.querySelector(".info");
const infoText = document.querySelector(".info-text");
const moreInfo = document.querySelector(".more-info");
const backBtn = document.querySelector(".back");
infoBtn.addEventListener("click", () => {
  document.body.classList.add("hide-for-info");
  infoText.classList.add("show");
  moreInfo.classList.add("show");
  backBtn.classList.add("show");
});
backBtn.addEventListener("click", () => {
  document.body.classList.remove("hide-for-info");
  infoText.classList.remove("show");
  moreInfo.classList.remove("show");
  backBtn.classList.remove("show");
});

const splashScreen = document.querySelector('.splash-screen');
setTimeout(() => {
    splashScreen.classList.add('finish')
}, 4000);