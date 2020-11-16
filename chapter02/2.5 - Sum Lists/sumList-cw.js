const LinkedList = require("../util/LinkedListX");
var printList = require("../util/printList");

var sumList = function (head1, head2) {
	let ll = new LinkedList();

	let curr1 = head1.head;
	let curr2 = head2.head;
	let carry = 0;

	while (curr1 && curr2) {
		let val = (curr1.value + curr2.value + Number(carry)).toString();
		carry = val[1] ? val[0] : 0;
		ll.append(carry > 0 ? val[1] : val[0]);

		curr1 = curr1.next;
		curr2 = curr2.next;
	}
	return ll;
};

/* TEST */

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). this case refers to 617 + 295
// Output: 2 -> 1 -> 9. the answer refers to 912

let list1 = new LinkedList();
for (let ele of [7, 1, 6]) {
	list1.append(ele);
}

let list2 = new LinkedList();
for (let ele of [5, 9, 2]) {
	list2.append(ele);
}
console.log("list1");
printList(list1.head);
console.log("list2");
printList(list2.head);
let total = sumList(list1, list2);
console.log("total should = [2,1,9]");
printList(total.head);
