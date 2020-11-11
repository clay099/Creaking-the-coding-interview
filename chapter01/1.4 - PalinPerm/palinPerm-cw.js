const palinPerm = (str) => {
	const sanitized = str.toUpperCase().split(" ").join("");
	const freq = new Map();
	for (let i = 0; i < sanitized.length; i++) {
		const char = sanitized[i];
		const prevFreq = freq.get(char) || 0;
		freq.set(char, prevFreq + 1);
	}
	let oddCount = 0;
	for (let char of freq) {
		if (char[1] % 2 !== 0) {
			oddCount++;
			if (oddCount > 1) return false;
		}
	}
	return true;
};

// TESTS
console.log(palinPerm("Tact Coa"), "true");
console.log(palinPerm("Tact boa"), "false");
