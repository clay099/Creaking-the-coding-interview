let strComp = (str) => {
	let out = "";
	let startP = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== str[i + 1]) {
			out = out.concat(str[i], i - startP + 1);
			startP = i + 1;
		}
	}
	if (out.length < str.length) return out;
	return str;
};

// Test
console.log("aaaaaa", strComp("aaaaaa"), "a6");
console.log("aabcccccaaa", strComp("aabcccccaaa"), "a2b1c5a3");
