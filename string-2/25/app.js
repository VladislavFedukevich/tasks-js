const str = "АааГГЦЦцТТтттА".toLowerCase();
let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for (let i = 0; i < str.length; i++) {
  switch (str[i]) {
    case "А".toLowerCase():
      ++countA;
      break;
    case "Г".toLowerCase():
      ++countB;
      break;
    case "Ц".toLowerCase():
      ++countC;
      break;
    case "Т".toLowerCase():
      ++countD;
      break;
  }
}

console.log(countA, countB, countC, countD);
