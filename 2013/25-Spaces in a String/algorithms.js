/*! Algorithms-in-Javascript - v0.0.3 - 2013-06-23
* Copyright (c) 2013 ; Licensed  */
//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}


SCG.Library.BinarySearchTree = (function() {

	//shared private variable

	return function() {
		var HEAD = undefined;
		
		var insertNode = function(node, value) {
			var leftChild = node.getLeftNode();
			var rightChild = node.getRightNode();
			
			if(value <= node.getValue() && leftChild != undefined) {
				insertNode(leftChild, value);
			} else if (value <= node.getValue() && leftChild == undefined) {
				var newNode = new SCG.Library.SinglyLinkedBinaryNode({value:value});
				node.setLeftNode(newNode);
			} else if (value > node.getValue() && rightChild != undefined) {
				insertNode(rightChild, value);
			} else if (value > node.getValue() && rightChild == undefined) {
				var newNode = new SCG.Library.SinglyLinkedBinaryNode({value:value});
				node.setRightNode(newNode);
			} else {
				console.log('on no, something wen\'t wrong');
				debugger;
			}
		};

		this.insert = function(value) {
			if(HEAD == undefined) {
				HEAD = new SCG.Library.SinglyLinkedBinaryNode({value:value});
			} else {
				insertNode(HEAD, value);
			}
		};

		this.printBreadthFirst = function() {
			var curPointer = HEAD;
			var queue = new SCG.Library.Queue();
			var printString = "";

			if(curPointer != undefined) {
				queue.enqueue(curPointer);

				while(!queue.isEmpty()) {
					curPointer = queue.dequeue();

					printString += curPointer.getValue() + " ";

					if(curPointer.getLeftNode() != undefined) {
						queue.enqueue(curPointer.getLeftNode());
					}
					if(curPointer.getRightNode() != undefined) {
						queue.enqueue(curPointer.getRightNode());
					};
				}
			}

			//If the last charecter on the string is a space. Delete it.
			if(printString[printString.length-1] == " ") {
				printString = printString.slice(0, printString.length - 1);
			}

			return printString;
		};

		this.printDepthFirstPreorder = function() {
			
		};

		this.printDepthFirstInorder = function() {
			console.log('hello world');
		};

		this.printDepthFirstPostorder = function() {
			
		};
	};
})();
//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}

SCG.Library.Graph = (function() {
	//shared private variables
	var getStartingNode = function(edgeNodes, startNode) {
		var node;
		
		//Setup Queue for the first loop. If a starting node has not been specified. Just pick the first node
		//in the list. Otherwise, use the starting node.
		if(startNode == undefined) {
			node = edgeNodes[0]; //starting node has not been defined. Just get first node in the list
		} else {
			var unsortedObjectHash = {};

			//Go through the array of nodes and create an index of each node's values. 
			for(var i = 0, iLen = edgeNodes.length; i < iLen; i++) {
				var currentNodeValue = edgeNodes[i].getValue();

				if(unsortedObjectHash[currentNodeValue] != undefined) {
					console.error('The graph has two or mode nodes with duplicate value. BFS may not return expected results');
				}

				unsortedObjectHash[currentNodeValue] = edgeNodes[i];
			}

			//With the index built, simply return the 
			node = unsortedObjectHash[startNode];
		}

		return node;
	}
	
	return function() {
		var edgeNodes = [];
		
		this.addNode = function(nodeValue) {
			var newNode = new SCG.Library.GraphNode(nodeValue);
			edgeNodes.push(newNode);
		};
		
		this.connect = function(firstNode, secondNode) {
			var node1 = undefined;
			var node2 = undefined;
			
			for(var i = 0, iLen = edgeNodes.length; i < iLen; i++) {
				var currentNode = edgeNodes[i];
				
				if(firstNode == currentNode.getValue()) {
					node1 = currentNode;
				} else if(secondNode == currentNode.getValue()) {
					node2 = currentNode;
				}
			}
			
			if(node1 && node2) {
				node1.addNeighbor(node2);
				node2.addNeighbor(node1);
				
				return true;
			} else {
				return false;
			}
		};
		
		this.print = function() {
			var stringRepresentation = "";

			for(var i = 0, iLen = edgeNodes.length; i < iLen; i++) {
				var currentNode = edgeNodes[i];

				stringRepresentation += currentNode.getValue() + ": " + currentNode.printNeighbors() + "\n";
			}

			return stringRepresentation;
		};

		this.isEmpty = function() {
			if(edgeNodes.length <= 0) {
				return true;
			} else {
				return false;
			}
		};

		//Breadth First Search Algorithm
		this.bfs = function(startNode) {
			var currentNode, queue, bfs, currentNeighbors, currentNeighbor;

			if(this.isEmpty() == true) {
				return "";
			}

			//Setup for Algorithm
			currentNode = getStartingNode(edgeNodes, startNode); //Get either the first node, or the node specified in startNode
			currentNode.setCustomAttr({visited:true}); //Make the first node as visited
			queue = new SCG.Library.Queue({value:currentNode}); //Add the first node to the queue
			bfs = currentNode.getValue() + " "; //

			while(queue.isEmpty() == false) {
				currentNode = queue.dequeue();
				currentNeighbors = currentNode.getSortedNeighbors();

				for(var j = 0, jLen = currentNeighbors.length; j < jLen; j++) {
					currentNeighbor = currentNeighbors[j];

					if(currentNeighbor.getCustomAttr('visited') != true) {
						bfs += currentNeighbor.getValue() + " ";
						currentNeighbor.setCustomAttr({visited:true});
						queue.enqueue(currentNeighbor);
					}
				}
			}

			//Take off last " " (space) on the string if any
			if(bfs[bfs.length-1] == " ") {
				bfs = bfs.slice(0, bfs.length - 1);
			}

			return bfs;
		};
		
		this.dfs = function(startNode) {
			var currentNode, queue, bfs, currentNeighbors, currentNeighbor, nonVisitedNeighbor;

			if(this.isEmpty() == true) {
				return "";
			}

			//Setup for Algorithm
			currentNode = getStartingNode(edgeNodes, startNode); //Get either the first node, or the node specified in startNode
			currentNode.setCustomAttr({visited:true}); //Make the first node as visited
			stack = new SCG.Library.Stack({value:currentNode}); //Add the first node to the queue
			bfs = currentNode.getValue() + " "; //

			while(stack.isEmpty() == false) {
				currentNode = stack.pop();
				stack.push(currentNode);

				currentNeighbors = currentNode.getSortedNeighbors();
				nonVisitedNeighbor = undefined;
				for(var i = 0, iLen = currentNeighbors.length; i < iLen; i++) {
					if(currentNeighbors[i].getCustomAttr('visited') != true) {
						nonVisitedNeighbor = currentNeighbors[i];
						break;
					}
				}
				
				if(nonVisitedNeighbor == undefined) {
					stack.pop();
				} else {
					bfs += nonVisitedNeighbor.getValue() + " ";
					stack.push(nonVisitedNeighbor);
					nonVisitedNeighbor.setCustomAttr({visited:true});
				}
			}

			//Take off last " " (space) on the string if any
			if(bfs[bfs.length-1] == " ") {
				bfs = bfs.slice(0, bfs.length - 1);
			}

			return bfs;
		}
	};
})();

SCG.Library.GraphNode = (function() {
	//shared private variables

	return function(initialValue) {
		var neighbors = [];
		var value = initialValue;
		var customAttrs = {};

		this.addNeighbor = function(newNode) {
			neighbors.push(newNode);
		};

		this.printNeighbors = function() {
			var stringRepresentation = "";
			var neighborsArray = [];
			
			for(var i = 0, iLen = neighbors.length; i < iLen; i++) {
				var currentNeighbor = neighbors[i];

				neighborsArray.push(currentNeighbor.getValue());
			}
			
			neighborsArray.sort();
			stringRepresentation = neighborsArray.join(' ');

			return stringRepresentation;
		};
		
		this.getNeighbors = function() {
			return neighbors;
		}
		
		this.getSortedNeighbors = function() {
			var unsortedObjectHash = {};
			var keys;
			var currentNodeValue;
			var sortedArray = [];

			//Get Node Values and put into object hash
			for(var i = 0, iLen = neighbors.length; i < iLen; i++) {
				currentNodeValue = neighbors[i].getValue();
				unsortedObjectHash[currentNodeValue] = neighbors[i];
			}

			//Get Keys from object hash
			keys = Object.keys(unsortedObjectHash);

			//Sort Keys
			keys.sort();

			//Create sorted array with objects
			for(var i = 0, iLen = keys.length; i < iLen; i++) {
				sortedArray.push(unsortedObjectHash[keys[i]]);
			}

			return sortedArray;
		};

		this.setCustomAttr = function(customAttr) {
			if(customAttr) {
				for(attr in customAttr) {
					if(customAttr.hasOwnProperty(attr)) {
						customAttrs[attr] = customAttr[attr];
					}
				}
			}
		};
		
		this.getCustomAttr = function(customAttr) {
			if(typeof customAttr == "string") {
				return customAttrs[customAttr];
			}
		}
		
		this.getValue = function() {
			return value;
		};
		
		this.setValue = function(val) {
			value = val;
		}
	};
})();
//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}

SCG.Library.PriorityQueue = (function() {
	
	//shared private variables
	
	return function() {
		var heap = [];
		
		var heapifyUp = function(node) {
			var parentNode = parent(node);
			
			while(heap[parentNode] < heap[node]) {
				//swap the two nodes
				var temp = heap[parentNode];
				heap[parentNode] = heap[node];
				heap[node] = temp;
				
				node = parentNode;
				parentNode = parent(parentNode);
			}
		};
		
		var heapifyDown = function() {
			var parentNode = 0;
			var leftChild = left(parentNode);
			var rightChild = right(parentNode);

			while(heap[parentNode] < heap[leftChild] || heap[parentNode] < heap[rightChild]) {
				if(heap[leftChild] >= heap[rightChild] || heap[rightChild] == undefined) {
					swap(parentNode, leftChild);
					parentNode = leftChild;
				} else {
					swap(parentNode, rightChild);
					parentNode = rightChild;
				}

				leftChild = left(parentNode);
				rightChild = right(parentNode);
			}
		};
		
		var parent = function(node) {
			return Math.floor((node-1) / 2);
		};
		
		var left = function(node) {
			return node * 2 + 1;
		};
		
		var right = function(node) {
			return node * 2 + 2;
		};
		
		var swap = function(node1, node2) {
			var temp = heap[node1];
			heap[node1] = heap[node2];
			heap[node2] = temp;
		};
		
		this.push = function(value) {
			heap.push(value);
			heapifyUp(heap.length -1);
		};
		
		this.pop = function() {
			var highestPriority = heap[0];

			if(heap.length <= 1) {
				heap.pop();
			} else {
				heap[0] = heap.pop();
				heapifyDown();
			}

			return highestPriority;
		};
		
		this.print = function() {
			console.log(heap);
		};
		
		this.exposeHeap = function() {
			return heap;
		};
		
		this.setHeap = function(array) {
			heap = array;
		}
	};
})();
//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}


SCG.Library.Queue = (function() {

	//shared private variable

	return function(initSettings) {
		if(initSettings != undefined && initSettings.value) {
			var HEAD = new SCG.Library.SinglyLinkedNode({value:initSettings.value});
		} else {
			var HEAD = undefined;
		}
		
		
		this.enqueue = function(value) {
			if(HEAD == undefined) {
				HEAD = new SCG.Library.SinglyLinkedNode({value:value});
			} else {
				var newNode = new SCG.Library.SinglyLinkedNode({value: value, nextNode: HEAD});
				HEAD = newNode;
			}
		};
		
		this.dequeue = function() {
			if(HEAD == undefined) {
				return undefined;
			} else if(HEAD.getNextNode() == undefined) {
				var returnValue = HEAD.getValue();
				HEAD = undefined;
				return returnValue;
			} else {
				var curPointer = HEAD.getNextNode();
				var prevPointer = HEAD;
				
				while(curPointer.getNextNode() != undefined) {
					curPointer = curPointer.getNextNode();
					prevPointer = prevPointer.getNextNode();
				}
				
				var returnValue = curPointer.getValue();
				prevPointer.setNextNode(undefined);
				return returnValue;
			}
		};
		
		this.print = function() {
			var curPointer = HEAD;
			var printString = "";
			
			while(curPointer != undefined) {
				printString += curPointer.getValue() + " ";
				curPointer = curPointer.getNextNode();
			}
			
			//If the last charecter on the string is a space. Delete it.
			if(printString[printString.length-1] == " ") {
				printString = printString.slice(0, printString.length - 1);
			}
				
			return printString;
		};
		
		this.map = function(callback) {
			var curPointer = HEAD;
			var printString = "";
			
			while(curPointer != undefined) {
				callback(curPointer);
				curPointer = curPointer.getNextNode();
			}
		};
		
		
		this.isEmpty = function() {
			if(HEAD == undefined) {
				return true;
			} else {
				return false;
			}
		};
	};
})();
//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}


SCG.Library.SinglyLinkedBinaryNode = (function() {

	//shared private variable

	return function(initSettings) {

		//Initialize Object
		if(initSettings == undefined) {
			var VALUE = undefined;
			var LEFT_NODE = undefined;
			var RIGHT_NODE = undefined;
		} else {
			var VALUE = initSettings.value || undefined;
			var LEFT_NODE = initSettings.leftNode || undefined;
			var RIGHT_NODE = initSettings.rightNode || undefined;
		}
		
		this.setValue = function(value) {
			VALUE = value;
		};
		
		this.getValue = function() {
			return VALUE;
		};
		
		this.setLeftNode = function(node) {
			LEFT_NODE = node;
		}
		
		this.getLeftNode = function() {
			return LEFT_NODE;
		};
		
		this.setRightNode = function(node) {
			RIGHT_NODE = node;
		};
		
		this.getRightNode = function() {
			return RIGHT_NODE;
		};
	};
})();
//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}

SCG.Library.SinglyLinkedCircularLinkedList = (function() {

	//shared private variables

	return function() {
		var HEAD = undefined;
		var POINTER = undefined;
		
		this.push = function(val) {
			var node = new SCG.Library.SinglyLinkedNode();
			node.setValue(val);
			
			if(HEAD == undefined) {
				HEAD = node;
				POINTER = node;
				node.setNextNode(HEAD);
			} else {
				var curPointer = HEAD;

				while(curPointer.getNextNode() != HEAD) {
					curPointer = curPointer.getNextNode();
				}

				curPointer.setNextNode(node);
				node.setNextNode(HEAD);
			}
		};
		
		this.pop = function() {
			if(HEAD == undefined) {
				return undefined;
			} else if(HEAD.getNextNode() == HEAD) {
				var nodeValue = HEAD.getValue();
				HEAD = undefined;
				POINTER = undefined;
				return nodeValue;
			} else {
				var curPointer = HEAD.getNextNode();
				var trailingPointer = HEAD;

				do {
					curPointer = curPointer.getNextNode();
					trailingPointer = trailingPointer.getNextNode();
				} while(curPointer.getNextNode() != HEAD);

				var nodeValue = curPointer.getValue();
				trailingPointer.setNextNode(HEAD);
				return nodeValue;
			}
		};
		
		this.removeNodeAtPointer = function() {
			if(POINTER == undefined) {
				return undefined;
			} else if (POINTER.getNextNode() == POINTER) {
				var nodeValue = POINTER.getValue();
				HEAD = undefined;
				POINTER = undefined;
				return nodeValue;
			} else {
				var nodeValue = POINTER.getValue();
				var trailingPointer = HEAD;
				
				//This handles the edge case where the pointer is pointing at the head.
				//In this case we need to move the pointer forward 1 appropriatly
				if(HEAD == POINTER) {
					HEAD = POINTER.getNextNode();
				}
				
				while(trailingPointer.getNextNode() != POINTER) {
					trailingPointer = trailingPointer.getNextNode();
				}
				
				trailingPointer.setNextNode(POINTER.getNextNode());
				return nodeValue;
			}
		};
		
		this.isEmpty = function() {
			return HEAD == undefined;
		};
		
		this.next = function() {
			if(HEAD == undefined) {
				return undefined;
			} else {
				POINTER = POINTER.getNextNode();
				return POINTER.getValue();
			}
		};
		
		this.getPointer = function() {
			if(POINTER == undefined) {
				return undefined;
			} else {
				return POINTER;
			}
		};
		
		this.getHead = function() {
			return HEAD;
		}
		
		this.resetPointer = function() {
			POINTER = HEAD;
		};
		
		this.print = function() {
			var curPointer = HEAD;
			
			if(curPointer == undefined) {
				return undefined;
			} else {
				var string = "";
				
				do {
					string += curPointer.getValue() + " ";
					curPointer = curPointer.getNextNode();
				} while(curPointer != HEAD);
				
				//If the last charecter on the string is a space. Delete it.
				if(string[string.length-1] == " ") {
					string = string.slice(0, string.length - 1);
				}
				
				return string;
			}
		};
	};
})();
//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}


SCG.Library.SinglyLinkedNode = (function() {

	//shared private variable

	return function(obj) {
		if(obj != undefined) {
			var value = obj.value || undefined;
			var nextNode = obj.nextNode || undefined;
		} else {
			var value = undefined;
			var nextNode = undefined;
		}

		this.setValue = function(val) {
			value = val;
		};

		this.setNextNode = function(node) {
			nextNode = node;
		};

		this.getNextNode = function() {
			return nextNode;
		}

		this.getValue = function() {
			return value;
		};
	};
})();
//Setup Namespace if it does not already exist.
if(typeof SCG === "undefined") {
	SCG = {Library:{}};
}

SCG.Library.Stack = (function() {

	//shared private variable

	return function(initialValue) {
		var HEAD = undefined;

		this.push = function(val) {
			if(HEAD == undefined) {
				HEAD = new SCG.Library.SinglyLinkedNode({value:val});
			} else {
				var curPointer = HEAD;
				var node = new SCG.Library.SinglyLinkedNode({value:val});
				
				while(curPointer.getNextNode() != undefined) {
					curPointer = curPointer.getNextNode();
				}
				
				curPointer.setNextNode(node);
			}
		};
		
		this.pop = function() {
			if(HEAD == undefined) { //Stack size of 0
				return undefined;
			} else if(HEAD.getNextNode() == undefined) { //Stack size of 1
				var nodeValue = HEAD.getValue();
				HEAD = undefined;
				return nodeValue;
			} else { //Stack Size of 1+
				var trailingPointer = HEAD;
				var curPointer = HEAD.getNextNode();
				var nodeValue = undefined;
				
				while(curPointer.getNextNode() != undefined) {
					trailingPointer = trailingPointer.getNextNode();
					curPointer = curPointer.getNextNode();
				}

				nodeValue = curPointer.getValue();
				trailingPointer.setNextNode(undefined);

				return nodeValue;
			}
		};
		
		this.print = function() {
			if(HEAD == undefined) {
				return undefined;
			} else {
				var string = "";
				var curPointer = HEAD;

				do {
					string += curPointer.getValue() + " ";
					curPointer = curPointer.getNextNode();
				} while(curPointer != undefined);

				//If the last charecter on the string is a space. Delete it.
				if(string[string.length-1] == " ") {
					string = string.slice(0, string.length - 1);
				}

				return string;
			}
		};

		this.isEmpty = function() {
			if(HEAD == undefined) {
				return true;
			} else {
				return false;
			}
		};

		//Initialization Script
		if(initialValue) {
			if(initialValue.value) {
				this.push(initialValue.value);
			} else {
				console.error('Error 3SXCD: You need to provide an original value wrapped in an object');
				return false;
			}
		}
	};
})();