const n = prompt("Enter the count of the value: ");
let array = [];

for (let i = 0; i < n; i++) {
  const new_value = prompt("Enter the value: ");
  array.push(new_value);
}

console.log(array);

let hasNumber = array.every((element) => typeof element === "number");
console.log(hasNumber);

let flag = true;
array.forEach((element) => {
  if (typeof element !== "number") {
    flag = false;
  }
});
console.log(flag);
