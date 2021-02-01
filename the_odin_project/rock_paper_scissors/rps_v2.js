function ComputerPlay(){
    let computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}
function PlayRound(playerSelection,computerSelection){
    //check winner and return winning or losing comment
    if(playerSelection === computerSelection){
        return "You both showed " + playerSelection + " its a draw.";
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            return "You lose! Paper beat rock";
        }
        else if(computerSelection === "scissors"){
            return "You win! Rock beat scissors";
        }
    } 
    else if(playerSelection ==="paper"){
        if(computerSelection ==="rock"){
            return "You win! Paper beat rock";
        }
        else if(computerSelection ==="scissors"){
            return "You lose! Rock beat scissors";
        }
    } 
    else if(playerSelection ==="scissors"){
        if(computerSelection ==="rock"){
            return "You lose! Rock beat scissors";
        }
        else if(computerSelection ==="paper"){
            return "You win! Scissors beat paper";
        }
    } 
}
function Game(numberOfGames = 1){
    for (let i = 0; i < numberOfGames; i++) {
        console.log(PlayRound(prompt("Rock, Paper or Scissors?:").toLowerCase(),ComputerPlay()));                    
    }
    //user input should be case insensitive
    //here we will play 5 round of the game
    //playRound should be in console.log
}