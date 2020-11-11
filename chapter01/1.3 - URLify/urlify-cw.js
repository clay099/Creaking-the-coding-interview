const urlify = (str, len) => {
	let trueStr = str.slice(0, len);
	return trueStr.split(" ").join("%20");
};

console.log(urlify("Mr John Smith    ", 13), "Mr%20John%20Smith");
