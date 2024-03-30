//let and const are blocked scope.

//Block is defined by curly braces and is known as compound statement. i.e to group statement together.
//We need to group statement together so that we can use multiple statement where js expects only 1 statement.

if (true) {
  var a = 10;
  console.log(a);
}

//Block scope:- Variable and function we can access inside this block.
var a = 100;
console.log(a); //100
let b = 30;
let c = 40;
console.log(b); //30
console.log(c); //40
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a); //10
  console.log(b); //20
  console.log(c); //30
}
//In case of hoisting above, b and c will go inside the block scope and assigned undefined. The a will be pushed to global scope.
//We cant access let and const outside the block.
console.log(a); //10
console.log(b); //ReferenceError: b is not defined, but after putting let b at top it will show 30
console.log(c); //after putting let c at top it will show 40

//Shadowing :- If we have var "a" outside the block the value outside block will be printed and once it crossed theblock the variable a
//will be shadowed.

//In case of let and const, outside the block the value under the Script scope will be retained and inside the block the value
//under Block scope will be used.

//Illegal shadowing:- we cant do something like below where we change the typeof variable from let to var but vice versa is possible
//Thisis because of the lexical scope concept

let a = 2; //This is under script
{
  var a = 20; //This is block scoped
}
//SyntaxError: Identifier 'a' has already been declared

var a = 2;
{
  let a = 20;
}
