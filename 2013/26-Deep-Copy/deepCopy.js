var obj = {
	one: "one",
	two: 2,
	three: [1,2,3],
	four: {
		five: {
			six: {
				seven: [1,2,3,4,5,6,7]
			}
		}
	},
	eight: 8,
	nine: 9
};

function isPrimitive(value) {
	if(typeof value === "string" || typeof obj === "number") {
		return true;
	} else {
		return false;
	}
}

function clone(obj) {
	if(isPrimitive(obj)) {
		return obj;
	} else {
		var newObj;

		if(typeof obj === "array") {
			newObj = [];
		} else if(typeof obj === "object") {
			newObj = {};
		}

		for(var key in obj) {
			if(obj.hasOwnProperty(key)) {
				newObj[key] = clone(obj[key])
			}
		}

		return newObj;
	}
}

var newObj = clone(obj);



//Quick unit test


newObj.one = 1;

if(newObj.one === obj.one) {
	console.log("newObj is not a deep copy of obj");
} else {
	console.log("newObj is a deep copy of obj")
}