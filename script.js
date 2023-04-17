function getComputerChoice() {
    rand = Math.floor(Math.random() * 3) + 1;   // generates random number from 1 to 3
    if (rand === 1)
        return "rock";
    else if (rand === 2)
        return "paper";
    else
        return "scissors";
}

function playRound(playerSelection, computerSelection) {
    playerChoice = playerSelection.toLowerCase();

    // PLAYER WINS
    if (computerSelection === "rock" && playerChoice === "paper")
        return "You win! Paper beats rock.";
    else if (computerSelection === "paper" && playerChoice === "scissors")
        return "You win! Scissors beat paper.";
    else if (computerSelection === "scissors" && playerChoice === "rock")
        return "You win! Rock beats scissors.";
    
    // COMPUTER WINS
    else if (computerSelection === "rock" && playerChoice === "scissors")
        return "You lose! Rock beats scissors.";
    else if (computerSelection === "paper" && playerChoice === "rock")
        return "You lose! Paper beats rock.";
    else if (computerSelection === "scissors" && playerChoice === "paper")
        return "You lose! Scissors beat paper.";
    
    // DRAW
    else 
        return "It's a draw!";
}


const computerSelection = getComputerChoice();
const playerSelection = prompt("Enter your choice (rock, paper, or scissors): ");


