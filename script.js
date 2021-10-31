/*
 scope chain rule
 JS engine keep the information which variable  can be accessed from the current function.
 means, in function you can access (local variable  + and it's parent variable).

 Thumb rule :- local variable will be checked then its parent , then its parent and then global variable , if not found then error

*/

/*
console.log("program started");
var myname = "john";

function first() {
  var a = "hello! ";
  second();
  var x = a + myname;
  console.log(x);
}

function second() {
  var b = "Hi! ";
  third();
  var z = b + myname;
  console.log(z);
}

function third() {
  var c = "Hey! ";
  var z = c + myname;
  console.log(z);
}

first();
console.log("program completed");

*/

/*
var myname = "john";

function first() {
  var mynametest = "checkit";
  var studentName = "gaurav";

  function child() {
    var one = 1;
    var studentName = "rohit";
    var myname = "sarang ";

    console.log(one);
    console.log(studentName);
    console.log(myname);
    console.log(mynametest);
  }

  child();
}

first();
console.log("program completed");

*/
