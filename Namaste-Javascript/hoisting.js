getName();
console.log(x);
//Shwetank
// undefined;

console.log(getName);
console.log(getName2);

//[Function: getName]
//undefined -> getName2 will act as a variable if we write it in arrow function.

var x = 7; // If we remove this x, it will throw error as x is not defined. Aas we havent reserved any memory for that.

function getName() {
  console.log("Shwetank");
}

var getName2 = () => {
  console.log("Arrow GetName");
};

getName();
console.log(x);
//
// Shwetank
// 7

console.log(getName);
//[Function: getName]

console.log(getName2);
//[Function: getName2]
