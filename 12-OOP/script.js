'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   //Never do this
  //   this.calcAge = function () {
  //     console.log(2023 - this.birthYear);
  //   };
};

const Jonas = new Person('Jonas', 1998);
console.log(Jonas);

//Prototype
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

Jonas.calcAge();

Person.prototype.species = 'HOmo sapiens';
console.log(Jonas);

const arr = [3, 6, 7, 8, 0, 0];
console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
//coding challenge 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
car1.accelerate();
car2.accelerate();
car1.brake();
car2.brake();

//ES6 Classes
//class express
// const Personcl1 = class {};
//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  static hey() {
    console.log('hey there');
  }
}
const jessica = new PersonCl('Jessica', 1998);
console.log(jessica);
jessica.calcAge();

PersonCl.hey();

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

//Getter setter
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

//Object create
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
};
const person = Object.create(PersonProto);
person.birthYear = 1998;
person.calcAge();

//Coding challenge 2
class Car1 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }
}

const ford = new Car1('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.speedUS = 50;
console.log(ford);

//Inheritance
const Student = function (firstName, birthYear, course) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking Prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log('Introduce prototype');
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

//coding challenge 3
const Ev = function (make, speed, battery) {
  Car.call(this, make, speed);
  this.battery = battery;
};

Ev.prototype = Object.create(Car.prototype);
Ev.prototype.chargeBattery = function (chargeTo) {
  this.battery = chargeTo;
};

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.battery -= 1;
  console.log(`Tesla going at ${this.speed} with charge of ${this.battery}`);
};

const electric = new Ev('Tesla', 120, 23);
electric.chargeBattery(90);
electric.accelerate();

//ES6 Class inheritance
class Student1 extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }
}

const martha = new Student1('Martha', 2012, 'CSE');
console.log(martha);
martha.calcAge();

//Object.create Inheritance
const PersoProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steve = Object.create(PersoProto);
const StudentProto = Object.create(PersoProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
const jay = Object.create(StudentProto);
jay.calcAge();

//Encapsulations
class Account {
  //Public fields(instances)
  locale = navigator.language;

  //Private Fields
  #pin;
  #movements = [];
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected Property
    this.#pin = pin;
  }
  //Public methods
  //Public interface
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  //Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
console.log(acc1.getMovements());

//chaining
acc1.deposit(300).deposit(500).withdraw(35).withdraw(20);

//Coding challenge 4
class EvCl extends Car1 {
  #battery;
  constructor(make, speed) {
    super(make, speed);
  }
  chargeBattery(chargeTo) {
    this.battery = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.battery -= 1;
    return this;
  }
}

const rivian = new EvCl('Rivian', 120, 23);
