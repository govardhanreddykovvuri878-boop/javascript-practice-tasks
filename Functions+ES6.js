// ==========================
// Section 1: Basic Functions
// ==========================

// 1
function helloWorld() {
  console.log("Hello World");
}
helloWorld();

// 2
function greet(name) {
  console.log(`Welcome ${name}`);
}
greet("Govardhan");

// 3
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

// 4
function isEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(isEven(5));

// 5
function square(num) {
  return num * num;
}
console.log(square(4));

// 6
function largest(a, b, c) {
  return Math.max(a, b, c);
}
console.log(largest(10, 20, 5));

// 7
function person(name, age = 18) {
  return `${name} is ${age} years old`;
}
console.log(person("John"));

// 8
function fullName(first, last) {
  return `${first} ${last}`;
}
console.log(fullName("Govardhan", "Reddy"));

// ==========================
// Section 2: Return & Scope
// ==========================

// 9
function multiply(a, b, c) {
  return a * b * c;
}
console.log(multiply(2, 3, 4));

// 10
function scopeDemo() {
  var a = 1;
  let b = 2;
  const c = 3;
  console.log(a, b, c);
}
scopeDemo();

// 11
function outer() {
  function inner() {
    console.log("Inner function");
  }
  inner();
}
outer();

// 12
let globalVar = "I am global";
function accessGlobal() {
  console.log(globalVar);
}
accessGlobal();

// 13
{
  let blockVar = "block";
}
// console.log(blockVar); // Error

// 14
console.log(x); // undefined
var x = 10;

// console.log(y); // Error
let y = 20;

// ==========================
// Section 3: Function Types
// ==========================

// 15
let anon = function () {
  console.log("Anonymous function");
};
anon();

// 16
let arrow = () => {
  console.log("Arrow function");
};
arrow();

// 17
let singleLine = x => x * 2;
console.log(singleLine(5));

// 18
let expr = function () {
  console.log("Function expression");
};
expr();

// 19
function normalFunc() {
  console.log(this);
}
const arrowFunc = () => console.log(this);

normalFunc();
arrowFunc();

// 20 (IIFE)
(function () {
  console.log("Executed immediately");
})();

// ==========================
// Section 4: Callback & HOF
// ==========================

// 21
function execute(fn) {
  fn();
}
execute(() => console.log("Callback executed"));

// 22
function calculator(a, b, operation) {
  return operation(a, b);
}
const addFn = (a, b) => a + b;
const subFn = (a, b) => a - b;
const mulFn = (a, b) => a * b;

console.log(calculator(5, 3, addFn));
console.log(calculator(5, 3, subFn));
console.log(calculator(5, 3, mulFn));

// 23
function customMessage(fn) {
  console.log("Before callback");
  fn();
}
customMessage(() => console.log("Hello from callback"));

// 24
function delay(fn) {
  setTimeout(fn, 1000);
}
delay(() => console.log("Delayed execution"));

// 25
function customMap(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}
console.log(customMap([1, 2, 3], x => x * 2));

// ==========================
// Section 5: Currying
// ==========================

// 26
function addCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(addCurry(1)(2)(3));

// 27
const multiplyCurry = a => b => c => a * b * c;
console.log(multiplyCurry(2)(3)(4));

// 28
const greetCurry = a => b => c => `${a} ${b}, ${c}`;
console.log(greetCurry("Hello")("John")("Good Morning"));

// ==========================
// Section 6: Generator
// ==========================

// 29
function* generator() {
  yield "Message 1";
  yield "Message 2";
  yield "Message 3";
}
const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// 30
for (let val of generator()) {
  console.log(val);
}

// 31
function* infinite() {
  let i = 1;
  while (true) {
    yield i++;
  }
}
const inf = infinite();
console.log(inf.next().value);
console.log(inf.next().value);

// ==========================
// Section 7: Spread Operator
// ==========================

// 32
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log([...arr1, ...arr2]);

// 33
let obj1 = { name: "Govardhan", age: 22 };
let obj2 = { ...obj1, age: 23 };
console.log(obj2);

// 34
let merged = [...arr1, ...arr2, 5, 6];
console.log(merged);

// ==========================
// Section 8: Rest Operator
// ==========================

// 35
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

// 36
function showArgs(...args) {
  console.log(args);
}
showArgs(1, 2, 3);

// 37
function max(...nums) {
  return Math.max(...nums);
}
console.log(max(10, 50, 30));

// ==========================
// Section 9: Switch Case
// ==========================

// 38
function dayName(day) {
  switch (day) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    case 7: return "Sunday";
    default: return "Invalid";
  }
}
console.log(dayName(3));

// 39
function calc(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return a / b;
    default: return "Invalid";
  }
}
console.log(calc(10, 5, "+"));

// 40
function grade(score) {
  switch (true) {
    case score >= 90: return "A";
    case score >= 75: return "B";
    case score >= 50: return "C";
    default: return "Fail";
  }
}
console.log(grade(85));