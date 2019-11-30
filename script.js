
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
var gameBoard, solvedBoard, testBoard;
//get all inputs in order as 1D array
var table = Array.prototype.map.call(document.querySelectorAll('#table tr td input'), function (input) {
    return input;
});
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
function removeCells(sudoku, diff) {
    let index;
    let count = 0;
    while (count < diff) {
        index = getRandom(sudoku.length);
        if (sudoku[index] != "") {
            sudoku[index] = "";
            count++;
        }
    }
    return sudoku;
}
function generateGameBoard(diff) {
    randBoard = getRandom(4);
    gameBoard = boards[getRandom(boards.length)].slice();
    solvedBoard = gameBoard.slice();
    gameBoard = removeCells(gameBoard, diff);
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
    document.getElementById("check").removeAttribute("disabled");
    for (i = 0; i < 81; i++) {
        table[i].style.backgroundColor = "white";
        table[i].setAttribute("disabled", true);
        table[i].value = gameBoard[i];
        if (table[i].value == "") {
            table[i].removeAttribute("disabled");
        }
    }

}
populateEasyBoard();

function checkBoard() {
    //push table elements and element values into array to test sudoku and color and wrong tiles
    testBoard = [];
    testBoard.push(Array.prototype.map.call(document.querySelectorAll('#table tr td input'), function (input) {
        return input;
    }));
    testBoard.push(Array.prototype.map.call(testBoard[0], function (cell) {
        return cell.value;
    }));
    //check if solved
    if (isSolvedSudoku(testBoard[1])) {
        //push all inputs to array
        testBoard = Array.prototype.map.call(document.querySelectorAll('#table tr td input'), function (input) {
            return input;
        });
        //do on all input cells
        testBoard.forEach((cell) => {
            //green is the color of victory, also prevent checks and changes
            cell.style.backgroundColor = "#00FF00";
            cell.setAttribute("disabled", true);
            document.getElementById("check").setAttribute("disabled", true);
        });
        alert("Congradulations!");

    }
    else {
        alert("Errors found");
        for (let i = 0; i < 81; i++) {
            if (!testBoard[0][i].disabled) {
                testBoard[0][i].style.backgroundColor = "White";
                if (testBoard[1][i] != solvedBoard[i]) {
                    testBoard[0][i].style.backgroundColor = "Red";
                }
            }
        }
    }
}

// given a sudoku cell, returns the row
function returnRow(cell) {
    return Math.floor(cell / 9);
}

// given a sudoku cell, returns the column
function returnCol(cell) {
    return cell % 9;
}

// given a sudoku cell, returns the 3x3 block
function returnBlock(cell) {
    return Math.floor(returnRow(cell) / 3) * 3 + Math.floor(returnCol(cell) / 3);
}

// given a number, a row and a sudoku, returns true if the number can be placed in the row
function isPossibleRow(number, row, sudoku) {
    for (var i = 0; i <= 8; i++) {
        if (sudoku[row * 9 + i] == number) {
            return false;
        }
    }
    return true;
}

// given a number, a column and a sudoku, returns true if the number can be placed in the column
function isPossibleCol(number, col, sudoku) {
    for (var i = 0; i <= 8; i++) {
        if (sudoku[col + 9 * i] == number) {
            return false;
        }
    }
    return true;
}

// given a number, a 3x3 block and a sudoku, returns true if the number can be placed in the block
function isPossibleBlock(number, block, sudoku) {
    for (var i = 0; i <= 8; i++) {
        if (sudoku[Math.floor(block / 3) * 27 + i % 3 + 9 * Math.floor(i / 3) + 3 * (block % 3)] == number) {
            return false;
        }
    }
    return true;
}

// given a cell, a number and a sudoku, returns true if the number can be placed in the cell
function isPossibleNumber(cell, number, sudoku) {
    var row = returnRow(cell);
    var col = returnCol(cell);
    var block = returnBlock(cell);
    return isPossibleRow(number, row, sudoku) && isPossibleCol(number, col, sudoku) && isPossibleBlock(number, block, sudoku);
}

// given a row and a sudoku, returns true if it's a legal row
function isCorrectRow(row, sudoku) {
    var rightSequence = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
    var rowTemp = new Array();
    for (var i = 0; i <= 8; i++) {
        rowTemp[i] = sudoku[row * 9 + i];
    }
    rowTemp.sort();
    return rowTemp.join() == rightSequence.join();
}

// given a column and a sudoku, returns true if it's a legal column
function isCorrectCol(col, sudoku) {
    var rightSequence = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
    var colTemp = new Array();
    for (var i = 0; i <= 8; i++) {
        colTemp[i] = sudoku[col + i * 9];
    }
    colTemp.sort();
    return colTemp.join() == rightSequence.join();
}

// given a 3x3 block and a sudoku, returns true if it's a legal block 
function isCorrectBlock(block, sudoku) {
    var rightSequence = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
    var blockTemp = new Array();
    for (var i = 0; i <= 8; i++) {
        blockTemp[i] = sudoku[Math.floor(block / 3) * 27 + i % 3 + 9 * Math.floor(i / 3) + 3 * (block % 3)];
    }
    blockTemp.sort();
    return blockTemp.join() == rightSequence.join();
}

// given a sudoku, returns true if the sudoku is solved
function isSolvedSudoku(sudoku) {
    for (var i = 0; i <= 8; i++) {
        if (!isCorrectBlock(i, sudoku) || !isCorrectRow(i, sudoku) || !isCorrectCol(i, sudoku)) {
            return false;
        }
    }
    return true;
}

// given a cell and a sudoku, returns an array with all possible values we can write in the cell
function determinePossibleValues(cell, sudoku) {
    var possible = new Array();
    for (var i = 1; i <= 9; i++) {
        if (isPossibleNumber(cell, i, sudoku)) {
            possible.unshift(i);
        }
    }
    return possible;
}

// given an array of possible values assignable to a cell, returns a random value picked from the array
function determineRandomPossibleValue(possible, cell) {
    var randomPicked = Math.floor(Math.random() * possible[cell].length);
    return possible[cell][randomPicked];
}

// given a sudoku, returns a two dimension array with all possible values 
function scanSudokuForUnique(sudoku) {
    var possible = new Array();
    for (var i = 0; i <= 80; i++) {
        if (sudoku[i] == 0) {
            possible[i] = new Array();
            possible[i] = determinePossibleValues(i, sudoku);
            if (possible[i].length == 0) {
                return false;
            }
        }
    }
    return possible;
}

// given an array and a number, removes the number from the array
function removeAttempt(attemptArray, number) {
    var newArray = new Array();
    for (var i = 0; i < attemptArray.length; i++) {
        if (attemptArray[i] != number) {
            newArray.unshift(attemptArray[i]);
        }
    }
    return newArray;
}

// given a two dimension array of possible values, returns the index of a cell where there are the less possible numbers to choose from
function nextRandom(possible) {
    var max = 9;
    var minChoices = 0;
    for (var i = 0; i < 81; i++) {
        if (possible[i] != undefined) {
            if ((possible[i].length <= max) && (possible[i].length > 0)) {
                max = possible[i].length;
                minChoices = i;
            }
        }
    }
    return minChoices;
}

// given a sudoku, solves it
function solve(sudoku) {
    var saved = new Array();
    var savedSudoku = new Array();
    var i = 0;
    var nextMove;
    var whatToTry;
    var attempt;
    while (!isSolvedSudoku(sudoku)) {
        i++;
        nextMove = scanSudokuForUnique(sudoku);
        if (nextMove == false) {
            nextMove = saved.pop();
            sudoku = savedSudoku.pop();
        }
        whatToTry = nextRandom(nextMove);
        attempt = determineRandomPossibleValue(nextMove, whatToTry);
        if (nextMove[whatToTry].length > 1) {
            nextMove[whatToTry] = removeAttempt(nextMove[whatToTry], attempt);
            saved.push(nextMove.slice());
            savedSudoku.push(sudoku.slice());
        }
        sudoku[whatToTry] = attempt;
    }
    return sudoku;
}
// Recursive function to delete cells based on difficulty, not used but works acurrately
// function removeCells(sudoku, diff) {
//     for (let i = 0; i < diff; i++) {
//         sudoku = removeCell(sudoku, getRandom(81));
//     }
//     return sudoku;
// }
// function removeCell(sudoku, cell) {
//     if (sudoku[cell] == " ") {
//         return (removeCell(sudoku, getRandom(81)));
//     }
//     else {
//         sudoku[cell] = " ";
//         return sudoku;
//     }

// }
// given a solved sudoku and the number of steps, prints out the sudoku
function showSudoku(sudoku) {
    var sudokuText = "";
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            sudokuText += " ";
            sudokuText += sudoku[i * 9 + j];
            sudokuText += " ";
            if (j != 8) {
                sudokuText += "|";
            }
        }
        if (i != 8) {
            sudokuText += "\n---+---+---+---+---+---+---+---+---\n";
        }
    }
    console.log(sudokuText);
}



