class DomHtml {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.generateEvent();
  }

  generateEvent = () => {
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
      this.doSum();
      this.doDivide();
      this.doMultiply();
      this.doMinus();
    })
  }

  doSum = () => {
    const text = document.querySelector('.sum');
    text.innerHTML += Number(this.x.value) + Number(this.y.value);
  }

  doDivide = () => {
    const text = document.querySelector('.divide');
    text.innerHTML += Number(this.x.value) / Number(this.y.value);
  }

  doMultiply = () => {
    const text = document.querySelector('.multiply');
    text.innerHTML += Number(this.x.value) * Number(this.y.value);
  }

  doMinus = () => {
    const text = document.querySelector('.minus');
    text.innerHTML += Number(this.x.value) - Number(this.y.value);
  }
}

const firstInp = document.querySelector('.first')
const secondInp = document.querySelector('.second');

const domHtml = new DomHtml(firstInp, secondInp);
