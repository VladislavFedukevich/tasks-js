const date = prompt('Enter the date: ');

if (isNaN(date)) {
  console.log(date.split('-').reverse().join('.'))
}
