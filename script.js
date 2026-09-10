const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;

playGame();

function getComputerChoice() {
    let computerChoices = Math.floor(Math.random() * 3);

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



function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanSelection, computerSelection) {

        if(humanSelection !== computerSelection) {

            if(humanSelection === 'rock') {
                if(computerSelection === 'paper') {
                    console.log(`You lose! ${humanSelection} lose to ${computerSelection}`);
                    computerScore += 1;
                }

                if(computerSelection === 'scissor') {
                    console.log(`You win! ${humanSelection} beats ${computerSelection}`);
                    humanScore += 1;
                }
            }

            if(humanSelection === 'paper') {
                if(computerSelection === 'scissor') {
                    console.log(`You lose! ${humanSelection} lose to ${computerSelection}`);
                    computerScore += 1;
                }

                if(computerSelection === 'rock') {
                    console.log(`You win! ${humanSelection} beats ${computerSelection}`);
                    humanScore += 1;
                }
            }

            if (humanSelection === 'scissor') {
                if(computerSelection === 'rock') {
                    console.log(`You lose! ${humanSelection} lose to ${computerSelection}`);
                    computerSelection += 1;
                }

                if(computerSelection === 'paper') {
                    console.log(`You win! ${humanSelection} beats ${computerSelection}`);
                    humanScore += 1;
                }
            }
        }

        if (humanSelection === computerSelection) {
            console.log(`Draw! ${humanSelection} parry ${computerSelection}`);
        }
    }

    round = 0;

    while(round < 5) {
        playRound(humanSelection(), computerSelection());
        round++;
    }

    if (humanScore > computerScore) {
        console.log(`========== You WIN! ========== `);
        console.log(`You: ${humanScore} : Com: ${computerScore}`);
    } else {
        console.log(`========== You Lose! ========== `);
        console.log(`You: ${humanScore} : Com: ${computerScore}`);
    }
}

