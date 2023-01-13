const obj = {
  id: 2,
  3: 'hschool',
  value: 10,
}

for (let elem in obj) {
  if (!isNaN(obj[elem]))
    console.log(obj[elem])
}
