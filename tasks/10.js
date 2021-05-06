// Prototype

function CalculatorPr(amount) {
  this.result = amount;
}

CalculatorPr.prototype.add = function (value) {
  this.result += value;
  return this;
};

CalculatorPr.prototype.multiply = function (value) {
  this.result *= value;
  return this;
};

CalculatorPr.prototype.divide = function (value) {
  this.result /= value;
  return this;
};

CalculatorPr.prototype.subtract = function (value) {
  this.result -= value;
  return this;
};

CalculatorPr.prototype.result = function () {
  return this.result;
};

var cal = new CalculatorPr(0);

var amount = cal.add(5).multiply(2).add(20).divide(3).result;

// Obj

function Calculator(amount) {
  this.result = amount;

  this.add = function (value) {
    this.result += value;
    return this;
  };

  this.multiply = function (value) {
    this.result *= value;
    return this;
  };

  this.divide = function (value) {
    this.result /= value;
    return this;
  };

  this.subtract = function (value) {
    this.result -= value;
    return this;
  };

  this.amount = function () {
    return this.result;
  };
}

module.exports = {
  CalculatorPr,
  Calculator,
};
