const arr = [1, 2, 3, 4, 'aasf', 34, 'sasf', true, 'asf'];
const final_arr = [];

for (let elem of arr) {
  if (Number(elem) && elem !== true && elem !== false) {
    final_arr.push(elem);
  }
}

console.log(final_arr);
