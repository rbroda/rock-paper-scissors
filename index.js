let startButton = document.getElementById("start-button");
let restartButton = document.getElementById("restart-button");
let gameScreen = document.getElementById("game-container");
let gameImageContainer = document.getElementById("game-image-container");
let scoreBoardWins = document.getElementById("wins-inner-text");
let scoreBoardLosses = document.getElementById("losses-inner-text");
let scoreBoardDraws = document.getElementById("draws-inner-text");
let scoreBoardMessage = document.getElementById("message-board");

const gameOptions = ["rock", "paper", "scissors"];

let gameInfo = {
  currentGame: "",
  wins: 0,
  losses: 0,
  draws: 0,
  computer: "",
  human: "",
};

const checkScore = () => {
  if (gameInfo.wins > 4 || gameInfo.losses > 4) {
    console.log("triggered!");
    gameImageContainer.classList.toggle("game-image-container-toggle");
    restartButton.classList.toggle("button-hide");
    if (gameInfo.wins > 4) {
      scoreBoardMessage.innerText = `Congrats! You beat the computer by a score of ${gameInfo.wins} - ${gameInfo.losses}!`;
    } else {
      scoreBoardMessage.innerText = `Rats! You were bested by the computer by a score of ${gameInfo.wins} - ${gameInfo.losses}!`;
    }
  }
};

const computerSelection = () => {
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
};

const startGame = () => {
  startButton.classList.toggle("button-hide");
  gameScreen.classList.toggle("game-container-toggle");
};

const checkHumanSelection = () => {
  if (gameInfo.human == "rock") {
    if (gameInfo.computer == "paper") {
      gameInfo.currentGame = "lose";
    } else if (gameInfo.computer == "scissors") {
      gameInfo.currentGame = "win";
    } else {
      gameInfo.currentGame = "draw";
    }
  } else if (gameInfo.human == "paper") {
    if (gameInfo.computer == "scissors") {
      gameInfo.currentGame = "lose";
    } else if (gameInfo.computer == "rock") {
      gameInfo.currentGame = "win";
    } else {
      gameInfo.currentGame = "draw";
    }
  } else {
    if (gameInfo.computer == "rock") {
      gameInfo.currentGame = "lose";
    } else if (gameInfo.computer == "paper") {
      gameInfo.currentGame = "win";
    } else {
      gameInfo.currentGame = "draw";
    }
  }
};

const checkCurrentGame = () => {
  if (gameInfo.currentGame == "win") {
    let scoreBoardInnerText = scoreBoardWins.innerHTML;
    let newScore = Number(scoreBoardInnerText) + 1;
    scoreBoardWins.innerText = newScore;
    scoreBoardMessage.innerText = `Gottem! You Won! You picked ${gameInfo.human}, the computer picked ${gameInfo.computer}!`;
    gameInfo.wins++;
    checkScore();
  } else if (gameInfo.currentGame == "lose") {
    let scoreBoardInnerText = scoreBoardLosses.innerHTML;
    let newScore = Number(scoreBoardInnerText) + 1;
    scoreBoardLosses.innerText = newScore;
    scoreBoardMessage.innerText = `Awe, I'm sorry. You lost. You picked ${gameInfo.human}, the computer picked ${gameInfo.computer}!`;
    gameInfo.losses++;
    checkScore();
  } else {
    let scoreBoardInnerText = scoreBoardDraws.innerHTML;
    let newScore = Number(scoreBoardInnerText) + 1;
    scoreBoardDraws.innerText = newScore;
    scoreBoardMessage.innerText = `It's a tie! You and the computer both picked ${gameInfo.human}!`;
    gameInfo.draws++;
    checkScore();
  }
};

const playGame = (e) => {
  let selectedElement = e.target;
  let selectedElementImage = selectedElement.classList.value;
  let computerSelected = computerSelection();

  gameInfo.computer = computerSelected;
  gameInfo.human = selectedElementImage;

  checkHumanSelection();
  checkCurrentGame();
};
