const n = 4;
let result = "";

for (let i = n; i >= 1; i--) {
  result += `${"*".repeat(i)}\n`;
}

console.log(result);
