
const boards = [[
    4, 7, 9, 5, 6, 1, 2, 3, 8,
    3, 1, 6, 7, 8, 2, 4, 9, 5,
    8, 5, 2, 9, 4, 3, 7, 6, 1,
    7, 3, 1, 2, 5, 6, 9, 8, 4,
    9, 6, 8, 4, 1, 7, 3, 5, 2,
    5, 2, 4, 8, 3, 9, 6, 1, 7,
    2, 4, 5, 3, 9, 8, 1, 7, 6,
    1, 8, 3, 6, 7, 4, 5, 2, 9,
    6, 9, 7, 1, 2, 5, 8, 4, 3
], [
    4, 7, 9, 5, 6, 1, 2, 3, 8,
    3, 1, 6, 7, 8, 2, 4, 9, 5,
    8, 5, 2, 9, 4, 3, 7, 6, 1,
    7, 3, 1, 2, 5, 6, 9, 8, 4,
    9, 6, 8, 4, 1, 7, 3, 5, 2,
    5, 2, 4, 8, 3, 9, 6, 1, 7,
    2, 4, 5, 3, 9, 8, 1, 7, 6,
    1, 8, 3, 6, 7, 4, 5, 2, 9,
    6, 9, 7, 1, 2, 5, 8, 4, 3
], [
    5, 3, 4, 6, 7, 8, 9, 1, 2,
    6, 7, 2, 1, 9, 5, 3, 4, 8,
    1, 9, 8, 3, 4, 2, 5, 6, 7,
    8, 5, 9, 7, 6, 1, 4, 2, 3,
    4, 2, 6, 8, 5, 3, 7, 9, 1,
    7, 1, 3, 9, 2, 4, 8, 5, 6,
    9, 6, 1, 5, 3, 7, 2, 8, 4,
    2, 8, 7, 4, 1, 9, 6, 3, 5,
    3, 4, 5, 2, 8, 6, 1, 7, 9
], [
    5, 3, 4, 6, 7, 8, 9, 1, 2,
    6, 7, 2, 1, 9, 5, 3, 4, 8,
    1, 9, 8, 3, 4, 2, 5, 6, 7,
    8, 5, 9, 7, 6, 1, 4, 2, 3,
    4, 2, 6, 8, 5, 3, 7, 9, 1,
    7, 1, 3, 9, 2, 4, 8, 5, 6,
    9, 6, 1, 5, 3, 7, 2, 8, 4,
    2, 8, 7, 4, 1, 9, 6, 3, 5,
    3, 4, 5, 2, 8, 6, 1, 7, 9
]];


var cell;
var gameBoard, solvedBoard;
var table = document.getElementById("table");
function getRandom(max) {
    return Math.floor(Math.random() * max);
}
const
    easy = 20,
    medium = 40,
    hard = 60;
function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function generateGameBoard(diff) {
    randBoard = getRandom(4);
    gameBoard = boards[getRandom(boards.length)].slice();
    solvedBoard = gameBoard.slice();
    let index;
    let count = 0;
    while (count < diff) {
        //debugger;
        index = getRandom(gameBoard.length);
        if (gameBoard[index] != "") {
            gameBoard[index] = "";
            count++;
        }

    }
    console.log(count);
    return gameBoard
}
function populateEasyBoard() {
    gameBoard = generateGameBoard(easy);
    printBoard();

}
function populatemediumBoard() {
    gameBoard = generateGameBoard(medium);
    printBoard();

}
function populatehardBoard() {
    gameBoard = generateGameBoard(hard);
    printBoard();

}
function printBoard() {
    for (var r = 0; r < 9; r++) {
        for (var c = 0; c < 9; c++) {
            cell= table.rows[r].cells[c].firstChild;
            cell.setAttribute("disabled",true);
            cell.value = gameBoard[r * 9 + c];
            // debugger;
            if(cell.value==""){
                cell.removeAttribute("disabled");
            }
        }
    }
}
populateEasyBoard();

function checkBoard() {

    table = document.getElementById("table");
    for (var r = 0; r < 9; r++) {
        for (var c = 0; c < 9; c++) {
            table.rows[r].cells[c].firstChild.style.backgroundColor = "White";
            if (table.rows[r].cells[c].firstChild.value != solvedBoard[r * 9 + c]) {
                table.rows[r].cells[c].firstChild.style.backgroundColor = "Red";
            }
        }
    }
}





