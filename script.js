console.log("Hey");

let rock = "rock";
let paper = "paper";
let scissors = "scissors";

const humanScore = 0;
const computerScore = 0;

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    const computerNumb = getRandomInt(3);
    

    if (computerNumb === 0) {
        console.log(rock);
    }
    else if (computerNumb === 1) {
        console.log(paper); 
    }
    else {
        console.log(scissors);
    }
}


function getUserChoice(){
    const userNumb = prompt("Pick a number between 0 and 2. 0 = rock, 1 = paper, 2 = scissors");

    if (userNumb === 0) {
        console.log(rock);
    }
    else if (userNumb === 1) {
        console.log(paper); 
    }
    else {
        console.log(scissors);
    }
}

getComputerChoice()
getUserChoice()

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
