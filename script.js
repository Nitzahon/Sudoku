//difficulty
const
    easy = 20,
    medium = 40,
    hard = 60;
//array to hold solved sudoku if premade chosen
var boards = [];
var gameBoard, solvedBoard, testBoard, table;
//string containing premade sudoku puzzles
const generatedboards = "523968417961347825487512396879154263342896571156723948638479152214685739795231684 289547613157683429463912758714829536528376941936154287871265394345798162692431875 185269734297435861346817592453186279912753648678942153524691387831574926769328415 915764328628139547437825916891672453356491782274583169742956831169348275583217694 279513468485967132613842759597421386361758294842639517756184923938275641124396875 549168273238754916176239548453692187897341625621587439782915364964823751315476892 597841236832679154146532798613498572754263819289715643428957361971386425365124987 827561943645793218931248756562174389174839625389625471256917834713486592498352167 435127869682493571791865234974518623816239745253674198147352986528946317369781452 839547126765312948421986375182759463576423891943168257258634719317295684694871532 713246589489753621256189437194627853538914276627835194941578362365492718872361945 563281479491673825287945613179524368342768591658319742824136957735492186916857234 953846217417592368268137495725918634694723851381465972549381726872659143136274589 796154328253687914418923675824736591175249836639815247547398162362571489981462753 198345267537826149642971583281769435459183672376452918963518724725634891814297356 163475982472839561589162473936258147845617239217394856628741395754923618391586724 697354182285961473134782965872645319469137528351298647528419736943876251716523894 152974683793865124486312795278641539364259871519738462947183256831526947625497318 854976321726831549319245768695128437172394856438657192267413985941582673583769214 342895617176423895859716243435678129928541736617239584564982371293167458781354962 857436921396821745142975836789642153523187694461593287218754369974368512635219478 468359712325167849179842563516274398842693175793581624257436981634918257981725436 172938465583462719946715832769541283854326971321897546215684397437159628698273154 657493128243518679918726453792634581185279364364185792871352946526941837439867215 653291874798634251421857963247965138165483729839712645382579416576148392914326587 814579362973462851652831749567283194421697538389145627748956213196328475235714986 271689453489235176635174892742351689398462517156798234867523941913846725524917368 876214395213597486954863217489172563162358749537946128325489671748631952691725834 374862591192735648658149372267918435413256789589374126946523817831697254725481963 931587264274369815865412793659728431382145679417936528543271986126894357798653142 235184967618739254497256813123867549859342671746915328982671435561493782374528196 819256347425379816763841529142783965598164273637592481986437152274915638351628794 793861452245937861681425793937516284452798316816342975169283547378154629524679138 165472893734985621928613475571328946483169752692754318819537264346291587257846139 654913827381726459729584613176235948293648175548179236435892761912367584867451392 189564237467382591325719468614895372938247615572631849841956723793428156256173984 365271894872945163491863527657124389184397256239586471548739612716452938923618745 928713564176459238345628791517294683864137925239586417752361849681945372493872156 652713849873549216149826357324687591916452783785391462298135674437968125561274938 514698237872453961369721854948167325125389746637542198751934682296875413483216579 689375124234916578715248936462731895953862417871459362127583649398624751546197283 983426751542317986176589423865274319294138567317695248658743192729851634431962875 358476219269315748174289365746952831523861497981734526435697182612548973897123654 917436258543821967268597143329685471874219635651743892782954316436172589195368724 463718952257493618819625437785164329642359781931872564594286173378541296126937845 256173948749862315381594276578341629913256784462987531135628497894735162627419853 372941685645382917198675423726198534834756291951423768589234176213567849467819352 681745293742839615593261874937658142218974356456123987874312569369587421125496738 674852193591437862283619475415286937869374251327591684156748329938125746742963518 529876431187324965463951728958167342271435689634289517396512874842793156715648293 214835679857916324639274158923568417165497283748123965386742591471659832592381746 594261837628537914317849562961482753782953146435716298849325671153678429276194385 476835912521649738938712465269371584347598621815426397194253876653187249782964153 685472193321985764974631285592713648816249537743856921439127856257368419168594372 874395216256718943319642587798231654145869372632574198461983725923457861587126439 962187354751643892834952617297365148548721963613894275386579421479218536125436789 291354678648792315735681249412875936853169724976243581527918463389426157164537892 586179423431562978927348156368217594275894361194635782842753619653921847719486235 915238647436917582287654193741586329659423871823179465572861934198342756364795218 743265819958413276612879534237694158596381742481752693374126985869537421125948367 124857369658394217397216548986742153571963482432185976249578631863421795715639824 946217583231584697587639412493751268812946735675823941158462379369175824724398156 279685143834271695651394782495736218182549376763128954517462839328957461946813527 712954638563812497984637521639471285278593146451286973125348769396725814847169352 574138296136952487829467315948715632712346859653289741261893574395674128487521963 824716359137958426569243781492381675785469132316527948648172593253694817971835264 481356972652497138379182546947268315126534789538719264865973421293641857714825693 429873156316425987587169243835617492672984531194532678963741825741258369258396714 957361284486725139213489756195846327734512698628973415569134872841297563372658941 184237965379645812652198734496512387237986541815374296541823679963751428728469153 853769124672814395914532687436925871295178436781346259327651948148297563569483712 371682954658941372294573681423715896569438127187269543815327469736894215942156738 127348695689175423543692718751264389836951247294783156478516932912837564365429871 893261745516497823427835619684952371975318462231746958369124587158673294742589136 931865427564237198782491365879516243125743689643928751398672514416359872257184936 258196734794235861316784529871469352549327618623518947462873195137952486985641273 869251473723649158154738269285394716971826345346517892492163587518972634637485921 316258947578419632294367851467132589125894376839576124751643298983721465642985713 517632498439875162286941537961487325745326819328159746193568274874293651652714983 312854976765392814894716523259481367471635298683279145136948752547123689928567431 157632894432981756896574123329168547641753982785249631268315479513497268974826315 912635874645897123738412569173526948896174235254983716389741652461258397527369481 425836971936471582187529346512694837798315264364782195271943658643158729859267413 519673824368412795724589631231957486687134952945826317873245169456391278192768543 153489267289176354647523891831792645796345182425618739518234976962857413374961528 324958176568471329971632854149826537783145962652793481216589743837214695495367218 561437298279685431483912675896574123147329586352861749624198357915743862738256914 465392871872165943391874256189247365237516498546983127758421639923658714614739582 573928146826314759194675382465831927312597468789462513638149275947256831251783694 853917462261384975497625138714892356635471289982563741579236814326148597148759623 391675482254918376876234195918357624427861953563492817149526738785143269632789541 275486391941357268386129547462931785793845612158762934619274853537618429824593176 978451236465392781132867549546928173291573864783614952829736415314285697657149328 142859673398716542756423198674281935239567481815394267963172854527948316481635729 738526149946317825521948736697153284415289673382674951173895462264731598859462317 628437195594126378137895462981754236452963781376218549745681923819372654263549817 963582471274163958815947623526739184749821536381654297438215769192376845657498312 397186452681425937245793618719652384538914726462837591154269873873541269926378145 842713695965248317371695284586974123739821456124356978457169832293487561618532749 652179843897234651431865927326481795578692314914357286765948132149723568283516479"
//lastHint, used in hint
var lastHint = undefined;
// Check that user exist
var correctUser = "abcd";
var correctPass = "1234";
function checkUser() {

    let user = document.getElementById("username").value;
    let userMsg = document.getElementById("userCheck");
    userMsg.textContent = "Invalid User";
    userMsg.style.color = "red";
    if (user != correctUser) {
        userMsg.classList.remove("hidden");
        userMsg.textContent = "Invalid User";
    } else {
        userMsg.textContent = "";
        userMsg.classList.add("hidden");
    }
}

// check that password exist
function checkPass() {

    let password = document.getElementById("pass").value;
    let passMsg = document.getElementById("passcheck");
    passMsg.style.color = "red";
    if (password != correctPass) {
        passMsg.classList.remove("hidden");
        passMsg.textContent = "Invalid Password!";
    } else {
        passMsg.textContent = "";
        passMsg.classList.add("hidden");


    }
}
// Enter  to second page
function enterCheck() {
    checkUser();
    checkPass();
    let userMsg = document.getElementById("userCheck");
    let passMsg = document.getElementById("passcheck");
    if (userMsg.textContent == "Invalid User" || passMsg.textContent == "Invalid Password!") {
        alert("invalid data try again");
    } else {
        location.replace("./index2.html");
    }
}


// While clicking btn redirect to page 3 and populate board to level based on button value
function redirectBoard(diff) {
    let str = "./index3.html";
    switch (Number(diff.value)) {
        case easy:
            str += "#easy";
            break;
        case medium:
            str += "#medium";
            break;
        case hard:
            str += "#hard";
            break;
    }
    let radios = document.querySelector('input[name="boardType"]:checked').value;
    str = str + "&" + radios;
    location.replace(str);
}
//get random number 0-max not including
function getRandom(max) {
    return Math.floor(Math.random() * max);
}
//remove number of cells based on difficulty, all randomly
function removeCells(sudoku, diff) {
    let index;
    let count = 0;
    while (count < diff) {
        //random index
        index = getRandom(sudoku.length);
        //remove if not removed already, and advance
        if (sudoku[index] != "") {
            sudoku[index] = "";
            count++;
        }
    }
    return sudoku;
}
function generateGameBoard(diff) {
    //get solved board based on radio choice
    if (window.location.hash.split("&")[1] == "rng") {
        solvedBoard = solve(new Array(81).fill(0));
    }
    else {

        boards = generatedboards.split(" ");
        solvedBoard = boards[getRandom(boards.length)].split("");
    }
    gameBoard = removeCells(solvedBoard.slice(), diff);
    return gameBoard
}
//based on difficulty chosen, make new sudoku and print it in table
function populateBoard(diff) {
    gameBoard = generateGameBoard(diff);
    printBoard();

}
//star of game, fill the board with the sudoku with removed cells
function printBoard() {
    for (i = 0; i < 81; i++) {
        //add values io inputs
        table[i].style.backgroundColor = "white";
        table[i].value = gameBoard[i];
        //empty cells start enabled
        if (table[i].value != "") {
            table[i].setAttribute("disabled", true);
        }
        else {
            table[i].removeAttribute("disabled");
        }
    }

}

function hint() {
    //get array containing the index of every empty space
    let emptyInds = gameBoard.map((val, i) => {
        if (val == "") { return i; }
    }).filter((index) => index != undefined);
    if (emptyInds.length != 0) {
        //lastHint would be green if hint was run previously, fix it
        if (lastHint != undefined) {
            lastHint.style.backgroundColor = "white";
        }
        //get random empty index
        let i = emptyInds[getRandom(emptyInds.length)];
        lastHint = table[i]; //get the cell indexed
        lastHint.value = gameBoard[i] = solvedBoard[i]; //add solution from solved board
        lastHint.style.backgroundColor = "green"; //hints are green, green is good
    }
    else {
        checkBoard(); //if board is full, run checkBoard
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

        alert("Congradulations! You have completed the Sudoku challenge, why not try again?");
        location.replace("./index2.html"); //back to page 2 after message


    }
    else {
        let emp = 0, wrg = 0;
        for (let i = 0; i < 81; i++) {
            //only check enabled inputs
            if (!testBoard[0][i].disabled) {
                if (testBoard[1][i] != solvedBoard[i]) {
                    //mark if value does not match solved
                    testBoard[0][i].style.backgroundColor = "Red";
                    if (testBoard[0][i].value == "") {
                        emp++; //count empty spaces
                    }
                    else {
                        wrg++; //count wrong spaces
                    }
                }
                else {
                    if (testBoard[0][i].style.backgroundColor != "White") {
                        testBoard[0][i].style.backgroundColor = "White"; //if value matches make sure it's white
                    }
                }
            }

        }
        //alert user to errors
        alert(`Found ${emp} empty spaces, and ${wrg} misplaced numbers.`);
    }
}
//Clear input backgrounds
function clearBG(input) {
    //only change non white to white, otherwise redundant
    if (input.style.backgroundColor != "white") {
        input.style.backgroundColor = "white";
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
    // row/3 = block vertical, col/3 = block horizontal
    return Math.floor(returnRow(cell) / 3) * 3 + Math.floor(returnCol(cell) / 3);
}

// given a number, a row and a sudoku, returns true if the number can be placed in the row
function isPossibleRow(number, row, sudoku) {
    for (var i = 0; i <= 8; i++) {
        if (sudoku[row * 9 + i] == number) {
            //false if number exists in row
            return false;
        }
    }
    return true;
}

// given a number, a column and a sudoku, returns true if the number can be placed in the column
function isPossibleCol(number, col, sudoku) {
    for (var i = 0; i <= 8; i++) {
        if (sudoku[col + 9 * i] == number) {
            //false if number exists in col            
            return false;
        }
    }
    return true;
}

// given a number, a 3x3 block and a sudoku, returns true if the number can be placed in the block
function isPossibleBlock(number, block, sudoku) {
    for (var i = 0; i <= 8; i++) {
        //itterate over block
        if (sudoku[Math.floor(block / 3) * 27 + i % 3 + 9 * Math.floor(i / 3) + 3 * (block % 3)] == number) {
            //false if number exists in block
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
    var rightSequence = "123456789";
    var rowTemp = new Array();
    //turn chosen row into array and sort
    for (var i = 0; i <= 8; i++) {
        rowTemp[i] = sudoku[row * 9 + i];
    }
    rowTemp.sort();
    //compare as string
    return rowTemp.join("") == rightSequence;
}

// given a column and a sudoku, returns true if it's a legal column
function isCorrectCol(col, sudoku) {
    var rightSequence = "123456789";
    var colTemp = new Array();
    //turn chosen col into array and sort
    for (var i = 0; i <= 8; i++) {
        colTemp[i] = sudoku[col + i * 9];
    }
    colTemp.sort();
    //compare as string
    return colTemp.join("") == rightSequence;
}

// given a 3x3 block and a sudoku, returns true if it's a legal block 
function isCorrectBlock(block, sudoku) {
    var rightSequence = "123456789";
    var blockTemp = new Array();
    for (var i = 0; i <= 8; i++) {
        //turn chosen block into array and sort
        blockTemp[i] = sudoku[Math.floor(block / 3) * 27 + i % 3 + 9 * Math.floor(i / 3) + 3 * (block % 3)];
    }
    blockTemp.sort();
    //compare as string
    return blockTemp.join("") == rightSequence;
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
        //check for every num 1-9 if it is a possible number in row, col, block 
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
        if (sudoku[i] == 0 || sudoku[i] == "") {
            possible[i] = new Array();
            //based on the cells in row, col and block, get all possible numbers for cell
            possible[i] = determinePossibleValues(i, sudoku);
            if (possible[i].length == 0) {
                //if no possibility exists, and the cell is empty, that is a problem, function returns false
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
        //if (attemptArray[i] != number) {  ** previous method
        //newArray.unshift(attemptArray[i]);
        if (attemptArray[i] == number) { //**new method
            newArray = attemptArray.splice(i, 1); //newArray = attemptArray without element i
        }
    }
    return newArray;
}

// given a two dimension array of possible values, returns the index of a cell where there are the least possible numbers to choose from
function nextRandom(possible) {
    var max = 9;
    var minChoices = 0;
    for (var i = 0; i < 81; i++) {
        if (possible[i] != undefined) {
            if ((possible[i].length <= max) && (possible[i].length > 0)) {
                max = possible[i].length; //keep updated with shortest array length
                minChoices = i; //keep updated with shortest array length index
            }
        }
    }
    return minChoices;
}

// given a sudoku, solves it
function solve(sudoku) {
    var saved = new Array();
    var savedSudoku = new Array();
    var nextMove;
    var whatToTry;
    var attempt;
    //check if sudoku is solved 100%
    while (!isSolvedSudoku(sudoku)) {

        //get all possible values for every cell in sudoku array
        nextMove = scanSudokuForUnique(sudoku);
        //if an empty cell with no valid posibilities exists, go back to the last move made on saved
        if (nextMove == false) {
            nextMove = saved.pop();
            sudoku = savedSudoku.pop();
        }
        //get the index of the empty cell with the least possible number of choices
        whatToTry = nextRandom(nextMove);
        //get one of the possibilities that can go into said empty cell
        attempt = determineRandomPossibleValue(nextMove, whatToTry);
        //remove the possibility from the list of possibilities, save the 2D array of possibilities and the pre changed board
        if (nextMove[whatToTry].length > 1) {
            nextMove[whatToTry] = removeAttempt(nextMove[whatToTry], attempt);
            saved.push(nextMove.slice());
            savedSudoku.push(sudoku.slice());
        }
        //change the board
        sudoku[whatToTry] = attempt;
    }
    //return board
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
//Called when page loads, if index3 load board based on difficulty and add event listener
function pageLoad() {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    switch (page) {
        case "index2.html":
            let str = correctUser
            document.getElementById("guestName").innerHTML = "Welcome " + str;
            break;
        case "index3.html":
            //get all inputs in order as 1D array
            table = Array.prototype.map.call(document.querySelectorAll('#table tr td input'), function (input) {
                return input;
            });
            //check hashcode for difficulty
            switch (window.location.hash.split("&")[0]) {

                case "#easy": populateBoard(easy);
                    break;
                case "#medium": populateBoard(medium);
                    break;
                case "#hard": populateBoard(hard);
                    break;
                default: populateBoard(easy);
                    break;
            }
            break;
    }
    //Enter keypress event listener
    document.addEventListener('keyup', (e) => {
        if (e.keyCode == 13) {
            let path = window.location.pathname;
            let page = path.split("/").pop();
            switch (page) {
                case "index1.html":
                    enterCheck();
                    break;
                case "index2.html":
                    redirectBoard(getElementById("easy"));
                    break;
                case "index3.html":
                    checkBoard();
                    break;
            }
        }
    });
}
pageLoad();
