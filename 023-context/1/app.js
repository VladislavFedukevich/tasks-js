const a = { type: "pie" };
a.type = 'pudding';

const seconds = a;
seconds.type = 'fruit';
console.log(a.type)
