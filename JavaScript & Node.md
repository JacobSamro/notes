#### Node.JS
1. Event Loop
- CallStack
- Macro Queue ( CallQueue) - executes once micro queue is empty
- Micro Queue - executes first
2. Clusters
3. process in Node.JS
3. global in Node.JS
4. process.nextTick
5. CallStack
6. process signals
7. How to you catch an uncaughtException
8. How to you catch a global promise rejection ?
9. Streams
    - Duplex
    - Readable
    - Writable
    - Transform
10. How do you debug in Node.JS ?
- VS Code
- Chrome DevTools
11. zlib
12. dgram
   

#### JavaScript
1. Hoisting
2. Closure
3. EventEmitter
4. map vs reduce vs filter
5. setTimeout, setInterval, setImmeidate

### 1. Hoisting

**Summary:** 
In JavaScript, variable and function declarations are moved to the top of their containing scope during the compilation phase, a behavior known as hoisting. However, initializations are not hoisted.

**Code Sample:**
```javascript
console.log(a); // undefined (due to hoisting)
var a = 5;
console.log(a); // 5

hoistedFunction(); // "I'm hoisted!"
function hoistedFunction() {
    console.log("I'm hoisted!");
}
```

### 2. Closure

**Summary:** 
A closure is a function that has access to its own scope, the scope of the outer function, and the global scope, even after the outer function has finished executing.

**Code Sample:**
```javascript
function outerFunction() {
    let outerVariable = 'I am from outer function!';
    
    function innerFunction() {
        console.log(outerVariable); // innerFunction has access to outerVariable due to closure
    }
    
    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // "I am from outer function!"
```

### 3. EventEmitter

**Summary:** 
`EventEmitter` is a class in Node.js that provides a mechanism to emit and listen to named events.

**Code Sample:**
```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('An event occurred!');
});

myEmitter.emit('event'); // "An event occurred!"
```

### 4. map vs reduce vs filter

**Summary:** 
- `map`: Transforms an array by applying a function to every element and returning a new array of the results.
- `reduce`: Reduces an array to a single value by applying a function.
- `filter`: Creates a new array with all elements that pass a test function.

**Code Sample:**
```javascript
const numbers = [1, 2, 3, 4];

const squared = numbers.map(num => num * num); // [1, 4, 9, 16]
const sum = numbers.reduce((acc, num) => acc + num, 0); // 10
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]
```

### 5. setTimeout, setInterval, setImmediate

**Summary:** 
- `setTimeout`: Executes a function after waiting a specified number of milliseconds.
- `setInterval`: Continuously calls a function with a fixed time delay between each call.
- `setImmediate`: Executes a function immediately after the current event loop cycle completes.

**Code Sample:**
```javascript
setTimeout(() => {
    console.log('Executed after 2 seconds');
}, 2000);

const interval = setInterval(() => {
    console.log('This will run every 1 second');
}, 1000);

// Stop the interval after 5 seconds
setTimeout(() => {
    clearInterval(interval);
}, 5000);

setImmediate(() => {
    console.log('Executed immediately after the current event loop cycle');
});
```


setTimeout: When you want to delay the execution of a function by a certain number of milliseconds.
setImmediate: When you want to execute something right after the current poll phase completes in the event loop, but before any I/O operations or timers.

```js
console.log('start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

setImmediate(() => { // schedules a callback to run immediately after the current event loop cycle completes
  console.log('setImmediate');
});

console.log('end');

```

start
end
setImmediate
setTimeout


6. function vs arrow function
- function will have this
- arrow function will not have this
- arrow function cannot be a constructor
- arrow function cannot have arguments ( TODO : Code)
- arrow function cannot have prototypes
7. var, let, const
8. call, apply, bind

call:

Usage: func.call(thisArg, arg1, arg2, ...)
It invokes the function immediately.
Arguments are passed separately.
Example:

```javascript
function greet(message) {
    console.log(message + ', ' + this.name);
}

const person = { name: 'John' };
greet.call(person, 'Hello');  // Outputs: "Hello, John"

```

apply:

Usage: func.apply(thisArg, [argsArray])
It invokes the function immediately.
Arguments are passed as an array.
Example:

```javascript
function greet(message, punctuation) {
    console.log(message + ', ' + this.name + punctuation);
}

const person = { name: 'John' };
greet.apply(person, ['Hello', '!']);  // Outputs: "Hello, John!"
```
bind:

Usage: func.bind(thisArg, arg1, arg2, ...)
It returns a new function that, when invoked, has its this value set to the provided value.
Arguments can be pre-filled (partial application).
Example:

```javascript
function greet(message) {
    console.log(message + ', ' + this.name);
}

const person = { name: 'John' };
const greetJohn = greet.bind(person, 'Hello');
greetJohn();  // Outputs: "Hello, John"
```

9. Scopes ( this keyword ) [▶️](https://youtu.be/YfHXTjvyaRM)
- fuction will have global scope
- an object created with function will have local scope
- forEach runs on global scope, untill you .bind(this)
- arrow functions provides local scope
10. Anonymous Functions
 is a function that does not have a name. Instead of being declared with a standard function name, an anonymous function is often declared inline
```javascript
(() => {

})()
```

11. Object Literals
It's a list of key-value pairs, where keys are properties of the object and values are the values for these properties. Object literals are defined using curly braces { }.

```js
const person = {
    firstName: "John",
    greet: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName + ".");
    }
};

person.greet();  // Outputs: "Hello, my name is John Doe."

```

List of Global Functions

- parseInt - micro
- parseFloat - micro
- isNaN - micro
- isFinite - micro
- eval - micro
- encodeURI - micro
- encodeURIComponent - micro
- decodeURI - micro
- decodeURIComponent - micro
- setTimeout - macro
- clearTimeout - macro
- setInterval - macro
- clearInterval - macro
- setImmediate ( Node.JS )  - macro
- clearImmediate ( Node.JS )  - macro
- fetch  - macro


In JavaScript, "strict mode" is a way to opt in to a restricted variant of JavaScript that can help you catch common coding mistakes and "unsafe" actions such as defining global variables. When strict mode is enforced, the JavaScript interpreter is more strict in interpreting the code, hence the name "strict mode". To activate strict mode, you need to add the statement "use strict"; at the top of your file or function.

Let's analyze your example in both strict and normal (non-strict) modes:

1. Normal Mode (Non-Strict Mode):
```javascript
this.value = 'apple';

let abc = function() {
  console.log(this.value);
};

abc(); // Outputs 'apple'

function apple() {
  console.log(this.value);
}

apple(); // Outputs 'apple'
```
In normal mode, `this` inside a function refers to the global object (which is `window` in a browser environment). So, when you assign `this.value = 'apple';`, you are actually setting a property `value` on the global object. That's why `abc()` and `apple()` both log 'apple'.

2. Strict Mode:
```javascript
'use strict';

this.value = 'apple'; // Throws an error in strict mode

let abc = function() {
  console.log(this.value);
};

abc(); // Outputs 'undefined'

function apple() {
  console.log(this.value);
}

apple(); // Outputs 'undefined'
```
In strict mode, `this` inside a function that is not a method or does not have a defined context will be `undefined` instead of the global object. So, `abc()` and `apple()` will both log 'undefined'.

In strict mode, assigning a value to an undeclared variable (like `this.value = 'apple';`) will throw an error, as strict mode does not allow implicit global variable declarations. This helps prevent potential bugs and makes the code more predictable and easier to debug.

Promise.all vs Promise.allSettled vs Promise.race

```js 
// Promse.all
let promise1 = Promise.resolve('First');
let promise2 = Promise.resolve('Second');
let promise3 = Promise.reject('Error in third promise');

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // This won't be executed
    })
    .catch(error => {
        console.log(error); // "Error in third promise"
    });
```

```js
// Promise.allSettled
let promise1 = Promise.resolve('First');
let promise2 = Promise.resolve('Second');
let promise3 = Promise.reject('Error in third promise');

Promise.allSettled([promise1, promise2, promise3])
    .then(results => {

        // [Fulfilled, Fulfilled, Rejected]
        
    });
```

```js
// Promise.race
let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'First');
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Second');
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 300, 'Error in third promise');
});

Promise.race([promise1, promise2, promise3])
    .then(value => {
        console.log(value); // "Second"
    })
    .catch(error => {
        console.log(error); // This won't be executed in this example
    });

```

