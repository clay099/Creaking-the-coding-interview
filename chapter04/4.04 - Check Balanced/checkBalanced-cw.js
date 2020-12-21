var BST = require("./../util/BST");

function checkBalanced(bst) {
	// case where left is null and right is not null
	if (bst.left === null && bst.right !== null) {
		if (bst.right.left !== null || bst.right.right !== null) {
			return false;
		}
	}
	// case where left is not null and right is null
	if (bst.left !== null && bst.right === null) {
		if (bst.left.left !== null || bst.left.right !== null) {
			return false;
		}
	}

	let result = false;
	if (bst.left !== null) {
		result = result && checkBalanced(bst.left);
	}
	if (bst.right !== null) {
		result = result && checkBalanced(bst.right);
	}
	return result;
}

/* TEST */

var b1 = new BST(1);
b1.insert(2);
b1.insert(3);
b1.insert(4);
console.log(checkBalanced(b1), false);

var b2 = new BST(4);
b2.insert(2);
b2.insert(6);
b2.insert(1);
b2.insert(3);
b2.insert(5);
b2.insert(7);
console.log(checkBalanced(b2), true);
