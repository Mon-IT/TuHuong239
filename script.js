function randomText1() {
  var text1 = "HappyBirthday";
  let letter = text1[Math.floor(Math.random() * text1.length)];
  return letter;
}

function rain1() {
  let cloud = document.querySelector(".cloud1");
  let e = document.createElement("div");
  let left = Math.floor(Math.random() * 310);
  let size = Math.random() * 1.5;
  let duration = Math.random() * 1;
  e.classList.add("text1");
  cloud.appendChild(e);
  e.innerText = randomText1();
  e.style.left = left + "px";
  e.style.fontSize = 0.5 + size + "em";
  e.style.animationDuration = 2 + duration + "s";
  setTimeout(function () {
    cloud.removeChild(e);
  }, 2000);
}
setInterval(function () {
  rain1();
}, 20);

function randomText2() {
  var text2 = "TuHuong239";
  let letter = text2[Math.floor(Math.random() * text2.length)];
  return letter;
}

function rain2() {
  let cloud = document.querySelector(".cloud2");
  let e = document.createElement("div");
  let left = Math.floor(Math.random() * 310);
  let size = Math.random() * 1.5;
  let duration = Math.random() * 1;
  e.classList.add("text2");
  cloud.appendChild(e);
  e.innerText = randomText2();
  e.style.left = left + "px";
  e.style.fontSize = 0.5 + size + "em";
  e.style.animationDuration = 2 + duration + "s";
  setTimeout(function () {
    cloud.removeChild(e);
  }, 2000);
}
setInterval(function () {
  rain2();
}, 20);
