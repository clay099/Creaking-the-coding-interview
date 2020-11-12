const LinkedList = require("../util/LinkedListX");
const printList = require("../util/printList");

const deleteMidNode = (node) => {
	node.value = node.next.value;
	node.next = node.next.next;
};

/* TEST */

let list = new LinkedList();
for (let item of [1, 2, 3, 4, 5, 6]) {
	list.append(item);
}

console.log("before:");
printList(list.head);
deleteMidNode(list.head.next);
console.log("after:");
printList(list.head);
