let currentInput = '';
let operation = null;
let previousInput = '';

function appendNumber(number) {
    if (operation !== null && currentInput === previousInput) {
        currentInput = '';
    }
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    operation = op;
    previousInput = currentInput;
}

function clearDisplay() {
    currentInput = '';
    operation = null;
    previousInput = '';
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operation = null;
    previousInput = '';
    updateDisplay();
}

// Existing JavaScript functions

let likeCount = 0;
let dislikeCount = 0;

function like() {
    likeCount++;
    document.getElementById('likeCount').innerText = likeCount;
}

function dislike() {
    dislikeCount++;
    document.getElementById('dislikeCount').innerText = dislikeCount;
}

// Existing JavaScript functions

function changeTheme(theme) {
    const body = document.body;
    const calculator = document.querySelector('.calculator');
    if (theme === 'dark') {
        body.style.backgroundColor = '#333';
        body.style.color = '#fff';
        calculator.style.backgroundColor = '#555';
        calculator.style.color = '#fff';
    } else {
        body.style.backgroundColor = '#f0f0f0';
        body.style.color = '#333';
        calculator.style.backgroundColor = '#fff';
        calculator.style.color = '#000';
    }
}

function changeMode(mode) {
    console.log("Calculator mode changed to: " + mode);
    // Add code to change calculator mode
}




function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
