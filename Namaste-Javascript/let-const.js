//let and const declarations are hoisted. These are in temporal dead zone for time being.

console.log(a); // Reference Error
console.log(b); //Undefined.
let a = 10;
var b = 100;
const c = 10;

//In first phase JS allocates memory to a and but b is in global scope with undefined and a is in script memory with undefined.
//Only after initialization of a, the value of a will be populated under Script with 10;

//Temporal deadzone is the time between the a was hoisted and when it was initialized. When we try to access the variable
//under temporal deadzone we get the reference error.

//Reference error, x is not defined:- This means js engine is unable to find in current scope so there was no reference.
//undefined :- Memory was allocated but its not initialized yet.
//Reference error, cannot access 'x' before initialization :- That means a is in temporal dead zone.

//The var b will be attached to window object but not a as let a is under syntax memory space and not under global.
//this.b = 100 but this.a = undefined. This is under first phase.

//Let is more strict than var, we cant do reclaration like let a = 10 and again let a = 100;

//const is more strict than let. Const is also stays in script memory space. We have to declare const when we initialize it. For
//let we can declare and initialize it later.

//Syntax error:- While not inilializing a const variable.
//Typeerror :- While assigning another value to const type.
//Reference error, cannot access 'x' before initialization :- That means a is in temporal dead zone.
