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
const difficulty = document.getElementById("difficulty")
console.dir(difficulty);
let timeIncrement;

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
/* function difficultyChange () {
  if difficulty.option = "0" {
    timeIncrement = 5;
    return;
  }
  if difficulty.option = "1" {
    timeIncrement = 3;
    return;
  }
  timeIncrement = 1;
} */
//execute
addWordToDOM();
const timeout = setInterval(updateTime, 1000);
/* difficultyChange (); */

guess.addEventListener("input", function (e) {
  if (this.value === correctWord) {
    updateScore();
    addWordToDOM();
    time += timeIncrement;
    this.value = "";
  }
});

settingsBtn.addEventListener("click", function (e) {
  settings.classList.toggle("hide");
})