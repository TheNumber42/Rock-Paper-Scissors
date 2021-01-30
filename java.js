// Plan
// 1 UI- none, it will be played in the browser. using alerts and prompts. the game will play 5 rounds, declaring the winner of the best of 5.
// 2 user will input one of 3 options, rock paper or scissors, case insensitive.
// 3 the output will be a string declaring the winner of the round.
// 4 given the inputs the steps necessary to get the desired output are -

//1 make the computer output rock, paper or scissors string randomly
function random() {
    return Math.floor(Math.random() * 3);
}

function computerPlay() {
    const selection = ['Rock', 'Paper', 'Scissors'];
    return selection[random()];
}



// Pseudo Code
//2 create a function that plays a single round of rock paper and scissors.
function singleRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt('Rock, Paper or Scissors');



    if (playerSelection == 'rock') {
        if (computerSelection == 'Scissors') {
            return alert('You won, computer selected Scissors');
        } else if (computerSelection == 'Paper') {
            return alert('You lost, computer selected Paper');
        } else if (playerSelection == computerSelection) {
            return alert('truce, you both selected Rock');
        }
    }

    if (playerSelection == 'paper') {
        if (computerSelection == 'Rock') {
            return alert('You won, computer selected Rock');
        } else if (computerSelection == 'Scissors') {
            return alert('You lost, computer selected Scissors');
        } else if (playerSelection == computerSelection) {
            return alert('Truce, you both selected Paper');
        }
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'Paper') {
            return alert('You won, computer selected Paper');
        } else if (computerSelection == 'Rock') {
            return alert('You lost, computer selected Rock');
        } else if (playerSelection == computerSelection) {
            return alert('Truce, you both selected Scissors');
        }
    } else {
        return alert('You didn\'t select anything, try again')
    }
}

console.log(singleRound('rock', computerPlay));


//3 compare the user selection with the copmuter selection and then output a string based on the result
//3.1 if player selects rock and computer slects scissors player wins, if 
//3.2
//3.3

//4 if the user wins alert a message saying he won, if computer wins output a message saying computer won

//5 make a game of five rounds declare the winner of the best of 5 at the end of the game


