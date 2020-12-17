const BST = require("./../util/BST");
const LinkedList = require("./../util/LinkedList");
const Queue = require("./../util/Queue");

function listOfDepths(tree) {
	let listOfLists = [];
	let list = null;
	let newNode;
	let q = new Queue();
	let nextq = new Queue();
	let currNode = tree;

	q.add(currNode);
	while (!q.isEmpty()) {
		currNode = q.remove();
		newNode = new LinkedList(currNode.value);
		newNode.next = list;
		list = newNode;
		if (currNode.left !== null) {
			nextq.add(currNode.left);
		}
		if (currNode.right !== null) {
			nextq.add(currNode.right);
		}
		if (q.isEmpty()) {
			listOfLists.push(list);
			list = null;
			q = nextq;
			nextq = new Queue();
		}
	}
	return listOfLists;
}

/* TEST */
// 1, 2, 3, 4, 5, 6, 7
let tree = new BST(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);

console.log(listOfDepths(tree));
