let playerScore = 0;
let computerScore = 0;
const WIN_SCORE =5;
let gameWon = false;
const buttons = document.querySelectorAll('.choices button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(button.className);
    });
});
const matchResult = document.querySelector('.results');
const restart = document.querySelector('.restart');
restart.addEventListener('click', restartGame);

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    matchResult.textContent = 'Game restarted';
    updateScore(playerScore, computerScore);
    gameWon=false;
}

function playGame(playerChoice) {
    if (!gameWon) {
        const computerChoice = getComputerChoice();
        const judgement = roundJudgement(playerChoice, computerChoice);
        switch (judgement) {
            case ('tie'):
            break;
            case ("win"):
                playerScore += 1;
            break;
            case ("lose"):
                computerScore += 1;
            break;
        }
        matchResult.textContent = `You chose ${playerChoice}, the computer chose `
            +`${computerChoice}, so you ${judgement} this round.`;
        updateScore(playerScore,computerScore);
        if (playerScore===WIN_SCORE) {
            matchResult.textContent = "You have beaten the computer! Congrats!";
            gameWon = true;
        }
        else if (computerScore===WIN_SCORE) {
            matchResult.textContent = "The computer beat you. Better luck next time!";
            gameWon = true;
        }
    }
    else {
        matchResult.textContent = "The game is over. Hit the Restart button if"
            +" you wish to continue playing";
    }
}

/*Picks an attack for the computer to use. The attack is
chosen randomly
*/
function getComputerChoice() {
    //Choice will only ever be 0, 1, or 2
    let choice = Math.floor(Math.random()*3);
    if (choice===0) {
        return 'rock';
    } else if (choice===1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

/*Determines whether the player or the computer wins a given
round. Also sets the player input to lower-case for ease of
comparison
*/
function roundJudgement(playerChoice, computerChoice) {
    //standardize input classification
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice===computerChoice) {
        return "tie";
    } else if (playerChoice==='rock'&& computerChoice==='scissors'
    ||playerChoice==='scissors'&& computerChoice==='paper'
    ||playerChoice==='paper'&& computerChoice==='rock') {
        return "win";
    } else if (playerChoice==='scissors'&& computerChoice==='rock'
    ||playerChoice==='rock'&& computerChoice==='paper'
    ||playerChoice==='paper'&& computerChoice==='scissors'){
        return "lose";
    }
}

function updateScore(playerScore,computerScore) {
    const playerScoreCard = document.querySelector('.playerScore');
    playerScoreCard.textContent = `Player Score: ${playerScore}`;
    const computerScoreCard = document.querySelector('.computerScore');
    computerScoreCard.textContent = `Computer Score: ${computerScore}`;
}