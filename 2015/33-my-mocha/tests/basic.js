var should = require('should');

describe("First test suite", function() {

  this.it("should work", function() {
    return true;
  });

  this.it("should not work", function() {
    return false;
  });

  this.it("should use should", function() {

    (2).should.equal(2);
  });

  this.it("should fail when should tells it to", function() {
    (2).should.equal(4); // <-- this should fail
  });

  this.describe("no idea what a nested describe does", function() {

    this.it("I'm a nested it statement, oh jeez", function() {
      "test".should.equal("test");
    })

  });

});

describe("Second test suite", function() {

  this.it("should work", function() {
    return true;
  });

  this.it("should not work", function() {
    return false;
  });

  this.it("should use should", function() {

    (2).should.equal(2);
  });

  this.it("should fail when should tells it to", function() {
    (2).should.equal(4); // <-- this should fail
  });

  this.describe("no idea what a nested describe does", function() {

    this.it("I'm a nested it statement, oh jeez", function() {
      "test".should.equal("test");
    })

  });

});
