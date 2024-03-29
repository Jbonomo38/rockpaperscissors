const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => playRound(rock.textContent, getCompChoice()));
paper.addEventListener('click', () => playRound(paper.textContent, getCompChoice()));
scissors.addEventListener('click', () => playRound(scissors.textContent, getCompChoice()));

// Generates the computer's choice
function getCompChoice() {
    const compChoice = document.querySelector('#comp-choice');
    
    let randomNum = Math.round(Math.random()*100);
    // console.log(randomNum);
    if (randomNum <= 33) {
        compChoice.textContent = "Rock";
        return "rock";
    } else {
        if (randomNum <= 66) {
            compChoice.textContent = "Paper";
            return "paper";
        }
    }
    compChoice.textContent = "Scissors";
    return "scissors";
}

// Determines who wins in a round by comparing userChoice to compChoice
function playRound(userChoice, compChoice) {
    // console.log(userChoice);
    // console.log(compChoice);
    document.querySelector('#user-choice').textContent = userChoice;

    let uChoice = userChoice.toLowerCase();
    let cChoice = compChoice.toLowerCase();

    const resultLog = document.querySelector('.console');
    
    // Draw logic (if user and comp pick the same)
    if (uChoice === cChoice) {
        resultLog.textContent = "It's a tie!";
        return "tie";
    }

    // Logic for user choosing rock
    if (uChoice === "rock") {
        if(cChoice === "paper") {
            resultLog.textContent = "Comp wins! (paper beats rock)";
            updateCompScore(getCompScore()+1);
            return "comp";
        }
        if(cChoice === "scissors"){
            resultLog.textContent = "User wins! (rock beats scissors)";
            updateUserScore(getUserScore()+1);
            return "user";
        }
    }

    // Logic for user choosing paper
    if (uChoice === "paper") {
        if(cChoice === "rock") {
            resultLog.textContent = "User wins! (paper beats rock)";
            updateUserScore(getUserScore()+1);
            return "user";
        }
        if(cChoice === "scissors") {
            resultLog.textContent = "Comp wins! (scissors beats paper)";
            updateCompScore(getCompScore()+1);
            return "comp";
        }
    }

    // Logic for user choosing scissors
    if (uChoice === "scissors") {
        if(cChoice === "rock") {
            resultLog.textContent = "Comp wins! (rock beats scissors)";
            updateCompScore(getCompScore()+1);
            return "comp";
        }
        if(cChoice === "paper") {
            resultLog.textContent = "User wins! (scissors beats paper)";
            updateUserScore(getUserScore()+1);
            return "user";
        }
    }

    // Catch-all in case inputs are inaccurate
    resultLog.textContent = "User did not choose a correct option";
    return "User did not choose a correct option";
}

// Function to run a game, best of 5
function playGame() {
    // Declare variable for userScore
    let userScore = 0;
    // Declare variable for compScore
    let compScore = 0;

    for(let i = 0; i < 5; i++) {
        let roundResult = playRound(prompt("Rock, Paper, Scissors?"), getCompChoice());

        if(roundResult === "user") {
            userScore++; 
        } else  if (roundResult === "comp") {
            compScore++;
        } else {
            // Do nothing if a tie
        }
        console.log(`User: ${userScore}, Comp: ${compScore}`);
    }

    if(userScore > compScore) {
        console.log(`User wins!`);
        return "user";
    } else {
        console.log(`Comp wins!`);
        return "comp";
    }
}  

// Run a series of 5;
// playGame();

function getUserScore() {
    const scoreDiv = document.querySelector('#user-score');
    return parseInt(scoreDiv.textContent, 10);
}

function getCompScore() {
    const scoreDiv = document.querySelector('#comp-score');
    return parseInt(scoreDiv.textContent, 10);
}

function updateUserScore(newScore) {
    document.querySelector('#user-score').textContent = newScore.toString();
}

function updateCompScore(newScore) {
    document.querySelector('#comp-score').textContent = newScore.toString();
}