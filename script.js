const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0, computerScore = 0;

function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex] ;
}

function getHumanChoice() {
    let humanChoice = '';
    while( humanChoice.toLowerCase()!== choices[0] &&
           humanChoice.toLowerCase()!== choices[1] &&   
           humanChoice.toLowerCase()!== choices[2] ) {
            humanChoice = prompt("enter your choice\n1.rock\n2.paper\n3.scissors", "rock");
    }
    return humanChoice.toLowerCase();
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

function playGame() {
    const playRound = (humanChoice, computerChoice) => {
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
 
    for(let i=0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log('---------------------------------------------------\n Final Results')
    if(humanScore == computerScore) {
        console.log('draw in the Game!');
    } else if( humanScore > computerScore) {
        console.log('You Win the Game!');
    } else {
        console.log('You Lose the Game!');
    }
}

playGame(); 

