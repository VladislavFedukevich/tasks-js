// Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения
// ax^2 + bx + c = 0
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания.

const a = +prompt('Enter the value: ');
const b = +prompt('Enter the value: ');
const c = +prompt('Enter the value: ');

const discriminant = b ** 2 - 4 * a * c;

if (discriminant > 0) {
  const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
  if (x1 > x2) {
    console.log(`First: ${x1}, second: ${x2}`);
  } else {
    console.log(`First: ${x2}, second: ${x1}`);
  }
} else if (discriminant < 0) {
  console.log('None');
} else {
  console.log(`First: ${-b / 2 * a}`);
}
