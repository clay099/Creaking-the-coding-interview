let strComp = (str) => {
	//out is a array not string. String concat is O(n) where array appending is O(1)
	let out = [];
	let startP = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== str[i + 1]) {
			out.push(str[i], i - startP + 1);
			startP = i + 1;
		}
	}
	let val = out.join("");
	if (out.length < str.length) return val;
	return str;
};

// Test
console.log("aaaaaa", strComp("aaaaaa"), "a6");
console.log("aabcccccaaa", strComp("aabcccccaaa"), "a2b1c5a3");
