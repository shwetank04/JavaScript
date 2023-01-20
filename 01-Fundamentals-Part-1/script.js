//console log example
let js = "amazing";
  console.log("Hey you will get there dont worry");
let firstName = "Shwetank"
console.log(firstName)
//Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// Log their values to the console
let country = 'India'
let continent = 'Asia'
let population = '1.2 Billion'
console.log(country,continent,population);
//type of
console.log(typeof country);

// 1.Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2.Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3.Try to change one of the changed variables now, and observe what happens.
let language = 'Hindi';
const dob = '1998'
language = 'English'
// dob = 1999
console.log(language);
console.log(dob);

// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese
let countryTotal = 1500000;
let half1 = 1500000/2;
let half2 = half1;
countryTotal++;
let finland = 60000000;
console.log(countryTotal);
console.log(countryTotal>finland);
console.log(countryTotal<330000000);

//challenge 1 and 2
const markMass = 78,markHeight=1.69;
const johnMass=92, johnHeight=1.95;

const markBMI = markMass/markHeight **2;
const johnBMI = johnMass/johnHeight **2;
if(markBMI > johnBMI){
    console.log(`Marks BMI ${markBMI} is higher than John's`);
}
else{
    console.log(`Johns BMI ${johnBMI} is higher than John's`);
}
//Template Literal
const first = 'shwetank';
const last = 'sudhanshu';

const full = `My full name is ${first} ${last}`;
console.log(full);

//equality
const ageNew  =18;
if(ageNew === 18){
    console.log('you just became a adult');
}

//promt
const fav = prompt("Whats your favourite player");
console.log(fav);

//Logical operator
const hasDriverLic = true;
const goodVision = true;
console.log(hasDriverLic && goodVision);

//Coding challenge 3
const dolphinAvg = (96+108+89)/3;
const koalasAvg = (88+91+110)/3;
if(dolphinAvg>koalasAvg){
    console.log('dolphin wins');
}
else if(koalasAvg>dolphinAvg){
    console.log('koalas wins');
}
else{
    console.log('draw');
}

//conditions
if(dolphinAvg>koalasAvg && dolphinAvg>=100){
    console.log('dolphin wins');
}
else if(koalasAvg>dolphinAvg && koalasAvg>=100){
    console.log('koalas wins');
}
else if(koalasAvg == dolphinAvg && koalasAvg>=100){
    console.log('draw');
}

//switch 
const day ='a';
switch(day){
    case 'monday':
        console.log('its momday');
        break;
        case 'tuesday':
        console.log('tuesday')
        break;
        default:
        console.log('default statement');
}

//ternary
const adultAge = 18;
const res = adultAge >=18 ? console.log("passed"): 
console.log('failed');

const bill = 100
const tip = 50<bill<300 ? (bill*15)/100 : (bill*20)/100;
console.log(bill,tip,bill+tip);

