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
        return(`ROCK`);
    }
    else if (randomChoice === 1){
        return(`PAPER`);
    }
    else{
        return(`SCISSORS`);
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

function getPlayerSelection(){
    let selection = prompt("please input either Rock,Paper,or Scissors");
    upperCaseSelection = selection.toUpperCase();

    if (upperCaseSelection === "ROCK"){
        return(`ROCK`);
    }
    else if (upperCaseSelection === "PAPER"){
        return(`PAPER`);
    }
    else if (upperCaseSelection === "SCISSORS"){
        return(`SCISSORS`);
    }
    else {
        return(getPlayerSelection());
    }
}





/* 
Function: playSingleRound
specs: takes two parameters, playerSelection and
computerSelection
return a string that declares the winner of the round

psuedocode:
PAPER > ROCK > SCISSORS (ASCII)
or PAPER > ROCK, SCISSORS > PAPER, ROCK > SCISSORS (REAL GAME)
if computerselection is greater than playerselection
return you lose, playerselection is beaten by computerselection
else if computerselection is less than playerselection
return you win, playerselection beats computerselection
else 
return a tie!


****PAPER > ROCK > SCISSORS (ASCII) WRONG

SCISSORS > ROCK > PAPER

If player equal to computer,
return ("A tie")
if player greater than computer
    if player is equal to paper and computer is equal to rock
    return you win
    if player is equal to rock
    return you win
    else 
    return you lose
if player is less than computer
    if player is equal to scissors and computer is equal to paper
    return you win
    else 
    return you lose
    

/// HAD TO FIX THE ORDER!!
S > R > P
i reversed

*/


function playRound(player,computer){
    if(player === computer){
        console.log(`A Tie!`);
        return(`A Tie!`);
    }
    else if(player < computer){
        if(player === `PAPER` && computer === `ROCK` || player === `ROCK`){
            console.log(`You Win! ${player} beats ${computer}`);
            return(`You Win! ${player} beats ${computer}`);
        }
        else{
            console.log(`You Lose! ${player} is beaten by ${computer}`)
            return(`You Lose! ${player} is beaten by ${computer}`);
        }
    }
    else{
        if(player === `SCISSORS` && computer === `PAPER`){
            console.log(`You Win! ${player} beats ${computer}`);
            return(`You Win! ${player} beats ${computer}`);
        }
        else{
            console.log(`You Lose! ${player} is beaten by ${computer}`)
            return(`You Lose! ${player} is beaten by ${computer}`);
        }
    }
}


/* 
Function: Game
spec: call playround function to play a 5 round game
keeps score, and reports winner or loser at end

create computer and player score
and set it to 0

for 5 rounds
    call playround
    if player wins
    player score + 1
    print both scores
    if computer wins 
    computer score + 1
    print both scores
    else
    player and computer score + 0.2
    print both scores

if playerscore greater than computer score
    print player is champion
if computerscore greater than player score
    print computer is champion
if playerscore === computerscore
    print noone is champion!

*/



function game() {

    let playerScore = 0;
    let computerScore = 0;

    for(i = 0; i < 5; i++){
        let outcome = playRound(getPlayerSelection(),getComputerChoice());

        if(outcome.includes(`Tie!`) === true){
            playerScore = playerScore + 0.2;
            computerScore = computerScore + 0.2;
            console.log("Player score is "
            +playerScore+" Computer score is "+computerScore);
            continue;
        }
        else if(outcome.includes(`Win!`) === true){
            ++playerScore;
            console.log("Player score is "
            +playerScore+" Computer score is "+computerScore);
            continue;
        }
        else{
            ++computerScore;
            console.log("Player score is "
            +playerScore+" Computer score is "+computerScore);
            continue;
        }
    }

    if(playerScore > computerScore){
        console.log("Player is the Champion!");
    }
    else if(playerScore < computerScore){
        console.log("Computer is the Champion!");
    }
    else {
        console.log("Nobody is the Champion!");
    }

}


