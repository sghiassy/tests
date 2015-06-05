var should = require('should');
var mocha = require('mocha');
var assert = require("assert")

function isUnique(string) {
	var isUnique = true;
	var uniqueKeys = {};
	for (var i = 0, iLen = string.length - 1; i <= iLen; i++) {
		var currentCharecter = string.charAt(i);
		
		if (uniqueKeys[currentCharecter] == undefined) {
			uniqueKeys[currentCharecter] = 1;
		} else {
			isUnique = false;
			break;
		}
	}
	
	return isUnique;
}

describe("test", function() {

	it("should equal true", function() {
		var test = "abcdefgh";
		var ans = isUnique(test);
		ans.should.true;
	});
	
	it("should recognize multiple spaces", function() {
		var test = "abc def ghi";
		isUnique(test).should.equal.false;
	});
	
	it("should be able to recognize special charecters", function() {
		var test = "nbc!qaz!";
		isUnique(test).should.equal.false;
	});
	
});