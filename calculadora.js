const screen = document.querySelector('.screen');
const keys = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.btn[value="C"]');
const equalButton = document.querySelector('.btn[value="="]');
let operand1 = '';
let operand2 = '';
let currentOperator = '';

keys.forEach(key => {
    key.addEventListener('click', () => {
        const value = key.value;
        if (currentOperator === '') {
            operand1 += value;
            screen.value = operand1;
        } else {
            operand2 += value;
            screen.value = operand2;
        }
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (operand1 !== '') {
            currentOperator = operator.value;
        }
    });
});

clearButton.addEventListener('click', () => {
    clearCalculator();
});

equalButton.addEventListener('click', () => {
    if (operand1 !== '' && operand2 !== '') {
        const result = calculate(parseFloat(operand1), parseFloat(operand2), currentOperator);
        if (result === 'Error') {
            alert('¡Error! El resultado excede el límite permitido.');
            clearCalculator();
        } else {
            screen.value = result;
            operand1 = result.toString();
            operand2 = '';
            currentOperator = '';
        }
    }
});

function calculate(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 !== 0) {
                return operand1 / operand2;
            } else {
                return 'Error';
            }
        case 'log':
            if (operand1 > 0 && operand2 > 0) {
                return Math.log(operand1) / Math.log(operand2);
            } else {
                return 'Error';
            }
        case 'pow':
            if (operand1 >= 0 && operand2 >= 0) {
                return Math.pow(operand1, operand2);
            } else {
                return 'Error';
            }
        default:
            return 'Error';
    }
}

function clearCalculator() {
    operand1 = '';
    operand2 = '';
    currentOperator = '';
    screen.value = '';
}

// Funcionalidad adicional
screen.addEventListener('input', () => {
    const value = screen.value;
    if (!isNaN(value)) {
        operand1 = value;
    }
});

function calculate(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 !== 0) {
                return operand1 / operand2;
            } else {
                return 'Error';
            }
        case 'log':
            if (operand1 > 0 && operand2 > 0) {
                return Math.log(operand1) / Math.log(operand2);
            } else {
                return 'Error';
            }
        case 'pow':
            if (operand1 >= 0 && operand2 >= 0) {
                return Math.pow(operand1, operand2);
            } else {
                return 'Error';
            }
        default:
            return 'Error';
    }
}
