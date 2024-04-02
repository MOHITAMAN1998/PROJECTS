"use strict";
//random no generate
const Numb = Math.trunc(Math.random() * 20);
console.log(Numb);

//handling event
let scoreresult = 20;
document.querySelector(".check").addEventListener("click", function () {
  const res = Number(document.querySelector(".guess").value);

  if (!res) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (res === Numb) {
    document.querySelector(".message").textContent = "Correct guess!";
    document.querySelector(".number").textContent = Numb;
    document.querySelector(".highscore").textContent = scoreresult;
    document.querySelector("body").style.backgroundColor = "#228B22";
  } else if (res > Numb) {
    if (scoreresult > 1) {
      document.querySelector(".message").textContent = "Too high!";
      scoreresult--;
      document.querySelector(".score").textContent = scoreresult;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#FF0000";
    }
  } else if (res < Numb) {
    if (scoreresult > 1) {
      document.querySelector(".message").textContent = "Too low!";
      scoreresult--;
      document.querySelector(".score").textContent = scoreresult;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#FF0000";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  window.location.reload();
});
