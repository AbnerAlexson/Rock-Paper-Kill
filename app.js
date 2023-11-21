// HTML elements store in variables
let output = document.querySelector("#output")
let btnRock = document.querySelector(".rock")
let btnPaper = document.querySelector(".paper")
let btnScissors = document.querySelector(".scissors")
// Variables for user input and computer input
let userSelection;
let compSelection;

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

console.log(getComputerInput());



