// Ternary Operator 
let marks = 20; 
let status  = marks > 50 ? 'pass' : 'fail';
console.log(status) ; 
// Syntax:
// condition ? exprIfTruthy : exprIfFalsy



/*
## Logical operators [with booleans]

 It was taught in Unit-1 Just check if students are able to solve these problems, move ahead. Else make sure that they understand it completely. It’s used a lot in react.

 */

// What will these expressions return:
let a = false;
let b = 0;
let c = null;

let z = a || b || c;

console.log(z); //null




let a1 = false;
let b1 = 'Vivek';
let c1 = 'Rishi';

let z1 = a1 || b1 || c1;

console.log(z1); //vivek






let defaultUser = "Vivek";
let user = "Akash"
console.log(defaultUser || user) //Vivek

// let defaultUser = false;
// let user = "Akash"
// console.log(defaultUser || user) //Akasah  


// What will these expressions return
let a2 = 'Prachi';
let b2 = 'Vivek';
let c2 = 'Rishi';

let z2 = a2 && b2 && c2;

console.log(z2); //Rishi 


let bankbalance = 100;
let accountactive = true;

(bankbalance > 0) && (accountactive) && console.log('active'); //active 


let bankbalance2 = 100;
let accountactive2 = false;

(bankbalance2 > 0) && (accountactive2) && console.log('not active');

let ans = (bankbalance2 > 0) && (accountactive2) && console.log('not active');

let ans2 = (bankbalance2 > 0) && undefined && console.log('not active');

console.log(ans+"\n"+ans2) // false  \n  undefined 
