const stringRotationV1 = (s1, s2) => {
	if (s1.length !== s2.length) return false;
	return (s2 + s2).includes(s1);
};

// Test
console.log(stringRotation("waterbottle", "erbottlewat"), true);
console.log(stringRotation("waterbottle", "erbotlewatt"), false);
console.log(stringRotation("aaata", "aataa"), true);
