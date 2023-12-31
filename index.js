game();
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
    return 'It\'s a tie!';
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return 'You lose! Paper beats rock.';
        } else {
            return 'You win! Rock beats scissors.';
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            return 'You lose! Scissors beats paper.';
        } else {
            return 'You win! Paper beats rock.';
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return 'You lose! Rock beats scissors.';
        } else {
            return 'You win! Scissors beats paper.';
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, paper, or scissors?');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log('You won!');
    } else if (computerScore > playerScore) {
        console.log('You lost!');
    } else {
        console.log('It\'s a draw!');
    }
}
