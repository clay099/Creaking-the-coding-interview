class Node {
	constructor(longestStay, name) {
		//longest stay the smaller the value the longer they have been in the shelter
		this.longestStay = longestStay;
		this.name = name;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	push(node) {
		if (this.head === null) this.head = node;
		if (this.tail !== null) this.tail.next = node;
		this.tail = node;
	}
	dequeue() {
		if (this.head === null) return null;
		let temp = this.head;
		this.head = temp.next;
		temp.next = null;
		return temp;
	}
	peek() {
		return this.head.longestStay || null;
	}
	print() {
		let curr = this.head;
		if (!curr) return console.log("no current animals in queue");
		console.log(`stay: ${curr.longestStay}, name: ${curr.name}`);
		while (curr !== this.tail) {
			curr = curr.next;
			console.log(`stay: ${curr.longestStay}, name: ${curr.name}`);
		}
	}
}

class Shelter {
	constructor() {
		this.dogs = new LinkedList();
		this.cats = new LinkedList();
		this.longestStay = 0;
	}

	enqueue(type, name) {
		this.longestStay++;
		let node = new Node(this.longestStay, name);
		if (type === "cat") this.cats.push(node);
		if (type === "dog") this.dogs.push(node);
	}

	dequeueAny() {
		let longestDog = this.dogs.peek();
		let longestCat = this.cats.peek();
		if (!longestCat || longestDog < longestCat) return this.dogs.dequeue();
		if (!longestDog || longestCat < longestDog) return this.cats.dequeue();
		return "no animals in shelter";
	}
	dequeueDog() {
		let dog = this.dogs.dequeue();
		return dog ? dog : "no dogs in shelter";
	}

	dequeueCat() {
		let cat = this.cats.dequeue();
		return cat ? cat : "no cats in shelter";
	}
	shelterDogs() {
		console.log("SHELTER DOGS");
		this.dogs.print();
	}
	shelterCats() {
		console.log("SHELTER CATS");
		this.cats.print();
	}
}

let myShelter = new Shelter();
myShelter.shelterDogs(); //SHELTER DOGS/n no current animals in queue
myShelter.shelterCats(); //SHELTER CATS/n no current animals in queue
myShelter.enqueue("dog", "Sally");
myShelter.enqueue("dog", "Billy");
myShelter.enqueue("dog", "Bear");
myShelter.enqueue("cat", "Francis");
myShelter.enqueue("cat", "Grant");
myShelter.enqueue("cat", "Hugh");
myShelter.enqueue("dog", "Pizza");
myShelter.enqueue("cat", "Cookie");
myShelter.shelterCats();
// SHELTER CATS
// stay: 4, name: Francis
// stay: 5, name: Grant
// stay: 6, name: Hugh
// stay: 8, name: Cookie
myShelter.shelterDogs();
// SHELTER DOGS
// stay: 1, name: Sally
// stay: 2, name: Billy
// stay: 3, name: Bear
// stay: 7, name: Pizza
console.log(myShelter.dequeueCat());
console.log(myShelter.dequeueDog());
console.log(myShelter.dequeueAny());
