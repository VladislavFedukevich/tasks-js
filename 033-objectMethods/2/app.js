const obj = {
  1: 'first',
  2: 'second',
  3: 'third',
}

const countPairs = (obj) => {
  let count = 0;
  try {
    for (let i of Object.entries(obj)) {
      count++;
    }

    return count;
  } catch (error) {
    return error.message;
  }
}

const counter = countPairs(obj);
console.log(counter);
