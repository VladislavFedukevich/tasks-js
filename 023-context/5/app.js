const password = prompt('Enter the value:');

const isSafe = (string) => {
  let hasUpper = false;
  let hasNumber = false;
  let hasSymbol = false;

  if (string.length < 8) {
    return false;
  }

  for (let i = 0; i < string.length; i++) {
    if (!hasUpper && string[i] >= 'A' && string[i] <= 'Z') {
      hasUpper = true;
    } else if (!hasNumber && !isNaN(string[i])) {
      hasNumber = true;
    } else if (!hasSymbol && !isNaN(string[i]) && !(string[i] >= 'A' && string[i] <= 'Z') && !(string[i] >= 'a' && string[i] <= 'z')) {
      hasSymbol = true;
    }
    if (hasUpper && hasNumber && hasSymbol) {
      return true;
    }
  }
  return false;
}

console.log(isSafe(password));
