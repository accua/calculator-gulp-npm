function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push('ping-pong');
    } else if (i % 3 === 0) {
      output.push('ping');
    } else if (i % 5 === 0) {
      output.push('pong');
    } else {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.operation = function(number1, number2, operator) {
  var output = 0;
  if (operator === "+") {
    output = number1 + number2;
  } else if(operator === "-") {
    output = number1 - number2;
  } else if(operator === "*") {
    output = number1 * number2;
  } else {
    output = number1 / number2;
  }
  return output;
};

exports.calculatorModule = Calculator;
