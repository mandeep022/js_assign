// using process.argv
const myVar = process.argv;

//creating array
let Arr1=[];

//adding values to array
Arr1.push(Number(myVar[2]));
Arr1.push(Number(myVar[3]));

//console log the array
console.log(Arr1);

//adding the values to craete sum
let a = Number(myVar[2]) + Number(myVar[3]);

//checking the values using if-else
if(Number(myVar[2]),Number(myVar[3])<10)

{
    console.log('ENTERED VALUES ARE LESS THAN 10')
    
}

else if(Number(myVar[2]),Number(myVar[3])>10 && Number(myVar[2]),Number(myVar[3])<100)

{
    console.log('ENTERED VALUES ARE GREATER THAN 10 AND LESS THAN 100')
}

else if(Number(myVar[2]),Number(myVar[3])>100 && Number(myVar[2]),Number(myVar[3])<1000)

{
    console.log('ENTERED VALUES ARE GREATER THAN 100 AND LESS THAN 1000')
}

else

{
    console.log('ENTERED VALUES ARE GREATER THAN 1000')
}