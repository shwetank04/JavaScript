//what is a closure:-

//A function along with the reference with outer environment, together forms a closure.Its a combination of a function and
//its lexical scope bundled together.

//Each and every function in js has access to its outer lex env. Ex :- acccess to var and function which is present in the
//env of its parent. Even when the function is executed in other scope it still remembers its outer lex env. in which it was
//present originally.

//Example of closure:-
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

//The inner function has access to its outer env. and its forms a closure. Even if it run it outside it still remembers the value of
//a.

outer()(); //10 or var close = outer(); close();

//what if we move var a = 10 before returning
function outer() {
  function inner() {
    console.log(a);
  }
  var a = 10;
  return inner;
}
//It doesnt depend on the sequence of the code, it forms closure with the outside environment.

//what if we change var to let a = 10 before returning. considering let is a block scope.
function outer() {
  function inner() {
    console.log(a);
  }
  let a = 10;
  return inner;
}

//If we change it to let then, it still behaves the same way.

//If we pass a parameter b then how it will behave
function outer(b) {
  function inner() {
    console.log(a, b);
  }
  let a = 10;
  return inner;
}

var close = outer("hello");
close();
// In this case as well, it behaves the same way.

//what if the outer is nested inside function:---> It will again form closure with env of that function as well
function outest(c) {
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}

var close = outest()("hello");
close();

//what if we have let a again in Global scope. The inner fucntion has reference  to a = 10. and a =100 is completely new
//in global scope. So it will print 10 as it already found it nearby to it; If we didnt had a =10, it will default to a = 100;
function outest(c) {
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
var close = outest()("hello");
close();

//Advantage of closure :- used in module pattern, highorder function, data hiding and encapsulation.

//Data hiding :- If we have a variable and we want to have some data privacy so that other function cant access it.
//Example :-

var counter = 0;

function incrementCounter() {
  counter++;
}
//above anyone can use counter.

//To hide it :- form a closure.

function count() {
  var counter = 0;
  return function incrementCounter() {
    counter++;
  };
}

console.log(counter);

var counter1 = count();
counter1();
var counter2 = count(); // This is like completely new counter in itself.

//Constructor fucntion :-------------->
function CounterConstructor() {
  var counter = 0;
  this.incrementCounter = function () {
    counter++;
  };
  this.decrementCounter = function () {
    counter--;
  };
}

var counter3 = new CounterConstructor();

counter3.incrementCounter();

//Disadvantage of closures :----> There could be over consumption of memory as those are not garbage collected.

//Garbage collector :- Progeam in the browser or js engine which frees up unutilized memory.
