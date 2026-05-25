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

function getPlayerMove()
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
}

function startRound()
{
    const player = getPlayerMove();
    const comp = getComputerMove();

    if ((player == 'Rock' && comp == 'Paper') || (player == 'Paper' && comp == 'Scissors') || (player == 'Scissors' && comp == 'Rock')){
        alert("You Lose.\nComputer's move: " + comp);
        compScore++;
    }
    else if ((comp == 'Rock' && player == 'Paper') || (comp == 'Paper' && player == 'Scissors') || (comp == 'Scissors' && player == 'Rock')){
        alert("You Win\nComputer's move: " + comp);
        playerScore++;
    }
    else
        alert("Its a tie\nComputer's move: " + comp);

    alert(`Player Score: ${playerScore}\nComputer Score: ${compScore}`);
}

function playGame()
{
    startRound();
    startRound();
    startRound();
    startRound();
    startRound();
}

let playerScore = 0;
let compScore = 0;

playGame();