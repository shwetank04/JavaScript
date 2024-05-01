const cart = ["shoes", "pants", "kurtas"];

//Consumer part where it consumes the promise

const promise = createOrder(cart); //orderID

console.log(promise); // The promise will be in pending until 5 seconds and then we get the data

promise
  .then(function (orderId) {
    //As soon as we get the data , the call back function was called and we get the orderId
    console.log(orderId);
    return orderId;
  })
  // catch(function (err) {
  //   console.log(err.message); //Only handles the first promise and the below will still execute
  // });
  .then(function (orderId) {
    return proceedToPayment(orderId); // The response of this will be passed to next callback function in the chain
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })

  //putting catch at the last will catchany error for any of the promise and all flow will end.
  .catch(function (err) {
    console.log(err.message);
  }); //Attaching the failure callback in case promise returns reject

//Producer part where we will create the createOrder function to return the promise
function createOrder(cart) {
  //Below is the way to create promise using promise constructor
  const pr = new Promise(function (resolve, reject) {
    //Logic of create orderfunction where it takes cart item and creates order
    if (!validateCart(cart)) {
      //rejecting the promise using reject
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    //Making the promise success
    //Making fake delay to show how it behaves in practical scenario
    setTimeout(function () {
      resolve(orderId);
    }, 5000);
  });
  return pr;
}

function validateCart(cart) {
  // return false; // for rejecting the promise
  return true;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payemnt successful");
  });
}
