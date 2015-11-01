'use strict';

function testPromise() {
    console.log('Start of script');

    var p1 = new Promise(function(resolve, reject) {
      console.log('Promise started');

      setTimeout(function() {
        resolve('the settimeout function completed');
      }, 1000);
    });

    p1.then(function(val) {
      console.log('Promise fulfilled with', val);
      return true
    }).then(function(val) {
      console.log('chained promise1', val);
      var p2 = new Promise(function(resolve, reject) {
      console.log('Promise started');

      setTimeout(function() {
        reject('the settimeout function completed222');
      }, 5000);
    });
    return p2;
    }).then(function(val) {
      console.log('I won\'t be called until the second promise is fullfilled', val);
    }).catch(function(reason) {
      console.log('Handle rejected promise ('+reason+') here.');
    });

    console.log('Sync code terminated');
};

testPromise();