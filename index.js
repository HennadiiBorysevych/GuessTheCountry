import wordList from "./words.db.js";
const inputs = document.querySelector(".word"),
  hintTag = document.querySelector(".hint span"),
  guessLeft = document.querySelector(".guess span"),
  mistakes = document.querySelector(".wrong span"),
  resetBtn = document.querySelector(".reset"),
  hintBtn = document.querySelector(".showhint"),
  hintElement = document.querySelector(".hint"),
  typeInput = document.querySelector(".type-input"),
  countryFlag = document.querySelector(".country__flag");

// Intializing game variables

let word,
  incorrectLetters = [],
  correctLetters = [],
  maxGuesses;

//Select random word from word list and set up game
function startNewGame() {
  alert("New Game Started! Guess New Word");
  hintElement.style.display = "none";
  hintElement.style.opacity = "0";

  // Select random word from word list
  const ranWord = wordList[Math.floor(Math.random() * wordList.length)];

  let flag = `<img src=${ranWord.flag} alt=${ranWord.answer} class="flag">`;
  countryFlag.innerHTML = flag;
  word = ranWord.answer;
  // Set up game
  maxGuesses = word.length >= 5 ? 8 : 6;
  correctLetters = [];
  incorrectLetters = [];
  hintTag.innerText = ranWord.hint;
  guessLeft.innerText = maxGuesses;
  mistakes.innerText = incorrectLetters;
  // Display word
  inputs.innerHTML = "";
  for (let i = 0; i < word.length; i++) {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("disabled", "true");
    inputs.appendChild(input);
  }
}

// Update the word
function handleInput(e) {
  //ignore non-alphabet input and input that is already guessed
  const key = e.target.value.toLowerCase();
  if (
    key.match(/^[a-z]+$/i) &&
    !incorrectLetters.includes(key) &&
    !correctLetters.includes(key)
  ) {
    //check if letter in word
    if (word.includes(key)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === key) {
          inputs.querySelectorAll("input")[i].value = key;
          correctLetters.push(key); // fix: push key into correctLetters array
        }
      }
    } else {
      //update inccorect guess
      maxGuesses--;
      incorrectLetters.push(key);
      mistakes.textContent = incorrectLetters;
    }
  }
  //update remain guess and check for win lose
  guessLeft.innerText = maxGuesses;
  if (correctLetters.length === word.length) {
    alert(`Kudos! You Found The Word ${word.toUpperCase()}`);
    startNewGame();
  } else if (maxGuesses < 1) {
    alert("Game Over! You dont have remaining guesses!");
    for (let i = 0; i < word.length; i++) {
      inputs.querySelectorAll("input")[i].value = word[i];
    }
  }
  //clear input field
  typeInput.value = "";
}

//show hint element
function showHintElement() {
  hintElement.style.display = "block";
  hintElement.style.opacity = "1";
}
//setup event listener
resetBtn.addEventListener("click", startNewGame);
hintBtn.addEventListener("click", showHintElement);
typeInput.addEventListener("input", handleInput);
inputs.addEventListener("click", () => typeInput.focus());
document.addEventListener("keydown", () => typeInput.focus());

startNewGame();