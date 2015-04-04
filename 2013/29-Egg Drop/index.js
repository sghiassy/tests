#! /usr/local/bin/node

var ans = 98;
var lookAhead = 10;

var baseFloor = (ans - (ans % lookAhead));
var jumpsTillLookAheadBreaks = (baseFloor / lookAhead) + 1;
var followUpShots = ans - baseFloor;

console.log('baseFloor: ', baseFloor);
console.log('jumpsTillLookAheadBreaks: ', jumpsTillLookAheadBreaks);
console.log('followUpShots: ', followUpShots);
console.log('total shots: ', jumpsTillLookAheadBreaks + followUpShots);

console.log('Given a lookAhead of ' + lookAhead + ' you would need ' + jumpsTillLookAheadBreaks + followUpShots + ' total shots');