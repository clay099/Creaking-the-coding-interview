const checkPermute = (str1, str2) => {
	if (str1.length !== str2.length) return false;
	let map1 = new Map();
	let map2 = new Map();
	for (let i = 0; i < str1.length; i++) {
		map1.set(str1[i], map1.get(str1[i]) + 1 || 1);
		map2.set(str2[i], map2.get(str2[i]) + 1 || 1);
	}

	for (let char of str1) {
		if (map1.get(char) !== map2.get(char)) return false;
	}
	return true;
};

// Tests
console.log(checkPermute("aba", "aab"), true);

console.log(checkPermute("aba", "aaba"), false);

console.log(checkPermute("aba", "aa"), false);
