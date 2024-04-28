//Good part of callback

//Bad part of callback
//1. call back hell
//2. Inversion of control

console.log("Namaste");

//It is job of setTimeout to execute this call back function after 5 seconds.
setTimeout(function () {
  console.log("delay");
}, 5000);

console.log("Javascript");

//E commerce website
const cart = ["shoes", "mobiles"];

//create order api
api.createOrder;

//proceed to payment
api.proceedToPayment;

//Only when order is palced, then proceed to payment and here callabck can help us to write the code here. When js execute
//the code, it will call only the createOrder API. Its now responsibility of createorder api to create an order and then
//call this function back

api.createOrder(cart, function () {
  api.proceedToPayment;
});

//after we proceed with payment we need to show order summary page and we used callback again here and now its responsibility
//of proceedToPament api to call the showOrderFunction

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary();
  });
});

//The above is a callback hell whereone calback is under another callback and the list goes on.
//This is also known as pyramid of doom

//Inversion of control :- You loose the contorl of code while using callback.

//Here we are blindly trusting createOrder api to execute the callback function. This very risky. The createOrderAPI can have
//lot of bugs and what if the call back function was never called or called twice.
api.createOrder(cart, function () {
  api.proceedToPayment();
});
