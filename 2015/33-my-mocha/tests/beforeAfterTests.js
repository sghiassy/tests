var should = require('should');

describe("root", function() {

  before(function() {
    console.log('root:before1')
  });

  before(function() {
    console.log('root:before2')
  });

  beforeEach(function() {
    console.log('root:beforeEach1')
  });

  beforeEach(function() {
    console.log('root:beforeEach2')
  });

  afterEach(function() {
    console.log('root:afterEach1');
  });

  afterEach(function() {
    console.log('root:afterEach2');
  });

  it("top-level it1", function() {});

  it("top-level it2", function() {});

  describe("firstSuite", function() {

    before(function() {
      console.log('root:firstSuite:before')
    });

    after(function() {
      console.log('root:firstSuite:after');
    });

    beforeEach(function() {
      console.log('root:firstSuite:beforeEach')
    });

    afterEach(function() {
      console.log('root:firstSuite:afterEach');
    });

    it("firstSuite test1", function() {});

    it("firstSuite test2", function() {});

    it("firstSuite test3", function() {});

    describe("nestedSuite", function() {

      before(function() {
        console.log('root:firstSuite:nestedSuite:before')
      });

      after(function() {
        console.log('root:firstSuite:nestedSuite:after');
      });

      beforeEach(function() {
        console.log('root:firstSuite:nestedSuite:beforeEach')
      });

      afterEach(function() {
        console.log('root:firstSuite:nestedSuite:afterEach');
      });

      it("nestedSuite test1", function() {});

      it("nestedSuite test2", function() {});

      it("nestedSuite test3", function() {});

      describe("nestedNestedSuite", function() {

        before(function() {
          console.log('root:firstSuite:nestedSuite:nestedNestedSuite:before')
        });

        after(function() {
          console.log('root:firstSuite:nestedSuite:nestedNestedSuite:after');
        });

        beforeEach(function() {
          console.log('root:firstSuite:nestedSuite:nestedNestedSuite:beforeEach')
        });

        afterEach(function() {
          console.log('root:firstSuite:nestedSuite:nestedNestedSuite:afterEach');
        });

        it("nestedNestedSuite test1", function() {});

        it("nestedNestedSuite test2", function() {});

        it("nestedNestedSuite test3", function() {});

      });

    });

  });

  describe("secondSuite", function() {

    before(function() {
      console.log('root:secondSuite:before')
    });

    after(function() {
      console.log('root:secondSuite:after');
    });

    beforeEach(function() {
      console.log('root:secondSuite:beforeEach')
    });

    afterEach(function() {
      console.log('root:secondSuite:afterEach');
    });

    it("secondSuite test1", function() {});

    it("secondSuite test2", function() {});

    it("secondSuite test3", function() {});

  });

  after(function() {
    console.log('root:after1');
  });

  after(function() {
    console.log('root:after2');
  });

  after(function() {
    console.log('root:after3');
  });

});
