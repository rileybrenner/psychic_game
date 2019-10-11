//list of all options for game guesses 
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//track game stats 
var remainingGuesses = 9;
var wins = 0;
var losses = 0;
var computerGuess = [];
var lettersGuessed = [];

//user choice
document.onkeyup = function(event) {
	var userGuess = event.key;
	lettersGuessed.push(userGuess);
	console.log(computerGuess[0]);

//computer choice
window.onload = function() {
	var compGuess = options[Math.floor(Math.random() * options.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}
// if the player chooses the same letter as computer, you win!

gameReset = function() {
	remainingGuesses = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;	
}

if ((userGuess === computerGuess[0]) && (remainingGuesses > 0)) {
	wins++;
	gameReset();
	var compGuess = options[Math.floor(Math.random() * options.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}

// if the player does not the same letter as computer, you lose!


else if ((userGuess !== computerGuess[0]) && (remainingGuesses > 0)) {
	remainingGuesses = remainingGuesses-1;
}

else {
	losses++;
	gameReset();
	var compGuess = options[Math.floor(Math.random() * options.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}

// Math to render proper html

var html = "<p>Guess what letter I'm thinking of!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + remainingGuesses + "</p>" +
          "<p>Your guesses so far: " + lettersGuessed + "</p>";
 
document.querySelector("#game").innerHTML = html;

// document.querySelector("#wins").innerHTML = wins;
// document.getElementById("game").innerHTML = wins;

}