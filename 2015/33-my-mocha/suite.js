'use strict';

var Test = require('./test');

var STATES = {
  NOT_STARTED: 0.1, // using floats instead of ints so that
  SETUP_COMPLETED: 0.2, // these state "enums" don't accidently
  SUITE_COMPLETED: 0.3, // get confused for test states. Tests and
  // Suites have different states
}

class Suite {
  constructor(props) {
    // Set values from props
    this.title = props.title;
    this.fn = props.fn;
    this.parentSuite = props.parentSuite;

    // Set default values
    this.suites = [];
    this.tests = [];
    this.beforeHooks = [];
    this.afterHooks = [];
    this.beforeEachHooks = [];
    this.afterEachHooks = [];
    this.currentState = STATES.NOT_STARTED;
  }

  runLoop() {
    this.setup();
    this.runTests(function() {
      return; // early exit
    });
    this.runSuites(function() {
      return; // early exit
    });
    this.tearDown();
  }

  setup() {
    var setupHasCompleted = this.currentState >= STATES.SETUP_COMPLETED;

    if (!setupHasCompleted) {

      console.log(this.title);

      // let the runnner know that a new suite became active
      // this is necessary to properly redirect global functions to the right class
      global.ee.emit('newSuiteDidBecomeActive', this);

      // run the suites function to capture new describe/it functions.
      // The relevant functions will be picked up globally and assigned to this class externally
      // A wierd process, but necessary to keep the api pretty for end-users
      this.fn();

      this.beforeHooks.forEach((beforeHook) => {
        beforeHook.fn.call(beforeHook);
      });

      this.currentState = STATES.SETUP_COMPLETED;
    }
  }

  runTests(earlyExit) {
    // Iteratively go through all the sub-tests
    for (var i = 0; i < this.tests.length; i++) {
      let currentTest = this.tests[i];
      let currentTestHasCompleted = currentTest.currentState === Test.STATES.TEST_COMPLETED;

      if (!currentTestHasCompleted) {
        currentTest.runTest();
        earlyExit(); // If we start to run a test, then execute the earlyExit function to exit the run loop
      }
    }
  }

  runSuites(earlyExit) {
    // Iteratively go through all the sub-suites
    for (var j = 0; j < this.suites.length; j++) {
      let currentSuite = this.suites[j];
      let currentSuiteHasCompleted = currentSuite.currentState === STATES.SUITE_COMPLETED

      if (!currentSuiteHasCompleted) {
        currentSuite.runLoop.call(currentSuite);
        earlyExit(); // If we start to run a suite, then execute the earlyExit function to exit the run loop
      }
    }
  }

  tearDown() {
    this.afterHooks.forEach((afterHook) => {
      afterHook.fn.call(afterHook);
    });

    ee.emit('suiteDidFinish', this);

    this.currentState = STATES.SUITE_COMPLETED;
  }

  /**
   * beforeEach hooks run outwards-in. Meaning that beforeEach hooks
   * at the root execute first and then cascade in towards
   * child suites. This is different than afterEach hooks
   */
  runAllBeforeEach() {
    var hooksToRun = [];
    var currentSuite = this;

    while (currentSuite !== undefined) {
      hooksToRun = currentSuite.beforeEachHooks.concat(hooksToRun); // take the current hooks and put them at the beginning of the array

      currentSuite = currentSuite.parentSuite;
    }

    hooksToRun.forEach((beforeEachHook) => {
      beforeEachHook.fn.call(beforeEachHook);
    });
  }

  /**
   * afterEach hooks run innwards-out. Meaning that afterEach hooks
   * at the current level execute first and then bubble upwards
   * to the root. This is different than beforeEach hooks
   */
  runAllAfterEach() {
    var hooksToRun = [];
    var currentSuite = this;

    while (currentSuite !== undefined) {
      currentSuite.afterEachHooks.forEach((afterEachHook) => {
        afterEachHook.fn.call(afterEachHook);
      });

      currentSuite = currentSuite.parentSuite;
    }
  }
}

module.exports = Suite;
