const obj = {};

const generateObj = (obj, n) => {
  for (let i = 0; i < n; i++) {
    obj[i] = i;
  }
  return obj;
};

const findEven = (obj) => {
  try {
    const n = 7;
    const object = generateObj(obj, n);
    const arr = [];

    for (let key in object) {
      if (key % 2 === 0) {
        arr.push(key)
      }
    }
    return arr;
  } catch (error) {
    error.message;
  }
};

console.log(findEven(obj));
