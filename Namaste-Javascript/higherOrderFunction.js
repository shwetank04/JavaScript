//A function which takes other function as argument or return a function is called higher order function

//call back function
function x() {
  console.log(x);
}

//higher order function
function y(x) {
  x();
}

const radius = [3, 1, 2, 4];

const calculateArea = function (area) {
  const output = [];
  for (let i of radius) {
    output.push(Math.PI * i * i);
  }
  return output;
};

console.log(calculateArea(radius));

//What if we have to calculate circumference
//We will generally write a new function to calculate the same
const calculateCircumference = function (area) {
  const output = [];
  for (let i of radius) {
    output.push(2 * Math.PI * i * i);
  }
  return output;
};

//What if we have to calculate diameter
//We will generally write a new function to calculate the same
const calculateDiameter = function (area) {
  const output = [];
  for (let i of radius) {
    output.push(2 * i * i);
  }
  return output;
};

//The problem here is that we are repeating the code

//To optimize we will use functional programming.

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i of this) {
    output.push(logic(i));
  }
  return output;
};

//To calculate area
calculate(radius, area);

//to calculate circumference
calculate(radius, circumference);

//Map is a higher order function and will give same result as of calculate function
radius.map(area);

radius.calculate(area);
