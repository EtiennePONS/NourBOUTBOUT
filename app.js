const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");

const audio1 = new Audio("pipe.mp3");
const audio2 = new Audio("CartoonFall.mp3");
const audio3 = new Audio("CartoonSquirrely.mp3");
const audio4 = new Audio("MediumLength.mp3");
const audio5 = new Audio("RoosterCrow.mp3");
const audio6 = new Audio("SheepLamb.mp3");
const audio7 = new Audio("funnyspring.mp3");
const audio8 = new Audio("cutecharacter.mp3");
const audio9 = new Audio("funny.mp3");

button1.addEventListener("click", play1);
button2.addEventListener("click", play2);
button3.addEventListener("click", play3);
button4.addEventListener("click", play4);
button5.addEventListener("click", play5);
button6.addEventListener("click", play6);
button7.addEventListener("click", play7);
button8.addEventListener("click", play8);
button9.addEventListener("click", play9);

function play1(event) {
  event.preventDefault();
  audio1.play();
}
function play2(event) {
  event.preventDefault();
  audio2.play();
}
function play3(event) {
  event.preventDefault();
  audio3.play();
}
function play4(event) {
  event.preventDefault();
  audio4.play();
}
function play5(event) {
  event.preventDefault();
  audio5.play();
}
function play6(event) {
  event.preventDefault();
  audio6.play();
}
function play7(event) {
  event.preventDefault();
  audio7.play();
}
function play8(event) {
  event.preventDefault();
  audio8.play();
}
function play9(event) {
  event.preventDefault();
  audio9.play();
}

function setViewportHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setViewportHeight();
window.addEventListener("resize", () => {
  setTimeout(setViewportHeight, 100);
});
