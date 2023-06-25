
// game mechanics

let playerScore = 0;
let computerScore = 0;

const messageBoxLink = document.querySelector('.message-box>a');
const playerButtons = document.querySelectorAll('#playerButtons>button');
const playerChoiceElement = document.querySelector('#playerChoice>i');
const computerChoiceElement = document.querySelector('#computerChoice>i');
const playerScoreElement = document.querySelector('#playerScore');
const computerScoreElement = document.querySelector('#computerScore');

function getComputerChoice() {
    const computerChoice = ["rock","paper","scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        updateMessageBoard("fa fa-gamepad","It's a tie !!","😳");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper") {
        playerScoreElement.textContent = ++playerScore;
        updateMessageBoard("fa fa-gamepad","Player wins this round !","😎");
    }
    else {
        computerScoreElement.textContent = ++computerScore;
        updateMessageBoard("fa fa-gamepad","Computer wins this round !","😱");
    }
    
    if(playerScore == 5 || computerScore == 5){
        if(playerScore - computerScore < 0)
            updateMessageBoard("fa fa-gamepad","Computer wins the game !","Play again");
        else {
            updateMessageBoard("fa fa-gamepad","Player wins the game !","Play again");
        }
        playerScore = 0;
        computerScore = 0;
    }
}

function game(playerSelection, computerSelection) {
    //while (playerScore < 5 || computerScore < 5) {
        if(computerSelection == "rock"){
            computerChoiceElement.setAttribute('class', "fa fa-hand-rock-o fa-4x fa-flip-horizontal");
        }
        else if(computerSelection == "paper"){
            computerChoiceElement.setAttribute('class', "fa fa-hand-paper-o fa-4x");
        }
        else {
            computerChoiceElement.setAttribute('class', "fa fa-hand-scissors-o fa-4x ");
        }

        if(playerSelection == "rock"){
            playerChoiceElement.setAttribute('class', "fa fa-hand-rock-o fa-4x fa-rotate-90");
        }
        else if(playerSelection == "paper"){
            playerChoiceElement.setAttribute('class', "fa fa-hand-paper-o fa-4x");
        }
        else {
            playerChoiceElement.setAttribute('class', "fa fa-hand-scissors-o fa-4x fa-flip-horizontal");
        }
        // round plays
        playRound(playerSelection, computerSelection);
    //}
}

// DOM manipulation

function updateMessageBoard(icon, message, box){
    const iconElement = document.querySelector('.message>i')
    const messageElement = document.querySelector('.message>p');
    const boxElement = document.querySelector('.message-box>a>p');
    const linkElement = document.querySelector('.message-box>a');
    
    linkElement.setAttribute('style', 'pointer-events:none; color: black;');
    iconElement.setAttribute('class', icon);
    messageElement.textContent = message;
    boxElement.textContent = box;
}

// event handlers

messageBoxLink.addEventListener('click', function () {
    updateMessageBoard(
        "fa fa-spinner fa-pulse fa-lg fa-fw",
        "Choose Rock, Paper or Scissors on your left",
        "Good Luck!");
        //play game that has loop of 5
});

playerButtons.forEach((button) => {
    button.addEventListener('click', function() {
        // calls game
            game(this.id, getComputerChoice());
        
    });
});


//console.log(game());