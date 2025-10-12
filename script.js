let gameNumber;
let playerChoice;
let record = [];

function getNumber () {
    return num = Math.floor((Math.random() * 100) + 1)
}

// Using .prompt for now because we haven't touched DOM as yet

function getChoice () {
    return playerChoice = prompt('Enter a number')
    
}

function recordChoice () {
    
}
console.log(getChoice())