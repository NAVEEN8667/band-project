var len = document.getElementsByClassName("drum").length;

for (var i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", onclick); // corrected function name
}

function onclick() {
  // corrected function name
  var inner = this.innerHTML;
  make(inner);
  ani(inner);
}

document.addEventListener("keypress", function (event) {
  make(event.key);
  ani(event.key);
});

function make(key) {
  switch (key) {
    case "w":
      var a1 = new Audio("sounds/tom-1.mp3");
      a1.play();
      break;
    case "a":
      var a2 = new Audio("sounds/tom-2.mp3");
      a2.play();
      break;
    case "s":
      var a3 = new Audio("sounds/tom-3.mp3");
      a3.play();
      break;
    case "d":
      var a4 = new Audio("sounds/tom-4.mp3");
      a4.play();
      break;
    case "j":
      var a5 = new Audio("sounds/crash.mp3");
      a5.play();
      break;
    case "k":
      var a6 = new Audio("sounds/kick-bass.mp3");
      a6.play();
      break;
    case "l":
      var a7 = new Audio("sounds/snare.mp3");
      a7.play();
      break;
    default:
      console.log("Cannot play audio");
  }
}

function ani(key) {
  const activec = document.querySelector("." + key);
  activec.classList.add("pressed");
  setTimeout(function () {
    activec.classList.remove("pressed");
  }, 100);
}
