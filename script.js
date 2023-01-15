//create a program that compares a player input that is selected through
//a button and compares it a randomly generated input from the computer
//each time a game is played, keep score through a scoreboard

const grassButton = document.querySelector(".grassButton");
const fireButton = document.querySelector(".fireButton");
const waterButton = document.querySelector(".waterButton");
let scoreBoard = document.querySelector(".scoreBoard");
let victoryMessage = document.createElement('p');
victoryMessage.setAttribute("class", "victoryMessage");
let main = document.querySelector(".main");
let resultStatement = document.querySelector(".resultStatement");

function getComputerInput() {
let computerInput = Math.floor(Math.random()*3);

if (computerInput == 0) {
    return "grass";
} else if (computerInput == 1) {
    return "fire";
} else {
    return "water";
}
}

function getPlayerInput(selection){
    return selection;
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection){
    let result = '';
    let computerSelection = getComputerInput();

    if (playerScore == 0 && computerScore == 0){
        victoryMessage.textContent = "";
    }

    if (computerSelection == "grass" && playerSelection == "water" ||
    computerSelection == "fire" && playerSelection == "grass" ||
    computerSelection == "water" && playerSelection == "fire"){
        computerScore++;
        keepScore();
        checkScore();
        changeResult("Gary Wins!");
    } else if (playerSelection == "grass" && computerSelection == "water" ||
    playerSelection == "fire" && computerSelection == "grass" ||
    playerSelection == "water" && computerSelection == "fire"){
        playerScore++;
        keepScore();
        checkScore();
        changeResult("You Win!"); 
    } else {
        changeResult("It is a tie!");
    };
}

function keepScore() {
    scoreBoard.textContent = `Score: ${playerScore} - ${computerScore}`;
}

function resetGame() {
playerScore = 0;
computerScore = 0;
}

function checkScore(){      
if(computerScore == 5 ) {
    victoryMessage.textContent = "Gary is the Pokemon Champion! \n Select another pokemon to restart the game.";
    main.appendChild(victoryMessage);
    resetGame();
} else if(playerScore == 5 ) {
    victoryMessage.textContent = "You are the Pokemon Champion! \n Select another pokemon to restart the game.";
    main.appendChild(victoryMessage);
    resetGame();
}
}

function changeResult(result) {
    resultStatement.textContent = result;
}

grassButton.addEventListener("click", () => { 
    playRound("grass");
});

fireButton.addEventListener("click", () => { 
    playRound("fire");
});

waterButton.addEventListener("click", () => { 
    playRound("water");
});