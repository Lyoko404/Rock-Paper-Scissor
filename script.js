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
    let humanChoice = +prompt('Enter you choices [1, 2, 3]: ', '');

    switch(humanChoice) {
        case 1:
            return 'rock';

        case 2:
            return 'paper';
        
        case 3:
            return 'scissor';
    }
}



