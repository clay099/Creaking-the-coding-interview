class Stack {
	constructor() {
		this.__data = [];
		this.minVal = [];
		this.currentMin = Infinity;
	}

	push(val) {
		this.__data.push(val);

		if (val < this.currentMin) {
			this.currentMin = val;
			this.minVal.push(val);
		}
		return;
	}

	pop() {
		let val = this.__data.pop();
		if (val == this.currentMin) {
			this.minVal.pop();
			this.currentMin = this.minVal[this.minVal.length - 1];
		}
		return val;
	}

	min() {
		return this.currentMin;
	}
	display() {
		return this.__data;
	}
}

//tests
let test = new Stack();

test.push(5);
test.push(3);
test.push(4);
test.push(2);
test.push(1);

//display original insertion order;
console.log(test.display()); //[5,3,4,2,1]
console.log(test.min()); //1
test.push(0);
console.log(test.min()); //0
test.pop(); //remove 0
test.pop(); //remove 1
console.log(test.min()); //2
