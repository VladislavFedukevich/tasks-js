const obj = {
  id: 2,
  3: 'hschool',
  value: 113,
}

for (let elem in obj) {
  if (!isNaN(obj[elem])) {
    if (obj[elem] % 2 === 0) {
      console.log(obj[elem]);
    }
  }
}
