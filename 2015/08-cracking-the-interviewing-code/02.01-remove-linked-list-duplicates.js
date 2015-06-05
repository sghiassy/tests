var LinkedListNode = function(initialObject, child, parent) {

	if (initialObject) {
		this.value = initialObject;
	}

	if (child) {
		this.child = child;
	}

	if (parent) {
		this.parent = parent;
	}

};

var LinkedLists = function(initialObject) {
	if (initialObject) {
		this.HEAD = new LinkedListNode(initialObject);
	}
};

LinkedLists.prototype.add = function(object) {
	var curPointer = this.HEAD;

	while (curPointer.child != undefined) {
		curPointer = curPointer.child;
	}

	var newNode = new LinkedListNode(object, undefined, curPointer);
	curPointer.child = newNode;
};

LinkedLists.prototype.toString = function() {
	var curPointer = this.HEAD;
	var stringOutput = "";

	if (curPointer.value) {
		stringOutput += curPointer.value;
	}

	while (curPointer.child) {
		curPointer = curPointer.child;

		if (curPointer.value) {
			stringOutput += " " + curPointer.value;
		}
	}

	return stringOutput;
};

LinkedLists.prototype.removeDuplicates = function() {
	var curPointer = this.HEAD;
	var uniqueKeys = {};
	
	if (curPointer) {
		uniqueKeys[curPointer.value] = 1;
	}
	
	while (curPointer.child) {
		curPointer = curPointer.child;
		
		if (curPointer) {
			if (uniqueKeys[curPointer.value] === 1) {
				var parent = curPointer.parent;
				var child = curPointer.child;
				parent.child = child;
				child.parent = parent;
			} else {
				uniqueKeys[curPointer.value] = 1;
			}
		}
	}
	
	return this;
};

var linkedList = new LinkedLists("a");
linkedList.add("b");
linkedList.add("d");
linkedList.add("c");
linkedList.add("c");
linkedList.add("d");
linkedList.add("d");
linkedList.add("e");
console.log(linkedList.toString());
console.log(linkedList.removeDuplicates().toString());

