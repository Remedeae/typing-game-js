// Variables for the DOM elements

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
const correctWord = words [Math.floor(Math.random() * 19)];

let guess = document.querySelector;

function addWordToDOM () {
  let guess = document.querySelector("input");
  if guess.addEventListener("keypress", function (evt) {
    if (evt.key === "Enter") {
      
    }
  })
}

function updateScore () {
  let score = 0;
  if correctWord
}