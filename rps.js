function getComputerChoice() {
    value = Math.random();
    r = "Rock";
    p = "Paper";
    s = "Scissors";
    if (value == +0) {
        return r;
    }
    else if (value <= +0.5) {
        return p;
    }
    else {
        return s;
    }
}

function getHumanChoice() {
    let a = prompt("What's your choice? ");
    a = a.toLowerCase();

    if (a == "rock") {
        return "Rock";
    }
    else if (a == "paper") {
        return "Paper";
    }
    else if (a == "scissors") {
        return "Scissors";
    }
}

console.log(getComputerChoice());
console.log(getHumanChoice());

var humanScore = 0;
var computerScore = 0;

function playRound(a, b) {
}

console.log(playRound(humanChoice, computerChoice))