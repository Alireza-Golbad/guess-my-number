"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".message").textContent = "🚫 No number!!";
        // When player wins--------------------------
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent =
            "🐱‍🐉 Correct number! 🎉";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#009933";
        document.querySelector(".number").style.width = "30rem";
        // When number is too high or too low---------------------
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📈 Too high!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "🎃 You lost the game!";
            document.querySelector(".score").textContent = 0;
            document.querySelector(".number").textContent = secretNumber;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "🏮 Too low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "🎃 You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "rgb(64, 1, 70)";
});
