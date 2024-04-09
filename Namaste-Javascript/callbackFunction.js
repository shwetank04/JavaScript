//what is callback function in js.

//:-------> A function called in other function is called call back function.

setTimeout(function () {
  console.log("timer");
}, 5000); // The fucntion called in setTimeout is also a callback funcion,where its called after a certain time

function x(y) {
  console.log(x);
  y();
}

x(function y() {
  console.log(y);
}); //y over here is the callback function. We pass the y to x and then its up to x when it wants to call
//the function y

//Output: -[Function: x]
// [Function: y]
// timer;

//In above program x and y will be added in call stack and once it gets executed, it will be cleared from the call stack
//and now after 5 sec the setTimeout will be added over there. Everything is executed in call stack and as js is single
//threaded env, if anything blocks call stack it will block the main thread. Thats why callback function is useful as
//it makes us use async operation where in setTimeout is called later in the code and doesnt block the main thread.

function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked", ++count);
  });
}

//-->In above code the function xyz will be in call stack and it forms a closure with the event listener method
//and will increase the count as it has access to count.

// --------------------------------------------------------------------------------------------------------------------->

//garbage collection and removeeventlisteners. ---> why do we need to remove event listener ?

//:---> Event listener are heavy, it takes memory and it forms a closure and even if the call stack is empty its not
//freeing up the memory where closure is stored.
