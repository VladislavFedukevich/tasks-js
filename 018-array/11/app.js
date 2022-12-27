const arr = [1, 2, 6, "asfaf", 5, true, null, "sfdsf"];
const final_arr = [];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    final_arr.push(arr[i]);
  }
}

console.log(final_arr);
