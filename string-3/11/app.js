const str = 'шалаши';
let isPalindrome = true;
for (let i = 0; i < str.length; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log('The string is a palindrome');
} else {
  console.log('The string is not a palindrome');
}
