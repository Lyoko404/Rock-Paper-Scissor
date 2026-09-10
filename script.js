let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice;
const computerChoice = getComputerChoice;

playRound(humanChoice, computerChoice);

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

function playRound(humanChoice, computerChoice) {
    if(humanChoice !== computerChoice) {

        if(humanChoice === 'rock') {
            if(computerChoice === 'paper') {
                console.log(`You lose! ${humanChoice} lose to ${computerChoice}`);
                computerScore += 1;
            }

            if(computerChoice === 'scissor') {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore += 1;
            }
        }

        if(humanChoice === 'paper') {
            if(computerChoice === 'scissor') {
                console.log(`You lose! ${humanChoice} lose to ${computerChoice}`);
                computerScore += 1;
            }

            if(computerChoice === 'rock') {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore += 1;
            }
        }

        if (humanChoice === 'scissor') {
            if(computerChoice === 'rock') {
                console.log(`You lose! ${humanChoice} lose to ${computerChoice}`);
                computerChoice += 1;
            }

            if(computerChoice === 'paper') {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore += 1;
            }
        }
    }

    if (humanChoice === computerChoice) {
        console.log(`Draw! ${humanChoice} parry ${computerChoice}`);
    }
}

