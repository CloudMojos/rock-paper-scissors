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
const computerImage = document.querySelector('.enemy-image');
const btn = document.querySelectorAll('button');


btn.forEach((btn) => {
    btn.addEventListener('mousedown', () => {
        // Determine which button player picked

        // Change player's hand image
        playerImage.setAttribute('src', `images/${btn.id}.png`);
        btn.classList.add('clicked');
        // Determine which button computer picked
        let computerSelection = computerPlay();
        computerImage.setAttribute('src', `images/${computerSelection}.png`);
        // Change enemy's hand image
        /*alert("You picked " + btn.id);
        alert("Computer picked " + computerSelection);
        alert(playRound(btn.id, computerSelection));*/
    })
    btn.addEventListener('mouseup', () => {
        btn.classList.remove('clicked');
    })
})

function scoreCounter() {
    
}

