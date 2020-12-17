// Approach: divide and conquer, array and insert into tree
const Queue = require("./../util/Queue");
const BST = require("./../util/BST");

function insertBalanced(sortedArray) {
	debugger;
	let bst = new BST();
	let q = new Queue();
	let currArr;
	let floor = Math.floor;
	q.add(sortedArray);
	while (!q.isEmpty()) {
		currArr = q.remove();
		//insert value from middle of array
		bst.insert(currArr[floor(currArr.length / 2)]);
		if (currArr.slice(0, floor(currArr.length / 2)).length > 0) {
			//add first half of array to queue
			q.add(currArr.slice(0, floor(currArr.length / 2)));
		}
		//add second hanf of array to queue
		if (currArr.slice(floor(currArr.length / 2) + 1).length > 0) {
			q.add(currArr.slice(floor(currArr.length / 2) + 1));
		}
	}
	return bst;
}

/* TEST */
let arr1 = [1, 2, 3, 4, 5, 6];
let tree1 = insertBalanced(arr1);
tree1.printLevelOrder();

let arr2 = [1, 2, 3, 4, 5, 6, 7];
let tree2 = insertBalanced(arr2);
tree2.printLevelOrder();
