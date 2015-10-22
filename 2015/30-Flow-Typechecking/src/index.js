/* @flow */

function length(x) {
  if (x !== null) {
    return x.length;
  } else {
    return 0;
  }
}

var stuff = length('Hello') + length(null);
console.log(stuff);


function total(numbers: Array<number>) {
  var result = 0;

  for (var i = 0; i< numbers.length; i++) {
    result += numbers[i];
  }

  return result;
}

console.log(total([1,2,3,4]));
