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

const humanSelection = getComputerChoice();
const computerSelection = getHumanChoice();

function playRound(humanChoice, computerChoice) {

}

playRound(humanSelection, computerSelection);