// Вы вводите значение с клавиатуры. Если значение равно 0, то вывести ‘Ноль’, если
// < 0, то вывести ‘Отрицательное’, если > 0, то вывести ‘Положительное

const value = +prompt('Enter the value: ');

if (value < 0) {
  console.log('Negative');
} else if (value > 0) {
  console.log('Positive');
} else {
  console.log('Zero');
}
