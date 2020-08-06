// Calculate and print the sum of the first and the last elements in an array

function sumFirstLast(someArr) {
	let first = Number(someArr[0]);
	let second = Number(someArr[someArr.length - 1]);

	console.log(first + second);
}

sumFirstLast(["5", "10"]);
sumFirstLast(["20", "30", "40"]);
sumFirstLast(["1", "2", "3", "4 "]);
