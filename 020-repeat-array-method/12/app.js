const str = 'hschool'.split('');

let final = str.map((elem, index, arr) => {
  if (index % 2 === 0) {
    return String(elem).toUpperCase();
  } else {
    return elem;
  }
});

console.log(final);
