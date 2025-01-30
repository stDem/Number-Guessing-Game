let totalScore = 0;

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const checkGuess = (playerGuess, correctNumber) =>
  playerGuess == correctNumber ? "C" : playerGuess > correctNumber ? "H" : "L";

const getReward = (attempts) => 100 - attempts * 10;

const game = function () {
  let startGame = confirm(
    "Hello There!\nI am the evil AI, and this time I challenge you to a game of wits:\nGuess My Number.\n\nRules:\n-You have only 10 attempts\n-You shall only input decimal positive Numbers between 1 and 100\n\nAre you ready to engage in mortal combat with me?\nGood luck, and may the best gambler win! Mwahahaha!"
  );

  if (startGame) {
    const { attempts, victory, exit } = play();
    if (exit) {
      return quit();
    }
    const message = endGame(attempts, victory);
    alert(message);

    if (confirm("Do you want to play with fate again?")) {
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
    } else play();
  }
};

const play = function () {
  const selectedNumber = generateRandomNumber();
  console.log(`Generated number: ${selectedNumber}`);
  let attempts = 0;
  let victory = false;
  let playerGuess;

  do {
    attempts++;
    attempts == 10 ? alert("THIS IS YOUR LAST CHANCE!") : null;
    playerGuess = getPlayerGuess();
    if (playerGuess == "EXIT") {
      return { exit: true };
    }
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

  return { attempts, victory };
};

const endGame = function (attempts, victory) {
  let reward = victory ? getReward(attempts) : -20;
  totalScore += reward;
  return victory
    ? `Contratulations, You won!\n\nAtempts: ${attempts}\nScore: ${reward}\n\nTotal Score:${totalScore}`
    : `You lost!\n\nMinus 20 points for you!\n\nTotal Score:${totalScore} `;
};

const getPlayerGuess = function () {
  let stringInput = userInput("Enter a number between 1 and 100", "");
  if (stringInput == "EXIT") {
    return "EXIT";
  }
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

const userInput = function (text, placeholder = "") {
  let input = prompt(text, placeholder);
  if (input == null) {
    let exit = confirm("Do you wish to quite the game?");
    if (exit) {
      alert("Bye Bye, COWARD!");
      return "EXIT";
    } else return userInput(text, placeholder);
  } else return input;
};

const quit = function () {
  console.log("quit");
  return open("./coward.jpg", "_self");
};

game();
