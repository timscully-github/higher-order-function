// example of a higher order function

// this function uses the input and result from other functions by calling it as a parameter
function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

console.log(calculator(3,4,multiply));
