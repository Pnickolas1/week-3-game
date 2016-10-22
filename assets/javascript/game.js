var wordBank = ["cubs","pirates","dodgers","whitesox","bluejays","giants","mets","redsox","marlins","rangers","yankees"];


var wins = 0;
var attempts = 0;
var maxAttempts = 10;
var attemptsLeft;
var lettersGuessed = "";
var teamName;
var workingAnswer = new Array();


// CHECK IF THE USER INPUT A LETTER 
function validLetter(input){
	var letters = /^[A-Za-z]+$/;
	if(input.match(letters)){
		return true;
	}
	else{
		alert("That ain't a letter!");
		return false;
	}
}

// WHEN THE USER PRESSES THE KEY IT RECORDS & SET == TO INPUT
document.onkeyup  = function(event){
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();

	if(validLetter(userInput)){
		if (attempts === maxAttempts) {
			alert("GAME OVER - YOU LOSE");
			attempts = 0;
			lettersGuessed = "";
			startGame();
		}
		attempts = attempts + 1;

		lettersGuessed = lettersGuessed  + userInput + ",";

		// DISPLAY THE GUESSED LETTER
		document.querySelector('#guessedLetters').innerHTML = lettersGuessed;

		//DISPLAY # OF ATTEMPTS REMAINING
		attemptsLeft = maxAttempts - attempts;
		document.querySelector("#guessesRemaining").innerHTML = attemptsLeft;

		for(var i = 0; i < teamName.length; i++){
			console.log("userInput: " + userInput +
				"   teamName letter:  " + teamName.charAt(i) +
				"	teamName:  " + teamName +
				"	workingAnswer: " + workingAnswer[i]
				);

				// A CORRECT GUESS
			if (userInput === teamName.charAt(i)){
				workingAnswer[i] = userInput;
				document.querySelector("#hash-blanks").innerHTML = workingAnswer.join('');
			}
		} 
			// 
		if (workingAnswer.includes("_") === false){
			document.querySelector("#hash-blanks").innerHTML = teamName;
			attempts = 0;
			wins = wins + 1;
			lettersGuessed = "";
			setTimeout(function() {alert("You got it!"); startGame();},0);
			}
		}
	}



	function startGame(){
		workingAnswer = new Array();

		// pick  a team name
		teamName = wordBank[Math.floor(Math.random() * wordBank.length)];
		console.log(teamName);

		// show how many times you won
		document.querySelector("#number-wins").innerHTML = wins;

		//Display answer as hash lines
		for (var i =0; i < teamName.length; i++){
			workingAnswer[i] = "_";
		}

		//display the letters guess
		document.querySelector("#guessedLetters").innerHTML = lettersGuessed;

		//display max attempts
		document.querySelector("#guessesRemaining").innerHTML = maxAttempts;

		//display the wrong answer in blanks
		document.querySelector("#hash-blanks").innerHTML = workingAnswer.join('');
	}

function reStart(){
	attempts = 0;
	wins = wins + 1;
	lettersGuessed = "";
	setTimeout(function(){alert("You're good amigo, let's play again"); startGame();},0 );
}


startGame();









