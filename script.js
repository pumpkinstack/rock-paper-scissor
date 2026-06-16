const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const playerChoice = document.getElementById("player-choice-image");
const computerImage = document.getElementById("computer-choice-image");
const message = document.getElementById("result-message");
const score = document.querySelector(".score-value");

let humanScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => {
  playerChoice.src = "images/icon-rock.svg";
  playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playerChoice.src = "images/icon-paper.svg";
  playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
  playerChoice.src = "images/icon-scissors.svg";
  playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  if (num === 0) {
    computerImage.src = "images/icon-rock.svg";
    return "rock";
  } else if (num === 1) {
    computerImage.src = "images/icon-paper.svg";
    return "paper";
  } else {
    computerImage.src = "images/icon-scissors.svg";
    return "scissors";
  }
}

function gameOfFive() {
  if (humanScore === 5) {
    message.textContent = "You Won The Game!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  } else if (computerScore === 5) {
    message.textContent = "You Lost The Game!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win! Scissors beats Paper");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You Lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You Lose! Scissors beats Paper");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You Lose! Rock beats Scissors");
    computerScore++;
  } else {
    console.log("Draw");
  }

  gameOfFive();

  score.textContent = humanScore + " - " + computerScore;
}

document.querySelector(".play-again").addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  score.textContent = "0 - 0";
  message.textContent = "";
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
});