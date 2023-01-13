const obj = {
  id: 2,
  3: 'hschool',
  value: 10,
}

for (let elem in obj) {
  if (!isNaN(elem))
    console.log(elem)
}
