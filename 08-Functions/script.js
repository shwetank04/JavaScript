'use strict';

//Default Parameters
const bookings = [];
const createBooking = function (flightNum, numPassenger = 1, price = 199) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 123, 800);

const flight = 'LH234';
const jonas = {
  name: 'shwetank',
  passport: 2345,
};

const checkIn = function (flightNum, passenger) {
  (flightNum = 'LH999'), (passenger.name = 'Mr' + passenger.name);
  if (passenger.passport === 2345) {
    console.log('Cehcked In');
  } else {
    console.log('Wrong');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//Higher Order Function
const transformer = function (str, fn) {
  console.log(`Transformed String:' ${fn(str)}`);
  console.log(`Transformer By: ${fn.name}`);
};
transformer('Js is best', upperFirstWord);
const high5 = function () {
  console.log('HI');
};
document.body.addEventListener('click', high5);

//Function Returning other Function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Shwetank');

//Rewriting above one using Arrow Function
const greet = greeting => name => console.log(`${greeting} ${name}`);
const greeterHey = greet('Hey');
greeterHey('Shwetank');

//Call and apply Method
const Indigo = {
  airline: 'Indigo',
  iataCode: '6E',
  booking: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}, name` });
  },
};

Indigo.book(239, 'Shwetank');
const spiceJet = {
  airline: 'spiceJet',
  iataCode: '6E',
  booking: [],
};

const book = Indigo.book;
book.call(Indigo, 23, 'Sarahs');

const flightData = [583, 'Shwetank'];
book.apply(Indigo, flightData);

//Bind Method
// book.call(Indigo, 23, 'Sarahs');
const bookEW = book.bind(Indigo);
bookEW(24, 'Sudhanshu');

//with event listener
Indigo.planes = 300;
Indigo.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', Indigo.buyPlane.bind(Indigo));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const adVAT = addTax.bind(null, 0.23);
console.log(adVAT(100));

//Rewriting above code
const addVat = function (value) {
  console.log(addTax(0.23, value));
};
addVat(100);

//Coding challenge 1
/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for 
each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like 
  this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT 
  POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 
    52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 
    'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, 
    using console.log(). This should be the default option. If type is 'string', display a string like "Poll results 
    are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' 
option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    this.answers[answer] += 1;
    this.displayResults();
  },
  displayResults: function (type) {
    if (typeof type === 'array') {
      console.log(this.answers);
    } else {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//Closure
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};
const booker = secureBooking();
booker();
booker();
