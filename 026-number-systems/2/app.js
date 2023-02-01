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
    let newArr = [];
    for (let elem of arr) {
      if (!isNaN(elem)) newArr.push(elem);
    }

    return newArr;
  } catch (e) {
    return e.message;
  }
}

const array = doArray(value);
const result = filteredArray(array);
console.log(result);
