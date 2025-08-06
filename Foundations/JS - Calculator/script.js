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
    if (result.innerText != "0")
        typeNumber(".");
});

clearButton.addEventListener("click", () => {
    currentInput = "0";
    result.innerText = currentInput;
    operationButton = "";
    storedValue = "";
});

addButton.addEventListener("click", () => {
    if(storedValue == "")
        storedValue = 0;
    operationSign = "+";
    callingOperate();
});

multiplyButton.addEventListener("click", () => {
    if(storedValue == ""){
        storedValue = 1;
    }
    operationSign = "*";
    callingOperate();
});

divideButton.addEventListener("click", () => {
    operationSign = "/";
    if(storedValue == ""){
        storedValue = Number(result.innerText) * Number(result.innerText)   ;
    }
    callingOperate();
});

substractButton.addEventListener("click", () => {
    console.log("INICIO: Storedvalue vale " + storedValue + " y el display muestra " + result.innerText);
    if(storedValue=="")
        storedValue = Number(result.innerText) *2;
    operationSign = "-";
    callingOperate();
    console.log("FIN: Storedvalue vale " + storedValue + " y el display muestra " + result.innerText);
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
    if (currentInput.length < 16) {
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
    booleanOperation = true;
    result.innerText = String(storedValue)
}
