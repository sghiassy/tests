'use strict';

function testPromise() {
    console.log('Started: Sync code started');

    var p1 = new Promise(function(resolve, reject) {
      console.log('Promise started: Async code started');

      setTimeout(function() {
        resolve('you stupid asshole');
      }, Math.random() * 2000 + 1000);
    });

    p1.then(function(val) {
      console.log('Promise fulfilled with', val);
    }).catch(function(reason) {
      console.log('Handle rejected promise ('+reason+') here.');
    });

    console.log('Sync code terminated');
};

testPromise();