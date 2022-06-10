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
playerSelection = prompt('Choose you weapon: ', 'rock');
computerSelection = computerPlay();
let winner = '';


function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        winner = 'You lose! Paper beats Rock.';
    }
    else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
        winner = 'You won, Congrats!';
    } else if (computerSelection == 'Paper' && playerSelection == 'Paper') {
        winner = 'It\'s a tie! Try again!';
    }

    else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
        winner = 'You lose! Rock beats Scissors.';
    }
    else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
        winner = 'You won, Congrats!';
    } else if (computerSelection == 'Rock' && playerSelection == 'Rock') {
        winner = 'It\'s a tie! Try again!';
    }


    else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
        winner = 'You lose! Scissors beat Paper.';
    }
    else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
        winner = 'You won, Congrats!';
    } else if (computerSelection == 'Scissors' && playerSelection == 'Scissors') {
        winner = 'It\'s a tie! Try again!';
    }


    return winner;
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