const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0, computerScore = 0;
updateScores();

function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex] ;
}

function displayResult (resultOfRound) {
    const resultDiv = document.querySelector('.result');
    resultDiv.textContent = resultOfRound;
}

function updateScores() {
    const humanScoreDiv = document.querySelector('.human.score');
    const computerScoreDiv = document.querySelector('.computer.score');

    humanScoreDiv.textContent = humanScore;
    computerScoreDiv.textContent = computerScore;
}

function resetScores() {
    humanScore = 0;
    computerScore = 0;
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
        displayResult('draw');
    } else if ( isWin(humanChoice, computerChoice) ) {
        humanScore++;
        updateScores();
        if(humanScore == 5) {
            displayResult('You Win The Game !!!!!');
            resetScores();
        } else {
            displayResult(`You Win! ${humanChoice} beats ${computerChoice}`);
        }
    } else {
        computerScore++;
        updateScores();
        if(computerScore == 5) {
            displayResult('You Lose The Game <->');
            resetScores();
        } else {
            displayResult(`You Lose! ${computerChoice} beats ${humanChoice}`);
        }    
    }
}


