const LinkedList = require("../util/LinkedListX");

const findKthToLast = (k, ll) => {
	if (k < 0) return false;
	let vals = [];
	let cur = ll.head;
	while (cur) {
		vals.push(cur.value);
		cur = cur.next;
	}
	let len = vals.length;
	if (k > len) return false;

	return vals[len - 1 - k];
};

/* TESTS */
let list = new LinkedList();
for (let elem of [1, 2, 3, 4, 5]) {
	list.append(elem);
}

console.log(findKthToLast(3, list));

console.log(findKthToLast(10, list));

console.log(findKthToLast(-1, list));

console.log(findKthToLast(0, list));

console.log(findKthToLast(1, list));
