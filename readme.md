# LeetCode 30 Days of JavaScript

This repository contains my solutions to the LeetCode 30 Days JavaScript Challenge. I'm on a journey to improve my JavaScript skills, and I'm excited to share my progress with you. Explore the solutions, learn from them, and join me on this coding adventure as we explore the world of JavaScript together!

[My Leetcode Profile 😊](https://leetcode.com/itsharvihere/)

[Join the Challenge 😍](https://leetcode.com/studyplan/30-days-of-javascript/)

## Table of Contents

- [01 Create Hello World Function](#01-create-hello-world-function)
- [02 Counter](#02-counter)

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
