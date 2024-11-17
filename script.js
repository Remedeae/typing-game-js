// Variables for the DOM elements
const guess = document.querySelector("input");
const word = document.getElementById("word");
let correctWord;
const timer = document.getElementById("time");
let time = timer.textContent;
time = time.replace("s", "");
time = parseInt(time);
const scoreMsg = document.getElementById("score");
const gameOverContainer = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const difficulty = document.querySelector("option");
let timeIncrement = 5;

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//functions
function addWordToDOM() {
  correctWord = words[Math.floor(Math.random() * 19)];
  word.textContent = correctWord;
}
function updateScore() {
  let score = parseInt(scoreMsg.textContent);
  score++;
  scoreMsg.textContent = score;
}
function updateTime() {
  time--;
  timer.textContent = `${time}s`;
  if (time <= 0) {
    clearInterval(timeout);
    gameOver();
  }
}
function gameOver() {
  gameOverContainer.style.display = "block";
  function gameOverTextGeneration() {
    const gameOverText = document.createElement("h3");
    gameOverText.innerText = "Game Over";
    gameOverContainer.appendChild(gameOverText);
  }
  function restartBtnGeneration() {
    const restartBtn = document.createElement("button");
    restartBtn.onclick = () => {
      location.reload()
    };
    restartBtn.innerText = "Restart";
    gameOverContainer.appendChild(restartBtn);
  }
  gameOverTextGeneration();
  restartBtnGeneration();
}
//I couldn't figure out how to select the different options, I only got syntax errors with the method I was
//trying now. Also tried to do event listners but since the options don't have classes/IDs I couldn't target them.

/* function difficultyChange() {
  time = 10;
  if difficulty.value = "medium" {
    timeIncrement = 3;
    return;
  }
  if difficulty.value = "hard" {
    timeIncrement = 1;
    return;
  }
} */

//execute
addWordToDOM();
/* difficulty.addEventListener ("click", () => {
  difficultyChange();
}); */
const timeout = setInterval(updateTime, 1000);


guess.addEventListener("input", function (e) {
  if (this.value === correctWord) {
    updateScore();
    addWordToDOM();
    time += timeIncrement;
    this.value = "";
  }
});

settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("hide");
});