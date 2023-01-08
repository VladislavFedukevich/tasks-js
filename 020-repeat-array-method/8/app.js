const str = prompt("Enter the string:").split('');

console.log(str.filter(char => char !== '@').join(''));
