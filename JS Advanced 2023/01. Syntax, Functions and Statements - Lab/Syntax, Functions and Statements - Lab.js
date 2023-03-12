// Task 2
function stringLength(firstParam, secondParam, thirdParam){
    const total = firstParam + secondParam + thirdParam;

    console.log(total.length);
    console.log(Math.round(total.length/3));
}

//stringLength('chocolate', 'ice cream', 'cake')
//stringLength('pasta', '5', '22.3')

// Task 3
function largestNumber(num1, num2, num3){
    let result = num3;
    if(num1 > num2 && num1 > num3 ){
        result = num1;
    }else if(num2 > num1 && num2 > num3){
        result = num2;      
    }

    console.log(`The largest number is ${result}.`);
}

//largestNumber(5, -3, 16)
//largestNumber(-3, -5, -22.5)

// Task 4
function circleArea(arg){
    let result;
    let inputType = typeof(arg);

    if(inputType === 'number'){
        result = Math.pow(arg, 2) * Math.PI;
        console.log(result.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(arg)}.`)
    }

}

//circleArea(5)
//circleArea(`name`)

// Task 5
function mathOperations(num1, num2, operator){
    let result;
    switch(operator){
        case '+': result = num1 + num2
            break;
        case '-': result = num1 - num2
            break;
        case '/': result = num1 / num2
            break;
        case '*': result = num1 * num2
            break;
        case '**': result = num1 ** num2
            break; 
        case '%': result = num1 % num2
            break;     
    }

    console.log(result)
}

//mathOperations(5, 6, '+')
//mathOperations(3, 5.5, '*')

// Task 6
function sumOfNumbers(number1, number2){
     let num1 = Number(number1);
     let num2 = Number(number2);
     let result = 0;

     for(let i = num1; i <= num2; i++){
        result += i;
    }

     console.log(result)
}

//sumOfNumbers('1', '5' )
//sumOfNumbers('-8', '20')

// Task 7
function dayOfWeek(day){
    if(day === 'Monday'){
        console.log(1);
    }else if(day === 'Tuesday'){
        console.log(2);
    }else if(day === 'Wednesday'){
        console.log(3);
    }else if(day === 'Thursday'){
        console.log(4);
    }else if(day === 'Friday'){
        console.log(5);
    }else if(day === 'Saturday'){
        console.log(6);
    }else if(day === 'Sunday'){
        console.log(7);
    }else{
        console.log('error');
    }
}

//dayOfWeek('Monday');
//dayOfWeek('Friday');

function daysInMounth(mounth, year){
    const days = new Date();

    days.setFullYear(year);
    days.setMonth(days.getMonth() + mounth);
    days.setDate(0);

    console.log(days.getDate());
}

//daysInMounth(1, 2012);
//daysInMounth(2, 2021);

// Task 9
function printSquareOfStars(n) {
    const star = '* ';
    if (n === null || n === ' ' || n === 0) {
        for (let i = 0; i < 5; i++) {
            console.log(`${(star.repeat(5)).trim()}`);
        }
    } else {
        for (let i = 0; i < n; i++) {
            console.log(`${(star.repeat(n)).trim()}`);
        }
    }
}

//printSquareOfStars(6)

// Task 10
aggregateElements = (array) => {
    let numbersArray = array.map(Number);
 
    let sum = numbersArray.reduce((a, b) => a + b);
    let inverseValuesSum = numbersArray.reduce((a, b) => a + 1 / b, 0);    
    let stringConcat = numbersArray.join('');
 
    console.log(sum);
    console.log(inverseValuesSum);
    console.log(stringConcat);
}

//aggregateElements([1, 2, 3])
//aggregateElements([2, 4, 8, 16])
