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
let point = '';


function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        point = 'You lose! Paper beats Rock.';
    }
    else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
        point = 'You won, Congrats!';
    } else if (computerSelection == 'Paper' && playerSelection == 'Paper') {
        point = 'It\'s a tie! Try again!';
    }

    else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
        point = 'You lose! Rock beats Scissors.';
    }
    else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
        point = 'You won, Congrats!';
    } else if (computerSelection == 'Rock' && playerSelection == 'Rock') {
        point = 'It\'s a tie! Try again!';
    }


    else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
        point = 'You lose! Scissors beat Paper.';
    }
    else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
        point = 'You won, Congrats!';
    } else if (computerSelection == 'Scissors' && playerSelection == 'Scissors') {
        point = 'It\'s a tie! Try again!';
    }


    return point;
}

console.log(playRound(playerSelection, computerSelection));


// Create function game() & put playRound inside & play 5 times
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

    }
}