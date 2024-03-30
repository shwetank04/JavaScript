function a() {
  console.log(b);
  var d = 10;
  c();
  function c() {
    console.log("Inside c " + b);
    console.log(d);
  }
}

var b = 10;

// console.log(d); //Error that d is not defined.

a(); //It will print 10 and also "Inside c 10" as well as the value of d
//First it wil check if b exist in local memory or not. That means first it will check under function a and if its not there
//then it will check in global memory.

//Scope :- where you can access specific variable or function. its directly dependent on lexical environment.

//For above Program :------------->
//-> Under call stack, GEC is created and its pushed under call stack.
//->a will have function reference. In first phase. Now under second phase EC is created for a. Under EC of a we will reserve memory
//for b and c. Now under EC of a, second phase, b is assigned 10 and c is invoked by creating new EC.

//whenever a EC is created a lexical env is also created. Lexical env is local memory along with the LE of its parent.
//Lexical means hierarchy. Ex :- C function is lexical inside a() and a() is lexical inside global.

//Along with variabe and function in memory space we also have a reference to lexical env of its parent. So if C has a lexical env
//a then a will have lexical of global. so C also has access to global now.

//The above method of finding the variable in multiple lexical env is called scope chain.
