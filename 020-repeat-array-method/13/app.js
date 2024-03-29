const str = "{[]}";
const stack = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
    stack.push(str[i]);
  } else if (str[i] === ')' && stack[stack.length - 1] === '(') {
    stack.pop();
  } else if (str[i] === ']' && stack[stack.length - 1] === '[') {
    stack.pop();
  } else if (str[i] === '}' && stack[stack.length - 1] === '{') {
    stack.pop();
  } else {
    console.log(false);
  }
}

if (stack.length === 0) {
  console.log(true);
} else {
  console.log(false);
}
