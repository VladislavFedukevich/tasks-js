class DomHtml {
  constructor() {
    this.generateEvent();
  }

  generateEvent() {
    const btn = document.querySelector(`.btn`);
    btn.addEventListener(`click`, () => {
      const inpOne = +document.querySelector(`.inpOne`).value;
      const inpTwo = +document.querySelector(`.inpTwo`).value;
      this.doPlus(inpOne, inpTwo);
      this.doMinus(inpOne, inpTwo);
      this.doMultiply(inpOne, inpTwo);
      this.doDivide(inpOne, inpTwo);
    });
  }

  doPlus(inpOne, inpTwo) {
    const plus = document.querySelector(`.plus`);
    plus.innerHTML = inpOne + inpTwo;
  }

  doMinus(inpOne, inpTwo) {
    const minus = document.querySelector(`.minus`);
    minus.innerHTML = inpOne - inpTwo;
  }

  doMultiply(inpOne, inpTwo) {
    const multiply = document.querySelector(`.multiply`);
    multiply.innerHTML = inpOne * inpTwo;
  }

  doDivide(inpOne, inpTwo) {
    const divide = document.querySelector(`.divide`);
    divide.innerHTML = inpOne / inpTwo;
  }
}

let domHtml = new DomHtml();
