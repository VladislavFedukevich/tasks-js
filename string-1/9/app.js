const numberOfMonth = prompt("Enter the month: ");

if (isNaN(numberOfMonth)) {
  console.log("Error");
} else {
  switch (numberOfMonth) {
    case '1':
      console.log('Winter');
      break;
    case '2':
      console.log('Spring');
      break;
    case '3':
      console.log('Summer');
      break;
    case '4':
      console.log('Autumn');
      break;

    default:
      console.log('Error');
      break;
  }
}
