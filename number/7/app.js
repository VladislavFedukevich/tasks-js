const n = +prompt('Введите количество лет: ');


if (n <= 2) {
  console.log(n * 10.5);
} else {
  console.log(2 * 10.5 + (n - 2) * 4);
}
