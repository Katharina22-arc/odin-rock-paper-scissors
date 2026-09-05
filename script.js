let rock = "rock";
let paper = "paper";
let scissors = "scissors";

let humanScore = 0;
let computerScore = 0;

let continueGame = true;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const computerSelection = getRandomInt(3);
    if (computerSelection === 0) {
        console.log("Computer selects: " + rock);
        return rock;
    }
    else if (computerSelection === 1) {
        console.log("Computer selects: " + paper); 
        return paper;
    }
    else {
        console.log("Computer selects: " + scissors);
        return scissors;
    }
}


function getHumanChoice() {
    let humanSelection;
    while (true) {
        humanSelection = Number(prompt("Pick a number between 0 and 2." + '\n' + "0 = rock, 1 = paper, 2 = scissors"));
        if (humanSelection === 0 || humanSelection === 1 || humanSelection === 2) {
            break;
        } else {
            console.log("Invalid input. Try again");
        }
    }
    if (humanSelection === 0) {
        console.log("You select: " + rock);
        return rock;
    }
    else if (humanSelection === 1) {
        console.log("You select: " + paper); 
        return paper;
    }
    else {
        console.log("You select: " + scissors);
        return scissors;
    }
}

function playRound(humanSelection, computerSelection) {
    if  ((humanSelection === rock && computerSelection === scissors) || 
        (humanSelection === paper && computerSelection === rock) || 
        (humanSelection === scissors && computerSelection === paper)) {
            console.log("You win!");
            humanScore = humanScore + 1; 
        } else if (humanSelection === computerSelection) {
            console.log("It's a draw!");
        } else {
            console.log("You loose!");
            computerScore = computerScore + 1; 
        }
        console.log("Human score: " + humanScore + '\n' + "Computer score: " + computerScore);
    }

function gameActive() {
    while (continueGame === true) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        userDecision = prompt("Do you want to continue the game? Y/N").toLowerCase();
        if (userDecision === "y") {
                continueGame = true
            } else if (userDecision = "n") {
                continueGame = false;
                break;
            } else {
                console.log("Invalid input. Try again")
            }
    }
}

gameActive(); 
/*
Score:
    For each round the user plays the computer keeps the score
    If user wins the variable humanScore adds 1
    Else the computerScore adds 1
    This variables stay even if a new game is played
    The score will be added after each round

function playRound(humanScore, ComputerScore){}:
    Transform all characters of user's input to lowercase
    IF human picks 0 and computer picks 1 the user wins
    IF human picks 1 and computer picks 2 the user wins
    IF human picks 2 and computer picks 3 the user loses
    ELSE It's a draw
    Then show score
    Ask the user if he wants to play another game
    IF user answers with y start a new game
    ELSE stop game
*/
 