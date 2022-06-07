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
// Player should input value = prompt
// Compare two results
// If result is: Player has Rock & Computer has Paper = alert()Computer wins
// 
playerSelection = 'rock';
computerSelection = computerPlay();
let winner = ''


function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'Paper') {
        winner = 'You lose! Paper beats Rock.';
    } else if (computerSelection == 'Rock') {
        winner = 'It\'s a tie! Try again!';
    }
    else {
        winner = 'You won, Congrats!';
    }

    return winner;
}

console.log(playRound(playerSelection, computerSelection));
