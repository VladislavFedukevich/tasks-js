class Calculator {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  getSum = () => this.first + this.second;

  getDiff = () => this.first - this.second;

  getDivide = () => this.first / this.second

  getMulti = () => this.first * this.second;

}

const solve = new Calculator(4, 5);

console.log(solve.getMulti());
