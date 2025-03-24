//declare or define a variable called firstName
let firstName; 

// initialize or assign value to a variable
firstName = 'John'

// declare & initialize | define a variable and assign a value
let lastName = 'Smith';

// re-assign value to a variable
firstName = 'Will'

// Access or showing or logging or looking up the variable content
console.log(firstName, lastName)



// Interview . What all types of values can be assigned to variables?
// Primitive values that can be assigned to variables
let age = 30; // Number  - int or float
let city="Ranchi"; // String  -- character or string 
let isMarried = false; // Boolean   --0/1/true/false /"" /"space"
let vlaue = undefined; //undefined  - only declaration basically ; 
let middleName = null; // Null  --declared but assigned with null  
let symbol = Symbol('id'); // Symbol
let bigIntNumber = 9007199254740991n; // BigInt

console.log(); 

// Non-primitive reference types that can be assigned to variables
let person = { firstName: 'John', lastName: 'Doe' }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
let greet = function(){ console.log('Hello'); }; // Function

console.log(greet)
console.log(greet()) //why console.log +"\n" undefined at output ... bcs function always return undefined bydefault.  



