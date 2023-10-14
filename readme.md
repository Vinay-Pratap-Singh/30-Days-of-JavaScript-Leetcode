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
/*
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
```

### Explanation

Inside the return statement of the createHelloWorld function we just have to return the string "Hello World" as it is a simple hello world program.

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

/*
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
```

### Explanation

The problem says that it will return n in first go and then for next call to the function it will return n+1 everytime. So for this problem we need to use **closure**.

```js
let number = n - 1;
```

By declaring a new variable inside the createCounter and storing the **n - 1** in it as the statement want **n** in the first call so when we will increase the value of number by 1 it will be equal to the n itself for the first go and then will increase by 1 in subsequent calls.

```js
return function () {
  number += 1;
  return number;
};
```

After this we can simply increase the value of number by 1 inside the inner function and return it. The inner function will have the access of its outer scope as it is forming closure with createCounter function.

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

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
```

### Explanation

This problem statement states that for toBe, if the argument of toBe and expect function are equal then the toBe should return true else should throw new error "Not Equal".

Same thing is required for notToBe as it will return true if its argument and expect function argument is not same else should throw new error "Equal".

So I am simply returning an object from expect having two keys one as toBe and second one as notToBe which is using if and else to check that the argument of theirs is matching with the expect function or not and then returning the respective answer.

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

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
```

### Explanation

The problem expect to return an object which should consists of three function i.e increment(), decrement() and reset(). As the name suggest increment will increase the value by 1 and return similar goes for the decrement but just will decrease by 1 and reset will reset the value to the initial value which is passed as an argument in the createCounter function. This problem will be solved using the closure in JavaScript.

So inside the createCounter function first we will declare a variable named value which will hold the initial value init in it. After that we will return an object and will increase and decrease the value by 1 for increment and decrement and will return the value variable from it as these will form a closure with the value variable. Also for reset we will assign the init to value variable and will return the init or value both is fine.

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

### Time Complexity

O(n) as we are looping on the array for one time.

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
