const array = JSON.parse(`[
  { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
  { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
  { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
  { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
  { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
  ]`);

const validator = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Not array");
  return true;
};

const parseString = (arr) => {
  try {
    const bool = validator(arr);
    if (bool) {
      return arr.filter((elem) => elem.id % 2 === 0);
    }
  } catch (error) {
    return error;
  }
};

const resultArray = parseString(array);
console.log(resultArray);
