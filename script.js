function getComputerChoice() {
    rand = Math.floor(Math.random() * 3) + 1;   // generates random number from 1 to 3
    if (rand === 1)
        return "rock";
    else if (rand === 2)
        return "paper";
    else
        return "scissors";
}

function playRound(computerSelection, playerChoice) {
    // PLAYER WINS
    if (computerSelection === "rock" && playerChoice === "paper") {
        ++userWin;
        return "You win! Paper beats rock.";
    }
    else if (computerSelection === "paper" && playerChoice === "scissors") {
        ++userWin;
        return "You win! Scissors beat paper.";
    }
    else if (computerSelection === "scissors" && playerChoice === "rock") {
        ++userWin;
        return "You win! Rock beats scissors.";
    }
        
    // COMPUTER WINS
    else if (computerSelection === "rock" && playerChoice === "scissors") {
        ++computerWin;
        return "You lose! Rock beats scissors.";
    }
    else if (computerSelection === "paper" && playerChoice === "rock") {
        ++computerWin;
        return "You lose! Paper beats rock.";
    }
    else if (computerSelection === "scissors" && playerChoice === "paper") {
        ++computerWin;
        return "You lose! Scissors beat paper.";
    }
    
    // DRAW
    else 
        return "It's a draw!";
}

function game() {
    let gameRound = 0;

    while (gameRound < 5) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Enter your choice (rock, paper, or scissors): ");
        const playerChoice = playerSelection.toLowerCase();
        
        console.log(playRound(computerSelection, playerChoice));
        ++gameRound;
    }
    
    if (computerWin === userWin) 
        console.log("It's a tie.");
    else if (computerWin < userWin) 
        console.log("You won the game!");
    else 
        console.log("You lost the game :(");
}

let userWin = 0;
let computerWin = 0;
let playAgain = true;

while (playAgain) {
    game();
    let userWin = 0;
    let computerWin = 0;
    let choice = prompt("Play again (y/n)? ");

    if (choice.toLowerCase() === "n") {
        console.log("Thank you for playing.");
        playAgain = false;
    }
}
