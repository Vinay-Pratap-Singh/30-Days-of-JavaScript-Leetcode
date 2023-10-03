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

### Solution by using Map

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
