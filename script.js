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

function playRound(playerSelection, computerSelection) {
    // refactor your code with: winning conditions, losing conditions and tie conditions.
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "scissors"
        || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper") {
        return "You win!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose.";
    }
    else return "Draw";
}



//for (let i = 0; i < 5; i++) {
    //let playerSelection;
    //console.log(playRound(playerSelection, computerPlay()));
//}

// UI
const btn = document.querySelectorAll('button');
btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let computerSelection = computerPlay();
        /*alert("You picked " + btn.id);
        alert("Computer picked " + computerSelection);
        alert(playRound(btn.id, computerSelection));*/
    })
})