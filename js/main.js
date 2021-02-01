let myArray = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;

function randomNum() {
    let randomInteger = Math.floor(Math.random() * 3);
    return randomInteger;
}

function computerPlay() {
    return myArray[randomNum()];
}
// console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper or Scissors?");
    computerSelection = computerPlay();

    if (playerSelection === "Rock" && computerSelection === "Rock") {
        return console.log("It's a tie!");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return console.log("You won! Rock beats Scissors!")
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return console.log("You lose! Paper beats Rock!")
    }
    if (playerSelection === "Paper" && computerSelection === "Paper") {
        return console.log("It's a tie!");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return console.log("You won! Paper beats Rock!")
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return console.log("You lose! Scissors beats Paper!")
    }
    if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return console.log("It's a tie!");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return console.log("You won! Scissors beats Paper!")
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return console.log("You lose! Rock beats Scissors!")
    }
}

function game() {
    let score = 0
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(playRound);

    }
}

game()
