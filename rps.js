let humanscore = 0;
let computerscore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const display = document.querySelector(".display");
const score = document.querySelector(".score-board");
const MAX_SCORE = 5;

display.textContent = `Welcome to RPS`;

rock.addEventListener("click", () => {
    playGame("rock");
})

paper.addEventListener("click", () => {
    playGame("paper");
})

scissors.addEventListener("click", () => {
    playGame("scissors");
})


function getComputerChoice() {
    a = Math.random();
    if (a == 0) {
        return "rock";
    }
    else if (a >= 0.5) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function updateScore() {
    score.textContent = `Human: ${humanscore} Computer: ${computerscore}`;
}


function playRound(computer, human) {
    if ((computer == "rock" && human == "scissors") ||
    (computer == "scissors" && human == "paper") ||
    (computer == "paper" && human == "rock")) {
        computerscore++;
        return (display.textContent = `Computer wins! ${computer} beats ${human}.`)
    }
    else if (computer == human) {
        return (display.textContent = "It's a tie.");
    }
    else {
        humanscore++;
        return (display.textContent = `You win! ${human} beats ${computer}.`)
    }
}

function playGame(human) {
    computer = getComputerChoice();
    playRound(computer, human);
    updateScore();

    if (humanscore == 5) {
        display.textContent = `You win!`;
        resetGame();
    }
    else if (computerscore == 5) {
        display.textContent = `You lose!`;
        resetGame();
    }
}

function resetGame() {
    humanscore = 0;
    computerscore = 0;
}