//Function Basic

//function declaration
function logger(){
    console.log("Function buddy");
}
logger();

function foodProcessor(apple,orange){
    const juice = `Juice with ${apple} apples and ${orange} oranges.`;
    return juice;
}

const returnValue = foodProcessor(1,2);
console.log(returnValue);

//Function Expression

const agevalue = function calcAge1(birthYear){
    const age = 2023-birthYear;
    return age;
}

console.log(agevalue(1998));

//Arrow Function
const calcAge3 = (birthYear) => 2023 - birthYear;
console.log(calcAge3(1998));

const yearUntilRet = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 65-age;
    return retirement;
}
console.log(yearUntilRet(1998));

//coding challenge 1
const avg = (a,b,c) => (a+b+c)/3;
const dolphinAvg = avg(44,23,71);
const koalasAvg = avg(65,54,49);

function avgResult(dolphinAvg,koalasAvg) {
    if(dolphinAvg >= 2*koalasAvg){
        console.log(`Dolphin win ${dolphinAvg} vs ${koalasAvg}`);
    }
    else if(koalasAvg >= 2* dolphinAvg){
        console.log(`Koalas win ${koalasAvg} vs ${dolphinAvg}`);
    }
    else{
        console.log('No one won the game');
    }
}

avgResult(dolphinAvg,koalasAvg);

//Arrays
const friends = ['Shwetank','Sushant',123];
const year = new Array(1991,1992,1993);

console.log(friends[0]);
const first = 'shwetank'
const mix = [first,'age','name',22];

friends.push('sudhanshu');
friends.pop('Shwetank');
friends.unshift('abc');
console.log(friends);

//coding challenge 2
const billValue = (bill) => bill>50 && bill<300 ? bill *0.15 : bill*0.2;

const result = billValue(100);
console.log(result);

const bills =[125,555,44];
const tips = [billValue(bills[0]),billValue(bills[1]),billValue(bills[2])];
console.log(tips);
const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(total);

//Object and object methods
const jonas = {
    firstName:'Jonas',
    lastName:'Sudha',
    birthYear:1998,
    age: 2023-1998,
    job:'software',
    friends:['Kakarot','vegita'],
    hasDriver: true,
    calcAge: function() {
        return 2023-this.birthYear;
    }
}
jonas.location = 'patna';
jonas['pin'] = 800012;
console.log(jonas);
console.log(jonas.firstName);
console.log(jonas['firstName'])
console.log(jonas.calcAge())

//challenge 3
const markMiller = {
    fullName: 'Mark Miller',
    mass:78,
    height: 1.69,
    calcBMi: function() {
        return this.mass / this.height **2;
    }
}

const johnSmith = {
    fullName: 'John Smith',
    Mass:92,
    height: 1.95,
    calcBMi: function() {
        return this.Mass / this.height **2;
    }
}

const markBMI = markMiller.calcBMi();
const johnBMI = johnSmith.calcBMi();
if(johnBMI>markBMI){
    console.log(`Johns BMI ${johnBMI} is higher than Marks BMI ${markBMI}`);
}
else{
    console.log(`Marks BMI ${markBMI} is higher than Johns BMI ${johnBMI}`);
}

//for loop
for(let i=1;i<=10;i++){
    console.log(`Lifting weights repetition ${i}`)
}

//continue and break

//Only Strings
for(let i=0;i<friends.length;i++){
    if(typeof friends[i] != 'string') continue;
    console.log(friends[i],typeof friends[i]);
}

//break once number is found
for(let i=0;i<friends.length;i++){
    if(typeof friends[i] == 'number') break;
    console.log(friends[i],typeof friends[i]);
}

//while loop
let rep =1;
while(rep<=10){
    console.log(`Hey ${rep}`);
    rep++;
}

//challenge 4
const billArr = [22,295,176,440,37,105,10,1100,86,52];
const tipsArr = [];
const totalTips = [];

for(let i=0;i<billArr.length;i++){
    const billRes = billValue(billArr[i]);
    tipsArr.push(billRes);
    const total = [tipsArr[i]+billArr[i]];
    totalTips.push(total);
}
console.log(tipsArr,totalTips);
