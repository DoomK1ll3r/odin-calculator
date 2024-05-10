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
