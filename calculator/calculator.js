// calculator.js

// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Handle division by zero
    if (number2 === 0) {
        return "Error: Cannot divide by zero";
    }
    return number1 / number2;
}

// Helper function to get input values as numbers
function getInputNumbers() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    return { num1, num2 };
}

// Event listener for addition button
document.getElementById('add').addEventListener('click', function() {
    const { num1, num2 } = getInputNumbers();
    const result = add(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for subtraction button
document.getElementById('subtract').addEventListener('click', function() {
    const { num1, num2 } = getInputNumbers();
    const result = subtract(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for multiplication button
document.getElementById('multiply').addEventListener('click', function() {
    const { num1, num2 } = getInputNumbers();
    const result = multiply(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for division button
document.getElementById('divide').addEventListener('click', function() {
    const { num1, num2 } = getInputNumbers();
    const result = divide(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});