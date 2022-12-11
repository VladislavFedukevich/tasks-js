// Пользователь вводит с клавиатуры 2 числа: a и b. Проверьте, что a делится без
// остатка на b. Если это так - выведите 'Делится' и результат деления, иначе
// выведите 'Делится с остатком' и остаток от деления

const firstValue = +prompt('Enter the first value: ');
const secondValue = +prompt('Enter the second value: ');
const resDivide = firstValue / secondValue;
const remains = firstValue % secondValue;

if (remains === 0) {
  console.log(`Divide: ${resDivide}`);
} else {
  console.log(`Divide with the remains: ${remains}`);
}
