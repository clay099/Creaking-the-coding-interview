class setOfStacks {
	constructor(capacity) {
		this.capacity = capacity;
		this.stackSet = [];
	}

	getLastStack() {
		return this.stackSet[this.stackSet.length - 1];
	}

	push(value) {
		let lastStack = this.getLastStack();
		if (lastStack.length === capacity || !Array.isArray(lastStack)) {
			this.stackSet.push([value]);
		} else {
			lastStack.push(value);
		}
	}

	pop() {
		return this.stackSet.pop(this.stackSet.length - 1);
	}
	popAt(idx) {
		if (index < 0 || index >= this.stackSet.length) return false;

		let stack = this.stackSet.slice(idx, 1);
	}
}
