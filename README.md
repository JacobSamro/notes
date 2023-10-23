## Just some notes ( Draft )

#### DSA
1. Graphs
2. Dynamic Programming
3. Trees
4. Trie
5. Binary Search
6. LinkedList
7. Array
8. Greedy Algorithm
9. Recursion & Backtracking
10. Heaps
11. Stack and Queue
12. Binary Tree
13. Sorting
    - Bubble Sort
    - Selection Sort
    - Insertion Sort
    - Merge Sort
    - Quick Sort
    - Heap Sort
    - Shell Sort
14. Search
    - Linear Search
    - Binary Search
    

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

#### System Design
1. How Auth works in Microservices
2. Advantages of Microservices Architecture
3. Drawbacks of Microservices Architechture


#### Databases


1. Kafkha

2. MySQL
- Cartesian Product
- DATEDIFF
- HAVING

3. Redis

4. PostgresSQL

1. MySQL vs NoSQL
- 
- 
- 
2. 

Advantages over MySQL
- More Advanced data types like JSON,JSONB
- NoSQL Support ( TODO)
- Extend and create own data type
- Extensions support ( such as PostGIS )
- Cross DB Queries
- Open Source License

5. MongoDB


#### Frameworks

1. State Management
### Vue.JS


### React.JS


### Angular.JS

1. rxjs
2. 

#### Web Technologies

1. WebRTC
Uses UDP for Video, Audio
Uses TCP for DataPackets

2. WebSocket

Uses HTTP for Handshake. after that connection will be switched to TCP. 

Uses 101 Switching Protocols

3. gRPC



### Test Driven Development

- Build with Confidence
- Clean Code
- Avoid code breaks and ship safe
- That itself acts as a proof that app works well

Jest
1. Unit Testing
2. Snapshot Testing
3. async
4. sync

Ava