var should = require('should');

describe("I am the first behavior", function() {

  it("should work", function() {
    (2).should.equal(2);
  });

  describe("I am the nested describe statement", function() {

    it("I am the nested it statement", function() {
      "test".should.equal("test");
    });

  });

});
