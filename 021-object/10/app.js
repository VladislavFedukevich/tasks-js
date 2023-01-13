const obj = {
  name: "",
  age: "",
  birthday: "",
};

for (let key in obj) {
  let temp = prompt(`key: ${key}`).trim();
  while (!temp) {
    alert("not string");
    temp = prompt(`repeat ${key}`);
  }
  obj[key] = temp;
}

console.log(obj);
