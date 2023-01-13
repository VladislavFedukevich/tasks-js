const str = 'xxxx-xx-xx';;
const arr = str.split('-').reverse().map(elem => elem).join('/')

console.log(arr);
