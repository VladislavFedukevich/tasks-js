const obj = {
  1: "qwe",
  2: true,
  id: 32,
};

const countPair = (obj) => {
  try {
    const arr = Object.keys(obj);
    if (!arr.length) throw new Error("Array is empty");

    return arr.length;
  } catch (error) {
    alert(error.message);
  }
};

const length = countPair(obj);
console.log(length);
