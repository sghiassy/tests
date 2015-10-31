var should = require('should');

describe("root", function() {

  var amount = 2;

  before(function() {
    amount += 435234;
    // console.log('root:before1');
  });

  before(function() {
    amount += 4352.34;
    // console.log('root:before2');
  });

  beforeEach(function() {
    amount -=934.324
    // console.log('root:beforeEach1');
  });

  beforeEach(function() {
    amount /= 2;
    // console.log('root:beforeEach2');
  });

  afterEach(function() {
    amount *= 2;
    // console.log('root:afterEach1');
  });

  afterEach(function() {
    amount += 0.0034;
    // console.log('root:afterEach2');
  });

  it("top-level it1", function() {
    amount.should.equal(219327.008);
  });

  it("top-level it2", function() {
    amount.should.equal(218859.84769999998);
  });

  describe("firstSuite", function() {

    before(function() {
      // console.log('root:firstSuite:before');
      amount *= 2;
    });

    after(function() {
      amount -= 0.000099999;
      // console.log('root:firstSuite:after');
    });

    beforeEach(function() {
      amount -= 234;
      // console.log('root:firstSuite:beforeEach')
    });

    afterEach(function() {
      amount -= 3245.999987677876
      // console.log('root:firstSuite:afterEach');
    });

    it("firstSuite test1", function() {
      amount.should.equal(437018.53679999994);
    });

    it("firstSuite test2", function() {
      amount.should.equal(433071.37651232205);
    });

    it("firstSuite test3", function() {
      amount.should.equal(429124.21622464416);
    });

    describe("nestedSuite", function() {

      before(function() {
        amount += 0.11314;
        // console.log('root:firstSuite:nestedSuite:before')
      });

      after(function() {
        amount += 0.98534;
        // console.log('root:firstSuite:nestedSuite:after');
      });

      beforeEach(function() {
        amount += 123.1134;
        // console.log('root:firstSuite:nestedSuite:beforeEach')
      });

      afterEach(function() {
        amount -= 333.133134;
        // console.log('root:firstSuite:nestedSuite:afterEach');
      });

      it("nestedSuite test1", function() {
        amount.should.equal(425300.22590696625);
      });

      it("nestedSuite test2", function() {
        amount.should.equal(421143.04588528833);
      });

      it("nestedSuite test3", function(done) {
        amount.should.equal(416985.8658636104);
        setTimeout(done, 2000);
      });

      describe("nestedNestedSuite", function() {

        before(function() {
          amount -= 6959.344583489;
          // console.log('root:firstSuite:nestedSuite:nestedNestedSuite:before')
        });

        after(function() {
          amount -= 34.34344343;
          // console.log('root:firstSuite:nestedSuite:nestedNestedSuite:after');
        });

        beforeEach(function() {
          amount -= 23452345.54433;
          // console.log('root:firstSuite:nestedSuite:nestedNestedSuite:beforeEach')
        });

        afterEach(function() {
          amount += 42353.2343;
          // console.log('root:firstSuite:nestedSuite:nestedNestedSuite:afterEach');
        });

        it("nestedNestedSuite test1", function() {
          amount.should.equal(-23042996.530779812);
        });

        it("nestedNestedSuite test2", function() {
          amount.should.equal(-46457146.020831496);
        });

        it("nestedNestedSuite test3", function() {
          amount.should.equal(-69871295.51088318);
        });

      });

    });

  });

  describe("secondSuite", function() {

    before(function() {
      amount += 3.987654;
      // console.log('root:secondSuite:before')
    });

    after(function() {
      amount += 3.2341;
      // console.log('root:secondSuite:after');
    });

    beforeEach(function() {
      amount += 234.234423;
      // console.log('root:secondSuite:beforeEach')
    });

    afterEach(function() {
      amount += 546;
      // console.log('root:secondSuite:afterEach');
    });

    it("secondSuite test1", function() {
      amount.should.equal(-69832769.02085656);
    });

    it("secondSuite test2", function() {
      amount.should.equal(-69832455.94673356);
    });

    it("secondSuite test3", function() {
      amount.should.equal(-69832142.87261057);
    });

  });

  after(function() {
    amount *= 1.1;
    // console.log('root:after1');
  });

  after(function() {
    amount *= 1.2;
    // console.log('root:after2');
  });

  after(function() {
    amount *= 1.3;
    // console.log('root:after3');
  });

});
