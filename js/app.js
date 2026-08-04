/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];


/*---------------------------- Variables (state) ----------------------------*/

let board = ['', '', '', '', '', '', '', '', ''];
let turn = '⚽';
let winner = false;
let tie = false;


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');

const messageEl = document.querySelector('#message');

const resetBtnEl = document.querySelector('#resetBtnEl');


/*-------------------------------- Functions --------------------------------*/

function handleClick(event) {

    if (event.target.textContent !== '' || winner === true || tie === true ) {
        return;
    }

    event.target.textContent = turn;

    checkWinner();

    if (winner === true) {
        messageEl.textContent = `Player ${turn} Wins`;
        return;
        
    }

    checkTie();

    if (tie === true) {
        messageEl.textContent = 'Players Tie';
        return;
    }

    if (turn === '⚽') {
        turn = '🏀';
    } else {
        turn = '⚽';
    }

    messageEl.textContent = `Player ${turn} Turn`;
}


function checkWinner() {

    for (let i = 0; i < winningCombos.length; i++) {

        let a = winningCombos[i][0];
        let b = winningCombos[i][1];
        let c = winningCombos[i][2];

        if (squareEls[a].textContent === turn && squareEls[b].textContent === turn &&squareEls[c].textContent === turn) {
            winner = true;
            return;
        }
    }
}


function checkTie() {

    tie = true;

    for (let i = 0; i < squareEls.length; i++) {

        if (squareEls[i].textContent === '') {
            tie = false;
            return;
        }
    }
}

function reset() {

    board = ['', '', '', '', '', '', '', '', ''];
    turn = '⚽';
    winner = false;
    tie = false;

    for (let i = 0; i < squareEls.length; i++) {
        squareEls[i].textContent = '';
    }

    messageEl.textContent = `Player ${turn} Turn`;
}
/*----------------------------- Event Listeners -----------------------------*/

for (let oneSquare of squareEls) {
    oneSquare.addEventListener('click', handleClick);
}

resetBtnEl.addEventListener('click',reset)