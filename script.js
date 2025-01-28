const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

game();

// ELIF
const game = (points) => {
    startGame = confirm(
        "Hello, guys! I am the evil AI once more, and this time I challenge you to a game of wits: a Number Guessing Game. Good luck, and may the best coder win! Mwahahaha!"
    );

    if (startGame) {
        let gameResult = play();
        endGame();
    } else {
        open("./images/coward.jpg", "_self");
    }
};

// STEF
const play = () => {
    randomNumber = generateRandomNumber();
    countAttempts = 0;

    // while - Use a loop to repeatedly prompt the player for guesses until they
    // guess correctly or use up a maximum of 10 attempts

    // return an object {attempts: number , victory:boolean}
    print("won or lost");
    print(`Nuber of attempts: ${countAttempts}`);
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

// Helper Functions
// STEF
const getPlayerGuess = () => {
    let playerGuess = prompt("Enter a number between 1 and 100", "");
    // check that player entered a valid number
};

// ELIF
const checkGuess = (playerGuess, correctNumber) => {
    // Switch
    // return string L,H,C
    return "too low, too high, or correct";
};
