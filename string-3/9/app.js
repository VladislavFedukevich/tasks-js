const str = prompt('Enter the value of string: ').trim().split('');
let result = '';

for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}

console.log(result);
