function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();

// A closure scope will be created for above code and inside, it forms a closure for variable under x lexical scope.
//closure:- A function, bundled with lexical scope.

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z); //return function y

z(); // it will print 7 even after x is removed from the EC after executing. Even after x no longer available
//They still remember their LS. When you returned y from x(), notonly function y was returned, it also returned the closure
//information of the same.

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}
var z = x();
console.log(z); //return function y and 100. The console.log(a), the reference of a is returned not the value.

function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z(); //Now we will have 2 closures. They will form a closure with scope of x and scope of x. The variable a will be in closure x
//and thevariable b will be in closure z. It will print 7,900
