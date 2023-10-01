/*
Probem Statement: Write a function createHelloWorld. It should return a new function that always returns "Hello World".
*/

function createHelloWorld() {
  return function (...args): string {
    return "Hello World";
  };
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

/*
Explanation: In this problem we just have to return "Hello World" from the inner function as done on line number 7
*/
