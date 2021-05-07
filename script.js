let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  const targetRandomNumber = Math.floor(Math.random() * 10);
  return targetRandomNumber;
};

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
  console.log(userGuess, computerGuess, secretTarget);
  const userDifference = userGuess - secretTarget;
  const computerDifference = computerGuess - secretTarget;
  console.log(
    `Userdifference :${userDifference}, CPUdifference: ${computerDifference}`
  );

  if (
    Math.abs(userDifference) < Math.abs(computerDifference) ||
    Math.abs(userDifference) === Math.abs(computerDifference)
  ) {
    return "human";
  } else if (Math.abs(userDifference) < Math.abs(computerDifference)) {
    return "computer";
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};

// console.log(updateScore(compareGuesses(3, 4)));
// console.log(updateScore(compareGuesses(6, 7)));
// console.log(updateScore(compareGuesses(2, 8)));
// console.log(updateScore(compareGuesses(3, 9)));
