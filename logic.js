function getComputerMove()
{
    const move = Math.random();

    if (move < 1/3)
        return 'Rock';
    else if (move >= 1/3 && move < 2/3)
        return 'Paper';
    else
        return 'Scissors';
}

/*function getPlayerMove()
{
    const move = prompt("Type your move (R/P/S): ");
    if (move.toLowerCase() == 'r')
        return 'Rock';
    else if (move.toLowerCase() == 'p')
        return 'Paper';
    else if (move.toLowerCase() == 's')
        return 'Scissors';
    else
        alert('Please enter a valid prompt.');
}*/

function startRound(player)
{
    const comp = getComputerMove();
    const scoreBoard = document.querySelector('.score');

    if ((player == 'Rock' && comp == 'Paper') || (player == 'Paper' && comp == 'Scissors') || (player == 'Scissors' && comp == 'Rock')){
        scoreBoard.textContent = "You Lose.\nComputer's move: " + comp;
        compScore++;
    }
    else if ((comp == 'Rock' && player == 'Paper') || (comp == 'Paper' && player == 'Scissors') || (comp == 'Scissors' && player == 'Rock')){
        scoreBoard.textContent = "You Win.\nComputer's move: " + comp;
        playerScore++;
    }
    else
        scoreBoard.textContent = "It's a tie";

    const board = document.querySelector('.scoreboard');
    board.textContent = `Player Score: ${playerScore}\nComputer Score: ${compScore}`;

    
}

const buttons = document.querySelectorAll('button');

buttons.forEach((b) => {
    b.addEventListener("click",(e) => {
        startRound(e.target.textContent);
    });
});

let playerScore = 0;
let compScore = 0;

playGame();