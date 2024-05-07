// Seleccionamos la pantalla y los botones de la calculadora
const screen = document.querySelector('.screen');
const keys = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.btn[value="C"]');
const equalButton = document.querySelector('.btn[value="="]');

// Inicializamos las variables para los operandos y el operador actual
let operand1 = '';
let operand2 = '';
let currentOperator = '';

// Agregamos un event listener a cada botón numérico
keys.forEach(key => {
    key.addEventListener('click', () => {
        const value = key.value;
// Si no hay operador actual, agregamos al primer operando
        if (currentOperator === '') {
            operand1 += value;
            screen.value = operand1;
        } else {
// Si hay operador actual, agregamos al segundo operando
            operand2 += value;
            screen.value = operand2;
        }
    });
});

// Agregamos un event listener a cada botón de operador
operators.forEach(operator => {
    operator.addEventListener('click', () => {
// Si hay un primer operando, actualizamos el operador actual
        if (operand1 !== '') {
            currentOperator = operator.value;
        }
    });
});

// Agregamos un event listener al botón de limpiar
clearButton.addEventListener('click', () => {
    clearCalculator();
});

// Agregamos un event listener al botón de igual
equalButton.addEventListener('click', () => {
// Si hay operandos válidos, calculamos el resultado
    if (operand1 !== '' && operand2 !== '') {
        const result = calculate(parseFloat(operand1), parseFloat(operand2), currentOperator);
// Si el resultado es 'Error', mostramos una alerta y limpiamos la calculadora
        if (result === 'Error') {
            alert('¡Error! El resultado excede el límite permitido.');
            clearCalculator();
        } else {
// Si el resultado es válido, lo mostramos en la pantalla y actualizamos los operandos y operador
            screen.value = result;
            operand1 = result.toString();
            operand2 = '';
            currentOperator = '';
        }
    }
});

// Función para calcular el resultado de la operación
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

// Función para limpiar la calculadora
function clearCalculator() {
    operand1 = '';
    operand2 = '';
    currentOperator = '';
    screen.value = '';
}

// Funcionalidad adicional: actualizar operand1 cuando se ingresa un valor en la pantalla
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
