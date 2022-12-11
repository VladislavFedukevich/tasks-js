const a = 11;
const b = 3;
const c = a % b;

if (a % b === 0) {
  console.log('Делится: ', c);
} else {
  console.log('Делится с остатком: ', c);
}
