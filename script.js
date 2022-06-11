// Create function computerPlay which returns 'Rock', 'Paper', or 'Scissors'
// Use console.log() to test if output is right
function computerPlay() {
    let result = Math.floor(Math.random() * 100) + 1;
    if (result <= 33) {
        result = 'Rock';
    }
    else if (result > 34 && result <= 66) {
        result = 'Paper'
    }
    else {
        result = 'Scissors';
    }
    return result;
}

// console.log(computerPlay());


// Create function that plays a single round of Rock Paper Scissors
// It should take two parameters - playerSelection & computerSelection
// & return a string declaring the winner e.g.: 'You lose! Paper beats Rock'
// playerSelection should be case-insensitive 

// Run two parameters and compare with each other
// Compare two results
// If result is: Player has Rock & Computer has Paper = console.log()Computer wins
// 
let playerSelection = prompt('Choose you weapon: ', 'Rock');
let computerSelection = computerPlay();
let winnerText = '';


function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        winnerText = 'You lose!';
        computerScore++;
    }
    else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
        winnerText = 'You won, Congrats!';
        playerScore++;
    } else if (computerSelection == 'Paper' && playerSelection == 'Paper') {
        winnerText = 'It\'s a tie!';
    }

    else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
        winnerText = 'You lose!';
        computerScore++;
    }
    else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
        winnerText = 'You won, Congrats!';
        playerScore++;
    } else if (computerSelection == 'Rock' && playerSelection == 'Rock') {
        winnerText = 'It\'s a tie!';
    }


    else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
        winnerText = 'You lose!';
        computerScore++;
    }
    else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
        winnerText = 'You won, Congrats!';
        playerScore++;
    } else if (computerSelection == 'Scissors' && playerSelection == 'Scissors') {
        winnerText = 'It\'s a tie!';
    }
}

console.log(playRound(playerSelection, computerSelection));


// Create function game() put playRound inside & play 5 times
// Keep score and report a winner at the end
// Use for loop 
//for (let i = 0; i < 5; i++) {
// your code here!}
// Use console.log() to display results and winner at the end
// Use prompt() to get input from user
// Feel free to re-work functions and maybe create helper functions

let playerScore = 0;
let computerScore = 0;

function game() {

    for (i = 0; i < 5; i++) {
        if (winnerText == 'You won, Congrats!') {
            playerScore++;
            i++;
        } else if (winnerText = 'You lose!') {
            computerScore++;
            i++;
        } else if (winnerText = 'It\'s a tie!';) {
            i++;
        }
    }
}