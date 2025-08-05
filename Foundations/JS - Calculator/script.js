//DOM Variables
    //Grid Area for Buttons
document.querySelectorAll('.buttons > button[id]').forEach(btn => {
    btn.style.gridArea = btn.id;
});
    //Operation Buttons
let result = document.getElementById("display");
let clearButton = document.getElementById("clear");
let equalButton = document.getElementById("equal");
let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
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


//Calculator Variables
let firstOperand = "";
let secondOperand = "";
let operationSign = "";
let currentInput = "";

let addFunction = (a,b) => a + b;
let substractFunction = (a,b) => a - b;
let multiplyFunction = (a,b) => a * b;
let divideFunction = (a,b) => a / b;

let operate = (a, b, operation) => {
    switch (operation) {
        case "+":
            return addFunction(a, b);
            break;
        case "/":
            return divideFunction(a, b);
            break;
        case "-":
            return substractFunction(a, b);
            break;
        case "*":
            return multiplyFunction(a, b);
            break;
        default:
            return "Invalid operation";
    }
};

function typeNumber(number){
    if (currentInput.length < 10) {
        currentInput += number;
        document.getElementById("display").innerText = currentInput;
    }
}
