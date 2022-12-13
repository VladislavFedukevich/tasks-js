const cm = +prompt('Enter the value: ');
const m = cm / 100;

if(isNaN(cm)) {
  console.log('Error');
} else {
  if (!Number.isInteger(m)) {
    console.log(Math.trunc(m));
  } else {
    console.log(m);
  }
}
