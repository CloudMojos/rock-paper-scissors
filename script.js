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

function playRound(playerSelection, ComputerSelection) {
    // refactor your code with: winning conditions, losing conditions and tie conditions.
    playerSelection.toLowerCase();
    if (playerSelection == "rock" && ComputerSelection == "scissors"
        || playerSelection == "paper" && ComputerSelection == "rock"
        || playerSelection == "scissors" && ComputerSelection == "paper") {
        return "You win!";
    }
    else if (playerSelection == "rock" && ComputerSelection == "paper"
        || playerSelection == "paper" && ComputerSelection == "scissors"
        || playerSelection == "scissors" && ComputerSelection == "rock") {
        return "You lose.";
    }
    else return "Draw";
}

//for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("rock, paper, or scissors?");
    console.log(playRound(playerSelection, computerPlay()));
//}

// UI