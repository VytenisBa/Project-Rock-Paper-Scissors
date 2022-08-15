
//Logic

const playerGuess = prompt("Enter your guess: Rock, Paper or Scissors");
const playerSelection = playerGuess[0].toUpperCase() + playerGuess.substring(1);
const computerSelection = getComputerRandomGuess();

function getComputerRandomGuess(){
    let computerSelection = Math.floor(Math.random() * 3) + 1;
    if (computerSelection == 1){
        return "Rock";
    }
    else if (computerSelection == 2){
        return "Paper";
    }
    else {
        return "Scissors"
    }
}


    


//console.log(playRound(playerSelection, computerSelection));

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection){
//         return "Tie";
//     }
//     else if (playerSelection == "Rock" && computerSelection == "Scissors"){
//         return "Player wins";
//     }
    
// }

//console.log(playerSelection, computerSelection);






