const generateSecurePassword = () => {
  let password = "";
  const possibleCharacters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789!@#$%^&*()_-+";
  const passwordLength = 19;
  for (let i = 0; i < passwordLength; i++) {
    if (i === 4 || i === 9 || i === 14) {
      password += "-";
    } else {
      const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
      password += possibleCharacters[randomIndex];
    }
  }
  return password;
};
console.log(generateSecurePassword());
