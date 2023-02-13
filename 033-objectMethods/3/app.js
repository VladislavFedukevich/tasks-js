const obj = {
  key: 'value',
  str: 'yeeeesss',
}

const str = 'yeeeesss';

const findKey = (obj, str) => {
  try {
    const value = Object.values(obj);
    return value.includes(str);
  } catch (error) {
    return error.message;
  }
}

const find = findKey(obj, str);
console.log(find);
