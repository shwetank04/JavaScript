'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order received at time ${time} for address ${address}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here are the three ing ${ing1},${ing2},${ing3}`);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Patna',
  mainIndex: 2,
  starterIndex: 2,
});

const arr = [2, 3, 7];
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
//Switching variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Array
const nested = [2, 4, [5, 6]];
const [p, q, [r, k]] = nested;
console.log(p, q, r, k);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  fri: { open, close },
} = openingHours;

console.log(open, close);

//Spread Operator
const arrnew = [7, 8, 9];
const spread = [1, 2, ...arr];
console.log(spread);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 array
const menuJoin = [...restaurant.mainMenu, ...restaurant.starterMenu];

//Iterables: arrays,Strings,maps,sets but not objects
const str = 'Jonas';
const letters = [...str, ' ', 'S,'];

//Rest Patterns
const [l, m, ...others] = [1, 11, 3, 4, 5, 6, 7, 8];
console.log(others);

//1.objects
const { sat, ...weekdays } = restaurant.openingHours;

//2.Functions
const add = function (...numbers) {
  console.log(numbers);
};
add(2, 3);
add(2, 2, 2, 2);
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Coding Challenge 1
/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data.
 So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) 
create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field
 players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing
 all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of
 them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT
 using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with
 players from game.scored
*/

const [player1, player2] = [...game.players];
console.log(player1, player2);
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);
const allPlayers = [...player1, ...player2];
console.log(allPlayers);
const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
function printGoals(...nameOfPlayers) {
  console.log(`${nameOfPlayers.length} goals were scored`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

team1 < team2 && console.log('Team 1 is morelikelyto win');
team1 > team2 && console.log('Team 2 is morelikelyto win');

//For off Loop
const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const items of menus) {
  console.log(items);
}

//Optional Chaining
if (
  restaurant.openingHours &&
  restaurant.openingHours.mon &&
  restaurant.openingHours.mon.open
) {
  console.log(restaurant.openingHours.mon.open);
}

console.log(restaurant.openingHours.mon?.open);

//The for of Loop
const days = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat'];

for (const day of days) {
  const res = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(res);
}

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

for (const day of Object.values(openingHours)) {
  console.log(day);
}

for (const day of Object.entries(openingHours)) {
  console.log(day);
}

// Coding Challenge #2

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number 
(Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, 
  you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and 
the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the
 number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

let sum = 0;
for (const a of Object.values(game.odds)) {
  sum += a;
}
console.log(sum / 3);

for (const [p, q] of Object.entries(game.odds)) {
  const k = p === 'x' ? 'draw' : `${game[p]}`;
  console.log(`Odd of ${k}: ${q}`);
}

//Set
const orderedSet = new Set(['A', 'A', 'B']);
console.log(orderedSet);
console.log(orderedSet.size);
console.log(orderedSet.has('A'));

for (const order of orderedSet) console.log(order);

//Maps
const rest = new Map();
rest.set('name', 'shwetank');
rest.set(1, 'Shwetank');
console.log(rest);

for (const [key, value] of rest) {
  console.log(`${key} , ${value}`);
}
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the
 game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game
   has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from
 the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game
   has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min)
 of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
const events = new Set([...gameEvents.values()]);
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);
for (const [time, event] of gameEvents) {
  const half = time <= 45 ? 'First' : 'Second';
  console.log(`${half} Half : ${time} ${event}`);
}

//Strings
const airline = 'Indigo';
const plane = 'A320';

console.log(plane[0]);
console.log(airline.length);
console.log(airline.indexOf('d'));
console.log(airline.lastIndexOf('d'));

console.log(airline.slice(4));
console.log(airline.slice(3, 4));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B') {
    console.log(`You got the middle seat`);
  }
};
checkMiddleSeat('11B');

const passenger = 'jessica ann smith davis';
const captilizeName = function (name) {
  const splittedName = name.split(' ');
  let result = '';
  for (const first of splittedName) {
    let firstLetter = first[0].toUpperCase();
    result += firstLetter + first.slice(1) + ' ';
  }
  console.log(result);
};
captilizeName(passenger);
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the 
button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and 
continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
