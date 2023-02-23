function calculator() {
    let fisrtNum = null;
    let secondNum = null;
    let result = null;

    function init(field1, field2, resultField) {
        fisrtNum = document.querySelector(field1);
        secondNum = document.querySelector(field2);
        result = document.querySelector(resultField);
    }

    function add() {
        result.value = Number(fisrtNum.value) + Number(secondNum.value);
    }

    function subtract() {
        result.value = Number(fisrtNum.value) - Number(secondNum.value);
    }

    return {
        init,
        add,
        subtract,
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




