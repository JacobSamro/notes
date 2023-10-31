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

## MCQs

- What is the Event Loop in Node.js?

The event loop facilitates non-blocking I/O operations. It continually checks the call stack to see if there's any function that needs to run while also checking the callback queue for functions waiting for their turn to execute.

- What is the difference between setImmediate() and process.nextTick()?

process.nextTick() runs before any I/O event is fired, while setImmediate() runs after the I/O events in the current loop iteration.

- Why is Node.js single-threaded?

Node.js uses a single-threaded model to keep the architecture simple and to handle multiple concurrent connections more efficiently using event-driven, non-blocking I/O.

- How can you handle multiple CPU cores in Node.js?

You can use the built-in cluster module, which allows you to create child processes (workers) that share the same server port.

- Explain the concept of middleware in Express.js.

Middleware functions are functions that have access to the request object, the response object, and the next middleware function in the application’s request-response cycle.

- How do you handle uncaught exceptions in Node.js?

By using process.on('uncaughtException', callback).

- What's the difference between spawn(), exec(), and fork() in the child_process module?


spawn(): Launches a new process with a command.
exec(): Similar to spawn() but runs the command inside a shell.
fork(): Spawns a new Node.js process and communicates via IPC.

-  Explain the difference between Buffer and streams in Node.js.

Buffer is a temporary storage spot for data being moved from one place to another, while a stream is a sequence of data elements made available over time.

- How does the async/await feature help with asynchronous code in Node.js?

It allows you to write asynchronous code in a more synchronous fashion, improving readability and reducing the callback pyramid.

- Explain the concept of Promises in Node.js.

Promises represent a value that might not be available yet. They offer methods (.then(), .catch()) to handle the eventual fulfillment or failure of an async operation.

- What's the purpose of the package-lock.json file in a Node.js app?

It ensures that you get the exact same dependency tree across installations, thus providing consistency.

- How do you prevent callback hell in Node.js?

Using modularization, Promises, and async/await can help in preventing callback hell.

- What is the use of the global object in Node.js?

The global object in Node.js is a namespace provided to hold global functions and objects.

- Explain the purpose and usage of exports and module.exports in Node.js.

Both are used to export functions, objects, or values so they can be required and used in other modules. The difference is in how they are used and their behavior.

- Describe the Observer pattern and how it's used in Node.js.

The Observer pattern offers a subscription model where objects can notify other objects of changes without knowing who those objects are. In Node.js, it's commonly used in event-driven programming.

- How does garbage collection work in Node.js?

Node.js uses the V8 JavaScript engine, which employs a generational garbage collection approach, using both Scavenge (for the young generation) and Mark-Sweep (for the old generation).

- Explain the concept of "hoisting" in JavaScript.

Hoisting is JavaScript's behavior of moving declarations to the top of the current scope (function or global).

- What is the purpose of the npm shrinkwrap command?

It locks down the versions of a package's dependencies so that they can be cross-checked into source control.

- Describe the differences between Error-first callbacks and Promises.

Error-first callbacks take an error as the first argument and the result as the second. Promises represent a value which might be available now, or in the future, or never, and have .then() and .catch() methods.

- How do you ensure that a piece of middleware is executed for all routes except one in Express.js?

By placing the middleware before the routes and using if conditions to check the route or by using a package like express-unless.

- What is the significance of EventEmitter in Node.js?

EventEmitter is a class in the events module which allows us to emit and handle custom events in our own objects.

- Explain the concept of a Readable Stream in Node.js.

A Readable Stream is an abstraction for a source from which you can read data.

- How would you handle form data with the multer middleware in Express?

multer is used to handle multipart/form-data, commonly used for uploading files. You'd configure it and then use it as a middleware in the appropriate route.

- What are some security practices to follow with Express apps?

Some include using the helmet middleware, sanitizing inputs, using HTTPS, setting secure HTTP headers, and avoiding the use of eval().

- What is a memory leak? How would you detect and prevent them in a Node.js app?

Memory leaks occur when objects are no longer in use but are still retained in memory. Tools like node-inspect or libraries like memwatch-next can help detect them.

- How does the require() function determine the path of a module?

It follows a series of steps: check for a core module, check for a relative path, search in the node_modules directory, and then look for a global module.

- Explain the purpose of morgan middleware in Express.

morgan is a logging middleware that generates request logs in the server.

- How do you handle cross-origin requests in an Express application?

By using the cors middleware.

- What's the significance of the .nvmrc file?

It specifies which version of Node.js the project should be using, useful when using the Node Version Manager (NVM).

- How can you profile the performance of a Node.js application?

Tools like node-inspect or node --prof can help profile performance.

- Explain the significance of the process object in Node.js.

It provides information about, and control over, the current Node.js process.

- What are "fat arrow" functions and how do they differ from regular functions in JavaScript?

Arrow functions (() => {}) have a shorter syntax and lexically bind the this value.

- Explain the concept of blocking vs non-blocking in Node.js.

Blocking refers to operations that block further execution until that operation completes, while non-blocking refers to code that doesn't block execution. Node.js promotes non-blocking I/O operations.

- How can you handle file uploads in Express?

By using the multer middleware.

- What's the difference between exports and module.exports in Node.js?

While both refer to the module's public API, if both are used, module.exports will be preferred. Changes to exports won't be reflected in module.exports.

- What are the key differences between async.waterfall and async.series in the async library?

async.waterfall passes the result of one function as the argument to the next, while async.series runs functions in series but results are separately collected.

- Explain the significance of Buffer.alloc() and Buffer.from() in Node.js.

Buffer.alloc(size) creates a buffer of the specified size in bytes. Buffer.from(data) creates a new buffer containing the provided data.

- What are the key differences between express.Router and app.route?

express.Router creates modular, mountable route handlers, whereas app.route is a way to chain routes of a particular URL/path pattern.

- Explain the importance of the NODE_ENV environment variable.

It defines the environment in which a Node app is running (e.g., development, production). This can influence behavior like logging and caching.

- How can you ensure a function is executed at regular intervals?

By using the setInterval function.

- How would you handle synchronous functions in an asynchronous manner in Node.js?

By wrapping the synchronous function inside a Promise or using setImmediate().

- What's the purpose of process.env in Node.js?

It provides an object that contains the user environment.

- Explain the concept of "Middleware" in the context of Redux.

In Redux, middleware provides a third-party extension point between dispatching an action and the moment it reaches the reducer.

- How can you handle session management in an Express app?

By using the express-session middleware.

- Explain the use of the crypto module in Node.js.

It provides cryptographic functionality, including a set of wrappers for OpenSSL's hash, HMAC, cipher, and decipher functions.

- What is the role of the util.promisify function in Node.js?

It converts a callback-based function to a promise-based one.

- How would you handle a series of asynchronous tasks in a particular order?

Using async/await, Promises with .then(), or libraries like async.series().

- What are the differences between throw and throw new Error() in JavaScript and Node.js?

Both raise exceptions, but throw new Error() creates a new error object with a message, giving more context about the error.

- What's the difference between operational and programmer errors in Node.js?

Operational errors represent runtime problems (e.g., failing to read a file), while programmer errors are bugs in the program.

- How do you ensure a function runs only once regardless of the number of times it's called?

By using the once method provided by the events module or implementing logic with a flag.