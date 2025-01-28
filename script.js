const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// ELIF
const game = () => {
  console.log("Game started");
  let startGame = confirm(
      "Hello, guys! I am the evil AI, and this time I challenge you to a game of wits: a Number Guessing Game. Good luck, and may the best gambler win! Mwahahaha! Are you ready to engage in mortal combat with me?"
  );

  if (startGame) {
    let playAgain = false;
    const {attempts, victory} = play();
    const message = endGame(attempts, victory);
    alert(message);
    playAgain = confirm("Do you want to play with fate again?");
    if (playAgain) {
      game();
    } else {
      alert("Bye Bye, COWARD!");
      return quit();
    }
  } else {
    let exit = confirm("Do you wish to quite the game?");
      if (exit) {
        alert("Bye Bye, COWARD!");
        return quit();
      }
      else play();
  }
};

// STEF
const play = () => {
    const selectedNumber = generateRandomNumber();
    console.log(`Generated number: ${selectedNumber}`);
    let attempts = 0;
    let victory = false;
    let playerGuess;

    do {
        attempts++;
        attempts == 10 ? alert("LAST CHANCE!") : null;
        playerGuess = getPlayerGuess();
        console.log(`Attempt n. ${attempts}\nPlayer guess: ${playerGuess}`);
        let check = checkGuess(playerGuess, selectedNumber);

        switch (check) {
            case "L":
                attempts != 10
                    ? alert(
                          `Wrong Guess \nYour Guess is lower than My number! \nYou have ${
                              10 - attempts
                          } attempts left `
                      )
                    : alert(`Sorry... no luck for you today`);
                break;
            case "H":
                attempts != 10
                    ? alert(
                          `Wrong Guess \nYour Guess is higher than My number! \nYou have ${
                              10 - attempts
                          } attempts left `
                      )
                    : alert(`Sorry... no luck for you today`);
                break;
            case "C":
                victory = true;
                alert(`Correct! Are you a cheater?`);
                break;
        }
    } while (attempts < 10 && !victory);

    return {attempts, victory};
};

const getReward = (attempts) => (attempts > 0 && attempts <= 10) ? attempts * 0.1 : 0;

// ANASTASIIA
const endGame = (attempts, vicotry) => {
  console.log(vicotry);
  let reward = getReward(attempts);
  return (vicotry ? `You won! You made a total of ${attempts} attemts and got ${reward} points reward for speed` : `You lose!`);
};


// STEF
const getPlayerGuess = () => {
  let stringInput = userInput("Enter a number between 1 and 100", "");
  const regex = /^[0-9]+$/;
  let input;

  if (regex.test(stringInput)) {
      input = parseInt(stringInput, 10);

      if (isNaN(input)) {
          alert("Invalid input. Please enter only numeric characters.");
          return getPlayerGuess();
      } else if (input > 100) {
          alert("The number is too high!");
          return getPlayerGuess();
      } else if (input <= 0) {
          alert("The number is too low!");
          return getPlayerGuess();
      }
  } else {
      alert("Invalid input. Please enter only numeric characters.");
      return getPlayerGuess();
  }

  return input;
};

function userInput(text, placeholder = "") {
  let input = prompt(text, placeholder);
  if (input == null) {
      let exit = confirm("Do you wish to quite the game?");
      if (exit) {
          alert("Bye Bye, COWARD!");
          return quit();
      } else
        return userInput(text, placeholder);
  } else return input;
}

function quit() {
    open("./coward.jpg", "_self");
    // throw new Error("some error");
}

const checkGuess = (playerGuess, correctNumber) =>
    playerGuess == correctNumber
        ? "C"
        : playerGuess > correctNumber
        ? "H"
        : "L";

// ELIF
// const checkGuess = (playerGuess, correctNumber) => {
//     // Switch
//     // return string L,H,C
//      correctNumber = generateRandomNumber;
//     switch (playerGuess, correctNumber) {
//         case playerGuess < correctNumber:
//             text = "Your number is low";
//             getPlayerGuess();
//         break;
//         case playerGuess > correctNumber:
//             text = "Your number is high";
//             getPlayerGuess();
//         break;
//         case playerGuess == correctNumber:
//             text = "congratulations, your guess is true";
//             endGame();
//         break;
//         default:
//             text = "You need to guess number!!"
//             getPlayerGuess();
//     };
// };

game();
