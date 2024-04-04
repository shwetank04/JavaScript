//function statement or  declaration

function a() {
  console.log("a called");
}

//function expression
var b = function () {
  console.log("b called");
};

//Difference between function statement and function expression is hoisting. In case of a() it will save the whole function.
//But in case of b it will be undefined.

//Anonymous Function :- cant create like below syntax as it expects a identifier.So the anonymous function are used when the
//function are used as values. That means just like function expression

// function () {

// }

//Named function expression
var c = function xyz() {
  console.log("c called");
  //if we do something like console.log(xyz); it will work.
};

xyz(); // It will result in error saying xyz is not defined. Its not in global scope.

//Difference in parameter and argument
var d = function (parameter) {
  //parameter is the local variable inside the function , its also called labels
  console.log("d called");
};

d(argument); //when calling the function, he value passed is argument.

//first class function :-
//we can pass function inside other function as an argument or The ability of function to use function as values.
var e = function (parameter) {
  return function xyz() {};
};

console.log(e());

//Arrow Function:-
