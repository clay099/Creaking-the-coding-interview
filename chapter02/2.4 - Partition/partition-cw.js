const LinkedList = require("../util/LinkedListX");
const printList = require("../util/printList");

const partition = (ll, par) => {
	let L1 = new LinkedList();
	let L2 = new LinkedList();

	let cur = ll.head;
	while (cur) {
		if (cur.value < par) {
			L1.append(cur.value);
		} else {
			L2.append(cur.value);
		}
		cur = cur.next;
	}
	let l1Tail = L1.tail;
	let l2Head = L2.head;
	l1Tail.next = l2Head;
	return L1;
};

/* TESTS */
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 2 -> 1 -> 5 -> 8 -> 5 -> 10

let list = new LinkedList();
for (let ele of [3, 5, 8, 5, 10, 2, 1]) {
	list.append(ele);
}

console.log("before:");
printList(list.head);let updatedLL = partition(list, 5);
console.log("after:");
printList(updatedLL.head);
