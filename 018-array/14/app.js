const arr = [10, 20, 30, 50, 235, 3000];

for (let elem of arr) {
  if (
    String(elem).charAt(0) === "1" ||
    String(elem).charAt(0) === "2" ||
    String(elem).charAt(0) === "5"
  ) {
    console.log(elem);
  }
}
