//what is async ? :- Keyword used before function to create an async function.

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved value");
  }, 10000);
});

//Before async await
function getDataPromise() {
  p.then((res) => console.log(res));
}

//Async Function :- Always returns a promise, even if we return non promise it will wrap inside a promise and return it.
async function getData() {
  // return "Namaste";
  return p;
}

const data = getData();
data.then((res) => console.log(res));

//Using async await instead of promise
async function handlePromise() {
  //what is await ? :- used in front of promise. The
  const val = await p;
  console.log(val);
}

handlePromise();

//Difference in promise and async await

//Older way of handing promise
function getDataPromise1() {
  p.then((res) => console.log(res));
  console.log("Namaste Javascript");
}
//Namaste Javascript will be printed first here and then promise will be resolved after 10 seconds as Js Engine will not wait
//for promise to be resolved.

//Now with async await
async function getAsyncPromise1() {
  console.log("Hello world");
  const data = await p;
  console.log(data);
  //printed after 10 seconds
  console.log("Namaste 2");
  //It will print promise value and then only Namaste 2.

  const data1 = await p;
  console.log(data1);
  console.log("Namaste 3");
  //This will print once the above code is printed and wont wait again as its same promise and we are resolving it twice.
  //In case if we have kept some other promise with 5 sec in data1 then, data1 will be printed just after the data is printed
  //As it had to wait for 10 sec for the above code to execute first

  //In case data takes 5 sec and data1 takes 10 seconds then, after 5 sec first promise is printed and then after another
  //5 seconds, the data1 is printed.
}

//How async await works behind scene?
getAsyncPromise1();
//When above function is executed it goes line by line.
//There are 2 promise, which are waiting to get resolved. Async promises are registered.
//Once we call getAsyncPromise1, it will be come under call stack. It will first print hello world.
//The getAsyncPromise1 execution will suspend once it sees the await and it move out of call stack once the data is resolved.
//Now after data is resolved, the getAsyncPromise1 will come again in call stack and will start again where it left and
//log namaste 2. Same goes with data1.

//Example of async await
//Error Handling
//Interviews
//Async await vs Promise.then/ .catch
