// Task 1
function evenPosition(array) {
    let result = '';

    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            result += array[i] + ' ';
        }
    }

    console.log(result);
}

//evenPosition(['20', '30', '40', '50', '60']);
//evenPosition(['5', '10']);

// Task 2
function lastKNumbers(num1, num2) {
    let array = [1];
    const temp = num2;

    for (let i = 1; i < num1; i++) {
        let numToPush = 0;

        if (array.length <= num2) {
            num2 = array.length;
        }

        for (let j = 1; j <= num2; j++) {

            numToPush += array[array.length - j];
        }
        array.push(numToPush);
        num2 = temp;
    }

    return (array);
}

//console.log(lastKNumbers(6, 3));
//console.log(lastKNumbers(8, 2));

// Task 3
function sumFirstLast(array) {
    return console.log(Number(array[0]) + Number(array[array.length - 1]));
}

//sumFirstLast(['20', '30', '40']);
//sumFirstLast(['5', '10']);

// Task 4
function negativePositiveNums(array) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            newArr.unshift(array[i]);
        } else {
            newArr.push(array[i]);
        }
    }

    for (let i = 0; i < array.length; i++) {
        console.log(newArr[i]);
    }
}

//negativePositiveNums([7, -2, 8, 9]);
//negativePositiveNums([3, -2, 0, -1]);

// Task 05
function smallestTwoNumbers(array) {
    array.sort((a, b) => a - b);
    let result = array.slice(0, 2);

    console.log(result.join(' '));
}

//smallestTwoNumbers([30, 15, 50, 5]);
//smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

// Task 6
function biggerHalf(array) {
    array.sort((a, b) => a - b);
    const index = Math.floor(array.length / 2);
    let result = array.slice(index);

    return result;
}

//console.log(biggerHalf([4, 7, 2, 5]));
//console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));

// Taks 7
function pieceOfPie(array, startFlavor, endFlavor) {
    const startIndex = array.indexOf(startFlavor);
    const endIndex = array.indexOf(endFlavor) + 1;

    return array.slice(startIndex, endIndex);
}

// console.log(pieceOfPie(['Pumpkin Pie',
// 'Key Lime Pie',
// 'Cherry Pie',
// 'Lemon Meringue Pie',
// 'Sugar Cream Pie'],
// 'Key Lime Pie',
// 'Lemon Meringue Pie'));

// Task 8
function oddPositions(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 != 0) {
            newArr.push(array[i] * 2);
        }
    }

    return newArr.reverse();
}

// console.log(oddPositions([10, 15, 20, 25]));
// console.log(oddPositions([3, 0, 10, 4, 7, 3]));

// Task 9 
function biggestElement(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < matrix.length; i++) {
        if (biggestNum < findMaxValue(matrix[i])) {
            biggestNum = findMaxValue(matrix[i]);
        }
    }

    function findMaxValue(array) {
        return array.reduce((a, b) => Math.max(a, b));
    }

    console.log(biggestNum);
}

// biggestElement(
//     [[20, 50, 10],
//     [8, 33, 145]]);
// biggestElement(
//     [[3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]]);

// Task 10
function diagonalSum(matrix) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonal += matrix[i][i];
        secondDiagonal += matrix[i][matrix.length - i - 1];
    }

    console.log(firstDiagonal + ' ' + secondDiagonal);
}

// Task 11
function equalNeighbors(matrix) {
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        let row = i;
        for (let j = 0; j < matrix[row].length; j++) {
            let col = j;
            if (isInRange(matrix, row, col + 1) && matrix[row][col] == matrix[row][col + 1]) {
                count++;
            }
            if (isInRange(matrix, row + 1, col) && matrix[row][col] == matrix[row + 1][col]) {
                count++;
            }
        }
        
    }

    console.log(count);

    function isInRange(matrix, row, col){
        if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length) {
            return true;
        }
        return false;       
    }
}

// equalNeighbors([
//     ['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']]);

// equalNeighbors([
//     ['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']]);