function add(number) {

    const increment = function (n) {
        number += n;
        return increment;
    };

    increment.toString = function () { 
        return number; 
    };

    return increment;
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());