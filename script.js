// Create function computerPlay which returns 'Rock', 'Paper', or 'Scissors'
// Use console.log() to test if output is right
function computerPlay() {
    let result = Math.floor(Math.random() * 3);

    if (result == 0) {
        result = 'Rock';
    }
    if (result > 0 && result < 2) {
        result = 'Paper'
    } else {
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

let playerSelection = prompt('Choose your weapon: ', 'Rock');
let computerSelection;
let winnerText = '';


function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();

    if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        playerSelection = prompt('Choose your weapon: ', 'Rock');
        winnerText = 'You lose!';
    }
    if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
        playerSelection = prompt('Choose your weapon: ', 'Rock');
        winnerText = 'You won, Congrats!';
    } if (computerSelection == playerSelection) {
        playerSelection = prompt('Choose your weapon: ', 'Rock');
        winnerText = 'It\'s a tie!';
    }

    if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
        playerSelection = prompt('Choose your weapon: ', 'Rock');
        winnerText = 'You lose!';
    }
    if (computerSelection == 'Rock' && playerSelection == 'Paper') {
        playerSelection = prompt('Choose your weapon: ', 'Rock');
        winnerText = 'You won, Congrats!';
    } if (computerSelection == playerSelection) {
        playerSelection = prompt('Choose your weapon: ', 'Rock');
        winnerText = 'It\'s a tie!';
    }


    if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
        playerSelection = prompt('Choose your weapon: ', 'Rock');
        winnerText = 'You lose!';
    }
    if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
        playerSelection = prompt('Choose your weapon: ', 'Rock');
        winnerText = 'You won, Congrats!';
    } if (computerSelection == playerSelection) {
        playerSelection = prompt('Choose your weapon: ', 'Rock');
        winnerText = 'It\'s a tie!';
    }


    return winnerText;
}


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
let score = '';


function game(score) {
    for (let i = 0; i < 5; i++) {
        let oneRound = playRound(playerSelection, computerSelection);

        if (oneRound == 'You won, Congrats!') {
            playerScore++;
            console.log(playerScore + 'Player wins');
            console.log(computerScore);
        } if (oneRound == 'You lose!') {
            computerScore++;
            console.log(computerScore + 'Computer wins');
            console.log(playerScore);
        } if (oneRound == 'It\'s a tie!') {
            console.log('It\'s a tie!');
        }

    }

    if (playerScore > computerScore) {
        score = 'You are the winner!'
    } else {
        score = 'Computer has won!'
    }
    return score;
}
console.log(game(score));