const obj = {
  key: 'value',
  str: 'has this',
}

const str = 'yeeeesss';

const findKey = (obj, str) => {
  try {
    return obj.hasOwnProperty('str') ? true : false;
  } catch (error) {
    return error.message;
  }
}

const find = findKey(obj, str);
console.log(find);
