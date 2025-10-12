let gameNumber;
let playerChoice;

function getNumber () {
    return num = Math.floor(Math.random() * 100)
}

// Using .prompt for now because we haven't touched DOM as yet

function getChoice () {
    prompt(playerChoice, 'Enter a number')
    return playerChoice;
}
console.log(getChoice(playerChoice))