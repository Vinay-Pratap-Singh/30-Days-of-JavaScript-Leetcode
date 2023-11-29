# LeetCode 30 Days of JavaScript

This repository contains my solutions to the LeetCode 30 Days JavaScript Challenge. I'm on a journey to improve my JavaScript skills, and I'm excited to share my progress with you. Explore the solutions, learn from them, and join me on this coding adventure as we explore the world of JavaScript together!

> **All the problems are solved using Typescript JS.**

[My Leetcode Profile 😊](https://leetcode.com/itsharvihere/)

[Join the Challenge 😍](https://leetcode.com/studyplan/30-days-of-javascript/)

## Table of Contents

- [01 Create Hello World Function](#01-create-hello-world-function)
- [02 Counter](#02-counter)
- [03 To Be Or Not To Be](#03-to-be-or-not-to-be)
- [04 Counter II](#04-counter-ii)
- [05 Apply Transform Over Each Element in Array](#05-apply-transform-over-each-element-in-array)
- [06 Filter Elements from Array](#05-filter-elements-from-array)
- [07 Array Reduce Transformation](#07-array-reduce-transformation)
- [08 Function Composition](#08-function-composition)
- [09 Return Length of Arguments Passed](#09-return-length-of-arguments-passed)
- [10 Allow One Function Call](#10-allow-one-function-call)
- [11 Memoize](#11-memoize)
- [12 Add Two Promises](#12-add-two-promises)
- [13 Sleep](#13-sleep)
- [14 Timeout Cancellation](#14-timeout-cancellation)
- [15 Interval Cancellation](#15-interval-cancellation)
- [16 Promise Time Limit](#16-promise-time-limit)
- [17 Cache With Time Limit](#17-cache-with-time-limit)
- [18 Debounce](#18-debounce)
- [19 Execute Asynchronous Functions in Parallel](#19-execute-asynchronous-functions-in-parallel)
- [20 Is Object Empty](#20-is-object-empty)
- [21 Chunk Array](#21-chunk-array)
- [22 Array Prototype Last](#22-array-prototype-last)
- [23 Group By](#23-group-by)
- [24 Sort By](#24-sort-by)
- [25 Join Two Arrays by ID](#25-join-two-arrays-by-id)
- [26 Flatten Deeply Nested Array](#26-flatten-deeply-nested-array)
- [27 Compact Object](#27-compact-object)
- [28 Event Emitter](#28-event-emitter)
- [29 Array Wrapper](#29-array-wrapper)
- [30 Calculator with Method Chaining](#30-calculator-with-method-chaining)

## 01 Create Hello World Function

### [Problem Statement ↗️](https://leetcode.com/problems/create-hello-world-function/?envType=study-plan-v2&envId=30-days-of-javascript)

Write a function createHelloWorld. It should return a new function that always returns "Hello World".

### Solution

```js
function createHelloWorld() {
  return function (...args): string {
    return "Hello World";
  };
}
```

### Explanation

- The createHelloWorld function generates a new function.
- The generated function consistently returns the string "Hello World" when invoked.

### Time Complexity

The time complexity of calling the generated function is O(1) since it always returns the same result, and the execution time is constant.

### Space Complexity

The space complexity is O(1) because the inner function doesn't use any additional memory that scales with the input.

## 02 Counter

### [Problem Statement ↗️](https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript)

Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

### Solution

```js
function createCounter(n: number): () => number {
  let number = n - 1;
  return function () {
    number += 1;
    return number;
  };
}
```

### Explanation

- The createCounter function takes an initial value n and returns a function.
- The returned function, when called, increments and returns the counter value.
- This solution utilizes closure, where the inner function has access to the outer function's variables.
- The outer function (createCounter) initializes number, and the inner function (the one returned) maintains and increments it.

### Time Complexity

The time complexity of this solution is constant O(1) because the function performs a fixed number of operations regardless of the input.

### Space Complexity

The space complexity is O(1) as there is a constant amount of space used, mainly for the number variable.

## 03 To Be Or Not To Be

### [Problem Statement ↗️](https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript)

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

**toBe(val)** accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".

**notToBe(val)** accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

### Solution

```js
type ToBeOrNotToBe = {
  toBe: (val: any) => boolean,
  notToBe: (val: any) => boolean,
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (value: any) => {
      if (value === val) {
        return true;
      } else {
        throw "Not Equal";
      }
    },
    notToBe: (value: any) => {
      if (value !== val) {
        return true;
      } else {
        throw "Equal";
      }
    },
  };
}
```

### Explanation

- The expect function takes a value val and returns an object with two functions: toBe and notToBe.
- toBe compares the given value with the stored value (val). If they are strictly equal, it returns true; otherwise, it throws an error "Not Equal".
- notToBe compares the given value with the stored value (val). If they are not strictly equal, it returns true; otherwise, it throws an error "Equal".

### Time Complexity

The time complexity of this solution is constant O(1) because both toBe and notToBe perform a fixed number of operations regardless of the input.

### Space Complexity

The space complexity is O(1) as there is a constant amount of space used, mainly for the number variable. This solution utilizes a minimal amount of memory regardless of the input size.

## 04 Counter II

### [Problem Statement ↗️](https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript)

Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

- increment() increases the current value by 1 and then returns it.
- decrement() reduces the current value by 1 and then returns it.
- reset() sets the current value to init and then returns it.

### Solution

```js
type ReturnObj = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
};

function createCounter(init: number): ReturnObj {
  let value = init;

  return {
    increment: () => {
      value += 1;
      return value;
    },
    decrement: () => {
      value -= 1;
      return value;
    },
    reset: () => {
      value = init;
      return init;
    },
  };
}
```

### Explanation

- The createCounter function takes an initial value init and returns an object with three functions: increment, decrement, and reset.
- The value variable is used to store the current value of the counter.
- increment: Increases the current value by 1 and returns the updated value.
- decrement: Reduces the current value by 1 and returns the updated value.
- reset: Sets the current value to the initial value (init) and returns it.

### Time Complexity

The time complexity of all three functions (increment, decrement, and reset) is constant O(1). Each function performs a fixed number of operations regardless of the input size.

### Space Complexity

The space complexity is O(1) as there is a constant amount of space used. The value variable is the only significant memory usage, and it does not depend on the input size.

## 05 Apply Transform Over Each Element in Array

### [Problem Statement ↗️](https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript)

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

### Solution without using Map method (as asked)

```js
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const returnedArray: number[] = [];
  arr.forEach((item, index) => {
    const value = fn(item, index);
    returnedArray.push(value);
  });
  return returnedArray;
}
```

### Explanation

This problem has asked for an array of number whose value will be from calling the **fn** function with all the elements of **arr** array one by one, so we have to pass arr array elements with their respective array index in fn function to get a value and will have to store in an array and have to return it as an output.

So for it I had declared an empty array named returnedArray, after which you can use any loop like forEach as above or simple for loop to loop over each elements of the arr array then will have to pass the array element and index to the fn function to get a value and then push it in the array returnedArray. After the loop I had simply returned the returnedArray.

### Solution by using Map method

```js
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  return arr.map((item, index) => {
    return fn(item, index);
  });
}
```

### Explanation

As the problem statement says that we should not use map method over it but if you want you can use map method on arr array and can just return it as map method will create a new array with the values that are being returned from the map and that will be returned by return keyword. Inside the map method we can simply return the value getting from fn function by passing each element and their respective index in the fn function.

## 06 Filter Elements from Array

### [Problem Statement ↗️](https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript)

Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

- arr[i] - number from the arr
- i - index of arr[i]

filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

### Solution without using Filter method (as asked)

```js
type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  const newArray: number[] = [];
  arr.forEach((item, index) => {
    const result = fn(item, index);
    if (result) {
      newArray.push(item);
    }
  });
  return newArray;
}
```

### Solution by using Filter method

```js
type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  return arr.filter((item, index) => {
    return fn(item, index);
  });
}
```

## 07 Array Reduce Transformation

### [Problem Statement ↗️](https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript)

Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

### Solution without using Reduce method (as asked)

```js
type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  let output = init;
  nums.length &&
    nums.forEach((num) => {
      output = fn(output, num);
    });
  return output;
}
```

### Solution by using Reduce method

```js
type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  return nums.reduce((output, num) => {
    return fn(output, num);
  }, init);
}
```

## 08 Function Composition

### [Problem Statement ↗️](https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript)

Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

### Solution

```js
type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    let output = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      output = functions[i](output);
    }
    return output;
  };
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
```

## 09 Return Length of Arguments Passed

### [Problem Statement ↗️](https://leetcode.com/problems/return-length-of-arguments-passed/?envType=study-plan-v2&envId=30-days-of-javascript)

Write a function argumentsLength that returns the count of arguments passed to it.

### Solution

```js
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}

/**
 * argumentsLength(1, 2, 3); // 3
 */
```

## 10 Allow One Function Call

### [Problem Statement ↗️](https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript)

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

- The first time the returned function is called, it should return the same result as fn.
- Every subsequent time it is called, it should return undefined.

### Solution

```js
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: Function): OnceFn {
  let flag = false;
  return function (...args) {
    if (flag) {
      return undefined;
    } else {
      flag = true;
      return fn(...args);
    }
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
```

## 11 Memoize

### [Problem Statement ↗️](https://leetcode.com/problems/memoize/?envType=study-plan-v2&envId=30-days-of-javascript)

Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

- sum accepts two integers a and b and returns a + b.
- fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
- factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) \* n otherwise.

### Solution

```js
type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  const cache = {};
  return function (...args) {
    const key: any = args;
    if (key in cache) {
      return cache[key];
    }
    const output = fn(...args);
    cache[key] = output;
    return output;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
```

## 12 Add Two Promises

### [Problem Statement ↗️](https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript)

Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

### Solution without using Promise.All

```js
type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  const num1 = await promise1;
  const num2 = await promise2;
  return num1 + num2;
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
```

### Solution by using Promise.All

```js
type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  const [num1, num2] = await Promise.all([promise1, promise2]);
  return num1 + num2;
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
```

## 13 Sleep

### [Problem Statement ↗️](https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript)

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

### Solution

```js
async function sleep(millis: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, millis));
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
```

## 14 Timeout Cancellation

### [Problem Statement ↗️](https://leetcode.com/problems/timeout-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript)

Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of t, fn should be called with args passed as parameters unless cancelFn was invoked before the delay of t milliseconds elapses, specifically at cancelT ms. In that case, fn should never be called.

### Solution

```js
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  const timeOver = setTimeout(() => fn(...args), t);
  const cancelFn = () => clearTimeout(timeOver);
  return cancelFn;
}

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)})
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
```

## 15 Interval Cancellation

### [Problem Statement ↗️](https://leetcode.com/problems/interval-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript)

Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelT ms.

### Solution

```js
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  fn(...args);
  const timeOver = setInterval(() => fn(...args), t);
  const cancelFn = () => clearInterval(timeOver);
  return cancelFn;
}

/**
 *  const result = []
 *
 *  const fn = (x) => x * 2
 *  const args = [4], t = 35, cancelT = 190
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start)
 *      result.push({"time": diff, "returned": fn(...argsArr)})
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *    console.log(result)  // [
 *                         //      {"time":0,"returned":8},
 *                         //      {"time":35,"returned":8},
 *                         //      {"time":70,"returned":8},
 *                         //      {"time":105,"returned":8},
 *                         //      {"time":140,"returned":8},
 *                         //      {"time":175,"returned":8}
 *                         //  ]
 *  }, cancelT + t + 15)
 */
```

## 16 Promise Time Limit

### [Problem Statement ↗️](https://leetcode.com/problems/promise-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript)

Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

- If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
- If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

### Solution

```js
type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const onSuccess = fn(...args);
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });
    return Promise.race([onSuccess, timeoutPromise]);
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
```

## 17 Cache With Time Limit

### [Problem Statement ↗️](https://leetcode.com/problems/cache-with-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript)

Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

- set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

- get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

- count(): returns the count of un-expired keys.

### Solution

```js
class TimeLimitedCache {
  obj: any;
  constructor() {
    this.obj = {};
  }

  set(key: number, value: number, duration: number): boolean {
    const timer = setTimeout(() => {
      delete this.obj[key];
    }, duration);
    if (!(key in this.obj)) {
      this.obj[key] = [value, timer];
      return false;
    } else {
      clearTimeout(this.obj[key][1]);
      this.obj[key] = [value, timer];
      return true;
    }
  }

  get(key: number): number {
    if (key in this.obj) {
      return this.obj[key][0];
    }
    return -1;
  }

  count(): number {
    return Object.keys(this.obj).length;
  }
}

// const timeLimitedCache = new TimeLimitedCache();
// timeLimitedCache.set(1, 42, 1000); // false
// timeLimitedCache.get(1); // 42
// timeLimitedCache.count(); // 1
```

## 18 Debounce

### [Problem Statement ↗️](https://leetcode.com/problems/debounce/?envType=study-plan-v2&envId=30-days-of-javascript)

Given a function fn and a time in milliseconds t, return a debounced version of that function.

A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

### Solution

```js
type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
  let timerID = undefined;
  return function (...args) {
    clearTimeout(timerID);
    timerID = setTimeout(fn, t, ...args);
  };
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
```

## 19 Execute Asynchronous Functions in Parallel

### [Problem Statement ↗️](https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/?envType=study-plan-v2&envId=30-days-of-javascript)

Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

promise resolves:

- When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.

promise rejects:

- When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.

### Solution

```js
type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const output = [];
    let count = functions.length;
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((response) => {
          output[i] = response;
          count--;

          if (count === 0) return resolve(output);
        })
        .catch(reject);
    }
  });
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
```

## 20 Is Object Empty

### [Problem Statement ↗️](https://leetcode.com/problems/is-object-empty/description/?envType=study-plan-v2&envId=30-days-of-javascript)

Given an object or an array, return if it is empty.

- An empty object contains no key-value pairs.
- An empty array contains no elements.

You may assume the object or array is the output of JSON.parse.

### Solution

```js
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

function isEmpty(obj: Obj): boolean {
  return Object.keys(obj).length === 0 ? true : false;
}
```

## 21 Chunk Array

### [Problem Statement ↗️](https://leetcode.com/problems/chunk-array/?envType=study-plan-v2&envId=30-days-of-javascript)

Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

### Solution

```js
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  const output: Obj[][] = [];
  const totalRequiredIterations = Math.ceil(arr.length / size);
  let chunk = 0;
  while (chunk < totalRequiredIterations) {
    if (arr.length > size) {
      let data = arr.splice(0, size);
      output.push(data);
    } else {
      output.push(arr);
    }
    chunk += 1;
  }
  return output;
}
```

## 22 Array Prototype Last

### [Problem Statement ↗️](https://leetcode.com/problems/array-prototype-last/?envType=study-plan-v2&envId=30-days-of-javascript)

Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

### Solution

```js
declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function() {
     return this.length ? this[this.length - 1] : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {};
```

## 23 Group By

### [Problem Statement ↗️](https://leetcode.com/problems/group-by/?envType=study-plan-v2&envId=30-days-of-javascript)

Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

### Solution

```js
declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function(fn) {
    const result: Record<string, any[]> = {}

    for (let i = 0; i < this.length; i++) {
        const key: string = fn(this[i])

        if (result[key]) {
            result[key].push(this[i])
        } else {
            result[key] = [this[i]]
        }
    }

    return result
}

export {}
```

## 24 Sort By

### [Problem Statement ↗️](https://leetcode.com/problems/sort-by/?envType=study-plan-v2&envId=30-days-of-javascript)

Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.

### Solution

```js
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number;

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  const newArr = arr.map((e) => {
    return {
      v: fn(e),
      o: e,
    };
  });
  return newArr.sort((a, b) => a.v - b.v).map((e) => e.o);
}
```

## 25 Join Two Arrays by ID

### [Problem Statement ↗️](https://leetcode.com/problems/join-two-arrays-by-id/description/?envType=study-plan-v2&envId=30-days-of-javascript)

Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

- If a key only exists in one object, that single key-value pair should be included in the object.
- If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

### Solution

```js
type IdObj = { id: number };

const join = (arr1: IdObj[], arr2: IdObj[]): IdObj[] => {
  const map = new Map<number, IdObj>();
  for (const x of arr1) map.set(x.id, Object.assign({}, x));
  for (const x of arr2) map.set(x.id, Object.assign(map.get(x.id) ?? {}, x));
  return [...map.values()].sort((a, b) => a.id - b.id);
};
```

## 26 Flatten Deeply Nested Array

### [Problem Statement ↗️](https://leetcode.com/problems/flatten-deeply-nested-array/?envType=study-plan-v2&envId=30-days-of-javascript)

Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

### Solution

```js
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  // base case
  if (n === 0) {
    return arr;
  }

  const output = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      output.push(...flat(element, n - 1));
    } else {
      output.push(element);
    }
  });

  return output;
};
```

## 27 Compact Object

### [Problem Statement ↗️](https://leetcode.com/problems/compact-object/?envType=study-plan-v2&envId=30-days-of-javascript)

Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

### Solution

```js
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
  // base case
  if (!Boolean(obj)) {
    return undefined;
  }
  if (typeof obj !== "object") {
    return obj;
  }

  // if object is array
  if (Array.isArray(obj)) {
    const output = obj.map((item: any) => compactObject(item));
    return output.filter((item: any) => item !== undefined);
  }

  // if object
  const output = {};
  for (const key in obj) {
    const item: any = obj[key];
    const result = compactObject(item);
    if (result != undefined) {
      output[key] = result;
    }
  }
  return output;
}
```

## 28 Event Emitter

### [Problem Statement ↗️](https://leetcode.com/problems/compact-object/?envType=study-plan-v2&envId=30-days-of-javascript)

Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

Your EventEmitter class should have the following two methods:

- **subscribe** - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
  An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
  The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.

- **emit** - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.

### Solution

```js
type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {

  private eventMap = new Map<string, Array<Callback>>();

  subscribe(eventName: string, callback: Callback): Subscription {
    if (this.eventMap.has(eventName)) {
      this.eventMap.get(eventName).push(callback);
    } else {
      this.eventMap.set(eventName, Array.of(callback));
    }

    return {
      unsubscribe: () => {
        const index = this.eventMap.get(eventName).indexOf(callback, 0);
        if (index > -1) {
          this.eventMap.get(eventName).splice(index, 1);
        }
        return undefined;
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] | undefined {
    let result = [];
    const callBacks: Array<Callback> = this.eventMap.get(eventName) as Array<Callback>;

    if (!callBacks) {
      return [];
    }

    for (let i = 0; i < callBacks.length; i++) {
      result.push(callBacks[i](...args));
    }

    return result;

  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
```

## 29 Array Wrapper

### [Problem Statement ↗️](https://leetcode.com/problems/array-wrapper/?envType=study-plan-v2&envId=30-days-of-javascript)

Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

- When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.

- When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

### Solution

```js
class ArrayWrapper {
  nums = [];
  constructor(nums: number[]) {
    this.nums = nums;
  }

  valueOf(): number {
    return this.nums.reduce((acc, curr) => acc + curr, 0);
  }

  toString(): string {
    return `[${this.nums.join(",")}]`;
  }
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
```

## 30 Calculator with Method Chaining

### [Problem Statement ↗️](https://leetcode.com/problems/calculator-with-method-chaining/?envType=study-plan-v2&envId=30-days-of-javascript)

Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

Your Calculator class should have the following methods:

- add - This method adds the given number value to the result and returns the updated Calculator.

- subtract - This method subtracts the given number value from the result and returns the updated Calculator.
- multiply - This method multiplies the result by the given number value and returns the updated Calculator.

- divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.

- power - This method raises the result to the power of the given number value and returns the updated Calculator.
  getResult - This method returns the result.

Solutions within 10-5 of the actual result are considered correct.

### Solution

```js
class Calculator {
  output: number = 0;
  constructor(value: number) {
    this.output = value;
  }

  add(value: number): Calculator {
    this.output += value;
    return this;
  }

  subtract(value: number): Calculator {
    this.output -= value;
    return this;
  }

  multiply(value: number): Calculator {
    this.output *= value;
    return this;
  }

  divide(value: number): Calculator {
    if (value === 0) {
      throw "Division by zero is not allowed";
    }
    this.output /= value;
    return this;
  }

  power(value: number): Calculator {
    this.output **= value;
    return this;
  }

  getResult(): number {
    return this.output;
  }
}
```
