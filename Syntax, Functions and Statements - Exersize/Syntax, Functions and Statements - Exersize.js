// Task 1
function fruit(fruitType, weight, pricePerKg) {
    const wightInKg = weight / 1000;
    const sumNeeded = wightInKg * pricePerKg;

    console.log(`I need $${sumNeeded.toFixed(2)} to buy ${wightInKg.toFixed(2)} kilograms ${fruitType}.`);
}

//fruit('orange', 2500, 1.80);
//fruit('apple', 1563, 2.35);

// Task 2
function gcd(num1, num2) {
    if (num2 > num1) {
        var temp = num1;
        num1 = num2;
        num2 = temp;
    }
    while (true) {
        if (num2 == 0) {
            return console.log(num1)
        }
        num1 %= num2;
        if (num1 == 0) {
            return console.log(num2)
        }
        num2 %= num1;
    }
}

//gcd(15, 5);
//gcd(2154, 458);

// Task 3
function sameNumbers(numbers) {
    let numbersAsString = String(numbers);
    const firstNum = numbersAsString[0];
    let isSame = true;
    let sumOfNumbers = 0;

    for (let i = 0; i < numbersAsString.length; i++) {
        if (firstNum != numbersAsString[i]) {
            isSame = false;
        }
        sumOfNumbers += Number(numbersAsString[i])
    }

    console.log(isSame);
    console.log(sumOfNumbers);
}

//sameNumbers(2222222);
//sameNumbers(1234);

// Task 4
function previousDay(year, month, day) {
    let date = new Date();
    date.setFullYear(year);
    date.setMonth(month - 1);
    date.setDate(day - 1);

    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
}

//previousDay(2016, 9, 30);
//previousDay(2015, 5, 10);


// Task 5
function timeToWalk(steps, footPrintInMeters, speed) {
    const distanceInMeters = steps * footPrintInMeters;
    const meterPerSecond = speed / 3.6;
    const restTime = Math.floor(distanceInMeters / 500) * 60;
    const time = distanceInMeters / meterPerSecond + restTime;

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60);
    const seconds = Math.round(time % 60);

    console.log(`${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
}

//timeToWalk(4000, 0.60, 5);
//timeToWalk(2564, 0.70, 5.5);

// Task 6
function roadRadar(speed, area) {
    let speedLimit = 0;
    switch (area) {
        case `residential`: speedLimit = 20;
            break;
        case `city`: speedLimit = 50;
            break;
        case `interstate`: speedLimit = 90;
            break;
        case `motorway`: speedLimit = 130;
            break;
    }

    let speedDifference = speed - speedLimit;

    if (speedDifference <= 0) {
        return console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }

    let status = '';

    if (speedDifference <= 20) {
        status = 'speeding';
    }else if(speedDifference >= 20 && speedDifference <= 40){
        status = 'excessive speeding';
    }else{
        status = 'reckless driving';
    }

    return console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
}

//roadRadar(40, 'city');
//roadRadar(21, 'residential');
//roadRadar(120, 'interstate');
//roadRadar(200, 'motorway');


// Task 7
function cookingByNumber(...data){
    let num = Number(data.shift());

    const funcShelf = {
        chop() { num /= 2 },
        dice() { num = Math.sqrt(num) },
        spice() { num += 1 },
        bake() { num *= 3 },
        fillet() { num -= num * 0.2 },
    }

    data.forEach(cmd => { funcShelf[cmd](), console.log(num) });
}

//cookingByNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');
//cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

// Task 8
function validityChecker(x1, y1, x2, y2){
    function isValid(x1, y1, x2, y2){
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        if (Number.isInteger(distance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    isValid(x1, y1, 0, 0)
    isValid(x2, y2, 0, 0)
    isValid(x1, y1, x2, y2)
}

//validityChecker(3, 0, 0, 4);
//validityChecker(2, 1, 1, 1);


// Task 9
function wordUppercase(words){
    const regex = /[A-z0-9]+/g;
    let result = words.match(regex);
    console.log(result.join(', ').toUpperCase());
}

wordUppercase('Hi, how are you?');
wordUppercase(`hello`);