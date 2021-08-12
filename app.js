const inputBtn = document.querySelectorAll(".inputBtn");
const resultText = document.querySelector(".resultText");
const resultScore = document.querySelector(".resultScore");
const container = document.querySelector(".container");

let computerScore = 0;
let playerScore = 0;


inputBtn.forEach((btn) => {    
    btn.addEventListener("click", (e) => {
        resultText.textContent = playOneRound(btn.name, computerPlay());
        resultScore.textContent = `You ${playerScore} : PC ${computerScore}`

        if(computerScore >= 5) {
            resultScore.textContent = `You lost... the PC beat you with ${computerScore} : ${playerScore}`;
            return "Click a Button to Retry"
        } else if (playerScore >= 5) {
            resultScore.textContent = `You won! You beat the PC with ${playerScore} : ${computerScore}`;
            return "Click a Button to Retry"
        }
    })
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    let randomNum = getRandomInt(3); 
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection) {
        return `It's a tie. Both picked ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        return `You Lose! Paper beats rock.`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        return `You Win! Rock beats scissors.`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        return `You Win! Paper beats rock.`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        return `You Lose! Scissors beats paper.`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        return `You Loose! Rock beats scissors.`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return `You Win! Scissors beats paper.`;
    } 
}


