console.log("Here is my Javascript!");

/*
Function : getComputerChoice
spec: returns a string that says rock, paper,
or scissors.
This is supposed to be random

So call the function and it returns rock, paper,
scissors randomly

Pseudocode:

create a variable
set that variable equal to a random number
between 3 outcomes. ie 1,2,3.
We will do 0,1,2 because of implementations on 
websites.
with the variable equal to 0 or 1 or 2
we will check if 0, if so return ROCK
check if 1, if so return PAPER
else return SCISSORS


*/

function testrand() {
    let testrand = Math.floor(Math.random()*3);
    return(testrand);
}
//After about 8 tries it only returns 0,1,2 so it
// works according to my weak eyeball tests


function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*3);
    if(randomChoice === 0){
        return("ROCK");
    }
    else if (randomChoice === 1){
        return("PAPER");
    }
    else{
        return("SCISSORS");
    }
}

/*Function: playerSelection
specs: return a string that matches player's choice

Ask player if they want to play rock, paper, or scissors
set their response to a variable
uppercase the variable
if uppercase variable equals ROCK
return ROCK
else if uppercase variable equals PAPER
return PAPER
else if uppercase variable equals SCISSORS
return SCISSORS
else tell player try again
*/

function playerSelection(){
    let selection = prompt("please input either Rock,Paper,or Scissors");
    upperCaseSelection = selection.toUpperCase();

    if (upperCaseSelection === "ROCK"){
        return("ROCK");
    }
    else if (upperCaseSelection === "PAPER"){
        return("PAPER");
    }
    else if (upperCaseSelection === "SCISSORS"){
        return("SCISSORS");
    }
    else {
        return(playerSelection());
    }
}





/* 
Function: playSingleRound
specs: takes two parameters, playerSelection and
computerSelection
return a string that declares the winner of the round

psuedocode:
PAPER > ROCK > SCISSORS
if computerselection is greater than playerselection
return you lose, playerselection is beaten by computerselection
else if computerselection is less than playerselection
return you win, playerselection beats computerselection
else 
return A tie!



*/



