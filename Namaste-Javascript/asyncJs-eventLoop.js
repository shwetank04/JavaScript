//JS is sync, single threaded language. It is having single call stack and its present inside the JS engine and all
//the code is executed inside call stack.

function a() {
  console.log("a");
}

a();
console.log("End");

//whenever a js code is run, a GEC is created and its pushed inside the call stack, and in first phase a will be stored.
//In case of a(), a new EC is created and is pushed inside the call stack and after execution the a EC is deleted.
//Later at last console.log("End") is executed and at last GEC is also deleted from call stack.

// Q. what if we wnat to execute code inside call stack after certain delay ????
// Ans :- call stack is inside JS engine, and this JS is inside the browser. We need access in call stack of all the
//features of browser, and we need some kind of connection. This is done by WEB APIS. example :- setTimeout(), DOM Apis,
//fetch(),localStorage, console,location.

//This is possible through global object (window). example :- window.setTimeout(). We can access it without window. as its
//available under global object of call stack.

console.log("start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");

//In above code the GEC will access console through window and start is printed. Now for setTimeout as well it will access
//the window and it has a callback function too which is registered in browser and as delay is passed the same is stored in
//browser, and it moves to the next line. Once everything is done GEC is deleted but the timer is still running in browser,
//and once its expired the CB function needs to be executed. But as the GEC is deleted, The EVENT LOOP and CALLBACK QUEUE
//comes to picture.

//The CBF is pushed inside call back queue after the timer expiration and then the event loop check the call back queue and
//puts in under call stack.

console.log("starts");
document.getElementById("btn").addEventListener("click", function cb() {
  console.log("Callback");
});
console.log("End");

//For above code GEC is created and pushed in Call stack. The code is executed and prints start and then next the addEvent listener
//is used by window DOM APIS and it fetches things from DOM. The addEventListener registers a callback and an event is
//attached to it. now the ENd is printed and GEC is gone. But the event listener stays in web apis env of browser.
//When the user clicks on button, the call back method sits inside the callback queue and it waits for the turn to get executed.

//The event loop job is to monitor call stack and call back queue and it takes the function from call back queue and puts it
//under the call stack

//The call back queue is needed because, if user clicks on button 5 times then we will have a queue, now the event loop
//will check the call stack is empty or not and pushes it inside and it empty the call back queue and all the event
//gets the chance one by one.

console.log("start");
setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});

console.log("End");

//Here we have setTimeout as well as fetch(returns a promise and the CB under it gets executed once promise is resolved)
//function. The console and setTimeout works as explained above. Now for fetch function, it registered a callback in
//web api environment. Once we get the data for fetch the CBF will go to MICROTASK QUEUE which has HIGHER PRIORITY.

//What can come inside microtask queue :- > All the function which comes through promises,mutation observer
//  will go inside microtask queue.

//Event loop will give attention to callback queue only if microtask queue is empty. Microtask can create microask
//under it and then task under callback wont get chance to execute and this is known as starvation of task inside the
//call back queue.
