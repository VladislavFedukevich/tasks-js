function count () {
  let i = 0;

  return function() {
    ++i;
    console.log(i);
  }
}

let counter = count();
counter();
counter();
counter();
counter();
