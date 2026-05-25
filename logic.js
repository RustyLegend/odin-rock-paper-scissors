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

function validateWin(player, comp)
{
    if ((player == 'Rock' && comp == 'Paper') || (player == 'Paper' && comp == 'Scissors') || (player == 'Scissors' && comp == 'Rock'))
        alert("You Lose.\nComputer's move " + comp);
    else if ((comp == 'Rock' && player == 'Paper') || (comp == 'Paper' && player == 'Scissors') || (comp == 'Scissors' && player == 'Rock'))
        alert("You Win\nComputer's move " + comp);
    else
        alert("Its a tie\nComputer's move " + comp);
}

const playerMove = getPlayerMove();
const compMove = getComputerMove();

validateWin(playerMove, compMove);