var Graph = require("./../util/Graph");
var Queue = require("./../util/Queue");

// solved using two BFS to get values as quick as possible 
// (if one route doesn't have a link it will require false quicker)
function checkRoute(S, E, graph) {
	let q1 = new Queue();
	let q2 = new Queue();
	let visited1 = {};
	let visited2 = {};

	// insert values into queues
	visited1[S] = true;
	visited2[E] = true;
	if (graph.hasNode(S)) {
		for (let edge in graph.findEdges(S)) {
			q1.add(edge);
		}
	}
	if (graph.hasNode(E)) {
		for (let edge in graph.findEdges(E)) {
			q2.add(edge);
		}
	}

	//take turns dequeueing until found or empty
	let nextEdge1;
	let nextEdge2;

	while (!q1.isEmpty() || !q2.isEmpty()) {
		//if has queue, return true
		if (!q1.isEmpty()) {
			nextEdge1 = q1.remove();
			if (nextEdge1 === E) {
				return true;
			}
			if (visited1[nextEdge1] === undefined) {
				visited1[nextEdge1] = true;
				if (graph.hasNode(nextEdge1)) {
					for (let edge in graph.findEdges(nextEdge1)) {
						q1.add(edge);
					}
				}
			}
		}
		if (!q2.isEmpty()) {
			nextEdge2 = q2.remove();
			if (nextEdge2 === S) {
				return true;
			}
			if (visited2[nextEdge2] === undefined) {
				visited2[nextEdge2] = true;
				if (graph.hasNode(nextEdge2)) {
					for (let edge in graph.findEdges(nextEdge1)) {
						q1.add(edge);
					}
				}
			}
		}
	}
	return false;
}
/* TEST */
let graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");

graph.addEdge("D", "E");

console.log(checkRoute("A", "C", graph), true);
console.log(checkRoute("A", "E", graph), false);
console.log(checkRoute("B", "A", graph), true);
console.log(checkRoute("B", "C", graph), true);
