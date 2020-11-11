const oneAway = (str1, str2) => {
	//check is str1 & str2 are within 1 char of each other
	if (str1.length > str2.length + 1 || str2.length > str1.length + 1)
		return false;

	//create a freq count for str1 & str2
	let freq1 = new Map();
	let freq2 = new Map();
	for (let char of str1) {
		freq1.set(char, freq1.get(char) + 1 || 1);
	}
	for (let char of str2) {
		freq2.set(char, freq2.get(char) + 1 || 1);
	}
	let diff = 0;
	// go over freq count and check if values are equal
	for (let [key, val] of freq1) {
		if (val !== freq2.get(key)) {
			// if values are not equal add one to diff
			diff++;
			if (diff > 2) return falsel;
		}

		//get value from freq2
		let charCount = freq2.get(key);
		//if values occur the same amount of times delete from freq2
		if (charCount === val) {
			freq2.delete(key);
		} else if (charCount !== undefined) {
			//if vales occurs in freq2 & it doesn't occur the same amount of times as freq decrease count in freq2
			freq2.set(key, freq2.get(key) - 1);
		}
	}
	//if size of freq2 is bigger than 1 more than 1 edit is required.
	if (freq2.size > 1) return false;

	return true;
};

// Test
console.log(oneAway("pale", "ple"), true);
console.log(oneAway("pales", "pale"), true);
console.log(oneAway("pale", "bale"), true);
console.log(oneAway("pale", "bake"), false);
