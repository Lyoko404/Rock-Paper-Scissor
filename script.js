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

getPlayerSelection();

function getPlayerSelection() {
    const playerSelection = document.querySelector('#selection');

    playerSelection.addEventListener('click', (event) => {
        const clickedElement = event.target;
        const computerSelection = getComputerChoice;

        if (clickedElement.tagName !== 'BUTTON') {
            return;
        }

        if (clickedElement.classList.contains('rock')) {
            playRound('rock', computerSelection());
        }

        if (clickedElement.classList.contains('paper')) {
            playRound('paper', computerSelection());
        }

        if (clickedElement.classList.contains('scissor')) {
            playRound('scissor', computerSelection());
        }
    })
}


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


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    playRound(humanSelection(), computerSelection());
    
    if (humanScore > computerScore) {
        console.log(`========== You WIN! ========== `);
        console.log(`You: ${humanScore} : Com: ${computerScore}`);
    } else {
        console.log(`========== You Lose! ========== `);
        console.log(`You: ${humanScore} : Com: ${computerScore}`);
    }
}

