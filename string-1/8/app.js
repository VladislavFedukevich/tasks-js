const numberOfMonth = +prompt("Enter the number: ");

if (isNaN(numberOfMonth)) {
  console.log("Error");
} else {
  if (numberOfMonth >= 1 && numberOfMonth <= 2) {
    console.log("Winter");
  } else if (numberOfMonth >= 3 && numberOfMonth <= 5) {
    console.log("Spring");
  } else if (numberOfMonth >= 6 && numberOfMonth <= 8) {
    console.log("Summer");
  } else if (numberOfMonth >= 9 && numberOfMonth <= 11) {
    console.log("Autumn");
  } else {
    console.log(Winter);
  }
}

switch (numberOfMaonth) {
  case numberOfMonth >= 1 && numberOfMonth <= 2:
    console.log("Winter");
    break;
  case numberOfMonth >= 3 && numberOfMonth <= 5:
    console.log("Spring");
    break;
  case numberOfMonth >= 6 && numberOfMonth <= 8:
    console.log("Summber");
    break;
  case numberOfMonth >= 9 && numberOfMonth <= 11:
    console.log("Autumn");
    break;
  case (numberOfMonth = 12):
    console.log("Winter");
    break;

  default:
    console.log(`${numberOfMonth} is NaN`);
    break;
}
