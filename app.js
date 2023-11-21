// HTML elements store in variables
let container = document.querySelector('#container')
let output = document.querySelector("#output")
let btnRock = document.querySelector(".rock")
let btnPaper = document.querySelector(".paper")
let btnScissors = document.querySelector(".scissors")
// Variables for user input and computer input
let userSelection;
let compSelection;

// Variable that holds a div, will be appendded to #ouput once winner is determined
let victory = document.createElement("div");
victory.setAttribute('class', 'victory');

// Variable that reset the game after a winner is determined
let reset = document.createElement("div");
reset.setAttribute('class', 'reset');

reset.addEventListener('click', () => {
    location.reload();
})

//function that generate input for computer;
function getComputerInput() {
    let i = Math.floor(Math.random() * 3) + 1;
        if (i === 1) {
            return "rock";
        } else if (i === 2) {
            return "paper";
        } else {
            return "scissor"
        };
};

// function that get computer input everytime a game is started
function repeatGetComputerInput() {
    compSelection = getComputerInput()
};

// Variables that keep track of computer and user score
let userScore = 0;
let compScore = 0;


function playRound() {
    repeatGetComputerInput();
    if (userSelection === compSelection) {
        output.innerText = "tie";
    } else if (userSelection == "rock" && compSelection == "paper") {
        compScore += 1;
        output.innerText = "You lost the round, Paper beats Rock!";
    } else if (userSelection == "rock" && compSelection == "scissor") {
        userScore += 1;
       output.innerText = "You won the round, Rock beats Scissor!";
    } else if (userSelection == "paper" && compSelection == "rock") {
        userScore += 1;
       output.innerText = "You won the round, Paper beats Rock!";
    } else if (userSelection == "paper" && compSelection == "scissor") {
        compScore += 1;
        output.innerText = "You lost the round, Scissor beats Paper!";
    } else if (userSelection == "scissor" && compSelection == "rock") {
        compScore += 1;
       output.innerText = "You lost the round, Rock beats Scissor!";
    } else {
        userScore += 1;
        output.innerText = "You won the round, Scissor beats Paper!";
    };
};

// function plays the round and increment scores to determine the winner
function game() {
    playRound();
    if (userScore === 3) {
        victory.innerText = "You won the game!"
        container.appendChild(victory);
        reset.innerText = "RESET";
        container.appendChild(reset);
    } else if (compScore === 3) {
        victory.innerText = "You lost the game!"
        container.appendChild(victory);
        reset.innerText = "RESET"
        container.appendChild(reset);
    } else {
        victory.innerText = "play next round"
        container.appendChild(victory);
    };
};

// event listeners for user input
btnRock.addEventListener('click', () => {
    userSelection = "rock";
    game(); 
});

btnPaper.addEventListener('click', () => {
    userSelection = "paper";
    game();
})

btnScissors.addEventListener('click', () => {
    userSelection = "scissor";
    game();
})






