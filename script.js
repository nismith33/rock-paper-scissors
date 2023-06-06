let playerScore = 0;
let computerScore = 0;
const WIN_SCORE =3;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.className);
        playGame(button.className);
    });
});

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (roundJudgement(playerChoice, computerChoice)) {
        case ('tie'):
            alert('tie');
        break;
        case ("win"):
            alert('win');
            playerScore += 1;
        break;
        case ("loss"):
            alert('loss');
            computerScore += 1;
        break;
    }
    updateScore(playerScore,computerScore);
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
        return "loss";
    }
}

function updateScore(playerScore,computerScore) {
    const playerScoreCard = document.querySelector('.playerScore');
    playerScoreCard.textContent = `Player Score: ${playerScore}`;
    const computerScoreCard = document.querySelector('.computerScore');
    computerScoreCard.textContent = `Computer Score: ${computerScore}`;
}