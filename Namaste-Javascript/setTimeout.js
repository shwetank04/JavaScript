//set timeout doesnt gurantee that the cb function will be called after exactly 5 seconds as it all depends on callstack

console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");

//blocking main thread for 10 sec
let startDate = new Date().getTime();
let endDate = startDate;

while (endDate <= startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("while expires ");

//As first step GEC is created and is pushed in call stack.
// The start is printed first
//The setTimeOut is registered in web api environment and it also starts a timer of 5000 ms and waiting for its turn to get
//executed once the timer expires.
//End is printed

//If we have 1 million line of code after the End which takes 10 seconds to run. In that case the GEC will be busy
// executing the code but the timer setTimeout was waiting for 5 sec ,but as the main thread is busy executing the code,
//the call back function is inside the call back queue and event loop is waiting for call stack to get empty.

//After only 10 seconds once the call stack gets empty the setTimeout is execued.

//setTimeout 0
setTimeout(function cb() {
  console.log("Callback");
}, 0);

//This will go in call back queue and wait for GEC to get executed.
