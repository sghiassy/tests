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
      return "p1.then is returning"
    }).then(function(val) {
      console.log('chained promise1', val);
       return "p1.then is returning for the second chain"
    }).then(function(val) {
      console.log('chained promise2', val);
    }).catch(function(reason) {
      console.log('Handle rejected promise ('+reason+') here.');
    });

    console.log('Sync code terminated');
};

testPromise();