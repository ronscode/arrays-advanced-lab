/* Take two integers n and k
Generate and print the following sequence:
The first element is: 1
All other elements = sum of the previous k elements */

function sumLastK(n, k) {
	let seq = [1];
	for (let current = 1; current < n; current++) {
		let start = Math.max(0, current - k);
		let end = current;
		let sum = addIndexes(seq.slice(start, end));
		seq[current] = sum;
	}
	console.log(seq.join(" "));
}
function addIndexes(arr) {
	//console.log(arr)
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

sumLastK(6, 3);
sumLastK(8, 2);
sumLastK(9, 5);
