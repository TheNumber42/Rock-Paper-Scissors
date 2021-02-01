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
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection === "rock" && computerSelection === "Rock") {
        return console.log("It's a tie!");
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        playerScore++;
        return console.log("You won! Rock beats Scissors!")
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore++;
        return console.log("You lose! Paper beats Rock!")
    }
    if (playerSelection === "paper" && computerSelection === "Paper") {
        return console.log("It's a tie!");
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        playerScore++;
        return console.log("You won! Paper beats Rock!")
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore++;
        return console.log("You lose! Scissors beats Paper!")
    }
    if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return console.log("It's a tie!");
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore++;
        return console.log("You won! Scissors beats Paper!")
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore++;
        return console.log("You lose! Rock beats Scissors!")
    }
}

function game() {
    let score = 0
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(playRound);
        console.log(`You: ${playerScore} - Computer: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        alert(`Congratulations! You Won! ${playerScore} - ${computerScore}`)
    } else if (playerScore == computerScore) {
        alert(`It's a Tie! ${playerScore} - ${computerScore}`)
    } else {
        alert(`You Lost! Computer Won ${playerScore} - ${computerScore}`)
    }
}

game()
