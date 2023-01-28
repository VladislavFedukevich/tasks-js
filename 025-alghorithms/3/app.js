const staticArray = [1, 2, 3, 4, 5];

const getSum = (arr) => {
	let sum = arr.shift();

	if (arr.length !== 0) {
		sum += getSum(arr);
	}

	return sum;
}

const result = getSum(staticArray);
console.log(result);
