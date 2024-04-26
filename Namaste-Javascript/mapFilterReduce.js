const arr = [5, 1, 3, 2, 6];

//Map
//Used to transform an array

//Double
let doubleArr = arr.map((arr) => arr * 2);

//Triple
let tripleArr = arr.map((arr) => arr * 3);

//Binary
let binaryArr = arr.map((arr) => arr.toString(2));

//Filter
//To filter the values inside an array

let oddArray = arr.filter((arr) => arr % 2 != 0);

//Reduce
//To reduce an array to get a particular result like sum or max
const sum = arr.reduce((accumulator, current) => {
  accumulator = accumulator + current;
  return accumulator;
}, 0);

const maxValue = arr.reduce((accumulator, current) => {
  if (current > accumulator) {
    accumulator = current;
  }
  return accumulator;
}, 0);

const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "akshay", lastName: "saini", age: 26 },
];

//List of full names
const output = users.map((users) => users.firstName + " " + users.lastName);

// { 26 :2}
const ageTotal = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(doubleArr);
console.log(tripleArr);
console.log(binaryArr);
console.log(oddArray);
console.log(sum);
console.log(maxValue);
console.log(ageTotal);
