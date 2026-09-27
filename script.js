function getComputerSelection() {
    let computerSelection = Math.floor(Math.random() * 3);

    switch(computerSelection) {
        case 0:
            return 'rock';
        
        case 1:
            return 'paper';
        
        case 2:
            return 'scissors';
    }
}


function initGame() {

    let playerScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    const playerScoreDiv = document.querySelector('.player-score');
    const computerScoreDiv = document.querySelector('.computer-score');
    const roundDetail = document.querySelector('.round-detail');
    const winnerBoard = document.querySelector('.winner-board');

    function playRound(humanSelection) {

        if (roundsPlayed >= 5) {
            return;
        }

        const computerSelection = getComputerSelection();

        
        const detailPara = document.createElement('p');
        const winnerPara = document.createElement('p');

        
        if(humanSelection !== computerSelection) {

            if(humanSelection === 'rock') {
                if(computerSelection === 'paper') {
                    computerScore += 1;
                    detailPara.textContent = `You lose! ${humanSelection} lose to ${computerSelection}`;
                    roundDetail.append(detailPara);
                }

                if(computerSelection === 'scissors') {
                    playerScore += 1;
                    detailPara.textContent = `You win! ${humanSelection} beats ${computerSelection}`;
                    roundDetail.append(detailPara);
                }
            }

            if(humanSelection === 'paper') {
                if(computerSelection === 'scissors') {
                    computerScore += 1;
                    detailPara.textContent = `You lose! ${humanSelection} lose to ${computerSelection}`;
                    roundDetail.append(detailPara);
                }

                if(computerSelection === 'rock') {
                    playerScore += 1;
                    detailPara.textContent = `You win! ${humanSelection} beats ${computerSelection}`;
                    roundDetail.append(detailPara);
                }
            }

            if (humanSelection === 'scissors') {
                if(computerSelection === 'rock') {
                    computerScore += 1;
                    detailPara.textContent = `You lose! ${humanSelection} lose to ${computerSelection}`;
                    roundDetail.append(detailPara);
                }

                if(computerSelection === 'paper') {
                    playerScore += 1;
                    detailPara.textContent = `You win! ${humanSelection} beats ${computerSelection}`;
                    roundDetail.append(detailPara);
                }
            }
        }

        if (humanSelection === computerSelection) {
            detailPara.textContent = `Draw! ${humanSelection} parry ${computerSelection}`;
            roundDetail.append(detailPara);
        }

        playerScoreDiv.textContent = `YOU: ${playerScore}`;
        computerScoreDiv.textContent = `COM: ${computerScore}`;


        roundsPlayed++;

        if (roundsPlayed === 5) {

            if (playerScore > computerScore) {
                winnerPara.textContent = `WINNER =>>>>>> YOU with score ${playerScore} VS ${computerScore}`;
                winnerBoard.append(winnerPara);
            }

            if (playerScore < computerScore) {
                winnerPara.textContent = `LOSE :( =>>>>>>> YOU with score ${playerScore} VS ${computerScore}`;
                winnerBoard.append(winnerPara);
            }

            if (playerScore === computerScore) {
                winnerPara.textContent = `DRAW =>>>>>>> YOU with score ${playerScore} VS ${computerScore}`;
                winnerBoard.append(winnerPara);
            }
        }
    }

    const playerSelection = document.querySelector('#player-selection');

    playerSelection.addEventListener('click', (event) => {
        const target = event.target;

        if (target.tagName === "BUTTON") {
            playRound(target.className);
        }
    })
}

initGame();
