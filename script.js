const input = document.getElementById("input-area");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btn0 = document.getElementById("btn-0");

let firstOperand = 0;
let secondOperand = 0;
let operator = 0;

function add (firstOperand = 0, secondOperand = 0) {
  return firstOperand + secondOperand;
}

function substract (firstOperand = 0, secondOperand = 0) {
  return firstOperand - secondOperand;
}

function multiply (firstOperand = 0, secondOperand = 0) {
  return firstOperand * secondOperand;
}

function divide (firstOperand = 0, secondOperand = 1) {
  return firstOperand / secondOperand;
}

function operate (operator, firstOperand = 0, secondOperand = 0) {
  switch (operator) {
    case '+':
      return add(firstOperand, secondOperand);
      break;
    case '-':
      return substract(firstOperand, secondOperand);
      break;
    case '*':
      return multiply(firstOperand, secondOperand);
      break;
    case '/':
      return divide(firstOperand, secondOperand);
      break;
    default:
      return "There is an error";
      break;
  }
}

function updateDisplay (digit) {
  input.innerText += `${digit}`;
}

btn1.addEventListener("click", () => updateDisplay('1'));
btn2.addEventListener("click", () => updateDisplay('2'));
btn3.addEventListener("click", () => updateDisplay('3'));
btn4.addEventListener("click", () => updateDisplay('4'));
btn5.addEventListener("click", () => updateDisplay('5'));
btn6.addEventListener("click", () => updateDisplay('6'));
btn7.addEventListener("click", () => updateDisplay('7'));
btn8.addEventListener("click", () => updateDisplay('8'));
btn9.addEventListener("click", () => updateDisplay('9'));
btn0.addEventListener("click", () => updateDisplay('0'));
