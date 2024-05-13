//4 Promise apis which are majorly important:-

//1. Promise.all()
//2. Promise.allSettled()
//3. Promise.race()
//4. Promise.any();

//------------------------------------------------------------------------------------------------>

//-------//Promise.all() :-
//If we have parallel api calls to get the result. It takes array of promises as input. It will make 3 parallel api calls
//below and return the result.
//Promise.all([p1,p2,p3])

//p1 takes 3 sec to get the result
//p2 akes 1s
//p3 takes 2s
//All of them are success. In that case, the outout of Promise.all will be an array with result of the calls [ val1,val2,val3 ]
//The final Promise.all will take 3 sec and will give the above result as it will wait for all of them to be finished.

//What if any of the Promise above gets rejected.
//Promise.all([p1,p2,p3]), this time once of the promise will get rejected.
//p1 3 sec
//p2 1 sec...After 1 sec it gets rejected
//p3 2s
//As soon as any of the promise gets rejected the Promise.all will throw error with output same as what is returned from p2.
//It will not wait for other promise to be success/fail.

//------------------------------------------------------------------------------------------------>

//--------//Promise.allSettled([p1,p2,p3])
//If all of them gets success, with 3s,2s,1s, we will get the results [val1,val2,val3]
//In case p2 gets rejected in 1s, it will wait for all promises to be settled and after 3 sec, it will gets settled.
//[val1,err2,val3]

//------------------------------------------------------------------------------------------------>

//........//Promise.race([p1,p2,p3])
//As the name suggests, the promise which finishes first will be the winner here.
//p1 - 3s, p2- 1s, p3-2s, as soon as first promise is resolved, i.e after 1 sec it will give us the result as (val2)
//It gives value of the first settled promise.
//But what if the p2 fails after 1s, then error will be thrown and the result will be of first settled promise that is error.
//Here success, failure doesnt matter.

//------------------------------------------------------------------------------------------------>
//.......//Promise.any([p1,p2,p3])
//It will wait for the first promise to get successfull,
//p1 - 1s gets rejected, p2 - 3s, p3 - 5s, then here the result of p2 is returned after 3 seconds
