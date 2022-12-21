let first = "шалаш".toLowerCase().split("").sort().join("");
let second = "лашаш".toLowerCase().split("").sort().join("");

let isAnagram = true;

for (let i = 0; i < first.length; i++) {
  if (first[i] !== second[i]) {
    isAnagram = false;
    break;
  }
}

console.log(isAnagram);
