var should = require('should');

function reverseString(string) {
	return reverseStringManually(string);
	// return string.split('').reverse().join('');
};

function reverseStringManually(string) {
	var newStr = [];

	for (var i = string.length - 1; i >= 0; i--) {
		newStr.push(string.charAt(i));
	}

	return newStr.join('');
}

describe("function: reverseString", function() {

	it("should reverse a string", function() {
		var test = "ta";
		reverseString(test).should.equal("at");
	});

	it("should reverse a string", function() {
		var test = "asdhsfjnhdsgfndgshf";
		reverseString(test).should.equal("fhsgdnfgsdhnjfshdsa");
		reverseString(test).should.not.equal("fhsgdnfgsdhnjfasdfasdfdsafshdsa");
	});
	
	it("should be able to handle undefined charecters", function() {
		var test = "asdhsfjnhdsgfndgshf" + undefined + "asdhsfjnhdsgfndgshf";
		// reverseString(test).should.equal("fhsgdnfgsdhnjfshdsa");
		reverseString(test).should.equal("fhsgdnfgsdhnjfshdsa" + "denifednu" + "fhsgdnfgsdhnjfshdsa");
	});
	
	it("should be able to handle undefined charecters", function() {
		var test = "asdhsfjnhdsgfndgsh\nf";
		reverseString(test).should.equal("f\nhsgdnfgsdhnjfshdsa");
	});

});