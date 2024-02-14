const buttonClap = document.getElementById("padClap");
const buttonCrash = document.getElementById("padCrash");
const buttonOpenHH = document.getElementById("padOpenHH");
const buttonKick = document.getElementById("padKick");
const buttonSnare = document.getElementById("padSnare");
const buttonCloseHH = document.getElementById("padCloseHH");

const audioClap = new Audio("Burp.mp3");
const audioCrash = new Audio("CartoonFall.mp3");
const audioOpenHH = new Audio("CartoonSquirrely.mp3");
const audioKick = new Audio("MediumLength.mp3");
const audioSnare = new Audio("RoosterCrow.mp3");
const audioCloseHH = new Audio("SheepLamb.mp3");

buttonClap.addEventListener("click", playClap);
buttonCrash.addEventListener("click", playCrash);
buttonOpenHH.addEventListener("click", playOpenHH);
buttonKick.addEventListener("click", playKick);
buttonSnare.addEventListener("click", playSnare);
buttonCloseHH.addEventListener("click", playCloseHH);

function playClap(event) {
  event.preventDefault();
  audioClap.play();
}
function playCrash(event) {
  event.preventDefault();
  audioCrash.play();
}
function playOpenHH(event) {
  event.preventDefault();
  audioOpenHH.play();
}
function playKick(event) {
  event.preventDefault();
  audioKick.play();
}
function playSnare(event) {
  event.preventDefault();
  audioSnare.play();
}
function playCloseHH(event) {
  event.preventDefault();
  audioCloseHH.play();
}

function setViewportHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setViewportHeight();
window.addEventListener("resize", () => {
  setTimeout(setViewportHeight, 100);
});
