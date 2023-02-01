const value = prompt('Enter the value');

const doArray = (val) => {
  let arr = [];

  for (let i = 0; i < val; i++) {
    arr.push(prompt('Enter the item'));
  }

  return arr;
}

const filteredArray = (arr) => {
  try {
    let sum = 0;
    for (let elem of arr) {
      if (elem > 0) {
        sum += Number(elem);
      }
    }

    return sum;
  } catch (e) {
    return e.message;
  }
}

const array = doArray(value);
const result = filteredArray(array);
console.log(result);
