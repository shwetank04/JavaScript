var x = 1;
a();
b();

console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

//OutPut :-> 10,100,1
//In first phase :-> x will be undefined and a and b will point to function code. This will in our GEC
//In second phase x will be replaced with 1, then the code moves to a();, where function is invoked and new EC is created,where x will have new value as undefined under it.
//In second phase of this EC, the value 10 will be added under x and line 9 will get executed and 10 will be printed and EC wil be deleted.

//Same steps are followed by b() and 100 is printed.

//Once the above steps are done, code will go to line 5 and it will print 1 from global execution context.
