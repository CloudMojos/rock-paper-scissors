// GAMEPLAY
function computerPlay() {
    let n = Math.floor(Math.random() * 3);
    if (n == 0)
        return "rock";
    else if (n == 1)
        return "paper";
    else
        return "scissors";
}


let playerScore = 0, computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "scissors"
        || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper") {
        return playerScore++;
    }
    else if (playerSelection == "rock" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "rock") {
        return computerScore++;
    }
    else return;
}

const playerImage = document.querySelector('.player-image');
const computerImage = document.querySelector('.computer-image');
const btn = document.querySelectorAll('button');
const playerScoreHandler = document.querySelector('#player-score--text');
const computerScoreHandler = document.querySelector('#computer-score--text');

btn.forEach((btn) => {
    btn.addEventListener('mousedown', () => {
        // Determine which button player picked

        // Change player's hand image
        playerImage.setAttribute('src', `images/${btn.id}.png`);
        btn.classList.add('clicked');
        // Determine which button computer picked
        let computerSelection = computerPlay();
        computerImage.setAttribute('src', `images/${computerSelection}.png`);
        // Change computer's hand image
        /*alert("You picked " + btn.id);
        alert("Computer picked " + computerSelection);*/
        playRound(btn.id, computerSelection);
        console.log("player: " + playerScore);
        console.log("computer: " + computerScore);
        scoreCounter();
    })
    btn.addEventListener('mouseup', () => {
        btn.classList.remove('clicked');
        restartGame();
    })
})

function scoreCounter() {
    playerScoreHandler.innerHTML = playerScore;
    computerScoreHandler.innerHTML = computerScore;
}

function restartGame() {
    if (playerScore >= 5 || computerScore >= 5)
    {
        if (playerScore >= 5)
            alert("Congratulations! You win!");
        else
            alert("Try again. You lose.");
        playerScore = 0, computerScore = 0;
        playerImage.setAttribute('src', 'images/rock.png');
        computerImage.setAttribute('src', 'images/rock.png');
        scoreCounter();
    }
}

