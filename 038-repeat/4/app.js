const obj = {
  1: "qwe",
  2: true,
  id: 32,
};

const createArray = (obj) => {
  return Object.values(obj);
};

const arr = createArray(obj);
console.log(arr);
