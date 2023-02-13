const obj = {};
const n = 10;

const generateObj = (obj) => {
  for (let i = 0; i < n; i++) {
    obj[i] = Math.floor(Math.random() * 100);
  }
  return obj;
};

const object = generateObj(obj);
console.log(object);

const getValues = (obj) => {
  const values = Object.values(obj);

  return values.forEach(elem => console.log(elem));
}

getValues(obj);
