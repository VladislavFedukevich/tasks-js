let str = 'string for testing'.trim().toLowerCase().split(' ');
let final = '';

for (let i = 0; i < str.length; i++) {
  final += str[i][0].toUpperCase() + str[i].slice(1) + ' ';
}

console.log(final);
