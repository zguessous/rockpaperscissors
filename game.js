
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoice = ["rock","paper","scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelection, computerSelection) {
    /* 
    choice is same
    choice is not same 
        rock vs scissors player beats
        paper vs rock   player  beats
        scissors vs paper player  beats
        else player loses 
    */
    if (playerSelection.toLowerCase() == computerSelection) {
        return "It's a tie !!";
    }
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        playerScore++;
        return `Player wins this round ! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        playerScore++;
        return `Player wins this round ! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        playerScore++;
        return `Player wins this round ! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        computerScore++;
        return `Computer wins this round ! ${computerSelection} beats ${playerSelection}`;
    }    
}

function game() {
    let playerSelection;
    playerScore = 0;
    computerScore = 0;
    for (let i=0; i<5; i++) {
        playerSelection = prompt("Choose rock, paper, or scissors");
        console.log(playRound(playerSelection, getComputerChoice()));
    }
    let result = (playerScore > computerScore) ? "Player wins the game": "Computer wins this game";
    return result;
}


console.log(game());