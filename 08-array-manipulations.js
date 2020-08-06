/* Write a function that manipulates an ​array of numbers.​
  ● Add{number}:​addanumbertothe​end​ofthearray
  ● Remove{number}:​removenumberfromthearray
  ● RemoveAt{index}:​removesnumberata​givenindex
  ● Insert{number}{index}:​insertsanumberata​givenindex
Note: All the indices will be valid! */

//  Array Manipulations

function arrayManipulations(someArr) {
	// shift first item off input array. Split string into array " ", this is starting nums array
	let myNums = someArr.shift();
	let someVar = someArr.shift().split(" ");
	console.log(someVar);

	// remaining array items are the commands and numbers
	// cycle through array, convert strings into arrays.
	// switch to apply the command, which is index[0]
	// use index of each array item for the command, number or index
	// join the final array with a space and log to console.
}

arrayManipulations([
	"4 19 2 53 6 43",
	"Add 3",
	"Remove 2",
	"RemoveAt 1",
	"Insert 8 3",
]);
