const input = document.getElementById("input-area");
const output = document.getElementById("output-area");
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
const btnDot = document.getElementById("btn-dot");
const btnClear = document.getElementById("btn-clear");
const btnDel = document.getElementById("btn-del");
const btnSum = document.getElementById("btn-sum");
const btnSubs = document.getElementById("btn-substract");
const btnMult = document.getElementById("btn-mult");
const btnDiv = document.getElementById("btn-div");
const btnEq = document.getElementById("btn-equal");
const firstOperand = document.getElementById("first-operand");
const secondOperand = document.getElementById("second-operand");
const operator = document.getElementById("operator");

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
      output.innerText = add(firstOperand, secondOperand);
      break;
    case '-':
      output.innerText = substract(firstOperand, secondOperand);
      break;
    case '*':
      output.innerText = multiply(firstOperand, secondOperand);
      break;
    case '/':
      output.innerText =  divide(firstOperand, secondOperand);
      break;
    default:
      return "There is an error";
      break;
  }
}

function clear () {
  operator.innerText = '';
  firstOperand.innerText = '';
  secondOperand.innerText = '';
  output.innerText = '';
}

function updateDisplay (digit) {
  if(firstOperand.innerText == '' || operator.innerText === '') {
    firstOperand.innerText += `${digit}`;
  }
  else {
    secondOperand.innerText += `${digit}`;
  }
}

function del () {
  if (secondOperand.innerText != '') {
    secondOperand.innerText = secondOperand.innerText.slice(0,-1);
  }
  else if (operator.innerText != '') {
    operator.innerText = operator.innerText.slice(0,-1);
  }
  else {
    firstOperand.innerText = firstOperand.innerText.slice(0,-1);
  }
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
btnDot.addEventListener("click", () => updateDisplay('.'));
btnClear.addEventListener("click", () => clear());
btnDel.addEventListener("click", () => del());
btnSum.addEventListener("click", () => operator.innerText = "+");
btnSubs.addEventListener("click", () => operator.innerText = "-");
btnMult.addEventListener("click", () => operator.innerText = "*");
btnDiv.addEventListener("click", () => operator.innerText = "/");
btnEq.addEventListener("click", () => operate(operator.innerText, parseFloat(firstOperand.innerText), parseFloat(secondOperand.innerText)));
