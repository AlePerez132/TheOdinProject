//DOM Variables
//Grid Area for Buttons
document.querySelectorAll('.buttons > button[id]').forEach(btn => {
    btn.style.gridArea = btn.id;
});
//Operation Buttons
let result = document.getElementById("display");
let clearButton = document.getElementById("clear");
let equalsButton = document.getElementById("equals");
let addButton = document.getElementById("add");
let substractButton = document.getElementById("substract");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");
let decimalButton = document.getElementById("decimal");
let backspaceButton = document.getElementById("backspace");

//Number Buttons
let numberButtons = [];
for (let i = 0; i <= 9; i++) {
    numberButtons.push(document.getElementById(`number${i}`));
}

//Event Listeners for Number Buttons
numberButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        typeNumber(index);
    });
});

decimalButton.addEventListener("click", () => {
    if (result.innerText != "0" && !result.innerText.includes("."))
        typeNumber(".");
});

clearButton.addEventListener("click", () => {
    currentInput = "0";
    result.innerText = currentInput;
    operationButton = "";
    storedValue = "";
});

//En las operaciones, es importante que al hacer la primera operacion, o despues de un clear o =, devuelva el mismo valor
//Esto se consigue manipulando el valor de storedvalue en funcion de la operacion que se va a realizar

//para sumar, storedvalue debe valer 0 (ej: 0 + 8 = 8)
addButton.addEventListener("click", () => {
    if(booleanOperation) //para limitar operaciones consecutivas sin segundo operando
        return;
    if(storedValue == "")
        storedValue = 0;
    operationSign = "+";
    callingOperate();
});
//para multiplicar, storedvalue debe valer 1 (ej: 1 * 36 = 36)
multiplyButton.addEventListener("click", () => {
    if(booleanOperation)
        return;
    if(storedValue == ""){
        storedValue = 1;
    }
    operationSign = "*";
    callingOperate();
});
//para dividir, debe valer el cuadrado del numero inicial (ej: 16 / 4 = 4)
divideButton.addEventListener("click", () => {
    if(booleanOperation)
        return;
    operationSign = "/";
    if(storedValue == ""){
        storedValue = Number(result.innerText) * Number(result.innerText)   ;
    }
    callingOperate();
});
//para restar, debe valer el doble del numero inicial (ej: 64-36 = 36)
substractButton.addEventListener("click", () => {
    if(storedValue=="")
        storedValue = Number(result.innerText) *2;
    operationSign = "-";
    callingOperate();
});

equalsButton.addEventListener("click", () => {
    if (operationSign != "") {
        callingOperate();
        operationSign = "";
        storedValue = "";
    }
});

backspaceButton.addEventListener("click", () => {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = "0";
    }
    result.innerText = currentInput;
});

//Calculator Variables
let storedValue = "";
let operationSign = "";
let currentInput = "0";
let booleanOperation = false;

let addFunction = (a, b) => a + b;
let substractFunction = (a, b) => a - b;
let multiplyFunction = (a, b) => a * b;
let divideFunction = (a, b) => a / b;

let operate = (a, operation, b) => {
    switch (operation) {
        case "+":
            return addFunction(a, b);
        case "/":
            return divideFunction(a, b);
        case "-":
            return substractFunction(a, b);
        case "*":
            return multiplyFunction(a, b);
        default:
            return "Invalid operation";
    }
};

function typeNumber(number) {
    if (booleanOperation == true) {
        result.innerText = "";
        currentInput = "";
        booleanOperation = false;
    }
    if (currentInput.length < 10) {
        if (currentInput == "0") {
            currentInput = String(number);
        }
        else {
            currentInput += String(number);
        }
        result.innerText = currentInput;
    }
}

function callingOperate() {
    storedValue = operate(Number(storedValue), operationSign, Number(result.innerText));
    if (typeof storedValue === "number" && !Number.isInteger(storedValue)) {
        storedValue = Number(storedValue.toFixed(10)); 
    }
    booleanOperation = true;
    result.innerText = String(storedValue)
}
