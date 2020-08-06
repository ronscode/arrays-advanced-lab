/* You are given an array of numbers
The first element holds an integer k
Print the first k and the last k from the other elements in the array (space separated) */

function firstLastKNumbers(someArr) {
	let k = someArr.shift();
	console.log(someArr.slice(0, k).join(" "));
	console.log(someArr.slice(someArr.length - k, someArr.length).join(" "));
}

firstLastKNumbers([2, 7, 8, 9]);
firstLastKNumbers([3, 6, 7, 8, 9]);
