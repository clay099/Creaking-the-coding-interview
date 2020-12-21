class BinaryTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.parent = null;
	}

	isAncestor(node) {
		//filters out null
		if (this === node) {
			return true;
		} else {
			let answer1 = false;
			let answer2 = false;
			if (this.left !== null) {
				answer1 = this.left.isAncestor(node);
			}
			if (this.right !== null) {
				answer2 = this.right.isAncestor(node);
			}
			return false || answer1 || answer2;
		}
	}
}

function firstCommonAncestor(node1, node2) {
	let currentNode = node1;
	while (!currentNode.isAncestor(node2)) {
		if (currentNode === null) {
			throw Error;
		} else {
			currentNode = currentNode.parent;
		}
	}
	return currentNode.value;
}

/* TEST */
let a = new BinaryTree("a");
let b = new BinaryTree("b");
let c = new BinaryTree("c");
let d = new BinaryTree("d");
let e = new BinaryTree("e");
let f = new BinaryTree("f");
let g = new BinaryTree("g");
let h = new BinaryTree("h");
let i = new BinaryTree("i");
let j = new BinaryTree("j");
let k = new BinaryTree("k");
let l = new BinaryTree("l");

a.left = b;
b.parent = a;
a.right = c;
c.parent = a;
b.left = d;
d.parent = b;
d.left = g;
g.parent = d;
d.right = h;
h.parent = d;
h.right = k;
k.parent = h;
k.left = l;
l.parent = k;
c.left = e;
e.parent = c;
c.right = f;
f.parent = c;
f.left = i;
i.parent = f;
f.right = j;
j.parent = f;

console.log(firstCommonAncestor(g, k), "d");
console.log(firstCommonAncestor(b, i), "a");
