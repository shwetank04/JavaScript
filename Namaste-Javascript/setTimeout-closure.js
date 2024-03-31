function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 1000);
  console.log("Nameste Js");
}

x(); // It will print Namste javascrict and then 1 after 1 sec.
//Js will not wait for setTimeout to complete, and will move ahead with code execution.
//The setTimeout function forms a closure with the value of i and stores the call back function at some place and attach a timer
// to it. Once the timer expires it takes the function again and put it back to the call stack.

function y() {
  var i = 1;
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
y(); // This will print 6,6,6,6,6. it worked this way because of closure.
//The function will remember the reference of i.When loops runs first time it, makes a copy of function ,attaches a timer
//and also remembers the reference of i.Similarly these 5 copies of this function, all are pointing to same reference of i.
//Js doesn't wait for anything, it will run loop again and again. The setTimeout will store all this 5 functions, and js
//will move on. When the timer expired it was too late and the i value will become 6. and when thecall back function run the value
//of i is 6 and it prints the same.

//To fix above example:-
function z() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

z();
//let has a block scope, so for each and every loop iteration, i will a new variable all together and each time setTimeout is run
//the call back function has new copy of i with it.

//To use var for above example
function k() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i); //Everytime we call this close function with i, it creates a new copy of i.
  }
}

k(); //we want to have new copy of i,each and every time the loop is executed. we wrap the setTimeout inside the close
//function and we supply the new copy of i everytime by calling close function with i.
