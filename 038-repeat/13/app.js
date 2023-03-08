class Calculator {
  doSqrt = (number) => {
    return Math.sqrt(number);
  }
}

const calculator = new Calculator();
const sqrt = calculator.doSqrt(9);
console.log(sqrt);
