const n = Number(prompt("Enter the count of the value: "));
let array = [];

for (let i = 0; i < n; i++) {
  const new_value = Number(prompt("Enter the value: "));
  array.push(new_value);
}

console.log(array);

let hasNumber = array.some((element) => typeof element === "number");
console.log(hasNumber);

let flag = false;
array.forEach((element) => {
  if (typeof element === "number") {
    flag = true;
  }
});
console.log(flag);
