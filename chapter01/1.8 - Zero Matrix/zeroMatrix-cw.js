const zeroMatrix = (matrix) => {
	//function to update all values in the row
	let updateRow = (matrix, row) => {
		for (let i = 0; i < matrix[0].length; i++) {
			matrix[row][i] = 0;
		}
	};

	//function to update all values in the fol
	let updateCol = (matrix, col) => {
		for (let i = 0; i < matrix.length; i++) {
			matrix[i][col] = 0;
		}
	};

	let update = [];
	//go over each val and if it equals zero push to row and col to update
	for (let row = 0; row < matrix[0].length; row++) {
		for (let col = 0; col < matrix.length; col++) {
			let val = matrix[row][col];
			if (val === 0) {
				update.push([row, col]);
			}
		}
	}
	//for each val in update process updateRow & updateCol function
	for (let arr of update) {
		updateRow(matrix, arr[0]);
		updateCol(matrix, arr[1]);
	}
};

// Testing
var testMatrix = [
	[1, 1, 1, 1],
	[1, 1, 1, 1],
	[1, 0, 1, 1],
	[1, 1, 1, 1],
	[1, 1, 1, 1],
	[1, 1, 1, 1],
];

console.log("before:");
console.log(testMatrix);
console.log("after;");
zeroMatrix(testMatrix);
console.log(testMatrix);

// function should mutate the matrix to the following:
// [
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [0, 0, 0, 0],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1]
// ]
