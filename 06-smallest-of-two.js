function smallestTwoNumbers(arr) {
	let newArr = arr;
	arr.sort((a, b) => a - b); // text book def. for how to sort array of numbers.
	// arr = [5, 15, 30, 50]
	//let result = arr.slice(0, 2);

	let secondSmallNum = arr[1];
	console.log(`${arr[0]} ${secondSmallNum}`);
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
