function wrapper() {
  console.log('-');

  return function() {
    console.log('+');
  }
}

const wrap = wrapper();
wrap();
