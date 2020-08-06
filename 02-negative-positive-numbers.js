/* You are given an array of numbers arr
Process them one by one and produce a new array result Prepend each negative element at the front of result
Append each positive (or 0) element at the end of result Print the result array, each element at separate line */

function negPos(someArr) {
	let sortedArray = [];
	for (i = 0; i < someArr.length; i++) {
		if (someArr[i] < 0) {
			sortedArray.unshift(someArr[i]);
		} else if (someArr[i] >= 0) {
			sortedArray.push(someArr[i]);
		} else {
			alert("Not a valid number");
		}
	}
	for (j = 0; j < sortedArray.length; j++) {
		console.log(sortedArray[j]);
	}
}

negPos([7, -2, 8, 9]);
negPos([3, -2, 0, -1]);
