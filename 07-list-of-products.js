function listOfProducts(theArr) {
	let i = 1;

	theArr.sort().map((x) => {
		console.log(`${i}. ${x}`);
		i++;
		console.log("Hello World!");
	});
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
