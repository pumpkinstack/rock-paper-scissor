const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const playerChoice = document.getElementById("player-choice-image");
const computerImage = document.getElementById("computer-choice-image");
const message = document.getElementById("result-message");
const score = document.querySelector(".score-value");
const choice = document.querySelector(".game-results");
const result = document.querySelector(".result");

let humanScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => {
  playerChoice.src = "images/icon-rock.svg";
  playRound("rock", getComputerChoice());
  choice.removeAttribute("hidden");
  result.removeAttribute("hidden");
});

paper.addEventListener("click", () => {
  playerChoice.src = "images/icon-paper.svg";
  playRound("paper", getComputerChoice());
  choice.removeAttribute("hidden");
  result.removeAttribute("hidden");
});

scissors.addEventListener("click", () => {
  playerChoice.src = "images/icon-scissors.svg";
  playRound("scissors", getComputerChoice());
  choice.removeAttribute("hidden");
  result.removeAttribute("hidden");
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
    message.textContent = "You Win! Rock beats Scissors";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    message.textContent = "You Win! Paper beats Rock";
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    message.textContent = "You Win! Scissors beats Paper";
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    message.textContent = "You Lose! Paper beats Rock";
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    message.textContent = "You Lose! Scissors beats Paper";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    message.textContent = "You Lose! Rock beats Scissors";
    computerScore++;
  } else {
    message.textContent = "Draw";
  }

  gameOfFive();

  score.textContent = humanScore + " - " + computerScore;
}

document.querySelector(".play-again").addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  score.textContent = "0 - 0";
  message.textContent = "";
  playerChoice.src = "";
  computerImage.src = "";
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  choice.setAttribute("hidden", "");
  result.setAttribute("hidden", "");
});
