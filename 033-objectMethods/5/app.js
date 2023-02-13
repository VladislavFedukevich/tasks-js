const obj = {};
const n = 12;

const generateObj = (obj) => {
  for (let i = 0; i < n; i++) {
    obj[i] = i;
  }
  return obj;
};

const findElem = (obj, elem) => {
  try {
    const object = generateObj(obj);
    const key = Object.keys(object);

    return key.includes(elem);
  } catch (error) {
    return error.message;
  }
}

const find = findElem(obj, '10');
console.log(find);
