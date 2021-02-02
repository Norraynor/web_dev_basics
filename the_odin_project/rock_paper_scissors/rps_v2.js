function ComputerPlay(){
    let computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}
function PlayRound(playerSelection,computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
    //check winner and return winning or losing comment
    if(playerSelection === computerSelection){
        h1Sel.textContent = "Draw";
        para.textContent = `You both selected ${playerSelection}.`;
        Draw();
        return "You both showed " + playerSelection + " its a draw.";
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            h1Sel.textContent = "You Lose!";
            para.textContent = `You selected ${playerSelection}. It loses to ${computerSelection}.`;
            Lose();
            return "You lose! Paper beat rock";
        }
        else if(computerSelection === "scissors"){
            h1Sel.textContent = "You Win!";
            para.textContent = `You selected ${playerSelection}. It wins against ${computerSelection}.`;
            Win();
            return "You win! Rock beat scissors";
        }
    } 
    else if(playerSelection ==="paper"){
        if(computerSelection ==="rock"){
            h1Sel.textContent = "You Win!";
            para.textContent = `You selected ${playerSelection}. It wins against ${computerSelection}.`;
            Win();
            return "You win! Paper beat rock";
        }
        else if(computerSelection ==="scissors"){
            h1Sel.textContent = "You Lose!";
            para.textContent = `You selected ${playerSelection}. It loses to ${computerSelection}.`;
            Lose();
            return "You lose! Rock beat scissors";
        }
    } 
    else if(playerSelection ==="scissors"){
        if(computerSelection ==="rock"){
            h1Sel.textContent = "You Lose!";
            para.textContent = `You selected ${playerSelection}. It loses to ${computerSelection}.`;
            Lose();
            return "You lose! Rock beat scissors";
        }
        else if(computerSelection ==="paper"){
            h1Sel.textContent = "You Win!";
            para.textContent = `You selected ${playerSelection}. It wins against ${computerSelection}.`;
            Win();
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
function GetValue(e){
    console.log(PlayRound(e.target.id.toLowerCase(),ComputerPlay()));
}
function Win(){
    h1Sel.style.backgroundColor = "green";
    container.style.borderColor = "green";
}
function Lose(){
    h1Sel.style.backgroundColor = "red";
    container.style.borderColor = "red";
}
function Draw(){
    h1Sel.style.backgroundColor = "gray";
    container.style.borderColor = "gray";
}

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button=>button.addEventListener("click",GetValue));

const h1Sel = document.querySelector("h1");
const para = document.querySelector("p");
const result = document.querySelector("#results");
const container = document.querySelector("#container");
