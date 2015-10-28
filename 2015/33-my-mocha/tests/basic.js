var should = require('should');

describe("0 First test suite", function() {

  it("1 should work", function() {
    return true;
  });

  it("2 should not work", function() {
    return false;
  });

  it("3 is using a done argument", function(done) {
    (2).should.equal(2);
    done();
  });

  it("4 should fail when should tells it to", function() {
    (2).should.equal(4); // <-- this should fail
  });

  describe("5 no idea what a nested describe does", function() {

    it("6 I'm a nested it statement, oh jeez", function() {
      "test".should.equal("test");
    })

  });

});

describe("7 Second test suite", function() {

  it("8 should work", function() {
    return true;
  });

  it("9 should not work", function() {
    return false;
  });

  it("10 should use should", function() {

    (2).should.equal(2);
  });

  it("11 should fail when should tells it to", function() {
    (2).should.equal(4); // <-- this should fail
  });

  describe("12 no idea what a nested describe does", function() {

    it("13 I'm a nested it statement, oh jeez", function() {
      "test".should.equal("test");
    })

  });

});
