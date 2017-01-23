//using process.argv
const myVar = process.argv;

//creating an array
let Arr1=[];

//third value
Arr1.push(myVar[2]);

//console log third value
console.log(Arr1);

//converting the 3rd and 4th value to number
Arr1.push(Number(myVar[2]));
Arr1.push(Number(myVar[3]));

//adding both the values
let a= Number(myVar[2])+ Number(myVar[3]);

//console log the sum
console.log(a)
