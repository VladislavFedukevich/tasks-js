// const n = prompt("Enter the length:");
// const arr = [];
const arr = ["ann", "school", "hschool", "borabora"];
const final = [];

for (let i = 0; i < arr.length; i++) {
  // arr.push(prompt("Enter the value:"));
  final.push(arr[i]);
}

let result = final.filter(elem => {
  if (!isNaN(elem)) {
    console.log('Error');
  } else {
    if (elem[0] === 'a' || elem[0] === 'h') {
      return true;
    }
  }
})

console.log(result);
