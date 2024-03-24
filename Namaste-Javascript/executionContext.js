var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);

console.log(square2);

//In first phase,  n ,square are added under Memory of EC and initial values of n is undefined and under square it stores the whole functn.
// square2 and square 4 will be undefined.

//In phase 2, the code execution phase, the value of n becomes 2, now when square2 is invoked, a brand new EC is created
//under Code of EC. This will again have Memory and code under it. Memory are allocatied to num and ans and the initial
//value of that will be undefined in phase 1. Under phase 2 now, the value of 2(argument) is passed to num(parameter)
// and the num*num is done under code of EC. The value is passed to ans in Memory. The return keyword now return the value
//of ans to the place where it was invoked which is line 6. The value of square2 now becomes 2. After returning the EC is
//deleted.

//Similarly the square4 operates in same way.

//The global execution also deleted once everything is executed.

//The call stack :-> It is a stack and everytime in bottom we have the Global execution context.Every execution context is kept under
// the stack and its moved out once deleted.
