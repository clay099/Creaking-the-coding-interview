const LinkedList = require("../util/LinkedListX");

const loopDetection = (LL) => {
	const seen = new Set();
	let curr = LL.head;
	let startLoop = null;
	while (curr && !startLoop) {
		if (seen.has(curr)) {
			seen.add(curr);
		} else {
			startLoop = curr;
		}
	}
	if (startLoop) return startLoop;
	return false;
};
