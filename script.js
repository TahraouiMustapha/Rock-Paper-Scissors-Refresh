const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0, computerScore = 0;

function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex] ;
}

// function to check if the human is the winner
function isWin(humanChoice, computerChoice) {
    if( humanChoice == 'rock' && computerChoice.toLowerCase() == 'scissors'
    || (humanChoice == 'scissors' && computerChoice.toLowerCase() == 'paper')
    || (humanChoice == 'paper' && computerChoice.toLowerCase() == 'rock')) {
        return true;
    } else {
        return false;
    }
}

function playRound (humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        console.log('draw');
    } else if ( isWin(humanChoice, computerChoice) ) {
        humanScore++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }
}


