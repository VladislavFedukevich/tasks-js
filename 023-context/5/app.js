const password = "Aafdsfdfs1245".split('');

const isSafe = (string) => {
  let upper = 0;
  let lower = 0;
  let number = 0;

  if (string.length < 8) {
    return false;
  }

  for (let i = 0; i < string.length; i++) {
    string[i] === string[i].toUpperCase() ? upper++ : null;
    string[i] === string[i].toLowerCase() ? lower++ : null;
    (string[i] === '1' || string[i] === '2' || string[i] === '3' || string[i] === '4' || string[i] === '5' || string[i] === '6' || string[i] === '7' || string[i] === '8' || string[i] === '9' || string[i] === '0' ? number++ : null);
  }
  
  return string.length >= 8 && upper > 0 && lower > 0 && number > 0;
};

console.log(isSafe(password));
