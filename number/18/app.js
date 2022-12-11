// Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
//   же результат – число с плавающей точкой, то округлить то целых)

const value = +prompt('Enter the value: ');
const res = Math.sqrt(value);

if (!Number.isInteger(res)) {
  console.log(`Result: ${Math.round(res)}`);
} else {
  console.log(`Result: ${res}`);
}
