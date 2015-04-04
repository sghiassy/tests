if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

ClassyObject = {};

ClassyObject.copyTo = function(target, source) {
	for(var attr in source) {
		target[attr] = source[attr];
	}
};

ClassyObject.inherits = function(inherited, definition) {
	var inheritatedInstance = Object.create(inherited);
	ClassyObject.copyTo(inheritatedInstance, definition)
	var ClassConstructor = function() {};
	ClassConstructor.prototype = inheritatedInstance;
	return ClassConstructor;
};

myPrototype = {};
MyClass = ClassyObject.inherits(myPrototype, {
	foo: "bar", 
	baz: function() {
		console.log(this.foo);
	}
});

myObj = new MyClass();
myObj.baz();