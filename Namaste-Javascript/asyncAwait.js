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
function getDataPromise() {
  p.then((res) => console.log(res));
  console.log("Namaste Javascript");
}
//Namaste Javascript will be printed first here and then promise will be resolved after 10 seconds

//How async await works behind scene?
//Example of async await
//Error Handling
//Interviews
//Async await vs Promise.then/ .catch
