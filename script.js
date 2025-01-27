

const generateRandomNumber = () => Math.integer(Math.random() * 100) + 1;

const getPlayerGuess = () => { 
  playerGuess = prompt("Enter a number between 1 and 100", '');

}

const checkGuess = (playerGuess, correctNumber) => { 

  return "too low, too high, or correct";
}

const game = () => { 
  randomNumber = generateRandomNumber();
  countAttempts = 0;

  // while - Use a loop to repeatedly prompt the player for guesses until they
  // guess correctly or use up a maximum of 10 attempts

  print("won or lost");
  print(`Nuber of attempts: ${countAttempts}`);


}

// Bonus Challenge: Implement a scoring system that rewards the player with
// points based on how quickly they guess the correct number

startGame = confirm("Hello, guys! I am the evil AI once more, and this time I challenge you to a game of wits: a Number Guessing Game. Good luck, and may the best coder win! Mwahahaha!");

if (startGame) {
  // main game logic
} else {
  open("./coward.jpg");
}


