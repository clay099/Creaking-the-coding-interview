let BSTp = function (value) {
	this.value = value;
	this.left = null;
	this.right = null;
	this.parent = null;
};
let findSuccessor = function (node) {
	let successor = null;
	if (node.right !== null) {
		successor = node.right;
		while (successor.left !== null) {
			successor = successor.left;
		}
	} else if (node.parent !== null) {
		let currNode = node;
		while (currNode.parent !== null && successor === null) {
			if (currNode.parent.left === currNode) {
				successor = currNode.parent;
			}
			currNode = currNode.parent;
		}
	}
	return successor;
};

/* TEST */
let a = new BSTp(10);
let b = new BSTp(2);
let c = new BSTp(3);
let d = new BSTp(4);
let e = new BSTp(6);
let f = new BSTp(5);
let g = new BSTp(7);

a.left = b;
b.parent = a;
b.right = c;
c.parent = b;
c.right = d;
d.parent = c;
d.right = e;
e.parent = d;
e.left = f;
f.parent = e;
e.right = g;
g.parent = e;

console.log(findSuccessor(f).value, 6);
console.log(findSuccessor(g).value, 10);
