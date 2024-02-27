const rock = document.querySelector('.Rock');
const paper = document.querySelector('.Paper');
const scissors = document.querySelector('.Scissors');

rock.addEventListener('click', () => playRound(rock.textContent, getCompChoice()));
paper.addEventListener('click', () => playRound(paper.textContent, getCompChoice()));
scissors.addEventListener('click', () => playRound(scissors.textContent, getCompChoice()));

// Generates the computer's choice
function getCompChoice() {
    const compChoice = document.querySelector('.comp-choice');
    
    let randomNum = Math.round(Math.random()*100);
    // console.log(randomNum);
    if (randomNum <= 33) {
        compChoice.textContent = "rock";
        return "rock";
    } else {
        if (randomNum <= 66) {
            compChoice.textContent = "paper";
            return "paper";
        }
    }
    compChoice.textContent = "scissors";
    return "scissors";
}

// Determines who wins in a round by comparing userChoice to compChoice
function playRound(userChoice, compChoice) {
    // console.log(userChoice);
    // console.log(compChoice);
    let uChoice = userChoice.toLowerCase();
    let cChoice = compChoice.toLowerCase();

    document.querySelector('.user-choice').textContent = userChoice;

    const resultLog = document.querySelector('.results');
    
    // Draw logic (if user and comp pick the same)
    if (uChoice === cChoice) {
        resultLog.textContent = "It's a tie!";
        return "tie";
    }

    // Logic for user choosing rock
    if (uChoice === "rock") {
        if(cChoice === "paper") {
            resultLog.textContent = "Comp wins! (paper beats rock)";
            return "comp";
        }
        if(cChoice === "scissors"){
            resultLog.textContent = "User wins! (rock beats scissors)";
            return "user";
        }
    }

    // Logic for user choosing paper
    if (uChoice === "paper") {
        if(cChoice === "rock") {
            resultLog.textContent = "User wins! (paper beats rock)";
            return "user";
        }
        if(cChoice === "scissors") {
            resultLog.textContent = "Comp wins! (scissors beats paper)";
            return "comp";
        }
    }

    // Logic for user choosing scissors
    if (uChoice === "scissors") {
        if(cChoice === "rock") {
            resultLog.textContent = "Comp wins! (rock beats scissors)";
            return "comp";
        }
        if(cChoice === "paper") {
            resultLog.textContent = "User wins! (scissors beats paper)";
            return "user";
        }
    }

    // Catch-all in case inputs are inaccurate
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