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

console.log(computerPlay());






// Create function that plays a single round of Rock Paper Scissors.
// It should take two parameters - playerSelection & computerSelection
// & return a string declaring the winner e.g.: 'You lose! Paper beats Rock'
// playerSelection should be case-insensitive 

