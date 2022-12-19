let str = '123@1@@34';
let final = '';

for (let i = 0; i < str.length; i++) {
  if (str[i] === '@') {
    continue;
  } else {
    final += str[i];
  }
}

console.log(final);
