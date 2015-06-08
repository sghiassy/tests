var StackNode = function(value, parent, child) {
	this.value = value || undefined;
	this.parent = parent || undefined;
	this.child = child || undefined;
};

var Stack = function(value) {
	if (value) {
		this.HEAD = new StackNode(value, undefined, undefined);
		this.minValue = this.HEAD;
	}
};

Stack.prototype.push = function(value) {
	var newNode = new StackNode(value);

	if (this.HEAD) {
		var prevHEAD = this.HEAD;
		this.HEAD = newNode;
		newNode.child = prevHEAD;
		prevHEAD.parent = this.HEAD;
		if (this.minValue.value > value) {
			this.minValue = newNode;
		}
	} else {
		this.HEAD = newNode;
		this.minValue = this.HEAD;
	}

};

Stack.prototype.pop = function() {
	var node;

	if (this.HEAD) {
		node = this.HEAD;
		this.HEAD = this.HEAD.child;
	}

	return node;
};

Stack.prototype.toString = function() {
	var string = "";

	if (this.HEAD) {
		var curPointer = this.HEAD;
		string += this.HEAD.value;

		while (curPointer.child) {
			curPointer = curPointer.child;
			string +=  " " + curPointer.value;
		}

	}

	return string;
};

Stack.prototype.min = function() {
	return this.minValue.value;
};


var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(1);
stack.push(-2);
stack.push(90);

console.log(stack.toString());
console.log(stack.min());