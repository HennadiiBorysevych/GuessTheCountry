const wordInput = document.querySelector(".word"),
  hintTag = document.querySelector(".hint span"),
  guessLeft = document.querySelector(".guess span"),
  mistakes = document.querySelector(".wrong span"),
  resetBtn = document.querySelector(".reset"),
  hintBtn = document.querySelector(".showhint"),
  hintEl = document.querySelector(".hint"),
  typeInput = document.querySelector(".type-input");

// Intializing game variables

let word,
  incorrectLetters = [],
  correctLetters = [],
  maxGuesses;

//Select random word from word list and set up game
function startNewGame() {
  alert("New Game Started! Guess New Word");
  hintEl.getElementsByClassName.display = "none";
  hintEl.getElementsByClassName.opacity = "0";
  const ranWord = wordList[Math.floor(Math.random() * wordList.length)];
}
