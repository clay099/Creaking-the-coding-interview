// directed graph
const Graph = require("./../util/Graph");

Graph.prototype.noChildren = function () {
	for (let node in this.nodes) {
		if (Object.keys(this.nodes[node]).length === 0) {
			return node;
		}
	}
	return undefined;
};

function buildOrder(projects, dependencies) {
	let g = new Graph();
	projects.forEach((project) => g.addNode(project));
	dependencies.forEach((arr) => g.addEdge(arr[1], arr[0]));

	let result = [];
	let currNode = g.noChildren();
	while (currNode !== undefined) {
		result.push(currNode);
		g.removeNode(currNode);
		currNode = g.noChildren();
	}
	if (result.length === projects.length) {
		return result;
	} else {
		throw Error;
	}
}

/* TEST */
let projects = ["a", "b", "c", "d", "e", "f"];
let dependencies = [
	["a", "d"],
	["f", "b"],
	["b", "d"],
	["f", "a"],
	["d", "c"],
];

console.log("Answer output: ", "[e, f, a, b, d, c]");
console.log(buildOrder(projects, dependencies));
