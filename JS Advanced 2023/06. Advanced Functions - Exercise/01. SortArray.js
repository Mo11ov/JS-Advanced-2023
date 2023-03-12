function sortArray(array, sorting) {
    if (sorting === 'asc') {
        array.sort((a, b) => a - b);
    } else {
        array.sort((a, b) => b - a);
    }

    return array;
}

function sort(array, sorting) {
    const sortedArray = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,
    };

    return array.sort(sortedArray[sorting]);
}

function arraySort(array, sorting) {
    return array.sort((a, b) => sorting === 'asc' ? a - b : b - a);
}

console.log(arraySort([14, 7, 17, 6, 8], 'asc'));
console.log(arraySort([14, 7, 17, 6, 8], 'desc'));
