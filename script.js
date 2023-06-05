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

/*Play rounds of RPS until either the computer or player
gets WIN_SCORE many wins.
*/
function playGame(WIN_SCORE=1) {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore <WIN_SCORE && computerScore<WIN_SCORE) {
        let playerChoice = prompt("Choose rock, paper, or scissors");
        switch (roundJudgement(playerChoice, getComputerChoice())) {
            case ('tie'):
            break;
            case ("win"):
                playerScore += 1;
            break;
            case ("loss"):
                computerScore += 1;
            break;
            default:
                alert("Your input is incomprehensible");
        }
        updateScore(playerScore,computerScore);
    }
    if (playerScore===WIN_SCORE) {
        alert("You won!");
    } 
    else {
        alert("You lost :(");
    }
}



