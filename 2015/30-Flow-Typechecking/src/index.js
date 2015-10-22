/* @flow */

// Changing the return type to number fixes the error
function foo(x: string, y: number): number {
  var result = x.length * y;
  console.log(result);
  return result;
}

foo('Hello', 42);
