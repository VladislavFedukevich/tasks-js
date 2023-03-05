class NumberArray {
  showArr() {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(Math.floor(Math.random() * 100) + 1);
    }

    return arr;
  }
}

class ConsoleArray extends NumberArray {
  showArr() {
    const arr = super.showArr();
    console.log(arr);
  }
}

const arr = new ConsoleArray();
arr.showArr();
