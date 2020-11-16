const LinkedList = require("../util/LinkedListX");

function intersection(LL1, LL2) {
	let curr1 = LL1.head;
	let curr2 = LL2.head;
	while (curr1) {
		console.log("val1 ", curr1.value);
		while (curr2) {
			if (curr2 !== curr1) {
				console.log("val2 ", curr2.value);
				curr2 = curr2.next;
			} else {
				curr2 = LL2.head;
				curr1 = LL1.head;
			}
		}
		return false;
	}
	return true;
}
/* TEST */

// test1: (7 -> 1 -> 7) & (2 -> 8) => false
// test2: (7 -> 1 -> 7) & (7 -> [join third LL]) => true

let ll1 = new LinkedList();
for (let el of [7, 1, 7]) {
	ll1.append(el);
}

let ll2 = new LinkedList();
for (let el of [2, 8]) {
	ll2.append(el);
}
console.log("first test:");
console.log(intersection(ll2, ll1));

let ll3 = new LinkedList();
for (let el of [7, 1, 7]) {
	ll3.append(el);
}
let ll4 = ll3;
ll4.prepend(7);
console.log("second test:");
console.log(intersection(ll3, ll4));
