
function getComputerChoice(){
  let number = Math.floor( Math.random()*3 );
  if( number==0 ) return "rock";
  else if( number==1 ) return "scissor";
  else return "paper";
}

function getHumanChoice(){
  let choice = prompt("play your move: ");

  return choice.toLowerCase();
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice){
  if( humanChoice==="rock" && computerChoice==="paper" || humanChoice==="paper" && computerChoice==="scissor" || humanChoice==="scissor" && computerChoice==="rock" ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }
  else if( humanChoice==="rock" && computerChoice==="scissor" || humanChoice==="paper" && computerChoice==="rock" || humanChoice==="scissor" && computerChoice==="paper" ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  }
  else {
    console.log(`It's a draw!`);
  }

}

for (let index = 0; index < 5; index++) {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
}

console.log(`The Final Score is ${humanScore}-${computerScore}`);


