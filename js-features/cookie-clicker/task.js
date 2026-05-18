const img = document.getElementById("cookie");
const clickCount = document.getElementById("clicker__counter");
const clickTime = document.getElementById("clicker__time");

let clickCounter = 0;
let lastClickTime = null; // время последнего клика
let imgLarge = false;

const imgWidthNormal = img.width;
const imgHeightNormal = img.height;
const imgWidthLarge = imgWidthNormal + 50;
const imgHeightLarge = imgHeightNormal + 50;

img.onclick = () => {
  clickCounter += 1;
  clickCount.textContent = clickCounter;

  if (imgLarge) {
    img.width = imgWidthNormal;
    img.height = imgHeightNormal;
  } else {
    img.width = imgWidthLarge;
    img.height = imgHeightLarge;
  }
  imgLarge = !imgLarge;

  // вычисляем время клика
  const now = Date.now();
  const diffSeconds = (now - lastClickTime) / 1000;
  if (lastClickTime == null) {
    clickTime.textContent = 0;
  } else {
    clickTime.textContent = diffSeconds.toFixed(2);
  }
  lastClickTime = now;
};
