const LinkedList = require("../util/LinkedListX");

function isPalindrome(ll) {
	let vals = [];
	let curr = ll.head;
	while (curr) {
		vals.push(curr.value);
		curr = curr.next;
	}
	let l = 0;
	let r = vals.length - 1;
	while (l < r) {
		if (vals[l] !== vals[r]) return false;
		l++;
		r--;
	}
	return true;
}

/* TEST */

// test1: (7 -> 1 -> 7) => true
// test2: (5,1,6) false

let test1 = new LinkedList();
for (let el of [7, 1, 7]) {
	test1.append(el);
}
console.log(isPalindrome(test1));

let test2 = new LinkedList();
for (let el of [5, 1, 7]) {
	test2.append(el);
}
console.log(isPalindrome(test2));
