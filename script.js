const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// ELIF
const game = (points) => {
    startGame = confirm(
        "Hello, guys! I am the evil AI once more, and this time I challenge you to a game of wits: a Number Guessing Game. Good luck, and may the best coder win! Mwahahaha!"
    );

    if (startGame) {
        let gameResult = play();
        console.log(gameResult);
        // endGame();
    } else {
        open("./coward.jpg", "_self");
    }
};

// STEF
const play = () => {
    const selectedNumber = generateRandomNumber();
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
                alert(`Correct!`);
                break;
        }
    } while (attempts < 10 && !victory);

    return { attempts, victory };
};

// ANASTASIIA
const endGame = (gameResult) => {
    // Bonus Challenge: Implement a scoring system that rewards the player with
    // points based on how quickly they guess the correct number

    if (gameResult.vicotry) {
        let points = 10 - gameResult.attempts + gameResult.points;
        //   you won and made a total of ${points} points
        // wanna play again?
        game(points);
    } else {
        // you lost
        // try again?
    }
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
            alert("Bye Bye");
            return quit();
        } else userInput(text, placeholder);
    } else return input;
}

function quit() {
    open("./coward.jpg", "_self");
    throw new Error("some error");
}

// ELIF
const checkGuess = (playerGuess, correctNumber) => {
    // Switch
    // return string L,H,C
    return "L";
};

game();
