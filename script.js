/*

Conceptual Aside:-

a)Syntax Paraser:- A programme or compiler which read your code step by step , and determine what your code does, and it validte is grammer of code is valid.

b)Lexical Environment:- where something sits physically in the code you write.

c)Execution context:- A wrapper to help manage the code that is running .(there is lot of lexical environment. which one is currently runningis managed via
execution contaxt.it can contain things beyond what you have written in your code.) it contaxt has two phase creation phase and exection phase.

JavaScript is Netscape’s cross-platform, object-based scripting language for client and server applications, it is used every where.

Object:  There is no similarity with java/.net/C++ object, when it’s come to the JavaScript object. 
Object: Simple definition of JS Object is a collection of property and it’s value , and nothing


The Global Environment (window object, and 'this' variable ):

You will get “window object and this variable”, even without writing a single line of code in JavaScript.
Every function and variable (which are in global scope) will be attached with this window object, and available to you anywhere in the programme.

Scopes (Global or not Global) Global and function scope:-
In JS (ES5)  two type of scope are available, Global scope and function scope.
variables and function which are “not written inside of any function”  will be in considered as global scope and will be attached with global object (window).
function scope, which variable and functions are defined inside function, they will be available in that function scope only.

JS Execution (Hoisting Phase and execution phase:-)
Our JS programme executes in 2 phase , first is Hoisting(creation phase) and second is execution phase.
Hoisting Phase, means when you write code ,first JS compiler will scan the whole code and stores  information about (variable and function) before execution. 
Hoisting phase, function will be available before execution and variable will be available in undefined state.
Execution Phase, JS engine will execute the code line by line.

*/

// variable and function

var myNo = 1; // number typeic
var myName = "sarang jain";
var issarangMarried = true;

console.log(myNo);
console.log(myName);
console.log(issarangMarried);

// function

/*
funcction create signattue

funcction functionRelativeName(){
    // your funtcton code body
}

// function call
functionRelativeName();

*/

// function defined/ declration
function consoleMyName() {
  console.log("1");
  console.log("2");
  console.log("3");
  console.log("4");
  console.log("5");
  console.log("===================");
}

// use or invoactaion
// consoleMyName();
// consoleMyName();
// consoleMyName();

// object

var sarangOBj = {
  name: "sarang jain",
  age: 32,
  isMarried: true,
};

console.log(sarangOBj);

// global enviroment

console.log(window);
console.log(this);

// scopes global and not global/local

var one = 1;
var two = 2;

function testOne() {
  var three = 3;
  var four = 4;

  function testoneChild() {
    var five = 5;
  }
}
