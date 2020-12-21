/*
custom Binary Tree without check insert check to be binary
*/
class BT {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
	insert(value) {
		if (this.left === null) {
			this.left = new BT(value);
		} else if (this.right == null) {
			this.right = new BT(value);
		} else {
			this.left.insert(value);
		}
	}
}

function validate(tree) {
	//assume it is a bst
	let result = true;
	//check left side
	if (tree.left) {
		if (tree.left.value > tree.value) {
			return false;
		} else {
			validate(tree.left);
		}
	}
	if (tree.right) {
		if (tree.right.value < tree.value) {
			return false;
		} else {
			validate(tree.right);
		}
	}
	return true;
}

/* TESTS */

let t1 = new BT(5);
t1.insert(4);
t1.insert(6);
console.log(validate(t1), true);

let t2 = new BT(5);
t2.insert(6);
console.log(validate(t2), false);
