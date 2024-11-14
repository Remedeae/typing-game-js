// Variables for the DOM elements
const guess = document.querySelector("input");
let correctWord;
const timer = document.getElementById("time");
let time = timer.textContent;
time = time.replace("s", ""); 
time = parseInt(time);
const scoreMsg = document.getElementById("score");
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


function addWordToDOM() {
  correctWord = words[Math.floor(Math.random() * 19)];
  console.log(correctWord);
}
function updateScore() {
  let score = parseInt(scoreMsg.textContent);
  score++;
  scoreMsg.textContent = score;
}
function updateTime () {
  time --;
  timer.textContent = `${time}s`
  if (time <= 0) {
    clearInterval(timeout);
    gameOver();
  }
}
function gameOver () {

}

//execute
addWordToDOM();
const timeout = setInterval(updateTime, 1000);

guess.addEventListener("input", function (e) {
  if (this.value === correctWord) {
    updateScore ();
    addWordToDOM ();
    time += 5;
    this.value = "";
  }
});
