// Task 1
function givenDelimiter(array, delimiter) {
    console.log(array.join(delimiter));
}

// givenDelimiter([
//     'One',
//     'Two',
//     'Three',
//     'Four',
//     'Five'],
//     '-');

// givenDelimiter([
//     'How about no?',
//     'I',
//     'will',
//     'not',
//     'do',
//     'it!'],
//     '_');


// Task 2
function nElement(array, step) {
    return array.filter((element, index) => index % step == 0);
}

// function nElement(array, step) {
//     let result = [];
//     for (let i = 0; i < array.length; i += step) {
//         result.push(array[i]);
//     }

//     return result;
// }
// console.log(nElement([
//     '5',
//     '20',
//     '31',
//     '4',
//     '20'],
//     2));

// Task 3
function addAndRemove(array) {
    let num = 0;
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let cmd = array[i];
        num++;
        if (cmd === 'add') {
            result.push(num);
        } else {
            result.pop();
        }
    }

    if (result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

// addAndRemove([
//     'add',
//     'add',
//     'add',
//     'add']
// );
// addAndRemove([
//     'add',
//     'add',
//     'remove',
//     'add',
//     'add']);

// Task 4
function rotateArray(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let currNum = array.pop();
        array.unshift(currNum);
    }

    console.log(array.join(' '));
}

// rotateArray([
//     '1',
//     '2',
//     '3',
//     '4'],
//     2);
// rotateArray([
//     'Banana',
//     'Orange',
//     'Coconut',
//     'Apple'],
//     15);

// Task 5
function increasingArray(array) {
    let biggestNum = array[0];
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= biggestNum) {
            result.push(array[i]);
            biggestNum = array[i];
        }
    }

    return result;
}

// console.log(increasingArray([
//     1, 
//     3, 
//     8, 
//     4, 
//     10, 
//     12, 
//     3, 
//     2, 
//     24]));

// Task 6
function listOfNames(array) {
    array.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1}.${array[i]}`);
    }
}

// listOfNames(["John", "Bob", "Christina", "Ema"]);

// Task 7
function sortingNumbers(array) {
    array.sort((a, b) => a - b);
    let result = [];
    while (array.length != 0) {
        result.push(array.shift());
        result.push(array.pop());
    }

    return result;
}

// console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

// Task 8
function twoCriteriaSort(array) {
    array.sort(secondSort);

    function secondSort(current, next) {
        if (current.length === next.length) {
            return current.localeCompare(next);
        }
        return current.length - next.length;
    }

    console.log(array.join(`\n`));
}

// twoCriteriaSort([
//     'Isacc',
//     'Theodor',
//     'Jack',
//     'Harrison',
//     'George']
// );

// Task 9
function magicMatrix(matrix) {
    let isMagical = true;

    for (let i = 0; i < matrix.length - 1; i++) {
        let rowOneSum = 0;
        let rowTwoSum = 0;
        let colOneSum = 0;
        let colTwoSum = 0;


        for (let j = 0; j < matrix.length; j++) {
            colOneSum += matrix[j][i];
            colTwoSum += matrix[j][i + 1];
            rowOneSum += matrix[i][j];
            rowTwoSum += matrix[i + 1][j]
        }

        if (rowOneSum !== rowTwoSum || colOneSum !== colTwoSum) {
            isMagical = false;
        }
    }

    return isMagical;
}

// console.log(magicMatrix([
//     [4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]]));

// console.log(magicMatrix([
//     [11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]));

// Task 10
function ticTacToe(input){
    let arr = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let player = 'X';
 
    for (let line of input) {
        [currRow, currCol] = line.split(' ').map(Number);
 
        if (arr[currRow][currCol] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
 
        arr[currRow][currCol] = player;
 
        //check horizontal and vertical
        for (let i = 0; i < 3; i++) {
            if (
                arr[i][0] === player &&
                arr[i][1] === player &&
                arr[i][2] === player
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            } else if (
                arr[0][i] === player &&
                arr[1][i] === player &&
                arr[2][i] === player
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            }
        }
 
        //check left to right
        if (
            arr[0][0] === player &&
            arr[1][1] === player &&
            arr[2][2] === player
        ) {
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }
 
        //check right to left
        else if (
            arr[0][2] === player &&
            arr[1][1] === player &&
            arr[2][0] === player
        ) {
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }
 
        let theresFalse = false;
 
        for (let row = 0; row < arr.length; row++) {
            if (arr[row].includes(false)) {
                theresFalse = true;
            }
        }
 
        if (!theresFalse) {
            console.log('The game ended! Nobody wins :(');
            printMatrix();
            return;
        }
 
        player = player === 'X' ? 'O' : 'X';
    }
 
    function printMatrix() {
        for (let row = 0; row < arr.length; row++) {
            console.log(arr[row].join('\t'));
        }
    }
}

// ticTacToe(["0 1",
// "0 0",
// "0 2", 
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"]);

// Task 13
function spiralMatrix(row, col) {
    let result = Array(row).fill().map(() => Array(col).fill());
    
    let num = 1;
    let startRow = 0;
    let endRow = row - 1;
    let startCol = 0;
    let endCol = col - 1;

    while (startRow <= endRow && startCol <= endCol) {
        // fills top row
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = num++;
        }
        startRow ++;

        // fills right column
        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = num++;
        }
        endCol--;

        // fills bottom row
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = num++;
        }
        endRow--;

        // fills left column
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = num++;
        }
        startCol++;
    }

    result.forEach((row) => console.log(row.join(' ')));   
}

// spiralMatrix(5,5);

