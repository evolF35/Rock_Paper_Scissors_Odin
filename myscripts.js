
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

const Rock = document.querySelector('#Rock');
const Paper = document.querySelector('#Paper');
const Scissors = document.querySelector('#Scissors');

Rock.addEventListener('click',() => {
    playRound("ROCK",getComputerChoice());
});

Paper.addEventListener('click',() => {
    playRound("PAPER",getComputerChoice());
});

Scissors.addEventListener('click',() => {
    playRound("SCISSORS",getComputerChoice());
});


let playerScore = 0;
let computerScore = 0;
let iterations = 0;
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

    document.getElementById('RESULT').innerText = "";
    document.getElementById('update').innerText = ``;
    document.getElementById('ROUND').innerText = `Round ${iterations+1}`;


    if(player === computer){
        playerScore = ((playerScore*10 + 0.2*10)/10);
        computerScore = ((computerScore*10 + 0.2*10)/10);
        document.getElementById('update').innerText = `A Tie!`;
    }
    else if(player < computer){
        if(player === `PAPER` && computer === `ROCK` || player === `ROCK`){
            document.getElementById('update').innerText = 
            `You Win! ${player} beats ${computer}`;
            ++playerScore;
        }
        else{
            document.getElementById('update').innerText = 
            `You Lose! ${player} is beaten by ${computer}`;
            ++computerScore;

        }
    }
    else{
        if(player === `SCISSORS` && computer === `PAPER`){
            document.getElementById('update').innerText = 
            `You Win! ${player} beats ${computer}`;
            ++playerScore;
        }
        else{
            document.getElementById('update').innerText = 
            `You Lose! ${player} is beaten by ${computer}`;
            ++computerScore;

        }
    }

    document.getElementById('Pscore').innerText = playerScore;
    document.getElementById('Cscore').innerText = computerScore;
    iterations++;

    if (iterations === 5){
        if(playerScore > computerScore){
            document.getElementById('RESULT').innerText 
            = "Player is the Champion!";
        }
        else if(playerScore < computerScore){
            document.getElementById('RESULT').innerText 
            = "Computer is the Champion!";
        }
        else {
            document.getElementById('RESULT').innerText 
            = "Nobody is the Champion!";
        }
        iterations = 0;
        playerScore = 0;
        computerScore = 0;
    }
}


