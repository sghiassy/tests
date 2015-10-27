var should = require('should');

describe("I am the first behavior", function() {

  // beforeEach(function() {
  //   console.log('before each');
  // });

  it("should work", function(done) {
    (2).should.equal(2);
    done();
  });

  it("should work", function(done) {
    (2).should.equal(2);
    done();
  });

  describe("I am the nested describe statement", function() {

    it("I am the nested it statement", function() {
      "test".should.equal("test");
    });

  });

  it("should work", function(done) {
    (2).should.equal(2);
    done();
  });

});

describe("I am the serial describe", function() {
  it("I am the serial it", function() {
    "this".should.not.equal('t')
  })
});
