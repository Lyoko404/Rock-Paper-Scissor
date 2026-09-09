let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    computerChoices = Math.floor(Math.random() * 3);

    switch(computerChoices) {
        case 0:
            return 'rock';
        
        case 1:
            return 'paper';
        
        case 2:
            return 'scissor';
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Enter you choices [rock, paper, scissor]: ', '');

    return humanChoice.toLowerCase();
}

console.log(getHumanChoice());