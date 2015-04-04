function GraphNode(value) {
	if(value) {
		this._value = value;
	} else {
		this._value = undefined;
	}
}

GraphNode.prototype = {
	print: function() {
		console.log(this._value);
	},
	getValue: function() {
		return this._value;
	},
	setValue: function(value) {
		this._value = value;
	}
};

function Graph(value) {
	if(value) {
		this._adjList = value;
	} else {
		this._adjList = [];
	}
};

Graph.prototype = {
	print: function() {
		this._adjList.forEach(function(i) {
			console.log(i.print());
		});
	},
	addNode: function(node) {
		if(node instanceof GraphNode) {
			this._adjList.push(node);
		} else {
			throw "node is not of type GraphNode";
		}
	},
	addValue: function(value) {
		var newNode = new GraphNode(value);
		this.addNode(newNode);
	},
	connect: function(node1, node2) {}
};

var graph = new Graph();

graph.addValue({
	word: "|",
	startNum: 0,
	endNum: 0
});

graph.print();



var DICT = {
	'shaheen': 1,
	'is': 1,
	'the': 1,
	'master': 1,
	'of': 1,
	'the': 1,
	'world': 1,
	'them': 1,
	'he': 1,
	'hem': 1,
	'mast': 1
};

var FoundWord = {
	word: '',
	startNum: undefined,
	endNum: undefined
}

console.log('DICT', DICT);

var str = "shaheenisthemasteroftheworld";
var foundWords = {};

for(var searchLength = 1, maxSearchLength = str.length + 1; searchLength <= maxSearchLength; searchLength++) {
	for(var i = 0; i + searchLength <= str.length; i++) {
		var currentScan = str.substr(i, searchLength);

		if(DICT[currentScan]) {
			var newWord = Object.create(FoundWord);
			newWord.word = currentScan;
			newWord.startNum = i;
			newWord.endNum = i + searchLength;
			
			if(foundWords[newWord.startNum]) {
				foundWords[newWord.startNum].push(newWord);
			} else {
				foundWords[newWord.startNum] = [newWord];
			}
		}
	}
}

console.log('foundWords', foundWords);