//implement an algorithm to determine if a string has all unique characters
const isUnique = (string) => {
	let seen = new Set();
	for (let char of string) {
		seen.add(char);
	}
	return seen.size === string.length;
};

/* TESTS */
console.log(isUnique("abcd"), "true");
console.log(isUnique("abccd"), "false");
console.log(isUnique("bhjjb"), "false");
console.log(isUnique("mdjq"), "true");
