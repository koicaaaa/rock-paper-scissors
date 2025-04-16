let humanscore = 0;
let computerscore = 0;
let rounds = 5;

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

function getHumanChoice() {
    let b = prompt("What will you choose? ");
    b = b.toLowerCase();

    if (b == 'rock') {
        return "rock";
    }
    else if (b == 'paper') {
        return "paper";
    }
    else if (b == 'scissors') {
        return "scissors";
    }
    else {
        return 0;
    }
}

function playRound(computer, human) {
    if ((computer == "rock" && human == "scissors") ||
    (computer == "scissors" && human == "paper") ||
    (computer == "paper" && human == "rock")) {
        console.log("Computer wins! " + computer + " beats " + human);
        computerscore++;
    }
    else if (computer == human) {
        console.log("It's a tie.");
    }
    else {
        console.log("You win! " + human + " beats " + computer);
        humanscore++;
    }
    
    return
}

function myGame() {

    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
        console.log("Your score is: ", humanscore);
        console.log("The computer score is: ", computerscore);
    }

    if (humanscore > computerscore) {
        console.log("You win!");
    }
    else if (computerscore > humanscore) {
        console.log("Computer wins!");
    }
    else {
        console.log("Tie!");
    }
}

myGame()
