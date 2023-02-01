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
    const newArr = arr.filter(elem => typeof elem === 'number');
    if (!newArr.length) throw new Error('Array is empty');

    return newArr;
  } catch (e) {
    return e.message;
  }
}

const array = doArray(value);
const result = filteredArray(array);
console.log(result);
