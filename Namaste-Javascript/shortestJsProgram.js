//Even if we dont write anything, JS creates GEC and setup memory space.
//It also creates window which contains lot of variable and functions which is given to us by JS.
//It also creates a this keyword. => when we do this, at global level it points to window object.
//window is nothing but a global object which is created with GEC.
//Anything which is not inside any function is in global space.

var a = 10;
// console.log(window.a);
// console.log(this);
