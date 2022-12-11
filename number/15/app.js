// Вы вводите значение с клавиатуры. Если значение от 0 до 18 «детство», от 19 до 40 –
// молодость, от 41 до 100 – зрелость, в противном случае – некорректный ввод

const age = +prompt('Enter the age: ');

if (age >= 0 && age <= 18) {
  console.log('Childhood');
} else if (age >= 19 && age <= 40) {
  console.log('Youth');
} else if (age >= 41 && age <= 100) {
  console.log('Old age');
} else {
  console.log('Incorrect input');
}
