var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = "";
var newGuessedLetter = document.getElementById("newGuess").value;

var mysteryLetter = "";
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

startNewGame();

function startNewGame() {
  guessesLeft = 9;
  guessedLetters = "";
  clicky();
  letterPicker();
}

function reNewGame() {
  guessesLeft = 9;
  letterPicker();
}

function randomizer() {
  document.getElementById("mysteryLetter").innerHTML = mysteryLetter;
}

function letterPicker() {
  mysteryLetter = "";
  mysteryLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(mysteryLetter);
  randomizer();
}

function clicky() {
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  clicky2();
  clicky3();
}

function clicky2() {
  document.getElementById("incorrectGuesses").innerHTML = losses;
}

function clicky3() {
  document.getElementById("correctGuesses").innerHTML = wins;
}

function makeGuess() {
  event.preventDefault();
  var newGuessedLetter = document.getElementById("newGuess").value;
  if (newGuessedLetter !== mysteryLetter) {
    console.log(newGuessedLetter);
    guessedLetters += " " + newGuessedLetter;
    insertLetters();
    document.getElementById("newGuess").value = "";
    newGuessedLetter = "";
    guessesLeft--;
    clicky()
    if (guessesLeft < 1) {
      console.log("gameover")
      reNewGame();
    }
  } else {
    document.getElementById("newGuess").value = "";
    wins++;
    console.log("winner winner")
    guessesLeft = 9;
    guessedLetters = "";
    clicky();
    letterPicker();
  }
}

function insertLetters() {
  event.preventDefault();
  document.getElementById("lettersArr").innerHTML = guessedLetters;
}
