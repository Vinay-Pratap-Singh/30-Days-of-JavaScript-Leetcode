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
