//Js runs everywhere because of JS runtime env.

//Under JS Runtime Env:--->
//JS engine, API, Microtask queue, event loop, callback queue.

//Every browser has JS Runtime Env. In browser the APIS under JRE is called localstorage.

//setTimeout is one of the api which is present in JRE of browser as well as nodejs but inside they are implemented differently.

//JS ENGINE:------> EXAMPLE(GOOGLE V8 ENGINE)
//It takes code as input and then it goes through 3major steps:-
//1. Parsing :- code is broken down into tokens and converted into abstract syntax tree.
//2. Compilation :-
// - Interpretter :- It takes the code and start executing line by line, The code is fast as it doenst have to wait for the code to be compiled.
// - Compiler:- Code is compiled before executing and new code is formed which is optimised version and then its executed. We have more efficiency here.
// JS can behave both as interpretter and as compiler.
// -- JST(Just in time compilation) :-- JS engine can be a interpretter or as compiler and can use both.

//:- AST goes to interpretter and then it goes to execution phase and while it is doing so it takes help of compiler to
//optimize the code as much as it can.

//3. Execution :- This is not possible without the memory heap(place where all functions and variable are assigned
// memory) and the call stack. The garbage collector tries to free us memory space and uses mark and sweep algorithm.
