//file system

const
    easy = 20,
    medium = 40,
    hard = 60;
var lastHint = undefined;
// Check that user exist
function checkUser() {
    let correctUser = "abcd";
    let user = document.getElementById("username").value;
    let userMsg = document.getElementById("userCheck");
    if (user != correctUser) {
        userMsg.textContent = "Invalid User";
        userMsg.style.color = "red";
    } else {
        userMsg.textContent = "";
    }
}

// chaeck that password exist
function checkPass() {
    let correctPass = "1234";
    let password = document.getElementById("pass").value;
    let passMsg = document.getElementById("passcheck");
    if (password != correctPass) {
        passMsg.textContent = "Invalid Password!";
        passMsg.style.color = "red";
    } else {
        passMsg.textContent = "";

    }
}

// Enter  to second page
function enterCheck() {
    let userMsg = document.getElementById("userCheck");
    let passMsg = document.getElementById("passcheck");
    if (userMsg.textContent == "Invalid User" || passMsg.textContent == "Invalid Password!") {
        alert("invalid data try again");
    } else {
        location.replace("./index2.html");
    }
}

function triggerEnterBtn() {
    let password = document.getElementById("pass");
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        //   event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("enter").click();
    }
}

// While clicking easy btn redirect to page 3 and populate board to easy level

function redirectToEasyBoard() {
    window.location.href = "./index3.html#easy"
}

// While clicking medium  btn redirect to page 3 and populate board to medume level
function redirectToMedBoard() {
    window.location.href = "./index3.html#medium"
}

// While clicking hard btn redirect to page 3 and populate board to hard level
function redirectToHardBoard() {
    window.location.href = "./index3.html#hard"

}


var boards=[];
// function errorHandler(e) {

//     debugger;


//     console.log('Error: ' + e.code);
// }

// function initFS() {
//     window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
//     window.requestFileSystem(window.TEMPORARY, 50 * 1024 /*50 KB*/, onInitFs, errorHandler);
// }
// function onInitFs(fs) {

//     fs.root.getFile('sudoku.txt', {}, function (fileEntry) {

//         // Get a File object representing the file,
//         // then use FileReader to read its contents.
//         fileEntry.file(function (file) {
//             var reader = new FileReader();

//             reader.onloadend = function (e) {
//                 let strs = this.resultsplit(/[\r\n]+/g);
//                 for (let i = 0; i < strs.length; i++) {
//                     debugger;
//                     boards.push(strs[i].split(""));
//                 }
//             };

//             reader.readAsText(file);
//         }, errorHandler);

//     }, errorHandler);

// }


var cell;
var gameBoard, solvedBoard, testBoard;
//get all inputs in order as 1D array
var table = Array.prototype.map.call(document.querySelectorAll('#table tr td input'), function (input) {
    return input;
});
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
    //solvedBoard = boards[getRandom(boards.length)].slice();
    solvedBoard = solve(new Array(81).fill(0));
    gameBoard = removeCells(solvedBoard.slice(), diff);
    return gameBoard
}
function populateEasyBoard() {
    gameBoard = generateGameBoard(easy);
    printBoard();

}
function populateMediumBoard() {
    gameBoard = generateGameBoard(medium);
    printBoard();

}
function populateHardBoard() {
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
// function sleep(miliseconds) {
//     var currentTime = new Date().getTime();
//     var checkTime = new Date().getTime();
//     while (currentTime + miliseconds >= checkTime) {
//         checkTime=new Date().getTime();
//     }
// }
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
//Cheating here, take random empty cell and put the solved value in it, no calculations required, we already have the solved value
// function solveToEnd() {
//     let leftToSolve = gameBoard.filter((cell) => cell == "").length;
//     for (let i = 0; i < leftToSolve; i++) {

//         sleep(1000);
//         hint();
//     }
// }
function hint() {
    let emptyInds = gameBoard.map((val, i) => {
        if (val == "") { return i; }
    }).filter((index) => index != undefined);
    if (emptyInds.length != 0) {
        if (lastHint != undefined) {
            lastHint.style.backgroundColor = "white";
        }
        let i = emptyInds[getRandom(emptyInds.length)];
        lastHint = table[i];
        lastHint.value = gameBoard[i] = solvedBoard[i];
        lastHint.style.backgroundColor = "green";
    }
    else {
        checkBoard();
    }
}
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
        // testBoard = Array.prototype.map.call(document.querySelectorAll('#table tr td input'), function (input) {
        //     return input;
        // });
        // //do on all input cells
        // testBoard.forEach((cell) => {
        //     //green is the color of victory, also prevent checks and changes
        //     cell.style.backgroundColor = "#00FF00";
        //     cell.setAttribute("disabled", true);
        //     document.getElementById("check").setAttribute("disabled", true);
        // });
        alert("Congradulations!");
        location.replace("./index2.html");


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
function pageLoad() {
    switch (window.location.hash) {

        case "#easy": populateEasyBoard();
            break;
        case "#medium": populateMediumBoard();
            break;
        case "#hard": populateHardBoard();
            break;
        default: populateEasyBoard();
            break;
    }
}
pageLoad();
initFS();