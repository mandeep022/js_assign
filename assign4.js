// tip calculator program
const myVar= process.argv;

let Arr2=[];

//passing mealcost and tip-percent from command line
let myMealCost = Arr2.push(Number(myVar[2]));
let myTipPercent = Arr2.push(Number(myVar[3]));

const tipAmount = (Number(myVar[3]) / 100) * Number(myVar[2])

const totalOwing = tipAmount + Number(myVar[2])

const output = `Your meal was \$${Number(myVar[2])} + a ${Number(myVar[3])}% tip =${totalOwing}`

console.log(output)
