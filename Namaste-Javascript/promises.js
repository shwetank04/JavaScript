//Promises are used to handle the async operations in js

//Before vs after promises

//E commerce website
const cart = ["shoes", "mobiles"];

//Before the promises
createOrder(cart, function () {
  proceedToPament(orderId);
});

//After the promises
const promise = createOrder(cart); //whenever this line is executed the createOrder api returns us a promise

//The promise is nothing but an empty object with some data value in it. This data value will hold whatever the createOrderApi
//will return. So basically the initial value of promise will be something like {data : undefined }. The program will go
//ahead with the execution and after sometime once createOrder api return some value then the promise object will be
//populated. It wont block the later part of the code.

//Now we are attaching callback function to the promise object.
//We can use then function to attach the callback function.
//The call back function will be autmoatically called once the promise object gets the data.
promise.then(function () {
  proceedToPament(orderId);
});

//Improvement over callback in promises :- In earlier solution we were trusting createOrder api but in case of promises
//we are attaching callback to a promise object.

const GITHUB_API = "https://api.githib.com/users/akshaymarch7";

const user = fetch(GITHUB_API); //we will get a promise object inside the user vairable

console.log(user); // Initial value will be Promise { <pending> }

//On chrome console it will first show as Promise {<pending>} but when we expand that it will sohow fulfillment :
//Reason :- when console.log is executed the promise is in pending state (the time when it was logged), but by the time we
// expand it, it populates and shows the current state of promise.

//Promise objects :-
//1. PromiseState :- example :- pending, fulfilled,rejected
//2. PromiseResult:- initial value undefined

//Attaching a callback
user.then(function (data) {
  console.log(data);
});

//promise data is immutable

//Promise chaining :-
const promise1 = createOrder(cart);
promise1
  .then(function (orderId) {
    return proceedToPament(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  });

//when we have lot of then in promise chain, we have to return as well under each promise
