// remiveDups redone
const LinkedList = require("../util/LinkedListX");

const removeDuplicates = (ll) => {
	let seen = new Set();
	let cur = ll.head;
	let prev = null;
	if (!cur) return false; //if there is no val for the head

	while (cur.value) {
		if (seen.has(cur.value)) {
			if (cur.next === null) {
				prev.next = null;
				ll.tail = prev;
				return;
			}
			prev.next = cur.next;
			cur = cur.next;
		} else {
			seen.add(cur.value);
			prev = cur;
			if (cur.next === null) return;
			cur = cur.next;
		}
	}
};

// quick test
let list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
	list.append(elem);
}

removeDuplicates(list);

console.log(list._toArray()); // [1, 5, 6, 8]
