var should = require('should');

describe("2First test suite", function() {

  it("2should work", function() {
    return true;
  });

  it("2should not work", function() {
    return false;
  });

  it("2should use should", function() {

    (2).should.equal(2);
  });

  it("2should fail when should tells it to", function() {
    (2).should.equal(4); // <-- this should fail
  });

  describe("2no idea what a nested describe does", function() {

    it("2I'm a nested it statement, oh jeez", function() {
      "test".should.equal("test");
    })

  });

});
