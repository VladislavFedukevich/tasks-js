const isCorrectTriangle = (a, b, c) => {
  try {
    if (a + b <= c || a + c <= b || b + c <= a) throw new Error("Not correct");
    return true;
  } catch (error) {
    return error.message;
  }
};

const result = isCorrectTriangle(3, 4, 5);
console.log(result);
