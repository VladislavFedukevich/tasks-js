// Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
//   же результат – число с плавающей точкой, то округлить до 2 знаков после запятой).

const value = +prompt('Enter the value: ');
const squareRoot = Math.sqrt(value);

if (!Number.isInteger(squareRoot)) {
  console.log(`Result: ${squareRoot.toFixed(2)}`);
} else {
  console.log(`Result: ${squareRoot}`);
}
