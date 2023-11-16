## Node.JS ( Index )

1. Event Loop
2. Clusters
3. process in Node.JS
4. global in Node.JS
5. process.nextTick
6. process - events
7. streams
8. How do you debug in Node.JS ? 
9. zlib

## JavaScript ( Index )
1. Hoisting
2. Closure
3. EventEmitter
4. map vs reduce vs filter
5. setTimeout, setInterval, setImmeidate
6. function vs arrow function
7. var, let, const
8. call, apply, bind
9. Scopes
10. Anonymous Function
11. Object Literals
12. List of Global Functions
13. strict mode vs non strict mode
14. Promise.all vs Promise.allSettled vs Promise.race



### 1. Event Loop

Node.js uses an event loop, a process that allows it to handle many tasks efficiently without needing multiple threads. It works by starting tasks asynchronously and using callbacks, functions that execute after a task completes, thus enabling Node.js to manage numerous operations simultaneously in a non-blocking, single-threaded manner.


- CallStack
- Macro Queue ( CallQueue) - executes once micro queue is empty
- Micro Queue - executes first

![Node.JS Event Loop](/images/event_loop.gif)


### 2. Clusters

A cluster is a module that allows you to create multiple instances (child processes) of the Node.js process to handle the workload. This is particularly useful for taking advantage of multi-core systems, as the default Node.js runtime is single-threaded

A simple multi core http server example

```javascript

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length; // Number of CPU cores

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers for each CPU core
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection
    // In this case, it's an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello World\n');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}

```

### 3. process in Node.JS

`process` is a global object that provides information about, and control over, the current Node.js process. It's an instance of `EventEmitter` and acts as a bridge between a Node.js application and its running environment. Here's a breakdown of its key aspects:

1. **Environment Information**: `process` provides details about the user environment. For example, `process.env` returns an object containing the user environment, like paths, system variables, etc.

2. **Standard Input/Output (I/O)**: It offers streams to interact with input/output, such as `process.stdin` for standard input, `process.stdout` for standard output, and `process.stderr` for error output.

3. **Process Management**: You can control the process's life cycle. For example, `process.exit()` ends the process, and `process.kill(pid)` can be used to signal another process.

4. **Command Line Arguments**: `process.argv` is an array containing command-line arguments passed when the Node.js process was launched.

5. **Execution Path and Directory**: `process.execPath` gives the execution path of the Node.js binary, and `process.cwd()` returns the current working directory of the process.

6. **Event Handling**: `process` can handle various events, like 'exit' (when the process is about to exit) or 'uncaughtException' (for unhandled exceptions).

7. **Asynchronous/Synchronous Operation**: Functions like `process.nextTick(callback)` allow deferring the execution of a callback to the next iteration of the event loop, which can be useful for handling asynchronous operations.

8. **Performance Monitoring**: It provides methods to monitor performance, like `process.memoryUsage()` for memory usage information.

9. **Unique Process ID**: `process.pid` gives the process ID, which is useful for tracking and managing processes.


### 4. global in Node.JS

`global` is a special object that acts as the global namespace for all global variables, functions, and objects in a Node.js application. It serves a similar purpose to the `window` object in browsers, providing a place where properties and functions are available throughout the entire application without needing to be explicitly imported. Here's a brief overview:

1. **Default Global Objects**: Node.js provides several built-in objects and functions in the `global` scope, like `Buffer`, `console`, `setImmediate`, `clearImmediate`, etc.

2. **Custom Global Variables**: You can define your own global variables by attaching them to the `global` object. For example, `global.myVariable = 'Hello World';` will make `myVariable` accessible anywhere in your application.

3. **Caution in Use**: While globals provide convenience, they are generally discouraged in Node.js development because they can lead to code that is hard to maintain and test. It's usually better to explicitly import what you need in each module.

4. **Module System**: Unlike browser JavaScript, Node.js uses a module system (CommonJS). Each file is treated as a module, and variables and functions defined in one module are not globally accessible unless explicitly exported and imported.

5. **Avoiding Global State**: Excessive use of global variables can lead to conflicts and unpredictable behavior, especially in larger applications or when using third-party modules. It's recommended to use module exports and require statements to share variables and functions across different files.

6. **Application-Wide Singleton**: If you really need to have some data accessible application-wide, consider using a dedicated module that exports and imports the necessary data or state, instead of relying on the `global` object.

### 5. process.nextTick ( TODO )


### 6. process - events

The `process` object in Node.js emits several events related to the lifecycle and behavior of the running process. Here's a list of key events:

1. **`exit`**: Emitted when the Node.js process is about to exit. This can occur naturally when there is no work to be done, or manually via `process.exit()`.

2. **`beforeExit`**: Emitted when Node.js empties its event loop and has no additional work to schedule. It's a chance to perform asynchronous operations before the process exits.

3. **`uncaughtException`**: Emitted when an exception bubbles all the way back to the event loop without being caught. It's a last-resort mechanism to catch and handle exceptions and clean up before the process dies.

4. **`unhandledRejection`**: Emitted when a Promise is rejected and no error handler is attached to the promise within a turn of the event loop.

5. **`warning`**: Emitted for Node.js process warnings. These might be internal Node.js warnings or warnings triggered by the user via `process.emitWarning()`.

6. **`SIGINT`**: Emitted when the Node.js process receives a `SIGINT` signal, typically in response to a user pressing Ctrl+C in the terminal.

7. **`SIGTERM`**: Emitted when the Node.js process receives a `SIGTERM` signal, indicating a request to terminate the process gracefully.

8. **`SIGUSR1`**: By default, Node.js starts a debugger on this signal.

9. **`rejectionHandled`**: Emitted after a Promise has been rejected and an error handler was attached to it (e.g., with `.catch()`) later than one turn of the Node.js event loop.

10. **`message`**: Emitted when the process receives a message from a parent process when using child processes.

11. **`disconnect`**: Emitted when the IPC channel between a parent and child process has been closed.

12. **`multipleResolves`**: Emitted whenever a Promise has been either resolved or rejected more than once.


### 7. Streams

Streams are objects that let you read data from a source or write data to a destination in a continuous fashion. There are four main types of streams: Readable, Writable, Duplex, and Transform. Each type of stream serves a different purpose:

### 1. Readable Streams
Readable streams are used to read data from a source. This could be reading data from a file, or reading data from a network request.

**Example: Reading from a File**
```javascript
const fs = require('fs');

const readableStream = fs.createReadStream('example.txt');
readableStream.on('data', (chunk) => {
    console.log(chunk.toString());
});
```

### 2. Writable Streams
Writable streams are used to write data to a destination. This could be writing data to a file, or sending data in a network response.

**Example: Writing to a File**
```javascript
const fs = require('fs');

const writableStream = fs.createWriteStream('example.txt');
writableStream.write('Hello, World!\n');
writableStream.end();
```

### 3. Duplex Streams
Duplex streams are both Readable and Writable. They can be used when you need a stream that can both read and write data, like a TCP socket.

**Example: Echo Server Using TCP Socket (Duplex Stream)**
```javascript
const net = require('net');

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        socket.write(data);
    });
});

server.listen(3000);
```

### 4. Transform Streams
Transform streams are a type of Duplex stream where the output is in some way computed from the input. They can be used to modify or transform the data as it is written and read.

**Example: Converting Input to Uppercase**
```javascript
const { Transform } = require('stream');

const upperCaseTranform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(upperCaseTranform).pipe(process.stdout);
```

In this Transform stream example, data read from `stdin` (standard input) is transformed to uppercase and then written to `stdout` (standard output).

### 8. How do you debug in Node.JS ?
- VS Code
- Chrome DevTools
### 9. zlib

`zlib` is a module in Node.js that provides compression and decompression functionalities. It's used to work with data streams (like files or network responses) and apply gzip, deflate, and other types of compression or decompression to them. This is particularly useful for reducing the size of data for storage or transmission.


#### Example: Compressing and Decompressing a String

```javascript
const zlib = require('zlib');
const { promisify } = require('util');
const gzip = promisify(zlib.gzip);
const gunzip = promisify(zlib.gunzip);

async function compressAndDecompress(data) {
    try {
        // Compressing the data
        const compressed = await gzip(data);
        console.log('Compressed:', compressed.toString('base64'));

        // Decompressing the data
        const decompressed = await gunzip(compressed);
        console.log('Decompressed:', decompressed.toString());
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

const sampleData = 'Hello, World!';
compressAndDecompress(sampleData);
```

   



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


### 6. function vs arrow function
- function will have this
- arrow function will not have this
- arrow function cannot be a constructor
- arrow function cannot have arguments ( TODO : Code)
- arrow function cannot have prototypes

### 7. var, let, const

### 8. call, apply, bind

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

### 9. Scopes ( this keyword ) [▶️](https://youtu.be/YfHXTjvyaRM)
- fuction will have global scope
- an object created with function will have local scope
- forEach runs on global scope, untill you .bind(this)
- arrow functions provides local scope

### 10. Anonymous Functions
 is a function that does not have a name. Instead of being declared with a standard function name, an anonymous function is often declared inline
```javascript
(() => {

})()
```

### 11. Object Literals
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

### 12. List of Global Functions

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

### 13. strict mode vs non strict mode

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


| non strict                                             | strict mode                                                                                        |
|--------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| a = 'hello'  // a will be assigned to window           | "use strict" a = 'hello' // throws error, you have you use var or let                              |
|                                                        | // non strict mode function hello(){  "use strict" // this is also possible   // strict mode }     |
| var let = 1 // works                                   | "use strict"  var let = 1 // let is a reserved keyword  ( ES6 )                                    |
| var a = 1 delete a  function hello() {} delete hello   | "use strict"  // you cannot delete variables or functions                                          |
| function hello(a, b ) {   delete a   delete b }        | "use strict"  function hello(a, b ) {   delete a // throws error   delete b // throws error }      |
| var eval = 1                                           | "use strict"  var eval = 1 // unexpected eval or args                                              |
| var a = 2 eval("var a = 1") console.log(a) // prints 1 | "use strict"  var a = 2  eval("var a = 1") // a stays in the eval scope console.log(a) // prints 2 |
|                                                        |                                                                                                    |
|                                                        |                                                                                                    |

### 14. Promise.all vs Promise.allSettled vs Promise.race

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

