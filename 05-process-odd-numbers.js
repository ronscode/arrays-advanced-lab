// You are given an array of numbers
// Print the odd numbers, doubled and reversed

function processOddNums(theArr) {
	let oddArr = theArr.filter((x) => {
		if (x % 2 != 0) {
			return x;
		}
	});

	let mappedArr = oddArr.map((odd) => {
		return odd * 2;
	});
	let revArr = mappedArr.reverse();

	console.log(theArr);
	console.log(revArr);
}

processOddNums([10, 15, 20, 25]);
