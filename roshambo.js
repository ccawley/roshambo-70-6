const argv = require('yargs').argv

let moves = ["rock", "paper", "scissors"]
let computerMove = computersMove(moves)

function computersMove(moves) {
  let move = ""
  move = moves[Math.floor(Math.random()*3)]
  return move
}

console.log(`Playing a game of Roshambo against the computer.`)
console.log(`Player plays ${argv.move}`)
console.log(`Computer plays ${computerMove}`);

if (argv.move === "rock" && computerMove === "rock") {
  console.log(`Drat, a tie! Play again.`)
} else if (argv.move === "rock" && computerMove === "paper") {
  console.log(`~Sorry, computer wins, that's embarrassing!~`)
} else if (argv.move === "rock" && computerMove === "scissors") {
  console.log(`~Allright, you beat the computer, revel in your human superiority!~`)
} else if (argv.move === "paper" && computerMove === "rock") {
  console.log(`~Allright, you beat the computer, revel in your human superiority!~`)
} else if (argv.move === "paper" && computerMove === "paper") {
  console.log(`Drat, a tie! Play again.`)
} else if (argv.move === "paper" && computerMove === "scissors") {
  console.log(`~Sorry, computer wins, that's embarrassing!~`)
} else if (argv.move === "scissors" && computerMove === "rock") {
  console.log(`~Sorry, computer wins, that's embarrassing!~`)
} else if (argv.move === "scissors" && computerMove === "paper") {
  console.log(`~Allright, you beat the computer, revel in your human superiority!~`)
} else if (argv.move === "scissors" && computerMove === "scissors") {
  console.log(`Drat, a tie! Play again.`)
}
